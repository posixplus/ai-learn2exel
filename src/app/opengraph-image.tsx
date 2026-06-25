import { ImageResponse } from 'next/og'

// Site-wide social preview image. Next.js auto-injects this for OpenGraph
// and Twitter cards across all routes (file-based metadata convention).
export const alt = 'AI for Everyone - Learn AI, LLMs & Claude'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #4F46E5 100%)',
          color: 'white',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 72, height: 72, borderRadius: 16, background: 'linear-gradient(135deg, #2563EB, #7C3AED)', fontSize: 34, fontWeight: 800, color: 'white' }}>
            AI
          </div>
          <span style={{ fontWeight: 700, letterSpacing: '-1px' }}>AI for Everyone</span>
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.1, marginTop: 28, letterSpacing: '-2px' }}>
          Learn AI, LLMs &amp; Claude
        </div>
        <div style={{ display: 'flex', fontSize: 36, color: '#CBD5E1', marginTop: 24 }}>
          A free, practical course for any profession.
        </div>
        <div style={{ display: 'flex', gap: '16px', marginTop: 44 }}>
          {['80 lessons', '10 levels', 'Hands-on', 'Self-paced'].map(t => (
            <div
              key={t}
              style={{
                display: 'flex',
                fontSize: 28,
                fontWeight: 600,
                padding: '10px 24px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
