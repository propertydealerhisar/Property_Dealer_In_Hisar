const fs = require("fs");
const path = require("path");

// yahin tumhari main-domain JSON files hain
const BASE_DIR = path.join(
  process.cwd(),
  "src/content/main-domain"
);

const parentDomains = new Set();

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    // folder ke andar jao
    if (item.isDirectory()) {
      walk(fullPath);
    }

    // json file mile
    if (item.isFile() && item.name.endsWith(".json")) {
      try {
        const raw = fs.readFileSync(fullPath, "utf-8");
        const json = JSON.parse(raw);

        // ⭐ EXACT LOGIC (sirf domain field)
        if (json.domain && typeof json.domain === "string") {
          parentDomains.add(json.domain);
          console.log("✅ domain picked:", json.domain);
        } else {
          console.warn("⚠️ domain field missing in:", fullPath);
        }

      } catch (err) {
        console.error("❌ error reading:", fullPath);
      }
    }
  }
}

// start scanning
walk(BASE_DIR);

// write output
const outputPath = path.join(
  process.cwd(),
  "src/lib/sub-domain/domains.json"
);

fs.writeFileSync(
  outputPath,
  JSON.stringify([...parentDomains], null, 2),
  "utf-8"
);

console.log(
  `\n🎉 parent-domains.json generated with ${parentDomains.size} domains`
);
