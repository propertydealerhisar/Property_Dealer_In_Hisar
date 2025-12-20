"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import {cleanDomain} from "@/utils/helpers"


const Footer = ({data}) => {
  return (
    <footer className="bg-[#422c18] text-[#f2e8e1] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================== TOP SECTION =================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* LEFT — ABOUT / CONTENT */}
          <div className="text-left">
            <Link href={`/`} className="text-xl font-semibold text-[#f2e8e1] mb-3">
              {data?.brand?.name}
            </Link>
            <p className="text-[#f2e8e1] leading-relaxed text-sm">
              {data?.brand?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
           })}
            </p>
          </div>

          {/* CENTER — POWERED BY */}
          <div className="flex flex-col md:items-center items-start justify-center text-left">
            <p className="text-[#f2e8e1] text-sm mb-1">{data?.poweredBy?.label}</p>
            <span className="text-[#f2e8e1] font-bold text-xl tracking-wide">
              {data?.poweredBy?.name}
            </span>
          </div>

          {/* RIGHT — SOCIAL LINKS */}
          <div className="flex flex-col md:items-end items-start text-left">
            <h4 className="text-[#f2e8e1] font-semibold mb-3 text-lg">
              {data?.social?.heading}
            </h4>

            <div className="flex gap-4">
              <Link
                href={`${data?.social?.links[0].url}`}
                className="text-[#f2e8e1] hover:text-[#f2e8e1] transition text-xl"
              >
                <FaFacebook />
              </Link>
              <Link
                href={`${data?.social?.links[1].url}`}
                className="text-[#f2e8e1] hover:text-[#f2e8e1] transition text-xl"
              >
                <FaTwitter />
              </Link>
              <Link
                href={`${data?.social?.links[2].url}`}
                className="text-[#f2e8e1] hover:text-[#f2e8e1] transition text-xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href={`${data?.social?.links[3].url}`}
                className="text-[#f2e8e1] hover:text-[#f2e8e1] transition text-xl"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

        </div>

        {/* =================== BOTTOM UNDERLINE =================== */}
        <div className="border-t border-[#f2e8e1] pt-4">
          <p className="text-center text-[#f2e8e1] text-sm">
            © {new Date().getFullYear()} {data?.copyright?.text}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
