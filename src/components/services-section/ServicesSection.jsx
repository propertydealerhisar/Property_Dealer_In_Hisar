"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaDollarSign,
  FaKey,
  FaChartBar,
  FaSuitcase,
  FaBalanceScale,
  FaRulerCombined,
  FaTruckMoving,
} from "react-icons/fa";

const services = [
  {
    title: "Flat for sale in Hisar",
    desc: "Choose from affordable to premium flats.",
    icon: <FaHome className="text-orange-500 text-4xl" />,
  },
  {
    title: "House for rent in Hisar",
    desc: "Perfect rental homes with flexible options.",
    icon: <FaDollarSign className="text-orange-500 text-4xl" />,
  },
  {
    title: "Shop for sale in Hisar",
    desc: "Ideal locations for business expansion.",
    icon: <FaKey className="text-orange-500 text-4xl" />,
  },
  {
    title: "Shop for rent in Hisar",
    desc: "Budget-friendly commercial rental options.",
    icon: <FaChartBar className="text-orange-500 text-4xl" />,
  },
  {
    title: "Plot for sale in Hisar",
    desc: "Residential & commercial plots across all sectors.",
    icon: <FaSuitcase className="text-orange-500 text-4xl" />,
  },
  {
    title: "Agriculture land for sale in Hisar",
    desc: "Verified farmlands with clear titles.",
    icon: <FaRulerCombined className="text-orange-500 text-4xl" />,
  },
  {
    title: "To-Let service in Hisar",
    desc: "Hassle-free rental solutions for owners & tenants.",
    icon: <FaTruckMoving className="text-orange-500 text-4xl" />,
  },
  {
    title: "Commercial property for sale in Hisar",
    desc: "Offices, showrooms & investment properties.",
    icon: <FaBalanceScale className="text-orange-500 text-4xl" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="md:text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
            Top <span className="text-orange-500">Real Estate Solutions </span> for Every Buyer
          </h2>
          <p className="text-gray-600 text-lg max-w-5xl mx-auto ">
            Explore all property categories designed to meet every real estate need in Hisar. From residential to commercial, our platform covers everything, so you never miss the right opportunity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
