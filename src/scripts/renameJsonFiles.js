const fs = require("fs");
const path = require("path");

// 🔴 Target folder (yahan JSON files hain)
const TARGET_DIR = path.join(
  __dirname,
  "../content/faridabad"
);

// 🔴 Suffix to add
const SUFFIX = "_in_faridabad";

// Read all files in folder
const files = fs.readdirSync(TARGET_DIR);

files.forEach((file) => {
  // sirf .json files
  if (!file.endsWith(".json")) return;

  // already renamed ho to skip
  if (file.includes(SUFFIX)) {
    console.log(`⏭ Skipped (already renamed): ${file}`);
    return;
  }

  const oldPath = path.join(TARGET_DIR, file);

  const baseName = path.basename(file, ".json");
  const newFileName = `${baseName}${SUFFIX}.json`;
  const newPath = path.join(TARGET_DIR, newFileName);

  fs.renameSync(oldPath, newPath);
  console.log(`✅ Renamed: ${file} → ${newFileName}`);
});

console.log("\n🎉 Done! All JSON files renamed.");
