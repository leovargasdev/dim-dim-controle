import { NextPage } from 'next'
import { ReactNode } from 'react'
import { Poppins, Cabin } from 'next/font/google'

import 'styles/globals.scss'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
const cabin = Cabin({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-cabin'
})

interface LayoutProps {
  children: ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => (
  <html lang="pt-br" className={`${poppins.variable} ${cabin.variable}`}>
    <body>{children}</body>
  </html>
)

export default Layout
