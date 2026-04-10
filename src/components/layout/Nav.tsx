'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'

const LEVEL_0_LESSONS = [
  { number: 1, title: 'What is AI, ML & LLMs?', href: '/level0/lesson1' },
  { number: 2, title: 'The AI Landscape', href: '/level0/lesson2' },
  { number: 3, title: 'Your First Real Conversations', href: '/level0/lesson3' },
  { number: 4, title: 'AI for Your Job', href: '/level0/lesson4' },
  { number: 5, title: 'Prompt Engineering 101', href: '/level0/lesson5' },
  { number: 'C', title: 'Capstone', href: '/level0/capstone' },
]

const LEVEL_1_LESSONS = [
  { number: 6, title: 'Advanced Prompting & Workflows', href: '/level1/lesson6' },
  { number: 7, title: 'Custom AI Tools', href: '/level1/lesson7' },
  { number: 8, title: 'AI Agents Explained', href: '/level1/lesson8' },
  { number: 9, title: 'MCP — Connect AI to Your World', href: '/level1/lesson9' },
  { number: 10, title: 'Claude Code — Deep Dive', href: '/level1/lesson10' },
  { number: 11, title: 'Responsible AI & What\'s Next', href: '/level1/lesson11' },
  { number: 'C', title: 'Capstone', href: '/level1/capstone' },
]

const TOOLS = [
  { title: 'Quiz', href: '/tools/quiz' },
  { title: 'Prompt Library', href: '/tools/prompt-library' },
  { title: 'Glossary', href: '/tools/glossary' },
]

export default function Nav() {
  const { user, logout } = useAuth()
  const { completed } = useProgress()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const completedCount = completed.length
  const totalLessons = 11

  const handleLogout = () => {
    logout()
  }

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-icon">🤖</span>
          <span>AI for Everyone</span>
        </Link>

        <div className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
          {/* Level 0 Dropdown */}
          <div className="nav-item">
            <span className="nav-dd-title">
              <span className="nav-dd-icon">📚</span>
              Level 0 — Foundations
            </span>
            <div className="nav-dropdown">
              {LEVEL_0_LESSONS.map((lesson) => (
                <Link
                  key={lesson.href}
                  href={lesson.href}
                  className="nav-dropdown-item"
                >
                  <span style={{ fontWeight: 600, marginRight: '0.5rem' }}>
                    {lesson.number}
                  </span>
                  {lesson.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Level 1 Dropdown */}
          <div className="nav-item">
            <span className="nav-dd-title">
              <span className="nav-dd-icon">🚀</span>
              Level 1 — Going Deeper
            </span>
            <div className="nav-dropdown">
              {LEVEL_1_LESSONS.map((lesson) => (
                <Link
                  key={lesson.href}
                  href={lesson.href}
                  className="nav-dropdown-item"
                >
                  <span style={{ fontWeight: 600, marginRight: '0.5rem' }}>
                    {lesson.number}
                  </span>
                  {lesson.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Tools Dropdown */}
          <div className="nav-item">
            <span className="nav-dd-title">
              <span className="nav-dd-icon">🛠️</span>
              Tools
            </span>
            <div className="nav-dropdown">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="nav-dropdown-item"
                >
                  {tool.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-progress-badge">
            <span className="nav-dot"></span>
            {completedCount}/{totalLessons} done
          </div>

          <div className="nav-item" style={{ marginLeft: '1.5rem' }}>
            <span style={{ marginRight: '1rem', fontSize: '0.95rem' }}>
              Hi, {user?.displayName || 'there'}
            </span>
            <button
              onClick={handleLogout}
              className="nav-btn"
              style={{ fontSize: '0.85rem' }}
            >
              Logout
            </button>
          </div>
        </div>

        <button
          className="nav-hamburger"
          onClick={toggleMobile}
          style={{ display: 'none' }}
        >
          ☰
        </button>
      </div>
    </nav>
  )
}
