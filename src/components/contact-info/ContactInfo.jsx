"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className=" md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ====================================
               LEFT SIDE — FORM
          ==================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Get In <span className="text-orange-500">Touch</span>
            </h2>

            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back to you as soon as possible.
            </p>

            <form className="space-y-5">

              <div>
                <label className="text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 234 567 890"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all shadow-md"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* ====================================
               RIGHT SIDE — INFO BOX
          ==================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              Contact <span className="text-orange-500">Information</span>
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We're here to help! Reach out to us anytime and our team will assist you
              with property guidance, inquiries, and support.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-xl">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Phone</p>
                  <p className="text-gray-600 text-sm">+1 (246) 333-0088</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-xl">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Email</p>
                  <p className="text-gray-600 text-sm">info@estatepro.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-xl">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Office Address</p>
                  <p className="text-gray-600 text-sm">2799 Mainroad Ave, NY</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
