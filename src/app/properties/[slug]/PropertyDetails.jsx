"use client";
import Image from "next/image";
import QueryForm from "@/app/[area]/QueryForm";
import { useState } from "react";
import fallbackImages from "@/lib/fallbackImages";
export default function PropertyDetails({ propertyy,domain }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 sm:px-6 py-10 bg-[var(--bodyBg)] text-[var(--text)]">
      <div className="max-w-7xl mx-auto py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 items-start">

          {/* IMAGE */}
          <div className="relative w-full h-[320px] overflow-hidden rounded-lg">

  {/* VIDEO */}
  {propertyy?.media?.type === "video" &&
   propertyy?.media?.url?.trim() ? (
    <video
      src={propertyy.media.url}
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
        propertyy?.media?.url?.trim()
          ? propertyy.media.url
          : fallbackImages.find((item) => item.domain === domain)?.url
      }
      alt={propertyy.title}
      fill
      loading="lazy"
      className="object-cover"
    />
  )}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between h-full">

            {/* TOP INFO */}
            <div>
              <h1 className="text-[26px] leading-tight font-semibold text-[var(--primary)]">
                {propertyy.title}
              </h1>

              <p className="mt-2 text-[var(--mutedText)]">
                {propertyy.locality}
              </p>

              {/* META */}
              <div className="mt-6 grid grid-cols-3 gap-x-10 text-sm">
                <Meta label="Category" value={propertyy.propertyCategory} />
                <Meta label="Property Type" value={propertyy.propertyType} />
                <Meta label="Listing Type" value={propertyy.listingType} />
              </div>

              {/* DETAILS */}
              <div className="mt-6 grid grid-cols-3 gap-y-4 gap-x-10 text-sm">
                <Row label="City" value={propertyy.city} />
                <Row label="State" value={propertyy.state} />
                <Row label="Locality" value={propertyy.locality} />
              </div>
            </div>

            {/* ACTION */}
            <div className="mt-8">
              <button
                onClick={() => setOpen(true)}
                className="
                  px-7 py-2.5 text-sm font-semibold rounded-md
                  bg-[var(--primary)]
                  text-[var(--heading)]
                "
              >
                Contact Seller
              </button>
            </div>

          </div>
        </div>

        {/* DESCRIPTION */}
        <section className="mt-14">
          <h2 className="text-md md:text-lg  font-medium text-[var(--primary)]">
            Description
          </h2>

          <div className="mt-4 space-y-3 text-sm md:text-lg leading-relaxed text-[var(--text)]">
            {propertyy.description2?.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </section>

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
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-[var(--mutedText)]">{label}</div>
      <div className="mt-0.5 font-medium text-[var(--text)]">{value}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div>
      <div className="text-[var(--mutedText)]">{label}</div>
      <div className="mt-0.5 text-[var(--text)]">{value}</div>
    </div>
  );
}
