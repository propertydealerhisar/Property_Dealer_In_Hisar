// src/middleware/domain.js

export function getDomainType(host = "") {
  if (!host) return "main";

  // localhost → main domain
  if (host.includes("localhost")) {
    return "main";
  }

  const parts = host.split(".");

  // example.com OR www.example.com → main
  if (parts.length === 2) return "main";
  if (parts.length === 3 && parts[0] === "www") return "main";

  // anything.example.com → subdomain
  return "sub";
}
