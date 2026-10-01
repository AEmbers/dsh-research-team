# Scope and questions

## Core question

Does the current `dsh-agent-team` shape reduce the complexity of building and operating a durable Agent Team, or does it mainly relocate Harness complexity into a larger Team-specific surface?

## Review questions

1. What is the minimum domain model required for durable collaboration, and which current concepts are projections, policies, or accidental implementation states?
2. Is the operation ledger a genuinely deep module, or do callers still need to understand commit ordering, revision/idempotency, and projection repair details?
3. Are lifecycle, context continuity, pressure handling, and session persistence one coherent Member runtime model, or multiple coordinators that can disagree?
4. Are package seams earned by independent ownership and change cadence, or are they only build/export partitions?
5. Does the typed Remote expose stable domain commands and projections, or leak Host implementation shape and generated-artifact constraints?
6. Does the Client render a coherent state machine, including loading, stale, empty, unavailable, archived, and ordinary DSH restoration states?
7. Does the `team-member` preset isolate Team behavior completely, including tools, guidance, memory, skill discovery, and lifecycle hooks?
8. Which recurring failures are caused by missing authority, ambiguous lifecycle state, activation-order assumptions, weak error taxonomy, or missing contract tests?
9. Where can a design change make an entire class of bugs impossible rather than adding another guard or recovery path?
10. What should be deleted, merged, or re-owned before adding more features?

## Evidence standard

- Current source and tests are primary for this repository.
- Adjacent Harness docs, source, and tests are primary for Harness contracts.
- Historical `.scratch/` material is context only and must be checked against both codebases.
- A strong finding needs a concrete invariant, observed complexity/failure evidence, and a falsifier or missing test that could disprove it.
