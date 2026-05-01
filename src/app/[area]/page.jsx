import React from 'react'
import { headers } from "next/headers";
import { Navbar } from './Navbar';
import { resolveSubDomainData } from "@/lib/subDomainResolver";
import { HeroSection } from './HeroSection';
import Properties from './Properties';
import { FeaturesSection } from './FeaturesSection';
import { LocationsSection } from './LocationsSection';
import { WhyChoose } from './WhyChoose';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';
import AllProperties from './AllProperties';
import { notFound } from "next/navigation";
import { loadPageData } from "@/lib/main-domain/loadPageData";
import { prefixArr } from "@/lib/prefix";
import { AREA_META } from "@/lib/areaMeta";
import { splitArea, formatLocation } from "@/utils/areaParser";


export async function generateMetadata({ params }) {
  const { area } = await params;
  const h = await headers();
    let domain = h.get("host") || "localhost";
    if(domain==="localhost:3000")
         domain = `${process.env.DOMAIN}`;


  const { type, locationSlug } = splitArea(area);
  const location = formatLocation(locationSlug);

  const metaTemplate = AREA_META[type];

  // 🔸 fallback (agar type match na kare)
  if (!metaTemplate) {
    return {
      title: `Properties for Rent in ${location}`,
      description: `Find best rental properties in ${location}.`,
    };
  }

  return {
    title: metaTemplate.title.replaceAll("[location]", location),
    description: metaTemplate.description.replaceAll("[location]", location),
    keywords: metaTemplate.keywords.replaceAll("[location]", location),
    alternates: {
      canonical: `https://${domain}/${area}`,
    },
  };
}


const page = async({params}) => {
  const {area} = await params;
  const h = await headers();
    let domain = h.get("host") || "localhost";
    if(domain==="localhost:3000")
         domain = `${process.env.DOMAIN}`;

     const prefix = prefixArr.find(
  (item) => item.domain === domain
)?.prefix || "";
   const cleanArea = area.replace(prefix, "");
 
 const pageData = loadPageData(domain);

  if (!pageData) notFound();
 
  return (
    <div>
    {pageData?.properties && (
      <Properties domain={domain} area={cleanArea} property={pageData?.properties}/>
      )}
      <AllProperties host={domain} property={pageData?.properties} />
      

    </div>
  )
}

export default page
