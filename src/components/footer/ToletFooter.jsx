"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const TOLET_FOOTER_LINKS = [
  {
    heading: "Houses for Rent in Hisar",
    prefix: "House for Rent in",
    links: [
      { area: "Sector 33", slug: "sector-33" },
  { area: "Sector 15", slug: "sector-15" },
  { area: "Model Town", slug: "model-town" },
  { area: "Sector 9-11", slug: "sector-9-11" },
  { area: "Sector 14", slug: "sector-14" },
  { area: "Sector 16-17", slug: "sector-16-17" },
  { area: "Urban Estate II", slug: "urban-estate-ii" },
  { area: "Sector 1-4", slug: "sector-1-4" },
  { area: "Sector 21P", slug: "sector-21p" },
  { area: "Sector 13", slug: "sector-13" },
  { area: "PLA Area", slug: "pla-area" },
  { area: "Global Space", slug: "global-space" },
    ],
  },
  {
    heading: "Shops for Rent in Hisar",
    prefix: "Shop for Rent in",
    links: [
       { area: "Sector 13", slug: "sector-13" },
  { area: "Sector 15", slug: "sector-15" },
  { area: "Model Town", slug: "model-town" },
  { area: "Sector 1-4", slug: "sector-1-4" },
  { area: "Sector 14", slug: "sector-14" },
  { area: "PLA Area", slug: "pla-area" },
  { area: "Urban Estate II", slug: "urban-estate-ii" },
  { area: "Global Space", slug: "global-space" },
  { area: "Sector 33", slug: "sector-33" },
  { area: "Sector 21P", slug: "sector-21p" },
  { area: "Sector 9-11", slug: "sector-9-11" },
  { area: "Sector 16-17", slug: "sector-16-17" },
    ],
  },
  {
    heading: "Flats for Rent in Hisar",
    prefix: "Flat for Rent in",
    links: [
       { area: "Urban Estate II", slug: "urban-estate-ii" },
  { area: "Sector 14", slug: "sector-14" },
  { area: "Global Space", slug: "global-space" },
  { area: "PLA Area", slug: "pla-area" },
  { area: "Sector 15", slug: "sector-15" },
  { area: "Sector 13", slug: "sector-13" },
  { area: "Sector 1-4", slug: "sector-1-4" },
  { area: "Sector 33", slug: "sector-33" },
  { area: "Model Town", slug: "model-town" },
  { area: "Sector 16-17", slug: "sector-16-17" },
  { area: "Sector 21P", slug: "sector-21p" },
  { area: "Sector 9-11", slug: "sector-9-11" },
    ],
  },
];



const ToletFooter = () => {
  return (
     <footer className="bg-[color:var(--footerBg)] text-[color:var(--footerText)] pt-16 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP LINKS ================= */}
        <div className="mb-14 space-y-10">
          {TOLET_FOOTER_LINKS.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-5">
                {section.heading}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 text-sm text-[color:var(--footerMuted)]">
                {section.links.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/${item.slug}`}
                    className="hover:underline underline-offset-4 transition"
                  >
                    {section.prefix} {item.area}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="flex-1">
            <Link href="/" className="text-xl font-semibold mb-3 inline-block">
              To Let Service In Hisar
            </Link>
            <p className="text-sm text-[color:var(--footerMuted)] leading-relaxed">
              We help you discover perfect rental properties through our trusted
              To-Let Service with expert guidance and transparent processes.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-semibold text-lg">Follow Us</span>
            <Link href="#" className="hover:scale-110 transition">
              <FaInstagram className="h-7 w-7" />
            </Link>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-[color:var(--footerBorder)] pt-4 flex justify-between flex-col sm:flex-row gap-2">
          <Link
            href="https://www.parcharmanch.com/"
            target="_blank"
            className="text-sm text-[color:var(--footerMuted)]"
          >
            Designed By Parchar Manch
          </Link>

          <p className="text-sm text-[color:var(--footerMuted)]">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default ToletFooter;