# 当前系统地图

**核对日期：** 2026-10-01
**依据：** 当前 `packages/` 源码与测试、维护文档、相邻 `../deepseek-harness` 的源码与文档。历史 `.scratch/archive/` 只用于查找反复出现的问题，不作为行为定义。

## 1. 系统目标

`dsh-agent-team` 是一个外部安装的 Cordis bundle，在一个 DSH home 内提供一个持久化 Agent Team。它没有修改 Harness 的 Agent loop 或 shipped defaults，主要职责是：

- 保存跨 Member 的协作事实；
- 管理 Team Member 的 Agent/Session 生命周期；
- 把 Team 工具限制在显式的 `team-member` preset；
- 通过 Typed Remote 给 Human Client 提供投影和命令；
- 复用 Harness 的 Workspace、Session、Persistence、Compaction、Slot 和 Remote 机制。

## 2. 运行时分层

```text
Human Client
  │  Typed Remote + public Client slots
  ▼
AgentTeam Host
  │  Host authorization / lifecycle / notifications
  ├── AgentTeamLedger
  │     durable operation log + replay projection + Team queries
  ├── MemberRuntime
  │     scoped tool policy + private skills + private memory
  ├── ContextContinuityCoordinator
  │     durable rollover/checkpoint intent + generation transition
  ├── PressurePolicyCoordinator
  │     route budget + pressure notice + hard compaction fallback
  ├── RecoveryCoordinator
  │     process-local retry wakeups after recoverable Agent errors
  └── StoredSessionReader / projection adapters
        Harness Session persistence and continuity seams

team-member preset
  ├── coding/tools and Workspace instructions
  ├── Team guidance
  └── eight model-facing Team/context tools
```

三个 package 目录是构建和导出 seam，不是三个独立的领域服务：

- `packages/agent-team`：唯一的 Team authority 和 Host；
- `packages/tool-agent-team`：Host 的模型工具适配器；
- `packages/client-agent-team`：Typed Remote Client 和 UI presentation。

当前没有证据支持把三个 package 合成一个，也没有证据支持按文件行数继续拆 `ledger.ts` 或 `index.ts`。

## 3. 权威和状态归属

| 事实 | 当前权威 | 说明 |
| --- | --- | --- |
| Member、Workspace Participation、Channel、Thread、Task、Claim、Attention、Inbox facts | Team operation ledger | append-only；`agent_team` Domain 的 `operations` table |
| 当前 Team 查询 | `AgentTeamLedger` 的 replay projection | 内存投影由 ledger 重放构建，不另建持久 projection store |
| Agent model context | Harness Session event log | Team 只记录 rollover 的可验证 envelope，不把 handoff prose 写进 Team ledger |
| Session durable bytes | Harness SessionPersistence | Team 通过 `StoredSessionReader` 适配 Handle API |
| Workspace cwd 和 Session grouping | Harness Workspace registry | Team 的 `workspaceId` 是协作地址，不会切换 Member Session cwd |
| Member private memory / skills | Team Host-owned filesystem effect | 目录随 Member identity 建立；删除 Member 时清理 |
| Agent availability / working / error | Host process projection | 不写 Team ledger；由 live handle、Agent status、diagnostic 和 runtime maps 合成 |
| Browser mode / selection / drafts | Client local state / browser storage | 不得成为 Team authority |
| Attachment bytes | bounded cache | 不进 ledger，也不作为 archive |

这张表说明了当前系统的基本分工是合理的：持久协作事实、模型历史、运行时状态和浏览器状态没有合并成一份 store。

## 4. Member 的实际状态轴

一个 Member 的可观察状态不是一个值，而是多条轴的组合：

