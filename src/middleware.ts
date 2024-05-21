// File: middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request: NextRequest) {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("otp_token");
  }

  const session = await getToken({ req: request, secret });
  // console.log(session);

  const { pathname } = request.nextUrl;

  // if (session && (pathname === "/sign-in" || pathname === "/sign-up")) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/dashboard";
  //   return NextResponse.redirect(url);
  // }
  // if (!token && pathname.startsWith("/verify-otp")) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/sign-up";
  //   return NextResponse.redirect(url);
  // }

 
  // if (pathname.startsWith("/dashboard") && !session) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/sign-in";

  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in", "/sign-up", "/verify-otp",'/:path*'],
};
