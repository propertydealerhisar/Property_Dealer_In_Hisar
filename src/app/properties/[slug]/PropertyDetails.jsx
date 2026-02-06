"use client"
import Image from "next/image";
import QueryForm from "@/app/[area]/QueryForm";
import { useState } from "react";

export default function PropertyDetails({ propertyy }) {
    const [open, setOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto py-12">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 items-start">
          
          {/* IMAGE */}
         <div className="relative w-full h-[320px] overflow-hidden">
  {/* IMAGE */}
  {propertyy?.media?.type === "image" && propertyy?.media?.url && (
    <Image
      src={propertyy.media.url}
      alt={propertyy?.title || `Property in ${propertyy?.city}`}
      fill
      priority
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 420px"
    />
  )}

  {/* VIDEO */}
  {propertyy?.media?.type === "video" && propertyy?.media?.url && (
    <video
      src={propertyy.media.url}
      className="w-full h-full object-cover"
      muted
      loop
      autoPlay
      playsInline
    />
  )}
</div>


          {/* RIGHT CONTENT (IMAGE HEIGHT KE ANDAR) */}
          <div className="flex flex-col justify-between h-full">
            
            {/* TOP INFO */}
            <div>
              <h1 className="text-[26px] leading-tight font-semibold">
                {propertyy.title}
              </h1>

              <p className="text-gray-600 mt-2">
                {propertyy.locality}
              </p>

              {/* <p className="mt-5 text-[22px] font-medium">
                {propertyy.price === 0
                  ? "Price on Request"
                  : `₹ ${propertyy.price}`}
              </p> */}

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
                {/* <Row label="Area" value={propertyy.area || "—"} /> */}
              </div>
            </div>

            {/* ACTION */}
            <div className="mt-8">
              <button onClick={() => setOpen(true)} className="bg-black text-white px-7 py-2.5 text-sm">
                Contact Seller
              </button>
            </div>

          </div>
        </div>

        {/* DESCRIPTION — FULL WIDTH */}
        <section className="mt-14">
          <h2 className="text-[17px] font-medium">
            Description
          </h2>

          <div className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
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
      <div className="text-gray-500">{label}</div>
      <div className="mt-0.5 font-medium">{value}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div>
      <div className="text-gray-500">{label}</div>
      <div className="mt-0.5">{value}</div>
    </div>
  );
}