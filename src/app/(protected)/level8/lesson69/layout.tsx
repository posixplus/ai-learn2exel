import type { Metadata } from 'next'
import { lessonMetadata } from '@/lib/seo'

export const metadata: Metadata = lessonMetadata('l8-69')

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children
}
