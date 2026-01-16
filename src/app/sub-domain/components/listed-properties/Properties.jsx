"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Properties({ data }) {
  return (
    <div className="min-h-screen bg-[#f7f5f2] px-4 py-10">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING & DESCRIPTION ================= */}
        <div className="mb-10 text-left md:text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {data?.heading}
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-7xl md:mx-auto">
            {data?.description?.map((item, index) => (
              <span key={index} className="block">{item}</span>
            ))}
          </p>
        </div>

        {/* ================= PROPERTIES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.propertyCards?.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={property?.img}
                  alt={property?.title || "Property Image"}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"       // 👈 lazy loading
                  quality={80}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {property.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="line-clamp-1">{property?.location}</span>
                </div>

                {/* Price + Actions */}
                <div className="flex items-center justify-between pt-4 gap-3">
                  <div className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                    Price : <span className="font-bold">{property.price}</span>
                  </div>

                  <button className="flex items-center gap-1 text-sm font-semibold text-[#422c18] hover:underline whitespace-nowrap">
                    <Phone className="w-4 h-4" />
                    Get Contact
                  </button>

                  <Link
                    href={`/properties/${property.slug}`}
                    className="text-sm font-semibold text-[#422c18] hover:underline whitespace-nowrap"
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
  );
}
