import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Claude Code (CLI) Setup Guide",
  "Install Claude Code, set up CLAUDE.md, and run agentic coding tasks from your terminal.",
  "/tools/claude-code-cli",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
