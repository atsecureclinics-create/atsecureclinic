'use client';

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../container';
import AtTheRate from '../attherate';

const TeamMember = () => {
    const team = [
        {
            name: "Dr. Indira Gjoni",
            bio: "Dr. Indira Gjoni is a board certified family medicine physician with a BA from Johns Hopkins University, an MPH in International Health from Columbia University, and an MD from St. George<code>'</code>s University. She completed her residency in Family Medicine at HackensackUMC Mountainside and has received additional training in Functional Medicine.",
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
            <div className="font-seasons px-4 2xl:px-12 flex flex-col items-center justify-center overflow-hidden py-18">

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-3xl 2xl:text-5xl font-bold text-white">
                        Team <AtTheRate size={40} /> Secure Clinics
                    </span>
                    <h2 className="font-opensans text-lg md:text-xl pt-4 pb-2 mb-0 text-white">
                        Specialists who listen, collaborate, and design treatment plans together
                    </h2>
                </div>

                <div className=" max-w-4xl 2xl:max-w-5xl w-full relative">

                    {/* Navigation */}
                    <button className="swiper-prev-btn absolute left-[-20px] lg:left-[-80px] top-[40%] -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-background text-white hidden md:flex items-center justify-center hover:bg-white hover:text-navy transition cursor-pointer">
                        <ChevronLeft size={28} className='text-background' />
                    </button>

                    <button className="swiper-next-btn absolute right-[-20px] lg:right-[-80px] top-[40%] -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-background text-white hidden md:flex items-center justify-center hover:bg-white hover:text-navy transition cursor-pointer">
                        <ChevronRight size={28} className='text-background' />
                    </button>

                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation, EffectFade]}
                        effect="fade"
                        speed={800}
                        loop
                        // autoplay={{ delay: 6000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.swiper-prev-btn',
                            nextEl: '.swiper-next-btn',
                        }}
                        className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {team.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white grid grid-cols-1 md:grid-cols-12 gap-8 p-8">
                                    {/* Text */}
                                    <div className="md:col-span-8 flex flex-col justify-center">
                                        <h3 className="text-navy text-4xl md:text-4xl font-serif font-bold mb-8">
                                            {member.name}
                                        </h3>
                                        <p
                                            className="font-opensans text-navy text-base md:text-lg leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: member.bio }}
                                        />
                                    </div>

                                    {/* Image */}
                                    <div className="md:col-span-4">
                                        <div className={`relative w-full h-full rounded-2xl overflow-hidden ${member.portraitBg} group`}>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full max-h-[400px] object-cover mix-blend-multiply opacity-95 grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* CTA */}
                    <div className="flex justify-center mt-12">
                        <Link href="/the-care-team" className="theme-button flex justify-center items-center gap-2">
                            Meet the Team <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TeamMember;
