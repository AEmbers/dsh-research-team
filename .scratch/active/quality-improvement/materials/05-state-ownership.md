# 状态所有权与生命周期矩阵

**核对日期：** 2026-10-01
**状态：** 源码事实；恢复结论只限本表所写的现有路径。

## 1. 状态读写矩阵

| 状态 | 当前 owner / 权威 | 持久化位置 | 重建方式 | 当前边界 |
| --- | --- | --- | --- | --- |
| Team operation、Member identity/state/sessionId、Workspace participation、Channel、Thread、Task、Claim、Attention、Inbox delta | `AgentTeamLedger` | `agent_team` Domain 的 append-only `operations` table | 启动时排序、normalize/repair、validate，再 `applyTo()` 重放 | ledger 是唯一 Team durable authority |
| Host 当前查询投影和索引 | `AgentTeamLedger.state` | 不单独保存 | 从完整 operation log 重放 | 当前状态由 operation payload + `applyTo()` 再现 |
| ledger integrity verdict | `AgentTeamLedger.validateRecords()` / invariant companion | 不单独保存 | 对记录建新的 scratch `Projection`，执行 `validateOperation()` 和同一个 `applyTo()` | scratch state 与 live state 分开，但不是第二套独立投影算法 |
| Member 当前 Session log、prompt inputs、tool results、handoff prose | Harness Session | SessionPersistence 对应的 Session event log | Harness 恢复 Session；Team 的 SessionProjection 定义由 events 重放 | Session history 不复制到 Team ledger |
| Member 的 generation transition intent | operation ledger 中的 `sessionId` + rollover envelope；新旧 Session log 提供输入与 handoff 事实 | Team ledger + 两个 Harness Session logs | activation 读取 latest transition，重建 seed/handoff/carried input | 这是已有的 durable transition/recovery 先例 |
| live AgentHandle 与 Member/Session 绑定 | `AgentTeam` 的 `handles`、`memberBySessionId` | 进程内 | 对 `enabled` Member 调 `activateMember()`；其他状态不做普遍 handle reconciliation | `memberStatus()` 合成 ledger state 与 live maps |
| 当前 turn、running 状态 | `AgentTeam.runningAgents` + Agent status | 进程内 | Agent 生命周期事件 | 只用于边界等待和 presence；不是 durable Team fact |
| provider selection ref | `AgentTeam.modelSelections` | Member 当前 selection 在 ledger；assembled/current refs 在进程内 | activation 从 durable Member/default route 装配 | live mutation 与 durable desired value 分离 |
| activation/runtime/compaction diagnostics | `AgentTeam.memberFailures` | 进程内；部分原因可在下次 activation 重新得到 | enabled Member activation，或 Agent error/status 事件 | 不可作为 durable error ledger |
| pending automatic recovery episodes/timers | `RecoveryCoordinator` | 进程内 | 没有持久恢复；重启清空 | `agent/error` 后按 message 文本分类 |
| context-transition locks/captured inbox state | Context continuity engine + `ContextContinuityCoordinator` | transition envelope 和 Session events 持久；locks/capture 是进程内 | 从 durable Session events 重放 intent，再按 ledger transition 恢复 | 过程态不另建持久 authority |
| pressure notices/retry sequence | `PressurePolicyCoordinator` + Session events | notice/compaction 的可見事实写入 Session；route measurement/timers 为运行时 | Session fold 与下次 pre-step | 每次只持有当前 Member/Session 的 transient policy state |
| 已通知 Inbox signature | `AgentTeam.notifiedInbox` | 进程内 | 从 ledger 当前 unread facts 重新推导 | 仅防重复提示，不是 delivery authority |
| Member private memory、notes、skills | `MemberRuntime` 管理的文件系统目录 | `$DSH_HOME/agent-team/members/` | activation 创建缺失目录/scaffold；启动不会清扫未知目录 | durable 用户内容，但不在 ledger transaction 内；remove 会清理 |
| composer attachment metadata/reference | Message operation | Team ledger | replay facts | 附件 bytes 不随 ledger 持久 |
| composer attachment bytes | cache files | `$DSH_HOME/agent-team/attachments/v1/` | 无 durable rebuild；按 TTL GC | path upload 每次操作都会写新 entry |
| Human profile | Host row Config/settings | DSH settings profile | Harness settings load | 与 Team ledger 分开，Host 在写入时检查 handle 唯一性 |
| Client route、选择、草稿、当前 Member Session 视图 | Web Client state / browser storage / Harness UI services | 部分 browser persistence | Client restore logic + Harness session/panel state | 不是 Team authority；恢复路径有对 `retainedBy.mainView` 的实现依赖 |

