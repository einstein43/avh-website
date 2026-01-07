import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A-VH | AI Software Solutions',
  description: 'AI-oplossingen voor sport, finance en productie. Transformeer complexe uitdagingen in intelligente automatiseringen.',
  keywords: 'AI, automation, machine learning, n8n, voiceflow, sports analytics, financial automation, production optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
