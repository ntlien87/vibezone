import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/assets/logo.png'
import profilePic from '../../../public/assets/phucmai.png'
import Menu from '@/components/layout/Menu'
import { UserButton, SignOutButton, SignedIn } from '@clerk/nextjs'
import { Logout } from '@mui/icons-material'

export default function LeftSidebar() {
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar ">
      <Link href={'/'}>
        <Image src={logo} alt="logo" width={200} height={200} />
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={'/'}>
            <Image
              src={profilePic}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <p className="text-small-bold">Phuc Mai</p>
          <div className="flex flex-row text-light-1 justify-between w-full">
            <div className="flex flex-col items-center">
              <p className="text-base-bold">1</p>
              <p className="text-tiny-medium">Posts</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-base-bold">1</p>
              <p className="text-tiny-medium">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-base-bold">1</p>
              <p className="text-tiny-medium">Following</p>
            </div>
          </div>

          <hr className="w-full text-white my-4" />

          <Menu />

          <hr className="w-full text-white my-4" />

          <div className="flex gap-4 items-center">
            <UserButton />
            <p className="text-light-1 text-body-bold">Manage Account</p>
          </div>

          <SignedIn>
            <SignOutButton>
              <div className="flex gap-2 items-center cursor-pointer">
                <Logout
                  sx={{ color: 'white', fontSize: '32px', cursor: 'pointer' }}
                />
                <p className="text-body-bold text-light-1">Log Out</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </div>
  )
}