## 2. Member 生命周期路径

| 操作 | Durable commit | commit 后的效果 | 失败后的现有恢复路径 |
| --- | --- | --- | --- |
| add | `team/member-added`，Member 立即为 `enabled` | 初始化私有 memory；创建或恢复 Session；mount preset/tool/skill；登记 Handle；attach Workspace | activation 把错误放入进程内 diagnostic；同一 enabled Member 可通过 `recoverMember` 或下次启动重新 activation |
| suspend | `team/member-suspended` | dispose Handle，清理 Member transient maps；Session 保留且不 archive | 相同 requestId 的重试仍会执行 dispose；启动路径没有显式 suspended-handle reconciliation |
| resume | `team/member-resumed` | 恢复同一 Session id 的 Agent | activation 失败保留 enabled intent + 当前诊断，之后可 retry/restart |
| archive | `team/member-archived` | dispose Handle，再由 Workspace registry archive Session；保留 memory/Session bytes | 相同 requestId 重试会再次运行清理；启动只显式处理 enabled/inactive，archived 无统一 boot reconcile |
| remove | `team/member-removed` | dispose Handle；`cleanupRemovedMember()` 并行 archive Session、删除本地 private namespace | 相同 requestId 可重试；启动时对 inactive Member 再次执行 cleanup，因此有受限的 boot retry |
| update Member/capabilities | `team/member-updated` | 更新 route selection；capability 变更等当前 turn 到 idle 后再更新 tools/skill selection | 下次 enabled activation 会应用 ledger 中的新值；Remote effect 若当次失败仍可能已提交 |
| clear context | `team/member-session-renewed`，Member `sessionId` 移到新 generation | dispose/archive 旧 Session，再 activation 新 Session | activation/启动从 ledger 当前 binding 恢复；Host 在远程失败后返回 durable transition 事实但需核对各中间窗口 |
| model rollover | `team/member-session-rolled-over`，含 source/seed/handoff envelope | retire 旧 generation、archive 旧 Session、activate 新 generation、投递 handoff 和 carried input | `recordedCheckpointPrefix()`、`reconstructMissingHandoff()`、`replayCarriedInput()` 从 ledger/Session history 恢复 |

此表修正了“没有生命周期恢复”的宽泛说法：`remove` 已有启动时 cleanup retry，`clear context`/rollover 已有显式恢复逻辑，`resume`/enabled activation 也能重建。尚未覆盖的是 lifecycle 所有外部效果的统一、可观测 reconciliation，尤其 archived 状态没有 boot cleanup pass；是否要把 suspended 也纳入应由失败注入测试决定。

## 3. Operation 写入与通知顺序

```text
Host request
  → validate host-facing address / actor
  → resolve request inputs (attachments may write cache here)
  → AgentTeamLedger.enqueue() serializes ledger writers
      → per-command requestId lookup and collision comparison
      → domain validation + operation construction
      → await operations.put(operation)
      → apply(operation) to live Projection
      → return committed/resolved
  → Host emitCommitted(receipt) for newly committed results
      → emit agent-team/committed (invariant schedules a later replay)
      → emit scoped Client invalidation
      → deliver Member Workspace notice / derived Inbox hints
  → Typed Remote result
```

`KvTable.put()` 成功前不修改 live Projection；成功后才 `apply()`。`emitCommitted()` 在 ledger 返回后执行，Client change stream 的 invalidation 先于 Inbox hint。Inbox 的事实从 ledger 推导，`notifiedInbox` 只缓存签名。

需要注意：Host 的 `emitCommitted()` 不是整个调用的原子提交。`notifyMember()` 在 Agent wake 抛错时清掉去重状态后重新 throw；`emitCommitted()` 的 affected-member loop 没有捕获这个异常。因此某些操作可能已经 durable commit，之后的 Remote promise 仍以通知错误 reject。后续同 requestId 重试会从 ledger 取得原操作，但是否每条 API 都正确处理 `committed: false` 需要契约测试。

## 4. 已确认的生命周期边界

- ledger append 和 Session/Workspace/filesystem effect 不是一个 transaction。
- 只有部分 transition 明确保存了重建 side effect 所需的 durable envelope。
- `enabled` 是 boot activation desired state；`inactive` 有 boot cleanup；`archived` 和 `suspended` 当前没有统一的 boot reconciliation pass。
- 本轮不能把以上事实直接推导成新 `MemberSupervisor`。先为每个状态轴写 invariant 和 failure injection，再确认 controller 是否能减少协调规则。
