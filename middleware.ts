import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const accessToken = request.cookies.get("awaHealthUSr_token");

  const { pathname } = request.nextUrl;

  if (!accessToken && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
  if (!accessToken && request.nextUrl.pathname.startsWith("/onboarding")) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
  if (
    accessToken &&
    request.nextUrl.pathname.startsWith("/auth")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return response;
}

export const config = {
  matcher: [
    "/auth/:path*",
    "/onboarding/:path*",
    "/dashboard/:path*",
  ],
};
