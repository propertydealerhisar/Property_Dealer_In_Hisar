"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cleanDomain } from "@/utils/helpers";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = ({ domain }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  const navLinks = [
    { name: "Home", scroll: "top" },
    { name: "Blog", path: "/" },
    { name: "Contact", scroll: "contact" },
  ];

  const handleScroll = (type) => {
    if (type === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (type === "contact") {
      const el = document.getElementById("contact-section");
      if (!el) return;

      const y =
        el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className="
          sticky top-0 z-50 shadow-lg
          bg-[color:var(--navbarBg)]
        "
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-8">

            {/* LOGO */}
            <Link href="/">
              <span
                className="
                  text-md font-medium tracking-wide
                  text-[color:var(--heading)]
                  hover:opacity-90 transition
                "
              >
                {cleanDomain(domain)}
              </span>
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const active = currentPage === link.name;

                const baseClass = `
                  px-5 py-2 rounded-lg font-medium transition-all duration-300
                  text-[color:var(--heading)]
                  hover:bg-[color:var(--primary)]
                  hover:text-[color:var(--buttonText)]
                `;

                const activeClass = `
                  bg-[color:var(--primary)]
                  text-[color:var(--buttonText)]
                `;

                if (link.scroll) {
                  return (
                    <motion.button
                      key={link.name}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        setCurrentPage(link.name);
                        handleScroll(link.scroll);
                      }}
                      className={`${baseClass} ${active ? activeClass : ""}`}
                    >
                      {link.name}
                    </motion.button>
                  );
                }

                return (
                  <motion.div key={link.name} whileHover={{ y: -2 }}>
                    <Link
                      href={link.path}
                      onClick={() => setCurrentPage(link.name)}
                      className={`${baseClass} ${active ? activeClass : ""}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                ml-auto md:hidden
                text-[color:var(--heading)]
              "
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* MENU */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                fixed top-16 left-0 w-full z-50 md:hidden
                bg-[color:var(--navbarBg)]
              "
            >
              <div className="p-4 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = currentPage === link.name;

                  const baseClass = `
                    w-full text-left px-4 py-3 rounded-lg font-medium
                    text-[color:var(--heading)]
                    hover:bg-[color:var(--primary)]
                    hover:text-[color:var(--buttonText)]
                    transition
                  `;

                  const activeClass = `
                    bg-[color:var(--primary)]
                    text-[color:var(--buttonText)]
                  `;

                  if (link.scroll) {
                    return (
                      <button
                        key={link.name}
                        onClick={() => {
                          setCurrentPage(link.name);
                          setIsOpen(false);
                          handleScroll(link.scroll);
                        }}
                        className={`${baseClass} ${active ? activeClass : ""}`}
                      >
                        {link.name}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => {
                        setCurrentPage(link.name);
                        setIsOpen(false);
                      }}
                      className={`${baseClass} ${active ? activeClass : ""}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
