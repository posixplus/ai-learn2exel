'use client'

import { useState } from 'react'
import { QUIZZES } from '@/data/quizzes'

export default function LevelQuiz({ level }: { level: number }) {
  const questions = QUIZZES[level] ?? []
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  if (questions.length === 0) return null

  const accent = `var(--color-l${level})`
  const allAnswered = questions.every((_, i) => answers[i] !== undefined)
  const score = questions.reduce((s, q, i) => s + (answers[i] === q.answer ? 1 : 0), 0)

  return (
    <section style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderTop: `3px solid ${accent}`, borderRadius: 'var(--radius-md)', padding: '1.5rem', margin: '2rem 0' }}>
      <h2 style={{ marginTop: 0 }}>🧠 Check your understanding</h2>
      <p style={{ color: 'var(--color-text-muted)', marginTop: 0 }}>
        {questions.length} quick questions on Level {level}. Answer each, then check your score.
      </p>

      {questions.map((q, qi) => (
        <div key={qi} style={{ margin: '1.25rem 0' }}>
          <div style={{ fontWeight: 600, marginBottom: '.5rem' }}>{qi + 1}. {q.q}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
            {q.options.map((opt, oi) => {
              const chosen = answers[qi] === oi
              const correct = submitted && oi === q.answer
              const wrongChosen = submitted && chosen && oi !== q.answer
              const borderColor = correct ? 'var(--color-success)' : wrongChosen ? 'var(--color-danger)' : chosen ? accent : 'var(--color-border)'
              const bg = correct ? 'var(--color-tip-bg)' : wrongChosen ? 'var(--color-warn-bg)' : chosen ? 'var(--color-surface)' : 'var(--color-card)'
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  onClick={() => setAnswers(a => ({ ...a, [qi]: oi }))}
                  style={{
                    textAlign: 'left', padding: '.6rem .8rem', borderRadius: 8,
                    cursor: submitted ? 'default' : 'pointer', fontFamily: 'inherit', fontSize: '.9rem',
                    border: `1.5px solid ${borderColor}`, background: bg, color: 'var(--color-text)',
                  }}
                >
                  {correct ? '✓ ' : wrongChosen ? '✗ ' : ''}{opt}
                </button>
              )
            })}
          </div>
          {submitted && (
            <p style={{ fontSize: '.82rem', color: 'var(--color-text-muted)', marginTop: '.4rem' }}>{q.explanation}</p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className="btn-primary"
          style={{ opacity: allAnswered ? 1 : 0.5, cursor: allAnswered ? 'pointer' : 'not-allowed' }}
        >
          Check answers
        </button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <strong style={{ fontSize: '1.1rem', color: score === questions.length ? 'var(--color-success)' : 'var(--color-text)' }}>
            You scored {score}/{questions.length}{score === questions.length ? ' 🎉' : ''}
          </strong>
          <button onClick={() => { setAnswers({}); setSubmitted(false) }} className="btn-secondary" style={{ padding: '.45rem 1rem', fontSize: '.85rem' }}>
            Try again
          </button>
        </div>
      )}
    </section>
  )
}
