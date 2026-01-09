const fs = require("fs");
const path = require("path");

// 🔹 CHANGE THIS: parent folder path
const PARENT_FOLDER = path.resolve(
  __dirname,
  "../content/main-domain/gurgaon"
);// 🔹 NEW SERVICES ARRAY (PASTE DATA HERE)
const NEW_SERVICES = [
  {
      "title": "Flats for Rent in Gurgaon",
      "description": "Discover premier rental flats in prime Gurgaon locations providing immediate access to essential urban amenities and excellent transport links.",
      "icon": "FaHome",
      "path": "https://flatsforrentingurgaon.com"
    },
    {
      "title": "Flats for Sale in Gurgaon",
      "description": "Secure your ideal investment with a vast selection of ready-to-move-in flats available for purchase across burgeoning Gurgaon neighborhoods.",
      "icon": "FaDollarSign",
      "path": "https://flatsforsaleingurgaon.com"
    },
    {
      "title": "Plots for Sale in Gurgaon",
      "description": "Explore lucrative opportunities to acquire residential and commercial plots ready for immediate development in high-growth corridors of Gurgaon.",
      "icon": "FaLandmark",
      "path": "https://plotsforsaleingurgaon.com"
    },
    {
      "title": "Apartments for Rent in Gurgaon",
      "description": "Browse sophisticated apartment listings offering premium features and maintenance services ensuring a comfortable and luxurious living experience.",
      "icon": "FaBuilding",
      "path": "https://apartmentsforrentingurgaon.com"
    },
    {
      "title": "Rent House in Gurgaon",
      "description": "Find the perfect independent house for rent ensuring privacy space and dedicated amenities suitable for large families seeking comfort.",
      "icon": "FaKey",
      "path": "https://renthouseingurgaon.com"
    },
    {
      "title": "Buy House in Gurgaon",
      "description": "Navigate the market to purchase freehold houses providing long-term security substantial appreciation potential and bespoke customization options.",
      "icon": "FaMoneyBillWave",
      "path": "https://buyhouseingurgaon.com"
    },
    {
      "title": "Affordable Apartments in Gurgaon",
      "description": "Access budget-friendly modern apartments offering excellent value without compromising on quality connectivity or essential community facilities.",
      "icon": "FaTags",
      "path": "https://affordableapartmentsingurgaon.com"
    },
    {
      "title": "House for Sale in Gurgaon",
      "description": "Exclusive listings of independent houses available for sale featuring spacious layouts prime locations and robust structural integrity guaranteed.",
      "icon": "FaHome",
      "path": "https://houseforsaleingurgaon.com"
    },
    {
      "title": "Residential Property in Gurgaon",
      "description": "Comprehensive catalog of residential assets including villas flats and houses designed to meet diverse lifestyle needs and investment goals.",
      "icon": "FaClipboardList",
      "path": "https://residentialpropertyingurgaon.com"
    },
    {
      "title": "Affordable House in Gurgaon",
      "description": "Specialized collection of reasonably priced houses designed for first-time buyers seeking quality construction and established neighborhood settings.",
      "icon": "FaPiggyBank",
      "path": "https://affordablehouseingurgaon.com"
    },
    {
      "title": "Shop for Rent in Gurgaon",
      "description": "Secure high-visibility commercial retail space for rent ensuring maximum customer footfall and immediate business operational readiness in Gurgaon.",
      "icon": "FaStore",
      "path": "https://shopforrentingurgaon.com"
    },
    {
      "title": "Real Estate Agents in Gurgaon",
      "description": "Connect with experienced local property advisors providing personalized guidance expert negotiations and seamless transaction management for clients.",
      "icon": "FaUserTie",
      "path": "https://realestateagentsingurgaon.com"
    },
    {
      "title": "2 BHK Flats for Sale in Gurgaon",
      "description": "Dedicated inventory of premium 2 BHK flats ideal for small families or young professionals seeking compact efficient and modern living spaces.",
      "icon": "FaBed",
      "path": "https://2bhkflatsforsaleingurgaon.com"
    },
    {
      "title": "Residential Projects in Gurgaon",
      "description": "Explore upcoming and ongoing new construction residential developments offering modern amenities innovative design and future investment potential.",
      "icon": "FaHardHat",
      "path": "https://residentialprojectsingurgaon.com"
    },
    {
      "title": "Shop for Sale in Gurgaon",
      "description": "Acquire ownership of commercial retail units situated strategically in bustling markets ensuring high returns on investment and business growth.",
      "icon": "FaShoppingCart",
      "path": "https://shopforsaleingurgaon.com"
    },
    {
      "title": "Luxury Apartments in Gurgaon",
      "description": "Elite collection of upscale apartments boasting bespoke interiors high-end facilities and exclusive access to world-class community amenities.",
      "icon": "FaGem",
      "path": "https://luxuryapartmentsingurgaon.com"
    },
    {
      "title": "Office Space for Rent in Gurgaon",
      "description": "Lease professional commercial office environments offering flexible layouts excellent connectivity and state-of-the-art infrastructure ready for business.",
      "icon": "FaBriefcase",
      "path": "https://officespaceforrentingurgaon.com"
    },
    {
      "title": "Studio Apartments in Gurgaon",
      "description": "Compact efficient studio living spaces perfect for singles or students prioritizing location minimal maintenance and convenient urban access.",
      "icon": "FaGlobe",
      "path": "https://studioapartmentsingurgaon.com"
    },
    {
      "title": "Plot in Gurgaon",
      "description": "Invest in strategically located open land parcels offering flexibility for custom construction catering to specific long-term development plans.",
      "icon": "FaMapMarkedAlt",
      "path": "https://plotingurgaon.in"
    }
];

// 🔁 Recursive walk through folders
function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      walk(fullPath);
    }

    if (item.isFile() && item.name.endsWith(".json")) {
      updateFile(fullPath);
    }
  }
}

// 🔧 Replace servicesSection.services
function updateFile(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(raw);

    if (json && json.servicesSection && Array.isArray(json.servicesSection.services)) {
      json.servicesSection.services = NEW_SERVICES;

      fs.writeFileSync(
        filePath,
        JSON.stringify(json, null, 2),
        "utf8"
      );

      console.log(`✅ Updated: ${filePath}`);
    }
  } catch (err) {
    console.error(`❌ Failed: ${filePath} → ${err.message}`);
  }
}

// ▶️ RUN
console.log("🚀 Updating servicesSection.services in all JSON files...");
walk(PARENT_FOLDER);
console.log("🎉 Done!");
