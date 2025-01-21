import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware (request) {
  console.log('middleware trigger');

  // Access cookies synchronously
  const cookieStore = await cookies();
  const token = cookieStore.get('next-auth.session-token');

  // Debugging information
  console.log('Token:', token);

  if (token) {
    // Allow the request to continue
    return NextResponse.next();
  }

  // Redirect to login if no token
  return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  
}

export const config={
  matcher:['/dashboard']
}