"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import AtTheRate from "../attherate";
import Link from "next/link";

const stories = [
    {
        name: "Rahul M.",
        image: "https://cdn.prod.website-files.com/6053b88a7e3de31c4aa14e83/6406530102671e3d18ef788c_image1%20(1).avif",
        quote:
            "It truly feels like a partnership where I have a voice in my own care and a clear plan forward.",
        link: "/stories/rahul",
    },
    {
        name: "Ananya S.",
        image: "https://cdn.prod.website-files.com/6053b88a7e3de31c4aa14e83/6406530102671e3d18ef788c_image1%20(1).avif",
        quote:
            "I’ve felt fully supported across diagnostics, therapy, and recovery. Everything works together.",
        link: "/stories/ananya",
    },
    {
        name: "Meera K.",
        image: "https://cdn.prod.website-files.com/6053b88a7e3de31c4aa14e83/6406530102671e3d18ef788c_image1%20(1).avif",
        quote:
            "My physician looks at the whole picture — not just symptoms — and that changed everything.",
        link: "/stories/meera",
    },
    {
        name: "Sanjay P.",
        image: "https://cdn.prod.website-files.com/6053b88a7e3de31c4aa14e83/6406530102671e3d18ef788c_image1%20(1).avif",
        quote:
            "The coordination and follow-up gave me confidence that I was on the right path.",
        link: "/stories/sanjay",
    },
    {
        name: "Meera K.",
        image: "https://cdn.prod.website-files.com/6053b88a7e3de31c4aa14e83/6406530102671e3d18ef788c_image1%20(1).avif",
        quote:
            "My physician looks at the whole picture — not just symptoms — and that changed everything.",
        link: "/stories/meera",
    },
    {
        name: "Sanjay P.",
        image: "https://cdn.prod.website-files.com/6053b88a7e3de31c4aa14e83/6406530102671e3d18ef788c_image1%20(1).avif",
        quote:
            "The coordination and follow-up gave me confidence that I was on the right path.",
        link: "/stories/sanjay",
    },
];

export default function SecureStories() {
    return (
        <section className="bg-[#F6F4EF] pt-28 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-semibold tracking-tight text-[#1E1E1E] mt-4 text-coral">
                        <span className="text-[#F37C6B] text-4xl align-baseline"><AtTheRate size={40} /></span>Secure Stories
                    </h2>
                    <p className="mt-6 text-2xl text-navy mx-auto">
                        Patient Stories at <span className="text-[#F37C6B] text-xl align-baseline"><AtTheRate size={24} /></span>SecureClinics
                    </p>
                </div>

                {/* Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={32}
                        slidesPerView={1.5}
                        navigation={{
                            prevEl: ".stories-prev",
                            nextEl: ".stories-next",
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.2 },
                        }}
                    >
                        {stories.map((story, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-[420px] rounded-3xl overflow-hidden group">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    <div className="absolute bottom-0 p-8 text-white">
                                        <p className="text-lg leading-relaxed mb-6">
                                            “{story.quote}”
                                        </p>
                                        <a
                                            href={story.link}
                                            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
                                        >
                                            Read the story <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation */}
                    <div className="flex justify-center gap-6 mt-12">
                        <button className="stories-prev w-12 h-12 rounded-full border border-[#0C3C46] flex items-center justify-center hover:bg-[#0C3C46] hover:text-white transition cursor-pointer ">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button className="stories-next w-12 h-12 rounded-full border border-[#0C3C46] flex items-center justify-center hover:bg-[#0C3C46] hover:text-white transition cursor-pointer">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <Link
                        href="/book-consult"
                        className="theme-button px-6 py-4 !text-xl flex justify-center items-center gap-2"
                    >
                        Book a Consult <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
