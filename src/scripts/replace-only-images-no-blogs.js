const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

// 👇 parent folder ka path
const PARENT_FOLDER = path.join(
  __dirname,
  "../content/main-domain/faridabad"
);

// 👇 SAME images jo sab JSON me lagengi
const IMAGES = {
  heroBackgrounds: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
  ],
  featureImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  whyChooseImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
};

// =========================================

let total = 0;
let updated = 0;

// 🔁 recursive folder walk
function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) walk(fullPath);

    if (item.isFile() && item.name.endsWith(".json")) {
      updateImages(fullPath);
    }
  }
}

function updateImages(filePath) {
  total++;

  try {
    const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // ✅ HERO BACKGROUND IMAGES
    if (json.heroSection?.backgroundImages) {
      json.heroSection.backgroundImages = IMAGES.heroBackgrounds;
    }

    // ✅ FEATURE IMAGE
    if (json.featureWithImage?.image?.src) {
      json.featureWithImage.image.src = IMAGES.featureImage;
    }

    // ✅ WHY CHOOSE US IMAGE
    if (json.whyChooseUs?.image?.src) {
      json.whyChooseUs.image.src = IMAGES.whyChooseImage;
    }

    fs.writeFileSync(
      filePath,
      JSON.stringify(json, null, 2),
      "utf-8"
    );

    updated++;
    console.log("🖼️ Images updated:", filePath);

  } catch (err) {
    console.error("❌ Error:", filePath, err.message);
  }
}

// 🚀 run
walk(PARENT_FOLDER);

console.log("——————————————");
console.log("Total JSON files:", total);
console.log("Files updated:", updated);
