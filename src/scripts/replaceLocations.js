const fs = require("fs");
const path = require("path");

// 🔴 FOLDER jisme JSON files hain
const TARGET_DIR = path.join(
  __dirname,
  "../content/sub-domain/hisar/house-for-sale"
);
// 🔴 New locations array (fixed)
const NEW_LOCATIONS = [
  { title: "House For Sale", path: "/", icon: "Home" },
  { title: "House For Sent", path: "/", icon: "Key" },
  { title: "Flat For Sale", path: "/", icon: "Building2" },
  { title: "Flat For Rent", path: "/", icon: "Building" },
  { title: "Shop For Rent", path: "/", icon: "Store" },
  { title: "Shop For Sale", path: "/", icon: "Store" },
  { title: "Plot For Sale", path: "/", icon: "Landmark" },
  { title: "Agriculture Land For Sale", path: "/", icon: "Tractor" },
  { title: "To-Let Service", path: "/", icon: "Handshake" },
  { title: "Commercial Property For Sale", path: "/", icon: "BriefcaseBusiness" }
];

// 🔹 Read all files
const files = fs.readdirSync(TARGET_DIR);

files.forEach((file) => {
  if (!file.endsWith(".json")) return;

  const filePath = path.join(TARGET_DIR, file);
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // 🔹 Safety check
  if (
    jsonData.locationsSection &&
    Array.isArray(jsonData.locationsSection.locations)
  ) {
    jsonData.locationsSection.locations = NEW_LOCATIONS;

    fs.writeFileSync(
      filePath,
      JSON.stringify(jsonData, null, 2),
      "utf-8"
    );

    console.log(`✅ Updated locations in: ${file}`);
  } else {
    console.log(`⚠ Skipped (locationsSection missing): ${file}`);
  }
});

console.log("\n🎉 Done! All matching JSON files updated.");
