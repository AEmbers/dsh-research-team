# Quality improvement decision snapshot

**Status:** decision snapshot ready; implementation is delegated through the tickets under `issues/`.
**Last checked:** 2026-10-01

## Goal

从当前 Team 源码和测试出发，识别能够减少一类重复缺陷的设计改进，而不是按文件大小做结构整理。与 Harness 的对照以相邻 checkout 的当前源码、测试和维护文档为准。

## Confirmed current model

- 一个 Host 维护一个 Agent Team；`packages/agent-team` 是唯一 Team authority。
- Team durable facts 只存于 append-only operation ledger；projection 是 ledger replay 的内存派生。
- Agent model history 归 Harness Session log；Workspace、SessionPersistence、Agent、Preset、Slot、Remote 都复用 Harness public services。
- model-facing tools 和 guidance 只通过显式 `team-member` preset 装配；Client 是 Human Team control surface。
- Member 有多条组合状态轴：ledger lifecycle/session binding、live handle、turn/preset state、capability runtime、context continuity、pressure、recovery 和 notification cache。
- ledgers 用 operation type union、Zod schema、validation、projection apply、change scopes、thread refs、request comparators、result mappers 和 legacy normalization 多处表达 operation 语义。
- Member operation 写入与 Session/Workspace/filesystem effects 不是一个 transaction。不同 lifecycle 已有不同恢复程度：inactive removal 有 startup cleanup，enabled Member 有 activation retry，rollover 有 durable envelope recovery；archived/suspended 没有统一 boot reconcile。

## 当前排序候选

1. **高：Member context renewal and lifecycle convergence。** 先让 durable Session binding 成为可恢复 desired state，再覆盖 archived/suspended/inactive 的启动清理；只有重复协调规则证明值得抽象时才引入窄 Supervisor。
2. **高：post-commit Remote failure semantics。** `emitCommitted()` 的 derived Member notification 在 commit 后可能 throw，使调用方收到失败而 operation 已经 durable；把用户可见错误和可重试 effects 分开。
3. **中高：附件请求幂等。** `requestId` 对 upload、path preparation、message/reply retry 统一定义为可重放 identity，避免新 cache entry 在 Ledger 判断前产生。
4. **中：Remote failure vocabulary。** 业务拒绝继续使用 result union；只有需要 Client 稳定分支的异常才使用稳定 `RemoteError` code/details。
5. **中：structured recovery classification。** Team 读取 Harness 的 `LlmFailure`/status/code；继续保持 pressure retry 与 terminal recovery 的两级职责。
6. **中：operation protocol coverage。** 只覆盖 schema、request comparator、result mapper、legacy policy 和明确 no-op 意图，不做 generic operation registry。
5. **中高：Remote failure vocabulary。** 业务拒绝继续用正常 result union；跨 Remote 的可预期资源/状态失败应使用稳定 `RemoteError` code/details，不能让 Client 依赖 message。
6. **中：recovery failure classification。** Harness `agent/request-error` 提供结构化 `LlmFailure`；终止且未重试的失败会以保留 `.failure` 的 `LlmError` 进入 `agent/error`，但 Team 自动恢复只读取 message pattern。两个事件仍应保持不同职责，先补 Team 内部 failure normalization/classification。
7. **中：legacy decode 边界。** canonical operation replay、schema compatibility 与 prior-projection repair 目前交织；下一次格式变化前建立 legacy branch inventory，不先做大迁移。
8. **待产品证据：Workspace collaboration address 与 Agent execution cwd。** 当前 Member 可 join 多 Workspace，但同一个 Session cwd 不变；概念应保持分离，是否需要 per-Workspace execution context 暂不决定。
9. **待 Harness capability：Client Session restoration。** Team 当前读取 `retainedBy.mainView` 来尽可能恢复 shell selection；这应视为 Harness public API 缺口，不通过复制私有 UI 解决。

## 明确保留

- 不按 `index.ts` 或 `ledger.ts` 行数拆文件。`MemberRuntime`、`StoredSessionReader`、`TeamChangeStream` 和 context-continuity engine adapter 已有真实职责闭合。
- 不引入跨领域 generic operation registry，也不删 ledger snapshot payload，除非一个真实 operation family 的验证能证明它减少了独立遗漏。
- 不把所有 Host Error 都包装成 RemoteError；只公开需要调用方稳定处理的预期失败。
- 不建立第二套 Team projection、Session store、Workspace store 或 Member durable state。

## 已作出的工程决策

- `clearMemberContext` 不把同一 `requestId` 当作未完成 workflow 继续器。renewal operation 一旦 durable commit，后续 retire/archive/activate 由 desired-state reconcile 完成；重复请求返回记录结果和当前 diagnostic。
- `putAttachment`、send path attachment、reply path attachment 都按 request identity 设计为可重放；相同 request + 相同 payload 返回首次结果，不同 payload 发生稳定 collision。
- 不新增第二套 attachment idempotency database。优先复用 ledger 中已记录的 message/operation metadata；upload 的 request result 需要使用稳定的 cache identity 或等价的 Host-owned bounded mapping。
- `archiveMember`/`removeMember` 的同 request retry 可继续作为短期补偿，但最终正确性不依赖 Remote retry；启动 reconcile 必须覆盖 durable lifecycle state。
- 不把所有 post-commit error 吞掉。需要区分 durable commit、delivery pending、delivery failed，并为 Client 需要分支的路径提供稳定 code/details。
- operation coverage 是测试契约，不是 runtime registry；已有 exhaustive projection paths 不重复抽象。

## Implementation frontier

按依赖执行：

1. `01-member-context-renewal-reconcile`：闭合最危险的 partial renewal window。
2. `02-member-lifecycle-reconciliation`：扩展到 archive/suspend/remove 的 boot convergence。
3. `03-attachment-request-idempotency`：可与 01 并行，收敛 upload/send/reply retry。
4. `04-post-commit-delivery-semantics`：依赖 lifecycle/attachment 事实，定义统一 commit 后交付语义。
5. `05-remote-error-contract` 与 `07-structured-recovery-classification`：依赖 04，分别收敛 Client 错误和 Agent recovery。
6. `06-operation-protocol-coverage`：可独立执行，作为长期维护护栏。

每张 ticket 的状态仍为 `ready`；本工作项只提供设计和验收边界，不替专门 implementation agent 执行生产改动。
