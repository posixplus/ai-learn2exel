import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "AI Certifications",
  "Free and paid AI certifications worth your time, which ones are worth it, and how to prep for them free. Verified June 2026.",
  "/certifications",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
