/**
 * Best-effort Host-side check for a newer released bundle tag.
 *
 * The settings footnote needs `updateAvailable`/`latestVersion`, but the
 * profile read path must never wait on the network: the checker serves a
 * cached snapshot synchronously and refreshes it in the background. Every
 * failure mode — disabled by the operator, no fetch implementation, timeout,
 * non-OK status, malformed payload, unparsable version — settles as "no
 * update known", so the footnote degrades to version + link exactly as before.
 *
 * No durable state: the cache lives only in memory. A Host restart simply
 * starts unknown again, which is the safe default for an informational tip.
 */

import { HUMAN_PROFILE_REPO_URL } from './human-profile.ts'

/**
 * Release list of the repository this bundle is installed from.
 *
 * The bundle is distributed as tags rather than through a registry, so the
 * repository's tags are the release list. The URL is derived from
 * {@link HUMAN_PROFILE_REPO_URL} so the footnote's link and the check can never
 * name different repositories; a repository that is not on `github.com` leaves
 * the derived URL unbuildable, and the check then fails safe as "no update".
 */
export const HUMAN_UPDATE_CHECK_TAGS_URL = `${HUMAN_PROFILE_REPO_URL.replace(
  /^https:\/\/github\.com\//,
  'https://api.github.com/repos/',
)}/tags?per_page=100`

/** How long one settled check stays authoritative before a re-check. */
export const HUMAN_UPDATE_CHECK_TTL_MS = 12 * 60 * 60 * 1000

/** Upper bound for one tag-list round trip; the read path never waits on it. */
export const HUMAN_UPDATE_CHECK_TIMEOUT_MS = 5000

/** Setting this env var to `0`/`false`/`off` disables the outbound check. */
export const HUMAN_UPDATE_CHECK_ENV = 'DSH_AGENT_TEAM_UPDATE_CHECK'

/** Minimal fetch surface the check needs; the global fetch satisfies it. */
export interface UpdateCheckFetcher {
  (url: string, init: { readonly signal: AbortSignal }): Promise<{
    readonly ok: boolean
    json(): Promise<unknown>
  }>
}

/** Operator kill-switch; anything but an explicit off value keeps the default on. */
export function isUpdateCheckEnabled(env: { readonly [key: string]: string | undefined } = process.env): boolean {
  const raw = env[HUMAN_UPDATE_CHECK_ENV]?.trim().toLowerCase()
  return raw !== '0' && raw !== 'false' && raw !== 'off'
}

/**
 * Numeric core of a `major.minor.patch…` version. Pre-release/build suffixes
 * are ignored for ordering; anything else unparsable resolves absent so the
 * caller treats it as "no update known" instead of guessing.
 */
export function parseVersionCore(value: string): readonly number[] | undefined {
  const core = value.split('+', 1)[0]?.split('-', 1)[0]
  if (core === undefined || core === '') return undefined
  const parts = core.split('.')
  const numbers: number[] = []
  for (const part of parts) {
    if (part === '' || !/^[0-9]+$/.test(part)) return undefined
    numbers.push(Number(part))
  }
  return numbers.length === 0 ? undefined : numbers
}

/** Orders two numeric cores, padding the shorter one with zeros. */
function compareVersionCores(left: readonly number[], right: readonly number[]): number {
  const width = Math.max(left.length, right.length)
  for (let index = 0; index < width; index += 1) {
    const from = left[index] ?? 0
    const to = right[index] ?? 0
    if (from !== to) return from < to ? -1 : 1
  }
  return 0
}

/** True when `latest` orders strictly after `current` on the numeric core. */
export function isNewerVersion(current: string, latest: string): boolean {
  const from = parseVersionCore(current)
  const to = parseVersionCore(latest)
  if (from === undefined || to === undefined) return false
  return compareVersionCores(to, from) > 0
}

/**
 * Newest release tag in a GitHub tags document, as a bare version string.
 *
 * Two DSH lines can be current at once, so the newest tag is not always the one
 * this Host should install: the tip names a version and routes to the Releases
 * page, where the line is stated, and the plugin manager's own peer check
 * refuses an install from the wrong line. A pre-release tag loses to a stable
 * tag on the same core, so `0.2.3-rc.1` never hides the `0.2.3` that supersedes
 * it. Anything unparsable resolves absent.
 */
