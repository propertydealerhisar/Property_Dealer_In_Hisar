const fs = require("fs");
const path = require("path");

// 🔴 Folder ka naam (relative to this script)
const TARGET_FOLDER = path.join(
  __dirname,
  "../content/sub-domain/hisar/commercial-property-for-sale" // 👈 yahan apna folder path do
);
// 🔴 Files ke names (WITHOUT .json)
const FILE_NAMES = [
  "sector_21p",
  "sector_14",
  "sector_33",
  "sector_15",
  "sector_16-17",
  "sector_9-11",
  "urban_estate",
  "model_town",
  "pla_aera",
  "sector_13",
  "sector_1-4"
];

// ✅ Ensure folder exists
if (!fs.existsSync(TARGET_FOLDER)) {
  fs.mkdirSync(TARGET_FOLDER, { recursive: true });
  console.log(`📁 Folder created: ${TARGET_FOLDER}`);
}

// ✅ Create files
FILE_NAMES.forEach((name) => {
  const filePath = path.join(TARGET_FOLDER, `${name}.json`);

  if (fs.existsSync(filePath)) {
    console.log(`⏭ File already exists, skipped: ${name}.json`);
    return;
  }

  fs.writeFileSync(filePath, JSON.stringify({}, null, 2), "utf-8");
  console.log(`✅ File created: ${name}.json`);
});

console.log("\n🎉 Done! All files processed.");
