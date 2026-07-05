"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import AtTheRate from "../attherate";
import ConsultButton from "../consultmodal/button";

const stories = [
  { id: "EkDvNFo6jU0", title: "Patient Story 1" },
  { id: "VBI_ABnNKFY", title: "Patient Story 2" },
  { id: "AdVG1_o3iQs", title: "Patient Story 3" },
];

export default function SecureStories() {
  return (
    <section className="pt-16 md:pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy mt-2 md:mt-4 inline-flex items-baseline justify-center gap-2 flex-wrap">
            Patient Stories <AtTheRate />
          </h2>
          <p className="font-opensans mt-4 md:mt-6 text-base md:text-xl lg:text-2xl text-navy">
            Real experiences across diagnosis, treatment, and recovery.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".stories-prev",
              nextEl: ".stories-next",
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index}>
                {/* 9:16 aspect ratio for YouTube Shorts */}
                <div className="relative w-full aspect-[9/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-navy/10">
                  <iframe
                    src={`https://www.youtube.com/embed/${story.id}?rel=0&modestbranding=1`}
                    title={story.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-10">
            <button className="stories-prev w-12 h-12 rounded-full border border-[#0C3C46] flex items-center justify-center hover:bg-[#0C3C46] hover:text-white transition cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="stories-next w-12 h-12 rounded-full border border-[#0C3C46] flex items-center justify-center hover:bg-[#0C3C46] hover:text-white transition cursor-pointer">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <ConsultButton className="theme-button flex justify-center items-center gap-2">
            Book A Consult
          </ConsultButton>
        </div>
      </div>
    </section>
  );
}
