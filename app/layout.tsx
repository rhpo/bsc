'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { links } from '@/lib/data'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(pathname.slice(1) || 'home')

  const page = links.find((link) => link.id === currentPage)

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-between w-full h-full">
          <div className="nav">
            <Navbar links={links} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
          <div className="screen w-full overflow-auto p-8 bg-[#f3f3f3]">
            {page && (
              <h1 className="name flex items-center gap-2 m-0 mb-8">
                <page.icon size="2rem" color="var(--c-primary-dark)" />
                {page.name}
              </h1>
            )}
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

