"use client";

import React from "react";
import Link from "next/link";

const HeroSection = ({ data }) => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${data?.backgroundImages?.[0]})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#422c18]/90 via-[#422c18]/70 to-[#422c18]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ================= LEFT SECTION ================= */}
          <div className="md:col-span-7 lg:col-span-8 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
              {data?.heading}
            </h1>

            <div className="text-[#f2e8e1] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 space-y-2 max-w-3xl">
              {data?.description?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={`/${data?.buttons?.[0]?.path}`}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#422c18] to-[#5a3b22] text-[#f2e8e1] font-semibold rounded-lg shadow-md text-center"
              >
                {data?.buttons?.[0]?.label}
              </Link>

              <Link
                href={`/${data?.buttons?.[1]?.path}`}
                className="px-6 sm:px-8 py-3 bg-[#f2e8e1] text-[#422c18] font-semibold rounded-lg shadow-md text-center"
              >
                {data?.buttons?.[1]?.label}
              </Link>
            </div>
          </div>

          {/* ================= RIGHT SECTION (FORM) ================= */}
          <div className="md:col-span-5 lg:col-span-4 w-full">
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 w-full md:max-w-sm lg:max-w-md ml-auto md:ml-auto">
              <h3 className="text-lg sm:text-xl font-bold text-[#422c18] mb-1">
                Free Consultation
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                Fill details & get a call back
              </p>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#422c18]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#422c18]"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-3 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#422c18]"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-3 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#422c18]"
                />

                <textarea
                  rows="3"
                  placeholder="Message"
                  className="w-full px-3 py-2.5 text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#422c18]"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 text-sm bg-gradient-to-r from-[#422c18] to-[#5a3b22] text-white font-semibold rounded-md"
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
