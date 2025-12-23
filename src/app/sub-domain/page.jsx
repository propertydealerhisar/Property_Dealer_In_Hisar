import React from 'react'
import { subdomainSiteData } from "@/lib/sub-domain/subdomainSiteData";
import { headers } from "next/headers";
import { Navbar } from './components/navbar/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { FeaturesSection } from './components/features-section/FeaturesSection'
import { LocationsSection } from './components/locations-section/LocationsSection'
import { FAQSection } from './components/faq-section/FAQSection'
import { ContactSection } from './components/contact-section/ContactSection'
import { Footer } from './components/footer/Footer'
import { WhyChoose } from './components/why-choose/WhyChoose'

const page = async() => {
  const h = await headers();
    const domain = h.get("host") || "localhost";

    const pageData =
          subdomainSiteData.find((item) => item.domain === domain) ||
          subdomainSiteData[0];

          
 
  return (
    <div>
      <Navbar/>
      <HeroSection data={pageData?.hero} />
      <FeaturesSection data={pageData?.featuresSection}/>
      <LocationsSection data={pageData?.locationsSection}/>
      <WhyChoose data={pageData?.whyChoose} />
      <FAQSection data={pageData?.faqSection} />
      <ContactSection data={pageData?.contactSection} />
      <Footer/>
    </div>
  )
}

export default page
