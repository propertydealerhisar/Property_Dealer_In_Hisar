"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({data}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const backgroundImages = [
  //   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
  //   "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2053&q=80",
  //   "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2070&q=80",
  //   "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2074&q=80",
  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % data?.backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {data?.backgroundImages?.map((image, index) => (
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

        <div className="absolute inset-0 bg-gradient-to-b from-[#422c18]/70 via-[#422c18]/50 to-[#422c18]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-left sm:text-left md:text-left lg:text-center xl:text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-[#f2e8e1]/20 backdrop-blur-sm rounded-full mb-6 border border-[#f2e8e1]/30"
          >
            <span className="w-3 h-3 rounded-full bg-[#f2e8e1] mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-[#f2e8e1]">
              {data?.badge}
            </span>
          </motion.div>

          {/* ✅ HEADING – TEXT COLOR ONLY */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            <span className="text-white">{data?.heading} </span>

            {/* <span className="text-white">
              Sale in Hisar
            </span> */}

            {/* <span className="text-white"> – </span> */}

            {/* <span className="bg-clip-text text-transparent bg-white">
              Find Your Ideal Home Today
            </span> */}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl text-lg md:text-xl text-[#f2e8e1] mb-10 mx-0 lg:mx-auto"
          >
           {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
           })}
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
                href={`/${data?.buttons[0]?.path}`}
                className="px-8 py-3 bg-gradient-to-r from-[#422c18] to-[#5a3b22] text-[#f2e8e1] font-medium rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 block"
              >
                {data?.buttons[0]?.label}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${data?.buttons[1]?.path}`}
                className="px-8 py-3 bg-[#f2e8e1]/90 backdrop-blur-sm text-[#422c18] font-medium rounded-lg shadow-lg hover:bg-[#f2e8e1] transition-all duration-300 block border border-[#f2e8e1]/40"
              >
                {data?.buttons[1]?.label}
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
