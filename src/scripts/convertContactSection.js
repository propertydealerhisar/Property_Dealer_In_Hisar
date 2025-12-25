const fs = require("fs");
const path = require("path");

// ===== CONFIG =====
const GRAND_PARENT_FOLDER = path.join(
  __dirname,
  "../content/sub-domain/hisar" // 👈 yahin se sab folders scan honge
);
// ==================

let totalFiles = 0;
let updatedFiles = 0;

// 🔁 recursive folder walk
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

    // ✅ only if old key exists
    if (!json["contact-section"]) return;

    const newObject = {};

    // 🔁 rebuild object to preserve order
    for (const key of Object.keys(json)) {
      if (key === "contact-section") {
        newObject.contactSection = json["contact-section"]; // ❗ same data
      } else {
        newObject[key] = json[key];
      }
    }

    fs.writeFileSync(
      filePath,
      JSON.stringify(newObject, null, 2),
      "utf-8"
    );

    updatedFiles++;
    console.log("✅ Updated:", filePath);
  } catch (err) {
    console.error("❌ Error:", filePath, err.message);
  }
}

// ▶️ RUN
console.log("🚀 Contact-section conversion started...");
walk(GRAND_PARENT_FOLDER);
console.log("🎉 Done!");
console.log("📄 Total JSON files scanned:", totalFiles);
console.log("✅ Files updated:", updatedFiles);
