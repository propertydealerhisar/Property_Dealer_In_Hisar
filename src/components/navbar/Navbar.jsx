"use client"
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiPhoneCall } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        // initial={{ x: -100, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white shadow-sm sticky top-0 left-0 w-full z-50"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <div className="flex-shrink-0" data-aos="fade-right">
            <img
              src="https://pixydrops.com/wostin/main-html/assets/images/resources/logo-1.png"
              alt="Wostin Logo"
              className="h-10"
            />
          </div>

          {/* Mobile Toggle (☰ / ✖️) */}
          <div
            className="md:hidden text-2xl cursor-pointer z-[60]"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <FiX /> : <FiMenu />}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:flex-row md:space-x-8">
            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => `relative text-lg font-medium pb-1 group
                  ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}
                  before:content-[''] before:absolute before:bottom-0 before:left-0
                  before:h-[2px] before:w-full before:bg-[#ECDD5E]
                  before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-out
                  group-hover:before:scale-x-100
                  ${isActive ? 'before:scale-x-100 group-hover:before:scale-x-100' : ''}`}
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Contact Info (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-3" data-aos="fade-left">
            <div className="bg-[#ECDD5E] hover:bg-[#558E4C] p-3 rounded-full flex items-center justify-center transition-colors duration-300">
              <BiPhoneCall size={24} className="text-[#404A3D] hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-[16px] leading-tight">
              <p className="text-gray-500">Have Waste/Pickup?</p>
              <motion.p
                className="font-bold text-gray-800"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                +1– (246) 333–0088
              </motion.p>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ======= Mobile Sidebar ======= */}
      <AnimatePresence>
        {isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobile(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-[80%] sm:w-[60%] h-full bg-white shadow-lg p-6 z-50 flex flex-col space-y-6 origin-left"
            >
              {/* Logo */}
              <div className="flex justify-start mb-6">
                <img
                  src="https://pixydrops.com/wostin/main-html/assets/images/resources/logo-1.png"
                  alt="Wostin Logo"
                  className="h-10"
                />
              </div>

              {/* Menu Items */}
              {menu.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) => `
                    text-xl font-semibold transition-colors duration-200
                    ${isActive ? 'text-[#558E4C]' : 'text-gray-700 hover:text-[#558E4C]'}
                  `}
                  onClick={() => setIsMobile(false)}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Divider */}
              <div className="border-t pt-4 mt-4" />

              {/* Contact Info in Sidebar */}
              <div className="flex items-center space-x-3">
                <div className="bg-[#ECDD5E] hover:bg-[#558E4C] p-3 rounded-full flex items-center justify-center transition-colors duration-300">
                  <BiPhoneCall size={24} className="text-[#404A3D] hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-[16px] leading-tight">
                  <p className="text-gray-500">Have Waste/Pickup?</p>
                  <p className="font-bold text-gray-800 hover:text-[#558E4C] cursor-pointer transition-colors duration-300">
                    +1– (246) 333–0088
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
