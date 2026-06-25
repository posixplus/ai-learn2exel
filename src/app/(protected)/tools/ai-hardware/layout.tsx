import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Mac vs Windows for AI - Hardware Guide",
  "Which hardware to buy to run AI models locally, with specific recommendations.",
  "/tools/ai-hardware",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
