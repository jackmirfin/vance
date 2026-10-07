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
  title: 'Advance Gardens | Garden Design & Landscaping in Northamptonshire',
  description:
    'Advance Gardens creates thoughtful gardens, patios, and outdoor living spaces in Northampton and across Northamptonshire.',
  applicationName: 'Advance Gardens',
  keywords: [
    'garden design Northamptonshire',
    'landscaping Northampton',
    'patios and hardscaping',
    'garden transformation',
  ],
  openGraph: {
    title: 'Advance Gardens',
    description:
      'Thoughtful garden design, landscaping, and outdoor living in Northamptonshire.',
    siteName: 'Advance Gardens',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  colorScheme: 'light',
  themeColor: '#F5F2EB',
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
