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

const TeamMember = () => {
    const team = [
        {
            name: "Dr. Indira Gjoni",
            bio: "Dr. Indira Gjoni is a board-certified family medicine physician with a BA from Johns Hopkins University, an MPH in International Health from Columbia University, and an MD from St. George's University. She completed her residency in Family Medicine at HackensackUMC Mountainside and has received additional training in Functional Medicine.",
            image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=800",
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
            <div className=" font-seasons min-h-screen py-24 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden">

                {/* Header */}
                <div className="text-center mb-16 max-w-6xl space-y-3">
                    <span className="text-vanilla text-2xl font-bold tracking-[0.4em] uppercase">
                        Meet Your Care Team — Meet the @Secure Team
                    </span>
                    <h2 className="text-background text-4xl md:text-6xl pt-4 pb-2 mb-0">
                        Specialists Who Work Together – For You.
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl">
                        Specialists who listen, design and curate treatment plans together.
                    </p>
                </div>

                <div className="max-w-6xl w-full relative">

                    {/* Navigation */}
                    <button className="swiper-prev-btn absolute left-[-20px] lg:left-[-80px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/20 text-white hidden md:flex items-center justify-center hover:bg-white hover:text-navy transition cursor-pointer">
                        <ChevronLeft size={28} />
                    </button>

                    <button className="swiper-next-btn absolute right-[-20px] lg:right-[-80px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/20 text-white hidden md:flex items-center justify-center hover:bg-white hover:text-navy transition cursor-pointer">
                        <ChevronRight size={28} />
                    </button>

                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation, EffectFade, Autoplay]}
                        effect="fade"
                        speed={800}
                        loop
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.swiper-prev-btn',
                            nextEl: '.swiper-next-btn',
                        }}
                        className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl shadow-black/40"
                    >
                        {team.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#fffdfa] grid grid-cols-1 md:grid-cols-12 min-h-[550px]">

                                    {/* Text */}
                                    <div className="md:col-span-7 p-10 md:p-20 flex flex-col justify-center">
                                        <h3 className="text-navy text-4xl md:text-5xl font-serif font-bold mb-8">
                                            {member.name}
                                        </h3>
                                        <p className="text-navy text-lg md:text-xl leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="md:col-span-5 p-6 md:p-12">
                                        <div className={`relative w-full h-full rounded-[35px] overflow-hidden ${member.portraitBg} group`}>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover mix-blend-multiply opacity-95 grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* CTA */}
                    <div className="flex justify-center mt-12">
                        <Link href="/the-care-team" className="!bg-coral hover:bg-white text-white px-12 py-5 rounded-full font-black text-xs tracking-[0.25em] uppercase transition hover:-translate-y-2 shadow-xl inline-block">
                            Meet the Team
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TeamMember;
