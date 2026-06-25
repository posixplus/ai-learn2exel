'use client'

import {
  createContext, useContext, useState, useCallback,
  useEffect, type ReactNode,
} from 'react'
import { track } from '@vercel/analytics'
import { TOTAL_LESSONS } from '@/data/course'

export type ProgressMap = Record<string, boolean>
export type TimeMap = Record<string, number>  // lessonId -> active seconds spent

interface ProgressContextValue {
  progress: ProgressMap
  completed: string[]
  isComplete: (lessonId: string) => boolean
  toggleComplete: (lessonId: string) => Promise<void>
  completedCount: number
  totalLessons: number
  percentComplete: number
  // Active-time tracking (used by the dwell gate + completion certificate)
  time: TimeMap
  addTime: (lessonId: string, seconds: number) => void
  totalActiveSeconds: number
}

// TOTAL_LESSONS is derived from the course data (capstones not counted),
// so it stays correct automatically as lessons/levels are added.
const STORAGE_KEY = 'ai-course-progress'
const STORAGE_KEY_TIME = 'ai-course-time'

const ProgressContext = createContext<ProgressContextValue | null>(null)

function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function saveJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage unavailable - silently ignore
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressMap>({})
  const [time, setTime] = useState<TimeMap>({})

  // Load both maps from localStorage on mount (client-only)
  useEffect(() => {
    setProgress(loadJSON<ProgressMap>(STORAGE_KEY, {}))
    setTime(loadJSON<TimeMap>(STORAGE_KEY_TIME, {}))
  }, [])

  const isComplete = useCallback((lessonId: string) => !!progress[lessonId], [progress])

  const toggleComplete = useCallback(async (lessonId: string) => {
    const newValue = !progress[lessonId]
    setProgress(prev => {
      const updated = { ...prev, [lessonId]: newValue }
      saveJSON(STORAGE_KEY, updated)
      return updated
    })
    if (newValue) {
      track('lesson_complete', { lessonId, level: lessonId.split('-')[0] })
    }
  }, [progress])

  const addTime = useCallback((lessonId: string, seconds: number) => {
    if (!lessonId || seconds <= 0) return
    setTime(prev => {
      const updated = { ...prev, [lessonId]: (prev[lessonId] || 0) + seconds }
      saveJSON(STORAGE_KEY_TIME, updated)
      return updated
    })
  }, [])

  const completed = Object.entries(progress).filter(([, v]) => v).map(([k]) => k)
  const completedCount = completed.length
  const percentComplete = Math.round((completedCount / TOTAL_LESSONS) * 100)
  const totalActiveSeconds = Object.values(time).reduce((a, b) => a + b, 0)

  return (
    <ProgressContext.Provider value={{
      progress, completed, isComplete, toggleComplete,
      completedCount, totalLessons: TOTAL_LESSONS, percentComplete,
      time, addTime, totalActiveSeconds,
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
