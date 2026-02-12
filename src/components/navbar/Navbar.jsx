"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cleanDomain } from "@/utils/helpers";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ domain }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-[color:var(--navbarBg)] shadow-md px-4 sm:px-6">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-between h-18 py-3">

            {/* LOGO */}
            <Link
              href="/"
              className="
                text-lg sm:text-xl font-semibold tracking-wide
                text-[color:var(--heading)]
                hover:opacity-90 transition
              "
            >
              {cleanDomain(domain)}
            </Link>

            {/* ================= DESKTOP LINKS ================= */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="
                    relative text-lg font-medium
                    text-[color:var(--heading)]
                    transition
                    after:content-['']
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-[color:var(--heading)]
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[color:var(--heading)]"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed top-[72px] left-0 w-full z-40 md:hidden bg-[color:var(--navbarBg)] shadow-lg">
          <div className="flex flex-col gap-5 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="
                  text-lg font-medium
                  text-[color:var(--heading)]
                  underline underline-offset-4
                "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
