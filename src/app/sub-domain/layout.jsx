// src/app/(subdomain)/layout.jsx

import "@/app/globals.css";

import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { resolveRequest } from "@/lib/resolveRequest";
import { GOOGLE_VERIFICATION } from "@/lib/sub-domain/googleVerification";
import { GTM_IDS } from "@/lib/sub-domain/gtmConfig";
import { GA_TARGET_SUB_DOMAINS } from "@/lib/sub-domain/gaTargetSubDomains";

import GoogleTagManager from "@/app/sub-domain/components/google-tag-manager/GoogleTagManager";
import GoogleAnalytics from "@/app/sub-domain/components/google-analytics/GoogleAnalytics";


// -----------------------------------------------------------------------------
// ✅ DOMAIN / SUBDOMAIN METADATA
// -----------------------------------------------------------------------------
export async function generateMetadata() {
  const h = await headers();
  const rawHost = h.get("host") || "localhost";
  const host = rawHost.replace(/:\d+$/, "");

  return {
    title:
      "Property Dealer | Buy & Sell Residential and Commercial Properties",
    description:
      "Trusted property dealer offering residential and commercial properties for sale and rent. Find verified plots, houses, flats, and commercial spaces with expert guidance.",
    keywords: [
      "property dealer",
      "real estate agent",
      "buy property",
      "sell property",
      "property for sale",
      "property for rent",
      "residential property",
      "commercial property",
      "plots for sale",
      "houses for sale",
      "real estate services",
    ],
    alternates: {
      canonical: `https://${host}`,
    },
    verification: {
      google:
        GOOGLE_VERIFICATION[host] ||
        GOOGLE_VERIFICATION["localhost"],
    },
  };
}


// -----------------------------------------------------------------------------
// ✅ SUBDOMAIN LAYOUT
// -----------------------------------------------------------------------------
export default async function SubdomainLayout({ children }) {
  const h = await headers();

  const rawHost = h.get("host") || "localhost";
  const host = rawHost.replace(/:\d+$/, "");


  // 🔍 Resolve subdomain context
  const ctx = resolveRequest(host);

  // 🔒 Block unknown / random subdomains
  if (!ctx) {
    notFound();
  }

  // 📊 Analytics IDs (safe fallback)
  const gtmId = GTM_IDS[host] || GTM_IDS["localhost"];
  const gaId =
    GA_TARGET_SUB_DOMAINS[host] ||
    GA_TARGET_SUB_DOMAINS["localhost"];

  return (
    <html lang="en">
      <head>
        {/* ✅ Domain-wise GTM */}
        <GoogleTagManager gtmId={gtmId} />
        <GoogleAnalytics gaId={gaId} />
      </head>

      <body className="min-h-screen bg-background text-foreground">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
