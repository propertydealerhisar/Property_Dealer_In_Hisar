const fs = require("fs");
const path = require("path");

// ===== USER INPUT =====
// give path like ../../data/propertyCards.json
const FILE_PATH = path.resolve(__dirname, "../scripts/all-property-cards.json");

// value you want to add
const TYPE_VALUE = "";
// ======================

try {
  // read file
  const fileData = fs.readFileSync(FILE_PATH, "utf-8");
  const jsonData = JSON.parse(fileData);

  // ensure it's an array
  if (!Array.isArray(jsonData)) {
    console.error("❌ JSON file must contain an array of objects");
    process.exit(1);
  }

  // add type field to each object
  const updatedData = jsonData.map((obj) => {
    if (typeof obj === "object" && obj !== null) {
      return {
        ...obj,
        type: TYPE_VALUE,
      };
    }
    return obj;
  });

  // write back to same file
  fs.writeFileSync(
    FILE_PATH,
    JSON.stringify(updatedData, null, 2),
    "utf-8"
  );

  console.log("✅ type field added successfully");
} catch (err) {
  console.error("❌ Error:", err.message);
}
