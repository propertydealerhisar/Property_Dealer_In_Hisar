"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ==================== TOP BAR ==================== */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-r from-orange-500 to-amber-600 text-white hidden md:block shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-amber-200" />
              <span className="text-sm">2799 Mainroad Ave., NY Diego, Bd 1704</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-amber-200" />
              <span className="text-sm">(+88) 01712570051</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-amber-200" />
              <span className="text-sm">help@landestate.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {[
              { icon: <FaFacebook />, label: "Facebook" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaLinkedin />, label: "LinkedIn" },
              { icon: <FaInstagram />, label: "Instagram" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ scale: 1.2, color: "#fff" }}
                className="text-amber-100 hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ==================== MAIN NAVBAR ==================== */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* --------------- LOGO --------------- */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <motion.div whileHover={{ rotate: 5 }} className="h-10 w-auto">
                  <img
                    src="https://themazine.com/thewp/landestate/wp-content/themes/landestate/images/logo/logo.png"
                    alt="Land Estate Logo"
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* --------------- DESKTOP MENU --------------- */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={link.path}
                    className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                      currentPage === link.name
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    }`}
                    onClick={() => setCurrentPage(link.name)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Search Button */}
              <motion.div whileHover={{ scale: 1.1 }} className="ml-4">
                <button className="p-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md">
                  <FaSearch className="h-4 w-4" />
                </button>
              </motion.div>
            </div>

            {/* --------------- MOBILE MENU BUTTON --------------- */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition"
              >
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                  {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* ==================== MOBILE MENU ==================== */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-3 pt-2 pb-4 space-y-1 bg-white shadow-lg">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ x: 10 }}>
                <Link
                  href={link.path}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    currentPage === link.name
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                  onClick={() => {
                    setCurrentPage(link.name);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Search */}
            <button className="w-full flex items-center justify-center p-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-md hover:from-orange-600 hover:to-amber-600 transition duration-300">
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
