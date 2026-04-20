'use client';

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../container';
import AtTheRate from '../attherate';
import { team } from '../../api/team';

const TeamMember = () => {
    return (
        <Container>
            <div className="font-seasons flex flex-col items-center justify-center overflow-hidden py-12 md:py-18">

                <div className="text-center mb-8 md:mb-10 max-w-3xl px-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white inline-flex items-end gap-1 flex-wrap justify-center">
                        Team <AtTheRate size={28} className="sm:hidden" />
                        <AtTheRate size={28} className="hidden sm:inline-block" />  secure clinics
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
                        {team.map((member) => (
                            <SwiperSlide key={member.slug}>
                                <div className="bg-white grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-5 sm:p-6 md:p-8">
                                    <div className="md:col-span-8 flex flex-col justify-center order-2 md:order-1">
                                        <h3 className="text-navy text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2">
                                            {member.name}
                                        </h3>
                                        {member.role && (
                                            <p className="font-opensans text-coral text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.15em] mb-4 md:mb-6">
                                                {member.role}
                                            </p>
                                        )}
                                        <p className="font-opensans text-navy text-sm sm:text-base md:text-lg leading-relaxed">
                                            {member.bio}
                                        </p>
                                        <Link
                                            href={`/the-care-team/${member.slug}`}
                                            className="font-opensans mt-4 md:mt-6 inline-flex text-sm md:text-base font-semibold text-coral items-center gap-1 hover:underline"
                                        >
                                            Learn More →
                                        </Link>
                                    </div>

                                    <div className="md:col-span-4 order-1 md:order-2">
                                        <div className={`relative w-full h-64 sm:h-72 md:h-full rounded-2xl overflow-hidden ${member.portraitBg} group`}>
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover transition-all duration-1000"
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
