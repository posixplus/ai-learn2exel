'use client'
import { useState } from 'react'

interface LevelFeedbackProps {
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  levelTitle: string
}

const LEVEL_COLORS: Record<number, { bg: string; border: string; accent: string }> = {
  0: { bg: '#EFF6FF', border: '#BFDBFE', accent: '#2563EB' },
  1: { bg: '#FFF7ED', border: '#FED7AA', accent: '#EA580C' },
  2: { bg: '#F0FDF4', border: '#BBF7D0', accent: '#16A34A' },
  3: { bg: '#F5F3FF', border: '#DDD6FE', accent: '#7C3AED' },
  4: { bg: '#FFF1F2', border: '#FECDD3', accent: '#E11D48' },
  5: { bg: '#F5F3FF', border: '#C4B5FD', accent: '#6D28D9' },
  6: { bg: '#FDF2F8', border: '#FBCFE8', accent: '#DB2777' },
  7: { bg: '#EEF2FF', border: '#C7D2FE', accent: '#4F46E5' },
  8: { bg: '#ECFEFF', border: '#A5F3FC', accent: '#0891B2' },
  9: { bg: '#F7FEE7', border: '#D9F99D', accent: '#65A30D' },
}

export default function LevelFeedback({ level, levelTitle }: LevelFeedbackProps) {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const colors = LEVEL_COLORS[level]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) return
    setStatus('submitting')

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level, levelTitle, rating, comment, name }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ background: '#F0FDF4', border: '2px solid #86EFAC', borderRadius: 16, padding: '2rem', textAlign: 'center', margin: '2.5rem 0' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🎉</div>
        <h3 style={{ margin: '0 0 .5rem', color: '#15803D' }}>Thank you for your feedback!</h3>
        <p style={{ margin: 0, color: '#166534', fontSize: '.9rem' }}>
          Your {rating}-star review of Level {level} has been received. It helps make this course better for everyone.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: colors.bg, border: `2px solid ${colors.border}`, borderRadius: 16, padding: '2rem', margin: '2.5rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '1.75rem' }}>💬</span>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#111827' }}>How was Level {level}?</h3>
          <p style={{ margin: '.25rem 0 0', fontSize: '.875rem', color: '#6B7280' }}>
            Your feedback helps improve this course. Takes 30 seconds.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Stars */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '.85rem', fontWeight: 600, color: '#374151', marginBottom: '.5rem' }}>
            Overall rating <span style={{ color: '#EF4444' }}>*</span>
          </div>
          <div style={{ display: 'flex', gap: '.35rem' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '2rem',
                  padding: '.1rem',
                  lineHeight: 1,
                  transition: 'transform .1s',
                  transform: (hovered || rating) >= star ? 'scale(1.15)' : 'scale(1)',
                  filter: (hovered || rating) >= star ? 'none' : 'grayscale(1) opacity(.4)',
                }}
              >
                ⭐
              </button>
            ))}
            {rating > 0 && (
              <span style={{ marginLeft: '.5rem', fontSize: '.875rem', color: colors.accent, fontWeight: 700, alignSelf: 'center' }}>
                {['', 'Not helpful', 'Needs work', 'Good', 'Very good', 'Excellent!'][rating]}
              </span>
            )}
          </div>
        </div>

        {/* Comment */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '.85rem', fontWeight: 600, color: '#374151', marginBottom: '.4rem' }}>
            Comments or suggestions <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span>
          </label>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder={`What did you like about Level ${level}? What could be improved? Any topics you'd like added?`}
            rows={3}
            style={{
              width: '100%', boxSizing: 'border-box', padding: '.65rem .85rem',
              border: '1.5px solid #D1D5DB', borderRadius: 10, fontSize: '.875rem',
              fontFamily: 'inherit', resize: 'vertical', outline: 'none',
              background: 'var(--color-card)', color: '#111827', lineHeight: 1.5,
            }}
          />
        </div>

        {/* Name */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: '.85rem', fontWeight: 600, color: '#374151', marginBottom: '.4rem' }}>
            Your name <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Sarah"
            style={{
              width: '100%', boxSizing: 'border-box', padding: '.55rem .85rem',
              border: '1.5px solid #D1D5DB', borderRadius: 10, fontSize: '.875rem',
              fontFamily: 'inherit', outline: 'none', background: 'var(--color-card)', color: '#111827',
            }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={rating === 0 || status === 'submitting'}
          style={{
            background: rating === 0 ? '#D1D5DB' : colors.accent,
            color: 'white', border: 'none', borderRadius: 10,
            padding: '.65rem 1.5rem', fontSize: '.9rem', fontWeight: 700,
            cursor: rating === 0 ? 'not-allowed' : 'pointer',
            transition: 'all .15s',
          }}
        >
          {status === 'submitting' ? 'Sending…' : 'Submit Feedback'}
        </button>

        {status === 'error' && (
          <p style={{ marginTop: '.75rem', color: '#DC2626', fontSize: '.83rem' }}>
            Something went wrong. Please try again.
          </p>
        )}
        {rating === 0 && (
          <p style={{ marginTop: '.5rem', fontSize: '.78rem', color: '#9CA3AF' }}>
            Select a star rating to submit.
          </p>
        )}
      </form>
    </div>
  )
}
