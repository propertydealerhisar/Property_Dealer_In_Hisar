"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { cleanDomain } from "@/utils/helpers";

const Footer = ({ data }) => {
  return (
    <footer className="bg-[#422c18] text-[#f2e8e1] pt-16 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* =================== TOP STATIC LINKS SECTION =================== */}
        {data?.links?.items?.length > 0 &&(
        <div className="mb-14">
          {/* STATIC HEADING */}
          <h3 className="text-xl font-semibold text-[#f2e8e1] mb-6 text-left">
            {data?.links?.heading}
          </h3>

          {/* LINKS ROW (4 PER ROW) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {data?.links?.items?.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="text-sm hover:underline hover:text-white transition"
              >
                {data?.links?.prefix} {item.area}
              </Link>
            ))}
          </div>
        </div>
        )}

        {/* =================== MAIN FOOTER CONTENT =================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* LEFT — ABOUT */}
          <div className="text-left">
            <Link href={`/`} className="text-xl font-semibold mb-3 inline-block">
              {data?.brand?.name}
            </Link>

            <p className="leading-relaxed text-md">
              {data?.brand?.description?.map((item, index) => (
                <span key={index} className="block">{item}</span>
              ))}
            </p>
          </div>

          {/* CENTER — POWERED BY */}
          <div className="flex flex-col md:items-center items-start justify-center">
            <p className="text-sm mb-1">{data?.poweredBy?.label}</p>
            <span className="font-bold text-xl tracking-wide">
              {data?.poweredBy?.name}
            </span>
          </div>

          {/* RIGHT — SOCIAL LINKS */}
          <div className="flex flex-col md:items-end items-start">
            <h4 className="font-semibold mb-3 text-lg">
              {data?.social?.heading}
            </h4>

            <div className="flex gap-4 text-xl">
              <Link href={data?.social?.links[0]?.url}><FaFacebook /></Link>
              <Link href={data?.social?.links[1]?.url}><FaTwitter /></Link>
              <Link href={data?.social?.links[2]?.url}><FaInstagram /></Link>
              <Link href={data?.social?.links[3]?.url}><FaLinkedin /></Link>
            </div>
          </div>
        </div>

        {/* =================== BOTTOM COPYRIGHT =================== */}
        <div className="border-t border-[#f2e8e1] pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} {data?.copyright?.text}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
