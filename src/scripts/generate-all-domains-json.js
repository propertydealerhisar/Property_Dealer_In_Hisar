const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

// 👇 yahan sirf GRANDPARENT folder ka path do
const GRAND_PARENT_DIR = path.join(
  __dirname,
  "../content/sub-domain/hisar"
);

// 👇 output json yahan banegi
const OUTPUT_FILE = path.join(
  __dirname,
  "../lib/all-domains.json"
);

// =========================================

const domainSet = new Set();
let totalFilesScanned = 0;
let filesWithoutDomain = [];

// recursive folder scan
function scanDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach((item) => {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      scanDirectory(fullPath);
    }

    if (item.isFile() && item.name.endsWith(".json")) {
      totalFilesScanned++;

      try {
        const data = JSON.parse(fs.readFileSync(fullPath, "utf-8"));

        if (data.domain && typeof data.domain === "string") {
          domainSet.add(data.domain.trim());
        } else {
          filesWithoutDomain.push(fullPath);
        }
      } catch (err) {
        console.warn("⚠️ Invalid JSON:", fullPath);
      }
    }
  });
}

// safety check
if (!fs.existsSync(GRAND_PARENT_DIR)) {
  console.error("❌ Grandparent folder not found:");
  console.error(GRAND_PARENT_DIR);
  process.exit(1);
}

// start scanning
scanDirectory(GRAND_PARENT_DIR);

// prepare output
const result = {
  totalFilesScanned,
  totalDomains: domainSet.size,
  domains: Array.from(domainSet).sort()
};

// ensure output folder exists
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// write json
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));

// report
console.log("✅ Domain collection completed!");
console.log("📄 Output file:", OUTPUT_FILE);
console.log("📊 Total JSON files scanned:", totalFilesScanned);
console.log("🌐 Total unique domains:", domainSet.size);

if (filesWithoutDomain.length) {
  console.log("\n⚠️ Files without domain field:");
  filesWithoutDomain.forEach((f) => console.log(" -", f));
}
