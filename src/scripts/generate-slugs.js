const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

// 👇 jis folder ke file names se slug banana ho
const TARGET_DIR = path.join(
  __dirname,
  "../content/sub-domain/faridabad/flat-for-sale"
);

// =========================================

// filename → slug (FINAL LOGIC)
function fileNameToSlug(fileName) {
  let name = fileName
    .replace(".json", "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-_]/g, ""); // special chars hatao

  // spaces → _
  name = name.replace(/\s+/g, "_");

  // word-number ke beech '-' ya '_' ho to '_'
  // sector-1 OR sector_1 → sector_1
  name = name.replace(/([a-z])[-_](\d)/g, "$1_$2");

  // number-number ke beech '_' ko '-' banao
  // 1_4 → 1-4
  name = name.replace(/(\d)_(\d)/g, "$1-$2");

  // multiple _ ko single _
  name = name.replace(/_+/g, "_");

  // start/end _ hatao
  name = name.replace(/^_|_$/g, "");

  return name;
}

// ================= EXECUTION =================

if (!fs.existsSync(TARGET_DIR)) {
  console.error("❌ Folder not found:", TARGET_DIR);
  process.exit(1);
}

const files = fs.readdirSync(TARGET_DIR);

console.log("\n=========== SLUG REPORT ===========\n");

files.forEach((file) => {
  if (!file.endsWith(".json")) return;

  const slug = fileNameToSlug(file);
  console.log(`${file}  →  ${slug}`);
});

console.log("\n=========== DONE ===========\n");
