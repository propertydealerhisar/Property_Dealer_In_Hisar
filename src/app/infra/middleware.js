import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  // localhost handling
  if (host.includes("localhost")) {
    url.pathname = `/main-domain${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  const parts = host.split(".");

  const isSubdomain =
    parts.length > 2 && parts[0] !== "www";

  if (isSubdomain) {
    // 👉 SUBDOMAIN → sub-domain design
    url.pathname = `/sub-domain${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // 👉 MAIN DOMAIN → main-domain design
  url.pathname = `/main-domain${url.pathname}`;
  return NextResponse.rewrite(url);
}
