const fs = require("fs");
const path = require("path");

// 🔥 script ki directory nikaal lo (CommonJS way)
const BASE_DIR = __dirname;

// ✅ exact folder jahan JSON files hain
const TARGET_DIR = path.join(
  BASE_DIR,
  "../content/sub-domain/hisar/to-let-services"
);

// 👉 yahin mapping control rahega
const DOMAIN_MAP = {
  "azad_nagar.json":   "azadnagar.toletserviceinhisar.com",
  "bank_colony.json":  "bankcolony.toletserviceinhisar.com",
  "global_space.json": "globalspace.toletserviceinhisar.com",
  "kamiri_road.json":  "kamiriroad.toletserviceinhisar.com",
  "krishna_nagar.json":"krishnanagar.toletserviceinhisar.com",
  "marvel_city.json":  "marvelcity.toletserviceinhisar.com",
  "model_town.json":   "modeltown.toletserviceinhisar.com",
  "pla_aera.json":     "pla.toletserviceinhisar.com",

  "sector_1-4.json":   "sector1-4.toletserviceinhisar.com",
  "sector_9-11.json":  "sector9-11.toletserviceinhisar.com",
  "sector_13.json":    "sector13.toletserviceinhisar.com",
  "sector_14.json":    "sector14.toletserviceinhisar.com",
  "sector_15.json":    "sector15.toletserviceinhisar.com",
  "sector_16-17.json": "sector16-17.toletserviceinhisar.com",
  "sector_21p.json":   "sector21p.toletserviceinhisar.com",
  "sector_33.json":    "sector33.toletserviceinhisar.com",

  "urban_estate.json": "urbanestate.toletserviceinhisar.com"
};











Object.entries(DOMAIN_MAP).forEach(([fileName, domain]) => {
  const filePath = path.join(TARGET_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    console.warn("⚠️ File not found:", filePath);
    return;
  }

  const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  json.domain = domain;

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

  console.log(`✅ ${fileName} → ${domain}`);
});

console.log("🎯 All domains updated successfully!");
