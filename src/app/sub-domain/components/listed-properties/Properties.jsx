"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import QueryForm from "../forms/QueryForm";

export default function Properties({ data }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  // cleanup (important)
  return () => {
    document.body.style.overflow = "";
  };
}, [open]);


  return (
    <>
      <div className="min-h-screen bg-[#f7f5f2] px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-10 text-left md:text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {data?.heading}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              {data?.description?.map((item, index) => (
                <span key={index} className="block">{item}</span>
              ))}
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.propertyCards?.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-44">
                  <Image
                    src={property.img}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>

                  <div className="flex justify-between gap-3 pt-4">
                    {/* OPEN FORM */}
                    <button
                      onClick={() => setOpen(true)}
                      className="px-3 py-2 text-sm font-semibold 
                                 bg-[#f3eee9] text-[#422c18] 
                                 rounded-md cursor-pointer"
                    >
                      ₹ {property.price}
                    </button>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="px-4 py-2 text-sm font-semibold 
                                 bg-[#422c18] text-white rounded-md"
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

      {/* ================= MODAL ================= */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center 
                     bg-black/50"
          onClick={() => setOpen(false)}   // 👈 OUTSIDE CLICK CLOSE
        >
          <div
            className="w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()} // 👈 INSIDE SAFE
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
