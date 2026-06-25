import type { Metadata } from 'next'
import { lessonMetadata } from '@/lib/seo'

export const metadata: Metadata = lessonMetadata('l5-42')

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children
}
