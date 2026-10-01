# 设计级问题与候选方向

**核对日期：** 2026-10-01
**状态：** 第一轮发现，尚未形成最终实施票据。

严重性按用户影响、重复发生概率和能否消除一类问题排序。`候选` 不等于已决定；每项都保留一个可以推翻它的验证条件。

## Q1 — operation 协议的非穷尽部分需要额外契约

**严重性：中。置信度：高。**

### 证据

当前有 28 个 operation kind。它们分别出现在 durable type、Zod schema、command/result 方法、replay validation、projection apply、change scope、Thread/Inbox discovery、request comparator 和 legacy normalization 中。

核对后需要区分两类入口：`changeScopesOf()`、`touchedThreadRefs()`、`applyTo()` 和 replay validation 都有 `assertUnhandledKind()` 或等价的 TypeScript 穷尽保护；`affectedMembersOf()` 又主要从通用 Inbox delta 推导。因此不能把当前问题描述成“新增 kind 会静默漏掉所有 projection 分发”。

仍然没有同一套穷尽检查的，是 Zod durable schema、command 构造、request 幂等比较、result mapper 和历史兼容策略。一个新 kind 可能已经能通过 projection 的编译检查，但仍然没有对应的存储形状、retry 比较或 legacy policy。

### 影响

主要风险不是 replay/apply 直接漏掉，而是 operation 的公开协议发生局部漂移：

- durable union 有了 kind，但 Zod schema 没有接受它；
- 同 requestId 的 retry 没有比较新增字段；
- result mapper 丢掉了 operation 的新事实；
- 新旧 record 的 normalization policy 不明确；
- 明确 no-op 的 scope/Inbox 意图没有留下可检查的记录。

这会把错误推迟到 schema load、Remote retry 或存量 ledger 升级时才出现。现有 Channel cleanup、Message `occurredAt` 和 Thread-read receipt 变更，说明历史兼容和 public retry 语义确实会在 operation 演进时额外分叉。

### 候选方向

先做一个只覆盖非穷尽协议面的契约表/测试：以 `AgentTeamOperation['kind']` 为全集，检查 schema、request comparator、result mapper、legacy policy，以及明确的 scope/Inbox no-op 意图。不要把已有穷尽 switch 再抽成 registry。

只有下一种 operation family 证明这些语义可以由一个更小的内部定义对象共同拥有时，才按 family 收拢 schema adapter、幂等比较和结果映射；不先做跨领域 generic registry。

### 推翻条件

如果这张契约表无法稳定区分“明确 no-op”和“漏注册”，或者维护成本高于新增 operation 的 vertical tests，则只保留新增 operation checklist，不做运行时 registry。

## Q2 — Member 生命周期不是一个统一状态机

**严重性：高。置信度：高。**

### 证据

`AgentTeam` 同时持有：

- `handles`；
- `memberBySessionId`；
- `modelSelections`；
- `runningAgents`；
- `memberFailures`；
- `lifecycleTail`；
- `RecoveryCoordinator`；
- `ContextContinuityCoordinator`；
- `PressurePolicyCoordinator`；
- `MemberRuntime`；
- `notifiedInbox`。

`memberStatus()` 需要读取多个 owner 才能决定一行状态。`activateMember()`、`retireMemberGeneration()`、`disposeMemberSession()`、`reactivateMember()`、`executeMemberTransition()` 分别负责不同的生命周期路径，且许多路径都要按特定顺序清理多个 map 和 disposer。

### 影响

同一个 Member 的 durable state、live handle、Session binding、preset composition、runtime diagnostic 可能短暂不一致。当前代码已经为这些窗口增加了大量保护：rollover diagnostic、orphaned preset rebuild、carried input replay、context handoff reconstruction、private-memory path protection。这些保护是有价值的，但也说明状态转换没有一个统一 owner。

### 候选方向

不是把所有逻辑重新塞进一个更大的 `MemberService`，而是定义一个窄的 `MemberLifecycleController`/`MemberSupervisor` 内部 seam，统一拥有：

- `MemberId → live generation` 的唯一绑定；
- activation、suspend、resume、archive、remove、rollover 的顺序；
- live handle、Session map、runtime disposer 的注册和撤销；
- “durable binding 已移动但 live generation 尚未就绪”的中间态。

