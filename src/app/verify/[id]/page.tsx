import Link from 'next/link'
import type { Metadata } from 'next'
import { getSql, ensureSchema } from '@/lib/db'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Verify a Certificate | AI for Everyone',
  description: 'Verify the authenticity of an AI for Everyone certificate of completion.',
  robots: { index: false },
}

type Cert = { id: string; name: string; issued_at: string }

export default async function VerifyPage({ params }: { params: { id: string } }) {
  let cert: Cert | null = null
  try {
    await ensureSchema()
    const sql = getSql()
    const rows = (await sql`SELECT id, name, issued_at FROM certificates WHERE id = ${params.id}`) as Cert[]
    cert = rows[0] ?? null
  } catch {
    cert = null
  }

  const valid = !!cert
  const date = cert ? new Date(cert.issued_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{ maxWidth: 520, width: '100%', background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 16, padding: '2.5rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ fontSize: '2.5rem' }}>{valid ? '✅' : '❌'}</div>
        <h1 style={{ fontSize: '1.4rem', margin: '.5rem 0' }}>
          {valid ? 'Valid certificate' : 'Certificate not found'}
        </h1>

        {valid ? (
          <>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              This certificate was genuinely issued by Learn to Exel AI.
            </p>
            <div style={{ textAlign: 'left', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10, padding: '1rem 1.25rem', fontSize: '.92rem' }}>
              <Row label="Issued to" value={cert!.name} />
              <Row label="Course" value="AI for Everyone - all 80 lessons" />
              <Row label="Date" value={date} />
              <Row label="Verification ID" value={cert!.id} mono />
            </div>
            <p style={{ fontSize: '.78rem', color: 'var(--color-text-subtle)', marginTop: '1rem' }}>
              The certificate is issued to a verified email address. Course completion is self-reported by the learner.
            </p>
          </>
        ) : (
          <p style={{ color: 'var(--color-text-muted)' }}>
            No certificate matches ID <code>{params.id}</code>. Check the ID for typos, or it may not be genuine.
          </p>
        )}

        <div style={{ marginTop: '1.75rem' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none' }}>
            AI for Everyone - free course
          </Link>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '.35rem 0', borderBottom: '1px solid var(--color-border)' }}>
      <span style={{ color: 'var(--color-text-muted)' }}>{label}</span>
      <span style={{ fontWeight: 600, fontFamily: mono ? 'var(--font-mono)' : 'inherit', textAlign: 'right' }}>{value}</span>
    </div>
  )
}
