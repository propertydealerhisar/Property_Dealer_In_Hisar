"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = ({data}) => {
  return (
    <section id="contact-section" className="md:py-20 bg-[#f2e8e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT SIDE — FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#f2e8e1] p-4 md:p-8 rounded-2xl shadow-lg border border-[#422c18]"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#422c18] mb-6">
              {/* Get In <span className="text-[#422c18]">Touch</span> */}
              {data?.formSection?.heading}
            </h2>

            <p className="text-[#422c18] mb-8">
              {data?.formSection?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
           })}
            </p>

            <form className="space-y-5">

              <div>
                <label className="text-[#422c18] font-medium">{data?.formSection?.fields[0]?.label}</label>
                <input
                  type={data?.formSection?.fields[0]?.type}
                  placeholder={data?.formSection?.fields[0]?.placeholder}
                  className="w-full mt-2 px-4 py-3 border border-[#422c18] rounded-lg bg-[#f2e8e1] text-[#422c18] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#422c18] font-medium">{data?.formSection?.fields[1]?.label}</label>
                <input
                  type={data?.formSection?.fields[1]?.type}
                  placeholder={data?.formSection?.fields[1]?.placeholder}
                  className="w-full mt-2 px-4 py-3 border border-[#422c18] rounded-lg bg-[#f2e8e1] text-[#422c18] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#422c18] font-medium">{data?.formSection?.fields[2]?.label}</label>
                <input
                  type={data?.formSection?.fields[2]?.type}
                  placeholder={data?.formSection?.fields[2]?.placeholder}
                  className="w-full mt-2 px-4 py-3 border border-[#422c18] rounded-lg bg-[#f2e8e1] text-[#422c18] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#422c18] font-medium">{data?.formSection?.fields[3]?.label}</label>
                <textarea
                  rows="4"
                  placeholder={data?.formSection?.fields[3]?.placeholder}
                  className="w-full mt-2 px-4 py-3 border border-[#422c18] rounded-lg bg-[#f2e8e1] text-[#422c18] focus:outline-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#422c18] text-[#f2e8e1] py-3 rounded-lg text-lg font-semibold shadow-md"
              >
                {data?.formSection?.submitButton}
              </motion.button>
            </form>
          </motion.div>

          {/* ================= RIGHT SIDE — INFO BOX ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#f2e8e1] p-4 md:p-8 rounded-2xl shadow-lg border border-[#422c18] flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#422c18] mb-5">
              Contact <span className="text-[#422c18]">Information</span>
            </h3>

            <p className="text-[#422c18] mb-8 leading-relaxed">
              We're here to help! Reach out to us anytime and our team will assist you
              with property guidance, inquiries, and support.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center bg-[#422c18] text-[#f2e8e1] rounded-xl">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-[#422c18] font-semibold">Phone</p>
                  <p className="text-[#422c18] text-sm">+1 (246) 333-0088</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center bg-[#422c18] text-[#f2e8e1] rounded-xl">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-[#422c18] font-semibold">Email</p>
                  <p className="text-[#422c18] text-sm">info@estatepro.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center bg-[#422c18] text-[#f2e8e1] rounded-xl">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-[#422c18] font-semibold">Office Address</p>
                  <p className="text-[#422c18] text-sm">2799 Mainroad Ave, NY</p>
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
