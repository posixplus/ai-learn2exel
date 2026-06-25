import type { Metadata } from 'next'
import { lessonMetadata } from '@/lib/seo'

export const metadata: Metadata = lessonMetadata('l5-38')

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children
}
