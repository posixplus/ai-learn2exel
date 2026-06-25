import type { Metadata } from 'next'
import { lessonMetadata } from '@/lib/seo'

export const metadata: Metadata = lessonMetadata('l0-1')

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children
}
