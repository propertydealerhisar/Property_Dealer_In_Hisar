const fs = require("fs");
const path = require("path");

// ===== CONFIG =====
const GRAND_PARENT_FOLDER = path.join(
  __dirname,
  "../content/sub-domain/faridabad/rent-house"
);

const DOMAIN_VALUE = "www.abc.com";
// ==================

let totalFiles = 0;
let updatedFiles = 0;

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

    // ✅ ALWAYS replace or add domain
    const newObject = {
      ...json,
      domain: DOMAIN_VALUE
    };

    fs.writeFileSync(
      filePath,
      JSON.stringify(newObject, null, 2),
      "utf-8"
    );

    updatedFiles++;
    console.log("✅ Domain updated:", filePath);
  } catch (err) {
    console.error("❌ Error:", filePath, err.message);
  }
}

// ▶️ RUN
console.log("🚀 Updating domain field (add + replace)...");
walk(GRAND_PARENT_FOLDER);
console.log("🎉 Done!");
console.log("📄 Total JSON files scanned:", totalFiles);
console.log("✅ Files updated:", updatedFiles);
