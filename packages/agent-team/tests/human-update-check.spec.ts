import { describe, expect, it, vi } from 'vitest'
import { HUMAN_PROFILE_REPO_URL } from '../src/human-profile.ts'
import {
  createHumanUpdateChecker,
  fetchLatestVersion,
  HUMAN_UPDATE_CHECK_TAGS_URL,
  HUMAN_UPDATE_CHECK_TTL_MS,
  isNewerVersion,
  isUpdateCheckEnabled,
  latestTagVersion,
  parseVersionCore,
  type UpdateCheckFetcher,
} from '../src/human-update-check.ts'

function tagsFetcher(payload: unknown): UpdateCheckFetcher & { calls: number } {
  const fetcher: UpdateCheckFetcher & { calls: number } = Object.assign(
    async (_url: string, _init: { readonly signal: AbortSignal }) => {
      fetcher.calls += 1
      return { ok: true as const, json: async () => payload }
    },
    { calls: 0 },
  )
  return fetcher
}

const tags = (...names: readonly string[]): readonly { readonly name: string }[] => names.map(name => ({ name }))

function failingFetcher(): UpdateCheckFetcher & { calls: number } {
  const fetcher: UpdateCheckFetcher & { calls: number } = Object.assign(
    async (_url: string, _init: { readonly signal: AbortSignal }) => {
      fetcher.calls += 1
      throw new Error('offline')
    },
    { calls: 0 },
  )
  return fetcher
}

async function flush(): Promise<void> {
  await new Promise<void>(resolve => setImmediate(resolve))
}

describe('human update version ordering', () => {
  it('parses numeric cores and ignores suffixes', () => {
    expect(parseVersionCore('0.1.13')).toEqual([0, 1, 13])
    expect(parseVersionCore('0.1.14-rc.1')).toEqual([0, 1, 14])
    expect(parseVersionCore('1.0.0+build.7')).toEqual([1, 0, 0])
    expect(parseVersionCore('')).toBeUndefined()
    expect(parseVersionCore('latest')).toBeUndefined()
    expect(parseVersionCore('0.1.x')).toBeUndefined()
  })

  it('orders strictly on the numeric core', () => {
    expect(isNewerVersion('0.1.13', '0.1.14')).toBe(true)
    expect(isNewerVersion('0.1.13', '0.2.0')).toBe(true)
    expect(isNewerVersion('0.1.13', '0.1.13.1')).toBe(true)
    expect(isNewerVersion('0.1.13', '0.1.13')).toBe(false)
    expect(isNewerVersion('0.1.14', '0.1.13')).toBe(false)
    expect(isNewerVersion('0.1.13', 'garbage')).toBe(false)
    expect(isNewerVersion('0.1.13', '0.1.14-rc.1')).toBe(true)
  })
})

describe('human release tag selection', () => {
  it('names the newest tag and tolerates the shapes GitHub returns', () => {
    expect(latestTagVersion(tags('v0.1.13', 'v0.1.14', 'v0.1.9'))).toBe('0.1.14')
    expect(latestTagVersion(tags('v0.2.1', 'v0.2.2'))).toBe('0.2.2')
    expect(latestTagVersion(tags('0.1.14'))).toBe('0.1.14')
    expect(latestTagVersion(tags('release-2026-10', 'v0.1.14', 'nightly'))).toBe('0.1.14')
    expect(latestTagVersion([...tags('v0.1.14'), { other: true }, null])).toBe('0.1.14')
    expect(latestTagVersion(tags('release-2026-10'))).toBeUndefined()
    expect(latestTagVersion([])).toBeUndefined()
    expect(latestTagVersion({ version: '0.1.14' })).toBeUndefined()
    expect(latestTagVersion(undefined)).toBeUndefined()
  })

  it('prefers the stable tag when a pre-release shares its core', () => {
    expect(latestTagVersion(tags('v0.2.3-rc.1', 'v0.2.3'))).toBe('0.2.3')
    expect(latestTagVersion(tags('v0.2.3', 'v0.2.3-rc.1'))).toBe('0.2.3')
    expect(latestTagVersion(tags('v0.2.3-rc.1', 'v0.2.2'))).toBe('0.2.3-rc.1')
  })
})

