"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const hospitals = [
    {
        name: "Bhatia Hospital",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bhatia_Hospital_Mumbai_logo.png",
    },
    {
        name: "Kokilaben Dhirubhai Ambani Hospital",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kokilaben_Dhirubhai_Ambani_Hospital_logo.png",
    },
    {
        name: "Saifee Hospital",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Saifee_Hospital_logo.png",
    },
    {
        name: "SRCC Children Hospital",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/12/SRCC_Children%27s_Hospital_logo.png",
    },
    {
        name: "Wockhardt Hospital",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Wockhardt_logo.png",
    },
    {
        name: "Breach Candy Hospital",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Breach_Candy_Hospital_logo.png",
    },
];



export default function HospitalAssociations() {
    return (
        <section className="bg-[#F6F4EF] py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    {/* <p className="uppercase tracking-widest text-2xl text-navy font-bold">
                        Trusted Clinical Network
                    </p> */}
                    <h3 className="mt-4 text-4xl font-semibold text-navy">
                        Hospital Associations <code>&</code> Transitions
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
