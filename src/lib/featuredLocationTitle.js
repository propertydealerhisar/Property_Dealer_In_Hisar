// lib/featuredLocationTitle.js

/*
export const FEATURED_LOCATION_TITLES = {
  "agriculturelandforsaleinhisar.com": "Popular Locations for Agriculture Land for Sale in Hisar",
  "commercialpropertyforsaleinhisar.com": "Popular Locations for Commercial Property for Sale in Hisar",
  "flatsforrentinhisar.com": "Popular Locations for Flats for Rent in Hisar",
  "flatsforsaleinhisar.com": "Popular Locations for Flats for Sale in Hisar",
  "houseforrentinhisar.com": "Popular Locations for House for Rent in Hisar",
  "houseforsaleinhisar.com": "Popular Locations for House for Sale in Hisar",
  "plotforsaleinhisar.com": "Popular Locations for Plot for Sale in Hisar",
  "shopforrentinhisar.com": "Popular Locations for Shop for Rent in Hisar",
  "shopforsaleinhisar.com": "Popular Locations for Shop for Sale in Hisar",
  "toletserviceinhisar.com": "Popular Locations for To Let Service in Hisar",
};

export const getFeaturedLocationTitle = (domain) => {
  if (!domain) return "Popular Locations";
  const cleanDomain = domain.replace(/^www\./, "");
  return FEATURED_LOCATION_TITLES[cleanDomain] || "Popular Locations";
};
*/

export const FEATURED_LOCATION_TITLES = {
  "www.agriculturelandforsaleinhisar.com": "Popular Locations for Agriculture Land for Sale in Hisar",
  "www.commercialpropertyforsaleinhisar.com": "Popular Locations for Commercial Property for Sale in Hisar",
  "www.flatsforrentinhisar.com": "Popular Locations for Flats for Rent in Hisar",
  "www.flatsforsaleinhisar.com": "Popular Locations for Flats for Sale in Hisar",
  "www.houseforrentinhisar.com": "Popular Locations for House for Rent in Hisar",
  "www.houseforsaleinhisar.com": "Popular Locations for House for Sale in Hisar",
  "www.plotforsaleinhisar.com": "Popular Locations for Plot for Sale in Hisar",
  "www.shopforrentinhisar.com": "Popular Locations for Shop for Rent in Hisar",
  "www.shopforsaleinhisar.com": "Popular Locations for Shop for Sale in Hisar",
  "www.toletserviceinhisar.com": "Popular Locations for To Let Service in Hisar",
};

export const getFeaturedLocationTitle = (domain) => {
  if (!domain) return "Popular Locations";
  const formattedDomain = domain.startsWith("www.") ? domain : `www.${domain}`;
  return FEATURED_LOCATION_TITLES[formattedDomain] || "Popular Locations";
};
