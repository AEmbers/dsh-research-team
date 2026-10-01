# 05 — define a small stable Remote error vocabulary

**What to build:** Client code can distinguish the small set of expected cross-Remote failures that require different UI or retry behavior without parsing error messages.
**Blocked by:** 04 — separate durable commit from post-commit delivery failure
**Status:** complete

- [x] Inventory expected failures at the Host/Client boundary and group them by caller action, not by current message text.
- [x] Keep business decisions such as unread-required, stale-revision, and confirmation-required as result unions where they already model normal control flow.
- [x] Add stable Remote codes/details only for failures that need a distinct Client branch, beginning with one concrete path such as attachment read or Member restart.
- [x] Verify Typert declaration merging and generated host/client artifacts for the chosen codes/details.
- [x] Update Client loading/error/retry behavior to branch on the stable code and preserve a useful fallback for unknown errors.
- [x] Test authorization, resource absence, unavailable Member, invalid attachment, and session-unreadable cases only where the chosen path exposes them.
- [x] Do not wrap every Host exception or make natural-language messages part of the API contract.
