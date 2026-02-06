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
const page = async({params}) => {
  const {area} = await params;
  const h = await headers();
    // const domain = h.get("host") || "localhost";
  const domain = "www.flatsforsaleinhisar.com"

  const data = resolveSubDomainData({
    area,
    domain,
  });
  return (
    <div>
    <HeroSection data={data?.hero}/>
    {data?.properties && (
      <Properties data={data?.properties} area={area}/>
      )}
      <FeaturesSection data={data?.featuresSection}/>
      <LocationsSection data={data?.locationsSection}/>
      <WhyChoose data={data?.whyChoose}/>
      <FAQSection data={data?.faqSection}/>
      <ContactSection data={data?.contactSection}/>


    </div>
  )
}

export default page
