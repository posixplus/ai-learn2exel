'use client'
import Link from 'next/link'
import MarkComplete from './MarkComplete'

interface NavLink {
  href: string
  title?: string
  label?: string  // alias for title used by level 2 lessons
}

interface LessonNavProps {
  prev?: NavLink
  next?: NavLink
  lessonId?: string
  level?: number
  currentLessonId?: string
}

export default function LessonNav({ prev, next, lessonId, currentLessonId }: LessonNavProps) {
  const resolvedId = lessonId ?? currentLessonId ?? ''
  return (
    <div className="lesson-nav">
      {prev ? (
        <Link href={prev.href} className="lesson-nav-link">
          ← {prev.label ?? prev.title}
        </Link>
      ) : (
        <div />
      )}

      <MarkComplete lessonId={resolvedId} />

      {next ? (
        <Link href={next.href} className="lesson-nav-link next">
          {next.label ?? next.title} →
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
