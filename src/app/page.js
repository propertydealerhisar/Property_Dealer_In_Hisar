
import { headers } from "next/headers";
import BlogsSection from "@/components/blogs/BlogsSection";
import ContactInfo from "@/components/contact-info/ContactInfo";
import FAQSection from "@/components/FAQSection/FAQSection";
import FeatureWithImage from "@/components/feature-with-image/FeatureWithImage";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import ServicesSection from "@/components/services-section/ServicesSection";
import WelcomeSection from "@/components/welcome-section/WelcomeSection";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import Image from "next/image";
import house_for_sale_in_hisar from "@/content/hisar/house_for_sale_in_hisar.json"
import flat_for_sale_in_hisar from "@/content/hisar/flat_for_sale_in_hisar.json"
import house_for_rent_in_hisar from "@/content/hisar/house_for_rent_in_hisar.json"
import flat_for_rent_in_hisar from "@/content/hisar/flat_for_rent_in_hisar.json"
import shop_for_sale_in_hisar from "@/content/hisar/shop_for_sale_in_hisar.json"
import { SITE_DATA } from "@/lib/siteData";

export default async function Home() {
    const h = await headers(); // ✅ MUST await in Next 16

  const domain = h.get("host") || "localhost";
  console.log("Current Domain:", domain);

  const pageData =
    SITE_DATA.find((item) => item.domain === domain) ||
    SITE_DATA[0]; // fallback
  
    
 
  return (
   <>
   {/* <Navbar/> */}
   <Hero data ={pageData?.heroSection}/>
   <WelcomeSection data ={pageData?.welcomeSection} />
   <FeatureWithImage data ={pageData?.featureWithImage}/>
   <ServicesSection data ={pageData?.servicesSection} />
   <WhyChooseUs data ={pageData?.whyChooseUs}/>
   <BlogsSection data={pageData?.blogsSection}/>
   <ContactInfo data={pageData?.contactSection} />
   <FAQSection data={pageData?.faqSection}/>
   <Footer/>
   </>
  );
}
