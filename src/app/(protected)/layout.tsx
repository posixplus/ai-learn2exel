import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
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

  if (!session.user) {
    redirect('/login')
  }

  const progress = await loadProgress(session.user.username)

  return (
    <AuthProvider initialUser={session.user}>
      <ProgressProvider initialProgress={progress}>
        <Nav />
        {children}
      </ProgressProvider>
    </AuthProvider>
  )
}
