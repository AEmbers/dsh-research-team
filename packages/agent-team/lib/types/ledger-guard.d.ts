/**
 * Bundle-owned ledger guard for `@sophialin/dsh-research-team`.
 *
 * DSH 0.2.1-alpha.1 removed its runtime invariant service (`@deepseek-ai/dsh-invariants`
 * and every package's `./invariant` companion), so this check is the bundle's own.
 * It keeps both behaviours the invariant companion provided: a durable ledger that
 * cannot be re-derived fails the mount, and a divergence found after a commit stays
 * loud on the caller's frame.
 *
 * @module @sophialin/dsh-research-team/ledger-guard
 */
import type { Context } from '@deepseek-ai/cordis';
/**
 * Thrown when the durable ledger and the Team projection diverge. The commit
 * path's failure boundary re-raises it so a failed integrity check is never
 * swallowed as a post-commit effect failure.
 */
export declare class LedgerDivergenceError extends Error {
    /** Stable machine-readable failure code. */
    readonly code: "LEDGER_DIVERGENCE";
    /** Full npm package name that owns the check. */
    readonly packageName = "@sophialin/dsh-research-team";
    /**
     * Construct a divergence failure.
     * @param message - violated contract, without the standard error prefix.
     */
    constructor(message: string);
}
/** Cordis plugin name of the ledger guard. */
export declare const name = "agent-team-ledger-guard";
/** The Team Host service this guard validates. */
export declare const inject: string[];
/**
 * Install the ledger guard: validate once at mount, then re-derive after each
 * burst of commits, on a frame the committing caller does not wait on.
 * @param ctx - Cordis context carrying the Team Host service.
 * @returns the disposer that clears a scheduled validation.
 */
export declare const apply: (ctx: Context) => (() => void);
//# sourceMappingURL=ledger-guard.d.ts.map