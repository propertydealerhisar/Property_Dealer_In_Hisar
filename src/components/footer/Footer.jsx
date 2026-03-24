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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 gap-x-4">
              {data?.links?.items?.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.slug}`}
                  className="
                    text-sm
                    text-[color:var(--footerMuted)]
                    hover:text-[color:var(--accent)]
                    hover:underline
                    underline-offset-4
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
        <div className="flex flex-row gap-10 mb-12 justify-between">

          {/* ABOUT */}
          <div className="flex-1" >
            <Link
              href="/"
              className="
                text-xl font-semibold mb-3 inline-block
                text-[color:var(--footerText)]
              "
            >
              {data?.brand?.name}
            </Link>

            <div className="leading-relaxed text-sm text-[color:var(--footerMuted)] space-y-1">
              {data?.brand?.description?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          {/* POWERED BY */}
          {/* <div className="flex flex-col md:items-center items-start justify-center">
            <p className="text-sm mb-1 text-[color:var(--footerMuted)]">
              {data?.poweredBy?.label}
            </p>
            <span className="font-bold text-xl tracking-wide text-[color:var(--footerText)]">
              {data?.poweredBy?.name}
            </span>
          </div> */}

          {/* SOCIAL */}
          <div className="flex items-start gap-3">
            <span className="font-semibold text-lg">{data?.social?.heading}
</span>
            <Link href="#" className="hover:scale-110 transition">
              <FaInstagram className="h-7 w-7" />
            </Link>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-[color:var(--footerBorder)] pt-4 flex justify-between">
        <Link
        href="https://www.parcharmanch.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-sm text-[color:var(--footerMuted)]"
         >
        Designed By Parchar Manch
        </Link>
          <p className="text-center text-sm text-[color:var(--footerMuted)]">
            © {new Date().getFullYear()} {data?.copyright?.text}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
