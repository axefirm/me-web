'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export function Layout({ children }) {
  const pathname = usePathname()
  const isPolicyPage = pathname?.includes('/policy')

  return (
    <>
    <html className={clsx('bg-gray-50 antialiased', inter.variable)} style={{scrollBehavior:'smooth'}} >
    <body className='bg-black'>
      <Header />
      <main className="flex-auto bg-black">{children}</main>
      {!isPolicyPage && <Footer />}
      </body>
    </html>
    </>
  )
}
