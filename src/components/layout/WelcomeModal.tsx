'use client'

import { useState, useEffect } from 'react'

const NAME_KEY = 'ai-course-visitor-name'

export function useVisitorName() {
  const [name, setNameState] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(NAME_KEY)
    setNameState(stored)
    setLoaded(true)
  }, [])

  const saveName = (n: string) => {
    const trimmed = n.trim()
    localStorage.setItem(NAME_KEY, trimmed)
    setNameState(trimmed)
  }

  return { name, saveName, loaded, needsName: loaded && !name }
}

export default function WelcomeModal() {
  const { name, saveName, needsName } = useVisitorName()
  const [input, setInput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (needsName) setVisible(true)
  }, [needsName])

  if (!visible || name) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    saveName(input)
    setVisible(false)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        background: '#fff', borderRadius: '1rem', padding: '2.5rem 2rem',
        maxWidth: '420px', width: '100%', textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>👋</div>
        <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Welcome to AI for Everyone!
        </h2>
        <p style={{ margin: '0 0 1.5rem', color: '#6b7280', fontSize: '0.95rem' }}>
          What should we call you? We&apos;ll use your name to track your progress.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="text"
            placeholder="Your first name"
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{
              width: '100%', padding: '0.75rem 1rem', fontSize: '1rem',
              border: '2px solid #e5e7eb', borderRadius: '0.5rem',
              outline: 'none', marginBottom: '1rem', boxSizing: 'border-box',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = '#7c3aed')}
            onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            style={{
              width: '100%', padding: '0.75rem', fontSize: '1rem',
              fontWeight: 600, borderRadius: '0.5rem', border: 'none',
              background: input.trim() ? '#7c3aed' : '#d1d5db',
              color: '#fff', cursor: input.trim() ? 'pointer' : 'not-allowed',
              transition: 'background 0.2s',
            }}
          >
            Let&apos;s go! →
          </button>
        </form>
      </div>
    </div>
  )
}
