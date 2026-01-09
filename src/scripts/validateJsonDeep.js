const fs = require("fs");
const path = require("path");

// 🔴 GRAND PARENT FOLDER (yahin se scan start hoga)
const ROOT_PATH = path.resolve(
  __dirname,
  "../content/sub-domain/gurgaon"   // 👈 apna grand parent path yahan set karo
);

// ---------------- UTILS ----------------

// recursive folder scan
function walkDir(dir, fileList = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (item.isFile() && item.name.endsWith(".json")) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

// deep JSON validation
function checkEmptyFields(value, currentPath) {
  // string check
  if (typeof value === "string") {
    if (value.trim() === "") {
      return currentPath;
    }
    return null;
  }

  // array check
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const result = checkEmptyFields(
        value[i],
        `${currentPath}[${i}]`
      );
      if (result) return result;
    }
    return null;
  }

  // object check
  if (typeof value === "object" && value !== null) {
    for (const key of Object.keys(value)) {
      const result = checkEmptyFields(
        value[key],
        `${currentPath}.${key}`
      );
      if (result) return result;
    }
  }

  return null;
}

// ---------------- MAIN ----------------

if (!fs.existsSync(ROOT_PATH)) {
  console.error("❌ Root folder not found:", ROOT_PATH);
  process.exit(1);
}

const jsonFiles = walkDir(ROOT_PATH);

console.log(`🔍 Scanning ${jsonFiles.length} JSON files...\n`);

for (const filePath of jsonFiles) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(raw);

    const result = checkEmptyFields(json, "root");

    if (result) {
      console.error("❌ EMPTY FIELD FOUND!");
      console.error("📂 Folder:", path.dirname(filePath));
      console.error("📄 File:", path.basename(filePath));
      console.error("🧩 Field Path:", result);
      process.exit(1); // ⛔ STOP SCRIPT
    }

  } catch (err) {
    console.error("❌ JSON ERROR");
    console.error("📄 File:", filePath);
    console.error(err.message);
    process.exit(1);
  }
}

console.log("✅ All JSON files are valid. No empty fields found.");
