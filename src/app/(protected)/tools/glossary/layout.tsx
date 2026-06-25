import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "AI Glossary",
  "Every AI term in plain English - tokens, RAG, agents, embeddings and more, decoded.",
  "/tools/glossary",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
