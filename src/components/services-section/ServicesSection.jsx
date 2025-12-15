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

const servicess = [
  {
    // title: "Flat for sale in Hisar",
    // desc: "Choose from affordable to premium flats.",
    icon: <FaHome className="text-[#422c18] text-4xl" />,
  },
  {
    // title: "House for rent in Hisar",
    // desc: "Perfect rental homes with flexible options.",
    icon: <FaDollarSign className="text-[#422c18] text-4xl" />,
  },
  {
    // title: "Shop for sale in Hisar",
    // desc: "Ideal locations for business expansion.",
    icon: <FaKey className="text-[#422c18] text-4xl" />,
  },
  {
    // title: "Shop for rent in Hisar",
    // desc: "Budget-friendly commercial rental options.",
    icon: <FaChartBar className="text-[#422c18] text-4xl" />,
  },
  {
    // title: "Plot for sale in Hisar",
    // desc: "Residential & commercial plots across all sectors.",
    icon: <FaSuitcase className="text-[#422c18] text-4xl" />,
  },
  {
    // title: "Agriculture land for sale in Hisar",
    // desc: "Verified farmlands with clear titles.",
    icon: <FaRulerCombined className="text-[#422c18] text-4xl" />,
  },
  {
    // title: "To-Let service in Hisar",
    // desc: "Hassle-free rental solutions for owners & tenants.",
    icon: <FaTruckMoving className="text-[#422c18] text-4xl" />,
  },
  {
    // title: "Commercial property for sale in Hisar",
    // desc: "Offices, showrooms & investment properties.",
    icon: <FaBalanceScale className="text-[#422c18] text-4xl" />,
  },
];

const ServicesSection = ({data}) => {
  return (
    <section className="py-10 md:py-20 bg-[#f2e8e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="md:text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2b1c10] mb-2">
            {/* Top{" "}
            <span className="text-[#422c18]">
              Real Estate Solutions
            </span>{" "}
            for Every Buyer */}
            {data?.heading}
          </h2>
          <p className="text-[#5a4636] text-lg max-w-5xl mx-auto">
            {data?.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data?.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#422c18]/10 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center"
            >
              <div className="flex justify-center mb-4">
                {servicess[index]?.icon}
              </div>

              <h3 className="text-xl font-bold text-[#2b1c10] mb-2">
                {service.title}
              </h3>

              <p className="text-[#5a4636] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
