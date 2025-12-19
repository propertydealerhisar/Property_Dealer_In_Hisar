const fs = require("fs");
const pathModule = require("path");

// 🔁 JSON FILE jisme services hain
const TARGET_JSON_PATH = pathModule.join(
  __dirname,
  "../content/hisar/to_let_service_in_hisar.json"
);

// ✅ MASTER TITLE → PATH MAPPING
const TITLE_PATH_MAP = {
  "House for Sale in Hisar": "https://houseforsaleinhisar.com",
  "House for Rent in Hisar":"https://houseforrentinhisar.com",
  "Flat for Rent in Hisar": "https://flatsforrentinhisar.com",
  "Flat for Sale in Hisar": "https://flatsforsaleinhisar.com",
  "Shop for Sale in Hisar": "https://shopforsaleinhisar.com",
  "Shop for Rent in Hisar": "https://shopforrentinhisar.com",
  "Plot for Sale in Hisar": "https://plotforsaleinhisar.com",
  "Agriculture Land for Sale in Hisar":
    "https://agriculturelandforsaleinhisar.com",
  "To-Let Service in Hisar": "https://toletserviceinhisar.com",
  "Commercial Property for Sale in Hisar":
    "https://commercialpropertyforsaleinhisar.com",
};

try {
  const rawData = fs.readFileSync(TARGET_JSON_PATH, "utf-8");
  const jsonData = JSON.parse(rawData);

  if (
    !jsonData.servicesSection ||
    !Array.isArray(jsonData.servicesSection.services)
  ) {
    console.log("❌ servicesSection.services nahi mila");
    process.exit(1);
  }

  const notMatchedServices = [];

  jsonData.servicesSection.services =
    jsonData.servicesSection.services.map((service) => {
      const matchedPath = TITLE_PATH_MAP[service.title];

      if (matchedPath) {
        return {
          ...service,
          path: matchedPath,
        };
      } else {
        notMatchedServices.push(service.title);
        return service; // path add nahi hoga
      }
    });

  fs.writeFileSync(
    TARGET_JSON_PATH,
    JSON.stringify(jsonData, null, 2),
    "utf-8"
  );

  console.log("✅ Matching services me path successfully add/update ho gaya");

  if (notMatchedServices.length > 0) {
    console.log("\n⚠️ In services me path add nahi hua (title match nahi mila):");
    notMatchedServices.forEach((title, i) => {
      console.log(`${i + 1}. ${title}`);
    });
  } else {
    console.log("\n🎉 Sabhi services ka title match ho gaya");
  }
} catch (err) {
  console.error("❌ Script error:", err.message);
}
