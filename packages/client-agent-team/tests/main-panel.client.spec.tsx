// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { act, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { usePinnedBrowserLanguages } from '@deepseek-ai/dsh-client-test-runtime'
import { runtimeWithTeam } from './harness.tsx'

usePinnedBrowserLanguages('zh-CN')
afterEach(cleanup)
beforeEach(() => { localStorage.clear() })

/** Stands in for the shipped plugin manager's global panel (main key 'plugins'). */
function ShippedPluginPage() { return <div data-shipped-plugins>插件</div> }

/**
 * The shell renders one keyed main panel: `activePanelId ?? 'conversation'`.
 * Team mode owns the conversation seat, so a global panel the Human selected
 * before entering it must not keep the column — the reported failure was the
 * Team sidebar moving while the plugin page stayed on screen.
 */
describe('Team mode and the shell main panel', () => {
  it('takes the column back at mount when Team mode is restored under a selected panel', async () => {
    const b = await runtimeWithTeam({ mode: 'team', mainPanelId: 'plugins', workspaceId: 'w1' })
    expect(b.selectPanel).toHaveBeenCalledWith(null)
    expect(b.panelInfo.getSnapshot().activePanelId).toBe(null)
  })

  it('returns the column to the Team seat when Team mode opens while a global panel is selected', async () => {
    const b = await runtimeWithTeam({})
    b.runtime.slots.register({ name: 'main', key: 'plugins' }, ShippedPluginPage as never)
    // The shipped plugin page selects its own panel, exactly as its sidebar row does.
    await act(async () => { b.selectPanel('plugins') })
    expect(await b.view.findByText('插件')).toBeTruthy()

    fireEvent.click(b.view.getByRole('button', { name: '团队' }))

    await waitFor(() => expect(b.panelInfo.getSnapshot().activePanelId).toBe(null))
    expect(b.view.container.querySelector('[data-shipped-plugins]')).toBeNull()
  })

  it('hands the column back when a Team navigation runs behind a global panel', async () => {
    const b = await runtimeWithTeam({ mode: 'team', workspaceId: 'w1', initialChannels: true })
    b.runtime.slots.register({ name: 'main', key: 'plugins' }, ShippedPluginPage as never)
    await act(async () => { b.selectPanel('plugins') })
    // A global panel selected while Team mode stands keeps the column: the Team
    // never fights the shell's selection without a Team navigation behind it.
    expect(await b.view.findByText('插件')).toBeTruthy()

    fireEvent.click(b.view.getByRole('button', { name: '# engineering' }))

    await waitFor(() => expect(b.panelInfo.getSnapshot().activePanelId).toBe(null))
    expect(await b.view.findByRole('heading', { name: '# engineering' })).toBeTruthy()
    expect(b.view.container.querySelector('[data-shipped-plugins]')).toBeNull()
  })
})
