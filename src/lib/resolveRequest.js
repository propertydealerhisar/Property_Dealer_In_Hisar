import hisarDomains from "@/config/main-domains/hisar.json";
import faridabadDomains from "@/config/main-domains/faridabad.json";
import gurgaonDomains from "@/config/main-domains/gurgaon.json";

import hisarSubs from "@/config/sub-domains/hisar.json";
import faridabadSubs from "@/config/sub-domains/faridabad.json";
import gurgaonSubs from "@/config/sub-domains/gurgaon.json";

export function resolveRequest(host) {
  // host example:
  // sector-21.flatsforsaleingurgaon.com

  const parts = host.split(".");
  const subdomain = parts[0];                  // sector-21
  const fullDomain = parts.slice(1).join("."); // flatsforsaleingurgaon.com
   
  let city = null;
  let allowedSubs = [];

  // ✅ JSON me www ke saath domain stored hai
  if (hisarDomains.includes(`www.${fullDomain}`)) {
    city = "hisar";
    allowedSubs = hisarSubs;
  } else if (faridabadDomains.includes(`www.${fullDomain}`)) {
    city = "faridabad";
    allowedSubs = faridabadSubs;
  } else if (gurgaonDomains.includes(`www.${fullDomain}`)) {
    city = "gurgaon";
    allowedSubs = gurgaonSubs;
  }

  if (!city) return null;
  if (!allowedSubs.includes(host)) return null;

  return { city, subdomain,host };
}
