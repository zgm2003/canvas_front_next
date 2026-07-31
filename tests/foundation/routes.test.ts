import { PRODUCT_ROUTES } from '@/app/routes'

describe('product route contract', () => {
  it('keeps the approved route surface closed', () => {
    expect(PRODUCT_ROUTES).toEqual({
      root: '/',
      login: '/login',
      projects: '/projects',
      canvas: '/canvas/:projectId',
      assets: '/assets',
      prompts: '/prompts',
    })
    expect(new Set(Object.values(PRODUCT_ROUTES)).size).toBe(6)
  })
})
