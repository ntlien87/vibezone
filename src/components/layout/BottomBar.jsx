'use client'

import Link from 'next/link'
import { sidebarLinks } from '../../constants'
import { usePathname } from 'next/navigation'

export default function BottomBar() {
  const pathName = usePathname()

  return (
    <div className="bottom-0 z-20 bg-dark-1 px-6 py-3 flex items-center justify-between md:hidden">
      {sidebarLinks.map((link) => {
        const isActive = pathName === link.route

        return (
          <Link
            href={link.route}
            key={link.label}
            className={`flex gap-2 items-center rounded-lg py-2 px-4 ${
              isActive && 'bg-purple-1'
            }`}
          >
            {link.icon}
          </Link>
        )
      })}
    </div>
  )
}
