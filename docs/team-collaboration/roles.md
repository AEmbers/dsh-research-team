# Team Roles

English | [中文](roles.zh.md)

This page records the roster a research Team is staffed from on top of this bundle: which roles exist, which of them are durable Members and which are one-shot subagents, and what each role may and may not do. [README.md](README.md) owns the implemented collaboration contract; this page is a usage contract built on it, not a new mechanism.

## Two kinds of role

A role is **durable** when its work spans rounds and other Members must be able to address it. Durable roles are Team Members: the ledger records them, they hold a Session, they appear in the Team panel, and `@handle` reaches them.

A role is **ephemeral** when it exists for one job inside one round — a briefing written for one prover, a side-by-side reading of one round's drafts. Ephemeral roles are subagents: the role that owns them spawns them, receives one result, and they are gone.

A third thing on this page is not a role at all. The record of attempts and the verified ledger are mechanisms the bundle already provides, and no Member owns them.

## The roster

| Role | It owns | Kind |
| --- | --- | --- |
| `orchestrator` | Work partition across directions, attempt allocation, verdict collection, record and ledger writes | Durable |
| `prover` | One direction and its specification; no implementation | Durable |
| `implementer` | Turning a specification into a runnable experiment; no reading of its result | Durable |
| `verifier` | An independent re-check of one artifact: its own implementation, its own numbers | Durable |
| `protocol-owner` | The criteria themselves: numbering, unit, denominator, comparability | Durable |
| `advisor` | Cross-round log trends, and the next round's instructions and allocation | Durable |
| `summarizer` | One prover's briefing, read out of the history | Ephemeral |
| `crosscheck` | One round's candidates read side by side for shared blind spots | Ephemeral |
| `redteam` | The acceptance criteria themselves | Ephemeral |
| `auditor` | Salvage from rejected work, and the record of dead ends | Ephemeral |
| `literature` | Related work, and the definitions a direction needs | Ephemeral |
| `comparator` | Choosing the strongest verified candidate | Ephemeral |
| `writer` | Expanding an accepted result into a self-contained document | Ephemeral |
| `finalaudit` | The written document, checked against the accepted result | Ephemeral |

## What a durable role may not do

The prohibitions are what make the split worth having, so they belong to the role's definition rather than to its instructions.

- `orchestrator` and `advisor` **hold no opinion on the subject matter**. They may not say which direction looks promising, recommend a technique, or declare one dead. Their authority is over process, not over content.
- `implementer` **does not interpret its own output**. It reports what ran, what it produced, and every deviation from the specification, and stops there.
- `prover` **does not write the implementation**. A direction that cannot be specified without writing code is not yet a direction.
- `verifier` **does not reuse the author's implementation**. A re-check that imports the code under test reproduces the author's mistakes along with the author's numbers.

## Handoffs

A specification travels from `prover` to `implementer`, and a receipt travels back. Both are ordinary Thread messages; the shape is fixed so that a deviation is visible rather than inferred.

The specification states: the question in one sentence; the criterion by number, unit and denominator; the control arms; the seed and fold count; the expected effect size; and the result that would make the direction dead.

The receipt states: the script path, the environment, the wall-clock, the seeds actually used, and **every deviation from the specification listed explicitly**. A silent change of unit or denominator is the failure this shape exists to prevent.

Neither message carries a conclusion. Conclusions are the `verifier`'s and the round's to reach.

## Acceptance

- A candidate is accepted only when the per-artifact reading **and** the side-by-side reading both pass. One reading is not a verdict.
- Every reading is adversarial: each step is wrong until justified, and each citation is unchecked until read.
- Spawn authority belongs to the roles that own an ephemeral role. A `prover` does not spawn a `summarizer`; the `orchestrator` does.
- That authority is a preset rather than a rule to remember: `orchestrator` mounts the delegation rows and no other Member preset does, so a Member invited on `team-member` has no subagent tool to reach for. Invite at least one Member on `orchestrator`, or no ephemeral role above can exist.

## Current state

The roster above is the target. What the bundle provides today differs from it in three ways, and the difference is recorded here rather than implied.

Member provisioning is a Human operation by construction: the Remote that adds a Member records the Human as its actor, so no Member can create another. Durable roles are therefore created by hand; ephemeral ones are not Members at all.

The member form offers no preset choice. The Client always sends `presetId: 'team-member'`, so a Member on `orchestrator` cannot be invited from the interface this bundle ships. The preset exists and composes; reaching it needs the form to offer it.

Three of the durable roles have no mechanism behind them yet. Nothing writes a per-prover briefing, nothing reads verification logs across rounds, and nothing salvages verified fragments from rejected work or records a dead end.
