import fs from "fs";
import path from "path";

// 🔹 index JSON ka naya path
const INDEX_PATH = path.join(
  process.cwd(),
  "src/lib/main-domain/main-domain-index.json"
);

// 🔹 actual content base
const CONTENT_BASE = path.join(
  process.cwd(),
  "content/main-domain"
);

export function loadPageData(domain) {
  if (!fs.existsSync(INDEX_PATH)) return null;

  const index = JSON.parse(
    fs.readFileSync(INDEX_PATH, "utf-8")
  );

  const relativePath = index[domain];
  if (!relativePath) return null;

  const fullPath = path.join(
    CONTENT_BASE,
    relativePath
  );

  if (!fs.existsSync(fullPath)) return null;

  return JSON.parse(
    fs.readFileSync(fullPath, "utf-8")
  );
}
