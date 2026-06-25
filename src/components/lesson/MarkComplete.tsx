'use client'

import { useState, useEffect, useRef } from 'react'
import { useProgress } from '@/contexts/ProgressContext'
import { getLessonById } from '@/data/course'

interface MarkCompleteProps {
  lessonId: string
}

// You must spend at least this fraction of a lesson's stated duration
// (active, tab-focused time) before you can mark it complete. Deters
// click-through gaming of the completion certificate.
const DWELL_FRACTION = 0.25

export default function MarkComplete({ lessonId }: MarkCompleteProps) {
  const { completed, toggleComplete, time, addTime } = useProgress()
  const [showNotification, setShowNotification] = useState(false)
  const [sessionSecs, setSessionSecs] = useState(0)

  const isComplete = completed.includes(lessonId)
  const duration = getLessonById(lessonId)?.duration ?? 0
  const requiredSecs = Math.round(duration * 60 * DWELL_FRACTION)

  // Capture time already banked from previous visits, once.
  const baseRef = useRef<number | null>(null)
  if (baseRef.current === null) baseRef.current = time[lessonId] ?? 0
  const totalSecs = (baseRef.current ?? 0) + sessionSecs
  const dwellMet = totalSecs >= requiredSecs

  // Tick active seconds while the tab is visible AND focused; flush to
  // the persisted store every 10s and on unmount / tab hide / page close.
  useEffect(() => {
    if (!lessonId) return
    const unflushed = { n: 0 }
    const tick = setInterval(() => {
      if (document.visibilityState === 'visible' && document.hasFocus()) {
        setSessionSecs(s => s + 1)
        unflushed.n += 1
      }
    }, 1000)
    const flush = () => {
      if (unflushed.n > 0) { addTime(lessonId, unflushed.n); unflushed.n = 0 }
    }
    const flushTimer = setInterval(flush, 10000)
    document.addEventListener('visibilitychange', flush)
    window.addEventListener('beforeunload', flush)
    return () => {
      clearInterval(tick); clearInterval(flushTimer)
      document.removeEventListener('visibilitychange', flush)
      window.removeEventListener('beforeunload', flush)
      flush()
    }
  }, [lessonId, addTime])

  const handleToggle = async () => {
    if (!isComplete && !dwellMet) return
    await toggleComplete(lessonId)
    if (!isComplete) {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 2000)
    }
  }

  const remainingMin = Math.max(0, Math.ceil((requiredSecs - totalSecs) / 60))
  const locked = !isComplete && !dwellMet

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.35rem' }}>
      <button
        onClick={handleToggle}
        disabled={locked}
        title={locked ? `Spend about ${remainingMin} more minute${remainingMin === 1 ? '' : 's'} on this lesson first` : undefined}
        className={`mark-complete-btn ${isComplete ? 'done' : ''}`}
        style={locked ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
      >
        {isComplete ? '✓ Completed' : locked ? '🔒 Keep reading…' : '✓ Mark Complete'}
      </button>

      {locked && (
        <span style={{ fontSize: '.72rem', color: 'var(--color-text-subtle)' }}>
          Unlocks in ~{remainingMin} min of reading
        </span>
      )}

      {showNotification && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: 'var(--color-success)',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '0.5rem',
          zIndex: 1000,
        }}>
          Great! Lesson marked complete.
        </div>
      )}
    </div>
  )
}
