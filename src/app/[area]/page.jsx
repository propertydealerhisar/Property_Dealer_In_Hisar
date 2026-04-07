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
  // console.log("area,domain=>",domain,area)
  // console.log("data =>",pageData?.properties)
  return (
    <div>
    {/* <HeroSection data={data?.hero}/> */}
    {pageData?.properties && (
      <Properties domain={domain} area={cleanArea} property={pageData?.properties}/>
      )}
      <AllProperties host={domain} property={pageData?.properties} />
      {/* <FeaturesSection data={data?.featuresSection}/> */}
      {/* <LocationsSection data={data?.locationsSection}/> */}
      {/* <WhyChoose data={data?.whyChoose}/> */}
      {/* <FAQSection data={data?.faqSection}/> */}
      {/* <ContactSection data={data?.contactSection}/> */}

    </div>
  )
}

export default page
