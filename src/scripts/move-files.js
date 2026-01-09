const fs = require("fs");
const path = require("path");

// ======= YAHAN PATH SET KARO =======
const SOURCE_DIR = path.join(__dirname, "../../../../test/domain/output");
const DEST_DIR = path.join(__dirname, "../content/main-domain/gurgaon");
// ===================================
// agar destination folder nahi hai to bana do
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// source folder ki saari files read karo
const files = fs.readdirSync(SOURCE_DIR);

files.forEach((file) => {
  const sourcePath = path.join(SOURCE_DIR, file);
  const destPath = path.join(DEST_DIR, file);

  // sirf files move karo (folder skip)
  if (fs.lstatSync(sourcePath).isFile()) {
    fs.renameSync(sourcePath, destPath);
    console.log(`Moved: ${file}`);
  }
});

console.log("✅ Saari files successfully move ho gayi");
