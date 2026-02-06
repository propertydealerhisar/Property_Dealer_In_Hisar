const fs = require("fs");
const path = require("path");

// ======= RELATIVE PATH HERE =======
const GRANDPARENT_PATH = path.resolve(__dirname, "../../src/content/sub-domain/gurgaon");

// slug generator
function makeSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

// domain fixer
function fixDomain(domain) {
  const parts = domain.split(".");
  if (parts.length > 2) {
    return "www." + parts.slice(1).join(".");
  }
  return domain;
}

// process JSON
function processJson(filePath) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // domain update
    if (data.domain) {
      data.domain = fixDomain(data.domain);
    }

    // slug add
    if (data.area) {
      data.slug = makeSlug(data.area);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("✅ Updated:", filePath);
  } catch (err) {
    console.error("❌ Error:", filePath, err.message);
  }
}

// scan folders
function scan(rootPath) {
  if (!fs.existsSync(rootPath)) return;

  const items = fs.readdirSync(rootPath);

  items.forEach((item) => {
    const fullPath = path.join(rootPath, item);

    if (fs.statSync(fullPath).isDirectory()) {
      scan(fullPath);
    } else if (item.endsWith(".json")) {
      processJson(fullPath);
    }
  });
}

// run
console.log("🔍 Scanning:", GRANDPARENT_PATH);
scan(GRANDPARENT_PATH);
console.log("🎉 Done");
