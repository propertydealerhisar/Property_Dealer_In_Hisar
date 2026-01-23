const fs = require("fs");
const path = require("path");

const domains = require("../../lib/sub-domain/domains.json");

const PUBLIC_DIR = path.join(__dirname, "../../../public");
// const x=require("../../../public")
function generateSitemap(domain) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${domain}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
}

domains.forEach((domain) => {
  const domainDir = path.join(PUBLIC_DIR, domain);

  if (!fs.existsSync(domainDir)) {
    fs.mkdirSync(domainDir, { recursive: true });
  }

  const sitemapPath = path.join(domainDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, generateSitemap(domain), "utf8");

  console.log(`✅ Sitemap generated for ${domain}`);
});

console.log("🎉 All sitemaps generated successfully!");
