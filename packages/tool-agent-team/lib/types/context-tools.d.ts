/**
 * Model-facing context-management tools for Team Members.
 *
 * `context_rollover` and `context_checkpoint` are the published engine's tools,
 * built by `createContinuityTools`: the engine owns their argument contract, the
 * anti-forgery gate on a cited ref, the `concludeTurn()` timing, and the render
 * shapes, while the Team supplies its own vocabulary (`TEAM_CONTINUITY_TEXT`)
 * and the mechanism behind `ContinuityToolAdapter`. Hand-written copies of those
 * two descriptions used to live here and drifted from the engine's defaults, so
 * the Team's guidance now travels only through the engine's text seams.
 *
 * `context_timeline` deliberately stays Team-owned. Its render never prints a
 * ref-shaped string for a non-restorable row — a short digest names the row
 * instead, because a printed ref is exactly what a model copies into
 * `checkpointRef` — and the engine's render has no switch for that. The
 * adapter's own `timeline` member is still implemented: the engine's contract
 * requires it, and the shape it returns is the one the engine's render reads.
 * @module @sophialin/dsh-research-team/context-tools
 */
export declare function registerContextTools(ctx: {
    readonly tools: {
        register(tool: unknown): void;
    };
}): void;
//# sourceMappingURL=context-tools.d.ts.map