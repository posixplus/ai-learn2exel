'use client'

import { useEffect, useState } from 'react'

/**
 * Floating light/dark toggle. The theme is resolved before paint by an inline
 * script in the root layout (stored choice, else OS preference). This button
 * just flips it and remembers the explicit choice. Rendered once in the root
 * layout so it appears on every page, including the home page which has no nav.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    setTheme(current)

    // Live-follow the OS theme only while the user hasn't made an explicit choice.
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      try { if (localStorage.getItem('ai-course-theme')) return } catch { /* ignore */ }
      const sys = mq.matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', sys)
      setTheme(sys)
    }
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  function toggle() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('ai-course-theme', next) } catch { /* ignore */ }
    setTheme(next)
  }

  // Render nothing until mounted so server and client first paint match.
  if (theme === null) return null
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        zIndex: 60,
        width: 44,
        height: 44,
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        cursor: 'pointer',
        background: 'var(--color-surface)',
        color: 'var(--color-text)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-md)',
        fontFamily: 'inherit',
        lineHeight: 1,
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
