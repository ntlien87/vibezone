'use client'

import Link from 'next/link'
import { sidebarLinks } from '../../constants'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const pathName = usePathname()

  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive = pathName === link.route

        return (
          <Link
            href={link.route}
            key={link.label}
            className={`flex gap-4 justify-start rounded-lg py-2 px-4 ${
              isActive && 'bg-purple-1'
            }`}
          >
            <span>{link.icon}</span>
            <span className="text-light-1">{link.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
