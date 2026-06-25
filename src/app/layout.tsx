import type { Metadata } from 'next'
import { Suspense } from 'react'
import Script from 'next/script'
import './globals.css'
import { ProgressProvider } from '@/contexts/ProgressContext'
import WelcomeModal from '@/components/layout/WelcomeModal'
import ThemeToggle from '@/components/layout/ThemeToggle'
import CommandPalette from '@/components/layout/CommandPalette'
import GoogleAnalyticsTracker from '@/components/layout/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'AI for Everyone - Learn AI, LLMs & Claude',
  description: 'A free, practical AI course for all professions. Learn prompting, Claude Code, agents, APIs and more. Self-paced.',
  openGraph: {
    title: 'AI for Everyone - Learn AI, LLMs & Claude',
    description: 'Free practical AI course covering prompting, Claude Code, agents, APIs and more.',
    url: 'https://learn2exel.com',
    siteName: 'AI for Everyone',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Everyone - Learn AI, LLMs & Claude',
    description: 'Free practical AI course for all professions. Self-paced.',
  },
  metadataBase: new URL('https://learn2exel.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resolve theme before paint (no flash). Stored choice wins; else OS preference. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ai-course-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {/* Google Analytics 4 (loaded via next/script). send_page_view is off;
            GoogleAnalyticsTracker fires a pageview on every route change. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ECLX277HV0" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ECLX277HV0',{send_page_view:false});`}
        </Script>
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <ProgressProvider>
          <WelcomeModal />
          {children}
          <ThemeToggle />
          <CommandPalette />
        </ProgressProvider>
        <Analytics />
      </body>
    </html>
  )
}
