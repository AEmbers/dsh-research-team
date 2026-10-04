import type { RemoteResult } from '@deepseek-ai/dsh-typert-protocol';
import type { AgentTeamEnvironmentResult } from '@sophialin/dsh-research-team/types';
/**
 * The Client's one projection of the local environment check.
 *
 * Deliberately separate from the Human identity projection: this is a fact
 * about the installation, not about the Human, it is read once and never
 * written back, and the settings page is the only surface that renders it.
 * Folding it into the identity store would make every seat that names the
 * Human depend on a version comparison it has no use for.
 *
 * Reads are demand-driven off the first subscriber, so an ordinary conversation
 * never calls the Remote. There is no retry: `undetermined` is a settled
 * verdict about facts the Host could not establish, not a failed request, so a
 * reader has nothing to retry.
 */
/** One read of the environment check, replaced wholesale on every change. */
export interface TeamEnvironmentSnapshot {
    /** `loading` until the first read settles, `ready` once it has. */
    readonly status: 'loading' | 'ready';
    /** The report to render; undefined until the first read settles. */
    readonly report?: AgentTeamEnvironmentResult | undefined;
}
/** Read-side face the settings page binds. */
export interface TeamEnvironmentSource {
    getSnapshot(): TeamEnvironmentSnapshot;
    subscribe(listener: () => void): () => void;
}
/** Host call the store reads through; one loader per Client context. */
export interface TeamEnvironmentLoader {
    loadEnvironment: () => Promise<RemoteResult<AgentTeamEnvironmentResult>>;
}
export declare class TeamEnvironmentCheck implements TeamEnvironmentSource {
    private snapshot;
    private readonly listeners;
    private reading;
    private readonly loader;
    constructor(loader: TeamEnvironmentLoader);
    readonly getSnapshot: () => TeamEnvironmentSnapshot;
    /**
     * Observe the check, starting the first read when nobody has read yet.
     * @param listener - invoked after every snapshot replacement.
     * @returns the disposer removing this listener.
     */
    readonly subscribe: (listener: () => void) => (() => void);
    /**
     * Read the Host projection. Concurrent callers share one round trip, and a
     * failed read keeps the last accepted report — the block never blanks out
     * over a background read.
     * @returns settlement of this read (or of the read already in flight).
     */
    refresh(): Promise<void>;
    dispose(): void;
    private read;
    /**
     * Settle a read that produced no report, so a reader stops waiting on a
     * `loading` that will never finish. A report that already stands is left
     * untouched: a failed background read never blanks the block.
     */
    private fail;
    private commit;
}
/** Subscribe one rendered block to the environment check. */
export declare function useEnvironmentCheck(environment: TeamEnvironmentSource): TeamEnvironmentSnapshot;
//# sourceMappingURL=environment-check.d.ts.map