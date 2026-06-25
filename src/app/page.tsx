'use client'

import Link from 'next/link'
import { useProgress } from '@/contexts/ProgressContext'
import { useVisitorName } from '@/components/layout/WelcomeModal'
import { useState, useEffect } from 'react'
import { LEVELS, TOTAL_LESSONS } from '@/data/course'

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

// Where each role gets the most value starting. Drives the "Recommended path" banner.
const PATH_RECS: Record<string, { level: number; why: string }> = {
  teacher:    { level: 0, why: 'Start at the basics - then Level 2 makes AI classroom-ready.' },
  student:    { level: 0, why: 'Begin at Level 0 (no experience needed) and build up from there.' },
  doctor:     { level: 0, why: 'Start at Level 0; Level 2 covers safe, practical day-to-day use.' },
  engineer:   { level: 1, why: 'Skim Level 0, then Level 1 gets you using AI tools with intent.' },
  developer:  { level: 3, why: 'You can skip the basics - jump to Level 3 to start building with AI.' },
  business:   { level: 0, why: 'Start at Level 0; Level 2 covers practical workplace use.' },
  researcher: { level: 1, why: 'Start at Level 1, then Level 4 dives into APIs and your own data.' },
  creative:   { level: 0, why: 'Start at Level 0; Level 6 is all about generative media.' },
}

