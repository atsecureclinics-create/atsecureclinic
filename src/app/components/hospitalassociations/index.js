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
        url: "https://www.bhatiahospital.org/",
    },
    {
        name: "Reliance Foundation Hospital",
        logo: Hospital2,
        url: "https://www.rfhospital.org/care-centres/orthopaedics-joint-replacement/orthopaedics",
    },
    {
        name: "Saifee Hospital",
        logo: Hospital3,
        url: "https://www.saifeehospital.com/",
    },
    {
        name: "SRCC Children's Hospital",
        logo: Hospital4,
        url: "https://www.narayanahealth.org/srcc-childrens-hospital-mumbai",
    },
    {
        name: "Wockhardt Hospitals",
        logo: Hospital5,
        url: "https://www.wockhardthospitals.com/",
    },
    {
        name: "Breach Candy Hospital",
        logo: null,
        url: "https://www.breachcandyhospital.org/",
    },
];


export default function HospitalAssociations() {
    return (
        <section className="bg-white py-14 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-14">
                    <h3 className="mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-navy leading-tight">
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
                            <a
                                href={hospital.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={hospital.name}
                                className="flex items-center justify-center h-24 transition-all duration-300 hover:opacity-80"
                            >
                                {hospital.logo ? (
                                    <Image
                                        src={hospital.logo}
                                        alt={hospital.name}
                                        width={160}
                                        height={80}
                                        className="object-contain"
                                    />
                                ) : (
                                    <span className="font-opensans text-center text-base md:text-lg font-semibold text-navy px-3">
                                        {hospital.name}
                                    </span>
                                )}
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
