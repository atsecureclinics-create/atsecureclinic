"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviewdata = [
    {
        "review": "The Lanby has transformed what primary care can be—turning doctor visits into true partnerships where patients feel known, supported, and empowered to get well.",
        "author": "Caroline Messer, MD, Endocrinologist and Founder of Well By Messer and Fifth Avenue Endocrinology"
    },
    {
        "review": "Patients often come to me looking to age well, but true longevity is far more than lasers and serums — it’s metabolic health, hormone balance, and personalized prevention.",
        "author": "Caroline Messer, MD, Endocrinologist and Founder of Well By Messer and Fifth Avenue Endocrinology"
    },
    {
        "review": "Patients I receive from The Lanby have already undergone the nutritional and lifestyle groundwork that is often missing in traditional referrals.",
        "author": "Caroline Messer, MD, Endocrinologist and Founder of Well By Messer and Fifth Avenue Endocrinology"
    }
]

export default function Reviews() {
    return (
        <section className="bg-navy py-28 relative overflow-hidden">
            {/* Decorative Quote */}

            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop
                autoplay={false}
                pagination={{ clickable: true }}
                className="max-w-6xl mx-auto px-6"
            >

                {
                    reviewdata.map((item, i) => {
                        return <SwiperSlide>
                            <div className="absolute left-0 -top-4 text-white text-[200px] leading-none select-none z-10">
                                “
                            </div>
                            <div key={i} className="z-20" >
                                <p className="text-white text-3xl md:text-4xl leading-relaxed font-bold">
                                    {item.review}
                                </p>

                                <p className="mt-4 text-white text-base tracking-[0.2em] uppercase font-bold">{item.author}</p>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    );
}
