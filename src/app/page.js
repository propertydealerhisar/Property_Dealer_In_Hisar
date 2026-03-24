export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { notFound } from "next/navigation";

import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/services-section/ServicesSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Properties from "@/components/properties/Properties";
import ToletProperties from "@/components/properties/ToletProperties";

// import AboutLocality from "@/components/about-locality/AboutLocality";

import { loadPageData } from "@/lib/main-domain/loadPageData";

export default async function Home() {
  const h = await headers(); // ✅ MUST await in Next 16

  let domain = h.get("host");

  if (!domain) notFound();

  if (domain === "localhost:3000") {
    domain = `${process.env.DOMAIN}`;
  }

  const pageData = loadPageData(domain);

  if (!pageData) notFound();

  // console.log("recccc",domain)

  return (
    <div>
      <Hero data={pageData.heroSection} />

      {domain === "www.toletserviceinhisar.com" ? (
        <ToletProperties host={domain} />
      ) : (
        <Properties host={domain} data={pageData?.properties} />
      )}

      {/* <ServicesSection data={pageData.servicesSection} /> */}
      {/* <FAQSection data={pageData.faqSection} /> */}
      {/* <AboutLocality domain={domain} /> */}
    </div>
  );
}
