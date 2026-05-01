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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PB989XQ8');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PB989XQ8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ProgressProvider>
          <WelcomeModal />
          {children}
        </ProgressProvider>
        <Analytics />
      </body>
    </html>
  )
}
