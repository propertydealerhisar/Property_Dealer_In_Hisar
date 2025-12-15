import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host")?.split(":")[0];

  const response = NextResponse.next();
  response.headers.set("x-site-domain", host);

  return response;
}
