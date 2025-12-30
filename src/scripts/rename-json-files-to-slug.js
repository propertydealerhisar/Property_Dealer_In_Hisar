const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

// 👇 jis folder ke files rename karni hain
const TARGET_DIR = path.join(
  __dirname,
  "../content/sub-domain/faridabad/shop-for-rent"
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

  // already perfect
  if (file === newFileName) {
    console.log(`✔️ Already correct: ${file}`);
    return;
  }

  // 🔥 CASE-ONLY DIFFERENCE CHECK (WINDOWS FIX)
  if (fs.existsSync(newPath)) {
    if (oldPath.toLowerCase() !== newPath.toLowerCase()) {
      console.warn(
        `⚠️ Skip (real conflict): ${file} → ${newFileName}`
      );
      return;
    }
    // else: same file, case-only difference → allow rename
  }

  // 🔁 TEMP RENAME (MANDATORY FOR WINDOWS)
  const tempPath = oldPath + ".tmp";

  fs.renameSync(oldPath, tempPath);
  fs.renameSync(tempPath, newPath);

  console.log(`🔁 Renamed: ${file} → ${newFileName}`);
});


console.log("\n=========== DONE ===========\n");
