import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Google Antigravity Setup Guide",
  "What Google Antigravity is, how to install it, and an example project. The agent-first IDE from Google.",
  "/tools/antigravity",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
