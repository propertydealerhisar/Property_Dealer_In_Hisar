const fs = require("fs");
const path = require("path");

// ================= CONFIG =================
const ROOT_FOLDER = path.join(
  __dirname,
  "../content/sub-domain/faridabad/office-space-for-sale" // 👈 yahan se scan start
);

const PARENT_DOMAIN = "officespaceforsaleinfaridabad.com";
// =========================================

let total = 0;
let updated = 0;

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

// 🔤 filename → clean slug (tumhare rules)
function cleanName(fileName) {
  let name = fileName
    .replace(/\.json$/i, "") // remove .json
    .toLowerCase();

  // remove spaces & underscores
  name = name.replace(/[\s_]+/g, "");

  // remove dash between letters or letter-number
  name = name.replace(/([a-z])\-([a-z0-9])/g, "$1$2");

  // remove dash between number-letter
  name = name.replace(/([0-9])\-([a-z])/g, "$1$2");

  // keep dash only between numbers (1-4)
  // nothing to do, already safe

  return name;
}

function processJson(filePath) {
  total++;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(raw);

    const fileName = path.basename(filePath);
    const slug = cleanName(fileName);

    const domainValue = `${slug}.${PARENT_DOMAIN}`;

    // rebuild object (domain always on top)
    const newObject = {
  ...json,
  domain: domainValue,
};


    fs.writeFileSync(
      filePath,
      JSON.stringify(newObject, null, 2),
      "utf-8"
    );

    updated++;
    console.log("✅ Updated:", domainValue);
  } catch (err) {
    console.error("❌ Error:", filePath, err.message);
  }
}

// ▶️ RUN
console.log("🚀 Updating domain fields...");
walk(ROOT_FOLDER);
console.log("🎉 Done!");
console.log("📄 Total JSON files:", total);
console.log("✅ Updated files:", updated);
