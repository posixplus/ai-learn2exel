'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useProgress } from '@/contexts/ProgressContext'
import { useVisitorName } from './WelcomeModal'
import WelcomeModal from './WelcomeModal'
import { LEVELS } from '@/data/course'

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
    label: 'AI Coding Tools - Setup Guide',
    items: [
      { title: '🪐 Google Antigravity', href: '/tools/antigravity' },
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
      { title: '🆓 Free Local AI - 1-Pager', href: '/tools/local-ai' },
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
  const { completed, totalLessons } = useProgress()
  const { name } = useVisitorName()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const completedCount = completed.length

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

            {/* Courses mega-dropdown */}
            <div className="nav-item">
              <span className="nav-dd-title">
                <span className="nav-dd-icon">🎓</span>
                Courses
              </span>
              <div className="nav-dropdown nav-mega">
                {LEVELS.map((lvl, li) => (
                  <div key={lvl.level} className="nav-mega-col">
                    <div className="nav-dd-label" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span>{lvl.icon}</span>{lvl.navLabel}
                    </div>
                    {lvl.lessons.map((lesson) => (
                      <Link key={lesson.href} href={lesson.href} className="nav-dropdown-item">
                        <span style={{ fontWeight: 600, marginRight: '0.4rem', minWidth: '1.4rem', display: 'inline-block' }}>
                          {lesson.number}
                        </span>
                        {lesson.title}
                      </Link>
                    ))}
                    <Link href={`/${lvl.slug}/capstone`} className="nav-dropdown-item">
                      <span style={{ fontWeight: 600, marginRight: '0.4rem', minWidth: '1.4rem', display: 'inline-block' }}>
                        C
                      </span>
                      Capstone
                    </Link>
                    {li < LEVELS.length - 1 && <div className="nav-dd-divider" />}
                  </div>
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
            <button
              onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
              aria-label="Search (Cmd K)"
              title="Search lessons & tools (⌘K)"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                padding: '.35rem .7rem', marginRight: '.9rem',
                background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)', color: 'var(--color-text-muted)',
                fontSize: '.8rem', cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              🔍 <span className="search-key" style={{ fontSize: '.72rem', opacity: .8 }}>⌘K</span>
            </button>
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
