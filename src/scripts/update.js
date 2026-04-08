const fs = require("fs");
const path = require("path");

// ✅ Folder Path (same pattern jo tu use kar raha hai)
const FOLDER_PATH = path.resolve(
  __dirname,
  "../content/main-domain/hisar/"
);

// ❌ Agar folder nahi mila
if (!fs.existsSync(FOLDER_PATH)) {
  console.error("❌ Folder not found:", FOLDER_PATH);
  process.exit(1);
}

// 📂 JSON files read
const files = fs
  .readdirSync(FOLDER_PATH)
  .filter((file) => file.endsWith(".json"));

console.log("📁 Total JSON files:", files.length);

// 🔁 Process each file
files.forEach((file) => {
  const filePath = path.join(FOLDER_PATH, file);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (
      data.footer &&
      data.footer.links &&
      Array.isArray(data.footer.links.items)
    ) {
      data.footer.links.items = data.footer.links.items.map((item) => {
        let area = item.area;
        let slug = item.slug;

        // ✅ Area update
        if (!area.toLowerCase().includes("hisar")) {
          area = area.trim() + " Hisar";
        }

        // ✅ Slug update
        if (!slug.toLowerCase().includes("hisar")) {
          slug = slug.trim() + "-hisar";
        }

        return {
          ...item,
          area,
          slug,
        };
      });
    }

    // 💾 Save file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log(`✅ Updated: ${file}`);
  } catch (err) {
    console.error(`❌ Error in ${file}:`, err.message);
  }
});

console.log("🎯 All files processed!");