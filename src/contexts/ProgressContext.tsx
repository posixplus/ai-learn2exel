'use client'

import {
  createContext, useContext, useState, useCallback,
  useEffect, type ReactNode,
} from 'react'

export type ProgressMap = Record<string, boolean>

interface ProgressContextValue {
  progress: ProgressMap
  completed: string[]
  isComplete: (lessonId: string) => boolean
  toggleComplete: (lessonId: string) => Promise<void>
  completedCount: number
  totalLessons: number
  percentComplete: number
}

const TOTAL_LESSONS = 11  // Lessons 1–11 (capstones not counted)

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children, initialProgress }: {
  children: ReactNode
  initialProgress?: ProgressMap
}) {
  const [progress, setProgress] = useState<ProgressMap>(initialProgress ?? {})

  // Fetch progress from server on mount (in case initialProgress is stale)
  useEffect(() => {
    fetch('/api/progress')
      .then(r => r.json())
      .then(data => { if (data.progress) setProgress(data.progress) })
      .catch(() => {/* silently fail — use initialProgress */})
  }, [])

  const isComplete = useCallback((lessonId: string) => !!progress[lessonId], [progress])

  const toggleComplete = useCallback(async (lessonId: string) => {
    const newValue = !progress[lessonId]

    // Optimistic update
    setProgress(prev => ({ ...prev, [lessonId]: newValue }))

    try {
      const res = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId, completed: newValue }),
      })
      const data = await res.json()
      // Sync with server response
      if (data.progress) setProgress(data.progress)
    } catch {
      // Revert on failure
      setProgress(prev => ({ ...prev, [lessonId]: !newValue }))
    }
  }, [progress])

  const completed = Object.entries(progress).filter(([, v]) => v).map(([k]) => k)
  const completedCount = completed.length
  const percentComplete = Math.round((completedCount / TOTAL_LESSONS) * 100)

  return (
    <ProgressContext.Provider value={{
      progress, completed, isComplete, toggleComplete,
      completedCount, totalLessons: TOTAL_LESSONS, percentComplete,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>')
  return ctx
}
