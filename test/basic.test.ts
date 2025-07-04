import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('<div data-testid="arr-has-entries-true"></div>')
    expect(html).toContain('<div data-testid="num-has-value-true"></div>')
    expect(html).toContain('<div data-testid="obj-has-entries-true"></div>')
    expect(html).toContain('<div data-testid="str-has-value-true"></div>')
  })
})
