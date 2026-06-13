import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  variable: '--font-heading',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SmileFix Kenya - Your Trusted Dental Clinic in Mombasa',
  description:
    'Professional dental care for the whole family in Mombasa, Kenya. Services include dental check-ups, veneers, root canal treatment, and tooth extraction.',
  keywords: [
    'dental clinic Mombasa',
    'dentist Kenya',
    'dental check-up',
    'veneers',
    'root canal',
    'tooth extraction',
    'family dentist',
  ],
  openGraph: {
    title: 'SmileFix Kenya - Your Trusted Dental Clinic in Mombasa',
    description:
      'Professional dental care for the whole family in Mombasa, Kenya.',
    type: 'website',
    locale: 'en_KE',
    alternateLocale: 'sw_KE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FFFDF9]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <div className="bg-gray-50 py-4 text-center text-sm text-gray-600">
          Made with <span className="text-red-500">❤️</span> by Brian - +254 719 316 562
        </div>
      </body>
    </html>
  )
}