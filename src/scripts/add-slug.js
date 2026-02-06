const fs = require("fs");
const path = require("path");

// ===== RELATIVE PATH =====
const GRANDPARENT_PATH = path.resolve(__dirname, "../../src/content/sub-domain/faridabad");

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

// reorder object to place slug after area
function reorderWithSlug(data) {
  const newObj = {};
  const slugValue = data.slug || makeSlug(data.area);

  Object.keys(data).forEach((key) => {
    if (key === "slug") return; // skip old slug

    newObj[key] = data[key];

    if (key === "area") {
      newObj.slug = slugValue; // insert slug just after area
    }
  });

  return newObj;
}

// process json
function processJson(filePath) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // domain update
    if (data.domain) {
      data.domain = fixDomain(data.domain);
    }

    // ensure slug + reorder
    if (data.area) {
      const updatedData = reorderWithSlug(data);
      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
      console.log("✅ Fixed order:", filePath);
    }
  } catch (err) {
    console.error("❌ Error:", filePath, err.message);
  }
}

// recursive scan
function scan(dir) {
  if (!fs.existsSync(dir)) return;

  fs.readdirSync(dir).forEach((item) => {
    const fullPath = path.join(dir, item);

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
