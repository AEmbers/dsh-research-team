import type { AgentTeamMemberId } from './types.ts';
/**
 * Error families the automatic recovery may act on. A failure classifies from
 * the Harness's structured data whenever it carries any — the stable code
 * first, then the HTTP status — and only an error with no usable code falls
 * back to conservative string signatures. The falsifiers: a structured code
 * other than `RATE_LIMIT`/`TRANSPORT`/`TIMEOUT` without a 429/503 status is a
 * provider, credential, quota, context, or request state that a wake cannot
 * fix (including context-overflow and auth failures, where retrying is
 * pointless or harmful) and stays manual; so does any failure whose only
 * evidence is unstructured wording that matches neither signature.
 */
export type RecoverableErrorKind = 'transient network' | 'rate limiting';
/**
 * Classify one `agent/error` occurrence. Structured data outranks wording: a
 * Harness code decides alone (a message can never upgrade a terminal failure
 * back to recoverable), and the narrow message signatures run only when no
 * usable code exists at all — `UNKNOWN` means the Harness folded a foreign
 * error whose own taxonomy Team must not trust.
 */
export declare function classifyRecoverableError(error: unknown): RecoverableErrorKind | undefined;
export interface RecoveryCoordinatorOptions {
    /** Performs a delayed recovery wakeup; throwing means the Member is gone and tracking stops. */
    readonly wake: (memberId: AgentTeamMemberId) => void;
    /** Called once when an episode reaches its failure limit and tracking stands down. */
    readonly onStandDown?: (memberId: AgentTeamMemberId, consecutiveFailures: number) => void;
    /** Delay between a recoverable error and its automatic recovery wakeup. */
    readonly delayMs?: number;
    /** Consecutive recoverable errors allowed before automatic recovery stands down. */
    readonly maxConsecutiveErrors?: number;
}
export declare const RECOVERY_DELAY_MS = 120000;
export declare const RECOVERY_MAX_CONSECUTIVE_ERRORS = 3;
/**
 * Per-member automatic recovery episodes. An episode is every recoverable
 * `agent/error` occurrence until a clean turn end, regardless of error text
 * or family. Each of the first two occurrences schedules its own wakeup.
 */
export declare class RecoveryCoordinator {
    private readonly episodes;
    private readonly wake;
    private readonly onStandDown;
    private readonly delayMs;
    private readonly maxConsecutiveErrors;
    constructor(options: RecoveryCoordinatorOptions);
    /** Observe one `agent/error` occurrence for a Member; `error` is the raw event payload. */
    onError(memberId: AgentTeamMemberId, error: unknown): void;
    /** A turn ended cleanly (running→idle without an error): the episode is over. */
    onCleanTurnEnd(memberId: AgentTeamMemberId): void;
    stopTracking(memberId: AgentTeamMemberId): void;
    dispose(): void;
    private cancelTimers;
}
//# sourceMappingURL=recovery.d.ts.map