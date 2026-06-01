import { NextResponse } from "next/server";

let sitemapCache = {};

async function getSitemapPaths(request) {
  const host = request.headers.get("host");

  const now = Date.now();

  // domain specific cache
  if (
    sitemapCache[host] &&
    now - sitemapCache[host].time < 5 * 60 * 1000
  ) {
    return sitemapCache[host].paths;
  }

  const res = await fetch(
    `${request.nextUrl.origin}/sitemap.xml`,
    {
      cache: "no-store",
    }
  );

  const xml = await res.text();

  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];

  const paths = matches.map((m) => {
    const url = new URL(m[1]);

    return url.pathname.replace(/\/$/, "") || "/";
  });

  sitemapCache[host] = {
    paths,
    time: now,
  };

  return paths;
}

export async function middleware(request) {
  const pathname =
    request.nextUrl.pathname.replace(/\/$/, "") || "/";

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.[a-zA-Z0-9]+$/)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.next();
  }

  const paths = await getSitemapPaths(request);

  const exists = paths.includes(pathname);

  if (!exists) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};






















// import { NextResponse } from "next/server";

// let cachedPaths = null;

// async function getSitemapPaths(request) {
//   if (cachedPaths) return cachedPaths;

//   const res = await fetch(
//     `${request.nextUrl.origin}/sitemap.xml`
//   );

//   const xml = await res.text();

//   const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];

//   cachedPaths = matches.map((m) => {
//     const url = new URL(m[1]);

//     return url.pathname.replace(/\/$/, "") || "/";
//   });

//   return cachedPaths;
// }

// export async function middleware(request) {
//   const pathname =
//     request.nextUrl.pathname.replace(/\/$/, "") || "/";

//   // static files ignore
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/api") ||
//     pathname.includes(".")
//   ) {
//     return NextResponse.next();
//   }

//   // homepage allow
//   if (pathname === "/") {
//     return NextResponse.next();
//   }

//   const paths = await getSitemapPaths(request);

//   const exists = paths.includes(pathname);

//   // invalid url => redirect home
//   if (!exists) {
//     return NextResponse.redirect(
//       new URL("/", request.url)
//     );
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/:path*"],
// };