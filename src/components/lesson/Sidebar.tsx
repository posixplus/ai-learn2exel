'use client'

import Link from 'next/link'
import { useProgress } from '@/contexts/ProgressContext'

interface Lesson {
  number: number | string
  title: string
  href: string
}

interface SidebarProps {
  level: 0 | 1 | 2 | 3 | 4 | 5
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

const LEVEL_2_LESSONS: Lesson[] = [
  { number: 12, title: 'Deep Research', href: '/level2/lesson12' },
  { number: 13, title: 'AI Writing Lab', href: '/level2/lesson13' },
  { number: 14, title: 'AI + Data Analysis', href: '/level2/lesson14' },
  { number: 15, title: 'Strategy & Decisions', href: '/level2/lesson15' },
  { number: 16, title: 'Claude Knowledge Base', href: '/level2/lesson16' },
  { number: 17, title: 'AI Automation', href: '/level2/lesson17' },
  { number: 18, title: 'Your AI OS', href: '/level2/lesson18' },
]

const LEVEL_3_LESSONS: Lesson[] = [
  { number: 19, title: 'Models, Memory & Mindset', href: '/level3/lesson19' },
  { number: 20, title: 'Advanced Prompt Engineering', href: '/level3/lesson20' },
  { number: 21, title: 'CLAUDE.md & Memory', href: '/level3/lesson21' },
  { number: 22, title: 'MCP Deep Dive', href: '/level3/lesson22' },
  { number: 23, title: 'Claude Code Superuser', href: '/level3/lesson23' },
  { number: 24, title: 'Cowork + Skills Mastery', href: '/level3/lesson24' },
  { number: 25, title: 'Agentic Workflows', href: '/level3/lesson25' },
  { number: 26, title: "Don'ts & Beware", href: '/level3/lesson26' },
  { number: 27, title: 'Ecosystem + Free Stack', href: '/level3/lesson27' },
  { number: 28, title: 'Claude Settings', href: '/level3/lesson28' },
]


const LEVEL_4_LESSONS: Lesson[] = [
  { number: 29, title: 'The Claude API', href: '/level4/lesson29' },
  { number: 30, title: 'Structured Outputs & Tool Use', href: '/level4/lesson30' },
  { number: 31, title: 'Building RAG Systems', href: '/level4/lesson31' },
  { number: 32, title: 'Multi-Agent Architectures', href: '/level4/lesson32' },
  { number: 33, title: 'Claude for Teams & Orgs', href: '/level4/lesson33' },
  { number: 34, title: 'Multi-Modal: Vision & Docs', href: '/level4/lesson34' },
  { number: 35, title: 'Production AI Systems', href: '/level4/lesson35' },
  { number: 36, title: 'Responsible AI for Builders', href: '/level4/lesson36' },
  { number: 37, title: 'Advanced Prompt Evaluation', href: '/level4/lesson37' },
]

const LEVEL_5_LESSONS: Lesson[] = [
  { number: 38, title: 'AI Tools for Devs — The Landscape', href: '/level5/lesson38' },
  { number: 39, title: 'Inline Code Completion Mastery', href: '/level5/lesson39' },
  { number: 40, title: 'AI Chat for Development', href: '/level5/lesson40' },
  { number: 41, title: 'Documenting Code with AI', href: '/level5/lesson41' },
  { number: 42, title: 'Debugging with AI', href: '/level5/lesson42' },
  { number: 43, title: 'Writing Tests with AI', href: '/level5/lesson43' },
  { number: 44, title: 'Refactoring & Code Review', href: '/level5/lesson44' },
  { number: 45, title: 'Git Workflow with AI', href: '/level5/lesson45' },
  { number: 46, title: 'Agentic Coding', href: '/level5/lesson46' },
  { number: 47, title: 'Custom AI Extensions & Agents', href: '/level5/lesson47' },
]

const LESSONS: Record<number, Lesson[]> = {
  0: LEVEL_0_LESSONS,
  1: LEVEL_1_LESSONS,
  2: LEVEL_2_LESSONS,
  3: LEVEL_3_LESSONS,
  4: LEVEL_4_LESSONS,
  5: LEVEL_5_LESSONS,
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
        href={`/level${level}/capstone`}
        className={`sidebar-capstone ${currentLessonId.includes('capstone') ? 'active' : ''}`}
      >
        🏆 Capstone
      </Link>
    </aside>
  )
}