`MemberRuntime`、pressure、recovery、context engine 仍是它使用的深模块，不把它们的实现合并进去。第一步更适合先写一张状态转移表和 invariant，再评估是否需要真正抽 controller。

### 推翻条件

如果所有 lifecycle path 都能证明只通过一个已有 queue 顺序执行，且新 controller 只能转发 10 个以上依赖而没有减少 caller 必须理解的规则，则保留现有组合根，只补状态 invariant 和 recovery tests。

## Q3 — Durable commit 后的外部效果没有统一的可重试意图

**严重性：高。置信度：高。**

### 证据

多个 Host 操作先提交 ledger，再做 Session/Workspace/filesystem effects：

- `archiveMember`：提交 `team/member-archived`，然后 dispose live Session，再 `workspaceRegistry.archiveSession()`；
- `removeMember`：提交 `team/member-removed`，然后 dispose/archive Session，再删除 private memory；
- `suspendMember`：提交 suspended，再 dispose handle；
- context rollover 已经单独记录 transition envelope，因此有 crash recovery；
- `addMember`/`resumeMember` 失败后可以按 `enabled` 状态重新 activation。

如果 archive/remove 的第二阶段失败或进程在中间退出，ledger 已经要求 Member 隐藏/删除，但没有一条新的 durable fact 表示“外部清理还未完成”。不过 Host 方法的 retry 语义并不一致：`archiveMember` 和 `removeMember` 在 ledger 命中已有 request 后仍会继续执行清理，因此同 requestId 可以补做部分副作用；`clearMemberContext` 则在 renewal ledger 命中后直接返回，不能补做后续 retire/archive/activate。启动时 enabled Member 会恢复，archived/inactive Member 则不会自然走同一条补偿路径。

### 影响

用户看到的是一次失败的 Remote 调用，但 durable Team 状态已经改变。部分路径的重试可以补偿，部分路径却只返回已提交结果；因此真正的问题是每个 operation 的 post-commit effect 没有统一声明完成判定和 retry 规则，而不是所有路径都必然无法重试。`clearMemberContext` 的实测失败窗口尤其危险：旧 handle 已 dispose、旧 Session 未 archive，重复请求又不会重新进入 retire/activate。

当前还存在两个更具体的 retry 缺口：

- `updateMember` 先提交 `team/member-updated`，再等待 live capability apply。若 apply 失败，重复同一 requestId 时 `previous` 和 `stored` 都已经来自新 ledger projection，差异判断为 false，重试不会再次 apply；
- `clearMemberContext` 先提交 Session renewal，再执行 retire/archive/activate。若后半段失败，重复 requestId 会从 ledger 返回 `committed: false` 并直接返回当前状态，不会补跑未完成的 retire 或 activation。

这说明问题不只是“启动时少跑一个 cleanup”，而是每个 durable operation 没有声明其 post-commit effect 的重试/完成判定。

### 候选方向

把 operation 本身当成外部效果的 durable desired state，并让启动和每次生命周期入口运行幂等 reconciler：

- archived Member：确保没有 live handle、Session 不出现在 grouping surface；private memory 保留；
- inactive Member：确保没有 live handle、Session archived、private memory 删除；
- suspended Member：确保没有 live handle，但保留 Session；
- enabled Member：确保存在正确 preset composition 和当前 Session binding。

reconciler 只从 ledger 读取目标状态，不另建第二份 authority；每个 effect 必须可重复执行，失败保留 diagnostic 并在后续 boot/recovery 重试。当前已验证 `archiveMember` 的同 requestId retry 可以补做 Session archive；下一步应先覆盖 `clearMemberContext`、`updateMember` 和 boot reconciliation，再决定是扩展现有 retry 入口还是抽窄 controller。

### 推翻条件

如果 Harness 的 Workspace/Session 操作已经证明所有上述 calls 在 commit 后具备强原子性，或新增测试能证明每条 Host 路径都有明确且可验证的 retry/reconcile 入口，则此项可以从统一 reconciler 降级为逐路径契约。当前 `archiveMember` 已满足同 requestId 补偿，但 `clearMemberContext` 的失败窗口仍未闭合。

## Q3a — Message 路径附件在幂等判断前产生确定性的缓存副作用

**严重性：中高。置信度：高。**

`sendMessageAs()` 先调用 `resolveMessageAttachments()`，而 `resolveMessageAttachments()` 会在 ledger 查询 requestId 之前验证并复制 `attachmentPaths` 到新的 cache entry。随后才调用 `ledger.sendMessage()` 做 request-idempotency check。

