import { render, screen } from '@testing-library/react'

import { AppProviders } from '@/app/AppProviders'
import { createAppQueryClient } from '@/app/queryClient'

describe('application providers', () => {
  it('renders children through the shared provider boundary', () => {
    render(
      <AppProviders>
        <p>provider-child</p>
      </AppProviders>,
    )

    expect(screen.getByText('provider-child')).toBeInTheDocument()
  })

  it('creates a query client with bounded retry behavior', () => {
    const client = createAppQueryClient()
    const queries = client.getDefaultOptions().queries
    const mutations = client.getDefaultOptions().mutations

    expect(queries?.retry).toBe(1)
    expect(queries?.refetchOnWindowFocus).toBe(false)
    expect(mutations?.retry).toBe(false)
  })
})
