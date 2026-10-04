/** The one local environment check: how the running DSH compares to the line this bundle declares. */
import type { AgentTeamEnvironmentSupportRange, AgentTeamEnvironmentVerdict } from './types.ts';
/**
 * What the settings page needs to state the environment.
 *
 * Deliberately not the wire type (`AgentTeamEnvironmentResult`): that one states
 * every fact as optional, because a Transport may withhold any of them, while
 * this is what the checker itself guarantees. `bundleVersion` is therefore
 * required here and optional there, and the seam in `index.ts` is where the two
 * meet.
 */
export interface EnvironmentReport {
    readonly verdict: AgentTeamEnvironmentVerdict;
    /** Host-side diagnostic for an `undetermined` verdict; never rendered as user copy. */
    readonly reason?: string | undefined;
    /** Version of the bundle this Host runs from, or `'unknown'` when its manifest is unreadable. */
    readonly bundleVersion: string;
    /**
     * The running DSH version — what the page states it is running. Omitted, not
     * guessed, when it could not be read; it is a different fact from
     * `certifiedDshVersion`, which is the line this bundle declares support for.
     */
    readonly dshVersion?: string | undefined;
    /** Lower bound of the declared support range: the certified, actually-tested DSH line. */
    readonly certifiedDshVersion?: string | undefined;
    readonly supportRange?: AgentTeamEnvironmentSupportRange | undefined;
}
/**
 * Read the support line from the installed manifest's DSH peers, or nothing.
 *
 * Every `@deepseek-ai/dsh-*` peer must carry exactly the same range, and it must
 * be a `>=<lower> <upper>` series: the version line is the manifest's own claim
 * and a partially drifted manifest cannot state one. `scripts/check-version-consistency.mjs`
 * holds the same shape to the certified baseline, so a run of this bundle
 * states the same line its README does. Returns `undefined` when the peers
 * disagree or the shape is unreadable.
 */
export declare function supportRangeOf(manifest: object): AgentTeamEnvironmentSupportRange | undefined;
/**
 * Judge one already-resolved triple, so every branch is testable without an
 * environment. The verdict comes from the Harness's own
 * `evaluatePluginCompatibility` — the plugin manager decides installability with
 * that same function, and prerelease ordering is exactly what a hand-written
 * comparison gets wrong.
 *
 * @param manifest - the installed bundle's parsed manifest, the source of the declared support line.
 * @param runtimeVersion - the running DSH version, or `'unknown'` when it could not be read.
 * @param bundleVersion - the installed bundle version, or `'unknown'`.
 * @param unavailable - why the running version is not known, recorded when it is `'unknown'`.
 * @returns the report the settings page renders.
 */
export declare function evaluateEnvironment(manifest: object, runtimeVersion: string, bundleVersion: string, unavailable?: string): EnvironmentReport;
/**
 * Read this Host's own environment: the installed bundle version, the declared
 * support line, and how the running DSH compares to it.
 *
 * The certified DSH version is the range's lower bound, never the newest cut
 * tested against it: `docs/dsh-release-compatibility.md` §4 records a baseline
 * inside the declared range without moving the peers, so every version spot
 * keeps naming the bound. Reading it from anywhere else would reintroduce the
 * hand-maintained constant this check exists to remove.
 *
 * @returns the report, with `verdict: 'undetermined'` for any fact not established.
 */
export declare function reportEnvironment(): EnvironmentReport;
//# sourceMappingURL=environment-check.d.ts.map