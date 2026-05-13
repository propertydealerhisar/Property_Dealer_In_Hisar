import { headers } from "next/headers";
import { DOMAIN_META } from "@/lib/domainMeta";

export const dynamic = "force-dynamic";

// ✅ BLOG PAGE META (domain-wise)
export async function generateMetadata() {
  const h = await headers();

  let domain = h.get("host") || "localhost";

  if (domain === "localhost:3000") {
    domain = process.env.DOMAIN;
  }

  const cleanDomain = domain.replace(/^www\./, "");

  const meta =
    DOMAIN_META[domain]?.blog ||
    DOMAIN_META[cleanDomain]?.blog ||
    DOMAIN_META[domain] || {
      title: "Blog",
      description: "Latest blogs and updates",
    };

  return {
    title: meta.title,
    description: meta.description,
      keywords: meta.keywords,
    alternates: {
      canonical: `https://${domain}/blog`,
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


// ✅ MUST: component export
export default function BlogLayout({ children }) {
  return <>{children}</>;
}