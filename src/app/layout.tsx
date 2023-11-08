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
          <meta property="og:title" content="Spore Protocol: Realize Your Potential On-Chain" />
          <meta property="og:description" content="Craft dynamic experiences, achieve widespread adoption, and monetize your work with full ownership powered by Spore Protocol, now!" />
          <meta property="og:image" content="/img/ogp.png" />

      </head>
      <body className={`${inter.className} sm:overflow-x-hidden`}>{children}</body>
    </html>
  )
}
