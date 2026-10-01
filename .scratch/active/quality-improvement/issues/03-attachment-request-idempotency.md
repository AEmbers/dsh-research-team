# 03 — make attachment preparation and upload retries idempotent

**What to build:** Retrying an attachment upload or a message/reply with path attachments returns the original result for the same request and does not create unreferenced cache entries.
**Blocked by:** None — can start immediately
**Status:** ready

- [ ] Define `requestId` as an idempotency key for `putAttachment`; same request and same normalized payload replays the original attachment result, while a different payload is rejected.
- [ ] Use a stable request-scoped cache identity or an equivalent Host-owned idempotency mechanism without adding a second Team durable store.
- [ ] Move path attachment preparation behind the existing message/reply request-idempotency boundary, or make preparation request-stable and reusable on retry.
- [ ] Ensure failed message/reply validation removes any newly prepared cache entry that is not referenced by a committed operation.
- [ ] Make message and reply collision checks compare the recorded resolved attachment metadata/ids, not the caller's raw path list.
- [ ] Cover send and reply, same request/same payload, same request/different payload, upload retry, and upload retry after process restart if the cache contract supports it.
- [ ] Keep the attachment cache bounded and preserve existing GC behavior for genuinely unreferenced uploads.
- [ ] Run attachment, message, typecheck, and applicable client/tool contract tests.
