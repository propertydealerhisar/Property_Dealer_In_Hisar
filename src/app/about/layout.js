import { headers } from "next/headers";
import { DOMAIN_META } from "@/lib/domainMeta";

export const dynamic = "force-dynamic";

// ✅ ABOUT PAGE KA META (domain-wise)
export async function generateMetadata() {
  const h = await headers();

  let domain = h.get("host") || "localhost";

  if (domain === "localhost:3000") {
    domain = process.env.DOMAIN;
  }

  const cleanDomain = domain.replace(/^www\./, "");

  const meta =
    DOMAIN_META[domain]?.about ||
    DOMAIN_META[cleanDomain]?.about ||
    DOMAIN_META[domain] || {
      title: "About",
      description: "About page",
    };

  return {
    title: meta.title,
    description: meta.description,
      keywords: meta.keywords,
    alternates: {
      canonical: `https://${domain}/about`,
    },
  };
}


// ✅ MUST: default export component hona chahiye
export default function AboutLayout({ children }) {
  return <>{children}</>;
}