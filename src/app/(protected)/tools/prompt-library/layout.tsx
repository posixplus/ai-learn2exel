import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "AI Prompt Library",
  "50+ ready-to-use AI prompts organized by profession - copy any with one click.",
  "/tools/prompt-library",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
