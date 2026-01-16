"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { ContactCard } from "../ui/ContactCard"
import { FormInput } from "../ui/FormInput"
import { FormTextarea } from "../ui/FormTextarea"
import { FormLabel } from "../ui/FormLabel"
import { PrimaryButton } from "../ui/PrimaryButton"

export function ContactSection({data}) {
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
            {data?.title}
          </h2>
          <p className="text-base text-gray-600 md:text-lg max-w-7xl mx-auto">
             {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
          })}
          </p>
        </div>

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

              {/* <div>
                <FormLabel>Email*</FormLabel>
                <FormInput
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div> */}

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

          {/* INFO */}
          <div className="space-y-6">
            <ContactCard>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <Phone className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-sm text-gray-600">Immediate assistance</p>
                  <a href="tel:+919876543210" className="font-medium text-gray-900">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </ContactCard>

            <ContactCard>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <Mail className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-sm text-gray-600">Send us your queries</p>
                  <a href="mailto:info@marvelcity.com" className="font-medium text-gray-900">
                    info@marvelcity.com
                  </a>
                </div>
              </div>
            </ContactCard>

            <ContactCard>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <MapPin className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visit Us</h4>
                  <p className="text-sm text-gray-600">
                    Marvel City, Hisar Road <br />
                    Hisar, Haryana 125001
                  </p>
                </div>
              </div>
            </ContactCard>
          </div>

        </div>
      </div>
    </section>
  )
}
