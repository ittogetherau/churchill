import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("auth-token");
  const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");

  console.log("Token:", token);
  console.log("Is sign-in page:", isSignInPage);

  if (!token && !isSignInPage) {
    console.log("Redirecting to /sign-in");
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (token && isSignInPage) {
    console.log("Redirecting to /");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ],
};
