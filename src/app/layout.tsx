import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Jermarcus Lewis — Software, Sound & STEM',
  description:
    'Educator, full-stack developer, and audio engineer. Building software, engineering sound, and teaching the next generation of makers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-white text-zinc-900 antialiased`}>
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
