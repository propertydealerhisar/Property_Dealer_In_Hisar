export function cleanDomain(domain = "") {
  if (!domain) return "";

  // remove port (localhost:3000 → localhost)
  domain = domain.replace(/:\d+$/, "");

  // remove www (www.abc.com → abc.com)
  domain = domain.replace(/^www\./, "");

  return domain;
}