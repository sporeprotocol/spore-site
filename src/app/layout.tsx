import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spore Protocol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`sm:overflow-x-hidden`}>
      <head>
          <link rel="icon" href="/svg/favicon.svg" sizes="any" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Spore Protocol: On-Chain Digital Objects" />
          <meta property="og:image" content="/img/ogp.png" />

      </head>
      <body className={`${inter.className} sm:overflow-x-hidden`}>{children}</body>
    </html>
  )
}
