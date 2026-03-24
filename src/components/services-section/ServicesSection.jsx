"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaKey,
  FaBuilding,
  FaStore,
  FaLandmark,
  FaTractor,
  FaHandshake,
  FaQuestionCircle,
  FaCity,
  FaBriefcase,
  FaChartLine,
  FaRupeeSign,
  FaDoorOpen,
  FaCrown,
} from "react-icons/fa";

const ICON_MAP = {
  FaHome,
  FaKey,
  FaBuilding,
  FaStore,
  FaLandmark,
  FaTractor,
  FaHandshake,
  FaCity,
  FaBriefcase,
  FaChartLine,
  FaRupeeSign,
  FaDoorOpen,
  FaCrown,
};

const DEFAULT_ICON = FaQuestionCircle;

const ServicesSection = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? data?.services
    : data?.services?.slice(0, 8);

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 bg-[color:var(--bodyBg)]">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="mb-12 text-left md:text-center">
          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl
              font-extrabold mb-3
              text-[color:var(--primary)]
            "
          >
            {data?.heading}
          </h2>

          <div
            className="
              text-base md:text-lg max-w-5xl mx-auto
              text-[color:var(--text)]
              space-y-1
            "
          >
            {data?.description?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {visibleServices?.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || DEFAULT_ICON;

            return (
              <Link key={index} href={service?.path || "/"}>
                <div
                  className="
                    h-full
                    bg-[color:var(--cardBg)]
                    p-6 rounded-2xl
                    border border-[color:var(--cardBorder)]
                    shadow-sm hover:shadow-md
                    transition
                    flex flex-col text-center
                  "
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="text-4xl text-[color:var(--primary)]" />
                  </div>

                  <h3
                    className="
                      text-lg md:text-xl font-semibold mb-2
                      text-[color:var(--text)]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-sm md:text-base
                      text-[color:var(--mutedText)]
                      leading-relaxed
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ================= VIEW MORE ================= */}
        {data?.services?.length > 8 && (
          <div className="flex justify-center md:justify-end mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                text-base font-semibold
                text-[color:var(--primary)]
                hover:underline
                underline-offset-4
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
};

export default ServicesSection;
