import { Inter } from 'next/font/google'
import './globals.css'

import '../public/vendor/slick/slick/slick.css'
import '../public/vendor/slick/slick/slick-theme.css'
import '../public/vendor/icons/feather.css'
import '../public/vendor/bootstrap/css/bootstrap.min.css'
import '../public/css/style.css'
import '../public/css/style.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
