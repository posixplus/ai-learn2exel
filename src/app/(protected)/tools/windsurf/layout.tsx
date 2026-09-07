import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Devin Desktop (Windsurf) Setup Guide",
  "Set up Devin Desktop (formerly Windsurf) and its Devin Local agent - full codebase indexing and autonomous multi-file tasks.",
  "/tools/windsurf",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
