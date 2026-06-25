import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Claude Code Cheat Sheet",
  "All Claude Code keyboard shortcuts, slash commands, CLI flags, MCP and agent config for Mac and Windows.",
  "/tools/claude-cheatsheet",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
