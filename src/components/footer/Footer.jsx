"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = ({ data }) => {
  return (
    <footer
      className="
        bg-[color:var(--footerBg)]
        text-[color:var(--footerText)]
        pt-16 pb-6 px-4 sm:px-6
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP LINKS ================= */}
        {data?.links?.items?.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-semibold mb-6 text-[color:var(--footerText)]">
              {data?.links?.heading}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {data?.links?.items?.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.slug}`}
                  className="
                    text-sm
                    text-[color:var(--footerMuted)]
                    hover:text-[color:var(--accent)]
                    transition
                  "
                >
                  {data?.links?.prefix} {item.area}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* ABOUT */}
          <div>
            <Link
              href="/"
              className="text-xl font-semibold mb-3 inline-block text-[color:var(--footerText)]"
            >
              {data?.brand?.name}
            </Link>

            <p className="leading-relaxed text-md text-[color:var(--footerMuted)]">
              {data?.brand?.description?.map((item, index) => (
                <span key={index} className="block">
                  {item}
                </span>
              ))}
            </p>
          </div>

          {/* POWERED BY */}
          <div className="flex flex-col md:items-center items-start justify-center">
            <p className="text-sm mb-1 text-[color:var(--footerMuted)]">
              {data?.poweredBy?.label}
            </p>
            <span className="font-bold text-xl tracking-wide text-[color:var(--footerText)]">
              {data?.poweredBy?.name}
            </span>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col md:items-end items-start">
            <h4 className="font-semibold mb-3 text-lg text-[color:var(--footerText)]">
              {data?.social?.heading}
            </h4>

            <div className="flex gap-4 text-xl">
              <Link href={data?.social?.links[0]?.url} className="hover:text-[color:var(--accent)]">
                <FaFacebook />
              </Link>
              <Link href={data?.social?.links[1]?.url} className="hover:text-[color:var(--accent)]">
                <FaTwitter />
              </Link>
              <Link href={data?.social?.links[2]?.url} className="hover:text-[color:var(--accent)]">
                <FaInstagram />
              </Link>
              <Link href={data?.social?.links[3]?.url} className="hover:text-[color:var(--accent)]">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-[color:var(--footerBorder)] pt-4">
          <p className="text-center text-sm text-[color:var(--footerMuted)]">
            © {new Date().getFullYear()} {data?.copyright?.text}
          </p>
        </div>

      </div>  
    </footer>
  );
};

export default Footer;
