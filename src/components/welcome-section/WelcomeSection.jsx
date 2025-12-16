"use client";

import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = ({data}) => {
  return (
    <section className="relative pt-10 md:py-20 bg-gradient-to-br from-[#f2e8e1] to-[#e7d8cd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TEXT WRAPPER */}
        <div className="max-w-6xl mx-auto text-left sm:text-left md:text-left lg:text-center">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#422c18] font-medium uppercase tracking-wider mb-4 text-sm md:text-base"
          >
           {data?.title}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              font-extrabold text-[#2b1c10] mb-6 
              text-3xl md:text-4xl lg:text-5xl
              leading-tight
            "
          >
            {data?.heading}
            {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#422c18] to-[#6b4a2e]">
               Hisar Easily
            </span> */}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              text-[#5a4636] mb-10 md:mb-2 leading-relaxed 
              text-base sm:text-lg md:text-xl max-5xl mx-auto
            "
          >
           {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
           })}
          </motion.p>

        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-64 h-64 bg-[#422c18] rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-[#6b4a2e] rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default WelcomeSection;
