"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const HeroSection = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔹 domain auto detect
  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 📱 phone → only numbers + max 10
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      console.log("Hero form error:", err);
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[color:var(--navbarBg)]" />

      <div className="relative z-10 max-w-7xl mx-auto py-8 grid md:grid-cols-12 gap-10 items-center">
        {/* LEFT */}
        <div className="md:col-span-7 lg:col-span-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-[color:var(--heading)]">
            {data?.heading}
          </h1>

          <div className="text-lg mb-8 max-w-3xl space-y-2 text-[color:var(--footerText)]">
            {data?.description?.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-[color:var(--cardBg)] p-6 rounded-xl shadow-xl border border-[color:var(--cardBorder)]">
            <h3 className="text-xl font-bold text-[color:var(--primary)]">
              Free Consultation
            </h3>
            <p className="text-sm mb-4 text-[color:var(--mutedText)]">
              Fill details & get a call back
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                required
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border rounded-md
                  border-[color:var(--cardBorder)]
                  focus:ring-2 focus:ring-[color:var(--primary)]
                  outline-none"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border rounded-md
                  border-[color:var(--cardBorder)]
                  focus:ring-2 focus:ring-[color:var(--primary)]
                  outline-none"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border rounded-md resize-none
                  border-[color:var(--cardBorder)]
                  focus:ring-2 focus:ring-[color:var(--primary)]
                  outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-md font-semibold
                  bg-[color:var(--btnPrimaryBg)]
                  text-[color:var(--btnPrimaryText)]
                  hover:bg-[color:var(--btnPrimaryHover)]
                  transition disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Submitting...
                  </span>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
