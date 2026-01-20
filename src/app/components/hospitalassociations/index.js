"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const hospitals = [
    { name: "Bhatia Hospital", logo: "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/673bb38824264ec6435eb0fc_logo-forbes.avif" },
    { name: "Reliance Hospital", logo: "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/673bb38824264ec6435eb0fc_logo-forbes.avif" },
    { name: "Saifee Hospital", logo: "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/673bb38824264ec6435eb0fc_logo-forbes.avif" },
    { name: "SRCC", logo: "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/673bb38824264ec6435eb0fc_logo-forbes.avif" },
    { name: "Wockhardt", logo: "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/673bb38824264ec6435eb0fc_logo-forbes.avif" },
    { name: "Breach Candy", logo: "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/673bb38824264ec6435eb0fc_logo-forbes.avif" },
];

export default function HospitalAssociations() {
    return (
        <section className="bg-[#F6F4EF] py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="uppercase tracking-widest text-sm text-[#0C3C46] font-medium">
                        Trusted Clinical Network
                    </p>
                    <h3 className="mt-4 text-4xl font-semibold text-[#0C3C46]">
                        Hospital Associations & Transitions
                    </h3>
                </div>

                {/* Logo Slider */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    loop
                    speed={4000}
                    slidesPerView={2}
                    spaceBetween={40}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="select-none"
                >
                    {hospitals.map((hospital, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <img
                                    src={hospital.logo}
                                    alt={hospital.name}
                                    width={160}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