describe('human update check kill-switch', () => {
  it('stays on unless explicitly disabled', () => {
    expect(isUpdateCheckEnabled({})).toBe(true)
    expect(isUpdateCheckEnabled({ DSH_AGENT_TEAM_UPDATE_CHECK: '1' })).toBe(true)
    for (const off of ['0', 'false', 'FALSE', 'off', ' Off ']) {
      expect(isUpdateCheckEnabled({ DSH_AGENT_TEAM_UPDATE_CHECK: off })).toBe(false)
    }
  })
})

describe('human latest-version fetch', () => {
  it('asks the repository the footnote links to', () => {
    expect(HUMAN_UPDATE_CHECK_TAGS_URL).toBe(
      `${HUMAN_PROFILE_REPO_URL.replace('https://github.com/', 'https://api.github.com/repos/')}/tags?per_page=100`,
    )
  })

  it('resolves the newest tag and absorbs every failure as absent', async () => {
    await expect(fetchLatestVersion(tagsFetcher(tags('v0.1.14', 'v0.1.13')))).resolves.toBe('0.1.14')
    await expect(fetchLatestVersion(failingFetcher())).resolves.toBeUndefined()
    await expect(fetchLatestVersion(tagsFetcher(42))).resolves.toBeUndefined()
    await expect(fetchLatestVersion(tagsFetcher(undefined))).resolves.toBeUndefined()
    const notFound = (async () => ({ ok: false, json: async () => [] })) as UpdateCheckFetcher
    await expect(fetchLatestVersion(notFound)).resolves.toBeUndefined()
  })
})

describe('human update checker cache', () => {
  it('serves unknown synchronously and publishes a newer release once observed', async () => {
    const fetchImpl = tagsFetcher(tags('v0.1.14'))
    const checker = createHumanUpdateChecker({ currentVersion: '0.1.13', fetchImpl, env: {} })
    expect(checker.snapshot()).toEqual({ updateAvailable: false })
    await flush()
    expect(checker.snapshot()).toEqual({ updateAvailable: true, latestVersion: '0.1.14' })
    expect(fetchImpl.calls).toBe(1)
  })

  it('stays quiet when the released tag is not newer', async () => {
    const fetchImpl = tagsFetcher(tags('v0.1.13', 'v0.1.12'))
    const checker = createHumanUpdateChecker({ currentVersion: '0.1.13', fetchImpl, env: {} })
    checker.snapshot()
    await flush()
    expect(checker.snapshot()).toEqual({ updateAvailable: false })
  })

  it('shares one refresh across concurrent snapshots and re-checks after the TTL', async () => {
    let now = 1_000
    const fetchImpl = tagsFetcher(tags('v0.1.13'))
    const checker = createHumanUpdateChecker({ currentVersion: '0.1.13', fetchImpl, now: () => now, env: {} })
    checker.snapshot()
    checker.snapshot()
    await flush()
    expect(fetchImpl.calls).toBe(1)
    now += HUMAN_UPDATE_CHECK_TTL_MS
    checker.snapshot()
    await flush()
    expect(fetchImpl.calls).toBe(2)
  })

  it('never throws and never calls out when disabled or offline', async () => {
    const onSpy = vi.fn()
    const disabled = createHumanUpdateChecker({
      currentVersion: '0.1.13',
      fetchImpl: (async () => {
        onSpy()
        return { ok: true, json: async () => tags('v9.9.9') }
      }) as UpdateCheckFetcher,
      env: { DSH_AGENT_TEAM_UPDATE_CHECK: '0' },
    })
    expect(disabled.snapshot()).toEqual({ updateAvailable: false })
    await flush()
    expect(onSpy).not.toHaveBeenCalled()

    const offline = createHumanUpdateChecker({ currentVersion: '0.1.13', fetchImpl: failingFetcher(), env: {} })
    expect(offline.snapshot()).toEqual({ updateAvailable: false })
    await flush()
    expect(offline.snapshot()).toEqual({ updateAvailable: false })
  })
})
