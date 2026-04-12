'use client'

import {
  createContext, useContext, useState, useCallback,
  useEffect, type ReactNode,
} from 'react'
import { track } from '@vercel/analytics'

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

const TOTAL_LESSONS = 25  // Lessons 1–25 (capstones not counted)
const STORAGE_KEY = 'ai-course-progress'

const ProgressContext = createContext<ProgressContextValue | null>(null)

function loadFromStorage(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as ProgressMap
  } catch {
    return {}
  }
}

function saveToStorage(progress: ProgressMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // Storage unavailable — silently ignore
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressMap>({})

  // Load from localStorage on mount (client-only)
  useEffect(() => {
    setProgress(loadFromStorage())
  }, [])

  const isComplete = useCallback((lessonId: string) => !!progress[lessonId], [progress])

  const toggleComplete = useCallback(async (lessonId: string) => {
    const newValue = !progress[lessonId]
    setProgress(prev => {
      const updated = { ...prev, [lessonId]: newValue }
      saveToStorage(updated)
      return updated
    })
    if (newValue) {
      track('lesson_complete', { lessonId, level: lessonId.split('-')[0] })
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
