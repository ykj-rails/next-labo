import React from 'react'
import { Header } from '../src/components/Header'

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
