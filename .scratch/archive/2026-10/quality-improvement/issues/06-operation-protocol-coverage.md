# 06 — contract-test non-exhaustive operation protocol surfaces

**What to build:** Adding an operation kind makes schema, request comparison, result mapping, legacy policy, and explicit no-op intent omissions fail in focused tests without introducing a generic operation registry.
**Blocked by:** None — can start immediately
**Status:** complete

- [x] Derive the test universe from `AgentTeamOperation['kind']` or an equivalent compile-time closed list.
- [x] Cover the Zod durable schema, request comparators, result mappers, legacy normalization, and explicit no-op scope/Inbox intent.
- [x] Do not duplicate existing exhaustive checks for projection apply, change scopes, thread refs, or replay validation.
- [x] Represent intentional no-op behavior explicitly so the test distinguishes a documented no-op from an omitted case.
- [x] Add at least one negative fixture showing that a new field or kind without protocol coverage fails the contract.
- [x] Keep the coverage table a test contract, not a runtime authority or cross-domain registry.
- [x] Run operation, schema, replay, and typecheck tests.
