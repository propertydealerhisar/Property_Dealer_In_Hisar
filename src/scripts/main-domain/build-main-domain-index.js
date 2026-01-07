const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

// jahan main-domain ke saare json pade hain
const BASE_DIR = path.join(
  __dirname,
  "../../content/main-domain"
);


// output index file
const OUTPUT_FILE = path.join(
  BASE_DIR,
  "../../lib/main-domain/main-domain-index.json"
);

// =========================================

const index = {};

// 🔁 recursive walk
function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      walk(fullPath);
    }

    if (item.isFile() && item.name.endsWith(".json")) {
      // index file ko khud skip karo
      if (item.name === "main-domain-index.json") return;

      try {
        const json = JSON.parse(
          fs.readFileSync(fullPath, "utf-8")
        );

        if (!json.domain) return;

        // BASE_DIR se relative path nikalo
        const relativePath = path
          .relative(BASE_DIR, fullPath)
          .replace(/\\/g, "/");

        index[json.domain] = relativePath;

        console.log("✅ indexed:", json.domain);
      } catch (e) {
        console.error("❌ invalid json:", fullPath);
      }
    }
  }
}

// 🚀 run
walk(BASE_DIR);

// 📝 write index file
fs.writeFileSync(
  OUTPUT_FILE,
  JSON.stringify(index, null, 2),
  "utf-8"
);

console.log("——————————————");
console.log("Index generated at:");
console.log(OUTPUT_FILE);
console.log("Total domains:", Object.keys(index).length);
