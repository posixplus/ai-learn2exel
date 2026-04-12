'use client'

import Link from 'next/link'
import { useProgress } from '@/contexts/ProgressContext'
import { useVisitorName } from '@/components/layout/WelcomeModal'
import { useState } from 'react'

const PROFESSIONS = [
  { id: 'teacher',    icon: '👩‍🏫', label: 'Teacher / Educator' },
  { id: 'student',    icon: '🎓', label: 'Student' },
  { id: 'doctor',     icon: '👨‍⚕️', label: 'Doctor / Healthcare' },
  { id: 'engineer',   icon: '⚙️',  label: 'Engineer (Non-IT)' },
  { id: 'developer',  icon: '💻', label: 'Developer / IT' },
  { id: 'business',   icon: '💼', label: 'Business Professional' },
  { id: 'researcher', icon: '🔬', label: 'Researcher / Academic' },
  { id: 'creative',   icon: '🎨', label: 'Creative / Designer' },
]

const L0_LESSONS = [
  { num: 1, title: 'What is AI, ML & LLMs?',       dur: '45 min', id: 'l0-1', href: '/level0/lesson1' },
  { num: 2, title: 'The AI Landscape',              dur: '50 min', id: 'l0-2', href: '/level0/lesson2' },
  { num: 3, title: 'Your First Real Conversations', dur: '55 min', id: 'l0-3', href: '/level0/lesson3' },
  { num: 4, title: 'AI for Your Job',               dur: '60 min', id: 'l0-4', href: '/level0/lesson4' },
  { num: 5, title: 'Prompt Engineering 101',        dur: '55 min', id: 'l0-5', href: '/level0/lesson5' },
]
const L1_LESSONS = [
  { num: 6,  title: 'Advanced Prompting & Workflows',  dur: '55 min', id: 'l1-6',  href: '/level1/lesson6' },
  { num: 7,  title: 'Custom AI Tools',                  dur: '55 min', id: 'l1-7',  href: '/level1/lesson7' },
  { num: 8,  title: 'AI Agents Explained',              dur: '55 min', id: 'l1-8',  href: '/level1/lesson8' },
  { num: 9,  title: 'MCP — Connect AI to Your World',  dur: '50 min', id: 'l1-9',  href: '/level1/lesson9' },
  { num: 10, title: 'Claude Code — Deep Dive ⭐',       dur: '60 min', id: 'l1-10', href: '/level1/lesson10' },
  { num: 11, title: "Responsible AI & What's Next",    dur: '40 min', id: 'l1-11', href: '/level1/lesson11' },
]
const L2_LESSONS = [
  { num: 12, title: 'AI for Deep Research',         dur: '90 min', id: 'l2-12', href: '/level2/lesson12' },
  { num: 13, title: 'AI Writing Lab',                dur: '90 min', id: 'l2-13', href: '/level2/lesson13' },
  { num: 14, title: 'AI + Data Analysis',            dur: '90 min', id: 'l2-14', href: '/level2/lesson14' },
  { num: 15, title: 'Strategy & Decisions',          dur: '90 min', id: 'l2-15', href: '/level2/lesson15' },
  { num: 16, title: 'Claude Knowledge Base',         dur: '90 min', id: 'l2-16', href: '/level2/lesson16' },
  { num: 17, title: 'AI Automation',                 dur: '90 min', id: 'l2-17', href: '/level2/lesson17' },
  { num: 18, title: 'Your AI OS',                    dur: '90 min', id: 'l2-18', href: '/level2/lesson18' },
]
const L3_LESSONS = [
  { num: 19, title: 'Models, Memory & Mindset',      dur: '90 min', id: 'l3-19', href: '/level3/lesson19' },
  { num: 20, title: 'Advanced Prompt Engineering',   dur: '90 min', id: 'l3-20', href: '/level3/lesson20' },
  { num: 21, title: 'CLAUDE.md & Memory',            dur: '75 min', id: 'l3-21', href: '/level3/lesson21' },
  { num: 22, title: 'MCP Deep Dive',                 dur: '120 min', id: 'l3-22', href: '/level3/lesson22' },
  { num: 23, title: 'Claude Code Superuser',         dur: '120 min', id: 'l3-23', href: '/level3/lesson23' },
  { num: 24, title: 'Cowork + Skills Mastery',       dur: '90 min', id: 'l3-24', href: '/level3/lesson24' },
  { num: 25, title: 'Agentic Workflows',             dur: '120 min', id: 'l3-25', href: '/level3/lesson25' },
  { num: 26, title: "Don'ts & Beware",               dur: '75 min',  id: 'l3-26', href: '/level3/lesson26' },
  { num: 27, title: 'Claude Ecosystem + Free Stack',  dur: '90 min',  id: 'l3-27', href: '/level3/lesson27' },
  { num: 28, title: 'Claude Settings: Complete Guide',   dur: '75 min',  id: 'l3-28', href: '/level3/lesson28' },
]
const L4_LESSONS = [
  { num: 29, title: 'The Claude API: Direct Access',     dur: '90 min',  id: 'l4-29', href: '/level4/lesson29' },
  { num: 30, title: 'Structured Outputs & Tool Use',     dur: '90 min',  id: 'l4-30', href: '/level4/lesson30' },
  { num: 31, title: 'Building RAG Systems',              dur: '100 min', id: 'l4-31', href: '/level4/lesson31' },
  { num: 32, title: 'Multi-Agent Architectures',         dur: '100 min', id: 'l4-32', href: '/level4/lesson32' },
  { num: 33, title: 'Claude for Teams & Orgs',           dur: '75 min',  id: 'l4-33', href: '/level4/lesson33' },
  { num: 34, title: 'Multi-Modal: Vision & Docs',        dur: '80 min',  id: 'l4-34', href: '/level4/lesson34' },
  { num: 35, title: 'Production AI Systems',             dur: '90 min',  id: 'l4-35', href: '/level4/lesson35' },
  { num: 36, title: 'Responsible AI for Builders',       dur: '75 min',  id: 'l4-36', href: '/level4/lesson36' },
  { num: 37, title: 'Advanced Prompt Evaluation',        dur: '90 min',  id: 'l4-37', href: '/level4/lesson37' },
]

