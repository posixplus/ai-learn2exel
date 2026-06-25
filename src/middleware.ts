/**
 * Next.js Middleware - runs on every request before the page renders.
 * - Sets a persistent visitor-id cookie on first visit
 * - Redirects /login to home
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /login to home - no login needed
  if (pathname === '/login' || pathname.startsWith('/login/')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const response = NextResponse.next()

  // Set a persistent visitor-id cookie on first visit
  if (!request.cookies.get('visitor-id')) {
    response.cookies.set('visitor-id', crypto.randomUUID(), {
      httpOnly: false,         // Readable by JS so client can use it
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365 * 5, // 5 years
      path: '/',
    })
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
