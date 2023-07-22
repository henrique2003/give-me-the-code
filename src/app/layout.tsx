import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import StyledComponentsRegistry from '@/lib/styled-components/registry'
import GlobalStyles from '@/styles/GlobalStyles'
import { Navigation } from '@/components'

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Give me the code',
  description: 'Buy your prefer code here'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