const L5_LESSONS = [
  { num: 38, title: 'AI Tools for Devs — The Landscape', dur: '30 min', id: 'l5-38', href: '/level5/lesson38' },
  { num: 39, title: 'Inline Code Completion Mastery',    dur: '35 min', id: 'l5-39', href: '/level5/lesson39' },
  { num: 40, title: 'AI Chat for Development',           dur: '35 min', id: 'l5-40', href: '/level5/lesson40' },
  { num: 41, title: 'Documenting Code with AI',          dur: '30 min', id: 'l5-41', href: '/level5/lesson41' },
  { num: 42, title: 'Debugging with AI',                 dur: '40 min', id: 'l5-42', href: '/level5/lesson42' },
  { num: 43, title: 'Writing Tests with AI',             dur: '40 min', id: 'l5-43', href: '/level5/lesson43' },
  { num: 44, title: 'Refactoring & Code Review',         dur: '40 min', id: 'l5-44', href: '/level5/lesson44' },
  { num: 45, title: 'Git Workflow with AI',              dur: '35 min', id: 'l5-45', href: '/level5/lesson45' },
  { num: 46, title: 'Agentic Coding',                    dur: '45 min', id: 'l5-46', href: '/level5/lesson46' },
  { num: 47, title: 'Custom AI Extensions & Agents',     dur: '45 min', id: 'l5-47', href: '/level5/lesson47' },
]

