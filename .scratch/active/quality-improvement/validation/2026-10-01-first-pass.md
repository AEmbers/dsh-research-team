# 第一轮审计验证记录

**日期：** 2026-10-01
**范围：** scratch 研究资料和针对性测试；没有生产实现修改。

## 已验证

- `npm exec vitest run packages/agent-team/tests/attachments.spec.ts packages/agent-team/tests/recovery.spec.ts packages/agent-team/tests/member-lifecycle.spec.ts --reporter=dot`
  - 3 个测试文件通过；126 个测试通过。
- `npm run check:docs`
  - 28 maintained documents、28 bilingual pairs、5 page pairs、306 relative links、56 files inside heading ceiling，全部通过。
- `npm run typecheck`
  - Agent Team、model-facing tools、Client 三个 TypeScript 项目全部通过。
- `npm exec vitest run packages/agent-team/tests/agent-team.spec.ts packages/agent-team/tests/change-scopes.spec.ts packages/agent-team/tests/update-operations.spec.ts --reporter=dot`
  - 3 个测试文件通过；115 个测试通过；关键 operation projection、scope 和 update 路径通过现有测试。
- `git diff --check -- .scratch/active/quality-improvement`
  - 通过。
- `npm exec vitest run packages/agent-team/tests/attachments.spec.ts packages/agent-team/tests/member-lifecycle.spec.ts --reporter=dot`
  - 2 个测试文件通过；108 个测试通过。
  - 新增证据：路径附件 retry 会先增加 cache entry，再因 request payload collision 失败；`archiveMember` 的 Session archive 失败可由同 requestId retry 补偿；`clearMemberContext` 的 Session archive 失败不能由同 requestId retry 补偿。
- Harness Agent loop 源码/测试核对：
  - `agent/request-error` 在 terminal turn error 之前收到结构化 `LlmFailure`；
  - 返回 `{ kind: 'retry' }` 时仍在同一 step 重试；
  - 不 retry 时创建保留 `.failure` 的 `LlmError`，再发 `agent/error`；
  - `agent/error` 是普通 emit，Team 当前 listener 只读 message。
- Cordis Events 源码核对：普通 `ctx.emit()` 同步调用 listener，不自动捕获同步 throw；Team `emitCommitted()` 中的 `notifyMember()` throw 可以离开 Host Remote 调用。

## 已确认的代码事实

- operation ledger 有 28 个 durable operation kind；schema、validation、apply、scope、thread/inbox discovery、result 和 legacy policy 分散在多个入口。
- `putAttachment()` 接收 requestId，但用随机 attachment id 直接写 cache；当前没有 request-level replay。
- `sendMessageAs()`/`replyAs()` 在 ledger requestId lookup 前解析并复制 path attachments；同 requestId 重试会生成新 attachment id/path，再进入 stored message collision check。
- `updateMember()` 的 durable commit 先于 live capability apply；同 requestId 重试会从新 projection 得到相同 Member，当前差异判断可能跳过 live apply。
- `clearMemberContext()` 的 durable Session renewal 先于 retire/archive/activate；同 requestId 重试在已有 operation 时直接返回，不会补跑后续 effect。
- `removeMember()` 在启动时有 inactive cleanup retry；enabled activation、rollover 也有既有恢复逻辑；archived/suspended 没有统一 boot reconciliation。
- Team 自动 transient recovery 监听 `agent/error` 并按 message 分类；pressure compaction retry 监听 `agent/request-error`。两个事件有意承担不同生命周期，但 Team 尚未复用终止 LlmError 的 structured failure。

## 尚未定级

- Agent wake failure 在真实 Remote gateway/Client 中应显示为哪种用户结果，以及是否需要“committed but delivery pending”协议。
- `removeMember`、`suspendMember`、`updateMember` 的各类 filesystem、Workspace、Agent setup failure 是否会在实际 Harness backend 中留下可观测不一致；仍需要 failure injection 和重启测试。
- `clearMemberContext` 失败后的目标语义仍需决定：同 requestId 是否应成为可继续执行的 workflow，还是 durable renewal 一旦提交就转为后台 reconcile；当前两者都没有实现。
- attachment path retry 的最佳方案是 request-stable cache key、request-local preparation，还是明确取消 upload/request 幂等；需要产品契约决定。
- operation coverage matrix 是否足以阻止遗漏，还是确实需要某个 operation family descriptor；先做测试，不先做 registry。
- Remote code/details 的最小稳定集合，以及 Typert declaration merging 在 Team bundle 的最终生成产物；需先选一个 Client 行为路径做垂直验证。

## 当前不做

- 不修改 `packages/` 生产代码。
- 不继续按文件大小拆 `index.ts` 或 `ledger.ts`。
- 不修改相邻 `../deepseek-harness`。
- 不创建实现 tickets，直到上述未定级项目中至少一条高优先级路径完成故障注入并确认行为。
