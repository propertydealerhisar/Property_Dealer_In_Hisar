import { NextResponse } from "next/server";
import { getDomainType } from "./middlewares/domain";

export function middleware(req) {
  const rawHost = req.headers.get("host") || "";
  const host = rawHost.replace(/:\d+$/, ""); // port safe
  const url = req.nextUrl.clone();

  const domainType = getDomainType(host);

  // MAIN DOMAIN
  if (domainType === "main") {
    if (!url.pathname.startsWith("/main-domain")) {
      url.pathname = `/main-domain${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // SUB DOMAIN
  if (domainType === "sub") {
    if (!url.pathname.startsWith("/sub-domain")) {
      url.pathname = `/sub-domain${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};












// import { NextResponse } from "next/server";
// import { getDomainType } from "./middlewares/domain";

// export function middleware(req) {
//   const host = req.headers.get("host") || "";
//   const url = req.nextUrl.clone();

//   const domainType = getDomainType(host);

//   console.log("domain Type =>",domainType);
  

//   // MAIN DOMAIN
//   if (domainType === "main") {
//     if (!url.pathname.startsWith("/main-domain")) {
//       url.pathname = `/main-domain${url.pathname}`;
//       return NextResponse.rewrite(url);
//     }
//   }

//   // SUB DOMAIN
//   if (domainType === "sub") {
//     if (!url.pathname.startsWith("/sub-domain")) {
//       url.pathname = `/sub-domain${url.pathname}`;
//       return NextResponse.rewrite(url);
//     }
//   }

//   return NextResponse.next();
// }

// /**
//  * 🔴 MOST IMPORTANT PART
//  * Middleware sirf page routes par chalega
//  * Static files, images, API ko chhod dega
//  */
// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api).*)",
//   ],
// };
