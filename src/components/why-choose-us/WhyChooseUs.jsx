"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Free unlisted property listing",
  },
  {
    title: "Free business listing service",
  },
  {
    title: "Verified property details",
  },
  {
    title: "Zero hidden charges",
  },
];

const WhyChooseUs = ({data}) => {
  return (
    <section className="py-10 md:py-20 bg-[#f2e8e1]">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2b1c10] mb-6 leading-tight">
              {/* Why Our Platform is the Most{" "}
              <span className="text-[#422c18]">Trusted in Hisar</span> */}
              {data?.heading}
            </h2>

            <p className="text-[#5a4636] mt-1 text-sm md:text-base leading-relaxed mb-4">
              {data?.description?.map((item,index)=>{
            return <span key={index} className="">{item}</span>
           })}
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {data?.points?.map((item, i) => (
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
                    <div className="h-5 w-5 rounded-full bg-[#422c18]/15 flex items-center justify-center">
                      <FaCheckCircle className="text-[#422c18] text-xl" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#2b1c10]">
                      {item}
                    </h3>
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
              className="rounded-3xl overflow-hidden shadow-2xl border border-[#422c18]/10"
            >
              <img
                src={data?.image?.src}
                alt={data?.image?.alt}
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
