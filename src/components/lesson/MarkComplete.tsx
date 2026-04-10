'use client'

import { useState } from 'react'
import { useProgress } from '@/contexts/ProgressContext'

interface MarkCompleteProps {
  lessonId: string
}

export default function MarkComplete({ lessonId }: MarkCompleteProps) {
  const { completed, toggleComplete } = useProgress()
  const [showNotification, setShowNotification] = useState(false)
  
  const isComplete = completed.includes(lessonId)

  const handleToggle = async () => {
    await toggleComplete(lessonId)
    if (!isComplete) {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 2000)
    }
  }

  return (
    <>
      <button
        onClick={handleToggle}
        className={`mark-complete-btn ${isComplete ? 'done' : ''}`}
      >
        {isComplete ? '✓ Completed' : '✓ Mark Complete'}
      </button>

      {showNotification && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#10b981',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '0.5rem',
          zIndex: 1000,
        }}>
          Great! Lesson marked complete.
        </div>
      )}
    </>
  )
}
