import { NextRequest, NextResponse } from 'next/server'
import { getSql, ensureSchema } from '@/lib/db'
import { newCertId, signCert } from '@/lib/cert'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json()
    if (!token || typeof token !== 'string') {
      return NextResponse.json({ error: 'Missing token.' }, { status: 400 })
    }

    await ensureSchema()
    const sql = getSql()
    const rows = (await sql`SELECT email, name, expires_at, used, cert_id
                            FROM magic_tokens WHERE token = ${token}`) as Array<{ email: string; name: string; expires_at: string; used: boolean; cert_id: string | null }>
    const t = rows[0]
    if (!t) return NextResponse.json({ error: 'This confirmation link is invalid.' }, { status: 400 })

    // Already used: return the cert it issued (so re-clicking the link just shows it).
    if (t.used) {
      if (t.cert_id) {
        const c = ((await sql`SELECT id, name, issued_at FROM certificates WHERE id = ${t.cert_id}`) as Array<{ id: string; name: string; issued_at: string }>)[0]
        if (c) return NextResponse.json({ id: c.id, name: c.name, issuedAt: c.issued_at })
      }
      return NextResponse.json({ error: 'This link was already used.' }, { status: 400 })
    }

    if (new Date(t.expires_at).getTime() < Date.now()) {
      return NextResponse.json({ error: 'This link has expired. Please request a new one.' }, { status: 400 })
    }

    const id = newCertId()
    const issuedAt = new Date().toISOString()
    const signature = signCert(id, t.email, issuedAt)
    await sql`INSERT INTO certificates (id, name, email, issued_at, signature)
              VALUES (${id}, ${t.name}, ${t.email}, ${issuedAt}, ${signature})`
    await sql`UPDATE magic_tokens SET used = TRUE, cert_id = ${id} WHERE token = ${token}`

    return NextResponse.json({ id, name: t.name, issuedAt })
  } catch (err) {
    console.error('cert/claim failed:', err)
    return NextResponse.json({ error: 'Could not issue the certificate.' }, { status: 500 })
  }
}
