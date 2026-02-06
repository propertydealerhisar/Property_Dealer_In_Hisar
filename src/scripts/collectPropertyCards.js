const fs = require("fs");
const path = require("path");

// ===== CONFIG =====
const GRAND_PARENT_FOLDER = path.resolve(
  __dirname,
  "../content/sub-domain/hisar"
);

const OUTPUT_FILE = path.join(__dirname, "all-property-cards.json");
// ==================

let collectedCards = [];

// recursive folder scan
function scanFolder(folderPath) {
  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const stat = fs.statSync(fullPath);

    // agar folder hai
    if (stat.isDirectory()) {
      scanFolder(fullPath);
      return;
    }

    // sirf json files
    if (stat.isFile() && item.endsWith(".json")) {
      try {
        const data = require(fullPath);

        // check properties + propertyCards
        if (
          data &&
          data.domain &&
          data.properties &&
          Array.isArray(data.properties.propertyCards)
        ) {
          const domainValue = data.domain;

          // har card me domain add karo
          const updatedCards = data.properties.propertyCards.map((card) => ({
            ...card,
            domain: domainValue,
          }));

          collectedCards.push(...updatedCards);
        }
      } catch (err) {
        console.log("❌ Error reading:", fullPath);
      }
    }
  });
}

// start scanning
scanFolder(GRAND_PARENT_FOLDER);

// write output
fs.writeFileSync(
  OUTPUT_FILE,
  JSON.stringify(collectedCards, null, 2),
  "utf-8"
);

console.log("✅ Done");
console.log("📦 Total propertyCards collected:", collectedCards.length);
