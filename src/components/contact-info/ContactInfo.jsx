"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ContactInfo = ({ data, website = "faridabad.com" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
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
          website,
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

      <section
        id="contact-section"
        className="
          md:py-20 px-4 sm:px-6
          bg-[color:var(--bodyBg)]
          overflow-x-hidden
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ================= LEFT — FORM ================= */}
            <div
              className="
                p-4 md:p-8 rounded-2xl shadow-lg
                bg-[color:var(--cardBg)]
                border border-[color:var(--cardBorder)]
              "
            >
              <h2
                className="
                  text-3xl md:text-4xl font-extrabold mb-6
                  text-[color:var(--primary)]
                "
              >
                {data?.formSection?.heading}
              </h2>

              <p
                className="
                  text-lg mb-8 font-medium
                  text-[color:var(--text)]
                "
              >
                {data?.formSection?.description?.map((item, index) => (
                  <span key={index} className="block">
                    {item}
                  </span>
                ))}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME */}
                <div>
                  <label className="font-medium text-[color:var(--heading)]">
                    {data?.formSection?.fields[0]?.label}
                  </label>
                  <input
                    name="name"
                    type={data?.formSection?.fields[0]?.type}
                    placeholder={data?.formSection?.fields[0]?.placeholder}
                    value={form.name}
                    onChange={handleChange}
                    className="
                      w-full mt-2 px-4 py-3 rounded-lg
                      bg-[color:var(--cardBg)]
                      text-[color:var(--text)]
                      border border-[color:var(--cardBorder)]
                      focus:outline-none
                      focus:ring-2 focus:ring-[color:var(--primary)]
                    "
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="font-medium text-[color:var(--heading)]">
                    {data?.formSection?.fields[2]?.label}
                  </label>
                  <input
                    name="phone"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    type={data?.formSection?.fields[2]?.type}
                    placeholder={data?.formSection?.fields[2]?.placeholder}
                    value={form.phone}
                    onChange={handleChange}
                    className="
                      w-full mt-2 px-4 py-3 rounded-lg
                      bg-[color:var(--cardBg)]
                      text-[color:var(--text)]
                      border border-[color:var(--cardBorder)]
                      focus:outline-none
                      focus:ring-2 focus:ring-[color:var(--primary)]
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="font-medium text-[color:var(--heading)]">
                    {data?.formSection?.fields[3]?.label}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder={data?.formSection?.fields[3]?.placeholder}
                    value={form.message}
                    onChange={handleChange}
                    className="
                      w-full mt-2 px-4 py-3 rounded-lg resize-none
                      bg-[color:var(--cardBg)]
                      text-[color:var(--text)]
                      border border-[color:var(--cardBorder)]
                      focus:outline-none
                      focus:ring-2 focus:ring-[color:var(--primary)]
                    "
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="
                    w-full py-3 rounded-lg text-lg font-semibold
                    bg-[color:var(--primary)]
                    text-[color:var(--buttonText)]
                    hover:bg-[color:var(--hover)]
                    transition
                  "
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            {/* ================= RIGHT — INFO ================= */}
            <div
              className="
                p-4 md:p-8 rounded-2xl shadow-lg
                bg-[color:var(--cardBg)]
                border border-[color:var(--cardBorder)]
                flex flex-col justify-center
              "
            >
              <h3
                className="
                  text-2xl md:text-3xl font-bold mb-5
                  text-[color:var(--primary)]
                "
              >
                Contact Information
              </h3>

              <p
                className="
                  mb-8 leading-relaxed font-medium text-lg
                  text-[color:var(--text)]
                "
              >
                Trust isn’t claimed. It’s earned.
                <br /><br />
                Recognized by the Haryana Government and featured by Dainik Bhaskar,
                we set a benchmark for credibility in real estate.
                <br /><br />
                Verified listings. Authentic information. Zero guesswork.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="
                      h-12 w-12 flex items-center justify-center
                      rounded-xl
                      bg-[color:var(--primary)]
                      text-[color:var(--buttonText)]
                    "
                  >
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--heading)]">
                      Phone
                    </p>
                    <p className="text-sm text-[color:var(--mutedText)]">
                      +1 (246) 333-0088
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="
                      h-12 w-12 flex items-center justify-center
                      rounded-xl
                      bg-[color:var(--primary)]
                      text-[color:var(--buttonText)]
                    "
                  >
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--heading)]">
                      Email
                    </p>
                    <p className="text-sm text-[color:var(--mutedText)]">
                      info@estatepro.com
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
