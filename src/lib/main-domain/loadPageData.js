import fs from "fs";
import path from "path";

// ✅ index file (same pattern as sub-domain)
const INDEX_PATH = path.join(
  process.cwd(),
  "src/lib/main-domain/main-domain-index.json"
);

export function loadPageData(domain) {
  if (!domain) return null;
  if (!fs.existsSync(INDEX_PATH)) return null;

  const index = JSON.parse(
    fs.readFileSync(INDEX_PATH, "utf-8")
  );

  const relativePath = index[domain];
  if (!relativePath) return null;

  // ✅ IMPORTANT FIX: src/content/main-domain
  const fullPath = path.join(
    process.cwd(),
    "src/content/main-domain",
    relativePath
  );

  if (!fs.existsSync(fullPath)) return null;

  return JSON.parse(
    fs.readFileSync(fullPath, "utf-8")
  );
}
