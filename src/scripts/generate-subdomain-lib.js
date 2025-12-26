const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

const PARENT_FOLDER_NAME = "to-let-services";
const IMPORT_SUFFIX = "ToLetSservices";
const IMPORT_BASE_PATH = "@/content/sub-domain/hisar";

// =========================================

const SCRIPT_DIR = __dirname;

const SOURCE_DIR = path.join(
  SCRIPT_DIR,
  "../content/sub-domain/hisar",
  PARENT_FOLDER_NAME
);

const OUTPUT_DIR = path.join(SCRIPT_DIR, "../lib/sub-domain");
const OUTPUT_FILE = path.join(
  OUTPUT_DIR,
  `${PARENT_FOLDER_NAME}.js`
);

// ✅ helper: filename → safe import variable
// only '-' → '_' replace, baaki sab same
function toImportName(file) {
  return (
    file
      .replace(".json", "")
      .replace(/-/g, "_") + IMPORT_SUFFIX
  );
}

// ================= EXECUTION =================

if (!fs.existsSync(SOURCE_DIR)) {
  console.error("❌ Source folder not found:");
  console.error(SOURCE_DIR);
  process.exit(1);
}

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const files = fs
  .readdirSync(SOURCE_DIR)
  .filter((f) => f.endsWith(".json"));

if (!files.length) {
  console.warn("⚠️ No JSON files found in:", SOURCE_DIR);
  process.exit(0);
}

const imports = [];
const exportItems = [];

files.forEach((file) => {
  const importName = toImportName(file);
  const importPath = `${IMPORT_BASE_PATH}/${PARENT_FOLDER_NAME}/${file}`;

  imports.push(`import ${importName} from "${importPath}";`);
  exportItems.push(importName);
});

const output = `
${imports.join("\n")}

export const ${PARENT_FOLDER_NAME.replace(/-/g, "")} = [
  ${exportItems.join(",\n  ")}
];
`.trim();

fs.writeFileSync(OUTPUT_FILE, output);

console.log("✅ Sub-domain lib generated successfully!");
console.log("📄 File:", OUTPUT_FILE);
