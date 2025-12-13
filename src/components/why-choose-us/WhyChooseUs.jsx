"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Free unlisted property listing",
    // desc: "Our team consists of highly trained real estate professionals with deep market knowledge.",
  },
  {
    title: "Free business listing service",
    // desc: "We tailor our approach to meet your unique needs and preferences.",
  },
  {
    title: "Verified property details",
    // desc: "Access to exclusive listings and a wide network of industry professionals.",
  },
  {
    title: "Zero hidden charges",
    // desc: "We believe in complete transparency throughout the buying or selling journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Why Our Platform is the Most <span className="text-orange-500">Trusted in Hisar</span>
            </h2>

             <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed mb-4">
                      As a dedicated venture of Property Dealer in Hisar, and powered by Deal Acres Hisar, we offer premium and reliable real estate services tailored for home buyers. Our mission is to make your house for sale in Hisar search effortless, transparent, and trustworthy. You get access to genuine details, free listing features, and helpful tools that make property buying smooth and stress-free.
                    </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaCheckCircle className="text-blue-500 text-xl" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    {/* <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2048&q=80"
                alt="Luxury Property"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
