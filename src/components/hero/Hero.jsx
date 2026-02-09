"use client";

import React from "react";
import Link from "next/link";

const HeroSection = ({ data }) => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6">
      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${data?.backgroundImages?.[0]})`,
        }}
      >
        {/* Overlay using theme */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[color:var(--navbarBg)]/90
            via-[color:var(--navbarBg)]/70
            to-[color:var(--navbarBg)]/50
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ================= LEFT ================= */}
          <div className="md:col-span-7 lg:col-span-8 text-left">
            <h1
              className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                font-extrabold leading-tight
                mb-4 sm:mb-6
                text-[color:var(--heading)]
              "
            >
              {data?.heading}
            </h1>

            <div
              className="
                text-base sm:text-lg md:text-xl
                mb-6 sm:mb-8 space-y-2
                max-w-3xl
                text-[color:var(--footerMuted)]
              "
            >
              {data?.description?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* PRIMARY CTA */}
              <Link
                href={`/${data?.buttons?.[0]?.path}`}
                className="
                  px-6 sm:px-8 py-3
                  font-semibold rounded-lg shadow-md text-center
                  bg-[color:var(--primary)]
                  text-[color:var(--buttonText)]
                  hover:bg-[color:var(--hover)]
                  transition
                "
              >
                {data?.buttons?.[0]?.label}
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href={`/${data?.buttons?.[1]?.path}`}
                className="
                  px-6 sm:px-8 py-3
                  font-semibold rounded-lg shadow-md text-center
                  bg-[color:var(--cardBg)]
                  text-[color:var(--primary)]
                  hover:bg-[color:var(--secondary)]
                  transition
                "
              >
                {data?.buttons?.[1]?.label}
              </Link>
            </div>
          </div>

          {/* ================= RIGHT (FORM) ================= */}
          <div className="md:col-span-5 lg:col-span-4 w-full">
            <div
              className="
                bg-[color:var(--cardBg)]
                rounded-xl shadow-lg
                p-5 sm:p-6
                w-full md:max-w-sm lg:max-w-md
                ml-auto
                border border-[color:var(--cardBorder)]
              "
            >
              <h3
                className="
                  text-lg sm:text-xl font-bold mb-1
                  text-[color:var(--primary)]
                "
              >
                Free Consultation
              </h3>

              <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-[color:var(--mutedText)]">
                Fill details & get a call back
              </p>

              <form className="space-y-3">
                {["Name", "Email", "Phone", "City"].map((label) => (
                  <input
                    key={label}
                    type="text"
                    placeholder={label}
                    className="
                      w-full px-3 py-2.5 text-sm
                      border border-[color:var(--cardBorder)]
                      rounded-md
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[color:var(--primary)]
                    "
                  />
                ))}

                <textarea
                  rows="3"
                  placeholder="Message"
                  className="
                    w-full px-3 py-2.5 text-sm
                    border border-[color:var(--cardBorder)]
                    rounded-md resize-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[color:var(--primary)]
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full py-2.5 text-sm font-semibold rounded-md
                    bg-[color:var(--primary)]
                    text-[color:var(--buttonText)]
                    hover:bg-[color:var(--hover)]
                    transition
                  "
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
