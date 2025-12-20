"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

 function cleanDomain(domain = "") {
  if (!domain) return "";

  // remove port (localhost:3000 → localhost)
  domain = domain.replace(/:\d+$/, "");

  // remove www (www.abc.com → abc.com)
  domain = domain.replace(/^www\./, "");

  return domain;
}


const Navbar = ({domain}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  // ✅ FINAL NAV LINKS
  const navLinks = [
    { name: "Home", scroll: "top" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", scroll: "contact" },
  ];

  // ✅ SCROLL HANDLER
  const handleScroll = (type) => {
    if (type === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (type === "contact") {
      const el = document.getElementById("contact-section");
      if (!el) return;

      const y =
        el.getBoundingClientRect().top + window.pageYOffset - 80; // navbar height
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      {/* <div
        className="hidden md:block shadow-md"
        style={{ backgroundColor: "#422c18", color: "#f2e8e1" }}
      >
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between text-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> 2799 Mainroad Ave., NY Diego
            </span>
            <span className="flex items-center gap-2">
              <FaPhone /> (+88) 01712570051
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> help@landestate.com
            </span>
          </div>

          <div className="flex gap-4">
            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="cursor-pointer opacity-80 hover:opacity-100"
                />
              )
            )}
          </div>
        </div>
      </div> */}

      {/* ================= NAVBAR ================= */}
      <nav
        className="sticky top-0 z-50 shadow-lg"
        style={{ backgroundColor: "#f2e8e1" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-8">

            {/* LOGO */}
            <Link href="/">
              {/* <img
                src="https://themazine.com/thewp/landestate/wp-content/themes/landestate/images/logo/logo.png"
                alt="Logo"
                className="h-10"
              /> */}{cleanDomain(domain)}
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const active = currentPage === link.name;

                // 👉 HOME + CONTACT (SCROLL)
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
                      className={`px-5 py-2 rounded-lg font-medium transition-all duration-300
                        ${
                          active
                            ? "bg-[#422c18] text-[#f2e8e1]"
                            : "text-[#422c18] hover:bg-[#422c18] hover:text-[#f2e8e1]"
                        }
                      `}
                    >
                      {link.name}
                    </motion.button>
                  );
                }

                // 👉 BLOG (ROUTE)
                return (
                  <motion.div key={link.name} whileHover={{ y: -2 }}>
                    <Link
                      href={link.path}
                      onClick={() => setCurrentPage(link.name)}
                      className={`px-5 py-2 rounded-lg font-medium transition-all duration-300
                        ${
                          active
                            ? "bg-[#422c18] text-[#f2e8e1]"
                            : "text-[#422c18] hover:bg-[#422c18] hover:text-[#f2e8e1]"
                        }
                      `}
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
              className="ml-auto md:hidden text-[#422c18]"
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
              className="fixed top-16 left-0 w-full z-50 md:hidden"
              style={{ backgroundColor: "#f2e8e1" }}
            >
              <div className="p-4 flex flex-col items-start gap-2">
                {navLinks.map((link) => {
                  const active = currentPage === link.name;

                  if (link.scroll) {
                    return (
                      <button
                        key={link.name}
                        onClick={() => {
                          setCurrentPage(link.name);
                          setIsOpen(false);
                          handleScroll(link.scroll);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium
                          ${
                            active
                              ? "bg-[#422c18] text-[#f2e8e1]"
                              : "text-[#422c18] hover:bg-[#422c18] hover:text-[#f2e8e1]"
                          }
                        `}
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
                      className={`w-full px-4 py-3 rounded-lg font-medium
                        ${
                          active
                            ? "bg-[#422c18] text-[#f2e8e1]"
                            : "text-[#422c18] hover:bg-[#422c18] hover:text-[#f2e8e1]"
                        }
                      `}
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
