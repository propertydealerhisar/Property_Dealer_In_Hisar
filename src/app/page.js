import { headers } from "next/headers";
import BlogsSection from "@/components/blogs/BlogsSection";
import ContactInfo from "@/components/contact-info/ContactInfo";
import FAQSection from "@/components/FAQSection/FAQSection";
import FeatureWithImage from "@/components/feature-with-image/FeatureWithImage";
import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/services-section/ServicesSection";
import WelcomeSection from "@/components/welcome-section/WelcomeSection";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";

import { SITE_DATA } from "@/lib/siteData";

export default async function Home() {
    const h = await headers(); // ✅ MUST await in Next 16

  const domain = h.get("host") || "localhost";
  console.log("domain =>",domain);
  

  const pageData =
    SITE_DATA.find((item) => item.domain === domain) ||
    SITE_DATA[0]; // fallback
  
    
 
  return (
   <>
   <Hero data ={pageData?.heroSection}/>
   <WelcomeSection data ={pageData?.welcomeSection} />
   <FeatureWithImage data ={pageData?.featureWithImage}/>
   <ServicesSection data ={pageData?.servicesSection} />
   <WhyChooseUs data ={pageData?.whyChooseUs}/>
   <BlogsSection data={pageData?.blogsSection}/>
   <ContactInfo data={pageData?.contactSection} website={domain}  />
   <FAQSection data={pageData?.faqSection }/>
   </>
  );
}
