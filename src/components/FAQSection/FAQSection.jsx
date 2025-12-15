"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-[#f2e8e1]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-14">
      <h2 className="text-4xl font-extrabold text-[#422c18]">
        {/* Frequently Asked <span className="text-[#422c18]">Questions</span> */}
        {data?.heading}
      </h2>
      <p className="text-[#422c18] mt-3">
        {/* Answers to the most common questions about our real estate services. */}
        {data?.subheading}
      </p>
    </div>

    {/* FAQ LIST */}
    <div className="space-y-5">

      {data?.faqs.map((item, i) => (
        <div
          key={i}
          className="bg-[#f2e8e1] shadow-md rounded-xl p-5 border border-[#422c18]"
        >
          {/* Question Row */}
          <button
            onClick={() => toggleFAQ(i)}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="text-lg font-semibold text-[#422c18]">
              {item.q}
            </span>

            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#422c18] text-xl"
            >
              {openIndex === i ? <FaMinus /> : <FaPlus />}
            </motion.span>
          </button>

          {/* Answer */}
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-3"
              >
                <p className="text-[#422c18] leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

    </div>
  </div>
</section>

  );
};

export default FAQSection;
