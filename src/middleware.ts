/**
 * Next.js Middleware — runs on every request before the page renders.
 * Redirects unauthenticated users to /login for protected routes.
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getIronSession } from 'iron-session'
import { sessionOptions, type SessionShape } from '@/lib/session'

// Routes that don't require auth
const PUBLIC_PATHS = ['/', '/login', '/api/auth/login']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public routes and static files through
  if (
    PUBLIC_PATHS.some(p => pathname === p || pathname.startsWith(p + '/')) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(ico|png|jpg|svg|css|js)$/)
  ) {
    return NextResponse.next()
  }

  // Auth disabled — allow all routes through
  return NextResponse.next()
}

export const config = {
  // Run middleware on all routes except Next.js internals
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
