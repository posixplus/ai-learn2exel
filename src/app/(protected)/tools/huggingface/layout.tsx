import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Hugging Face Guide",
  "The GitHub of AI - explore 700K+ models, datasets, and live Spaces demos.",
  "/tools/huggingface",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
