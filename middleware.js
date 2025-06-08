import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Define which routes are protected
const protectedRoutes = ["/dashboard"];

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the current route is protected
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  // Try to get the NextAuth token (JWT) from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If no token, redirect to login page
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // User is authenticated, continue
  return NextResponse.next();
}

// Specify which routes to run the middleware on
export const config = {
  matcher: ["/dashboard/:path*"],
};