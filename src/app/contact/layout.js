import { headers } from "next/headers";
import { DOMAIN_META } from "@/lib/domainMeta";

export const dynamic = "force-dynamic";

// ✅ CONTACT PAGE META (domain-wise)
export async function generateMetadata() {
  const h = await headers();

  let domain = h.get("host") || "localhost";

  if (domain === "localhost:3000") {
    domain = process.env.DOMAIN;
  }

  const cleanDomain = domain.replace(/^www\./, "");

  const meta =
    DOMAIN_META[domain]?.contact ||
    DOMAIN_META[cleanDomain]?.contact ||
    DOMAIN_META[domain] || {
      title: "Contact",
      description: "Contact page",
    };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://${domain}/contact`,
    },
  };
}


// ✅ MUST: default export component
export default function ContactLayout({ children }) {
  return <>{children}</>;
}