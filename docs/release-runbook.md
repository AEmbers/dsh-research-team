# Release Runbook

English | [中文](release-runbook.zh.md)

This document is the procedure for releasing a version of `@sophialin/dsh-research-team`. It exists so a maintainer can run a release from this page alone, including the checks added because a defect once reached users. It is not a behaviour specification: source and tests define behaviour, and [`dsh-release-compatibility.md`](dsh-release-compatibility.md) owns the separate question of *which* DSH line the bundle supports. Certification decides the peer range; this runbook decides how a version carrying that decision reaches a profile.

This bundle is not published to a registry. A release is a tag in this repository and an install names it: `dsh plugin --profile <name> add github:AEmbers/dsh-research-team#vX.Y.Z`. The built output travels with the source, so nothing is compiled on the consumer's machine and there is no registry step to verify.

## 1. Who decides what

- **A maintainer decides the version number and gives the go signal.** A release never starts from CI, a schedule, or an accumulated diff. Fixes are patches, new capabilities are minors; inside `0.x`, a change that only carries compatibility is a patch.
- **Release material is reviewed verbatim before anything ships.** Draft the `CHANGELOG` bullets, paste the exact text in the working Thread, and tag only on explicit approval. Approval of a direction is not approval of wording.
- **A released tag is permanent.** Never re-point a `vX.Y.Z` tag that a profile, a Release, or a document already names. A mistake is corrected by a new patch. The single opening is §5's: a tag nothing references yet may be moved once, deliberately.
- **A release belongs to exactly one DSH line.** The version number does not encode the line; the `@deepseek-ai/dsh-*` peer range does. Two lines can be current at once, each with its own tag, and a release that moves the line advances the peers and all seventeen version-bearing spots in the same commit (§2 step 3).

## 2. Pre-flight

1. **Read the change set.** `git log --oneline v<previous>..HEAD`, then read the diff of every feature commit. Commit messages understate scope; a change is user-facing only if a user of the bundle can see or invoke it.
2. **Draft the material**, then send it for review (§4) — no tag without approved text.
3. **Sweep the version-bearing surfaces.** `npm run check:versions` reads every place that restates the certified DSH baseline and refuses a split one: it takes the harness tag in `.github/workflows/ci.yml` as the reference, requires every other spot to state the same version, requires each `@deepseek-ai/dsh-*` peer range to admit from it, and requires both README install commands to name the tag being released.
   - The list of spots lives in [`scripts/check-version-consistency.mjs`](../scripts/check-version-consistency.mjs) — never keep a second copy by hand.
   - The declaration in `.hoplite/settings.json` sits inside a JSON string with escaped quotes, so a naive `grep` reports nothing there; the gate reads it correctly.
   - The compatibility document's current-baseline sentence is matched word for word against the declared peer range, so it moves with the peers and not separately from them.
4. **Sweep the prose for statements this release falsifies.** Grep the maintained documents for sentences conditioned on the release *not* having happened — a version described as unpublished, a peer range described as pending, a warm-line pin pairing an older DSH line with the last bundle release that still supports it. Correcting a document's current-state claim belongs in the release commit; rewriting shipped history does not (§7).
5. **Confirm the committed build output matches the source.** `packages/*/lib/**` is committed and ships, so an uncommitted `src/` edit would tag a `lib/` that does not correspond to it. Run `npm run build` and stage what it changes. Untracked files outside the artifact (`scripts/`, `.scratch/`) cannot ship and do not block a release. Never stash or revert another member's work to clear the tree — establish whose it is first.
6. **Know what CI will and will not do.** The release commit's own run must be green on **both lanes** before tagging (§5), including the step that fails when the committed `lib/` is stale. A documentation-only push produces no run at all: `ci.yml` ignores `**.md`, `docs/**`, and `assets/**`, so its evidence is `git diff --check`, link resolution, and a read-back from the remote.

## 3. Check ladder

Run in this order; a failure stops the release, and a fix re-runs from the failed step.

| Command | It refuses |
| --- | --- |
| `npm run typecheck` | Type errors against the certified harness checkout. |
| `npm test` | Test failures, and the five mechanical gates it bundles: `check:facades`, `check:docs`, `check:core-skills`, `check:boundaries`, `check:versions`. |
| `npm run build` | Build errors, and everything the committed `lib/` is derived from. |
| `npm run lint` | Lint findings. |
| `npm run test:browser` | Broken composition, Remote mounting, slot takeover, or ordinary-DSH restoration. Needs the adjacent `../deepseek-harness` checkout and that checkout's own built `apps/web/dist`; browser acceptance is a local step and never runs in CI. |
| `npm pack --dry-run` | Nothing by itself — record the file count for the release report. |
| `npm run check:artifact` | An artifact that would ship broken: stray `.ts`/`.tsx`, a missing `cordis.patch.yml`, or a runtime relative import whose target is not in the tarball. Run it *after* `npm run build`. |
| `npm run check:public-baseline` | A public surface that drifted from the manifest's certified baseline (both READMEs and the pinned compatibility discussion). |
| `git diff --check v<previous>..HEAD` | Whitespace damage anywhere in the release's change set. The bare `git diff --check` inspects only *unstaged* work, so it passes silently once the release is committed — which is when the ladder runs. |

