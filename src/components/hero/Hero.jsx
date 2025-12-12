"use client"
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const slides = [
  {
    backgroundImage:
      "https://pixydrops.com/wostin/main-html/assets/images/backgrounds/main-slider-1-1.jpg",
    heading: [
      "Your Clutter is",
      1000,
      "Your Clutter is\nOur Bread & Butter",
      2000,
    ],
    subheading: "We pick, you relax.",
  },
  {
    backgroundImage:
      "https://pixydrops.com/wostin/main-html/assets/images/backgrounds/main-slider-1-2.jpg",
    heading: [
      "Clean Environment",
      1000,
      "Clean Environment\nfor a Better Life",
      2000,
    ],
    subheading: "Let's make earth green again.",
  },
  {
    backgroundImage:
      "https://pixydrops.com/wostin/main-html/assets/images/backgrounds/main-slider-1-3.jpg",
    heading: [
      "Fast and Reliable",
      1000,
      "Fast and Reliable\nWaste Pickup",
      2000,
    ],
    subheading: "On time. Every time.",
  },
];

const HomeHero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params.navigation &&
      typeof swiperInstance.params.navigation !== "boolean"
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <>
      <style>{`
        @keyframes zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-zoom {
          animation: zoom 10s ease-in-out infinite;
        }

        .slide-container {
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
        }
        @media (min-width: 768px) {
          .slide-container {
            height: 130vh;
          }
        }

        .background-image {
          position: absolute;
          inset: 0;
          background-position: center;
          background-size: cover;
          animation: zoom 10s ease-in-out infinite;
          z-index: 0;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.6);
          z-index: 1;
        }

        .slide-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 1rem;
          max-width: 800px;
          margin-top: -2rem;
        }

        .heading-text {
          font-family: 'Amatic SC', cursive;
          white-space: pre-line;
          color: white;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .subheading-text {
          color: #d1d5db;
          margin-top: 0.5rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 640px) {
          .heading-text {
            font-size: 2.5rem;
          }
          .subheading-text {
            font-size: 1rem;
          }
        }
        @media (min-width: 641px) and (max-width: 1023px) {
          .heading-text {
            font-size: 3.5rem;
          }
          .subheading-text {
            font-size: 1.25rem;
          }
        }
        @media (min-width: 1024px) {
          .heading-text {
            font-size: 5rem;
          }
          .subheading-text {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={setSwiperInstance}
        className="relative"
      >
        {slides.map(({ backgroundImage, heading, subheading }, i) => (
          <SwiperSlide key={i}>
            <div className="slide-container">
              <div
                className="background-image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
              <div className="overlay" />
              <div className="slide-content">
                <TypeAnimation
                  sequence={heading}
                  speed={50}
                  repeat={Infinity}
                  cursor={false}
                  className="heading-text"
                />
                <motion.p
                  className="subheading-text"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {subheading}
                </motion.p>
                <Link to="/contact">
                  <motion.button
                    className="relative cursor-pointer overflow-hidden group bg-[#ECDD5E] text-gray-900 font-bold px-8 py-3 rounded transition-colors duration-300 z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <span className="absolute inset-0 bg-[#558E4C] scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded z-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Request a Pickup
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 md:left-8 lg:left-12 w-12 h-12 md:w-14 md:h-14 z-30 bg-white/40 text-gray-900 font-bold text-xl md:text-2xl rounded-full hover:bg-white transition"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 md:right-8 lg:right-12 w-12 h-12 md:w-14 md:h-14 z-30 bg-white/40 text-gray-900 font-bold text-xl md:text-2xl rounded-full hover:bg-white transition"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </Swiper>
    </>
  );
};

export default HomeHero;
