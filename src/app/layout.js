import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SITE_DATA } from "@/lib/siteData";
import { headers } from "next/headers";
import { GOOGLE_VERIFICATION } from "@/lib/googleVerification";

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
    verification: {
      google:
        GOOGLE_VERIFICATION[domain] ||
        GOOGLE_VERIFICATION["localhost"],
    },
  };
}

export default async function RootLayout({ children }) {
  const h = await headers();
  const domain = h.get("host") || "localhost";

  const pageData =
    SITE_DATA.find((item) => item.domain === domain) ||
    SITE_DATA[0];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer data={pageData?.footer} />
      </body>
    </html>
  );
}
