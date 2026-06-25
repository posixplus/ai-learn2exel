import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "GitHub Copilot Setup Guide",
  "Install GitHub Copilot in VS Code or JetBrains - slash commands, inline edits, and Copilot features.",
  "/tools/github-copilot",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
