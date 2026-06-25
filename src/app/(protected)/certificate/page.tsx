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

interface CertMeta { date: string; id: string }

export default function CertificatePage() {
  const { completedCount, totalActiveSeconds } = useProgress()
  const { name, saveName, loaded } = useVisitorName()

  const allDone = completedCount >= TOTAL_LESSONS
  const timeMet = totalActiveSeconds >= REQUIRED_SECONDS
  const unlocked = allDone && timeMet

  const [meta, setMeta] = useState<CertMeta | null>(null)
  const [nameInput, setNameInput] = useState('')

  // Stamp the certificate date + verification id once, on first unlock.
  useEffect(() => {
    if (!unlocked) return
    try {
      const raw = localStorage.getItem('ai-course-cert')
      if (raw) { setMeta(JSON.parse(raw) as CertMeta); return }
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      const id = 'LTEAI-' + Date.now().toString(36).toUpperCase().slice(-6)
      const m = { date, id }
      localStorage.setItem('ai-course-cert', JSON.stringify(m))
      setMeta(m)
    } catch { /* storage unavailable */ }
  }, [unlocked])

  if (!loaded) return null

  // ----- Locked state: show the two gates and progress toward them -----
  if (!unlocked) {
    const lessonsPct = Math.round((completedCount / TOTAL_LESSONS) * 100)
    const timePct = Math.min(100, Math.round((totalActiveSeconds / REQUIRED_SECONDS) * 100))
    return (
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div style={{ fontSize: '3rem' }}>🔒</div>
          <h1 style={{ margin: '.5rem 0' }}>Certificate of Completion</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Finish the whole course to unlock your printable certificate. Two requirements, so it actually means something:
          </p>
        </div>

        <Gate
          label={`Complete all ${TOTAL_LESSONS} lessons`}
          detail={`${completedCount} of ${TOTAL_LESSONS} done`}
          pct={lessonsPct}
          met={allDone}
        />
        <Gate
          label="Spend real time learning"
          detail={`${fmtHM(totalActiveSeconds)} of ${fmtHM(REQUIRED_SECONDS)} active reading time`}
          pct={timePct}
          met={timeMet}
        />

        <p style={{ fontSize: '.82rem', color: 'var(--color-text-subtle)', marginTop: '1.5rem', textAlign: 'center' }}>
          Active time counts only while a lesson tab is open and focused. This keeps the certificate honest -
          it cannot be earned by clicking through in a few minutes.
        </p>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/level0/lesson1" className="btn-primary">Keep learning →</Link>
        </div>
      </div>
    )
  }

  // ----- Unlocked: the printable certificate -----
  const displayName = name || nameInput

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
      <div className="cert-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '.875rem', textDecoration: 'none' }}>← Back to Course</Link>
        <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
          {!name && (
            <form
              onSubmit={(e) => { e.preventDefault(); if (nameInput.trim()) saveName(nameInput) }}
              style={{ display: 'flex', gap: '.4rem' }}
            >
              <input
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                placeholder="Your name"
                style={{ padding: '.45rem .7rem', border: '1.5px solid var(--color-border)', borderRadius: 8, fontFamily: 'inherit', fontSize: '.85rem' }}
              />
              <button type="submit" className="btn-secondary" style={{ padding: '.45rem .9rem' }}>Set name</button>
            </form>
          )}
          <button onClick={() => window.print()} className="btn-primary" style={{ padding: '.55rem 1.1rem' }} disabled={!displayName}>
            🖨 Print / Save PDF
          </button>
        </div>
      </div>

      {!displayName && (
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '.9rem', marginBottom: '1rem' }}>
          Enter your name above to put it on the certificate.
        </p>
      )}

      {/* The certificate itself - explicit light colors so it prints cleanly in any theme. */}
      <div
        className="cert-print"
        style={{
          background: '#FFFFFF',
          color: '#1A1A1A',
          border: '2px solid #B8860B',
          boxShadow: '0 0 0 10px #FFFFFF, 0 0 0 12px #E5C76B',
          borderRadius: 8,
          padding: '3.5rem 3rem',
          textAlign: 'center',
          maxWidth: 820,
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div style={{ fontSize: '2.2rem', marginBottom: '.4rem' }}>🎓</div>
        <div style={{ letterSpacing: '.25em', fontSize: '.8rem', fontWeight: 700, color: '#B8860B', textTransform: 'uppercase' }}>
          Certificate of Completion
        </div>
        <div style={{ height: 2, width: 80, background: '#E5C76B', margin: '1rem auto' }} />

        <p style={{ color: '#666', fontSize: '.95rem', margin: '1.5rem 0 .5rem' }}>This certifies that</p>
        <div style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'Georgia, serif', color: '#0F172A', margin: '.25rem 0 1rem', lineHeight: 1.1 }}>
          {displayName || '____________'}
        </div>
        <p style={{ color: '#444', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          has successfully completed all {TOTAL_LESSONS} lessons of the
          <strong> AI for Everyone </strong> course, demonstrating practical, hands-on fluency
          in modern AI, large language models, prompting, agents, and applied tooling.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '3rem', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: '#0F172A' }}>Learn to Excel AI</div>
            <div style={{ borderTop: '1px solid #999', paddingTop: '.3rem', marginTop: '.3rem', fontSize: '.78rem', color: '#666' }}>
              Issuing authority · Virginia, USA
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A' }}>{meta?.date ?? ''}</div>
            <div style={{ borderTop: '1px solid #999', paddingTop: '.3rem', marginTop: '.3rem', fontSize: '.78rem', color: '#666' }}>
              Date of completion
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem', fontSize: '.72rem', color: '#999', letterSpacing: '.05em' }}>
          Verification ID: {meta?.id ?? ''} · Verify at learn2exel.com
        </div>
      </div>

      <p style={{ textAlign: 'center', color: 'var(--color-text-subtle)', fontSize: '.78rem', marginTop: '1.25rem', maxWidth: 560, marginInline: 'auto' }}>
        This is a course-completion keepsake from Learn to Excel AI, not an accredited or government-recognized credential.
      </p>
    </div>
  )
}

function Gate({ label, detail, pct, met }: { label: string; detail: string; pct: number; met: boolean }) {
  return (
    <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: '1.1rem 1.25rem', margin: '.75rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.5rem' }}>
        <span style={{ fontWeight: 700, fontSize: '.95rem' }}>
          {met ? '✅' : '⬜'} {label}
        </span>
        <span style={{ fontSize: '.8rem', color: 'var(--color-text-muted)' }}>{detail}</span>
      </div>
      <div style={{ background: 'var(--color-border)', height: 8, borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: met ? 'var(--color-success)' : 'var(--color-primary)', transition: 'width .4s' }} />
      </div>
    </div>
  )
}
