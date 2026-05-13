// app/robots.js

import { headers } from "next/headers";

export default async function robots() {
  const h = await headers();

  let domain = h.get("host");

  // ✅ localhost support
  if (domain === "localhost:3000") {
    domain = process.env.DOMAIN;
  }

  const baseUrl = `https://${domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}