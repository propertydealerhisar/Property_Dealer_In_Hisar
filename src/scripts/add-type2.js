const fs = require("fs");
const path = require("path");

// ===== USER INPUT =====
// JSON file path (array of objects)
const FILE_PATH = path.resolve(__dirname, "../scripts/all-property-cards.json");

// domain to match
const TARGET_DOMAIN = "www.shopforrentinhisar.com";

// value to set in type field
const TYPE_VALUE = "Shop for Rent in Hisar";
// ======================

try {
  const fileData = fs.readFileSync(FILE_PATH, "utf-8");
  const jsonData = JSON.parse(fileData);

  if (!Array.isArray(jsonData)) {
    console.error("❌ JSON file must contain an array of objects");
    process.exit(1);
  }

  let updatedCount = 0;

  const updatedData = jsonData.map((obj) => {
    if (
      obj &&
      typeof obj === "object" &&
      obj.domain === TARGET_DOMAIN
    ) {
      updatedCount++;
      return {
        ...obj,
        type: TYPE_VALUE,
      };
    }
    return obj;
  });

  fs.writeFileSync(
    FILE_PATH,
    JSON.stringify(updatedData, null, 2),
    "utf-8"
  );

  console.log("✅ Done");
  console.log("🧾 Domain matched:", TARGET_DOMAIN);
  console.log("✏️ Objects updated:", updatedCount);
} catch (err) {
  console.error("❌ Error:", err.message);
}
