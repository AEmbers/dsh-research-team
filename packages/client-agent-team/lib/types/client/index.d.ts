import type { Context as ClientContext } from '@deepseek-ai/cordis';
import { TeamNavigation } from './navigation.ts';
import { TeamDraftStore } from './drafts.ts';
import { type TeamKey } from './locales.ts';
export type { TeamMode, TeamNavigationActions, TeamNavigationSnapshot } from './navigation.ts';
export type { TeamKey } from './locales.ts';
export { TeamNavigation } from './navigation.ts';
export declare const inject: string[];
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        team: TeamKey;
    }
}
declare module '@deepseek-ai/cordis' {
    interface Context {
        teamNavigation: TeamNavigation;
        teamDrafts: TeamDraftStore;
    }
}
export declare function apply(ctx: ClientContext): Promise<void>;
//# sourceMappingURL=index.d.ts.map