export function latestTagVersion(payload: unknown): string | undefined {
  if (!Array.isArray(payload)) return undefined
  let best: { readonly version: string; readonly core: readonly number[]; readonly stable: boolean } | undefined
  for (const entry of payload) {
    const name = (entry as { readonly name?: unknown } | null)?.name
    if (typeof name !== 'string') continue
    const version = name.startsWith('v') ? name.slice(1) : name
    const core = parseVersionCore(version)
    if (core === undefined) continue
    const stable = !version.includes('-')
    if (best !== undefined) {
      const order = compareVersionCores(core, best.core)
      if (order < 0) continue
      if (order === 0 && (best.stable || !stable)) continue
    }
    best = { version, core, stable }
  }
  return best?.version
}

/**
 * One tag-list round trip resolving the newest released version string.
 * Never throws: anything unexpected resolves absent.
 */
export async function fetchLatestVersion(
  fetchImpl: UpdateCheckFetcher,
  url: string = HUMAN_UPDATE_CHECK_TAGS_URL,
  timeoutMs: number = HUMAN_UPDATE_CHECK_TIMEOUT_MS,
): Promise<string | undefined> {
  try {
    const response = await fetchImpl(url, { signal: AbortSignal.timeout(timeoutMs) })
    if (!response.ok) return undefined
    return latestTagVersion(await response.json())
  } catch {
    return undefined
  }
}

export interface HumanUpdateCheckerOptions {
  readonly currentVersion: string
  readonly fetchImpl?: UpdateCheckFetcher | undefined
  readonly now?: (() => number) | undefined
  readonly ttlMs?: number | undefined
  readonly timeoutMs?: number | undefined
  readonly env?: { readonly [key: string]: string | undefined } | undefined
}

export interface HumanUpdateSnapshot {
  readonly updateAvailable: boolean
  readonly latestVersion?: string | undefined
}

/**
 * Synchronous snapshot over a background-refreshed latest-version cache.
 * `snapshot()` never blocks: a stale or empty cache serves the last known
 * value (initially "no update") and kicks off at most one shared refresh.
 * Concurrent and repeated calls while a refresh is in flight share it, and a
 * refresh that settles only stamps the cache — failures simply leave the
 * previous value standing.
 */
export function createHumanUpdateChecker(options: HumanUpdateCheckerOptions): {
  readonly snapshot: () => HumanUpdateSnapshot
} {
  const {
    currentVersion,
    ttlMs = HUMAN_UPDATE_CHECK_TTL_MS,
    timeoutMs = HUMAN_UPDATE_CHECK_TIMEOUT_MS,
    now = Date.now,
    env = process.env,
  } = options
  const fetchImpl = options.fetchImpl ?? ((url: string, init: { readonly signal: AbortSignal }) => globalThis.fetch(url, init))
  let latestVersion: string | undefined
  let checkedAt = Number.NEGATIVE_INFINITY
  let inFlight: Promise<void> | undefined

  const refresh = (): void => {
    if (inFlight !== undefined) return
    if (!isUpdateCheckEnabled(env)) return
    const settled = fetchLatestVersion(fetchImpl, HUMAN_UPDATE_CHECK_TAGS_URL, timeoutMs).then(version => {
      checkedAt = now()
      if (version !== undefined && isNewerVersion(currentVersion, version)) latestVersion = version
    })
    const tracked = settled.finally(() => {
      if (inFlight === tracked) inFlight = undefined
    })
    inFlight = tracked
    // Rejections are already absorbed inside fetchLatestVersion, but the
    // finally chain still needs a settlement handler so a Host without an
    // unhandled-rejection policy never sees one from this floating refresh.
    void tracked.catch(() => {})
  }

  return {
    snapshot: (): HumanUpdateSnapshot => {
      if (checkedAt + ttlMs <= now()) refresh()
      if (latestVersion === undefined) return { updateAvailable: false }
      return { updateAvailable: true, latestVersion }
    },
  }
}
