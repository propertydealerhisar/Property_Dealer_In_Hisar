import hisarDomains from "@/config/main-domains/hisar.json";
import faridabadDomains from "@/config/main-domains/faridabad.json";
import gurgaonDomains from "@/config/main-domains/gurgaon.json";

import hisarSubs from "@/config/sub-domains/hisar.json";
import faridabadSubs from "@/config/sub-domains/faridabad.json";
import gurgaonSubs from "@/config/sub-domains/gurgaon.json";

export function resolveRequest(host) {
  if (!host) return null;

  // 🔒 STEP 1: clean host
  // - www hatao
  // - port hatao
  // - lowercase
  const cleanHost = host
    .replace(/^www\./, "")
    .replace(/:\d+$/, "")
    .toLowerCase();

  // example:
  // sector21p.flatsforsaleinhisar.com
  const parts = cleanHost.split(".");
  const subdomain = parts[0];                  // sector21p
  const fullDomain = parts.slice(1).join("."); // flatsforsaleinhisar.com

  let city = null;
  let allowedHosts = [];

  // 🔎 STEP 2: city detect by main domain
  if (hisarDomains.includes(`www.${fullDomain}`)) {
    city = "hisar";
    allowedHosts = hisarSubs;
  } else if (faridabadDomains.includes(`www.${fullDomain}`)) {
    city = "faridabad";
    allowedHosts = faridabadSubs;
  } else if (gurgaonDomains.includes(`www.${fullDomain}`)) {
    city = "gurgaon";
    allowedHosts = gurgaonSubs;
  }

  // ❌ domain not allowed
  if (!city) return null;

  // 🔐 STEP 3: FULL HOST validation
  // (subdomain + parent domain together)
  const fullHostKey = `${subdomain}.${fullDomain}`;

  if (!allowedHosts.includes(fullHostKey)) {
    return null;
  }

  // ✅ VALID REQUEST
  return {
    city,
    subdomain,
    fullDomain,
    host: cleanHost,
  };
}































// import hisarDomains from "@/config/main-domains/hisar.json";
// import faridabadDomains from "@/config/main-domains/faridabad.json";
// import gurgaonDomains from "@/config/main-domains/gurgaon.json";

// import hisarSubs from "@/config/sub-domains/hisar.json";
// import faridabadSubs from "@/config/sub-domains/faridabad.json";
// import gurgaonSubs from "@/config/sub-domains/gurgaon.json";

// export function resolveRequest(host) {
//   // host example:
//   // sector-21.flatsforsaleingurgaon.com

//   const parts = host.split(".");
//   const subdomain = parts[0];                  // sector-21
//   const fullDomain = parts.slice(1).join("."); // flatsforsaleingurgaon.com
   
//   let city = null;
//   let allowedSubs = [];

//   // ✅ JSON me www ke saath domain stored hai
//   if (hisarDomains.includes(`www.${fullDomain}`)) {
//     city = "hisar";
//     allowedSubs = hisarSubs;
//   } else if (faridabadDomains.includes(`www.${fullDomain}`)) {
//     city = "faridabad";
//     allowedSubs = faridabadSubs;
//   } else if (gurgaonDomains.includes(`www.${fullDomain}`)) {
//     city = "gurgaon";
//     allowedSubs = gurgaonSubs;
//   }

//   if (!city) return null;
//   if (!allowedSubs.includes(`${subdomain}.${fullDomain}`)) return null;

//   return { city, subdomain,host };
// }
