"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Activity, TrendingUp, HeartPulse } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const stats = [
    {
        value: "Few Hours",
        description:
            "Most patients are able to stand and walk within a few hours after minimally invasive spine surgery.",
        icon: Activity,
    },
    {
        value: "9 / 10",
        description:
            "Patients complete treatment with a clear recovery plan and ongoing support.",
        icon: TrendingUp,
    },
    {
        value: "92%",
        description:
            "Patients report significant improvement in pain and mobility within their treatment plan.",
        icon: HeartPulse,
    },
];

export default function StatisticTestimonialSlider() {
    return (
        <section className="relative bg-[#0C3C46] py-28 overflow-hidden">
            {/* Subtle texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="uppercase tracking-widest text-sm text-[#CAB37A] font-medium">
                        Outcomes that Matter
                    </p>
                    <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white">
                        Real Results, Backed by Care
                    </h2>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    loop
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        bulletClass:
                            "swiper-pagination-bullet !bg-white/40 !w-2.5 !h-2.5",
                        bulletActiveClass:
                            "!bg-[#CAB37A] !scale-110",
                    }}
                    className="stats-pagination"
                >
                    {stats.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white/95 backdrop-blur rounded-3xl p-12 md:p-16 shadow-xl text-center max-w-4xl mx-auto">
                                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#F6F4EF] flex items-center justify-center">
                                    <item.icon className="w-10 h-10 text-[#0C3C46]" />
                                </div>

                                <h3 className="text-6xl font-bold text-[#0C3C46] mb-6">
                                    {item.value}
                                </h3>

                                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                    {item.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
