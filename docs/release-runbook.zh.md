# 发布 Runbook

[English](release-runbook.md) | 中文

本文是发布 `@sophialin/dsh-research-team` 一个版本的流程。它存在的意义是：维护者只看这一页就能跑完一次发布，包括那些因为曾有缺陷流到用户手里才加上的检查。它不是行为规范——行为由源码与测试定义；「这个 bundle 支持哪条 DSH 线」是另一个问题，由 [`dsh-release-compatibility.md`](dsh-release-compatibility.md) 负责。认证决定 peer 范围，本文决定承载该决定的版本如何到达 profile。

本 bundle 不发布到任何 registry。一次发布就是本仓库里的一个 tag，安装时指名它：`dsh plugin --profile <name> add github:AEmbers/dsh-research-team#vX.Y.Z`。构建产物随源码一起走，所以消费者机器上不编译任何东西，也就没有 registry 那一步需要核验。

## 1. 谁决定什么

- **版本号与发布时机由维护者决定。** 发布不会从 CI、日程或攒下来的 diff 自动开始。修复走 patch，新能力走 minor；在 `0.x` 内，只承载兼容性的变更走 patch。
- **发布材料必须逐字过目后才能发。** 先写 `CHANGELOG` 条目，把逐字稿贴进工作 Thread，得到明确同意才打 tag。对方向的认可不等于对措辞的认可。
- **已发布的 tag 永久有效。** 绝不要把已被某个 profile、某个 Release 或某份文档指名的 `vX.Y.Z` tag 重新指向别处。写错只能用新的 patch 修。唯一的开口在 §5：还没有任何东西引用它时，允许有意地移动一次。
- **一个版本只属于一条 DSH 线。** 版本号不编码线；`@deepseek-ai/dsh-*` peer 范围才编码。两条线可以同时是现行的，各有自己的 tag；而一次改线的发布要在同一个提交里推进 peers 与全部十七处版本位点（§2 第 3 步）。

## 2. 前置检查

1. **读懂变更集。** `git log --oneline v<上一个版本>..HEAD`，然后逐个读 feature commit 的 diff。commit message 会低估改动范围；只有 bundle 的用户能看见或调用的改动才算面向用户。
2. **起草材料**，然后送审（§4）——没有批准的文案就不打 tag。
3. **扫版本面。** `npm run check:versions` 会回读每一处重述已认证 DSH 基线的地方并拒绝分裂的基线：它以 `.github/workflows/ci.yml` 里的 harness tag 为准，要求其余每一处声明同一个版本，要求每条 `@deepseek-ai/dsh-*` peer 范围的下界都能接纳它，并要求两份 README 的安装命令都指名即将发布的那个 tag。
   - 这些位置的清单在 [`scripts/check-version-consistency.mjs`](../scripts/check-version-consistency.mjs)——不要手工维护第二份。
   - `.hoplite/settings.json` 里的声明位于一个 JSON 字符串中、引号是转义的，所以朴素的 `grep` 在那里什么都找不到；这道门读得对。
   - 兼容性文档里的「当前基线」句是与声明的 peer 范围逐字比对的，所以它随 peers 一起动，而不是单独动。
4. **扫正文里被本次发布证伪的句子。** 在维护文档里检索那些以「发布尚未发生」为前提的表述——某个版本被描述为尚未发布、某个 peer 范围被描述为待定，或一条把更旧的 DSH 线与最后仍支持它的 bundle 版本配在一起的 warm-line pin。修正文档的当前状态声明确实属于发布提交的一部分；改写已发布的历史则不属于（§7）。
5. **确认已提交的构建产物与源码一致。** `packages/*/lib/**` 是提交进去并随包发出的，所以未提交的 `src/` 改动会让 tag 指向一份与它不对应的 `lib/`。跑 `npm run build` 并把它改动的东西暂存起来。产物之外的未跟踪文件（`scripts/`、`.scratch/`）不会被打包，也不阻塞发布。绝不要为了让工作树干净而 stash 或回退其他成员的工作——先弄清那是谁的。
6. **清楚 CI 会做什么、不会做什么。** 发布提交自身那一次运行必须在**两条 lane** 上都绿，然后才打 tag（§5），其中包括「已提交的 `lib/` 是否过时」那一步。纯文档推送根本不会产生运行：`ci.yml` 忽略 `**.md`、`docs/**`、`assets/**`，所以它的证据是 `git diff --check`、链接解析，以及从远端读回。

## 3. 检查阶梯

按此顺序执行；任何一步失败都中止发布，修好后从失败的那一步重跑。

| 命令 | 它拦下什么 |
| --- | --- |
| `npm run typecheck` | 针对已认证 harness checkout 的类型错误。 |
| `npm test` | 测试失败，以及它捆绑的五道机械门：`check:facades`、`check:docs`、`check:core-skills`、`check:boundaries`、`check:versions`。 |
| `npm run build` | 构建错误，以及已提交 `lib/` 所派生自的一切。 |
| `npm run lint` | lint 发现的问题。 |
| `npm run test:browser` | 组合、Remote 挂载、slot 接管或普通 DSH 恢复被破坏。需要相邻的 `../deepseek-harness` checkout，且该 checkout 自己要构建过 `apps/web/dist`；浏览器验收是本地步骤，从不在 CI 运行。 |
| `npm pack --dry-run` | 本身不拦什么——把文件数记进发布报告。 |
| `npm run check:artifact` | 会以破损形态发布的产物：混入的 `.ts`/`.tsx`、缺失的 `cordis.patch.yml`，或目标不在 tarball 里的运行时相对导入。要在 `npm run build` **之后**跑。 |
| `npm run check:public-baseline` | 与 manifest 的已认证基线发生漂移的公开面（两个 README 与置顶的兼容性讨论）。 |
| `git diff --check v<previous>..HEAD` | 发布改动集里任意位置的空白符损坏。裸 `git diff --check` 只看**未暂存**的改动，所以发布提交一旦落地它就静默通过——而梯子正是在那时跑的。 |

