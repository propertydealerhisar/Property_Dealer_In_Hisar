"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is the location of Marvel City?",
    answer:
      "Marvel City is strategically located in Hisar, Haryana with easy connectivity to NH-9, schools, hospitals, and major commercial areas. It's just 10 minutes from the city center.",
  },
  {
    question: "What are the available apartment configurations?",
    answer:
      "We offer 2 BHK (1050-1200 sq.ft), 3 BHK (1450-1650 sq.ft), and 3 BHK Premium (1800-2000 sq.ft) apartments with modern amenities and premium fittings.",
  },
  {
    question: "What amenities are provided?",
    answer:
      "Marvel City offers world-class amenities including clubhouse, swimming pool, gymnasium, kids play area, landscaped gardens, jogging track, 24/7 security, power backup, and covered parking.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We offer flexible payment plans including construction-linked plans, subvention schemes, and easy home loan assistance from leading banks. Down payment options start from 20%.",
  },
  {
    question: "When is the possession date?",
    answer:
      "The project is under construction with expected possession by December 2025. We follow a transparent construction timeline with regular updates to buyers.",
  },
  {
    question: "Is the project RERA approved?",
    answer:
      "Yes, Marvel City is fully RERA registered and compliant with all government regulations. RERA registration number will be provided during booking.",
  },
  {
    question: "Can I schedule a site visit?",
    answer:
      "You can schedule a free site visit by contacting us through phone, email, or filling out the contact form. Our sales team will arrange a convenient time for you.",
  },
  {
    question: "Are there any additional charges?",
    answer:
      "Apart from the base price, you need to pay for stamp duty, registration charges, GST, and maintenance deposits. Our team will provide a complete cost breakdown during your visit.",
  },
]

export function FAQSection({data}) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-left md:mb-16 md:text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:mb-5 md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            Got questions? We’ve got answers. Find everything you need to know
            about Marvel City.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-7xl space-y-4">
          {data?.faqs?.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex w-full items-center justify-between gap-4
                    px-5 py-4 md:px-6 md:py-5
                    text-left
                    transition-colors
                    hover:bg-gray-50
                  "
                >
                  <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gray-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
