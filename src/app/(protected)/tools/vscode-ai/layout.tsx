import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "VS Code AI Extensions Guide",
  "Add Copilot, Claude, or Codeium to your existing VS Code setup.",
  "/tools/vscode-ai",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
