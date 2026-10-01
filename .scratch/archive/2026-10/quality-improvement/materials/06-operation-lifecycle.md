# Operation 生命周期与分发表

**核对日期：** 2026-10-01
**范围：** 当前 Agent Team operation ledger 与 Host side effects。

## 1. Ledger append 协议

每个 durable command 由 `AgentTeamLedger.enqueue()` 加入一个串行 promise tail。一般路径是：

```text
request
  → command-specific requestId lookup / collision check
  → current projection authority + revision + authorization checks
  → construct immutable operation with sequence and previousOperationId
  → KvTable.put(operationId, operation)
  → apply(operation) to live Projection
  → return { value, committed: true }
```

requestId 查找不总是整条 command 的第一步。比如 `sendMessage()` 在 lookup 前先做 actor/workspace、Channel、body、mentions 处理；Host `sendMessageAs()` 更早会先解析/复制附件。每个 command 有专用 `assertSame...()` 比较器，operation envelope 的相同语义不是由一个统一 request hash 定义。

冷启动按 sequence 排序，经 `agentTeamOperationSchema` parse，再运行 legacy normalization/repair；`validateRecords()` 在 scratch `Projection` 上逐条校验并 `applyTo()`，`replay()` 随后再把记录应用到 live Projection。scratch/live Projection 是两份状态，但 validation 与 live replay 使用同一个 `applyTo()` 实现。

## 2. Host side-effect families

| Operation family | Durable facts | Host follow-up | 失败语义/恢复现状 |
| --- | --- | --- | --- |
| `team/initialized` | 固定初始化 operation | emit committed baseline | 无资源 side effect |
| Channel/Member/Task/Claim/Attention/Message/Thread projection writes | operation payload 含当前 replay 所需实体/delta | scoped change invalidation、受影响 Member Inbox hints | ledger commit 与通知分开；通知异常可在 commit 后拒绝 Remote |
| Member add/resume | Member durable state + session binding | private memory、Session activation、preset/runtime mount、Workspace attach | enabled Member 可 retry activation；非 ledger effects 可能部分完成 |
| Member suspend/archive/remove | lifecycle state + release/cleanup snapshot | dispose；archive Session；remove 时删 memory | `archiveMember`/`removeMember` 命中已有 request 后仍会重复跑 Host 清理；archive 无统一 boot reconcile，suspend 的外部效果也未统一收敛 |
| Member session renew/rollover | previous/new Session binding；rollover 额外保存 source cut/checkpoint/handoff sequence | retire、archive、activate、handoff/carried input delivery | rollover 有专门重建；Human clear 的同 requestId retry 在 renewal 命中后直接返回，不能补做失败的 retire/archive/activate |
| `team/member-updated` | 新的 handle/model/capabilities | live selection 更新；tools/skills 在 turn boundary 切換 | durable value 先提交；boot activation 可重建新配置，当前 Remote retry 是否会重做失败的 live apply 尚未验证 |
| `team/dm-sent` | recipient/sender/body/Workspace audit fact | 投递进 recipient Agent inbox | 投递失败使用 `AgentTeamDmDeliveryError` 明示“已记录未投递”；DM history 是持久恢复入口 |
| `team/thread-read` | watermark + Inbox delta | no shared projection invalidation | Thread read 本身不改共享投影、不通知其他订阅者 |
| composer attachment upload | 不写 Team operation | `writeAttachment()` 写 cache | request 含 requestId 但当前实现不用它，retry 产生新 cache id |
| Message path attachments | ledger 保存 metadata 和 cache path | Host 先 validate/copy path，再 append operation | ledger 未提交时缓存变孤儿；同 requestId 重试会在新 copy 后与 stored augmented body/attachment ids 不匹配 |

## 3. Operation kind 的手工分发面

当前 `AgentTeamOperation['kind']` 有 28 个成员。每种新增 kind 应逐项核对以下位置，不要假设 discriminated union 会替所有 runtime path 自动推导行为：

