"use client"

import { useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"
import { FormInput } from "../[area]/ui//FormInput"
import { FormTextarea } from "../[area]/ui//FormTextarea"
import { FormLabel } from "../[area]/ui//FormLabel"
import { PrimaryButton } from "../[area]/ui//PrimaryButton"
import { ContactCard } from "../[area]/ui/ContactCard"

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  // 🔹 domain auto detect
  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : ""

  const handleChange = (e) => {
    const { name, value } = e.target

    // 📱 phone → only numbers + max 10
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits")
      return
    }

    setLoading(true)

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
      })

      const result = await res.json()

      if (result.success) {
        toast.success("Your inquiry has been submitted!")
        setFormData({ name: "", phone: "", message: "" })
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.log("Contact form error:", err)
      toast.error("Server error. Please try later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-7xl text-left md:mb-16 md:text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="text-base text-gray-600 md:text-lg max-w-7xl mx-auto">
            <span className="block">Looking to buy, sell, or invest in property?</span>
            <span className="block">Get in touch with our team for expert guidance.</span>
          </p>
        </div>

        {/* FORM + IMAGE */}
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          {/* FORM */}
          <ContactCard>
            <h3 className="mb-1 text-xl font-semibold text-gray-900">
              Register Your Interest
            </h3>
            <p className="mb-6 text-sm text-gray-600">
              Fill out the form and our team will reach out shortly.
            </p>

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
                  inputMode="numeric"
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

          {/* IMAGE */}
          <div className="relative w-full h-[420px] md:h-full rounded-xl overflow-hidden bg-white">
            <Image
              src="https://media.istockphoto.com/id/2188211582/photo/contact-us-or-customer-support-hotline-businessman-touching-on-virtual-screen-contact-icons.webp?a=1&b=1&s=612x612&w=0&k=20&c=KeMAJQ2F1SFc9l51nklhfVaUPegJoaN1xSqk0vthVkc="
              alt="Contact Real Estate"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* MAP */}
        <div className="mt-10 w-full h-[600px] rounded-xl overflow-hidden border">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=29.134042,75.740044&z=18&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  )
}