export default function HomePage() {
  const { completedCount, totalLessons, percentComplete, isComplete } = useProgress()
  const { name } = useVisitorName()
  const [selectedProf, setSelectedProf] = useState<string | null>(null)

  const hasProgress = completedCount > 0

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">🚀 Self-Paced · Hands-On · All Professions</div>
        <h1>Master AI —<br /><span className="highlight">For Any Profession</span></h1>
        <p className="hero-subtitle">
          From zero to building your own AI tools. Practical lessons for Teachers, Doctors,
          Engineers, Students, and everyone in between.
        </p>
        <div className="hero-actions">
          <Link href="/level0/lesson1" className="btn-primary">
            {hasProgress ? '▶ Continue Learning' : '▶ Start Learning — Free'}
          </Link>
          <a href="#levels" className="btn-secondary">📋 See All Lessons</a>
        </div>
        <div className="hero-stats">
          {[
            { n: '25', l: 'Lessons' }, { n: '40+', l: 'Hours of Content' },
            { n: '80+', l: 'Hands-On Exercises' }, { n: '8', l: 'Professions Covered' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div className="hero-stat-number">{s.n}</div>
              <div className="hero-stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Progress bar (shown when any lesson completed) */}
      {hasProgress && (
        <div style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', padding: '1rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '.875rem', fontWeight: 600 }}>
              👋 {name ? `Welcome back, ${name}!` : 'Welcome back!'}
            </span>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.78rem', marginBottom: '.3rem', color: 'var(--color-text-muted)' }}>
                <span>Your progress</span>
                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{completedCount}/{totalLessons} lessons · {percentComplete}%</span>
              </div>
              <div style={{ background: 'var(--color-border)', height: 8, borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${percentComplete}%`, background: 'linear-gradient(90deg, var(--color-l0), var(--color-l1))', borderRadius: 99, transition: 'width .5s' }} />
              </div>
            </div>
            <Link href="/level0/lesson1" className="btn-primary" style={{ padding: '.45rem 1rem', fontSize: '.85rem' }}>Continue →</Link>
          </div>
        </div>
      )}

      {/* Profession selector */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem' }} id="profession">
        <h2 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Who are you?</h2>
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
          Select your role — we&apos;ll highlight the most relevant examples throughout every lesson.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '.75rem' }}>
          {PROFESSIONS.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedProf(p.id)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem',
                padding: '1rem .75rem',
                background: selectedProf === p.id ? 'var(--color-primary-light)' : 'white',
                border: `2px solid ${selectedProf === p.id ? 'var(--color-primary)' : 'var(--color-border)'}`,
                borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all .15s',
                fontFamily: 'var(--font-body)',
              }}
            >
              <span style={{ fontSize: '1.75rem' }}>{p.icon}</span>
              <span style={{ fontSize: '.82rem', fontWeight: 600 }}>{p.label}</span>
            </button>
          ))}
        </div>
        {selectedProf && (
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '.85rem', color: 'var(--color-success)', fontWeight: 500 }}>
            ✓ Saved! Examples throughout the course will be highlighted for your role.
          </p>
        )}
      </section>

      <div style={{ height: 1, background: 'var(--color-border)' }} />

      {/* Course levels */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }} id="levels">
        <h2 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Course Structure</h2>
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
          Four levels, each building on the previous. Start at Level 0 — no experience needed.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

          {/* Level 0 */}
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
              <div className="level-badge l0">🟢 Level 0 · Foundations</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>AI for Everyone</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--color-text-muted)' }}>No prior experience needed. Start using AI in your daily work by end of this level.</p>
              <p style={{ fontSize: '.82rem', color: 'var(--color-text-muted)', marginTop: '.75rem' }}>⏱ ~5 hours · 5 lessons + capstone</p>
            </div>
            <div style={{ padding: '0 1.5rem 1rem' }}>
              {L0_LESSONS.map(l => (
                <Link key={l.id} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', borderBottom: '1px solid var(--color-border)', fontSize: '.875rem', color: 'var(--color-text)', textDecoration: 'none' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: isComplete(l.id) ? 'var(--color-success)' : 'var(--color-surface)', border: `1px solid ${isComplete(l.id) ? 'var(--color-success)' : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem', fontWeight: 700, color: isComplete(l.id) ? 'white' : 'var(--color-text-muted)', flexShrink: 0 }}>
                    {isComplete(l.id) ? '✓' : l.num}
                  </span>
                  <span style={{ flex: 1 }}>{l.title}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>{l.dur}</span>
                </Link>
              ))}
              <Link href="/level0/capstone" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', fontSize: '.875rem', color: 'var(--color-warning)', fontWeight: 600, textDecoration: 'none' }}>
                <span style={{ fontSize: '1rem' }}>🏆</span> Level 0 Capstone Challenge <span style={{ marginLeft: 'auto', fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>60 min</span>
              </Link>
            </div>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
              <Link href="/level0/lesson1" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Start Level 0 →</Link>
            </div>
          </div>

          {/* Level 1 */}
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
              <div className="level-badge l1">🔵 Level 1 · Going Deeper</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>Build Your AI Toolkit</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--color-text-muted)' }}>Build custom AI tools, automate workflows, and dive deep into Claude Code.</p>
              <p style={{ fontSize: '.82rem', color: 'var(--color-text-muted)', marginTop: '.75rem' }}>⏱ ~7 hours · 6 lessons + capstone</p>
            </div>
            <div style={{ padding: '0 1.5rem 1rem' }}>
              {L1_LESSONS.map(l => (
                <Link key={l.id} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', borderBottom: '1px solid var(--color-border)', fontSize: '.875rem', color: 'var(--color-text)', textDecoration: 'none' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: isComplete(l.id) ? 'var(--color-success)' : 'var(--color-surface)', border: `1px solid ${isComplete(l.id) ? 'var(--color-success)' : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem', fontWeight: 700, color: isComplete(l.id) ? 'white' : 'var(--color-text-muted)', flexShrink: 0 }}>
                    {isComplete(l.id) ? '✓' : l.num}
                  </span>
                  <span style={{ flex: 1 }}>{l.title}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>{l.dur}</span>
                </Link>
              ))}
              <Link href="/level1/capstone" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', fontSize: '.875rem', color: 'var(--color-warning)', fontWeight: 600, textDecoration: 'none' }}>
                <span style={{ fontSize: '1rem' }}>🏆</span> Level 1 Capstone Challenge <span style={{ marginLeft: 'auto', fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>75 min</span>
              </Link>
            </div>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
              <Link href="/level1/lesson6" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Start Level 1 →</Link>
            </div>
          </div>

          {/* Level 2 */}
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
              <div className="level-badge l2">🟡 Level 2 · Applied AI</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>AI in the Real World</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--color-text-muted)' }}>Deep research, writing, data analysis, strategy, automation, and building your AI OS.</p>
              <p style={{ fontSize: '.82rem', color: 'var(--color-text-muted)', marginTop: '.75rem' }}>⏱ ~10 hours · 7 lessons + capstone</p>
            </div>
            <div style={{ padding: '0 1.5rem 1rem' }}>
              {L2_LESSONS.map(l => (
                <Link key={l.id} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', borderBottom: '1px solid var(--color-border)', fontSize: '.875rem', color: 'var(--color-text)', textDecoration: 'none' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: isComplete(l.id) ? 'var(--color-success)' : 'var(--color-surface)', border: `1px solid ${isComplete(l.id) ? 'var(--color-success)' : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem', fontWeight: 700, color: isComplete(l.id) ? 'white' : 'var(--color-text-muted)', flexShrink: 0 }}>
                    {isComplete(l.id) ? '✓' : l.num}
                  </span>
                  <span style={{ flex: 1 }}>{l.title}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>{l.dur}</span>
                </Link>
              ))}
              <Link href="/level2/capstone" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', fontSize: '.875rem', color: 'var(--color-warning)', fontWeight: 600, textDecoration: 'none' }}>
                <span style={{ fontSize: '1rem' }}>🏆</span> Level 2 Capstone Challenge <span style={{ marginLeft: 'auto', fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>90 min</span>
              </Link>
            </div>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
              <Link href="/level2/lesson12" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Start Level 2 →</Link>
            </div>
          </div>

          {/* Level 3 */}
          <div style={{ border: '2px solid var(--color-l3-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '1.5rem 1.5rem 1rem', background: 'var(--color-l3-light)' }}>
              <div className="level-badge l3">🔮 Level 3 · Master Claude</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>Become a Claude Superuser</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--color-text-muted)' }}>Advanced prompting, MCP, Claude Code, CLAUDE.md, Skills, and full agentic workflows. For technical users who want to master every Claude capability.</p>
              <p style={{ fontSize: '.82rem', color: 'var(--color-text-muted)', marginTop: '.75rem' }}>⏱ ~18 hours · 10 lessons + capstone</p>
            </div>
            <div style={{ padding: '0 1.5rem 1rem' }}>
              {L3_LESSONS.map(l => (
                <Link key={l.id} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', borderBottom: '1px solid var(--color-border)', fontSize: '.875rem', color: 'var(--color-text)', textDecoration: 'none' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: isComplete(l.id) ? 'var(--color-l3)' : 'var(--color-surface)', border: `1px solid ${isComplete(l.id) ? 'var(--color-l3)' : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem', fontWeight: 700, color: isComplete(l.id) ? 'white' : 'var(--color-text-muted)', flexShrink: 0 }}>
                    {isComplete(l.id) ? '✓' : l.num}
                  </span>
                  <span style={{ flex: 1 }}>{l.title}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>{l.dur}</span>
                </Link>
              ))}
              <Link href="/level3/capstone" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', fontSize: '.875rem', color: 'var(--color-l3)', fontWeight: 600, textDecoration: 'none' }}>
                <span style={{ fontSize: '1rem' }}>🏆</span> Level 3 Capstone: Build a Real Application <span style={{ marginLeft: 'auto', fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>120 min</span>
              </Link>
            </div>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--color-l3-light)', borderTop: `1px solid var(--color-l3-border)` }}>
              <Link href="/level3/lesson19" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', width: '100%', padding: '.65rem 1.25rem', background: 'var(--color-l3)', color: 'white', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '.95rem', textDecoration: 'none' }}>Start Level 3 →</Link>
            </div>
          </div>

          {/* Level 4 */}
          <div style={{ border: '2px solid var(--color-l4-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '1.5rem 1.5rem 1rem', background: 'var(--color-l4-light)' }}>
              <div className="level-badge l4">🔵 Level 4 · AI Builder</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>Build with Claude</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--color-text-muted)' }}>Direct API access, RAG, multi-agent systems, vision, production deployment, and evals. For developers who want to build AI-powered products.</p>
              <p style={{ fontSize: '.82rem', color: 'var(--color-text-muted)', marginTop: '.75rem' }}>⏱ ~14 hours · 9 lessons + capstone</p>
            </div>
            <div style={{ padding: '0 1.5rem 1rem' }}>
              {L4_LESSONS.map(l => (
                <Link key={l.id} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', borderBottom: '1px solid var(--color-border)', fontSize: '.875rem', color: 'var(--color-text)', textDecoration: 'none' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: isComplete(l.id) ? 'var(--color-l4)' : 'var(--color-surface)', border: `1px solid ${isComplete(l.id) ? 'var(--color-l4)' : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem', fontWeight: 700, color: isComplete(l.id) ? 'white' : 'var(--color-text-muted)', flexShrink: 0 }}>
                    {isComplete(l.id) ? '✓' : l.num}
                  </span>
                  <span style={{ flex: 1 }}>{l.title}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>{l.dur}</span>
                </Link>
              ))}
              <Link href="/level4/capstone" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', fontSize: '.875rem', color: 'var(--color-l4)', fontWeight: 600, textDecoration: 'none' }}>
                <span style={{ fontSize: '1rem' }}>🏆</span> Level 4 Capstone: Ship Your AI Product <span style={{ marginLeft: 'auto', fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>120 min</span>
              </Link>
            </div>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--color-l4-light)', borderTop: `1px solid var(--color-l4-border)` }}>
              <Link href="/level4/lesson29" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', width: '100%', padding: '.65rem 1.25rem', background: 'var(--color-l4)', color: 'white', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '.95rem', textDecoration: 'none' }}>Start Level 4 →</Link>
            </div>
          </div>

          {/* Level 5 */}
          <div style={{ border: '2px solid var(--color-l5-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '1.5rem 1.5rem 1rem', background: 'var(--color-l5-light)' }}>
              <div className="level-badge l5">🟣 Level 5 · Copilot Track</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>AI-Powered Developer</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--color-text-muted)' }}>GitHub Copilot, Claude Code, Cursor, and Windsurf — master AI coding tools for inline completion, debugging, testing, refactoring, git workflows, and agentic coding.</p>
              <p style={{ fontSize: '.82rem', color: 'var(--color-text-muted)', marginTop: '.75rem' }}>⏱ ~7 hours · 10 lessons + capstone</p>
            </div>
            <div style={{ padding: '0 1.5rem 1rem' }}>
              {L5_LESSONS.map(l => (
                <Link key={l.id} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', borderBottom: '1px solid var(--color-border)', fontSize: '.875rem', color: 'var(--color-text)', textDecoration: 'none' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: isComplete(l.id) ? 'var(--color-l5)' : 'var(--color-surface)', border: `1px solid ${isComplete(l.id) ? 'var(--color-l5)' : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem', fontWeight: 700, color: isComplete(l.id) ? 'white' : 'var(--color-text-muted)', flexShrink: 0 }}>
                    {isComplete(l.id) ? '✓' : l.num}
                  </span>
                  <span style={{ flex: 1 }}>{l.title}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>{l.dur}</span>
                </Link>
              ))}
              <Link href="/level5/capstone" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.5rem 0', fontSize: '.875rem', color: 'var(--color-l5)', fontWeight: 600, textDecoration: 'none' }}>
                <span style={{ fontSize: '1rem' }}>🏆</span> Level 5 Capstone: AI Developer Showcase <span style={{ marginLeft: 'auto', fontSize: '.78rem', color: 'var(--color-text-subtle)' }}>120 min</span>
              </Link>
            </div>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--color-l5-light)', borderTop: `1px solid var(--color-l5-border)` }}>
              <Link href="/level5/lesson38" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', width: '100%', padding: '.65rem 1.25rem', background: 'var(--color-l5)', color: 'white', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '.95rem', textDecoration: 'none' }}>Start Level 5 →</Link>
            </div>
          </div>

        </div>
      </section>

      <div style={{ height: 1, background: 'var(--color-border)' }} />

      {/* Tools section */}
      <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 1.5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Learning Tools & Developer Resources</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Free guides, setup instructions, and reference pages for every tool covered in the course.</p>

          {/* Course Tools */}
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '1rem', marginTop: 0 }}>📚 Course Tools</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { icon: '🎯', title: 'Which AI Should I Use?', desc: 'Answer 5 questions and get a personalized recommendation.', href: '/tools/quiz' },
              { icon: '📚', title: 'Prompt Library', desc: '50+ ready-to-use prompts by profession — copy with one click.', href: '/tools/prompt-library' },
              { icon: '📖', title: 'AI Glossary', desc: 'Every AI term in plain English. Tokens, RAG, agents — decoded.', href: '/tools/glossary' },
              { icon: '⌨️', title: 'Claude Code Cheat Sheet', desc: 'All keyboard shortcuts, slash commands, CLI flags, MCP & agent config — Mac & Windows.', href: '/tools/claude-cheatsheet' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '.6rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '.3rem', fontSize: '.95rem' }}>{f.title}</h4>
                <p style={{ fontSize: '.83rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </Link>
            ))}
          </div>

          {/* AI Coding IDEs */}
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '1rem', marginTop: 0 }}>💻 AI Coding Tools — Setup Guides</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { icon: '🐙', title: 'GitHub Copilot', desc: 'Install in VS Code or JetBrains. Slash commands, inline edits, Copilot Workspace.', href: '/tools/github-copilot' },
              { icon: '🖥️', title: 'Claude Code (CLI)', desc: 'Terminal-native agentic coding. Install, CLAUDE.md setup, and agentic tasks.', href: '/tools/claude-code-cli' },
              { icon: '⚡', title: 'Cursor', desc: 'AI code editor (VS Code fork). Composer, Cmd+K inline edits, @codebase chat.', href: '/tools/cursor' },
              { icon: '🌊', title: 'Windsurf', desc: 'Cascade agentic AI IDE. Full codebase indexing, autonomous multi-file tasks.', href: '/tools/windsurf' },
              { icon: '🔵', title: 'VS Code + AI Extensions', desc: 'Add Copilot, Claude, or Codeium to your existing VS Code setup.', href: '/tools/vscode-ai' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '.6rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '.3rem', fontSize: '.95rem' }}>{f.title}</h4>
                <p style={{ fontSize: '.83rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </Link>
            ))}
          </div>

          {/* Local AI */}
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '1rem', marginTop: 0 }}>🏠 Local & Open-Source AI</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { icon: '🦙', title: 'Ollama', desc: 'Run Llama, Mistral, DeepSeek locally. Install in 5 min. Free forever, 100% private.', href: '/tools/ollama' },
              { icon: '🤗', title: 'Hugging Face', desc: 'The GitHub of AI. 700K+ models, datasets, and live Spaces demos.', href: '/tools/huggingface' },
              { icon: '🆓', title: 'Free Local AI Guide', desc: 'Complete 1-pager: run AI locally with no API key, no fees, no internet required.', href: '/tools/local-ai' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '.6rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '.3rem', fontSize: '.95rem' }}>{f.title}</h4>
                <p style={{ fontSize: '.83rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </Link>
            ))}
          </div>

          {/* Hardware */}
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '1rem', marginTop: 0 }}>🖥️ Hardware & Buying Guides</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '💻', title: 'Mac vs Windows for AI', desc: 'Buying guide: which hardware to get if you want to run models locally. With specific recommendations.', href: '/tools/ai-hardware' },
              { icon: '🔌', title: 'AI APIs Comparison', desc: 'Compare Anthropic, OpenAI, Gemini, Mistral, Groq and more — pricing, context windows, and when to use each.', href: '/tools/ai-apis' },
              { icon: '📊', title: 'Progress Tracker', desc: 'Track completed lessons, saved right in your browser automatically.', href: '#levels' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '.6rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '.3rem', fontSize: '.95rem' }}>{f.title}</h4>
                <p style={{ fontSize: '.83rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="footer-logo">🤖 AI for Everyone</div>
          <div className="footer-links">
            <Link href="/level0/lesson1">Start Learning</Link>
            <Link href="/tools/quiz">AI Quiz</Link>
            <Link href="/tools/prompt-library">Prompt Library</Link>
            <Link href="/tools/glossary">Glossary</Link>
          </div>
        </div>
        <p className="footer-note">
          This course is free to share. AI capabilities change rapidly — always verify important information independently.
        </p>
      </footer>
    </>
  )
}
