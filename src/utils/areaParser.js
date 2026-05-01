
export function splitArea(area) {
  const [type, locationSlug] = area.split("-in-");

  return {
    type, // house-for-rent
    locationSlug, // sector-33-hisar
  };
}

export function formatLocation(locationSlug) {
  if (!locationSlug) return "";

  return locationSlug
    .split("-")
    .map(word => {
      // roman numbers handle (ii, iii etc.)
      if (["ii", "iii", "iv"].includes(word)) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}