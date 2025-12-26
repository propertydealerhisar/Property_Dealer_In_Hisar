const fs = require("fs");
const path = require("path");

// 🔴 YAHAN SIRF GRANDPARENT FOLDER PATH DO
const GRAND_PARENT_DIR = path.join(
  __dirname,
  "../content/sub-domain/hisar"
);

// ❌ invalid domains jo allowed nahi hain
const INVALID_DOMAINS = ["www.abc.com", "www.paras.com"];

// report containers
let totalFiles = 0;
let foldersScanned = new Set();
let domains = new Map(); // domain -> [file paths]
let missingDomainFiles = [];
let invalidDomainFiles = [];

function scanDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach((item) => {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      foldersScanned.add(dir);
      scanDirectory(fullPath);
    }

    if (item.isFile() && item.name.endsWith(".json")) {
      totalFiles++;

      const data = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
      const domain = data.domain;

      // ❌ domain missing
      if (!domain) {
        missingDomainFiles.push(fullPath);
        return;
      }

      // ❌ invalid domain
      if (INVALID_DOMAINS.includes(domain)) {
        invalidDomainFiles.push({ file: fullPath, domain });
      }

      // ✅ collect domains
      if (!domains.has(domain)) {
        domains.set(domain, []);
      }
      domains.get(domain).push(fullPath);
    }
  });
}

// ▶️ start scan
scanDirectory(GRAND_PARENT_DIR);

// 🔍 find duplicate domains
const duplicateDomains = [];
domains.forEach((files, domain) => {
  if (files.length > 1) {
    duplicateDomains.push({ domain, files });
  }
});

// 📊 REPORT
console.log("\n================ DOMAIN AUDIT REPORT ================\n");

console.log("📁 Grandparent Folder:");
console.log(GRAND_PARENT_DIR, "\n");

console.log("📂 Total Folders Scanned:", foldersScanned.size);
console.log("📄 Total JSON Files:", totalFiles);
console.log("🌐 Total Unique Domains:", domains.size, "\n");

// ❌ missing domain
if (missingDomainFiles.length) {
  console.log("❌ Files with MISSING domain field:");
  missingDomainFiles.forEach((f) => console.log(" -", f));
  console.log();
} else {
  console.log("✅ No missing domain fields\n");
}

// ❌ invalid domains
if (invalidDomainFiles.length) {
  console.log("❌ Files with INVALID domain (abc / paras):");
  invalidDomainFiles.forEach((i) =>
    console.log(` - ${i.file} → ${i.domain}`)
  );
  console.log();
} else {
  console.log("✅ No invalid domains found\n");
}

// ⚠️ duplicate domains
if (duplicateDomains.length) {
  console.log("⚠️ DUPLICATE DOMAINS FOUND:");
  duplicateDomains.forEach((d) => {
    console.log(`\n🌐 ${d.domain}`);
    d.files.forEach((f) => console.log(" -", f));
  });
  console.log();
} else {
  console.log("✅ No duplicate domains\n");
}

console.log("================ END OF REPORT ================\n");
