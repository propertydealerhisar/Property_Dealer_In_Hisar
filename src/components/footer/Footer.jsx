"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#422c18] text-[#f2e8e1] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================== TOP SECTION =================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* LEFT — ABOUT / CONTENT */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-[#f2e8e1] mb-3">
              EstatePro Real Estate
            </h3>
            <p className="text-[#f2e8e1] leading-relaxed text-sm">
              We help you discover premium properties with expert guidance,
              transparent processes, and trusted real estate services across the city.
            </p>
          </div>

          {/* CENTER — POWERED BY */}
          <div className="flex flex-col md:items-center items-start justify-center text-left">
            <p className="text-[#f2e8e1] text-sm mb-1">Powered By</p>
            <span className="text-[#f2e8e1] font-bold text-xl tracking-wide">
              Deal Acres
            </span>
          </div>

          {/* RIGHT — SOCIAL LINKS */}
          <div className="flex flex-col md:items-end items-start text-left">
            <h4 className="text-[#f2e8e1] font-semibold mb-3 text-lg">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#f2e8e1] hover:text-[#f2e8e1] transition text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-[#f2e8e1] hover:text-[#f2e8e1] transition text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-[#f2e8e1] hover:text-[#f2e8e1] transition text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-[#f2e8e1] hover:text-[#f2e8e1] transition text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* =================== BOTTOM UNDERLINE =================== */}
        <div className="border-t border-[#f2e8e1] pt-4">
          <p className="text-center text-[#f2e8e1] text-sm">
            © {new Date().getFullYear()} EstatePro. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
