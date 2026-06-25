import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "AI APIs Comparison",
  "Compare Anthropic, OpenAI, Gemini, Mistral, and Groq - pricing, context windows, and when to use each.",
  "/tools/ai-apis",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
