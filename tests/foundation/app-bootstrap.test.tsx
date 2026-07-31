import { render, screen } from '@testing-library/react'

import { AppBootstrap } from '@/shared/ui/AppBootstrap'

describe('AppBootstrap', () => {
  it('exposes the product and initialization state without fake actions', () => {
    render(<AppBootstrap />)

    expect(screen.getByRole('heading', { name: '无限画布' })).toBeInTheDocument()
    expect(screen.getByRole('status', { name: '正在准备工作区' })).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
