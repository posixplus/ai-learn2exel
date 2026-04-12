'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useProgress } from '@/contexts/ProgressContext'
import { useVisitorName } from './WelcomeModal'
import WelcomeModal from './WelcomeModal'

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

const LEVEL_2_LESSONS = [
  { number: 12, title: 'AI for Deep Research', href: '/level2/lesson12' },
  { number: 13, title: 'AI Writing Lab', href: '/level2/lesson13' },
  { number: 14, title: 'AI + Data Analysis', href: '/level2/lesson14' },
  { number: 15, title: 'Strategy & Decisions', href: '/level2/lesson15' },
  { number: 16, title: 'Claude Knowledge Base', href: '/level2/lesson16' },
  { number: 17, title: 'AI Automation', href: '/level2/lesson17' },
  { number: 18, title: 'Your AI OS', href: '/level2/lesson18' },
  { number: 'C', title: 'Capstone', href: '/level2/capstone' },
]

const LEVEL_3_LESSONS = [
  { number: 19, title: 'Models, Memory & Mindset', href: '/level3/lesson19' },
  { number: 20, title: 'Advanced Prompt Engineering', href: '/level3/lesson20' },
  { number: 21, title: 'CLAUDE.md & Memory', href: '/level3/lesson21' },
  { number: 22, title: 'MCP Deep Dive', href: '/level3/lesson22' },
  { number: 23, title: 'Claude Code Superuser', href: '/level3/lesson23' },
  { number: 24, title: 'Cowork + Skills Mastery', href: '/level3/lesson24' },
  { number: 25, title: 'Agentic Workflows', href: '/level3/lesson25' },
  { number: 'C', title: 'Capstone', href: '/level3/capstone' },
]

const TOOL_GROUPS = [
  {
    label: 'Course Tools',
    items: [
      { title: '📝 Quiz', href: '/tools/quiz' },
      { title: '📚 Prompt Library', href: '/tools/prompt-library' },
      { title: '🔤 Glossary', href: '/tools/glossary' },
      { title: '⌨️ Claude Code Cheat Sheet', href: '/tools/claude-cheatsheet' },
    ],
  },
  {
    label: 'AI Coding Tools — Setup Guide',
    items: [
      { title: '🌊 Windsurf', href: '/tools/windsurf' },
      { title: '🖱️ Cursor', href: '/tools/cursor' },
      { title: '💻 VS Code + AI Extensions', href: '/tools/vscode-ai' },
      { title: '🤖 GitHub Copilot', href: '/tools/github-copilot' },
      { title: '⌨️ Claude Code CLI', href: '/tools/claude-code-cli' },
    ],
  },
  {
    label: 'Local & Open-Source AI',
    items: [
      { title: '🦙 Ollama', href: '/tools/ollama' },
      { title: '🤗 Hugging Face', href: '/tools/huggingface' },
      { title: '🆓 Free Local AI — 1-Pager', href: '/tools/local-ai' },
    ],
  },
  {
    label: 'Hardware & Buying Guides',
    items: [
      { title: '🖥️ Mac vs Windows for AI', href: '/tools/ai-hardware' },
      { title: '🔌 AI APIs Comparison', href: '/tools/ai-apis' },
    ],
  },
]

export default function Nav() {
  const { completed } = useProgress()
  const { name } = useVisitorName()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const completedCount = completed.length
  const totalLessons = 25

  return (
    <>
      <WelcomeModal />
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

            {/* Level 2 Dropdown */}
            <div className="nav-item">
              <span className="nav-dd-title">
                <span className="nav-dd-icon">🧠</span>
                Level 2 — Applied AI
              </span>
              <div className="nav-dropdown">
                {LEVEL_2_LESSONS.map((lesson) => (
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

            {/* Level 3 Dropdown */}
          <div className="nav-item">
            <span className="nav-dd-title">
              <span className="nav-dd-icon">🔮</span>
              Level 3 — Master Claude
            </span>
            <div className="nav-dropdown">
              {LEVEL_3_LESSONS.map((lesson) => (
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
              <div className="nav-dropdown nav-dropdown-wide">
                {TOOL_GROUPS.map((group, gi) => (
                  <div key={group.label}>
                    {gi > 0 && <div className="nav-dd-divider" />}
                    <div className="nav-dd-label">{group.label}</div>
                    {group.items.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="nav-dropdown-item"
                      >
                        {tool.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-progress-badge">
              <span className="nav-dot"></span>
              {completedCount}/{totalLessons} done
            </div>

            {name && (
              <span style={{ marginLeft: '1.25rem', fontSize: '0.9rem', color: '#6b7280', fontWeight: 500 }}>
                👋 {name}
              </span>
            )}
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </>
  )
}
