# Harness 合同对照

**核对日期：** 2026-10-01

这份资料只记录 Team 质量审视使用的 Harness 一手事实，不定义 Team 行为。

## 1. 生命周期

Harness `docs/agent-lifecycle.md` 把 `agent/*` 作为 live coordination API，把 `session/event` 作为 durable replay facts。`agent/pre-step` 的返回值是权威决定；`agent/turn-stopping` 是 serial terminal checkpoint；`agent/request-error` 可以在同一个 open step 内返回 retry。

对 Team 的结论：

- context admission gate 和 pressure policy 放在 `agent/pre-step` 是正确 seam；
- rollover intent 必须在成功 `tool/result` 已进入 Session log 后执行，当前 context engine 方向正确；
- Recovery 如果只监听 `agent/error`，必须解释它如何取得 request-level structured failure，否则会退化成 message parsing；
- 对任何在 `agent/*` 事件之后做的外部副作用，都要有 durable intent 或可重试 reconciliation，不能把 live event 当作 durability。

## 2. Session 和 Persistence

Harness `docs/subsystems/session.md` 定义 Session 是 append-only event log，模型 history 从 log 派生。`docs/subsystems/persistence.md` 定义每个 stored Session 通过 `SessionHandle` 读写，`flush` 才是 crash durability barrier，write ownership 由 Handle 持有。

对 Team 的结论：

- Team 不应该把模型上下文复制进 ledger；当前 handoff prose 留在 Session log 是正确的；
- Team 自己的 stored-session reader 适配了 Handle lifecycle，是合理的 deep module；
- `workspaceRegistry.archiveSession()`、Session disposal、private memory 删除不是同一个 transaction，Team 必须把失败窗口视为真实状态，而不是假设 ledger commit 已包含这些效果；
- `sessionId` binding 的 durable transition 和 live Agent handle 的 activation 是两个 commit point，恢复逻辑必须以 ledger intent 为准。

## 3. Remote

Harness `docs/cookbook/adding-a-remote-api.md` 规定：

- Host service 通过 `TypertRemoteService` + `@Remote` 暴露；
- 跨 Remote 的预期失败用 `RemoteError`；
- code 在 producing package 中声明，details 通过 declaration merging 传输；
- Client 按 `result.ok` 和 `error.code` 分支，不靠 `instanceof` 或自然语言；
- 未分类异常才由 Gateway 归为 `gateway/internal`。

对 Team 的结论：

Team 当前“正常协作拒绝使用 result union、系统/资源错误使用普通 Error”的分法本身可以保留，但普通 Error 不适合作为跨 Remote 的稳定协议。下一步应把有限的稳定失败 code 化，而不是把全部内部异常包装成 code。

## 4. Slot 与 Client

Harness `docs/subsystems/slots.md` 和 `packages/client/AGENTS.md` 规定：

- parent 的 `children` 是 declaration + authorization + render authority；
- 其他插件用 `ctx.slots.inject()` 等待 declaration lifetime；
- components 不接触 `ctx`，只接收 owner props、store、inject face 和 public hooks；
- browser data 不应在 feature component 里另建 subscription/store；
- `main` 是 keyed seat，shadowing 是有意替换，不是额外并列 renderer。

对 Team 的结论：

Team 当前 `main` 的 `conversation` key、sidebar shadows、`ctx.slots.inject()` 和纯 props components 符合机制。Member Session restoration 的脆弱点来自 Harness public selection API 不足，不应通过复制 Shell/private UI 解决。

## 5. Storage / Domain

Harness `docs/subsystems/storage.md` 的 Domain write 顺序是：backend durability → in-memory mutation → `domain/changed`；一个 Domain handle 的 caller 负责 close，backend 不替 caller 排序 concurrent writes。

对 Team 的结论：

- `AgentTeamLedger.enqueue()` 是当前唯一 writer ordering owner，合理；
- `KvTable.put()` 成功后再 `apply()`，符合 storage contract；
- `AgentTeam` operation 提交成功后才 emit Client/Agent notifications，符合 commit-point rule；
- 但 Team operation 后的 Workspace/Session/filesystem effects不在 Domain transaction 内，需要自己的 durable intent/reconciler。

## 6. Capability seam

Harness 的 capability seam 要求 Definition、Provider、Consumer 三个角色完整；一条 seam 只有一个实现时，不要预先增加 provider registry 或 generic adapter。

对 Team 的结论：

- `MemberRuntime` 的 tool restriction、skill provider、memory provisioning 是真实 Host-side seams，有独立状态和 Harness provider 语义；
- context-continuity 已有第二个 consumer 的价值，抽成独立包是合理的；
- 不应因为 `AgentTeam` 文件很大就增加 `services/`、`utils/`、`adapters/` 目录；应按状态 owner 和真实第二实现决定。

## 7. Tunables

Harness root rules 区分协议/安全边界和 deployment-varying tunables。Team 应逐项说明 context budget、recovery delay、retry limit、timeline limit、attachment cap 哪些是固定产品协议，哪些应该进入 Host Config。当前这是分类缺口，不是要求马上配置化。
