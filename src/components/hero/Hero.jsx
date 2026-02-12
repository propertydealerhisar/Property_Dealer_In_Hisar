"use client";

import React from "react";
import Link from "next/link";

const HeroSection = ({ data }) => {
  return (
    <section className="relative px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[color:var(--navbarBg)]" />

      <div className="relative z-10 max-w-7xl mx-auto py-8 grid md:grid-cols-12 gap-10 items-center">

        {/* LEFT */}
        <div className="md:col-span-7 lg:col-span-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-[color:var(--heading)]">
            {data?.heading}
          </h1>

          <div className="text-lg mb-8 max-w-3xl space-y-2 text-[color:var(--footerText)]">
            {data?.description?.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* PRIMARY */}
            {/* <Link
              href={`/${data?.buttons?.[0]?.path}`}
              className="px-8 py-3 rounded-lg font-semibold text-center
                bg-[color:var(--btnPrimaryBg)]
                text-[color:var(--btnPrimaryText)]
                hover:bg-[color:var(--btnPrimaryHover)]
                transition border-[color:var(--btnPrimaryText)][color:var(--btnPrimaryText)] border-2"
            >
              {data?.buttons?.[0]?.label}
            </Link> */}

            {/* SECONDARY */}
            {/* <Link
              href={`/${data?.buttons?.[1]?.path}`}
              className="px-8 py-3 rounded-lg font-semibold text-center border
                bg-[color:var(--btnSecondaryBg)]
                text-[color:var(--btnSecondaryText)]
                border-[color:var(--btnSecondaryBorder)]
                hover:bg-[color:var(--btnSecondaryHoverBg)]
                transition"
            >
              {data?.buttons?.[1]?.label}
            </Link> */}
          </div>
        </div>

        {/* FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-[color:var(--cardBg)] p-6 rounded-xl shadow-xl border border-[color:var(--cardBorder)]">
            <h3 className="text-xl font-bold text-[color:var(--primary)]">
              Free Consultation
            </h3>
            <p className="text-sm mb-4 text-[color:var(--mutedText)]">
              Fill details & get a call back
            </p>

            <form className="space-y-3">
              {["Name","Phone", "City"].map((f) => (
                <input
                  key={f}
                  placeholder={f}
                  className="w-full px-3 py-2.5 border rounded-md
                    border-[color:var(--cardBorder)]
                    focus:ring-2 focus:ring-[color:var(--primary)]
                    outline-none"
                />
              ))}

              <textarea
                rows="3"
                placeholder="Message"
                className="w-full px-3 py-2.5 border rounded-md resize-none
                  border-[color:var(--cardBorder)]
                  focus:ring-2 focus:ring-[color:var(--primary)]
                  outline-none"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-md font-semibold
                  bg-[color:var(--btnPrimaryBg)]
                  text-[color:var(--btnPrimaryText)]
                  hover:bg-[color:var(--btnPrimaryHover)]
                  transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
