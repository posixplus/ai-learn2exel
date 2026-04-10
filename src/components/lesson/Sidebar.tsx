'use client'

import Link from 'next/link'
import { useProgress } from '@/contexts/ProgressContext'

interface Lesson {
  number: number | string
  title: string
  href: string
}

interface SidebarProps {
  level: 0 | 1
  currentLessonId: string
}

const LEVEL_0_LESSONS: Lesson[] = [
  { number: 1, title: 'What is AI?', href: '/level0/lesson1' },
  { number: 2, title: 'The AI Landscape', href: '/level0/lesson2' },
  { number: 3, title: 'First Conversations', href: '/level0/lesson3' },
  { number: 4, title: 'AI for Your Job', href: '/level0/lesson4' },
  { number: 5, title: 'Prompt Engineering', href: '/level0/lesson5' },
]

const LEVEL_1_LESSONS: Lesson[] = [
  { number: 6, title: 'Advanced Prompting', href: '/level1/lesson6' },
  { number: 7, title: 'Custom AI Tools', href: '/level1/lesson7' },
  { number: 8, title: 'AI Agents', href: '/level1/lesson8' },
  { number: 9, title: 'MCP', href: '/level1/lesson9' },
  { number: 10, title: 'Claude Code', href: '/level1/lesson10' },
  { number: 11, title: 'Responsible AI', href: '/level1/lesson11' },
]

const LESSONS: Record<number, Lesson[]> = {
  0: LEVEL_0_LESSONS,
  1: LEVEL_1_LESSONS,
}

export default function Sidebar({ level, currentLessonId }: SidebarProps) {
  const { completed } = useProgress()
  const lessons = LESSONS[level] || []

  const isLessonDone = (lessonNum: number) => {
    return completed.some(id => id.includes(`${lessonNum}`))
  }

  return (
    <aside className="lesson-sidebar">
      <div className="sidebar-level-label">Level {level}</div>

      {lessons.map((lesson, idx) => {
        const isDone = isLessonDone(lesson.number as number)
        const isActive = currentLessonId.includes(`${lesson.number}`)

        return (
          <Link
            key={lesson.href}
            href={lesson.href}
            className={`sidebar-lesson ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
          >
            <span className="s-num">{lesson.number}</span>
            <span>{lesson.title}</span>
            {isDone && <span style={{ marginLeft: 'auto' }}>✓</span>}
          </Link>
        )
      })}

      <div className="sidebar-divider"></div>

      <Link
        href={level === 0 ? '/level0/capstone' : '/level1/capstone'}
        className={`sidebar-capstone ${currentLessonId.includes('capstone') ? 'active' : ''}`}
      >
        🏆 Capstone
      </Link>
    </aside>
  )
}
