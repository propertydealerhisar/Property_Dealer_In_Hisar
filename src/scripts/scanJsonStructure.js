const fs = require("fs");
const path = require("path");

// ========= CONFIG =========

// 👇 reference (master) JSON file
const MASTER_JSON_PATH = path.join(
  __dirname,
  "../content/sub-domain/hisar/house-for-sale/azadNagar.json"
);

// 👇 folder jisme sab json scan honge
const GRAND_PARENT_FOLDER = path.join(
  __dirname,
  "../content/sub-domain/hisar"
);

// ===========================

// helper: get type
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

// 🔍 build schema map
function extractSchema(obj, prefix = "", map = {}) {
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const type = getType(obj[key]);

    map[fullKey] = type;

    if (type === "object") {
      extractSchema(obj[key], fullKey, map);
    }
  }
  return map;
}

// 🔁 recursive walk
function walk(dir, callback) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      walk(fullPath, callback);
    }

    if (item.isFile() && item.name.endsWith(".json")) {
      callback(fullPath);
    }
  }
}

// 🚀 MAIN
console.log("📘 Loading master JSON...");
const masterJson = JSON.parse(fs.readFileSync(MASTER_JSON_PATH, "utf-8"));
const masterSchema = extractSchema(masterJson);

console.log("🔍 Scanning files...\n");

walk(GRAND_PARENT_FOLDER, (filePath) => {
  if (filePath === MASTER_JSON_PATH) return;

  const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const schema = extractSchema(json);

  let hasIssue = false;

  console.log(`📄 File: ${filePath}`);

  // ❌ missing or type mismatch
  for (const key in masterSchema) {
    if (!(key in schema)) {
      hasIssue = true;
      console.log(
        `  ❌ MISSING FIELD: ${key} (expected ${masterSchema[key]})`
      );
    } else if (schema[key] !== masterSchema[key]) {
      hasIssue = true;
      console.log(
        `  ❌ TYPE MISMATCH: ${key} (expected ${masterSchema[key]}, found ${schema[key]})`
      );
    }
  }

  // ➕ extra fields
  for (const key in schema) {
    if (!(key in masterSchema)) {
      hasIssue = true;
      console.log(`  ➕ EXTRA FIELD: ${key} (${schema[key]})`);
    }
  }

  if (!hasIssue) {
    console.log("  ✅ MATCHES MASTER STRUCTURE");
  }

  console.log(""); // gap
});

console.log("🎉 Scan complete");
