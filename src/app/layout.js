'use client'

import './globals.scss'
import Body from '@/components/Layout/Body/Body'
import localFont from 'next/font/local'
import { Montserrat, Unica_One } from 'next/font/google'
import { NavProvider } from '@/utils/contexts/providers'




export const clashDisplay = localFont({
  src: '/fonts/display/ClashDisplay-Variable.woff2',
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--text-montserrat',
  display: 'swap',
})


export const unica = Unica_One({
  subsets: ['latin'],
  variable: '--text-unica',
  display: 'swap',
  weight: ['400']
})





export default function RootLayout({ children }) {
  return (
    <NavProvider>
      <html className={clashDisplay.className} lang="en">
        <head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <title> Getlinked</title>
          <meta name="description" content='Getlinked Hackaton Landing Page' />
        </head>
        <Body>
          {children}
        </Body>
      </html>
    </NavProvider>
  )
}
