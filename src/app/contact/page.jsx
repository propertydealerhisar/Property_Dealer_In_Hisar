"use client"

import { useState } from "react"
import Image from "next/image"
import { FormInput } from "../[area]/ui//FormInput"
import { FormTextarea } from "../[area]/ui//FormTextarea"
import { FormLabel } from "../[area]/ui//FormLabel"
import { PrimaryButton } from "../[area]/ui//PrimaryButton"
import { ContactCard } from "../[area]/ui/ContactCard"

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you! We will contact you shortly.")
    setFormData({ name: "", email: "", phone: "", message: "" })
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

          {/* FORM (LEFT) */}
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

          {/* IMAGE (RIGHT) */}
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

        {/* MAP ONLY (LOCATION FROM ADDRESS) */}
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
