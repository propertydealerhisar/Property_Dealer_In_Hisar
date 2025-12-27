const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

// 👇 jis folder ke files rename karni hain
const TARGET_DIR = path.join(
  __dirname,
  "../content/sub-domain/faridabad/real-estate-agents"
);

// =========================================

// filename → slug (FINAL LOGIC)
function fileNameToSlug(fileName) {
  let name = fileName
    .replace(".json", "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-_]/g, "");

  // spaces → _
  name = name.replace(/\s+/g, "_");

  // word-number ke beech '-' ya '_' → '_'
  name = name.replace(/([a-z])[-_](\d)/g, "$1_$2");

  // number-number ke beech '_' → '-'
  name = name.replace(/(\d)_(\d)/g, "$1-$2");

  // multiple _ → single _
  name = name.replace(/_+/g, "_");

  // trim _
  name = name.replace(/^_|_$/g, "");

  return name;
}

// ================= EXECUTION =================

if (!fs.existsSync(TARGET_DIR)) {
  console.error("❌ Folder not found:", TARGET_DIR);
  process.exit(1);
}

const files = fs.readdirSync(TARGET_DIR);

console.log("\n=========== FILE RENAME REPORT ===========\n");

files.forEach((file) => {
  if (!file.endsWith(".json")) return;

  const oldPath = path.join(TARGET_DIR, file);
  const slugName = fileNameToSlug(file);
  const newFileName = `${slugName}.json`;
  const newPath = path.join(TARGET_DIR, newFileName);

  if (file === newFileName) {
    console.log(`✔️ Already correct: ${file}`);
    return;
  }

  if (fs.existsSync(newPath)) {
    console.warn(
      `⚠️ Skip (target exists): ${file} → ${newFileName}`
    );
    return;
  }

  fs.renameSync(oldPath, newPath);
  console.log(`🔁 Renamed: ${file} → ${newFileName}`);
});

console.log("\n=========== DONE ===========\n");
