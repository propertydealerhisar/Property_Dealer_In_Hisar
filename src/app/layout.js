import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import { SITE_DATA } from "@/lib/main-domain/siteData";
import { headers } from "next/headers";
import { GOOGLE_VERIFICATION } from "@/lib/main-domain/googleVerification";
import GoogleTagManager from "@/components/google-tag-manager/GoogleTagManager";
import { GTM_IDS } from "@/lib/main-domain/gtmConfig";
import { GA_TARGET_DOMAINS } from "@/lib/main-domain/gaTargetDomains";
import GoogleAnalytics from "@/components/google-analytics/GoogleAnalytics";
import { loadPageData } from "@/lib/main-domain/loadPageData";
import { PropertyProvider } from "@/contexts/propertyContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// ✅ DOMAIN-WISE METADATA
export async function generateMetadata() {
  const h = await headers();
  const domain = h.get("host") || "localhost";

  return {
   title: "Property Dealer | Buy & Sell Residential and Commercial Properties",
    description:
      "Trusted property dealer offering residential and commercial properties for sale and rent. Find verified plots, houses, flats, and commercial spaces with expert guidance.",
    keywords: [
      "property dealer",
      "real estate agent",
      "buy property",
      "sell property",
      "property for sale",
      "property for rent",
      "residential property",
      "commercial property",
      "plots for sale",
      "houses for sale",
      "real estate services"
    ],
      alternates: {
      canonical: `https://${domain}`,
    },
    verification: {
      google:
        GOOGLE_VERIFICATION[domain] ||
        GOOGLE_VERIFICATION["localhost"],
    },
     icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}

export default async function RootLayout({ children }) {
  const h = await headers();
  const domain = h.get("host") || "localhost";
  // const domain = "www.commercialpropertyforsaleinhisar.com"
     const pageData = loadPageData(domain);
     
  // if (!pageData) return notFound();

    const gtmId = GTM_IDS[domain] || GTM_IDS["localhost"];
    const gaId =
  GA_TARGET_DOMAINS[domain] || GA_TARGET_DOMAINS["localhost"];
 // undefined bhi ho sakta hai
 
//  if(!pageData)
//   return notFound();

  return (
    <html lang="en">
       <head>
         <link rel="icon" href="/favicon.ico" />
        {/* ✅ Domain-wise GTM */}
        <GoogleTagManager gtmId={gtmId} />

        <GoogleAnalytics  gaId={gaId} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PropertyProvider>
        <Navbar domain={pageData?.domain} />
        {children}
        <Footer data={pageData?.footer}  />
        </PropertyProvider>
      </body>
    </html>
  );
}






























// import { Geist, Geist_Mono } from "next/font/google";
// import "@/app/globals.css";
// import { notFound } from "next/navigation";
// import Navbar from "@/app/main-domain/components/navbar/Navbar";
// import Footer from "@/app/main-domain/components/footer/Footer";
// import { SITE_DATA } from "@/lib/main-domain/siteData";
// import { headers } from "next/headers";
// import { GOOGLE_VERIFICATION } from "@/lib/main-domain/googleVerification";
// import GoogleTagManager from "@/app/main-domain/components/google-tag-manager/GoogleTagManager";
// import { GTM_IDS } from "@/lib/main-domain/gtmConfig";
// import { GA_TARGET_DOMAINS } from "@/lib/main-domain/gaTargetDomains";
// import GoogleAnalytics from "@/app/main-domain/components/google-analytics/GoogleAnalytics";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


// // ✅ DOMAIN-WISE METADATA
// export async function generateMetadata() {
//   const h = await headers();
//   const domain = h.get("host") || "localhost";

//   return {
//    title: "Property Dealer | Buy & Sell Residential and Commercial Properties",
//     description:
//       "Trusted property dealer offering residential and commercial properties for sale and rent. Find verified plots, houses, flats, and commercial spaces with expert guidance.",
//     keywords: [
//       "property dealer",
//       "real estate agent",
//       "buy property",
//       "sell property",
//       "property for sale",
//       "property for rent",
//       "residential property",
//       "commercial property",
//       "plots for sale",
//       "houses for sale",
//       "real estate services"
//     ],
//       alternates: {
//       canonical: `https://${domain}`,
//     },
//     verification: {
//       google:
//         GOOGLE_VERIFICATION[domain] ||
//         GOOGLE_VERIFICATION["localhost"],
//     },
//   };
// }

// export default async function RootLayout({ children }) {
//   const h = await headers();
//   const domain = h.get("host") || "localhost";
//   // const domain = "www.agriculturelandforsaleinfaridabad.com"
//     const pageData =
//       SITE_DATA.find((item) => item.domain === domain)

//     const gtmId = GTM_IDS[domain] || GTM_IDS["localhost"];
//     const gaId =
//   GA_TARGET_DOMAINS[domain] || GA_TARGET_DOMAINS["localhost"];
//  // undefined bhi ho sakta hai
 
//  if(!pageData)
//   return notFound();

//   return (
//     <html lang="en">
//        <head>
//         {/* ✅ Domain-wise GTM */}
//         <GoogleTagManager gtmId={gtmId} />

//         <GoogleAnalytics  gaId={gaId} />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//          {/* GTM noscript */}
//         <noscript>
//           <iframe
//             src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>
//         <Navbar domain={pageData?.domain} />
//         {children}
//         <Footer data={pageData?.footer}  />
//       </body>
//     </html>
//   );
// }
