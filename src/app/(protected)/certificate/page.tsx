'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useProgress } from '@/contexts/ProgressContext'
import { useVisitorName } from '@/components/layout/WelcomeModal'
import { ALL_LESSONS, TOTAL_LESSONS } from '@/data/course'

const COURSE_MINUTES = ALL_LESSONS.reduce((a, l) => a + l.duration, 0)
const REQUIRED_SECONDS = Math.round(COURSE_MINUTES * 60 * 0.5) // half the course's stated time

function fmtHM(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const h = Math.floor(m / 60)
  const rem = m % 60
  if (h <= 0) return `${rem} min`
  return `${h} hr ${rem} min`
}

interface IssuedCert { id: string; name: string; date: string }

export default function CertificatePage() {
  const { completedCount, totalActiveSeconds } = useProgress()
  const { name, loaded } = useVisitorName()

  const allDone = completedCount >= TOTAL_LESSONS
  const timeMet = totalActiveSeconds >= REQUIRED_SECONDS
  const unlocked = allDone && timeMet

  // A certificate that has already been issued (server-verified) lives here.
  const [issued, setIssued] = useState<IssuedCert | null>(null)
  useEffect(() => {
    try {
      const raw = localStorage.getItem('ai-course-cert')
      if (!raw) return
      const c = JSON.parse(raw)
      if (c && c.id && c.name) setIssued(c as IssuedCert) // requires the new (server-issued) shape
    } catch { /* ignore */ }
  }, [])

  // Claim form state
  const [nameInput, setNameInput] = useState('')
  const [email, setEmail] = useState('')
  const [claimState, setClaimState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [claimMsg, setClaimMsg] = useState('')
  useEffect(() => { if (name) setNameInput(name) }, [name])

  async function requestCert(e: React.FormEvent) {
    e.preventDefault()
    setClaimState('sending'); setClaimMsg('')
    try {
      const res = await fetch('/api/cert/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameInput, email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Could not send the email.')
      setClaimState('sent')
    } catch (err) {
      setClaimState('error')
      setClaimMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (!loaded) return null

  // ---------- 1) Already issued: show the verifiable, printable certificate ----------
  if (issued) {
    const verifyPath = `/verify/${issued.id}`
    return (
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
        <div className="cert-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
          <button onClick={() => window.print()} className="btn-primary" style={{ padding: '.55rem 1.1rem' }}>🖨 Print / Save PDF</button>
        </div>

        <div className="cert-print" style={{ background: '#FFFFFF', color: '#1A1A1A', border: '2px solid #B8860B', boxShadow: '0 0 0 10px #FFFFFF, 0 0 0 12px #E5C76B', borderRadius: 8, padding: '3.5rem 3rem', textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '.4rem' }}>🎓</div>
          <div style={{ letterSpacing: '.25em', fontSize: '.8rem', fontWeight: 700, color: '#B8860B', textTransform: 'uppercase' }}>Certificate of Completion</div>
          <div style={{ height: 2, width: 80, background: '#E5C76B', margin: '1rem auto' }} />
          <p style={{ color: '#666', fontSize: '.95rem', margin: '1.5rem 0 .5rem' }}>This certifies that</p>
          <div style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'Georgia, serif', color: '#0F172A', margin: '.25rem 0 1rem', lineHeight: 1.1 }}>{issued.name}</div>
          <p style={{ color: '#444', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            has successfully completed all {TOTAL_LESSONS} lessons of the <strong> AI for Everyone </strong>
            course, demonstrating practical, hands-on fluency in modern AI, large language models, prompting, agents, and applied tooling.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '3rem', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: '#0F172A' }}>Learn to Exel AI</div>
              <div style={{ borderTop: '1px solid #999', paddingTop: '.3rem', marginTop: '.3rem', fontSize: '.78rem', color: '#666' }}>Issuing authority · Virginia, USA</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A' }}>{issued.date}</div>
              <div style={{ borderTop: '1px solid #999', paddingTop: '.3rem', marginTop: '.3rem', fontSize: '.78rem', color: '#666' }}>Date of completion</div>
            </div>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '.72rem', color: '#999', letterSpacing: '.05em' }}>
            Verification ID: {issued.id} · Verify at learn2exel.com{verifyPath}
          </div>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--color-text-subtle)', fontSize: '.8rem', marginTop: '1.25rem', maxWidth: 600, marginInline: 'auto' }}>
          Anyone can confirm this certificate at{' '}
          <Link href={verifyPath} style={{ color: 'var(--color-primary)' }}>learn2exel.com{verifyPath}</Link>.
          It is issued to a verified email; course completion is self-reported. A keepsake, not an accredited credential.
        </p>
      </div>
    )
  }

  // ---------- 2) Course finished but not yet claimed: the claim form ----------
  if (unlocked) {
    return (
      <div style={{ maxWidth: 540, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
        <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
          <div style={{ fontSize: '3rem' }}>🎉</div>
          <h1 style={{ margin: '.5rem 0' }}>You finished the course!</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Claim your <strong>verifiable</strong> certificate. We will email you a one-time link to confirm it is really you,
            then issue a certificate with an ID anyone can verify.
          </p>
        </div>

        {claimState === 'sent' ? (
          <div style={{ background: 'var(--color-tip-bg)', border: '1px solid var(--color-tip-border)', borderRadius: 12, padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem' }}>📧</div>
            <h2 style={{ fontSize: '1.1rem', margin: '.4rem 0' }}>Check your email</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '.9rem' }}>
              We sent a confirmation link to <strong>{email}</strong>. Click it to issue your certificate. The link expires in 30 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={requestCert} style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
            <label style={{ fontSize: '.85rem', fontWeight: 600 }}>
              Full name (as it should appear)
              <input value={nameInput} onChange={e => setNameInput(e.target.value)} placeholder="Jane Doe" required
                style={{ display: 'block', width: '100%', boxSizing: 'border-box', marginTop: '.3rem', padding: '.6rem .8rem', border: '1.5px solid var(--color-border)', borderRadius: 8, fontFamily: 'inherit', fontSize: '.92rem', background: 'var(--color-bg)', color: 'var(--color-text)' }} />
            </label>
            <label style={{ fontSize: '.85rem', fontWeight: 600 }}>
              Email
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required
                style={{ display: 'block', width: '100%', boxSizing: 'border-box', marginTop: '.3rem', padding: '.6rem .8rem', border: '1.5px solid var(--color-border)', borderRadius: 8, fontFamily: 'inherit', fontSize: '.92rem', background: 'var(--color-bg)', color: 'var(--color-text)' }} />
            </label>
            {claimState === 'error' && <div style={{ color: 'var(--color-danger)', fontSize: '.85rem' }}>{claimMsg}</div>}
            <button type="submit" disabled={claimState === 'sending'} className="btn-primary" style={{ opacity: claimState === 'sending' ? 0.6 : 1 }}>
              {claimState === 'sending' ? 'Sending...' : 'Email me my certificate link'}
            </button>
            <p style={{ fontSize: '.75rem', color: 'var(--color-text-subtle)', margin: 0 }}>
              Your email is used only to issue and verify this certificate.
            </p>
          </form>
        )}
      </div>
    )
  }

  // ---------- 3) Locked: show progress toward the two gates ----------
  const lessonsPct = Math.round((completedCount / TOTAL_LESSONS) * 100)
  const timePct = Math.min(100, Math.round((totalActiveSeconds / REQUIRED_SECONDS) * 100))
  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <div style={{ fontSize: '3rem' }}>🔒</div>
        <h1 style={{ margin: '.5rem 0' }}>Certificate of Completion</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Finish the whole course to unlock your verifiable certificate. Two requirements, so it means something:
        </p>
      </div>
      <Gate label={`Complete all ${TOTAL_LESSONS} lessons`} detail={`${completedCount} of ${TOTAL_LESSONS} done`} pct={lessonsPct} met={allDone} />
      <Gate label="Spend real time learning" detail={`${fmtHM(totalActiveSeconds)} of ${fmtHM(REQUIRED_SECONDS)} active reading time`} pct={timePct} met={timeMet} />
      <p style={{ fontSize: '.82rem', color: 'var(--color-text-subtle)', marginTop: '1.5rem', textAlign: 'center' }}>
        Active time counts only while a lesson tab is open and focused.
      </p>
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <Link href="/level0/lesson1" className="btn-primary">Keep learning →</Link>
      </div>
    </div>
  )
}

function Gate({ label, detail, pct, met }: { label: string; detail: string; pct: number; met: boolean }) {
  return (
    <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: '1.1rem 1.25rem', margin: '.75rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.5rem' }}>
        <span style={{ fontWeight: 700, fontSize: '.95rem' }}>{met ? '✅' : '⬜'} {label}</span>
        <span style={{ fontSize: '.8rem', color: 'var(--color-text-muted)' }}>{detail}</span>
      </div>
      <div style={{ background: 'var(--color-border)', height: 8, borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: met ? 'var(--color-success)' : 'var(--color-primary)', transition: 'width .4s' }} />
      </div>
    </div>
  )
}
