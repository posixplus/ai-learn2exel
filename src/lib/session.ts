/**
 * iron-session configuration.
 * The session is stored in an encrypted, httpOnly cookie.
 * SESSION_PASSWORD must be at least 32 characters.
 */

import type { SessionOptions } from 'iron-session'

export interface SessionData {
  username: string
  displayName: string
  role: 'admin' | 'student'
  profession?: string
}

export interface SessionShape {
  user?: SessionData
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD as string,
  cookieName: 'ai_course_session',
  cookieOptions: {
    // Secure in production, not required in dev
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
}
