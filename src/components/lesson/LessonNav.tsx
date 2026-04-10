import Link from 'next/link'
import MarkComplete from './MarkComplete'

interface NavLink {
  href: string
  title: string
}

interface LessonNavProps {
  prev?: NavLink
  next?: NavLink
  lessonId: string
}

export default function LessonNav({ prev, next, lessonId }: LessonNavProps) {
  return (
    <div className="lesson-nav">
      {prev ? (
        <Link href={prev.href} className="lesson-nav-link">
          ← {prev.title}
        </Link>
      ) : (
        <div />
      )}

      <MarkComplete lessonId={lessonId} />

      {next ? (
        <Link href={next.href} className="lesson-nav-link next">
          {next.title} →
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