## 4. Release material

**`CHANGELOG.md`** gets a `## [X.Y.Z] - YYYY-MM-DD` section at the top, one theme per bullet. An `## [Unreleased]` section written by implementers is a completeness checklist, not draft prose. The entry is what a reader of this repository learns from; the tag carries the code.

**A GitHub Release is optional, and one is worth creating when the tag is a line a consumer should be told about.** Its body ships both languages: Chinese first, English below, with a language switcher at the top and the sections 新增功能 / 体验优化 / 问题修复 / 其他变更 mirrored in English.

- Open with one line naming the previous version; close with the install block, the compatibility line, and a Full Changelog compare link.
- Write the register of DeepSeek Harness's own release notes: about eight bullets of one sentence each, naming the theme rather than its sub-behaviours.
- Leave out metrics, internal nouns, and file names; state what the version *is*, not what changed about it.
- The bundle's own update tip links to this repository's Releases page, so a tag with no Release leaves that tip pointing at nothing.

**The pinned compatibility discussion** in `deepseek-ai/deepseek-harness` (discussion 4303) is a public surface with no sync path, which is why `check:public-baseline` exists. Maintenance is a rotation over three comments of our own: post the new release comment, fold the previous version into the version-history comment, then delete our own previous release comment by node id — post, verify, then delete. Never edit or delete anyone else's comment; the thread legitimately carries external comments and replies beyond our three.

A release that does not move the line needs no rotation: the gate compares that thread against the manifest's baseline, not against the version.

## 5. Tag

Assert both release-semantics facts **before** pushing:

1. The tag is exactly `v<package.json version>` — no drift between manifest and tag.
2. The peer range in `package.json` is the line this release is for, and §2 step 3's spots agree with it. A tag whose manifest names a line its consumer cannot run is refused at install time, not warned about.

```sh
git add package.json CHANGELOG.md packages docs
git commit -m "chore: release X.Y.Z"
git push --dry-run origin master            # fence: this must list exactly master
git push origin master
```

Wait for this run to be green on both lanes (§2 step 6) before tagging:

```sh
git tag vX.Y.Z
git push --dry-run origin vX.Y.Z            # fence: this must list exactly the tag
git push origin vX.Y.Z
```

The explicit refspecs and their dry-run fences are load-bearing, not ceremony. A clone can carry pre-rewrite backup branches and local-only tags whose commits are deliberately absent from the remote, and `--all` / `--tags` publish them silently. This repository is public: a stray ref cannot be withdrawn. If a dry run lists a third ref, stop and find out whose it is.

Pushing the branch before the tag costs nothing and keeps the tag's evidence honest: the run that certifies a tag is the run of the commit the tag names. Re-pointing a tag is allowed only while nothing references it yet — no Release, no installed profile, no document — and only once.

## 6. Post-tag verification

1. The tag resolves on the remote and names the intended commit: `git ls-remote --tags origin | grep X.Y.Z`.
2. A **fresh install in an empty directory** loads the bundle from the repository — not from a checkout, and not through a source symlink: `pnpm add github:AEmbers/dsh-research-team#vX.Y.Z`. Confirm the built entry points are present and `src/` is not.
3. A real profile installs it: `dsh plugin --profile <throwaway> add github:AEmbers/dsh-research-team#vX.Y.Z`, after which `dsh --profile <throwaway> --dump-config` composes the bundle's rows. Remove the throwaway profile afterwards.
4. The plugin manager's own version check accepts the install on the line this release claims, and refuses a tag whose declared line the host does not satisfy. That refusal is the check that makes the declaration real, and the one that caught the `0.2.1` release on a Desktop host.
5. If a Release was created, it carries an explicit title and renders both language sections.
6. The pinned compatibility discussion shows the new line when this release moved it (§4).
7. The prose corrected in §2 step 4 still says the right thing when read back from `raw.githubusercontent.com`, not just from the working tree.
8. `npm run check:public-baseline` is green against the released version.

GitHub can serve a tag's archive from a cache after the tag moves, so a re-pointed tag may keep installing the old contents for a while. Never re-point it again to "fix" that: the cached archive can win, and the second move is what §1 forbids.

## 7. Never

- Never re-point a tag that a profile, a Release, or a document already names, and never delete a released tag.
- Never rewrite shipped release material — the `CHANGELOG` entry, the Release body, or the release comment of a version that already shipped. Fix forward in the next patch. The single exception is a factual error found within minutes, corrected with maintainer approval.
- Never widen `peerDependencies` before certification has passed; a range claim is a support claim.
- Never tag a tree whose committed `lib/` does not match its `src/`.
- Never `git push --all` or `git push --tags`.
- Never `git add -A` in the shared worktree; stage your own paths.
