"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2074&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0 ">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.05,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* TEXT ALIGNMENT FIXED HERE */}
        <div className="text-left sm:text-left md:text-left lg:text-center xl:text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-400/30"
          >
            <span className="w-3 h-3 rounded-full bg-orange-400 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-white">
              Premium Properties Available
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            House for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-white">
              Sale in Hisar
            </span>{" "}
            – Find Your Ideal Home Today
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
              max-w-5xl
              text-lg md:text-xl text-white mb-10
              mx-0 lg:mx-auto
            "
          >
            Looking for your dream property in Hisar? Our platform brings you the best house for sale in Hisar options with verified listings, user-friendly filters, and accurate details. Whether you need a budget-friendly house, a premium villa, or a ready-to-move home, you’ll find everything here in one place. Explore the most trusted properties, compare features, and make the right real estate decision with ease. Your perfect house for sale in Hisar is just a click away.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:justify-start lg:justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-500 transition-all duration-300 block"
              >
                Explore Listings
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white/90 backdrop-blur-sm text-orange-600 font-medium rounded-lg shadow-lg hover:bg-white transition-all duration-300 block border border-white/20"
              >
                Contact Property Experts
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