一个带 `attachmentPaths` 的已提交请求如果因网络/Remote 传输失败而重试同一个 requestId，第二次调用一定会生成新的 attachment id 和新的 `[attachment]` 路径。`sendMessage`/`reply` 的 stored-body collision 比较发生在这之后，因此 retry 会被判为 request collision，而不是返回第一次结果；新复制出的 entry 没有被 ledger 引用，只能等 GC。

这不是附件本身的问题，而是副作用发生在幂等判定之前。候选方向：把路径附件解析变成 request-local deterministic input，并让第一次 durable operation 记录可复用的 resolved metadata；retry 命中已有 operation 时直接返回 stored result，不再触碰 filesystem。实现前需要决定 attachment cache entry 是否允许由 requestId 稳定命名，或者是否应把 attachment copy 纳入一个明确的 Host-owned idempotent preparation table。

## Q3b — Upload requestId 当前没有定义或实现幂等语义

**严重性：中。置信度：高。**

`AgentTeamPutAttachmentRequest` 要求 `requestId`，但 `putAttachment()` 每次都生成新的随机 `attachmentId` 并直接写 cache；它没有按 requestId 查找已有结果，也没有保存 upload intent。相同 requestId 的重复上传因此产生多个独立 cache entry。

这项是否是产品缺陷取决于 upload Remote 是否承诺 requestId 幂等。当前类型和 Client helper 没有明确说明“非幂等”，而 Team 的其他 mutation 都把 requestId 当作 retry identity，所以应先把合同写清楚：要么删除这个 requestId 语义并允许上传是一次性 cache preparation，要么让上传结果可按 requestId 重放。不能继续同时携带 requestId 又让调用方猜测。

## Q4 — Remote 预期失败仍主要靠普通 Error/message

**严重性：中高。置信度：高。**

### 证据

Team 的业务结果已经对 `unread_required`、`stale_revision`、`confirmation_required` 等情况使用 discriminated union，但未知 Member、archived Channel、附件路径、Session 不可读、preset composition 失败、profile 冲突等大量 Host 路径仍 `throw new Error(...)`。Client 又在多处把 `result.error.message` 转成新的普通 `Error`。

相邻 Harness 的 Remote cookbook 要求：跨 Remote 的预期失败使用 `RemoteError`，通过稳定 code 和 typed details 区分；调用方不能解析 message。

### 影响

- Client 只能显示字符串，不能稳定决定重试、重新读取、禁用、跳转或显示 artifact location；
- 不同 Host path 的同类失败无法聚合；
- 上游改文案会改变行为分支；
- 端到端测试容易只锁一段自然语言，而不是锁错误语义。

### 候选方向

不把所有内部异常都包装成 Team code，只给跨 Remote 且调用方需要处理的稳定失败建立 code 表，例如：

- `agent-team/member-unavailable`；
- `agent-team/member-not-found`；
- `agent-team/archived`；
- `agent-team/attachment-invalid`；
- `agent-team/session-unreadable`；
- `agent-team/preset-composition`；
- `agent-team/profile-conflict`。

协作门禁结果仍可保留当前业务 union，因为它们是正常结果而不是异常；Remote adapter 负责把跨网络的 Host exception 转成 `RemoteError`。先选两个最常见的 Client recovery path 做 vertical slice，不要一次改所有 throw。

### 推翻条件

如果 Typert 当前 bundle 对 Team package 的 declaration merge 无法稳定传输自定义 details，或这些错误没有任何 Client/SDK 分支需求，则只统一 Host 内部 typed errors，不扩展 Remote code 表。

## Q5 — 历史兼容逻辑和当前 ledger authority 混在一起

**严重性：中高。置信度：高。**

### 证据

当前 `spec.ts`、`ledger.ts` 同时承担当前格式和多个历史形态：

- Channel `state` 默认补 `active`；
- Message/Thread fact 的 `occurredAt` 在 parse/replay 时补齐；
- 旧的完整 Thread-read snapshot 和新的 receipt union 共存；
- `repairLegacyChannelCleanup()` 在 `sortedRecords()` 中按历史投影判断并修复旧 Inbox snapshot；
- `team/member-context-cleared`、`team/member-session-restarted` 等 retired operation 仍留在当前 union 和 replay branches。

