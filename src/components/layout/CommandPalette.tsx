'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LEVELS, ALL_LESSONS, capstonePublished } from '@/data/course'

type Item = { title: string; subtitle: string; href: string }

const TOOL_ITEMS: Item[] = [
  { title: 'AI Certifications', subtitle: 'Guide', href: '/certifications' },
  { title: 'Certificate of Completion', subtitle: 'Your certificate', href: '/certificate' },
  { title: 'Which AI Should I Use? Quiz', subtitle: 'Tool', href: '/tools/quiz' },
  { title: 'Prompt Library', subtitle: 'Tool', href: '/tools/prompt-library' },
  { title: 'AI Glossary', subtitle: 'Tool', href: '/tools/glossary' },
  { title: 'Claude Code Cheat Sheet', subtitle: 'Tool', href: '/tools/claude-cheatsheet' },
  { title: 'Google Antigravity', subtitle: 'Setup guide', href: '/tools/antigravity' },
  { title: 'Cursor', subtitle: 'Setup guide', href: '/tools/cursor' },
  { title: 'Devin Desktop (Windsurf)', subtitle: 'Setup guide', href: '/tools/windsurf' },
  { title: 'GitHub Copilot', subtitle: 'Setup guide', href: '/tools/github-copilot' },
  { title: 'Claude Code CLI', subtitle: 'Setup guide', href: '/tools/claude-code-cli' },
  { title: 'VS Code + AI Extensions', subtitle: 'Setup guide', href: '/tools/vscode-ai' },
  { title: 'Ollama', subtitle: 'Local AI', href: '/tools/ollama' },
  { title: 'Hugging Face', subtitle: 'Local AI', href: '/tools/huggingface' },
  { title: 'Free Local AI Guide', subtitle: 'Local AI', href: '/tools/local-ai' },
  { title: 'AI APIs Comparison', subtitle: 'Reference', href: '/tools/ai-apis' },
  { title: 'Mac vs Windows for AI', subtitle: 'Hardware', href: '/tools/ai-hardware' },
]

const INDEX: Item[] = [
  ...ALL_LESSONS.map(l => ({ title: l.title, subtitle: `Lesson ${l.number} · Level ${l.level}`, href: l.href })),
  ...LEVELS.filter(capstonePublished).map(lvl => ({ title: lvl.capstoneText, subtitle: `Capstone · Level ${lvl.level}`, href: `/${lvl.slug}/capstone` })),
  ...TOOL_ITEMS,
]

export default function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault(); setOpen(o => !o)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) { setQ(''); setActive(0); setTimeout(() => inputRef.current?.focus(), 0) }
  }, [open])

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return INDEX.slice(0, 8)
    return INDEX
      .map(it => ({ it, score: (it.title + ' ' + it.subtitle).toLowerCase().indexOf(term) }))
      .filter(x => x.score >= 0)
      .sort((a, b) => a.score - b.score)
      .slice(0, 12)
      .map(x => x.it)
  }, [q])

  useEffect(() => { setActive(0) }, [q])

  const go = (href: string) => { setOpen(false); router.push(href) }

  if (!open) return null

  return (
    <div
      onClick={() => setOpen(false)}
      style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '12vh' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: 560, background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 14, boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}
      >
        <input
          ref={inputRef}
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search lessons, tools, capstones..."
          onKeyDown={e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)) }
            else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)) }
            else if (e.key === 'Enter') { e.preventDefault(); const r = results[active]; if (r) go(r.href) }
          }}
          style={{ width: '100%', boxSizing: 'border-box', padding: '1rem 1.25rem', fontSize: '1rem', border: 'none', borderBottom: '1px solid var(--color-border)', outline: 'none', background: 'transparent', color: 'var(--color-text)', fontFamily: 'inherit' }}
        />
        <div style={{ maxHeight: '50vh', overflowY: 'auto', padding: '.4rem' }}>
          {results.length === 0 ? (
            <div style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '.9rem' }}>No matches found.</div>
          ) : results.map((r, i) => (
            <button
              key={r.href}
              onMouseEnter={() => setActive(i)}
              onClick={() => go(r.href)}
              style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '.6rem .75rem', borderRadius: 8, border: 'none', cursor: 'pointer', background: i === active ? 'var(--color-surface)' : 'transparent', color: 'var(--color-text)', fontFamily: 'inherit' }}
            >
              <span style={{ fontSize: '.9rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.title}</span>
              <span style={{ fontSize: '.74rem', color: 'var(--color-text-subtle)', whiteSpace: 'nowrap', flexShrink: 0 }}>{r.subtitle}</span>
            </button>
          ))}
        </div>
        <div style={{ padding: '.5rem .9rem', borderTop: '1px solid var(--color-border)', fontSize: '.72rem', color: 'var(--color-text-subtle)', display: 'flex', gap: '1rem' }}>
          <span>↑↓ navigate</span><span>↵ open</span><span>esc close</span>
          <span style={{ marginLeft: 'auto' }}>⌘K / Ctrl+K</span>
        </div>
      </div>
    </div>
  )
}
