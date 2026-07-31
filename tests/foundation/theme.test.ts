import { appTheme } from '@/shared/theme/appTheme'

describe('application theme', () => {
  it('uses the approved restrained palette and compact radius', () => {
    expect(appTheme.token.colorPrimary).toBe('#087f73')
    expect(appTheme.token.colorError).toBe('#c94f3d')
    expect(appTheme.token.borderRadius).toBeLessThanOrEqual(8)
  })
})
