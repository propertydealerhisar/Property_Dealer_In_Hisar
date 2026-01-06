const fs = require("fs");
const path = require("path");

const BASE = path.join(process.cwd(), "src/content/sub-domain");
const index = {};

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    // folder ho to andar jao
    if (item.isDirectory()) {
      walk(fullPath);
    }

    // json file ho to read karo
    if (item.isFile() && item.name.endsWith(".json")) {
      const raw = fs.readFileSync(fullPath, "utf-8");
      const json = JSON.parse(raw);

      if (json.domain) {
        index[json.domain] = path
          .relative(BASE, fullPath)
          .replace(/\\/g, "/"); // windows fix
      }
    }
  }
}

// start scanning
walk(BASE);

// write index file
fs.writeFileSync(
  path.join(process.cwd(), "src/lib/sub-domain/sub-domains.json"),
  JSON.stringify(index, null, 2),
  "utf-8"
);

console.log("✅ domain-index.json ready");
