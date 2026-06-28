'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function ClaimInner() {
  const router = useRouter()
  const params = useSearchParams()
  const [status, setStatus] = useState<'working' | 'done' | 'error'>('working')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const token = params.get('token')
    if (!token) { setStatus('error'); setMsg('This link is missing its confirmation token.'); return }
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/cert/claim', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Could not issue your certificate.')
        if (cancelled) return
        try {
          const date = new Date(data.issuedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
          localStorage.setItem('ai-course-cert', JSON.stringify({ id: data.id, name: data.name, date }))
        } catch { /* storage unavailable */ }
        setStatus('done')
        setTimeout(() => router.replace('/certificate'), 1200)
      } catch (e) {
        if (!cancelled) { setStatus('error'); setMsg(e instanceof Error ? e.message : 'Something went wrong.') }
      }
    })()
    return () => { cancelled = true }
  }, [params, router])

  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: 460, textAlign: 'center', background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 16, padding: '2.5rem 2rem' }}>
        {status === 'working' && (<>
          <div style={{ fontSize: '2rem' }}>⏳</div>
          <h1 style={{ fontSize: '1.3rem', margin: '.5rem 0' }}>Issuing your certificate...</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>One moment while we confirm your email.</p>
        </>)}
        {status === 'done' && (<>
          <div style={{ fontSize: '2rem' }}>✅</div>
          <h1 style={{ fontSize: '1.3rem', margin: '.5rem 0' }}>Certificate issued!</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Taking you to your certificate...</p>
        </>)}
        {status === 'error' && (<>
          <div style={{ fontSize: '2rem' }}>❌</div>
          <h1 style={{ fontSize: '1.3rem', margin: '.5rem 0' }}>Could not issue certificate</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>{msg}</p>
          <div style={{ marginTop: '1.25rem' }}>
            <Link href="/certificate" className="btn-primary" style={{ padding: '.55rem 1.1rem' }}>Back to certificate</Link>
          </div>
        </>)}
      </div>
    </div>
  )
}

export default function ClaimPage() {
  return (
    <Suspense fallback={null}>
      <ClaimInner />
    </Suspense>
  )
}
