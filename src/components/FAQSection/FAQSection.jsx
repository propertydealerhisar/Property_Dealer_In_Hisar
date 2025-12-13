"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: " How can I find the best house for sale in Hisar?",
    a: "Browse all verified listings on our platform, review locations, prices, and features, and connect directly with property experts for personalized assistance.",
  },
  {
    q: "Are the listings genuine and verified?",
    a: "Yes, the listings are verified through our network of trusted Property Dealers in Hisar and supported by Deal Acres Hisar to ensure authenticity.",
  },
  {
    q: "Can I list my property for free?",
    a: "Absolutely! Our platform offers free, unlisted property listings, enabling property owners to reach genuine buyers more easily.",
  },
  {
    q: "Do you offer assistance for home buyers?",
    a: "We offer comprehensive assistance, from property search to documentation, to keep your buying process straightforward and worry-free.",
  },
  {
    q: " What types of properties are available in Hisar?",
    a: "You can find houses, flats, shops, plots, and commercial spaces for sale in Hisar, available across all budgets and top locations.",
  },{
    q: "Can I directly contact sellers?",
    a: "Yes, you can contact sellers or property dealers directly using the details provided on the listing pages.",
  },{
    q: "Do you have rental properties too?",
    a: "Our platform includes house rentals, shop rentals, flats, and additional options available in Hisar.",
  },{
    q: "Is Hisar a good place to invest in property?",
    a: "Hisar is experiencing notable residential and commercial growth, making it a promising destination for long-term property investment.",
  },
  {
    q: "How often are listings updated?",
    a: "Listings are updated regularly to ensure you have access to the latest house-for-sale opportunities in Hisar.",
  },
  {
    q: "What makes your service different from others?",
    a: "We offer a trusted, transparent, and buyer-friendly experience, backed by Deal Acres Hisar's strong real estate expertise.Hisar.",
  },

];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className=" mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Answers to the most common questions about our real estate services.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5 ">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-5 border border-gray-100"
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.q}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-orange-500 text-xl"
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
                    <p className="text-gray-600 leading-relaxed">
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
