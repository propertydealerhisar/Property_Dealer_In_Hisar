// app/properties/[slug]/page.js

import Properties from "./Properties";
import PropertyDetails from "./PropertyDetails";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { loadPageData } from "@/lib/main-domain/loadPageData";

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    // ✅ Current Domain
    const h = await headers();

    let domain = h.get("host");

    if (!domain) {
      domain = process.env.DOMAIN;
    }

    if (domain === "localhost:3000") {
      domain = process.env.DOMAIN;
    }

    // ✅ Property API
    const res = await fetch(
      `https://property-dealer-in-hisar-backend.onrender.com/api/listed-properties/getPropertyBySlug/${slug}`,
      {
        cache: "no-store",
      }
    );

    const json = await res.json();
    const property = json?.data?.[0];

    return {
      title:
        property?.metaTitle ||
        property?.title ||
        "Property for Sale",

      description:
        property?.metaDescription ||
        property?.description?.[0] ||
        "View full property details including price, location, photos and amenities.",

      alternates: {
        canonical: `https://${domain}/properties/${
          property?.slug || slug
        }`,
      },

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "Property for Sale",

      description:
        "View full property details including price, location, photos and amenities.",

      alternates: {
        canonical: `https://${process.env.DOMAIN}/properties/${slug}`,
      },

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
    };
  }
}

// ✅ Fetch Property
async function getPropertyBySlug(slug) {
  const res = await fetch(
    `https://property-dealer-in-hisar-backend.onrender.com/api/listed-properties/getPropertyBySlug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch property");
  }

  const json = await res.json();
  return json?.data[0] || null;
}

// ✅ Page
export default async function Page({ params }) {
  const { slug } = await params;

  if (!slug) {
    throw new Error("Invalid slug");
  }

  const property = await getPropertyBySlug(slug);

  if (!property) {
    throw new Error("Property not found");
  }

  // ✅ Domain Logic
  const h = await headers();

  let domain = h.get("host");

  if (!domain) notFound();

  if (domain === "localhost:3000") {
    domain = `${process.env.DOMAIN}`;
  }

  const pageData = loadPageData(domain);

  if (!pageData) notFound();

  return (
    <div>
      <PropertyDetails propertyy={property} />

      <Properties
        property={pageData?.properties}
        domain={domain}
        area={property?.locality}
      />
    </div>
  );
}









// // app/properties/[slug]/page.js

// import Properties from "./Properties";
// import PropertyDetails from "./PropertyDetails";
// import { headers } from "next/headers";
// import { loadPageData } from "@/lib/main-domain/loadPageData";
// export const metadata = {
//   title: "Property for Sale | Price, Location, Photos & Complete Details",
//   description:
//     "View full details of this property including price, location, photos, amenities, area and owner details. Find verified properties for sale with latest updates.",
//   alternates: {
//     canonical: "https://www.dealacres.com/property",
//   },
// };


// async function getPropertyBySlug(slug) {
//   const res = await fetch(
//     `https://property-dealer-in-hisar-backend.onrender.com/api/listed-properties/getPropertyBySlug/${slug}`,
//     {
//       cache: "no-store", // 👈 pure SSR
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch property");
//   }

//   const json = await res.json();
//   return json?.data[0] || null;
// }

// export default async function Page({ params }) {
//   // ✅ EXACT tumhare style me
//   const { slug } = await params;

//   if (!slug) {
//     throw new Error("Invalid slug");
//   }

//   const property = await getPropertyBySlug(slug);

//   if (!property) {
//     throw new Error("Property not found");
//   }

//    const h = await headers(); // ✅ MUST await in Next 16
  
//     let     domain = h.get("host");
  
//     if (!domain) notFound();
  
//     if (domain === "localhost:3000") {
//          domain = `${process.env.DOMAIN}`;
//     }
  
//     const pageData = loadPageData(domain);
  
//     if (!pageData) notFound();

//   return (
//     <div>
//       <PropertyDetails propertyy ={property}/>
//       <Properties property ={pageData?.properties} domain={domain} area={property?.locality}/>
      
//     </div>
//   );
// }