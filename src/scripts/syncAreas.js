const fs = require("fs");
const path = require("path");

/* ================= PATH CONFIG (RELATIVE) ================= */

const parentFolder = path.resolve(__dirname, "../content/main-domain/gurgaon");
const grandParentFolder = path.resolve(__dirname, "../content/sub-domain/gurgaon");

/* ================= UTILS ================= */

function readJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

// Parent domain → remove www.
function normalizeParentDomain(domain) {
  return domain.replace(/^www\./i, "").trim().toLowerCase();
}

// Sub-domain domain → remove first label (modeltown., sector21.)
function normalizeSubDomain(domain) {
  const parts = domain.trim().toLowerCase().split(".");
  parts.shift();
  return parts.join(".");
}

// Slug generator
function makeSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Recursive JSON scan
function getAllJsonFiles(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getAllJsonFiles(fullPath));
    } else if (item.endsWith(".json")) {
      files.push(fullPath);
    }
  }
  return files;
}

/* ================= MAIN ================= */

console.log("🔍 Scanning folders...");

const parentFiles = getAllJsonFiles(parentFolder);
const subFiles = getAllJsonFiles(grandParentFolder);

console.log(`✔ Parent JSON files: ${parentFiles.length}`);
console.log(`✔ Sub-domain JSON files: ${subFiles.length}`);
console.log("------------------------------------------------");

for (const parentFile of parentFiles) {
  const parentData = readJSON(parentFile);
  if (!parentData.domain) continue;

  const parentDomain = normalizeParentDomain(parentData.domain);

  // 🔥 IMPORTANT: RESET AREAS (REPLACE COMPLETELY)
  if (!parentData.footer) parentData.footer = {};
  parentData.footer.areas = [];

  // Track duplicates ONLY in sub-domain
  const uniqueMap = new Map();

  for (const sFile of subFiles) {
    const sData = readJSON(sFile);
    if (!sData.domain || !sData.area) continue;

    const subDomain = normalizeSubDomain(sData.domain);

    if (subDomain === parentDomain) {
      const key = `${parentDomain}__${sData.area.toLowerCase()}`;

      if (uniqueMap.has(key)) {
        console.error("🚨 DUPLICATE SUB-DOMAIN FILES FOUND – SCRIPT STOPPED");
        console.error("Domain :", parentDomain);
        console.error("Area   :", sData.area);
        console.error("First Found In :", uniqueMap.get(key));
        console.error("Duplicate In  :", sFile);
        console.error("Parent JSON   :", parentFile);
        process.exit(1);
      }

      uniqueMap.set(key, sFile);

      parentData.footer.areas.push({
        area: sData.area,
        slug: makeSlug(sData.area),
      });
    }
  }

  writeJSON(parentFile, parentData);

  console.log(
    `✅ Updated: ${path.basename(parentFile)} → Areas Replaced: ${parentData.footer.areas.length}`
  );
}

console.log("------------------------------------------------");
console.log("🎉 DONE: Parent areas replaced successfully");
