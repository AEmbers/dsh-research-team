# 07 — classify recovery failures from structured Harness data

**What to build:** Team terminal recovery uses the structured Harness failure when available, while preserving the separate same-step pressure retry path.
**Blocked by:** 04 — separate durable commit from post-commit delivery failure
**Status:** complete

- [x] Read `LlmError.failure` and the applicable `HarnessError` code/status before using a narrow message fallback.
- [x] Keep `agent/request-error` responsible for same-step pressure/compaction retry and `agent/error` responsible for terminal-turn recovery.
- [x] Define the small set of recoverable failure classes and the falsifier for each; do not retry every provider or transport error.
- [x] Preserve existing consecutive-error limits, manual recovery, and Member diagnostics.
- [x] Add fixtures for structured provider failure, transport/status failure, unknown Error, and a non-recoverable terminal failure.
- [x] Verify recovery behavior through Harness event contracts without modifying the Harness repository.
