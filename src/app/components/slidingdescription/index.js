"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AtTheRate from "../attherate";
import AtTheRateImage from '../../../../public/icons/atherate.svg';

const BACKGROUND = "#1B4A5C";

const slides = [
  {
    quote:
      "Not just for treatment, but for diagnosis, surgery, therapy, recovery and prevention everything under one roof.",
    attribution:
      "",
  },
  {
    quote:
      "No fragmented care. No unnecessary steps.",
    attribution: "",
  },
  {
    quote:
      "Every decision is shared and every decision is intentional.",
    attribution: "",
  },
];

export default function SlidingDescription() {
  return (
    <section
      className="py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container px-4 sm:px-6 md:px-8 mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl 2xl:text-4xl font-bold text-white text-center leading-normal" >
          <span className="text-white text-4xl align-baseline"><AtTheRate size={40} /></span>
          SecureClinics brings structure to healthcare in Mumbai.</h2>
        {/* Quote icon – large, faded, upper left (outside swiper) */}

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
              <blockquote className="relative mt-10 pl-8 text-center ">
                <p className="text-white text-lg md:text-xl lg:text-4xl leading-relaxed text-center inline-block relative">
                  <div
                    className="text-[120px] md:text-[160px] lg:text-[200px] font-serif leading-none select-none pointer-events-none -mb-16 md:-mb-20 lg:-mb-24 absolute -top-10 -left-2 z-10"
                    style={{ color: "rgba(255, 255, 255, 0.15)" }}
                    aria-hidden
                  >
                    "
                  </div>
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
