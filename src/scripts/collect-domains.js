const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

// 👇 parent folder jahan saari json files hain
const PARENT_FOLDER = path.join(
  __dirname,
  "../content/main-domain/faridabad"
);

// 👇 output json file
const OUTPUT_FILE = path.join(
  __dirname,
  "all-domains.json"
);

// =========================================

const domains = [];

// 🔁 recursive folder walk
function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      walk(fullPath);
    }

    if (item.isFile() && item.name.endsWith(".json")) {
      extractDomain(fullPath);
    }
  }
}

function extractDomain(filePath) {
  try {
    const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (json.domain) {
      domains.push(json.domain);
      console.log("✅ Found domain:", json.domain);
    }

  } catch (err) {
    console.error("❌ Error reading:", filePath);
  }
}

// 🚀 run
walk(PARENT_FOLDER);

// ✅ save result
fs.writeFileSync(
  OUTPUT_FILE,
  JSON.stringify(
    { domains },
    null,
    2
  ),
  "utf-8"
);

console.log("——————————————");
console.log("Total domains found:", domains.length);
console.log("Output file:", OUTPUT_FILE);
