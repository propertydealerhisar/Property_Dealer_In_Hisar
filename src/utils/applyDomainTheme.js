import { domainTheme } from "@/config/domainTheme";

export const applyDomainTheme = () => {
  if (typeof window === "undefined") return;

  let hostname = window.location.hostname; // with www OR without
  if(hostname==="localhost" || hostname==="localhost:3000" )
    hostname = "www.houseforsaleinhisar.com"; // with www OR without

  const cleanDomain = hostname.replace(/^www\./, "");

  // priority:
  // 1️⃣ exact hostname (www ke sath)
  // 2️⃣ clean domain (www ke bina)
  // 3️⃣ fallback
  const theme =
    domainTheme[hostname] ||
    domainTheme[cleanDomain] ||
    domainTheme["shopforrentinhisar.com"];

  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};
