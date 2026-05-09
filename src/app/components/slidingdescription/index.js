"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AtTheRate from "../attherate";
import AtTheRateImage from '../../../../public/icons/atherate.svg';
// import '../../../../public/common/blue-bg.png'


// const BACKGROUND = "../../../../public/common/blue-bg.png";

const slides = [
  {
    quote:
      "Diagnosis, Surgery, Therapy, Recovery, and Prevention",
    attribution: "Everything under One Roof.",
  },
  {
    quote:
      "No fragmented care. No unnecessary steps.",
    attribution: "Just One Coordinated System.",
  },
  {
    quote:
      "Surgeons, therapists, nutritionists, and strength trainers.",
    attribution: "Working together as One Integrated Team.",
  },
  {
    quote:
      "Every decision is shared. Every step is intentional.",
    attribution: "Care designed around You.",
  },
  {
    quote:
      "Heal stronger. Recover faster. Move better.",
    attribution: "Only @ Secure Clinics, Mumbai.",
  },
];

export default function SlidingDescription() {
  return (
    <section
      className="py-6 md:py-8 bg-navylight"
    // style={{
    //   backgroundImage: "url('/common/blue-bg.png')",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold text-center leading-normal text-white">
          <AtTheRate textClassName="text-white" /> brings structure to healthcare in Mumbai.
        </h2>

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
              <blockquote className="relative mt-2 md:mt-3 px-4 text-center">
                <span
                  className="absolute -top-4 md:-top-6 left-2 md:-left-4 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  <svg width="32" height="48" viewBox="0 0 116 96" className="md:w-10 md:h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.8111 69.2181C51.8111 77.1007 49.3979 83.5588 44.5717 88.5922C39.8401 93.5307 33.4998 96 25.5507 96C17.8855 96 11.6871 93.4358 6.95546 88.3073C2.31849 83.0839 0 76.341 0 68.0785C0 55.8272 4.82624 43.291 14.4787 30.4699C24.0365 17.4589 33.831 7.72432 43.862 1.26628C46.7956 -0.633141 49.0667 -0.395713 50.6755 1.97857C52.3789 4.25787 51.953 6.72712 49.3979 9.38632C35.7709 19.0734 25.7872 31.7995 19.4469 47.5647C23.1375 45.6653 27.2067 44.7156 31.6544 44.7156C37.3324 44.7156 42.1113 47.0899 45.9912 51.8384C49.8711 56.492 51.8111 62.2852 51.8111 69.2181ZM115.972 69.2181C115.972 77.1007 113.606 83.5588 108.874 88.5922C104.143 93.5307 97.8023 96 89.8532 96C82.188 96 75.9896 93.4358 71.258 88.3073C66.621 83.0839 64.3025 76.341 64.3025 68.0785C64.3025 55.8272 69.1287 43.291 78.7812 30.4699C88.339 17.4589 98.1335 7.72432 108.164 1.26628C111.098 -0.633141 113.369 -0.395713 114.978 1.97857C116.681 4.25787 116.256 6.72712 113.7 9.38632C100.073 19.0734 90.0897 31.7995 83.7494 47.5647C87.44 45.6653 91.5092 44.7156 95.9569 44.7156C101.635 44.7156 106.366 47.0899 110.152 51.8384C114.032 56.492 115.972 62.2852 115.972 69.2181Z" fill="currentColor" fillOpacity="0.15" />
                  </svg>
                </span>

                <p className="relative font-opensans text-sm sm:text-base md:text-lg leading-relaxed text-white font-semibold">
                  {item.quote}
                </p>
                {item.attribution && (
                  <p className="relative font-opensans mt-1 md:mt-2 text-sm sm:text-base md:text-lg leading-relaxed text-white font-bold">
                    {item.attribution}
                  </p>
                )}
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
