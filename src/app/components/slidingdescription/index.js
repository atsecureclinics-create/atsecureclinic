"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BACKGROUND = "#1B4A5C";

const slides = [
  {
    quote:
      "Breast imaging gives us a snapshot in time, but true prevention requires consistent follow-up and a holistic understanding of a patient's risk. The Lanby does exactly that — they don't just order tests, they help patients interpret them, act on them, and stay ahead of disease rather than reacting to it.",
    attribution:
      "SUSAN R. DROSSMAN, MD, INTERVENTIONAL BREAST RADIOLOGIST, CO-FOUNDER OF SCHONHOLZ & DROSSMAN LLP",
  },
  {
    quote:
      "SecureClinics brings structure to healthcare in Mumbai. Not just for treatment, but for diagnosis, surgery, therapy, recovery and prevention—everything under one roof.",
    attribution: "SECURECLINICS CARE TEAM",
  },
  {
    quote:
      "SecureClinics brings structure to healthcare in Mumbai. No fragmented care. No unnecessary steps.",
    attribution: "SECURECLINICS CARE TEAM",
  },
  {
    quote:
      "Every decision is shared and every decision is intentional. One team, one plan.",
    attribution: "SECURECLINICS CARE TEAM",
  },
  {
    quote:
      "They don't just order tests, they help patients interpret them, act on them, and stay ahead.",
    attribution: "PATIENT TESTIMONIAL",
  },
  {
    quote:
      "True prevention requires consistent follow-up and a holistic understanding of a patient's risk.",
    attribution: "SECURECLINICS CARE TEAM",
  },
];

export default function SlidingDescription() {
  return (
    <section
      className="py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container px-4 sm:px-6 md:px-8 mx-auto max-w-4xl">
        {/* Quote icon – large, faded, upper left (outside swiper) */}
        <div
          className="text-[120px] md:text-[160px] lg:text-[200px] font-serif leading-none select-none pointer-events-none -mb-16 md:-mb-20 lg:-mb-24"
          style={{ color: "rgba(255, 255, 255, 0.15)" }}
          aria-hidden
        >
          "
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          speed={500}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="sliding-description-swiper"
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <blockquote className="relative">
                <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed text-left">
                  {item.quote}
                </p>
                <footer className="mt-8 md:mt-10">
                  <cite className="not-italic text-left block">
                    <span
                      className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "rgba(255, 255, 255, 0.75)" }}
                    >
                      {item.attribution}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
