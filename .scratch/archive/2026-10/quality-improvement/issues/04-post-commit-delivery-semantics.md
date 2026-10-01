# 04 — separate durable commit from post-commit delivery failure

**What to build:** A committed Team operation cannot be reported as an ordinary failed mutation merely because Agent wakeup or Client invalidation fails after the ledger append.
**Blocked by:** 01 — member context renewal reconcile
**Status:** complete

- [x] Inventory every post-commit effect in `emitCommitted`, including Client invalidation, Member notification, participation notices, and DM delivery.
- [x] Preserve normal result unions for expected business outcomes and use stable Remote error codes only where the Client needs a distinct recovery branch.
- [x] Decide and document the observable result for “durable commit succeeded, delivery is pending/failed”; do not silently swallow errors that leave the Client believing delivery completed.
- [x] Make Member wakeup failure retryable or reconcileable from durable Inbox facts, without appending a duplicate Team operation.
- [x] Keep DM's existing explicit recorded-but-not-delivered semantics aligned with the chosen general rule.
- [x] Add failure injection around Agent steer/followup and assert ledger durability, Remote behavior, Client invalidation behavior, and subsequent recovery.
- [x] Verify synchronous Cordis listener errors cannot accidentally turn a durable mutation into a false rollback signal.
- [x] Run Host, Client Remote, and browser-facing contract tests as applicable.
