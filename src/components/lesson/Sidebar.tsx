'use client'

import Link from 'next/link'
import { useProgress } from '@/contexts/ProgressContext'
import { getLevel, type LevelId } from '@/data/course'

interface SidebarProps {
  level: LevelId
  currentLessonId: string
}

export default function Sidebar({ level, currentLessonId }: SidebarProps) {
  const { completed } = useProgress()
  const lessons = getLevel(level)?.lessons ?? []

  return (
    <aside className="lesson-sidebar">
      <div className="sidebar-level-label">Level {level}</div>

      {lessons.map((lesson) => {
        // Exact id matching - no substring collisions (lesson 1 ≠ 11/12/…).
        const isDone = completed.includes(lesson.id)
        const isActive = currentLessonId === lesson.id

        return (
          <Link
            key={lesson.id}
            href={lesson.href}
            className={`sidebar-lesson ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
          >
            <span className="s-num">{lesson.number}</span>
            <span>{lesson.shortTitle}</span>
            {isDone && <span style={{ marginLeft: 'auto' }}>✓</span>}
          </Link>
        )
      })}

      <div className="sidebar-divider"></div>

      <Link
        href={`/level${level}/capstone`}
        className={`sidebar-capstone ${currentLessonId.includes('capstone') ? 'active' : ''}`}
      >
        🏆 Capstone
      </Link>
    </aside>
  )
}
