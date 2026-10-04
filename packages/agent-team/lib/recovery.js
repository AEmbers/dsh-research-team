const TRANSIENT_NETWORK_PATTERNS = [/fetch failed/i, /econnreset/i, /etimedout/i, /socket hang up/i];
const RATE_LIMIT_PATTERNS = [/\b429\b/, /rate limit/i, /\b503\b/, /overloaded/i];
/**
 * Read the stable code/status off any Harness-shaped failure without trusting
 * class identity: a cross-package copy of `dsh-llm` preserves own data but
 * not `instanceof`, so the own fields are the contract.
 */
function structuredFailure(error) {
    if (typeof error !== 'object' || error === null)
        return {};
    const root = error;
    const failure = typeof root.failure === 'object' && root.failure !== null
        ? root.failure
        : undefined;
    const code = typeof failure?.code === 'string' && failure.code.length > 0 ? failure.code
        : typeof root.code === 'string' && root.code.length > 0 ? root.code : undefined;
    if (code === undefined)
        return {};
    const status = typeof failure?.status === 'number' && Number.isInteger(failure.status) ? failure.status
        : typeof root.status === 'number' && Number.isInteger(root.status) ? root.status : undefined;
    return { code, ...status === undefined ? {} : { status } };
}
/** The readable message of an arbitrary thrown value. */
function failureMessage(error) {
    if (error instanceof Error)
        return error.message;
    if (typeof error === 'object' && error !== null) {
        const message = error.message;
        if (typeof message === 'string' && message.length > 0)
            return message;
    }
    return String(error);
}
/**
 * Classify one `agent/error` occurrence. Structured data outranks wording: a
 * Harness code decides alone (a message can never upgrade a terminal failure
 * back to recoverable), and the narrow message signatures run only when no
 * usable code exists at all — `UNKNOWN` means the Harness folded a foreign
 * error whose own taxonomy Team must not trust.
 */
export function classifyRecoverableError(error) {
    const { code, status } = structuredFailure(error);
    if (code !== undefined && code !== 'UNKNOWN') {
        if (code === 'RATE_LIMIT')
            return 'rate limiting';
        if (code === 'TRANSPORT' || code === 'TIMEOUT')
            return 'transient network';
        if (status === 429 || status === 503)
            return 'rate limiting';
        return undefined;
    }
    const message = failureMessage(error);
    if (RATE_LIMIT_PATTERNS.some(pattern => pattern.test(message)))
        return 'rate limiting';
    if (TRANSIENT_NETWORK_PATTERNS.some(pattern => pattern.test(message)))
        return 'transient network';
    return undefined;
}
export const RECOVERY_DELAY_MS = 120_000;
export const RECOVERY_MAX_CONSECUTIVE_ERRORS = 3;
/**
 * Per-member automatic recovery episodes. An episode is every recoverable
 * `agent/error` occurrence until a clean turn end, regardless of error text
 * or family. Each of the first two occurrences schedules its own wakeup.
 */
export class RecoveryCoordinator {
    episodes = new Map();
    wake;
    onStandDown;
    delayMs;
    maxConsecutiveErrors;
    constructor(options) {
        this.wake = options.wake;
        this.onStandDown = options.onStandDown;
        this.delayMs = options.delayMs ?? RECOVERY_DELAY_MS;
        this.maxConsecutiveErrors = options.maxConsecutiveErrors ?? RECOVERY_MAX_CONSECUTIVE_ERRORS;
    }
    /** Observe one `agent/error` occurrence for a Member; `error` is the raw event payload. */
    onError(memberId, error) {
        if (classifyRecoverableError(error) === undefined) {
            // A non-recoverable failure cancels anything pending: retrying cannot help.
            this.stopTracking(memberId);
            return;
        }
        let episode = this.episodes.get(memberId);
        if (episode === undefined) {
            episode = { consecutiveFailures: 0, timers: new Set() };
            this.episodes.set(memberId, episode);
        }
        if (episode.stoodDown === true)
            return;
        episode.consecutiveFailures += 1;
        if (episode.consecutiveFailures >= this.maxConsecutiveErrors) {
            this.cancelTimers(episode);
            episode.stoodDown = true;
            this.onStandDown?.(memberId, episode.consecutiveFailures);
            return;
        }
        const timer = setTimeout(() => {
            episode.timers.delete(timer);
            try {
                this.wake(memberId);
            }
            catch {
                this.stopTracking(memberId);
            }
        }, this.delayMs);
        episode.timers.add(timer);
    }
    /** A turn ended cleanly (running→idle without an error): the episode is over. */
    onCleanTurnEnd(memberId) {
        this.stopTracking(memberId);
    }
    stopTracking(memberId) {
        const episode = this.episodes.get(memberId);
        if (episode === undefined)
            return;
        this.cancelTimers(episode);
        this.episodes.delete(memberId);
    }
    dispose() {
        for (const episode of this.episodes.values())
            this.cancelTimers(episode);
        this.episodes.clear();
    }
    cancelTimers(episode) {
        for (const timer of episode.timers)
            clearTimeout(timer);
        episode.timers.clear();
    }
}
