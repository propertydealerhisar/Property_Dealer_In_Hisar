// src/app/(subdomain)/layout.jsx
import "@/app/globals.css";
import { subdomainSiteData } from "@/lib/sub-domain/subdomainSiteData";
import { headers } from "next/headers";
import { resolveRequest } from "@/lib/resolveRequest";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Property Listings | Buy, Sell & Rent Properties",
  description:
    "Find verified properties for sale and rent including houses, flats, plots, and commercial real estate at best prices.",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function SubdomainLayout({ children }) {
  const h = await headers();
 const rawHost = h.get("host") || "";
const host = rawHost.replace(/:\d+$/, "");
  const ctx = resolveRequest(host);

  // 🔒 BLOCK RANDOM DOMAIN / SUBDOMAIN
  if (!ctx) {
    notFound();
  }
 
  return (
    <html lang="en">
      <body className="  min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
