import { headers } from "next/headers";
import { notFound } from "next/navigation";

import BlogsSection from "@/app/main-domain/components/blogs/BlogsSection";
import ContactInfo from "@/app/main-domain/components/contact-info/ContactInfo";
import FAQSection from "@/app/main-domain/components/FAQSection/FAQSection";
import FeatureWithImage from "@/app/main-domain/components/feature-with-image/FeatureWithImage";
import Hero from "@/app/main-domain/components/hero/Hero";
import ServicesSection from "@/app/main-domain/components/services-section/ServicesSection";
import WelcomeSection from "@/app/main-domain/components/welcome-section/WelcomeSection";
import WhyChooseUs from "@/app/main-domain/components/why-choose-us/WhyChooseUs";

// ✅ FAST LOADER
import { loadPageData } from "@/lib/main-domain/loadPageData";

export default async function Home() {
  const h = await headers();

  const domain = h.get("host") || "localhost";
  // const domain = "www.shopforsaleingurgaon.com"

  // ✅ index-based direct lookup
  const pageData = loadPageData(domain);

  if (!pageData) return notFound();

  return (
    <>
      <Hero data={pageData.heroSection} />
      <WelcomeSection data={pageData.welcomeSection} />
      <FeatureWithImage data={pageData.featureWithImage} />
      <ServicesSection data={pageData.servicesSection} />
      <WhyChooseUs data={pageData.whyChooseUs} />
      <BlogsSection data={pageData.blogsSection} />
      <ContactInfo data={pageData.contactSection} website={domain} />
      <FAQSection data={pageData.faqSection} />
    </>
  );
}





























// import { headers } from "next/headers";
// import BlogsSection from "@/app/main-domain/components/blogs/BlogsSection";
// import ContactInfo from "@/app/main-domain/components/contact-info/ContactInfo";
// import FAQSection from "@/app/main-domain/components/FAQSection/FAQSection";
// import FeatureWithImage from "@/app/main-domain/components/feature-with-image/FeatureWithImage";
// import Hero from "@/app/main-domain/components/hero/Hero";
// import ServicesSection from "@/app/main-domain/components/services-section/ServicesSection";
// import WelcomeSection from "@/app/main-domain/components/welcome-section/WelcomeSection";
// import WhyChooseUs from "@/app/main-domain/components/why-choose-us/WhyChooseUs";

// import { SITE_DATA } from "@/lib/main-domain/siteData";

// export default async function Home() {
  
//     const h = await headers(); // ✅ MUST await in Next 16

//   const domain = h.get("host") || "localhost";
//   // const domain = "www.toletserviceinhisar.com"
//   const pageData =
//     SITE_DATA.find((item) => item.domain === domain) ||
//     SITE_DATA[0]; // fallback
  
    
 
//   return (
//    <>
//    <Hero data ={pageData?.heroSection}/>
//    <WelcomeSection data ={pageData?.welcomeSection} />
//    <FeatureWithImage data ={pageData?.featureWithImage}/>
//    <ServicesSection data ={pageData?.servicesSection} />
//    <WhyChooseUs data ={pageData?.whyChooseUs}/>
//    <BlogsSection data={pageData?.blogsSection}/>
//    <ContactInfo data={pageData?.contactSection} website={domain}  />
//    <FAQSection data={pageData?.faqSection }/>
//    </>
//   );
// }
