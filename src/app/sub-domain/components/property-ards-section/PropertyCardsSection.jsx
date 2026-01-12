"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Building,
  Building2,
  HelpCircle,
} from "lucide-react";

const ICON_MAP = {
  Home,
  Building,
  Building2,
};

const DEFAULT_ICON = HelpCircle;
const MAX_VISIBLE = 6;

export default function PropertyCardsSection({ data }) {
  const [showAll, setShowAll] = useState(false);

  const cards = data?.propertyCards || [];
  const visibleCards = showAll ? cards : cards.slice(0, MAX_VISIBLE);
  const hasMore = cards.length > MAX_VISIBLE;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-7xl text-left md:text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl">
            {data?.heading}
          </h2>

          <div className="space-y-2 text-base text-gray-600 sm:text-lg max-w-7xl mx-auto">
            {data?.description?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {visibleCards.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || DEFAULT_ICON;

            return (
              <Link
                key={index}
                href={item.path || "#"}
                className="
                  group relative block
                  rounded-2xl border border-gray-200
                  bg-white p-6
                  transition-all duration-300
                  hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-[#422c18]/30
                "
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#422c18]/10">
                  <Icon className="h-7 w-7 text-[#422c18]" />
                </div>

                {/* Card title left aligned always (better UX) */}
                <h3 className="text-left text-sm font-semibold leading-snug text-gray-900 md:text-base">
                  {item.title}
                </h3>

                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#422c18]/20 transition group-hover:ring-2" />
              </Link>
            );
          })}
        </div>

        {/* View More / Less */}
        {hasMore && (
          <div className="mt-6 flex justify-start md:justify-end">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                text-sm font-semibold
                text-[#422c18]
                hover:underline
                transition
              "
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