export default function HomePage() {
  const { completedCount, totalLessons, percentComplete, isComplete } = useProgress()
  const { name } = useVisitorName()
  const [selectedProf, setSelectedProf] = useState<string | null>(null)
  const [editingProf, setEditingProf] = useState(false)

  // Load saved role on mount (client-only) so it persists across visits.
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ai-course-profession')
      if (saved) setSelectedProf(saved)
    } catch { /* storage unavailable */ }
  }, [])

  const chooseProf = (id: string) => {
    setSelectedProf(id)
    setEditingProf(false)
    try { localStorage.setItem('ai-course-profession', id) } catch { /* ignore */ }
  }

  const selectedProfData = PROFESSIONS.find(p => p.id === selectedProf)
  const showProfChooser = editingProf || !selectedProf

  const maxLevel = Math.max(...LEVELS.map(l => l.level))
  const [openLevels, setOpenLevels] = useState<Set<number>>(() => new Set([maxLevel]))
  const toggleLevel = (level: number) =>
    setOpenLevels(prev => {
      const next = new Set(prev)
      if (next.has(level)) next.delete(level)
      else next.add(level)
      return next
    })

  const hasProgress = completedCount > 0

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">🚀 Self-Paced · Hands-On · All Professions</div>
        <h1>Master AI -<br /><span className="highlight">For Any Profession</span></h1>
        <p className="hero-subtitle">
          From zero to building your own AI tools. Practical lessons for Teachers, Doctors,
          Engineers, Students, and everyone in between.
        </p>
        <div className="hero-actions">
          <Link href="/level0/lesson1" className="btn-primary">
            {hasProgress ? '▶ Continue Learning' : '▶ Start Learning - Free'}
          </Link>
          <a href="#levels" className="btn-secondary">📋 See All Lessons</a>
        </div>
        <div className="hero-stats">
          {[
            { n: String(TOTAL_LESSONS), l: 'Lessons' }, { n: '70+', l: 'Hours of Content' },
            { n: '100+', l: 'Hands-On Exercises' }, { n: '8', l: 'Professions Covered' },
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
            <Link href="/certificate" className="btn-secondary" style={{ padding: '.45rem 1rem', fontSize: '.85rem' }}>
              {percentComplete === 100 ? '🎓 Get your certificate' : '🎓 Certificate'}
            </Link>
          </div>
        </div>
      )}

      {/* Profession selector - collapses to a compact pill once a role is chosen */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: showProfChooser ? '3rem 1.5rem' : '1.5rem' }} id="profession">
        {showProfChooser ? (
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Who are you?</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
              Select your role - we&apos;ll highlight the most relevant examples throughout every lesson.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '.75rem' }}>
              {PROFESSIONS.map(p => (
                <button
                  key={p.id}
                  onClick={() => chooseProf(p.id)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem',
                    padding: '1rem .75rem',
                    background: selectedProf === p.id ? 'var(--color-primary-light)' : 'var(--color-card)',
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
            {selectedProf && editingProf && (
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '.85rem', color: 'var(--color-text-muted)' }}>
                <button onClick={() => setEditingProf(false)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.85rem' }}>
                  Keep {selectedProfData?.label} ✕
                </button>
              </p>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.75rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.55rem', padding: '.5rem 1rem', background: 'var(--color-primary-light)', border: '2px solid var(--color-primary)', borderRadius: 'var(--radius-full)' }}>
              <span style={{ fontSize: '1.25rem' }}>{selectedProfData?.icon}</span>
              <span style={{ fontSize: '.88rem', fontWeight: 600 }}>
                ✓ Examples tailored for <strong>{selectedProfData?.label}</strong>
              </span>
            </div>
            <button
              onClick={() => setEditingProf(true)}
              style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.83rem', textDecoration: 'underline' }}
            >
              Change
            </button>
          </div>
        )}
      </section>

      {/* Role-tailored starting path (shown once a role is chosen) */}
      {selectedProf && !showProfChooser && PATH_RECS[selectedProf] && (() => {
        const rec = PATH_RECS[selectedProf]
        const lvl = LEVELS.find(l => l.level === rec.level)
        const href = lvl?.lessons[0]?.href ?? '/level0/lesson1'
        return (
          <section style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem 1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', background: 'var(--color-primary-light)', border: '1px solid var(--color-l4-border)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem' }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontSize: '.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--color-primary)' }}>
                  🎯 Recommended path for {selectedProfData?.label}
                </div>
                <p style={{ margin: '.3rem 0 0', fontSize: '.9rem', color: 'var(--color-text-muted)' }}>{rec.why}</p>
              </div>
              <Link href={href} className="btn-primary" style={{ padding: '.5rem 1.1rem', fontSize: '.85rem', whiteSpace: 'nowrap' }}>
                Start at Level {rec.level} →
              </Link>
            </div>
          </section>
        )
      })()}

      <div style={{ height: 1, background: 'var(--color-border)' }} />

      {/* Course levels */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }} id="levels">
        <h2 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Course Structure</h2>
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          {LEVELS.length} levels, each building on the previous. Click a level to expand its lessons - start at Level 0, no experience needed.
        </p>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', maxWidth: 860, margin: '0 auto 1rem' }}>
          <button onClick={() => setOpenLevels(new Set(LEVELS.map(l => l.level)))} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Expand all</button>
          <button onClick={() => setOpenLevels(new Set())} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Collapse all</button>
        </div>

        <div style={{ display: 'grid', gap: '.6rem', maxWidth: 860, margin: '0 auto' }}>
          {LEVELS.map(lvl => {
            const open = openLevels.has(lvl.level)
            const accentVar = `var(--color-${lvl.accent})`
            const checkColor = lvl.featured ? accentVar : 'var(--color-success)'
            const capstoneColor = lvl.featured ? accentVar : 'var(--color-warning)'
            const startHref = lvl.lessons[0].href
            const doneCount = lvl.lessons.filter(l => isComplete(l.id)).length
            return (
              <div key={lvl.level} style={{ border: '1px solid var(--color-border)', borderLeft: `4px solid ${accentVar}`, borderRadius: 'var(--radius-md)', background: 'var(--color-card)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                {/* Header row (click to toggle) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.7rem .9rem', background: open ? `var(--color-${lvl.accent}-light)` : 'var(--color-card)' }}>
                  <button
                    onClick={() => toggleLevel(lvl.level)}
                    aria-expanded={open}
                    style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '.7rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'inherit', minWidth: 0 }}
                  >
                    <span style={{ fontSize: '.8rem', color: 'var(--color-text-muted)', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .15s', flexShrink: 0 }}>▶</span>
                    <span className={`level-badge ${lvl.accent}`} style={{ marginBottom: 0, flexShrink: 0 }}>{lvl.badge}</span>
                    <span style={{ fontWeight: 700, fontSize: '.92rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lvl.cardTitle}</span>
                    <span style={{ fontSize: '.74rem', color: doneCount > 0 ? 'var(--color-success)' : 'var(--color-text-subtle)', marginLeft: 'auto', whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {doneCount > 0 ? `${doneCount}/${lvl.lessons.length} done` : `${lvl.lessons.length} lessons`}
                    </span>
                  </button>
                  <Link href={startHref} style={{ flexShrink: 0, padding: '.4rem .8rem', background: accentVar, color: 'white', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '.78rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Start →</Link>
                </div>

                {/* Expanded body */}
                {open && (
                  <div style={{ padding: '.5rem 1rem 1rem 2.2rem', borderTop: '1px solid var(--color-border)' }}>
                    <p style={{ fontSize: '.85rem', color: 'var(--color-text-muted)', margin: '.6rem 0 .2rem' }}>{lvl.cardDesc}</p>
                    <p style={{ fontSize: '.78rem', color: 'var(--color-text-subtle)', margin: '0 0 .5rem' }}>{lvl.hoursLabel}</p>
                    {lvl.lessons.map(l => {
                      const done = isComplete(l.id)
                      return (
                        <Link key={l.id} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.4rem 0', borderBottom: '1px solid var(--color-border)', fontSize: '.85rem', color: 'var(--color-text)', textDecoration: 'none' }}>
                          <span style={{ width: 22, height: 22, borderRadius: '50%', background: done ? checkColor : 'var(--color-surface)', border: `1px solid ${done ? checkColor : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 700, color: done ? 'white' : 'var(--color-text-muted)', flexShrink: 0 }}>
                            {done ? '✓' : l.number}
                          </span>
                          <span style={{ flex: 1 }}>{l.title}</span>
                          <span style={{ fontSize: '.76rem', color: 'var(--color-text-subtle)' }}>{l.duration} min</span>
                        </Link>
                      )
                    })}
                    <Link href={`/${lvl.slug}/capstone`} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.45rem 0', fontSize: '.85rem', color: capstoneColor, fontWeight: 600, textDecoration: 'none' }}>
                      <span style={{ fontSize: '1rem' }}>🏆</span> {lvl.capstoneText} <span style={{ marginLeft: 'auto', fontSize: '.76rem', color: 'var(--color-text-subtle)' }}>{lvl.capstoneDuration}</span>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
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
              { icon: '📚', title: 'Prompt Library', desc: '50+ ready-to-use prompts by profession - copy with one click.', href: '/tools/prompt-library' },
              { icon: '📖', title: 'AI Glossary', desc: 'Every AI term in plain English. Tokens, RAG, agents - decoded.', href: '/tools/glossary' },
              { icon: '⌨️', title: 'Claude Code Cheat Sheet', desc: 'All keyboard shortcuts, slash commands, CLI flags, MCP & agent config - Mac & Windows.', href: '/tools/claude-cheatsheet' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '.6rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '.3rem', fontSize: '.95rem' }}>{f.title}</h4>
                <p style={{ fontSize: '.83rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </Link>
            ))}
          </div>

          {/* AI Coding IDEs */}
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '1rem', marginTop: 0 }}>💻 AI Coding Tools - Setup Guides</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { icon: '🪐', title: 'Google Antigravity', desc: 'Google\'s agent-first IDE. Autonomous agents plan, build, and test apps in a real browser.', href: '/tools/antigravity' },
              { icon: '🐙', title: 'GitHub Copilot', desc: 'Install in VS Code or JetBrains. Slash commands, inline edits, Copilot Workspace.', href: '/tools/github-copilot' },
              { icon: '🖥️', title: 'Claude Code (CLI)', desc: 'Terminal-native agentic coding. Install, CLAUDE.md setup, and agentic tasks.', href: '/tools/claude-code-cli' },
              { icon: '⚡', title: 'Cursor', desc: 'AI code editor (VS Code fork). Composer, Cmd+K inline edits, @codebase chat.', href: '/tools/cursor' },
              { icon: '🌊', title: 'Windsurf', desc: 'Cascade agentic AI IDE. Full codebase indexing, autonomous multi-file tasks.', href: '/tools/windsurf' },
              { icon: '🔵', title: 'VS Code + AI Extensions', desc: 'Add Copilot, Claude, or Codeium to your existing VS Code setup.', href: '/tools/vscode-ai' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
              <Link key={f.title} href={f.href} style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '.6rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '.3rem', fontSize: '.95rem' }}>{f.title}</h4>
                <p style={{ fontSize: '.83rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </Link>
            ))}
          </div>

          {/* Certifications */}
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '1rem', marginTop: 0 }}>🎓 AI Certifications</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { icon: '🎓', title: 'AI Certifications Guide', desc: 'Free + paid AI certs, which are actually worth it, and how to prep for them free.', href: '/certifications' },
              { icon: '🧭', title: 'Cert Picker', desc: 'Answer 3 questions - track, budget, cloud - and get a free-first cert path you can copy.', href: '/certifications#cert-picker' },
              { icon: '🆓', title: 'Free Certs & Vouchers', desc: 'Anthropic Academy, Google AI Essentials, DeepLearning.AI, plus how to get paid exams free.', href: '/certifications#free-certs' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
              { icon: '🔌', title: 'AI APIs Comparison', desc: 'Compare Anthropic, OpenAI, Gemini, Mistral, Groq and more - pricing, context windows, and when to use each.', href: '/tools/ai-apis' },
              { icon: '📊', title: 'Progress Tracker', desc: 'Track completed lessons, saved right in your browser automatically.', href: '#levels' },
            ].map(f => (
              <Link key={f.title} href={f.href} style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
          This course is free to share. AI capabilities change rapidly - always verify important information independently.
        </p>
      </footer>
    </>
  )
}
