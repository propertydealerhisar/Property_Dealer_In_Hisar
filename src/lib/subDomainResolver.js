import fs from "fs";
import path from "path";

/**
 * 🔒 DOMAIN → CITY FOLDER MAP
 * 👉 yahan tum khud folder ka naam control karoge
 */
const DOMAIN_CITY_FOLDER_MAP = {
  hisar: "hisar",
  gurgaon: "gurgaon",
  faridabad: "faridabad",
};

/**
 * Domain normalize
 * - www. preserve
 * - lowercase + trim
 */
function normalizeDomain(domain) {
  return domain?.toLowerCase().trim();
}

/**
 * 🔥 City folder extract using MAP
 * Rule:
 * - domain ke andar map ki key mile
 * - value = actual folder name
 */
function getCityFolderFromDomain(domain) {
  const cleanDomain = normalizeDomain(domain);

  for (const cityKey in DOMAIN_CITY_FOLDER_MAP) {
    if (cleanDomain.includes(cityKey)) {
      return DOMAIN_CITY_FOLDER_MAP[cityKey]; // ✅ folder name
    }
  }

  return null;
}

/**
 * Alphabetically first JSON file from folder
 */
function getFirstJsonFile(folderPath) {
  const files = fs
    .readdirSync(folderPath)
    .filter(f => f.endsWith(".json"))
    .sort();

  if (!files.length) return null;

  return path.join(folderPath, files[0]);
}

/**
 * 🔥 MAIN RESOLVER (FINAL)
 */
export function resolveSubDomainData({ area, domain }) {
  const reqDomain = normalizeDomain(domain);

  // 👉 city folder tumhare map se aayega
  const cityFolder = getCityFolderFromDomain(reqDomain);
  
  if (!cityFolder) return null;

  const cityPath = path.join(
    process.cwd(),
    "src/content/sub-domain",
    cityFolder
  );

  if (!fs.existsSync(cityPath)) return null;

  const categoryFolders = fs
    .readdirSync(cityPath)
    .filter(folder =>
      fs.statSync(path.join(cityPath, folder)).isDirectory()
    );

  for (const category of categoryFolders) {
    const categoryPath = path.join(cityPath, category);

    // 👉 STEP 1: FIRST file ka domain check
    const firstFilePath = getFirstJsonFile(categoryPath);
    if (!firstFilePath) continue;

    const firstJson = JSON.parse(
      fs.readFileSync(firstFilePath, "utf-8")
    );

    if (normalizeDomain(firstJson.domain) !== reqDomain) {
      // ❌ folder skip
      continue;
    }

    // 👉 STEP 2: sirf isi folder me scan
    const jsonFiles = fs
      .readdirSync(categoryPath)
      .filter(f => f.endsWith(".json"));

    for (const file of jsonFiles) {
      const filePath = path.join(categoryPath, file);
      const json = JSON.parse(
        fs.readFileSync(filePath, "utf-8")
      );

      const slug =
        json.slug || file.replace(".json", "");

      if (slug === area) {
        return json; // ✅ FINAL DATA
      }
    }
  }

  return null;
}
