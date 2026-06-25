import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Free Local AI Guide",
  "Run AI locally with no API key, no fees, and no internet required.",
  "/tools/local-ai",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