| 位置 | 当前 owner | 语义 |
| --- | --- | --- |
| Durable type | `types/operations.ts` | TS operation shape 和 closed union |
| Stored validator/normalizer | `spec.ts` + `ledger.ts` | Zod shape、旧 record normalization |
| Command construction | `ledger.ts` command methods | authorization、idempotency、revision 和 operation payload |
| Replay validator | `validateOperation()` | 对 prior projection 验证 actor、entity transition、delta consistency |
| Projection mutation | `applyTo()` | 更新 authoritative in-memory projection/indexes |
| Client invalidation | `changeScopesOf()` | Workspace/Channel/Thread scopes；明确 no-op operation 返回空 scope |
| Thread notification discovery | `touchedThreadRefs()` | 哪些 Thread 的 followers 可能受影响 |
| Inbox recipient discovery | `affectedMembersOf()` | 通常从 `inbox` delta 和 touched Thread followers 推导；少数 Workspace relation 有特殊处理 |
| Request idempotency | `assertSame...()` | 同 requestId 是否是同一操作 |
| Result mapping | `...Result()` | operation 到 public result 的映射 |
| Legacy repair | `normalizeOperation()` / `repairLegacyChannelCleanup()` | 历史 schema 和特定 projection repair |

不是每个 kind 都要在每个列表里有 case：例如 `affectedMembersOf()` 大量按 `inbox` delta 通用推导，read/DM 也明确 no-op。`changeScopesOf()`、`touchedThreadRefs()`、`applyTo()` 和 replay validation 已有穷尽保护；新增 kind 的剩余风险集中在 Zod schema、command 构造、request comparator、result mapper 和 legacy policy。契约测试应只补这些非穷尽面，避免把已有 exhaustive switch 再包装成 registry。

## 4. 已确认结论与待验证项

### 已确认

- 28 个 durable kinds 共享一个 ledger authority，但手工分布在 schema、command/request、validation、projection 和 legacy/result 语义中。
- 关键 projection/invalidation/replay switch 有 `assertUnhandledKind()` 或等价的穷尽保护；未被同一检查覆盖的是 schema、request comparator、result mapper 和 legacy policy。
- operation load 路径混合 current schema、parse-time normalization、依赖 prior projection 的历史 repair 和当前 projection build。
- Host commit notification 在 ledger commit 之后；`notifyMember()` 抛错会越过 `emitCommitted()` affected-members loop。
- `putAttachment.requestId` 当前没有出现在 upload 实现中；`sendMessageAs()` 在 ledger 幂等比较之前写 path attachment cache。

### 已由 failure injection 验证

- `archiveMember` 的 `workspaceRegistry.archiveSession()` 第一次失败后，Member 已 durable archived；同 requestId 重试会继续清理并完成 Session archive。
- `clearMemberContext` 的旧 Session archive 第一次失败后，Member 已 durable 换到新 Session，旧 handle 已 dispose；同 requestId 重试直接返回并报告 no active session，不能补做后续 effect。
- 带 `attachmentPaths` 的 send 重试会在 ledger requestId collision 之前复制新的 cache entry，随后因 payload 不一致失败，新增 entry 不被 ledger 引用。

### 仍需由测试证明

- 一个自动从 `AgentTeamOperation['kind']` 派生的 coverage test，能否用现有显式 no-op lists 覆盖遗漏而不引入第二套 registry。
- `removeMember`、`suspendMember`、`updateMember` 的外部效果失败后，boot/retry 是否能收敛到 durable Member state。
- `emitCommitted()` 的 Agent wake failure 在实际 Cordis dispatch/Remote gateway 下是否以 Remote error 暴露；若暴露，Client 是否会把它呈现成可重试且不会误导用户的状态。
- path attachment retry 的 requestId/body/metadata mismatch，需要固定为 Host integration test，覆盖 send 和 reply。
- `member-updated` capability live apply 失败后，同 requestId 重试是否再次执行 runtime effect；从当前实现的前后快照比较看，存在跳过可能，需 failure-injection 验证。
