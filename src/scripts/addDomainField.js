const fs = require("fs");
const path = require("path");

// ===== CONFIG =====
const GRAND_PARENT_FOLDER = path.join(
  __dirname,
  "../content/sub-domain/hisar" // 👈 yahan se scan start hoga
);

const DOMAIN_VALUE = "www.abc.com";
// ==================

let totalFiles = 0;
let updatedFiles = 0;
let skippedFiles = 0;

// 🔁 recursive walk
function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      walk(fullPath);
    }

    if (item.isFile() && item.name.endsWith(".json")) {
      processJson(fullPath);
    }
  }
}

function processJson(filePath) {
  totalFiles++;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(raw);

    // ⏭️ already has domain
    if (json.domain) {
      skippedFiles++;
      return;
    }

    // 🔁 rebuild object to keep order (domain on top)
    const newObject = {
      domain: DOMAIN_VALUE,
      ...json,
    };

    fs.writeFileSync(
      filePath,
      JSON.stringify(newObject, null, 2),
      "utf-8"
    );

    updatedFiles++;
    console.log("✅ Domain added:", filePath);
  } catch (err) {
    console.error("❌ Error:", filePath, err.message);
  }
}

// ▶️ RUN
console.log("🚀 Adding domain field...");
walk(GRAND_PARENT_FOLDER);
console.log("🎉 Done!");
console.log("📄 Total JSON files scanned:", totalFiles);
console.log("✅ Updated files:", updatedFiles);
console.log("⏭️ Skipped (already had domain):", skippedFiles);
