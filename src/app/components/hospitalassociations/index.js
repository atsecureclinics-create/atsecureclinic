"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import Hospital1 from '../../../../public/icons/hospital-1.png';
import Hospital2 from '../../../../public/icons/hospital-2.png';
import Hospital3 from '../../../../public/icons/hospital-3.png';
import Hospital4 from '../../../../public/icons/hospital-4.png';
import Hospital5 from '../../../../public/icons/hospital-5.png';

const hospitals = [
    {
        name: "Bhatia Hospital",
        logo: Hospital1,
    },
    {
        name: "Kokilaben Dhirubhai Ambani Hospital",
        logo: Hospital2,
    },
    {
        name: "Saifee Hospital",
        logo: Hospital3,
    },
    {
        name: "SRCC Children Hospital",
        logo: Hospital4,
    },
    {
        name: "Wockhardt Hospital",
        logo: Hospital5,
    }
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
                    <h3 className="mt-4 text-5xl font-semibold text-navy">
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
                            <div className="flex items-center justify-center h-24 transition-all duration-300">
                                <Image
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
