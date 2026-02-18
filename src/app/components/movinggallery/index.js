"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
    "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64936ebf54d5c20c4f8c7edd_room2.avif",
    "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64936ebf54d5c20c4f8c7edd_room2.avif",
    "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64936ebf54d5c20c4f8c7edd_room2.avif",
    "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64936ebf54d5c20c4f8c7edd_room2.avif",
    "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64936ebf54d5c20c4f8c7edd_room2.avif",
    "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64936ebf54d5c20c4f8c7edd_room2.avif",
    "https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64936ebf54d5c20c4f8c7edd_room2.avif",
];

export default function MovingGallery() {
    return (
        <section className="relative bg-[#F6F4EF] py-24 overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <p className="tracking-widest text-3xl text-navy font-bold">
                            Inside Secure Clinics
                        </p>
                        <h2 className="mt-4 text-5xl font-semibold tracking-tight text-navy">
                            A Care Experience Designed Around You
                        </h2>
                    </div>

                    <Link
                        href="/book-consult"
                        className="theme-button px-6 py-4 !text-xl flex justify-center items-center gap-2"
                    >
                        Book A Consult
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Moving Gallery */}
            <div className="relative">
                {/* Fade edges */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#F6F4EF] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#F6F4EF] to-transparent z-10" />

                <div className="flex w-max animate-marquee gap-8 px-6">
                    {[...galleryImages, ...galleryImages].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[320px] h-[420px] rounded-3xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={src}
                                alt="Clinic gallery"
                                className="object-cover h-full"
                                sizes="320px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
