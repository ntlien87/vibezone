'use client'

import { Add, Search } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SignOutButton, SignedIn } from '@clerk/nextjs'
import { Logout } from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'

import profilePic from '../../../public/assets/phucmai.png'

export default function TopBar() {
  const [search, setSearch] = useState('')

  const router = useRouter()

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" onClick={() => {}} />
      </div>
      <button
        className="create-post-btn"
        onClick={() => router.push('/create-post')}
      >
        <Add /> <p>Create a post</p>
      </button>

      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex items-center cursor-pointer md:hidden">
              <Logout
                sx={{ color: 'white', fontSize: '32px', cursor: 'pointer' }}
              />
            </div>
          </SignOutButton>
        </SignedIn>

        <Link href={'/profile'}>
          <Image
            src={profilePic}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full md:hidden"
          />
        </Link>
      </div>
    </div>
  )
}
