# 失败、恢复与 Remote 合同

**核对日期：** 2026-10-01
**状态：** 当前实现与 Harness 合同的对照；不代表已接受的重构方案。

## 1. Harness 的两级模型请求失败

当前 `deepseek-harness/packages/core/agent-loop/src/agent.ts` 的请求失败顺序是：

```text
LLM stream finish { kind: 'error', failure: LlmFailure }
  → agent/request-error(failure, retryPolicy)
      ├── listener returns { kind: 'retry' }
      │     → same step retries; no terminal agent/error for this attempt
      └── no retry action
            → throw new LlmError(failure.message, failure.code, failure)
            → agent/error(error: LlmError)
            → turn/end reason { kind: 'error', error: failure }
```

`LlmFailure` 至少包含 `message` 和稳定 `code`，可带 `status`、`providerRetryAfterMs`、`requestId`。终止路径创建的 `LlmError` 会保留同一份 `.failure`，因此结构化事实没有丢失；但 `agent/error` 的公开事件类型只把它声明为 `error: unknown`，调用方需要自己从错误对象取出结构化字段。

## 2. Team 当前有两个不同的恢复策略

### 请求级 pressure recovery

`AgentTeam` 在每个 Member scope 上监听 `agent/request-error`，交给 `PressurePolicyCoordinator.onRequestError()`。它负责 context-window overflow 的 bounded compact-and-retry，以及硬限制前后的压力处理。它必须保留在 request-error，因为只有这个事件能够在同一个 step 关闭前返回 `{ kind: 'retry' }`。

### Turn 级 transient service recovery

`AgentTeam` 在 root 上监听 `agent/error`，把错误 message 写入进程内 `memberFailures.runtime`，再交给 `RecoveryCoordinator`。它负责在一个 terminal turn error 后延迟 steer continuation；不能把它改成 request-error 的 retry，否则“同一请求重试”和“下一轮继续工作”会混成一个动作。

当前问题是 `agent/error` listener 只做：

```ts
const message = error instanceof Error ? error.message : String(error)
classifyRecoverableError(message)
```

所以终止的 `LlmError.failure.code/status` 没有进入 Team 的自动恢复分类；Team 退回 `/fetch failed/`、`/429/`、`/503/` 等 message pattern。普通工具异常和非 LLM 错误也会经过同一个 listener，因此不能简单把所有 `agent/error` 都当作结构化 provider failure。

## 3. 推荐的窄修复方向

先在 Team 内部增加一个 failure normalization/classification seam，不改变 Harness：

```text
agent/error unknown
  → 若为本进程/跨包可识别的 LlmFailure snapshot，读取 code/status/retry-after
  → 否则保留普通 Error 的窄文本 fallback
  → 输出 Team recovery kind 或 manual
```

约束：

- `agent/request-error` 仍只负责当前 step 的 context/pressure retry；
- `agent/error` 只在 terminal turn failure 后创建 Recovery episode；
- `CONTEXT_WINDOW_EXCEEDED`、认证、quota 等不可由普通 delayed wake 解决的 code 不进入 transient recovery；
- 普通 plugin/tool error 没有结构化 LLM facts 时保持手动处理；
- 测试同时覆盖 `LlmError`、带 `failure` 的跨包错误副本、普通 Error 和不同 `status`，不再只用自然语言 fixture。

这是比“把两个事件合并”更小的设计变化：它复用 Harness 已有事实，只把 Team 当前已经拥有但没有读取的字段纳入决策。

## 4. Remote 失败边界

Harness Remote cookbook 的合同是：跨 Remote 的预期异常使用 `RemoteError(code, message, details)`；Client 读取 `RemoteResult.error.code`，不要解析 message。当前 Team 的正常协作门禁已经使用 result union：`unread_required`、`stale_revision`、`confirmation_required`。这类结果不是异常，不需要改成 RemoteError。

但以下 Host 失败仍是普通 `Error`：未知 Member/Workspace/Channel、附件不存在、Session 读取失败、preset composition 失败、Human profile 冲突，以及部分 lifecycle 不可用状态。它们通过 Remote 时不能提供稳定的 Team code/details；Client 现有路径也主要把 `error.message` 放进 UI 文案。

推荐先选两个需要调用方决策的路径做 vertical slice：

- `member-unavailable` / `session-unreadable`：Client 决定显示 unavailable、提供 restart，或停止重试；
- `attachment-not-found` / `attachment-invalid`：Client 保留草稿并要求重新上传。

不要把所有内部错误都包装成 RemoteError。没有 Client 行为分支的本地错误仍应保持普通异常；未分类的跨 Remote 异常由 Gateway 归为 `gateway/internal`。

## 5. Commit 后失败的可见语义

Team operation 的 ledger commit 在 Host side effect 之前。`emitCommitted()` 先发 commit 事件和 Client invalidation，再调用 `notifyMember()`。`notifyMember()` 在 Agent 已经被 dispose、inbox 不可写或 Agent 边界拒绝时会抛出；affected-member loop 没有统一吞并或转成“已提交但未通知”的结果。

因此一次调用可能出现：

```text
operation 已写入 ledger
  → projection 已更新
  → Client invalidation 已发出
  → Agent notification 失败
  → Remote promise reject
```

这与 DM 路径不同：DM 已经显式使用 `AgentTeamDmDeliveryError` 表示“已记录但未投递”，并把 DM history 作为恢复入口。普通 Inbox notification 目前没有同样清晰的结果语义。

第一步应是 failure-injection 测试，确认 Remote gateway 对这类 throw 的实际表现；第二步再决定是：

- 将通知降级为日志/诊断并保持 operation result 成功；或
- 返回稳定的“committed but delivery pending”结果；或
- 为需要重试的外部 effect 增加 durable intent。

不能在没有测试前直接把所有通知异常吞掉，因为 invariant/ledger divergence 等严重错误仍应可见。
