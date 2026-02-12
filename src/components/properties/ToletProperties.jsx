"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import QueryForm from "@/app/[area]/QueryForm";
import { useProperty } from "@/contexts/propertyContext";

const DOMAIN_SECTIONS = {
  "www.flatsforrentinhisar.com": {
    heading: "Premium Flats for Rent in Hisar City",
    subHeading:
      "Top-quality 1BHK, 2BHK & 3BHK flats for rent in Hisar. Verified listings, prime locations, and affordable rental options for families and professionals.",
  },

  "www.houseforrentinhisar.com": {
    heading: "Independent Houses & Villas for Rent in Hisar",
    subHeading:
      "Spacious independent houses and luxury villas for rent in Hisar. Ideal for families looking for privacy, comfort, and long-term rental living.",
  },

  "www.shopforrentinhisar.com": {
    heading: "Search Commercial Shops for Rent in Hisar – Prime Locations",
    subHeading:
      "High-demand commercial shops for rent in Hisar located in busy markets and prime areas. Best choice for business growth and visibility.",
  },
}


export default function ToletProperties({ host }) {
  const [open, setOpen] = useState(false);

  const { properties, loading, error, setDomain, domain } = useProperty();

  // 🔹 domain context set only from host
  useEffect(() => {
    if (domain === null && host) {
      setDomain(host);
    }
  }, [host, domain, setDomain]);

  // 🔹 modal body lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (loading) {
    return (
      <p className="text-center py-20 bg-[color:var(--bodyBg)] text-[color:var(--text)]">
        Loading properties...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading the property.
      </p>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[color:var(--bodyBg)] px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* ================= DOMAIN SECTIONS ================= */}
          {Object.entries(DOMAIN_SECTIONS).map(
            ([domainName, sectionData]) => {
              const filteredProperties = properties.filter(
                (item) => item.domain === domainName
              );

              if (filteredProperties.length === 0) return null;

              return (
                <section key={domainName}>
                  {/* HEADING */}
                  <div className="mb-10 text-left md:text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[color:var(--primary)]">
                      {sectionData.heading}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[color:var(--mutedText)]">
                      {sectionData.subHeading}
                    </p>
                  </div>

                  {/* GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProperties.map((property) => (
                      <div
                        key={property._id}
                        className="bg-[color:var(--cardBg)] rounded-xl overflow-hidden shadow-md flex flex-col border border-[color:var(--cardBorder)]"
                      >
                        {/* MEDIA */}
                        <div className="relative h-44 bg-black/20">
                          {property?.media?.type === "image" && (
                            <Image
                              src={property.media.url}
                              alt={property.title}
                              fill
                              loading="lazy"
                              className="object-cover"
                            />
                          )}

                          {property?.media?.type === "video" && (
                            <video
                              src={property.media.url}
                              className="w-full h-full object-cover"
                              muted
                              loop
                              autoPlay
                              playsInline
                            />
                          )}
                        </div>

                        {/* CONTENT */}
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="text-lg font-semibold text-[color:var(--text)]">
                            {property.title}
                          </h3>

                          <div className="flex items-center text-sm text-[color:var(--mutedText)] mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {property.locality}
                          </div>

                          <div className="flex-1" />

                          {/* BOTTOM */}
                          <div className="flex items-center justify-between gap-3 pt-4 border-t mt-4 border-[color:var(--cardBorder)]">
                            {property.price !== 0 ? (
                              <div className="text-sm font-semibold text-[color:var(--primary)]">
                                Price: {property.price.toLocaleString("en-IN")}
                              </div>
                            ) : (
                              <button
                                onClick={() => setOpen(true)}
                                className="px-3 py-1.5 text-sm font-semibold rounded-md border bg-[color:var(--btnSecondaryBg)] text-[color:var(--btnSecondaryText)] border-[color:var(--btnSecondaryBorder)] hover:bg-[color:var(--btnSecondaryHoverBg)] transition"
                              >
                                Price on Call
                              </button>
                            )}

                            <Link
                              href={`/properties/${property.slug}`}
                              className="px-4 py-2 text-sm font-semibold rounded-md bg-[color:var(--btnPrimaryBg)] text-[color:var(--btnPrimaryText)] hover:bg-[color:var(--btnPrimaryHover)] transition"
                            >
                              View Details →
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            }
          )}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <QueryForm
              onClose={() => setOpen(false)}
              onSubmitSuccess={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
