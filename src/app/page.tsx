'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'
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

export default function HomePage() {
  const { user } = useAuth()
  const { completedCount, totalLessons, percentComplete, isComplete } = useProgress()
  const [selectedProf, setSelectedProf] = useState<string | null>(null)

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
          {user ? (
            <Link href="/level0/lesson1" className="btn-primary">▶ Continue Learning</Link>
          ) : (
            <Link href="/login" className="btn-primary">▶ Start Learning — Free</Link>
          )}
          <a href="#levels" className="btn-secondary">📋 See All Lessons</a>
        </div>
        <div className="hero-stats">
          {[
            { n: '11', l: 'Lessons' }, { n: '20+', l: 'Hours of Content' },
            { n: '50+', l: 'Hands-On Exercises' }, { n: '8', l: 'Professions Covered' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div className="hero-stat-number">{s.n}</div>
              <div className="hero-stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Progress bar (logged-in users) */}
      {user && (
        <div style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', padding: '1rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '.875rem', fontWeight: 600 }}>👋 Welcome back, {user.displayName}!</span>
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
          Two levels, each building on the previous. Start at Level 0 — no experience needed.
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

          {/* Level 2 - coming soon */}
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'white', opacity: .7 }}>
            <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
              <div className="level-badge l2">🟡 Level 2 · Advanced <span style={{ fontSize: '.68rem', background: '#FEF3C7', color: '#B45309', border: '1px solid #FDE68A', padding: '.15rem .45rem', borderRadius: 99, marginLeft: '.35rem' }}>Coming Soon</span></div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>Build & Ship AI Products</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--color-text-muted)' }}>RAG pipelines, fine-tuning, building AI-powered apps, production patterns.</p>
              <p style={{ fontSize: '.82rem', color: 'var(--color-text-muted)', marginTop: '.75rem' }}>⏱ ~8 hours (planned)</p>
            </div>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
              <button disabled style={{ width: '100%', padding: '.75rem', background: 'var(--color-surface)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', cursor: 'not-allowed', fontFamily: 'var(--font-body)' }}>Coming in Level 2</button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--color-border)' }} />

      {/* Tools section */}
      <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 1.5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Built-in Learning Tools</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>Free — no sign-up, no downloads.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🎯', title: 'Which AI Should I Use?', desc: 'Answer 5 quick questions and get a personalized recommendation.', href: '/tools/quiz' },
              { icon: '📚', title: 'Prompt Library', desc: '50+ ready-to-use prompts organized by profession — copy with one click.', href: '/tools/prompt-library' },
              { icon: '📖', title: 'AI Glossary', desc: 'Every AI term explained in plain English. Tokens, RAG, agents — decoded.', href: '/tools/glossary' },
              { icon: '📊', title: 'Progress Tracker', desc: 'Track completed lessons, synced across all your devices automatically.', href: '#levels' },
              { icon: '🖨️', title: 'Cheat Sheets', desc: 'Every lesson ends with a Quick Reference Card you can print and keep.', href: '/level0/lesson1' },
              { icon: '🔍', title: 'Profession Filters', desc: "Tell us your job and we highlight what's most relevant for you.", href: '#profession' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', transition: 'box-shadow .2s', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '.4rem' }}>{f.title}</h4>
                <p style={{ fontSize: '.875rem', color: 'var(--color-text-muted)', margin: 0 }}>{f.desc}</p>
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
