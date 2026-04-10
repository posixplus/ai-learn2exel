/**
 * Progress API
 * GET  /api/progress  — load the current user's progress
 * POST /api/progress  — save updated progress
 */

import { NextRequest, NextResponse } from 'next/server'
import { getIronSession } from 'iron-session'
import { sessionOptions, type SessionData } from '@/lib/session'
import { loadProgress, saveProgress, type ProgressMap } from '@/lib/supabase'

async function getUser(request: NextRequest, response: NextResponse) {
  const session = await getIronSession<{ user?: SessionData }>(request, response, sessionOptions)
  return session.user ?? null
}

export async function GET(request: NextRequest) {
  const response = NextResponse.json({})
  const user = await getUser(request, response)

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const progress = await loadProgress(user.username)
  return NextResponse.json({ progress })
}

export async function POST(request: NextRequest) {
  const response = NextResponse.json({})
  const user = await getUser(request, response)

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json() as { lessonId: string; completed: boolean }
    const { lessonId, completed } = body

    if (!lessonId || typeof completed !== 'boolean') {
      return NextResponse.json({ error: 'lessonId and completed are required' }, { status: 400 })
    }

    // Load existing, merge, save
    const existing = await loadProgress(user.username)
    const updated: ProgressMap = { ...existing, [lessonId]: completed }
    await saveProgress(user.username, updated)

    return NextResponse.json({ success: true, progress: updated })
  } catch (err) {
    console.error('Progress save error:', err)
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 })
  }
}
