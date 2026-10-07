import { Analytics } from '@vercel/analytics/next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const displayFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vance & Co. Garden Design | Maplewood & Essex County, NJ',
  description:
    'Bespoke garden design and landscaping in Maplewood and Essex County. Thoughtful patios, planting, decks, and outdoor living spaces made for real life.',
  applicationName: 'Vance & Co. Garden Design',
  keywords: [
    'garden design Maplewood NJ',
    'landscaping Essex County NJ',
    'patios and hardscaping',
    'garden transformation',
  ],
  openGraph: {
    title: 'Vance & Co. Garden Design',
    description:
      'Thoughtful garden design and outdoor living spaces in Maplewood and Essex County, New Jersey.',
    siteName: 'Vance & Co. Garden Design',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  colorScheme: 'light',
  themeColor: '#F6F4EE',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="light">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
