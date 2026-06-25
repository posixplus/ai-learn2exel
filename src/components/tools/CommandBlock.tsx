'use client'
import { useState } from 'react'

/** A terminal command shown in a styled box with a one-click Copy button. */
export default function CommandBlock({ command, label }: { command: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch { /* ignore */ }
  }

  return (
    <div style={{ marginTop: '.5rem' }}>
      {label && <div style={{ fontSize: '.78rem', color: '#9CA3AF', marginBottom: '.25rem' }}>{label}</div>}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: '.5rem' }}>
        <code style={{ flex: 1, background: '#0F172A', color: '#E2E8F0', padding: '.7rem .9rem', borderRadius: 8, fontSize: '.82rem', fontFamily: 'monospace', overflowX: 'auto', whiteSpace: 'pre' }}>{command}</code>
        <button
          onClick={copy}
          style={{ flexShrink: 0, background: copied ? '#16A34A' : '#1D4ED8', color: 'white', border: 'none', borderRadius: 8, padding: '0 .9rem', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
