'use client';

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../container';
import AtTheRate from '../attherate';

const TeamMember = () => {
    const team = [
        {
            name: "Dr. Indira Gjoni",
            bio: "Dr. Indira Gjoni is a board certified family medicine physician with a BA from Johns Hopkins University, an MPH in International Health from Columbia University, and an MD from St. George’s University. She completed her residency in Family Medicine at HackensackUMC Mountainside and has received additional training in Functional Medicine.",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
            portraitBg: "bg-[#e87a5d]"
        },
        {
            name: "Dr. Julian Vance",
            bio: "Dr. Vance specializes in integrative cardiology and preventive health. With a focus on longevity and metabolic wellness, he brings a data-driven approach to primary care, ensuring every patient receives a tailored roadmap to optimal health.",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
            portraitBg: "bg-[#748c7a]"
        }
    ];

    return (
        <Container>
            <div className="font-seasons flex flex-col items-center justify-center overflow-hidden py-12 md:py-18">

                <div className="text-center mb-8 md:mb-10 max-w-3xl px-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white inline-flex items-baseline gap-1 flex-wrap justify-center">
                        Team <AtTheRate size={28} className="sm:hidden" /><AtTheRate size={40} className="hidden sm:inline-block" /> Secure Clinics
                    </span>
                    <h2 className="font-opensans text-base md:text-lg lg:text-xl pt-3 md:pt-4 pb-2 mb-0 text-white leading-snug">
                        Specialists who listen, collaborate, and design treatment plans together
                    </h2>
                </div>

                <div className="max-w-4xl 2xl:max-w-5xl w-full relative">

                    <button className="swiper-prev-btn absolute -left-5 lg:-left-20 top-[40%] -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-background text-white hidden md:flex items-center justify-center hover:bg-white hover:text-navy transition cursor-pointer">
                        <ChevronLeft size={24} className="text-background lg:w-7 lg:h-7" />
                    </button>

                    <button className="swiper-next-btn absolute -right-5 lg:-right-20 top-[40%] -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-background text-white hidden md:flex items-center justify-center hover:bg-white hover:text-navy transition cursor-pointer">
                        <ChevronRight size={24} className="text-background lg:w-7 lg:h-7" />
                    </button>

                    <Swiper
                        modules={[Navigation, EffectFade]}
                        effect="fade"
                        speed={800}
                        loop
                        navigation={{
                            prevEl: '.swiper-prev-btn',
                            nextEl: '.swiper-next-btn',
                        }}
                        className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {team.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-5 sm:p-6 md:p-8">
                                    <div className="md:col-span-8 flex flex-col justify-center order-2 md:order-1">
                                        <h3 className="text-navy text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-8">
                                            {member.name}
                                        </h3>
                                        <p className="font-opensans text-navy text-sm sm:text-base md:text-lg leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>

                                    <div className="md:col-span-4 order-1 md:order-2">
                                        <div className={`relative w-full h-64 sm:h-72 md:h-full rounded-2xl overflow-hidden ${member.portraitBg} group`}>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full md:max-h-100 object-cover mix-blend-multiply opacity-95 grayscale-15 group-hover:grayscale-0 transition-all duration-1000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-center mt-8 md:mt-12">
                        <Link href="/the-care-team" className="theme-button flex justify-center items-center gap-2">
                            Meet the Team
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TeamMember;
