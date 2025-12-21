"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ContactInfo = ({data,website="faridabad.com"}) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
  const { name, value } = e.target;

  // ✅ Phone validation: only numbers, max 10 digits
  if (name === "phone") {
    // allow only digits
    if (!/^\d*$/.test(value)) return;

    // max 10 digits
    if (value.length > 10) return;
  }

  setForm({ ...form, [name]: value });
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
  toast.error("All fields are required");
  return;
}

if (form.phone.length !== 10) {
  toast.error("Phone number must be exactly 10 digits");
  return;
}

    setLoading(true);

    try {
      const res = await fetch("/api/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          website, // ✅ domain from props
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Form submitted successfully");
        setForm({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong");
      }

    } catch (err) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
    <Toaster position="top-right" />
    <section id="contact-section" className="md:py-20 bg-[#f2e8e1] overflow-x-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">

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

            <p className="text-[#422c18] text-lg mb-8 font-medium">
              {data?.formSection?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
           })}
            </p>

            <form onSubmit={handleSubmit}  className="space-y-5">

              <div>
                <label className="text-[#422c18] font-medium">{data?.formSection?.fields[0]?.label}</label>
                <input
                 name="name" 
                  type={data?.formSection?.fields[0]?.type}
                  placeholder={data?.formSection?.fields[0]?.placeholder}
                   value={form.name}
                    onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-[#422c18] rounded-lg bg-[#f2e8e1] text-[#422c18] focus:outline-none"
                />
              </div>

              {/* <div>
                <label className="text-[#422c18] font-medium">{data?.formSection?.fields[1]?.label}</label>
                <input
                  type={data?.formSection?.fields[1]?.type}
                  placeholder={data?.formSection?.fields[1]?.placeholder}
                  className="w-full mt-2 px-4 py-3 border border-[#422c18] rounded-lg bg-[#f2e8e1] text-[#422c18] focus:outline-none"
                />
              </div> */}

              <div>
                <label className="text-[#422c18] font-medium">{data?.formSection?.fields[2]?.label}</label>
                <input
                name="phone" 
                inputMode="numeric"     
                pattern="[0-9]*" 
                  type={data?.formSection?.fields[2]?.type}
                  placeholder={data?.formSection?.fields[2]?.placeholder}
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-[#422c18] rounded-lg bg-[#f2e8e1] text-[#422c18] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#422c18] font-medium">{data?.formSection?.fields[3]?.label}</label>
                <textarea
                name="message"  
                  rows="4"
                  placeholder={data?.formSection?.fields[3]?.placeholder}
                   value={form.message}
                   onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-[#422c18] rounded-lg bg-[#f2e8e1] text-[#422c18] focus:outline-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                type="submit"
                className="w-full bg-[#422c18] text-[#f2e8e1] py-3 rounded-lg text-lg font-semibold shadow-md"
              >
                {loading ? "Sending..." : "Submit"}
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

            <p className="text-[#422c18] mb-8 leading-relaxed font-medium text-lg">
              Trust isn’t claimed. It’s earned. <br />

That’s why our platform stands proudly recognized by the Haryana Government and approved at the state level, setting a strong benchmark for credibility in real estate. Adding to this trust, Dainik Bhaskar—India’s third-largest newspaper—has featured and awarded us for our excellence and transparency. <br />

For buyers, sellers, and investors, this means peace of mind. Verified listings. Authentic information. Zero guesswork. <br />

When authority backs us and credibility speaks for us, the choice becomes simple. <br />

So ask yourself—why settle for ordinary, when you can choose a platform trusted by the government and celebrated by the media?
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
    </>
  );
};

export default ContactInfo;
