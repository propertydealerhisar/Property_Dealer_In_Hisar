"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="
        py-20 px-4 sm:px-6
        bg-[color:var(--bodyBg)]
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="mb-14">
          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl
              font-extrabold
              text-[color:var(--primary)]
            "
          >
            {data?.heading}
          </h2>

          <p
            className="
              mt-3 text-lg md:text-xl font-medium
              text-[color:var(--text)]
            "
          >
            {data?.subheading}
          </p>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-5">
          {data?.faqs.map((item, i) => (
            <div
              key={i}
              className="
                rounded-xl p-5
                bg-[color:var(--cardBg)]
                border border-[color:var(--cardBorder)]
                shadow-sm
              "
            >
              {/* QUESTION ROW */}
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span
                  className="
                    text-lg font-semibold
                    text-[color:var(--text)]
                  "
                >
                  {item.q}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="
                    text-xl
                    text-[color:var(--primary)]
                  "
                >
                  {openIndex === i ? <FaMinus /> : <FaPlus />}
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-3"
                  >
                    <p
                      className="
                        leading-relaxed
                        text-[color:var(--mutedText)]
                      "
                    >
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
  