`agentTeamDomainSpec.version` 仍是 1；历史修复不是一个独立的 versioned migration pipeline，而是 ledger load path 的条件分支。

### 影响

当前领域规则、旧数据兼容、replay validation 和 projection apply 互相知道细节。新 operation 很容易同时考虑“现在应该怎么做”和“旧 record 怎么通过”，导致：

- schema 继续膨胀；
- 当前 invariant 很难只验证 canonical form；
- 某个修复为了存量 ledger 引入长期分支；
- 旧记录的修复规则只能在 `ledger.ts` 内发现。

### 候选方向

下一次真正需要格式变化时，把读取路径拆成清晰的三层：

```text
raw stored record
  → version/legacy decoder (只做兼容归一化，不读 live state)
  → canonical AgentTeamOperation
  → current replay validator + projection
```

`repairLegacyChannelCleanup()` 这类依赖历史 projection 的修复不能伪装成普通 schema transform；应单独命名、单独测试、记录可删除条件。当前不做大迁移，先补 canonical-vs-legacy 测试矩阵和历史分支清单。

### 推翻条件

如果 Team 明确永远只支持 fresh `agent_team.sqlite`、升级时不读取旧 ledger，并且发布 runbook 保证用户不会带旧数据升级，这项可以简化为删除兼容代码；当前文档和测试仍保留存量 ledger replay，因此暂不能这么做。

## Q6 — Workspace Participation 与 Session cwd 是两个不同地址，但模型操作容易混淆

**严重性：中高。置信度：高；这是设计取舍，不是已确认 bug。**

### 事实

Member 可以参与多个 Workspace，但只有一个以创建 Workspace 为 cwd 的 live Session。`workspace` 参数决定 Team ledger 的协作授权和路由，不会切换 Agent 当前 cwd。模型 guidance 要求跨 Workspace 使用绝对路径并读取对应 Workspace instructions。

### 第一性原理问题

“我在哪个 Workspace 协作”和“我的 shell/fs 命令在哪个目录执行”是两个不同的概念。当前 interface 允许一次调用选择 Workspace B，同时 Agent 的 filesystem tools 仍然以 Workspace A 为隐含 cwd。即使 guidance 说要用绝对路径，interface 仍然允许错误组合。

### 候选方向

长期只能三选一：

1. 一个 Member 每个 Workspace 一条 Session/执行上下文；
2. Workspace selector 同时成为 Agent execution context，Harness 提供可靠的 per-turn cwd/path scope；
3. 明确限制：跨 default Workspace 只能做 Team 协作，所有需要文件/命令的动作必须先切换或由 Host 拒绝。

短期不改当前全局 Member 设计，因为它是近期架构决策；但应把“协作地址”和“执行地址”作为公开概念分别命名，并增加一个误用测试/模型提示。若真实使用中跨 Workspace 只做消息协调，此项风险可降级。

## Q7 — Client Member Session restoration 依赖 Harness 当前没有提供的公开清除/选择接口

**严重性：中。置信度：高。**

### 证据

`packages/client-agent-team/src/client/index.ts` 为嵌入 Member Session 自己维护：

- `currentMainSessionId()` 扫描 `sessions.list` 的 `retainedBy.mainView`；
- `openedMemberSessions` WeakMap；
- `TeamNavigation` 的 member session/return target；
- `ctx.uiWorkspace.openSession()`；
- Team mode 进入时手动 `ctx.layout.selectPanel(null)`。

代码注释明确记录 DSH 0.1.7 没有公开 clear API，因而只能通过 retention 投影和条件 restore 规避 stale selection。最近的 main-panel 修复就是这条跨模块选择权不清晰的直接表现。

### 影响

Team 必须了解 Harness 的 retention implementation detail，才能保证离开嵌入 Member view 后恢复普通 DSH。上游 panel/retention 变动可能再次造成 Team mode、plugin manager、ordinary conversation 相互抢 selection。

### 候选方向

- 向 Harness 提出公开的“读取当前主面板 Session / 清除或恢复选择”接口；
- Team 侧把所有 Member Session embedding/restore 封装成一个小的 `TeamSessionViewController`，禁止其他 Client 文件直接读 retention；
- 保持 slot ownership：Team 只拥有 Team mode 的 `main` keyed `conversation` seat，不接管 shell 的全局 selection。

这不是通过继续复制 shipped UI 来解决的问题；若 Harness 不提供接口，应把当前限制记录成明确的 upstream dependency。

