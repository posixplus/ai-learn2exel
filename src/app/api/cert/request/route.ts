import { NextRequest, NextResponse } from 'next/server'
import { getSql, ensureSchema } from '@/lib/db'
import { newToken, sendMagicEmail } from '@/lib/cert'

export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json()
    const cleanName = String(name ?? '').trim()
    const cleanEmail = String(email ?? '').trim().toLowerCase()
    if (cleanName.length < 2 || !EMAIL_RE.test(cleanEmail)) {
      return NextResponse.json({ error: 'Enter a valid name and email.' }, { status: 400 })
    }

    await ensureSchema()
    const sql = getSql()
    const token = newToken()
    const expires = new Date(Date.now() + 30 * 60 * 1000).toISOString()
    await sql`INSERT INTO magic_tokens (token, email, name, expires_at)
              VALUES (${token}, ${cleanEmail}, ${cleanName}, ${expires})`

    const link = `${req.nextUrl.origin}/certificate/claim?token=${token}`
    await sendMagicEmail(cleanEmail, cleanName, link)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('cert/request failed:', err)
    return NextResponse.json({ error: 'Could not send the confirmation email. Please try again later.' }, { status: 500 })
  }
}
