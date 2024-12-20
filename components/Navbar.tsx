'use client'

import Link from 'next/link'
import { IconType } from 'react-icons'

interface Link {
  name: string
  id: string
  icon: IconType
}

interface NavbarProps {
  links: Link[]
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navbar({ links, currentPage, setCurrentPage }: NavbarProps) {
  return (
    <nav className="nav-width h-full bg-white p-8 flex flex-col items-center">
      <div className="nav-content w-full h-full flex flex-col gap-8">
        <div className="info mb-4">
          <h1 className="text-xl font-bold text-[#358cc1]">Hotel Management</h1>
          <p className="text-sm text-gray-600">Get your hotel now.</p>
        </div>

        <div className="links flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`/${link.id === 'home' ? '' : link.id}`}
              className={`link flex gap-2 items-center text-[#808080] text-base rounded-md p-2 px-4 cursor-pointer transition-all duration-400 ${
                currentPage === link.id
                  ? 'opacity-100 text-[#f3f3f3] bg-[#358cc1]'
                  : 'opacity-70 hover:opacity-100 hover:scale-110'
              }`}
              onClick={() => setCurrentPage(link.id)}
            >
              <div className={`icon transition-all duration-400 ${currentPage === link.id ? 'scale-120' : ''}`}>
                <link.icon color={currentPage === link.id ? '#f3f3f3' : '#808080'} />
              </div>
              {link.name}
            </Link>
          ))}
        </div>

        <div></div>
      </div>
    </nav>
  )
}

