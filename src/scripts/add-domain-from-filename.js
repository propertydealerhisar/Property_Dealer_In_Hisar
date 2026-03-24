const fs = require("fs");
const path = require("path");

// ================= CONFIG =================

// 👇 folder jahan json files hain
const TARGET_FOLDER = path.join(
  __dirname,
  "../content/sub-domain/gurgaon/shop-for-sale"
);

// 👇 parent domain
const PARENT_DOMAIN = "shopforsaleingurgaon.com";

// =========================================

let total = 0;
let updated = 0;

// 🔁 filename → subdomain clean
function fileToSubdomain(fileName) {
  let name = fileName
    .replace(/\.json$/i, "")
    .toLowerCase();

  // remove spaces, underscores
  name = name.replace(/[\s_]+/g, "");

  // keep numbers & hyphen safe
  name = name.replace(/[^a-z0-9-]/g, "");

  return name;
}

// 🔁 process folder
function processFolder(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isFile() && file.endsWith(".json")) {
      updateDomain(fullPath, file);
    }
  }
}

function updateDomain(filePath, fileName) {
  total++;

  try {
    const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const subdomain = fileToSubdomain(fileName);
    const finalDomain = `${subdomain}.${PARENT_DOMAIN}`;

    json.domain = finalDomain;

    fs.writeFileSync(
      filePath,
      JSON.stringify(json, null, 2),
      "utf-8"
    );

    updated++;
    // console.log("✅ Updated:", finalDomain);

  } catch (err) {
    // console.error("❌ Error:", fileName, err.message);
  }
}

// 🚀 run
processFolder(TARGET_FOLDER);

console.log("——————————————");
console.log("Total files:", total);
console.log("Domains updated:", updated);
