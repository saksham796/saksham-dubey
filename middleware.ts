import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const pathname = url.pathname

  // Allow the Turnstile page, API route, Next.js internals and common static assets
  if (
    pathname.startsWith('/api/turnstile') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/draco') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/turnstile')
  ) {
    return NextResponse.next()
  }

  const cookie = req.cookies.get('turnstile')
  if (!cookie) {
    url.pathname = '/turnstile'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