## Q8 — 自动恢复依赖错误字符串，未读取终止失败的结构化事实

**严重性：中。置信度：高。**

### 证据

Harness 的 `agent/request-error` 已提供结构化 `LlmFailure`（`code`、`status`、`providerRetryAfterMs`、`requestId`）。如果没有 listener 返回 retry，Agent loop 会用同一份 failure 创建 `LlmError`，保留 `.failure` 后再发出 `agent/error`。因此结构化事实仍然存在，但 Team 的 `agent/error` listener 只取 `error.message`，再交给 `RecoveryCoordinator.classifyRecoverableError()`，用 `/fetch failed/`、`/429/`、`/rate limit/` 等字符串判断。

### 影响

错误文案或 provider adapter 改变，就可能让同一个失败从“自动恢复”变成“手动”，或反过来；状态码出现在 message、cause 或 structured field 的不同位置也会改变结果。当前恢复策略还把错误 episode、wakeups、runtime diagnostic 混在 Host 的 process state 中。

### 候选方向

建立一个 Team 内部的 failure classifier：优先读取终止 `LlmError.failure` 或跨包可验证的 failure snapshot，再读取 `HarnessError.code/status`；只有对没有结构化事实的外部异常才使用非常窄的文本 fallback。同时保持 `agent/request-error` 的当前-step pressure retry 与 `agent/error` 的 terminal-turn recovery 分离。测试应使用结构化 failure，而不是只用字符串。

### 推翻条件

如果所有实际可恢复失败都只会以普通 Error 到达 `agent/error`，且 Harness 保证 message 是稳定协议，那字符串 fallback 可以保留；当前 Harness 类型和 Agent loop 实现已经证明终止 LLM 失败保留结构化 `.failure`，因此这个条件不成立的可能性更高。

## Q9 — Tunable policy 和固定协议常量没有统一分类

**严重性：中。置信度：中。**

`CONTEXT_HARD_LIMIT_CAP`、`CONTEXT_HANDOFF_AT_CAP`、reserve、timeline bounds、attachment cap、recovery delay 和 consecutive-error limit 都以源码常量或构造默认值存在，但它们的性质不同：

- ref 格式、最大 payload、bounded result 是协议/安全不变量；
- context budget 是 Team 产品策略；
- recovery delay 和 retry count 更像部署/运维策略。

Harness 的维护规则要求 deployment-varying tunables 进入 owning `Config`，而当前 `RecoveryCoordinator` 虽然接受 options，Host 没有 Config 暴露；pressure 常量则全部固定在 Host。

候选方向是做一次“常量分类审计”，不是把所有数字都配置化：协议边界保持常量，运维策略进入 Host Config，产品策略写成明确的 versioned policy。否则每次事故都要改代码和 release，而不是改 profile policy。

## Q10 — 当前 operation payload 同时像事件、投影快照和副作用计划

**严重性：中。置信度：中高。**

`team/message-sent`、`team/task-changed`、`team/channel-archived` 等 record 不只记录用户意图，还携带 operation 后的 Thread/Task/Claim/Inbox snapshot。这样 replay 不需要重新推测 command 的副作用，校验也能发现 projection delta 不一致；这是当前设计的优点。

代价是 operation payload 很大且高度耦合 projection 形状。只要一个投影字段变动，schema、legacy reader、validator、result 和 replay 都可能要同步修改。它也让“业务 event”与“projection delta”在一个 type 里难以区分。

候选方向不是直接删 snapshot，而是明确两类内容：

- immutable business fact / command identity；
- deterministic projection delta / cleanup evidence。

对 cleanup 类 operation，保留 snapshot 可能是为了保证跨版本 replay；对普通 Message/Claim 类 operation，评估是否能让 current projection 从 business fact deterministic derive。下一次领域操作设计应先做这项分类，不能继续无意识复制整个 entity。

## 不列为当前问题的部分

- 文件大本身不是问题；`ledger.ts` 的 authority closure 目前有合理的 locality。
- `types.ts` 已经拆成 entities/operations/requests-results，继续拆会增加路径噪声。
- `TeamChangeStream`、`StoredSessionReader`、context continuity engine adapter 是已收拢复杂度的模块。
- Client 继续复制 Harness 私有组件或私有 CSS 才是明显错误；当前代码已经使用 public slots 和 public services。
