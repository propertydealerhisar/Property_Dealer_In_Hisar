"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHome,
  FaKey,
  FaBuilding,FaStore,
  FaLandmark,
  FaTractor,FaHandshake,FaQuestionCircle,FaCity,FaBriefcase,FaChartLine,FaRupeeSign,FaDoorOpen,FaCrown
} from "react-icons/fa";

const ICON_MAP = {
  FaHome,
  FaKey,
  FaBuilding,
  FaStore,
  FaLandmark,
  FaTractor,
  FaHandshake,
  FaCity,FaBriefcase,FaChartLine,FaRupeeSign,FaDoorOpen,FaCrown
};

const DEFAULT_ICON = FaQuestionCircle;


const ServicesSection = ({data}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll
  ? data?.services
  : data?.services?.slice(0, 8);

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
          <p className="text-[#5a4636] text-lg max-w-5xl mx-auto ">
           {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
           })}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
          {visibleServices?.map((service, index) => (
            <Link key={index} href={`https://flatsforsaleinhisar.com`}>
            <motion.div
              
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#422c18]/10 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center"
            >
              <div className="flex justify-center mb-4">
                 {(() => {
                  const Icon = ICON_MAP[service.icon] || DEFAULT_ICON;
                   return <Icon className="text-[#422c18] text-4xl" />;
                  })()}
              </div>

              <h3 className="text-xl font-bold text-[#2b1c10] mb-2">
                {service.title}
              </h3>

              <p className="text-[#5a4636] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
            </Link>
          ))}
        </div>
          
            {/* View More / Less */}
         {data?.services?.length > 8 && (
          <div className="flex justify-end mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#422c18] font-semibold hover:underline"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;
