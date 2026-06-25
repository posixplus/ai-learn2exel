import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  "Which AI Should I Use? Quiz",
  "Answer 5 questions and get a personalized AI tool recommendation for your work.",
  "/tools/quiz",
)

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children
}
