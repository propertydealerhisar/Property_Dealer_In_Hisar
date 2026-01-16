import React from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { loadPageData } from "@/lib/sub-domain/loadPageData";
import { Navbar } from "./components/navbar/Navbar";
import { HeroSection } from "./components/hero/HeroSection";
import { FeaturesSection } from "./components/features-section/FeaturesSection";
import { LocationsSection } from "./components/locations-section/LocationsSection";
import { FAQSection } from "./components/faq-section/FAQSection";
import { ContactSection } from "./components/contact-section/ContactSection";
import { Footer } from "./components/footer/Footer";
import { WhyChoose } from "./components/why-choose/WhyChoose";

import { resolveRequest } from "@/lib/resolveRequest";
import { hisarSiteData } from "@/lib/sub-domain/hisarSiteData";
import Properties from "./components/listed-properties/Properties";

const Page = async () => {
  const h = await headers();
  const rawHost = h.get("host") || "";
  const host = rawHost.replace(/:\d+$/, "");
// const host = "globalspace.flatsforsaleinhisar.com"

  // 🔐 resolve domain + subdomain
  const ctx = resolveRequest(host);

  if (!ctx) {
    notFound(); // random / fake domain
  }

  const fullHost = ctx.host; // cleaned host
  console.log("full host _>",fullHost);
  console.log("ctx=>",ctx)
  

  // ✅ EXACT MATCH (no ambiguity)
  // const pageData =
  // hisarSiteData.find(item => item.domain === fullHost)
  // || hisarSiteData[3];
   const pageData = loadPageData(fullHost);
  if (!pageData) {
    notFound(); // allowed domain but data missing
  }

  return (
    <div>
      <Navbar data={pageData.area} />
      <HeroSection data={pageData.hero} />
      {pageData.properties && (
      <Properties data={pageData.properties}/>
      )}
      <FeaturesSection data={pageData.featuresSection} />
      <LocationsSection data={pageData.locationsSection} />
      <WhyChoose data={pageData.whyChoose} />
      <FAQSection data={pageData.faqSection} />
      <ContactSection data={pageData.contactSection} />
      <Footer />
    </div>
  );
};

export default Page;




























// import React from "react";
// import { headers } from "next/headers";
// import { notFound } from "next/navigation";

// import { Navbar } from "./components/navbar/Navbar";
// import { HeroSection } from "./components/hero/HeroSection";
// import { FeaturesSection } from "./components/features-section/FeaturesSection";
// import { LocationsSection } from "./components/locations-section/LocationsSection";
// import { FAQSection } from "./components/faq-section/FAQSection";
// import { ContactSection } from "./components/contact-section/ContactSection";
// import { Footer } from "./components/footer/Footer";
// import { WhyChoose } from "./components/why-choose/WhyChoose";

// import { resolveRequest } from "@/lib/resolveRequest";
// import { hisarSiteData } from "@/lib/sub-domain/hisarSiteData";

// const Page = async () => {
//   const h = await headers();
//   const rawHost = h.get("host") || "";
//   // const host = rawHost.replace(/:\d+$/, "");
// const host = "marvelcity.houseforsaleinhisar.com"

//   // 🔐 resolve domain + subdomain
//   const ctx = resolveRequest(host);

//   if (!ctx) {
//     notFound(); // random / fake domain
//   }

//   const fullHost = ctx.host; // cleaned host
//   console.log("full host _>",fullHost);
//   console.log("ctx=>",ctx)
  

//   // ✅ EXACT MATCH (no ambiguity)
//   const pageData =
//   hisarSiteData.find(item => item.domain === fullHost)
//   || hisarSiteData[3];
//   if (!pageData) {
//     notFound(); // allowed domain but data missing
//   }

//   return (
//     <div>
//       <Navbar />
//       <HeroSection data={pageData.hero} />
//       <FeaturesSection data={pageData.featuresSection} />
//       <LocationsSection data={pageData.locationsSection} />
//       <WhyChoose data={pageData.whyChoose} />
//       <FAQSection data={pageData.faqSection} />
//       <ContactSection data={pageData.contactSection} />
//       <Footer />
//     </div>
//   );
// };

// export default Page;








































// import React from 'react'
// import { subdomainSiteData } from "@/lib/sub-domain/subdomainSiteData";
// import { headers } from "next/headers";
// import { Navbar } from './components/navbar/Navbar'
// import { HeroSection } from './components/hero/HeroSection'
// import { FeaturesSection } from './components/features-section/FeaturesSection'
// import { LocationsSection } from './components/locations-section/LocationsSection'
// import { FAQSection } from './components/faq-section/FAQSection'
// import { ContactSection } from './components/contact-section/ContactSection'
// import { Footer } from './components/footer/Footer'
// import { WhyChoose } from './components/why-choose/WhyChoose'
// import { resolveRequest } from "@/lib/resolveRequest";
// import { hisarSiteData } from '@/lib/sub-domain/hisarSiteData';

// const page = async() => {
//   const h = await headers();
//     const domain = h.get("host") || "localhost";

//     const pageData =
//           hisarSiteData.find((item) => item.domain === domain) ||
//           hisarSiteData[2];



//   return (
//     <div>
//       <Navbar/>
//       <HeroSection data={pageData?.hero} />
//       <FeaturesSection data={pageData?.featuresSection}/>
//       <LocationsSection data={pageData?.locationsSection}/>
//       <WhyChoose data={pageData?.whyChoose} />
//       <FAQSection data={pageData?.faqSection} />
//       <ContactSection data={pageData?.contactSection} />
//       <Footer/>
//     </div>
//   )
// }

// export default page
