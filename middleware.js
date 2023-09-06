import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data } = await supabase.auth.getSession();

  // ! ako postoji session user je logiran, redirectaj sa login pagea
  if (data?.session && req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ! ako ne postoji, nema pristup ovim rutama
  if (
    !data?.session &&
    (req.nextUrl.pathname.startsWith("/checkout") ||
      req.nextUrl.pathname.startsWith("/success") ||
      req.nextUrl.pathname.startsWith("/orders") ||
      req.nextUrl.pathname.startsWith("/address"))
  ) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  return res;
}
