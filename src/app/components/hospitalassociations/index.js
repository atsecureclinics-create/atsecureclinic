"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const hospitals = [
    { name: "Bhatia Hospital", url: "https://www.bhatiahospital.org/" },
    { name: "Reliance Foundation Hospital", url: "https://www.rfhospital.org/care-centres/orthopaedics-joint-replacement/orthopaedics" },
    { name: "Saifee Hospital", url: "https://www.saifeehospital.com/" },
    { name: "SRCC Children's Hospital", url: "https://www.narayanahealth.org/srcc-childrens-hospital-mumbai" },
    { name: "Wockhardt Hospitals", url: "https://www.wockhardthospitals.com/" },
    { name: "Breach Candy Hospital", url: "https://www.breachcandyhospital.org/" },
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

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={800}
                    loop
                    slidesPerView={1.5}
                    spaceBetween={16}
                    breakpoints={{
                        480: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 28 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
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
                                className="flex items-center justify-center min-h-20 py-4 px-3 transition-all duration-300 hover:opacity-80 border border-navy rounded-xl text-center"
                            >
                                <span className="font-opensans text-center text-base md:text-lg font-semibold text-navy px-3">
                                    {hospital.name}
                                </span>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
