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

export default function Home() {
  return (
   <>
   {/* <Navbar/> */}
   <Hero/>
   <WelcomeSection/>
   <FeatureWithImage/>
   <ServicesSection/>
   <WhyChooseUs/>
   <BlogsSection/>
   <ContactInfo/>
   <FAQSection/>
   <Footer/>
   </>
  );
}
