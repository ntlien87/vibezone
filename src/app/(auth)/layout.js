import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Auth',
  description: 'Next 14 social media app',
}

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
