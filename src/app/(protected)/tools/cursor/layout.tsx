import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Cursor Setup Guide",
  "Install and use Cursor, the AI code editor - Composer, Cmd+K inline edits, and codebase chat.",
  "/tools/cursor",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
