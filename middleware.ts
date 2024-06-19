import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import getSession from "./app/util/getsession";

export function middleware(request: NextRequest) {
  const sessionData = getSession();

  if (
    request.nextUrl.pathname.startsWith("/auth") &&
    sessionData?.name === "session"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
