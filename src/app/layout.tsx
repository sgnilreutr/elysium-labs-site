import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import '@/styles/globals.css'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import classNames from '@/lib/classNames'

interface LayoutProps {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col h-full leading-normal bg-gray-100 md:w-full gradient_background">
        <PageHeader />
        <main className={classNames(inter.variable, 'flex flex-col md:mt-20')}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
