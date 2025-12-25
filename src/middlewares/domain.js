// src/middleware/domain.js

export function getDomainType(host = "") {
  if (!host) return "main";

  // clean host
  const cleanHost = host
    .replace(/^www\./, "")
    .replace(/:\d+$/, "")
    .toLowerCase();

  // localhost → main
  if (cleanHost.includes("localhost")) {
    return "main";
  }

  const parts = cleanHost.split(".");

  /**
   * Rules after cleaning:
   * example.com            → 2 parts → main
   * example.co.in          → 3 parts → main
   * abc.example.com        → 3 parts → sub
   * abc.example.co.in      → 4 parts → sub
   */

  // main domain (no subdomain)
  if (parts.length <= 2) return "main";

  // subdomain present
  return "sub";
}






























// // src/middleware/domain.js

// export function getDomainType(host = "") {
//   if (!host) return "main";

//   // localhost → main domain
//   if (host.includes("localhost")) {
//     return "main";
//   }

//   const parts = host.split(".");

//   // example.com OR www.example.com → main
//   if (parts.length === 2) return "main";
//   if (parts.length === 3 && parts[0] === "www") return "main";

//   // anything.example.com → subdomain
//   return "sub";
// }
