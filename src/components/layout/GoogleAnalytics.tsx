'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_ID = 'G-ECLX277HV0'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void
  }
}

/**
 * Sends a GA4 page_view on every client-side route change (and on first
 * mount). GA4's own send_page_view is disabled in the layout, so this is
 * the single source of pageviews - no double counting across SPA navigations.
 */
export default function GoogleAnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    const qs = searchParams?.toString()
    const path = pathname + (qs ? `?${qs}` : '')
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      send_to: GA_ID,
    })
  }, [pathname, searchParams])

  return null
}
