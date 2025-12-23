const fs = require("fs");
const path = require("path");

// Load JSON files
const json1 = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../content/sub-domain/hisar/house-for-sale/azadNagar.json"),
    "utf-8"
  )
);

const json2 = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../content/sub-domain/hisar/house-for-sale/bankColony.json"),
    "utf-8"
  )
);

function getType(val) {
  if (Array.isArray(val)) return "array";
  if (val === null) return "null";
  return typeof val;
}

function compareStructure(obj1, obj2, pathKey = "root", errors = []) {
  const type1 = getType(obj1);
  const type2 = getType(obj2);

  if (type1 !== type2) {
    errors.push(
      `❌ Type mismatch at "${pathKey}" → expected ${type1}, found ${type2}`
    );
    return errors;
  }

  if (type1 === "array") {
    if (obj1.length === 0 || obj2.length === 0) return errors;
    compareStructure(obj1[0], obj2[0], `${pathKey}[0]`, errors);
    return errors;
  }

  if (type1 === "object") {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    for (const key of keys1) {
      if (!keys2.includes(key)) {
        errors.push(`❌ Missing key at "${pathKey}.${key}"`);
      } else {
        compareStructure(
          obj1[key],
          obj2[key],
          `${pathKey}.${key}`,
          errors
        );
      }
    }

    for (const key of keys2) {
      if (!keys1.includes(key)) {
        errors.push(`⚠ Extra key at "${pathKey}.${key}"`);
      }
    }
  }

  return errors;
}

// Run
const errors = compareStructure(json1, json2);

if (errors.length === 0) {
  console.log("✅ Both JSON files have EXACT SAME structure");
} else {
  console.log("❌ Structure differences found:\n");
  errors.forEach((e, i) => console.log(`${i + 1}. ${e}`));
}
