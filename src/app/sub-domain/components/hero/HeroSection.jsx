"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection({data}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % data?.images?.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16 md:pt-20 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0">
        {data?.images?.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image} alt="hero" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto max-w-7xl py-16
          text-left
          md:py-28 md:text-center
          space-y-4 md:space-y-6
        "
      >
        {/* BADGE */}
        <span className="inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Now Available in Hisar
        </span>

        {/* Heading */}
        <h1 className="font-bold leading-tight text-[#f2e8e1] drop-shadow-lg text-3xl md:text-4xl lg:text-5xl">
         {data?.title}
        </h1>

        {/* Description – LONGER */}
        <p className="max-w-7xl text-base leading-relaxed text-white/90 drop-shadow mx-auto md:text-lg ">
          {data?.description?.map((item,index)=>{
            return <span key={index} className="block">{item}</span>
          })}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:justify-start md:justify-center">

          {/* Primary */}
          
          <button
            onClick={scrollToContact}
            className="
              inline-flex items-center gap-2
              rounded-md
              bg-gray-900 px-6 py-3
              text-sm font-medium text-white
              transition-all
              hover:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
            "
          >
             {data?.buttons[0]?.label}
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Secondary */}
          <button
            onClick={() =>
              document
                .getElementById('features')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="
              inline-flex items-center
              rounded-md
              border border-white/30
              bg-white/10 px-6 py-3
              text-sm font-medium text-white
              backdrop-blur-sm
              transition-all
              hover:bg-white/20
              focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2
            "
          >
             {data?.buttons[1]?.label}
          </button>

        </div>
      </div>
    </section>
  )
}
