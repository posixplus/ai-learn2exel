import type { Metadata } from 'next'
import './globals.css'
import { ProgressProvider } from '@/contexts/ProgressContext'
import WelcomeModal from '@/components/layout/WelcomeModal'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'AI for Everyone — Learn AI, LLMs & Claude',
  description: 'A free, practical AI course for all professions. Learn prompting, Claude Code, agents, APIs and more. Self-paced.',
  openGraph: {
    title: 'AI for Everyone — Learn AI, LLMs & Claude',
    description: 'Free practical AI course covering prompting, Claude Code, agents, APIs and more.',
    url: 'https://learn2exel.com',
    siteName: 'AI for Everyone',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Everyone — Learn AI, LLMs & Claude',
    description: 'Free practical AI course for all professions. Self-paced.',
  },
  metadataBase: new URL('https://learn2exel.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProgressProvider>
          <WelcomeModal />
          {children}
        </ProgressProvider>
        <Analytics />
      </body>
    </html>
  )
}
