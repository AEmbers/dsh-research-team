/**
 * Bundle-owned ledger guard for `@sophialin/dsh-research-team`.
 *
 * DSH 0.2.0-rc.2 removed its runtime invariant service (`@deepseek-ai/dsh-invariants`
 * and every package's `./invariant` companion), so this check is the bundle's own.
 * It keeps both behaviours the invariant companion provided: a durable ledger that
 * cannot be re-derived fails the mount, and a divergence found after a commit stays
 * loud on the caller's frame.
 *
 * @module @sophialin/dsh-research-team/ledger-guard
 */

import type { Context } from '@deepseek-ai/cordis'

const PACKAGE_NAME = '@sophialin/dsh-research-team'

/**
 * Thrown when the durable ledger and the Team projection diverge. The commit
 * path's failure boundary re-raises it so a failed integrity check is never
 * swallowed as a post-commit effect failure.
 */
export class LedgerDivergenceError extends Error {
  /** Stable machine-readable failure code. */
  readonly code = 'LEDGER_DIVERGENCE' as const
  /** Full npm package name that owns the check. */
  readonly packageName = PACKAGE_NAME

  /**
   * Construct a divergence failure.
   * @param message - violated contract, without the standard error prefix.
   */
  constructor(message: string) {
    super(`ledger divergence in "${PACKAGE_NAME}": ${message}`)
    this.name = 'LedgerDivergenceError'
  }
}

/** Cordis plugin name of the ledger guard. */
export const name = 'agent-team-ledger-guard'
/** The Team Host service this guard validates. */
export const inject = ['agentTeam']

/**
 * Install the ledger guard: validate once at mount, then re-derive after each
 * burst of commits, on a frame the committing caller does not wait on.
 * @param ctx - Cordis context carrying the Team Host service.
 * @returns the disposer that clears a scheduled validation.
 */
export const apply = (ctx: Context): (() => void) => {
  const divergence = (error: unknown): LedgerDivergenceError =>
    new LedgerDivergenceError(`durable ledger and Team projection diverged: ${String(error)}`)

  // Mounting stays synchronous: a durable ledger that cannot be re-derived must
  // fail startup instead of racing the first commit. The mount adopts the
  // record-level replay the ledger constructor already ran, once and only while
  // nothing has committed since; every later validation replays the whole table.
  try {
    ctx.agentTeam.validateLedgerAtMount()
  } catch (error) {
    throw divergence(error)
  }

  // The commit path cannot pay a full replay before its Remote response returns,
  // and opening a Thread commits. The replay stays the same full one over the
  // durable table, but commits coalesce into a single run after the I/O turn.
  // A divergence stays loud: it is logged where it is detected, and every later
  // commit re-raises it on a caller-owned frame until a replay comes back clean.
  let latched: LedgerDivergenceError | undefined
  let pending: NodeJS.Immediate | undefined
  const clear = (): void => {
    if (pending !== undefined) clearImmediate(pending)
    pending = undefined
  }
  const check = (): void => {
    pending = undefined
    try {
      ctx.agentTeam.validateLedger()
      latched = undefined
    } catch (error) {
      latched = divergence(error)
      ctx.logger.error(`agent-team: ${latched.message}`)
    }
  }
  ctx.effect(() => clear, 'agent-team.ledger-guard.pending-validation')
  ctx.on('agent-team/committed', () => {
    // Scheduled before the latch re-raises: a replay that comes back clean is
    // what releases it.
    if (pending === undefined) pending = setImmediate(check)
    if (latched !== undefined) throw latched
  })
  return clear
}