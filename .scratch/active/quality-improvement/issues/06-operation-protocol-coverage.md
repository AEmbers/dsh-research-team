# 06 — contract-test non-exhaustive operation protocol surfaces

**What to build:** Adding an operation kind makes schema, request comparison, result mapping, legacy policy, and explicit no-op intent omissions fail in focused tests without introducing a generic operation registry.
**Blocked by:** None — can start immediately
**Status:** ready

- [ ] Derive the test universe from `AgentTeamOperation['kind']` or an equivalent compile-time closed list.
- [ ] Cover the Zod durable schema, request comparators, result mappers, legacy normalization, and explicit no-op scope/Inbox intent.
- [ ] Do not duplicate existing exhaustive checks for projection apply, change scopes, thread refs, or replay validation.
- [ ] Represent intentional no-op behavior explicitly so the test distinguishes a documented no-op from an omitted case.
- [ ] Add at least one negative fixture showing that a new field or kind without protocol coverage fails the contract.
- [ ] Keep the coverage table a test contract, not a runtime authority or cross-domain registry.
- [ ] Run operation, schema, replay, and typecheck tests.
