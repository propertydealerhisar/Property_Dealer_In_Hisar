const fs = require("fs");
const path = require("path");

// ✅ correct folder path (relative to this script)
const GRAND_PARENT_FOLDER = path.join(
  __dirname,
  "../content/sub-domain/hisar"
);

const FAQ_TITLE = "Frequently Asked Questions";
const FAQ_DESCRIPTION =
  "Find quick and easy answers to the questions you may have about our services.";

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

    if (!Array.isArray(json.faqs)) return;

    const newObject = {};

    for (const key of Object.keys(json)) {
      if (key === "faqs") {
        // 🔁 same position pe new section
        newObject.faqSection = {
          title: FAQ_TITLE,
          description: FAQ_DESCRIPTION,
          faqs: json.faqs, // ❗ data unchanged
        };
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
    console.log("✅ Updated (order preserved):", filePath);
  } catch (err) {
    console.error("❌ Error:", filePath, err.message);
  }
}

// ▶️ run
console.log("🚀 Script started...");
walk(GRAND_PARENT_FOLDER);
console.log("🎉 Done!");
console.log("📄 Total JSON files scanned:", totalFiles);
console.log("✅ Files updated:", updatedFiles);
