import BottomBar from '@/components/layout/BottomBar'
import LeftSidebar from '@/components/layout/LeftSidebar'
import MainContainer from '@/components/layout/MainContainer'
import RightSidebar from '@/components/layout/RightSidebar'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css'

export const metadata = {
  title: 'Vibe Zone',
  description: 'Next 14 Social Media App',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1`}>
          <main className="flex flex-row">
            <LeftSidebar />
            <MainContainer>{children}</MainContainer>
            <RightSidebar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
