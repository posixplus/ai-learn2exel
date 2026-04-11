import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { sessionOptions, type SessionData } from '@/lib/session'
import { loadProgress } from '@/lib/supabase'
import Nav from '@/components/layout/Nav'
import { AuthProvider } from '@/contexts/AuthContext'
import { ProgressProvider } from '@/contexts/ProgressContext'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const session = await getIronSession<{ user?: SessionData }>(cookieStore, sessionOptions)

  // Auth disabled — use a guest user if no session
  const effectiveUser = session.user ?? {
    username: 'guest',
    displayName: 'Guest',
    role: 'student' as const,
  }

  const progress = await loadProgress(effectiveUser.username)

  return (
    <AuthProvider initialUser={effectiveUser}>
      <ProgressProvider initialProgress={progress}>
        <Nav />
        {children}
      </ProgressProvider>
    </AuthProvider>
  )
}
