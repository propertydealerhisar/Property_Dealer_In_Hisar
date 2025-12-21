import React from 'react'
import BlogPage from './Blog';
import { headers } from "next/headers";
export async function generateMetadata() {
  const h = await headers();
  const domain = h.get("host") || "localhost";

  // www remove
  const cleanDomain = domain.replace(/^www\./, "");

  return {
    title: "Property & Real Estate Blogs | Trusted Property Dealer",
    description:
      "Read latest property and real estate blogs. Get house buying tips, flat rent guides, plot investment ideas and property news.",
    keywords: [
      "property blogs",
      "real estate blogs",
      "house buying tips",
      "flat rent guide",
      "plot investment",
      "property news"
    ],
    alternates: {
      canonical: `https://${cleanDomain}/blog`
    }
  };
}



const page = () => {
  return (
    <div className='bg-[#f2e8e1]'>
    <BlogPage/>
    </div>
  )
}

export default page