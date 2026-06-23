"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { getFeaturedLocationTitle } from "@/lib/featuredLocationTitle";

export default function FeaturedLocations({
  locations = [],
  domain,
}) {
  const title = getFeaturedLocationTitle(domain);

  const pathPrefixMap = {
  "www.houseforrentinhisar.com": "house-for-rent-in",
  "www.flatsforrentinhisar.com": "flat-for-rent-in",
  "www.shopforrentinhisar.com": "shop-for-rent-in",
  "www.shopforsaleinhisar.com": "shop-for-sale-in",
  "www.commercialpropertyforsaleinhisar.com":
    "commercial-property-for-sale-in",
  "www.flatsforsaleinhisar.com": "flat-for-sale-in",
  "www.houseforsaleinhisar.com": "house-for-sale-in",
  "www.plotforsaleinhisar.com": "plot-for-sale-in",
};

const getPathPrefix = () =>
  pathPrefixMap[domain] || "properties-for-sale-in";

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto rounded-[26px] border border-[#d5c84f]/30 bg-[color:var(--navbarBg)] p-5 sm:p-7">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[3px] font-semibold text-[color:var(--heading)]">
              Prime Areas
            </p>

            {/* <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Popular Locations
            </h2> */}
            {/* <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {title}
            </h2> */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">
              {title}
            </h2>
          </div>

          <div className="h-px flex-1 bg-gradient-to-r from-[color:var(--btnPrimaryBg)]/40 to-transparent" />
        </div>

        {/* Locations */}
        <div className="flex flex-wrap gap-3">
          {locations.map((location, index) => {
            /*
            const slug = location
              .toLowerCase()
              .replace(/,/g, "")
              .replace(/\s+/g, "-");
            */
            const isObj = typeof location === "object" && location !== null;
            // const displayName = isObj
            //   ? (location.location ? location.location.split(",")[0].trim() : location.name)
            //   : location;
            const displayName = isObj
              ? (location.location || location.name)
              : location;
            const slug = isObj
              ? location.slug
              : location
                  .toLowerCase()
                  .replace(/,/g, "")
                  .replace(/\s+/g, "-");

            return (
              <Link
                key={index}
                href={`https://www.dealacres.com/properties/${getPathPrefix()}-${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[color:var(--btnPrimaryBg)]
                  bg-[color:var(--navbarBg)]
                  px-4 py-2
                  text-sm font-medium text-[color:var(--btnPrimaryText)]
                  transition-all duration-300
                  hover:bg-[color:var(--btnPrimaryText)]
                  hover:text-[color:var(--btnPrimaryBg)]
                  hover:border-[color:var(--cardBorder)]
                "
              >
                <MapPin
                  size={14}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                {/* {location} */}
                {displayName}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}