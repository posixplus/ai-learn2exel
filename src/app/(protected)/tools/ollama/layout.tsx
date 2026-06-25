import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Ollama Setup Guide",
  "Run Llama, Mistral, and DeepSeek locally with Ollama - free, private, installs in 5 minutes.",
  "/tools/ollama",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
