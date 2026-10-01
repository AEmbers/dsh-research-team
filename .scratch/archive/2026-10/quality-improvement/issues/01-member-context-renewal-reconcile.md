# 01 — reconcile Member context renewal after a partial commit

**What to build:** When a Member context renewal commits its new Session binding but retirement or activation fails, the Host can resume the desired transition on restart or an explicit recovery action without creating a second durable authority.
**Blocked by:** None — can start immediately
**Status:** complete

- [x] Treat the durable `member-session-renewed` record as the desired binding and make the remaining retirement/activation effects idempotent.
- [x] Persist or derive enough transition facts to distinguish the target Session, previous Session, and the effects still required; do not infer completion only from the presence of a live handle.
- [x] Make a repeated request return the recorded durable result without pretending that all external effects completed; expose the existing unavailable/diagnostic state until reconciliation succeeds.
- [x] Reconcile a partially renewed Member during startup and through the existing explicit recovery path.
- [x] Cover failure after old-handle disposal, failure while archiving the previous Session, and failure while activating the target Session.
- [x] Preserve the existing rollover envelope and do not create a second Session store or Team authority.
- [x] Keep the regression test proving that the current implementation leaves an unavailable Member after the archive failure, then make it assert convergence after the fix.
- [x] Run the focused lifecycle tests, typecheck, and the full applicable Agent Team test set.
