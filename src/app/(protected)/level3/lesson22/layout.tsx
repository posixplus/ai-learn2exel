import type { Metadata } from 'next'
import { lessonMetadata } from '@/lib/seo'

export const metadata: Metadata = lessonMetadata('l3-22')

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children
}
