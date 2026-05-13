export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { DOMAIN_META } from "@/lib/domainMeta";

import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/services-section/ServicesSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Properties from "@/components/properties/Properties";
import ToletProperties from "@/components/properties/ToletProperties";

import { loadPageData } from "@/lib/main-domain/loadPageData";


// ✅ 🔥 DOMAIN BASED METADATA
export async function generateMetadata() {
  const h = await headers();

  let domain = h.get("host");

  if (!domain) return {};

  if (domain === "localhost:3000") {
    domain = process.env.DOMAIN;
  }

  const cleanDomain = domain.replace(/^www\./, "");

  const meta =
    DOMAIN_META[domain]?.home ||
    DOMAIN_META[cleanDomain]?.home || {
      title: "Default Home",
      description: "Default description",
    };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://${domain}`,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
  };
}


export default async function Home() {
  const h = await headers();

  let domain = h.get("host");

  if (!domain) notFound();

  if (domain === "localhost:3000") {
    domain = `${process.env.DOMAIN}`;
  }

  const pageData = loadPageData(domain);

  if (!pageData) notFound();

  return (
    <div>
      <Hero data={pageData.heroSection} />
      <Properties host={domain} data={pageData?.properties} />
    </div>
  );
}