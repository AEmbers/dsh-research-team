# 分阶段工作计划

**状态：** 研究阶段，不代表已授权实施生产代码。

## 阶段 0：建立共同事实

已完成第一轮：

- [x] 读取 Team 维护文档、当前 Host/ledger/tools/Client 源码和测试。
- [x] 读取 Harness lifecycle、Session、Persistence、Storage、Remote、Slots、Compaction 合同。
- [x] 对照历史质量审计、Host split、Member Runtime、UI loading、Inbox、context continuity 工作项。
- [x] 建立当前系统地图和第一批设计级发现。

## 阶段 1：先把隐含协议变成可检查事实（已完成第一轮）

推荐先做，只改 scratch/测试/小型文档，不先重构生产结构：

1. 为每个 operation kind 建立非穷尽协议 coverage matrix：Zod schema、request comparator、result mapper、legacy policy，以及 scope/Inbox 的明确 no-op 意图；已有 exhaustive projection switch 不再重复抽象。
2. 为每个 Member lifecycle operation 建立失败窗口表：ledger commit 前、commit 后 live effect、Host crash、restart/retry 的预期状态。
3. 用 failure injection 补 archive/remove/suspend 的外部效果证据。
4. 为 recovery classifier 加结构化 `LlmFailure` fixture，确认 Team 应从哪个 Harness event 取得 code/status。
5. 记录每个跨 Remote 的预期错误是否需要 stable code，以及 Client 的实际 recovery action。

阶段 1 的完成标准不是代码变少，而是新增 operation/lifecycle/error 时遗漏能在测试或文档入口暴露。当前已完成第一轮 failure injection，并将仍需实现的路径拆成 `issues/` tickets。

## 阶段 2：实施高杠杆 vertical slices（交给 implementation agents）

执行顺序已收敛为：

1. **Member context renewal reconciliation**：先闭合 `clearMemberContext` 的 partial renewal window。
2. **Lifecycle reconciliation**：扩展到 archive/suspend/remove 的 boot cleanup desired state。
3. **Attachment request idempotency**：upload、send path attachment、reply path attachment 统一 retry identity。
4. **Post-commit delivery semantics**：定义 durable commit 与 Agent/Client delivery failure 的可观察边界。
5. **Remote error vocabulary + structured recovery**：只为需要 Client/recovery 分支的路径增加稳定 code/details 和结构化分类。
6. **Operation protocol coverage**：补非穷尽协议面的长期测试护栏；不做 generic registry。

每条 slice 都必须包括 schema、Host、tests、Client/tool contract 和必要 docs；不做只移动文件的水平重构。

## 阶段 3：重新评估 Member Supervisor（仅在 tickets 证明需要后）

只有阶段 1 的状态表和 failure tests 证明当前多个 owner 确实重复实现转换规则，才实现 `MemberLifecycleController`/`MemberSupervisor`。预期接口应很小，内部继续组合：

```text
activate(member)
suspend(member)
resume(member)
archive(member)
remove(member)
transition(member, plan)
reconcile(member)
```

它不拥有 ledger authority，不复制 `MemberRuntime`、pressure、recovery 或 context engine；它只拥有 live generation 的顺序、binding 和 cleanup。

## 阶段 4：处理 Workspace execution address

这不是当前 bugfix。需要真实使用证据后再选：

- per-Workspace Session；
- per-turn execution context；
- 或限制跨 Workspace 只能协作、不允许隐式文件操作。

在决策前，先补一条模型可见的明确契约和误用测试，不增加第二套 Workspace/Session store。

## 明确不做

- 不因为 `index.ts`/`ledger.ts` 行数继续拆文件；
- 不把所有 operation handler 做成一个泛型 event bus；
- 不把所有 Error 都包成 RemoteError；
- 不在没有 failure evidence 时添加更多 recovery/fallback；
- 不修改 `../deepseek-harness`；
- 不把历史 `.scratch` 结论改写成当前 authority。
