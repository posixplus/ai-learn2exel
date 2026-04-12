import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { level, levelTitle, rating, comment, name } = await req.json()

  if (!rating || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Invalid rating' }, { status: 400 })
  }

  const submittedAt = new Date().toISOString()
  const starLabel = ['', 'Not helpful', 'Needs work', 'Good', 'Very good', 'Excellent'][rating] ?? ''

  // ─── 1. Send email via Resend ───────────────────────────────────────────────
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'feedback@learn2exel.com',
          to: '2005jay@gmail.com',
          subject: `⭐ Level ${level} Feedback — ${rating}/5 stars (${starLabel})`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
              <h2 style="margin: 0 0 24px; color: #111827;">📬 New Course Feedback</h2>

              <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                <tr style="background: #f3f4f6;">
                  <td style="padding: 10px 16px; font-weight: 600; color: #374151; width: 140px;">Level</td>
                  <td style="padding: 10px 16px; color: #111827;">Level ${level} — ${levelTitle}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-weight: 600; color: #374151;">Rating</td>
                  <td style="padding: 10px 16px; color: #111827;">${'⭐'.repeat(rating)} ${rating}/5 — ${starLabel}</td>
                </tr>
                <tr style="background: #f3f4f6;">
                  <td style="padding: 10px 16px; font-weight: 600; color: #374151;">From</td>
                  <td style="padding: 10px 16px; color: #111827;">${name || '(anonymous)'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-weight: 600; color: #374151;">Submitted</td>
                  <td style="padding: 10px 16px; color: #6b7280;">${new Date(submittedAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                </tr>
              </table>

              ${comment ? `
              <div style="background: white; border-left: 4px solid #6366f1; border-radius: 0 8px 8px 0; padding: 16px 20px;">
                <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: #9ca3af; margin-bottom: 8px;">Comment</div>
                <div style="color: #374151; line-height: 1.6;">${comment}</div>
              </div>` : ''}

              <p style="margin: 24px 0 0; font-size: 13px; color: #9ca3af; text-align: center;">
                Sent by learn2exel.com · AI for Everyone course
              </p>
            </div>
          `,
        }),
      })
    } catch (err) {
      console.error('Resend email failed:', err)
      // Continue — don't fail the request just because email failed
    }
  } else {
    console.log(`[FEEDBACK] Level ${level} | ${rating}★ | ${name || 'anon'} | "${comment}"`)
    console.log('💡 Add RESEND_API_KEY env var to enable email notifications.')
  }

  // ─── 2. Store in Vercel KV ──────────────────────────────────────────────────
  const kvUrl   = process.env.KV_REST_API_URL
  const kvToken = process.env.KV_REST_API_TOKEN
  if (kvUrl && kvToken) {
    try {
      const key = `feedback:level${level}:${Date.now()}`
      const record = JSON.stringify({ level, levelTitle, rating, comment, name, submittedAt })
      // LPUSH into a list per level + a global list
      await fetch(`${kvUrl}/lpush/feedback:level${level}/${encodeURIComponent(record)}`, {
        headers: { Authorization: `Bearer ${kvToken}` },
      })
      await fetch(`${kvUrl}/lpush/feedback:all/${encodeURIComponent(record)}`, {
        headers: { Authorization: `Bearer ${kvToken}` },
      })
    } catch (err) {
      console.error('KV store failed:', err)
    }
  } else {
    console.log('💡 Add KV_REST_API_URL + KV_REST_API_TOKEN env vars to enable feedback storage.')
  }

  return NextResponse.json({ ok: true })
}
