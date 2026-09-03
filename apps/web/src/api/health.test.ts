import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetchApiHealth } from './health'

describe('fetchApiHealth', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns the API health response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ status: 'ok', database: 'connected' }), {
        status: 200,
      }),
    )

    await expect(fetchApiHealth()).resolves.toEqual({
      status: 'ok',
      database: 'connected',
    })
  })

  it('throws when the API is unavailable', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 503 }))

    await expect(fetchApiHealth()).rejects.toThrow('API health check failed')
  })
})
