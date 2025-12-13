"use client";

import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section className="relative pt-10 md:py-20 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TEXT WRAPPER */}
        <div className="max-w-6xl mx-auto text-left sm:text-left md:text-left lg:text-center">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-orange-600 font-medium uppercase tracking-wider mb-4 text-sm md:text-base"
          >
            Your Trusted Real Estate Platform in Hisar
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              font-extrabold text-gray-900 mb-6 
              text-3xl md:text-4xl lg:text-5xl
              leading-tight
            "
          >
            Find the Best Properties in {" "}
            <span className="text-orange-500">Hisar Easily</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              text-gray-600 mb-10 md:mb-2 leading-relaxed 
              text-base sm:text-lg md:text-xl max-5xl mx-auto
            "
          >
            Your search for the perfect house for sale in Hisar ends here! With a simple interface, clear information, and updated listings, we ensure you make a confident buying decision. Our platform—powered by the trusted network of Property Dealers in Hisar and supported by Deal Acres Hisar—brings reliability and transparency to every property search. Explore verified sellers, compare prices, and get expert support to choose the right home.
            Begin your journey to owning a beautiful house for sale in Hisar now—take action today and make your dream home a reality.
          </motion.p>

        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default WelcomeSection;
