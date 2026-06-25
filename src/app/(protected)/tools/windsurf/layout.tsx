import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Windsurf Setup Guide",
  "Set up Windsurf and its Cascade agentic AI - full codebase indexing and autonomous multi-file tasks.",
  "/tools/windsurf",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
