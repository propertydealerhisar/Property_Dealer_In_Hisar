"use client";

import { useState } from "react";
import { ContactCard } from "../ui/ContactCard";
import { FormInput } from "../ui/FormInput";
import { FormTextarea } from "../ui/FormTextarea";
import { FormLabel } from "../ui/FormLabel";
import { PrimaryButton } from "../ui/PrimaryButton";

export default function QueryForm({ onSubmitSuccess, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    onSubmitSuccess?.();
    onClose?.();

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <ContactCard>
      
      {/* HEADER WITH CLOSE ICON (INSIDE WHITE AREA) */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Register Your Interest
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Fill out the form and our team will reach out shortly.
          </p>
        </div>

        {/* CLOSE ICON */}
        <button
          type="button"
          onClick={onClose}
          className="ml-3 flex h-8 w-8 items-center justify-center 
                     rounded-full bg-gray-100 text-gray-700 
                     hover:bg-gray-200 hover:text-gray-900 
                     transition cursor-pointer"
          aria-label="Close"
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
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={handleChange}
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

        <PrimaryButton type="submit">
          Submit Inquiry
        </PrimaryButton>
      </form>
    </ContactCard>
  );
}
