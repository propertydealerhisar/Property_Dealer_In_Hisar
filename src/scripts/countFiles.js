const fs = require("fs");
const path = require("path");

// ⚠️ path ko script ki location se resolve karna
const FOLDER_PATH = path.resolve(
  __dirname,
  "../content/main-domain/faridabad/"
);

if (!fs.existsSync(FOLDER_PATH)) {
  console.error("Folder not found:", FOLDER_PATH);
  process.exit(1);
}

const files = fs
  .readdirSync(FOLDER_PATH)
  .filter((file) => file.endsWith(".json"));

console.log("Total JSON files:", files.length);