1. **Durable lifecycle intent**：`enabled`、`suspended`、`archived`、`inactive`，保存在 Member entity 和 lifecycle operation 中。
2. **Durable Session binding**：ledger 中的 `member.sessionId`，以及最新 transition 的 previous Session。
3. **Live handle binding**：`handles`、`memberBySessionId`、`modelSelections` 三个 Host map。
4. **Turn state**：`runningAgents` 和 Agent status；决定是否可以在 turn boundary 更新 capability 或执行 generation swap。
5. **Preset composition**：Agent scope 中是否仍有 composed preset 和八个 Team tools；reload 可能让持久 Member 变成 unavailable。
6. **Context generation**：Session projection 中的 checkpoint/rollover intent，加上 context coordinator 的 process lock 和 transition queue。
7. **Context pressure**：Session 中的 durable pressure notice、当前 route 的 token measurement、overflow retry map、compaction diagnostic。
8. **Inbox delivery**：ledger 的 unread facts 是 authority，`notifiedInbox` 只是进程内去重缓存。
9. **Automatic recovery**：`RecoveryCoordinator` 的 error episode 和 delayed timers。
10. **Capabilities**：ledger 中的 allow-list intent，`MemberRuntime` 中的 restriction/provider/warning state。

这些状态轴各自有理由，但当前没有一个统一的 Member runtime state machine 负责它们的可见转换。`AgentTeam` 组合根直接协调多个 owner，并通过多个 map 交叉判断当前状态。

## 5. 一次 Team operation 的当前路径

```text
Host/Tool/Remote request
  → actor / Workspace / participation checks
  → AgentTeamLedger.enqueue()
  → requestId idempotency check
  → command validation against live projection
  → KvTable.put(operation)
  → apply(operation) to live projection
  → Host emitCommitted(receipt)
      ├── scoped Client invalidation
      ├── affected Member Inbox notification
      └── runtime side effect when this operation requires one
```

冷启动路径是：

```text
KvTable entries
  → sortedRecords()
      → schema parse / legacy normalization / legacy cleanup repair
  → validateRecords(records, scratch projection)
  → apply(operation) to live projection
  → Host activation of enabled Members
```

一个 operation kind 目前要在多个地方表达：Type union、Zod schema、command method、replay validation、projection apply、change scopes、affected members、thread refs，以及部分 idempotency/result logic。关键 projection switch 已有穷尽保护；本轮关注的是 schema、retry/result、legacy policy 这些非穷尽协议面之间的漂移。

## 6. Harness 对 Team 的硬约束

本次核对到的 Harness 原则：

- 一个异步操作应由一个 lifecycle controller 或 transaction 持有 readiness、取消、dispose、reservation 和 quiescence；
- model-visible input 必须进入 Session log，才能被 replay；
- SessionPersistence 的写入通过每个 Session 的 Handle，`flush` 是 durability barrier；
- Remote 失败用 `RemoteError` 和稳定 code，调用方按 code 而不是 message 分支；
- Slot parent 的 `children` declaration 同时是渲染授权和所有权，未声明或重复声明会失败；
- capability seam 需要 Definition、Provider、Consumer 三个角色完整，只有一个实现时不应凭空抽象；
- 配置/路由/默认值在拥有者处显式解析，不能藏在执行函数里；
- persisted data 的历史迁移应在格式边缘处理，当前运行时不应同时承担所有历史形态。

Team 的 ledger、Session reader、Typed Remote generation、slot injection 和 context-continuity engine 接入大体符合这些原则；Member lifecycle、Remote 错误和 ledger operation 分发还没有完全达到同一标准。

## 7. 已确认的保留判断

以下结论有当前代码和历史消融证据支持，本轮不把它们列为第一批重构目标：

- 三个 package seam 是真实的构建/运行时边界；不合并。
- `MemberRuntime` 是有状态且有明确 Harness seam 的深模块；不重新塞回 `index.ts`。
- `StoredSessionReader` 把 Handle 生命周期和 failure classification 收拢到一个位置；保留。
- `ContextContinuityCoordinator` 复用独立引擎，Team 只提供 domain adapter；不恢复 Team 自己的 continuity fold 或 retrieval ladder。
- `changes()` 已经是按 scope 的 invalidation stream；`team_thread.read` 不唤醒 shared projection；这部分是已修复的设计问题，不应回退成全局刷新。
- `AgentTeamLedger` 的 authority/replay/query 闭包目前是真正的深模块；拆分必须由新的独立 consumer 或 operation family seam 触发，不能只按文件大小拆。
