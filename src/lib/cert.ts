import crypto from 'crypto'

// Readable, unambiguous certificate id, e.g. LTEAI-7K2QH9PX
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
export function newCertId(): string {
  const bytes = crypto.randomBytes(8)
  let s = ''
  for (let i = 0; i < 8; i++) s += ALPHABET[bytes[i] % ALPHABET.length]
  return `LTEAI-${s}`
}

// Random, URL-safe single-use token for the magic link.
export function newToken(): string {
  return crypto.randomBytes(32).toString('base64url')
}

// HMAC over the certificate's identifying fields. Tamper-evidence on the
// printed cert; the authoritative check is still the /verify DB lookup.
export function signCert(id: string, email: string, issuedAtISO: string): string {
  const secret = process.env.CERT_SIGNING_SECRET || ''
  return crypto.createHmac('sha256', secret).update(`${id}.${email}.${issuedAtISO}`).digest('hex')
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string
  ))
}

// Send the magic-link confirmation email via Resend (same provider the
// feedback route already uses). Throws if RESEND_API_KEY is missing.
export async function sendMagicEmail(to: string, name: string, link: string): Promise<void> {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')
  const from = process.env.CERT_EMAIL_FROM || 'AI for Everyone <onboarding@resend.dev>'
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to,
      subject: 'Confirm your AI for Everyone certificate',
      html: `<div style="font-family:system-ui,sans-serif;max-width:480px;margin:0 auto;color:#1a1a1a">
        <h2 style="margin:0 0 12px">Almost there, ${escapeHtml(name)}.</h2>
        <p style="color:#444;line-height:1.6">Confirm your email to issue your verifiable certificate of completion for the <strong>AI for Everyone</strong> course.</p>
        <p style="margin:24px 0"><a href="${link}" style="display:inline-block;background:#2563EB;color:#fff;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:600">Issue my certificate</a></p>
        <p style="color:#888;font-size:13px">This link expires in 30 minutes and can be used once. If you did not request this, you can ignore this email.</p>
      </div>`,
    }),
  })
  if (!res.ok) {
    throw new Error(`Resend error ${res.status}: ${await res.text()}`)
  }
}
