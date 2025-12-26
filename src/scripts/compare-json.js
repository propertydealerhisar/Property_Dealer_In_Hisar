const fs = require("fs");
const path = require("path");

// ============ CONFIG ============

// 👇 yahan apni 2 JSON files ke path do
const FILE_A = path.join(__dirname, "../config/sub-domains/hisar.json");
const FILE_B = path.join(__dirname, "../lib/all-domains.json");
// ===============================

function loadJSON(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error("❌ File not found:", filePath);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

const jsonA = loadJSON(FILE_A);
const jsonB = loadJSON(FILE_B);

// agar array hai to direct use, warna object ke values compare honge
const valuesA = Array.isArray(jsonA)
  ? jsonA
  : Object.values(jsonA);

const valuesB = Array.isArray(jsonB)
  ? jsonB
  : Object.values(jsonB);

// unique differences
const onlyInA = valuesA.filter((v) => !valuesB.includes(v));
const onlyInB = valuesB.filter((v) => !valuesA.includes(v));

console.log("\n================ JSON COMPARISON REPORT ================\n");

console.log("📄 File A:", FILE_A);
console.log("📄 File B:", FILE_B, "\n");

if (onlyInA.length) {
  console.log("🟥 Values ONLY in File A:");
  onlyInA.forEach((v) => console.log(" -", v));
  console.log();
} else {
  console.log("✅ No unique values in File A\n");
}

if (onlyInB.length) {
  console.log("🟦 Values ONLY in File B:");
  onlyInB.forEach((v) => console.log(" -", v));
  console.log();
} else {
  console.log("✅ No unique values in File B\n");
}

console.log("=======================================================\n");
