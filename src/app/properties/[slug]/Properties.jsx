"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import QueryForm from "@/app/[area]/QueryForm";
import { useProperty } from "@/contexts/propertyContext";
import {formatPrice } from "@/utils/formatPrice"
import fallbackImages from "@/lib/fallbackImages";
export default function Properties({ property, area, domain }) {
  const [open, setOpen] = useState(false);

  const {
    data,
    loading2,
    error2,
    setLocality,
    setDomain2,
    locality,
    domain2,
  } = useProperty();

  useEffect(() => {
    if (locality === area && domain2 === domain) return;

    setLocality(area);
      setDomain2(domain);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (loading2) {
    return (
      <p className="text-center py-20 text-[var(--text)]">
        Loading properties...
      </p>
    );
  }

  if (error2) {
    return <p className="text-center py-20 text-red-500">{error2}</p>;
  }

  return (
    <>
      {/* PAGE */}
      <div className="min-h-screen px-4 sm:px-6 py-10 bg-[var(--bodyBg)]">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-10 text-left md:text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">
              {property?.heading}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[var(--mutedText)]">
              {property?.subHeading}
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.map((property) => (
              <div
                key={property._id}
                className="
                  rounded-xl overflow-hidden shadow-md flex flex-col
                  bg-[var(--cardBg)]
                  border border-[var(--cardBorder)]
                "
              >
                {/* MEDIA */}
<div className="relative h-44 bg-black/20">

  {/* VIDEO */}
  {property?.media?.type === "video" &&
   property?.media?.url?.trim() ? (
    <video
      src={property.media.url}
      className="w-full h-full object-cover"
      muted
      loop
      autoPlay
      playsInline
    />
  ) : (
    /* IMAGE / FALLBACK IMAGE */
    <Image
      src={
        property?.media?.url?.trim()
          ? property.media.url
          : fallbackImages.find((item) => item.domain === domain)?.url
      }
      alt={property.title}
      fill
      loading="lazy"
      className="object-cover"
    />
  )}
</div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-sm text-[var(--mutedText)] mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.locality}
                  </div>

                  <div className="flex-1" />

                  {/* BOTTOM */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-[var(--cardBorder)] mt-4">
                    {/* PRICE */}
                    {property.price !== 0 ? (
                      <div className="text-sm font-semibold text-[var(--text)]">
                        Price: {formatPrice(property?.price)}
                      </div>
                    ) : (
                      <button
                        onClick={() => setOpen(true)}
                        className="
                          px-3 py-1.5 text-sm font-semibold rounded-md border
                          bg-[color:var(--btnSecondaryBg)]
                          text-[color:var(--btnSecondaryText)]
                          border-[color:var(--btnSecondaryBorder)]
                          hover:bg-[color:var(--btnSecondaryHoverBg)]
                        "
                      >
                        Price on Call
                      </button>
                    )}

                    {/* VIEW DETAILS */}
                    <Link
                      href={`/properties/${property.slug}`}
                      className="
                        px-4 py-2 text-sm font-semibold rounded-md
                        bg-[color:var(--btnPrimaryBg)]
                        text-[color:var(--btnPrimaryText)]
                        hover:bg-[color:var(--btnPrimaryHover)]
                      "
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* MODAL */}
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