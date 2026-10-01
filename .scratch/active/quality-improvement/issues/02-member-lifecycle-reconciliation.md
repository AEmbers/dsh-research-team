# 02 — reconcile archived, suspended, and inactive Member effects

**What to build:** After archive, suspend, or remove, the durable Member state is enough for boot and retry to converge Session grouping, live handles, runtime state, and private memory to the intended lifecycle state.
**Blocked by:** 01 — member context renewal reconcile
**Status:** ready

- [ ] Define the desired external state for `enabled`, `suspended`, `archived`, and `inactive` Members in one lifecycle table.
- [ ] Re-run only the effects allowed by the durable state: suspended keeps the Session, archived keeps data but hides the Session, inactive removes the Session grouping and private memory.
- [ ] Make archive/remove/suspend cleanup safe to repeat after a process crash or a failed Workspace/Session/filesystem call.
- [ ] Add startup reconciliation for archived and suspended Members without activating them as enabled Members.
- [ ] Preserve `removeMember`'s existing inactive cleanup behavior and reuse its existing cleanup primitives.
- [ ] Keep lifecycle ordering serialized through the existing queue; introduce a narrow lifecycle controller only if the implementation demonstrably removes repeated coordination rules.
- [ ] Add failure injection for Workspace archive, Agent disposal, and private-memory cleanup, including restart convergence.
- [ ] Verify that no duplicate live handle, Session binding, or Member durable state is created.
- [ ] Run lifecycle, persistence, typecheck, and full applicable tests.
