import type { PropsLocale } from '@deepseek-ai/dsh-client-ui-slots';
import { type TeamEnvironmentSource } from './environment-check.ts';
/**
 * The local environment check: which DSH line this installation runs against,
 * and whether that line is inside the range the bundle declares.
 *
 * Three verdicts, never a fourth, and never a guess: a fact the Host could not
 * establish is `undetermined`, not a mismatch. Every verdict is stated as text
 * plus an icon, so the state survives a reader who cannot tell the colors
 * apart. The support line is written in words rather than as a bare semver
 * range, and the tested combination is printed only when the Host could derive
 * both of its versions — the page never supplies a version of its own.
 */
export type EnvironmentCheckProps = PropsLocale<'team'> & {
    readonly environment: TeamEnvironmentSource;
};
export declare function EnvironmentCheck({ t, environment }: EnvironmentCheckProps): import("react").JSX.Element | null;
//# sourceMappingURL=EnvironmentCheck.d.ts.map