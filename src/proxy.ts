import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths that require the gate
  const protectedPaths = ['/products', '/cart', '/checkout'];
  const isProtected = protectedPaths.some(path => pathname === path || pathname.startsWith(`${path}/`));

  if (isProtected) {
    const hasAccess = request.cookies.has('research_access_granted');
    
    if (!hasAccess) {
      // Create a URL for the research access page
      const url = request.nextUrl.clone();
      url.pathname = '/research-access';
      // Save where they were trying to go so we can send them back after
      url.searchParams.set('next', pathname);
      
      const response = NextResponse.redirect(url);
      
      // Add noindex header to prevent indexing of protected pages even if bots bypass somehow
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      
      return response;
    } else {
      // Allow access, but still append X-Robots-Tag to be safe on protected routes
      const response = NextResponse.next();
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.mp4).*)',
  ],
};
