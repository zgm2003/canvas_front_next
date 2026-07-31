import { useState, type PropsWithChildren } from 'react'
import { App as AntApp, ConfigProvider } from 'antd'
import { QueryClientProvider } from '@tanstack/react-query'

import { createAppQueryClient } from '@/app/queryClient'
import { appTheme } from '@/shared/theme/appTheme'

export function AppProviders({ children }: PropsWithChildren) {
  const [queryClient] = useState(createAppQueryClient)

  return (
    <ConfigProvider theme={appTheme}>
      <AntApp>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </AntApp>
    </ConfigProvider>
  )
}
