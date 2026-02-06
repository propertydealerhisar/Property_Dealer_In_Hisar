"use client"

import { Phone } from "lucide-react"

export function Navbar({data}) {
  
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className="
        fixed top-0 z-50 w-full
        bg-[#422c18]/80
        backdrop-blur-sm
        border-b border-white/30 px-4 sm:px-6
      "
    >
      <div className="mx-auto max-w-7xl ">
        <div className="flex h-16 items-center justify-between md:h-20">

          {/* LOGO */}
          <div className="text-2xl font-bold text-white md:text-3xl">
            {data}
          </div>

          {/* NAV LINKS */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              Features
            </a>
            <a
              href="#amenities"
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              Amenities
            </a>
            <a
              href="#location"
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              Location
            </a>
          </nav>

          {/* CONTACT BUTTON (same glass style ya solid bhi kar sakte ho) */}
          <button
            onClick={scrollToContact}
            className="
              inline-flex items-center gap-2
              h-10 px-6
              rounded-md
              text-sm font-medium
              transition-all

              bg-white/10
              backdrop-blur-sm
              border border-white/30
              text-white
              hover:bg-white/20

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/40
              focus-visible:ring-offset-2
            "
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </button>

        </div>
      </div>
    </header>
  )
}