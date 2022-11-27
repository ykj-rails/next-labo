import { Header } from '@/components/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}

export default RootLayout
