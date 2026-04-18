"use client";

import ConsultButton from "../consultmodal/button";

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
        <section className="relative bg-[#F6F4EF] py-14 md:py-24 overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 md:mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
                    <div>
                        <p className="tracking-widest text-lg md:text-2xl lg:text-3xl text-navy font-bold">
                            Inside Secure Clinics
                        </p>
                        <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy leading-tight">
                            A Care Experience Designed Around You
                        </h2>
                    </div>

                    <ConsultButton className="theme-button flex justify-center items-center gap-2 self-start md:self-auto">
                        Book A Consult
                    </ConsultButton>
                </div>
            </div>

            {/* Moving Gallery */}
            <div className="relative">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-linear-to-r from-[#F6F4EF] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-linear-to-l from-[#F6F4EF] to-transparent z-10" />

                <div className="flex w-max animate-marquee gap-5 md:gap-8 px-4 sm:px-6">
                    {[...galleryImages, ...galleryImages].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-60 sm:w-72 md:w-80 h-80 sm:h-96 md:h-105 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={src}
                                alt="Inside Secure Clinics"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
