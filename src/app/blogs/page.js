"use client";

import Image from "next/image";
import Link from "next/link";
import team from "../../../public/common/team.png";
import hospital from "../../../public/icons/hospital-1.png";

const featured = {
    category: "SecureClinics",
    date: "APRIL 29, 2025",
    title: "A Busy Person’s Meal Plan",
    description:
        "A quick & easy guide for breakfast, lunch, dinner, & snacks in 15 minutes or less.",
    image: team,
};

const posts = [
    {
        title: "Why modern diagnostics improve recovery",
        category: "INSIGHT",
        image: hospital,
    },
    {
        title: "How integrated teams reduce patient stress",
        category: "FEATURE",
        image: hospital,
    },
    {
        title: "Designing calmer spaces for healing",
        category: "CARE",
        image: hospital,
    },
];

export default function BlogPage() {
    return (
        <main className="bg-[#f5f3ee] text-[#111]">

            {/* HERO */}
            <section className="bg-[#c8dde3] py-24">
                <div className="container max-w-5xl text-center">

                    <div className="mb-8">
                        <p className="uppercase tracking-[0.25em] text-sm font-bold mb-3">
                            Blog
                        </p>

                        <h1 className="font-seasons text-5xl md:text-7xl leading-tight">
                            Well Read
                        </h1>

                        <p className="uppercase tracking-[0.25em] mt-4 text-lg font-bold">
                            A Blog by SecureClinics
                        </p>
                    </div>

                    <p className="text-xl text-black/80 leading-relaxed max-w-2xl mx-auto">
                        Health and wellness insights from experts and thoughtful care teams.
                    </p>
                </div>
            </section>

            {/* FEATURED POST */}
            <section className="container py-24">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-7">
                        <div className="relative h-[520px] rounded-2xl overflow-hidden">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-5">

                        <span className="inline-block px-4 py-2 rounded-full bg-[#b9dbe2] text-[#0b4b5f] text-sm font-bold tracking-[0.15em] uppercase mb-6">
                            {featured.category}
                        </span>

                        <p className="text-[#d85b32] text-xl font-bold tracking-[0.15em] uppercase mb-6">
                            {featured.date}
                        </p>

                        <h2 className="font-seasons text-4xl md:text-6xl leading-tight mb-6">
                            {featured.title}
                        </h2>

                        <p className="text-xl text-black/75 leading-relaxed mb-10">
                            {featured.description}
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-3 text-lg uppercase tracking-[0.1em] font-medium"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="container pb-24">
                <div className="grid md:grid-cols-3 gap-10">

                    {posts.map((item, index) => (
                        <div key={index} className="group">

                            <div className="relative h-[320px] rounded-2xl overflow-hidden mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            <p className="text-sm uppercase tracking-[0.2em] text-[#d85b32] font-bold mb-3">
                                {item.category}
                            </p>

                            <h3 className="font-seasons text-3xl leading-snug group-hover:text-[#d85b32] transition">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}