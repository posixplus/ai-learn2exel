import { NextRequest, NextResponse } from 'next/server'
import { getIronSession } from 'iron-session'
import { sessionOptions, type SessionData } from '@/lib/session'
import { validateCredentials } from '@/config/users'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required' }, { status: 400 })
    }

    const user = validateCredentials(username.trim(), password)

    if (!user) {
      // Deliberately vague to prevent user enumeration
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
    }

    // Create the session
    const response = NextResponse.json({
      success: true,
      user: {
        username: user.username,
        displayName: user.displayName,
        role: user.role,
        profession: user.profession,
      },
    })

    const session = await getIronSession<{ user?: SessionData }>(request, response, sessionOptions)
    session.user = {
      username: user.username,
      displayName: user.displayName,
      role: user.role,
      profession: user.profession,
    }
    await session.save()

    return response
  } catch (err) {
    console.error('Login error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
