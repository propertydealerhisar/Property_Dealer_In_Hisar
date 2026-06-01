import { headers } from "next/headers";
import { loadPageData } from "@/lib/main-domain/loadPageData";
import { prefixArr } from "@/lib/prefix";


export async function GET() {
  try {
    // ✅ Domain detect
    const h = await headers();
    let domain = h.get("host");

    if (!domain) {
      return new Response("No domain", { status: 400 });
    }

    // localhost handle
    if (domain === "localhost:3000") {
      domain = process.env.DOMAIN;
    }

    const baseUrl = `https://${domain}`;
    const today = new Date().toLocaleDateString("en-CA", {
      timeZone: "Asia/Kolkata",
    });

    // ✅ pageData load
    const pageData = loadPageData(domain);
    const prefix = prefixArr.find(
      (item) => item.domain === domain
    )?.prefix || "";

    // ✅ Static URLs
    const urls = [
      {
        loc: `${baseUrl}/`,
        changefreq: "daily",
        priority: "1.0",
        lastmod: today,
      },
      {
        loc: `${baseUrl}/about`,
        changefreq: "monthly",
        priority: "0.5",
        lastmod: "2026-05-10",
      },
      {
        loc: `${baseUrl}/blog`,
        changefreq: "daily",
        priority: "0.8",
        lastmod: today,
      },
      {
        loc: `${baseUrl}/contact`,
        changefreq: "yearly",
        priority: "0.4",
        lastmod: "2026-01-10",
      },
    ];

    // 🔥 Locations add
    const locations = pageData?.footer?.links?.items;

    if (locations?.length) {
      locations.forEach((item) => {
        const slug = item?.slug;
        if (slug) {
          urls.push({
            loc: `${baseUrl}/${prefix}${slug}`,
            changefreq: "weekly",
            priority: "0.8",
            lastmod: today,
          });
        }
      });
    }

    // 🔥 PROPERTY SLUGS
    // try {
    //   let apiDomain = domain.startsWith("www.")
    //     ? domain
    //     : `www.${domain}`;
    //     if(apiDomain==="www.commercialpropertyforsaleinhisar.com")
    //         apiDomain = "www.shopforsaleinhisar.com";
    //   const res = await fetch(
    //     `https://property-dealer-in-hisar-backend.onrender.com/api/listed-properties/getPropertySlugsByDomain/${apiDomain}`
    //   );

    //   const result = await res.json();

    //   if (result?.success && result?.data?.length) {
    //     result.data.forEach((slug) => {
    //       urls.push(`${baseUrl}/properties/${slug}`);
    //     });
    //   }
    // } catch (err) {
    //   console.error("Property API Error:", err);
    // }

    // 🔥 BLOG SLUGS (FINAL ADD)
    try {
      const apiDomain = domain.startsWith("www.")
        ? domain
        : `www.${domain}`;

      const res = await fetch(
        `https://deal-acres-backend.onrender.com/newBlog/getSlugsByDomain/${apiDomain}`
      );

      const result = await res.json();

      if (result?.success && result?.data?.length) {
        result.data.forEach((slug) => {
          urls.push({
            loc: `${baseUrl}/blog/${slug}`,
            changefreq: "weekly",
            priority: "0.6",
            lastmod: today,
          });
        });
      }
    } catch (err) {
      console.error("Blog API Error:", err);
    }

    // ✅ Duplicate remove
    const uniqueUrls = Array.from(
      new Map(urls.map((item) => [item.loc, item])).values()
    );

    // ✅ XML generate
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
        .map(
          (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
        )
        .join("")}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Sitemap Error:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}