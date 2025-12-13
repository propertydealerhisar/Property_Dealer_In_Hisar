"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FeatureWithImage = () => {
  return (
    <section className="pt-10 pb-20 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========== MAIN WRAPPER ========== */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* =====================================
              LEFT CONTENT
          ===================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 lg:pr-12 text-left"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4"
            >
              PREMIUM PROPERTIES
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Why Choose Us for House Buying in <span className="text-orange-500">Hisar </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg"
            >
              Finding a house for sale in Hisar is seamless with the right support. We provide comprehensive real estate guidance so buyers can access trustworthy listings and thorough property insights. With our robust network and authentic resources, you remain informed and empowered throughout your home-buying journey.

            </motion.p>

            <motion.h3
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.45 }}
               viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
             >
             What Makes Us Different
             </motion.h3>

            {/* Features */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  viewport={{ once: true }}
  className="space-y-5 mb-10"
>
  {[
    {
      icon: (
       <svg
  className="h-6 w-6 text-orange-600"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 2l3 3 4 .5-2.5 3 1 4-3.5-2-3.5 2 1-4L5 5.5 9 5l3-3z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12l2 2 4-4"
  />
</svg>

      ),
      text: "Verified and trusted listings across Hisar",
    },
    {
      icon: (
        <svg
  className="h-6 w-6 text-orange-600"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 21v-1c0-2.8 3.1-5 8-5s8 2.2 8 5v1"
  />
</svg>
      ),
      text: "Expert support from Property Dealer in Hisar",
    },
    {
      icon: (
        <svg
  className="h-6 w-6 text-orange-600"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 10h18M7 6h10M10 14h4M5 18h14"
  />
</svg>
      ),
      text: "Transparent details & smooth buying process",
    },
  ].map((feature, idx) => (
    <motion.div
      key={idx}
      whileHover={{ x: 10 }}
      className="flex items-start"
    >
      <div className="h-10 w-10 flex items-center justify-center rounded-md bg-orange-100">
        {feature.icon}
      </div>

      <h3 className="ml-4 text-lg font-semibold text-gray-900">
        {feature.text}
      </h3>
    </motion.div>
  ))}
</motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
                >
                 View All Houses in Hisar
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-lg shadow-lg hover:bg-orange-50 transition-all duration-300"
                >
                 Connect With Property Experts
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* =====================================
              RIGHT SIDE IMAGE + FLOATING CARD
          ===================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Property"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 w-64"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>

                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    Expert Agents
                  </h4>
                  <p className="text-sm text-gray-500">24/7 Available</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Our team of experienced agents is always ready to help you find
                your perfect property.
              </p>
            </motion.div>

            {/* Decorative Bubbles */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-xl"
            />

            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute bottom-10 right-10 w-16 h-16 bg-amber-400 rounded-full opacity-20 blur-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureWithImage;
