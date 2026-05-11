// app/properties/[slug]/page.js

import Properties from "./Properties";
import PropertyDetails from "./PropertyDetails";
import { headers } from "next/headers";
import { loadPageData } from "@/lib/main-domain/loadPageData";
export const metadata = {
  title: "Property for Sale | Price, Location, Photos & Complete Details",
  description:
    "View full details of this property including price, location, photos, amenities, area and owner details. Find verified properties for sale with latest updates.",
  alternates: {
    canonical: "https://www.dealacres.com/property",
  },
};


async function getPropertyBySlug(slug) {
  const res = await fetch(
    `https://property-dealer-in-hisar-backend.onrender.com/api/listed-properties/getPropertyBySlug/${slug}`,
    {
      cache: "no-store", // 👈 pure SSR
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch property");
  }

  const json = await res.json();
  return json?.data?.[0] || null;
}

export default async function Page({ params }) {
  // ✅ EXACT tumhare style me
  const { slug } = await params;

  if (!slug) {
    throw new Error("Invalid slug");
  }

  const property = await getPropertyBySlug(slug);

  if (!property) {
    throw new Error("Property not found");
  }

   const h = await headers(); // ✅ MUST await in Next 16
  
    let     domain = h.get("host");
  
    if (!domain) notFound();
  
    if (domain === "localhost:3000") {
         domain = `${process.env.DOMAIN}`;
    }
  
    const pageData = loadPageData(domain);
  
    if (!pageData) notFound();

  return (
    <div>
      <PropertyDetails propertyy ={property}/>
      <Properties property ={pageData?.properties} domain={domain} area={property?.locality}/>
      
    </div>
  );
}