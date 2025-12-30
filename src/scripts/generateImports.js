const fs = require("fs");
const path = require("path");

/*
================ CONFIG =================
*/

// 📂 JSON files yahan se uthengi
const SOURCE_DIR = path.join(
  __dirname,
  "../content/main-domain/faridabad"
);

// 🧩 IMPORT PATH (index.js me SAME rahega)
const IMPORT_ALIAS_BASE = "@/content/main-domain/faridabad";

// 📝 index.js yahin banegi
const OUTPUT_FILE = path.join(
  __dirname,
  "../content/main-domain/faridabad/index.js"
);

/*
========================================
*/

// ❌ folder check
if (!fs.existsSync(SOURCE_DIR)) {
  console.error("❌ Folder not found:", SOURCE_DIR);
  process.exit(1);
}

// 📥 saari JSON files uthao
const files = fs
  .readdirSync(SOURCE_DIR)
  .filter((file) => file.endsWith(".json"));

// ❌ agar koi json nahi
if (files.length === 0) {
  console.error("❌ No JSON files found");
  process.exit(1);
}

let importLines = [];
let arrayNames = [];

for (const file of files) {
  const baseName = file.replace(".json", "");

  // variable name = file name (safe)
  const varName = baseName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "_")
    .replace(/^(\d)/, "_$1");

  // 🔥 ESM IMPORT STRING (JAISA TUMNE BOLA)
  importLines.push(
    `import ${varName} from "${IMPORT_ALIAS_BASE}/${file}";`
  );

  arrayNames.push(varName);
}

// 🧾 final index.js content
const finalContent = `
// ⚠️ AUTO-GENERATED FILE
// DO NOT EDIT MANUALLY

${importLines.join("\n")}

const dataArray = [
  ${arrayNames.join(",\n  ")}
];

export default dataArray;
`;

fs.writeFileSync(OUTPUT_FILE, finalContent.trim(), "utf-8");

console.log("✅ index.js GENERATED SUCCESSFULLY");
console.log("📦 Total JSON files:", files.length);
