# Quality improvement

**Status:** ready-for-implementation
**Last checked:** 2026-10-01
**Current frontier:** Research has converged into the decision snapshot in `spec.md` and seven dependency-ordered implementation tickets under `issues/`. The strongest path is Member context renewal reconciliation, followed by lifecycle boot convergence; attachment idempotency can proceed in parallel. This work item defines behavior and acceptance boundaries; dedicated implementation agents may now execute the tickets.
**Completion conditions:**

- [x] First-pass Team modules, package seams, durable authorities, and Harness extension contracts are inventoried from source and tests.
- [x] First-pass recurring failure patterns are traced to design causes or explicitly marked as operational/unknown.
- [x] A provisional ranking and falsifiers are recorded; first targeted tests and Harness event checks are recorded in `validation/2026-10-01-first-pass.md`.
- [x] Failure injection covered path-attachment retry, archive retry, and context-renewal retry; the differing retry semantics are recorded in the operation-lifecycle and findings materials.
- [x] A decision snapshot is accepted and dependency-ordered implementation tickets exist for the agreed improvements.
- [x] Durable conclusions have been moved into maintained documentation before this work item is archived.

**Formal-doc exit:** Update the owning documents under `docs/` only for conclusions that remain true after implementation; archive this work item after tickets and validation are complete.