## 4. 发布材料

**`CHANGELOG.md`** 顶部新增 `## [X.Y.Z] - YYYY-MM-DD` 段，一条一个主题。实现者写的 `## [Unreleased]` 是完整性清单，不是可直接用的草稿。条目是读这个仓库的人能学到的东西，代码由 tag 承载。

**GitHub Release 是可选的；当这个 tag 是一条应当告知消费者的线时，值得建一个。** 它的正文两种语言都要有：中文在前、英文在后，顶部带语言切换器，新增功能 / 体验优化 / 问题修复 / 其他变更 四段在英文侧镜像。

- 开篇一句话点明上一个版本，结尾是安装块、兼容性一行与 Full Changelog 对比链接。
- 文风对齐 DeepSeek Harness 自己的 release notes：约八条、每条一句话，点出主题而不是它的各个子行为。
- 不要写指标、内部名词与文件名；陈述这个版本**是什么**，而不是它改了什么。
- bundle 自己的更新提示指向本仓库的 Releases 页，所以一个没有 Release 的 tag 会让那条提示指向空处。

**置顶的兼容性讨论**位于 `deepseek-ai/deepseek-harness`（discussion 4303），是一个没有同步路径的公开面——`check:public-baseline` 就是为此存在。维护方式是在我们自己的三条评论上轮转：贴新的发布评论、把上一个版本折进版本历史评论、然后按 node id 删掉我们自己上一条发布评论——先贴、再核验、后删除。绝不编辑或删除别人的评论；该讨论除了我们这三条，本来就合理地带着外部评论与回复。

不改线的发布不需要轮转：这道门比的是该讨论与 manifest 的基线，不是与版本号。

## 5. 打 tag

推送**之前**先断言两条发布语义：

1. tag 恰好是 `v<package.json version>`——manifest 与 tag 之间不得漂移。
2. `package.json` 里的 peer 范围就是本次发布所属的那条线，且 §2 第 3 步的那些位点与它一致。manifest 声明了一条它的消费者跑不了的线的 tag，会在安装时被拒绝，而不是被警告。

```sh
git add package.json CHANGELOG.md packages docs
git commit -m "chore: release X.Y.Z"
git push --dry-run origin master            # 栅栏：这里必须只列 master
git push origin master
```

等这一次运行在两条 lane 上都绿（§2 第 6 步）之后再打 tag：

```sh
git tag vX.Y.Z
git push --dry-run origin vX.Y.Z            # 栅栏：这里必须只列这个 tag
git push origin vX.Y.Z
```

显式 refspec 与它们的 dry-run 栅栏是承重的，不是仪式。本地克隆可能带着改写前的备份分支与仅本地 tag，其提交是刻意不进远端的，而 `--all` / `--tags` 会把它们静默推上去。本仓库是公开的：推错的 ref 无法收回。如果某次 dry run 列出了第三个 ref，停下来查清那是谁的。

先推分支再打 tag 不花任何代价，却让 tag 的证据是诚实的：认证一个 tag 的那次运行，就是该 tag 所指提交自己的那次运行。重新指向一个 tag 只有在还没有任何东西引用它时才允许——没有 Release、没有装过它的 profile、没有文档——而且只允许一次。

## 6. 打 tag 后核验

1. tag 能在远端解析，且指向预期的提交：`git ls-remote --tags origin | grep X.Y.Z`。
2. 在**空目录里全新安装**，确认 bundle 是从仓库加载的——不是从某个 checkout，也不是通过源码软链接：`pnpm add github:AEmbers/dsh-research-team#vX.Y.Z`。确认构建入口都在，且没有 `src/`。
3. 真实 profile 装得上：`dsh plugin --profile <临时> add github:AEmbers/dsh-research-team#vX.Y.Z`，随后 `dsh --profile <临时> --dump-config` 能组合出本 bundle 的各行。用完删掉那个临时 profile。
4. 插件管理器自己的版本检查接受本版本声明的那条线上的安装，并拒绝一条宿主不满足其声明线的 tag。那个拒绝就是让声明成真的检查，也正是它在桌面宿主上拦下了 `0.2.1` 那次发布。
5. 如果建了 Release，它带显式标题，两种语言段落都能渲染。
6. 本次发布若改了线，置顶的兼容性讨论里能看到新的线（§4）。
7. §2 第 4 步修正过的正文，从 `raw.githubusercontent.com` 读回来仍然正确，而不只是在工作树里正确。
8. `npm run check:public-baseline` 针对已发布的版本为绿。

tag 移动之后，GitHub 可能仍从一个缓存里提供该 tag 的归档，于是一个被重新指向的 tag 可能在一段时间内继续装出旧内容。绝不要为了「修」这个再移动第二次：缓存归档可能胜出，而第二次移动正是 §1 禁止的事。

## 7. 绝不

- 绝不重新指向已被某个 profile、某个 Release 或某份文档指名的 tag，也绝不删除已发布的 tag。
- 绝不改写已发布的发布材料——已经发过的版本的 `CHANGELOG` 条目、Release 正文或发布评论。在下一个 patch 里向前修。唯一例外是几分钟内发现的 factual 错误，经维护者同意后更正。
- 绝不在认证通过之前放宽 `peerDependencies`；范围声明就是支持声明。
- 绝不给一棵「已提交的 `lib/` 与其 `src/` 不一致」的树打 tag。
- 绝不 `git push --all` 或 `git push --tags`。
- 绝不在共享工作树里 `git add -A`；只暂存自己的路径。
