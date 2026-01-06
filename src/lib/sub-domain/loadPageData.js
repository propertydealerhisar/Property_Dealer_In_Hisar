const fs = require("fs");
const path = require("path");

const index = require("./sub-domains.json");

function loadPageData(host) {
  if (!host) return null;

  const relativePath = index[host];
  if (!relativePath) return null;

  const fullPath = path.join(
    process.cwd(),
    "src/content/sub-domain",
    relativePath
  );

  if (!fs.existsSync(fullPath)) return null;

  return JSON.parse(fs.readFileSync(fullPath, "utf-8"));
}

module.exports = { loadPageData };
