"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { ContactCard } from "./ui/ContactCard";
import { FormInput } from "./ui/FormInput";
import { FormTextarea } from "./ui/FormTextarea";
import { FormLabel } from "./ui/FormLabel";
import { PrimaryButton } from "./ui/PrimaryButton";

export default function QueryForm({ onSubmitSuccess, onClose }) {
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

    // 📱 phone: only numbers & max 10
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
        toast.success("Form submitted successfully!");
        onSubmitSuccess?.();
        onClose?.();

        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      console.log("Form submit error:", err);
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactCard>
      {/* HEADER */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-[var(--primary)]">
            Get Property Details Instantly
          </h3>
          <p className="mt-1 text-sm text-[var(--mutedText)]">
            Fill out the form and our team will reach out shortly.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="ml-3 flex min-h-8 min-w-8 items-center justify-center
          rounded-full cursor-pointer transition
          bg-[var(--cardBg)] text-[var(--text)]
          hover:bg-[var(--accent)]"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <FormLabel>Full Name*</FormLabel>
          <FormInput
            name="name"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <FormLabel>Phone*</FormLabel>
          <FormInput
            name="phone"
            required
            placeholder="Enter 10 digit phone number"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
          />
        </div>

        <div>
          <FormLabel>Message</FormLabel>
          <FormTextarea
            rows={4}
            name="message"
            placeholder="Tell us your requirements..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <PrimaryButton type="submit" disabled={loading}>
  {loading ? (
    <span className="flex items-center justify-center gap-2">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
      Submitting...
    </span>
  ) : (
    "Submit Inquiry"
  )}
</PrimaryButton>

      </form>
    </ContactCard>
  );
}
