"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import team from "../../../public/common/team.png";
import hospital from "../../../public/icons/hospital-1.png";

const featured = {
    title: "How Modern Care Is Redefining Surgical Confidence",
    description:
        "A closer look at how coordinated treatment pathways improve patient trust, recovery, and long-term outcomes.",
    image: team,
};

const articles = [
    {
        title: "Why early diagnosis changes treatment outcomes",
        category: "INSIGHT",
        image: hospital,
    },
    {
        title: "The role of technology in precision-led recovery",
        category: "FEATURE",
        image: hospital,
    },
    {
        title: "Designing calmer spaces for better healing",
        category: "CARE",
        image: hospital,
    },
    {
        title: "How multidisciplinary teams improve outcomes",
        category: "EDITORIAL",
        image: hospital,
    },
    {
        title: "Why early diagnosis changes treatment outcomes",
        category: "INSIGHT",
        image: hospital,
    },
    {
        title: "The role of technology in precision-led recovery",
        category: "FEATURE",
        image: hospital,
    },
    {
        title: "Designing calmer spaces for better healing",
        category: "CARE",
        image: hospital,
    },
    {
        title: "How multidisciplinary teams improve outcomes",
        category: "EDITORIAL",
        image: hospital,
    },
];

export default function NewsroomPage() {
    return (
        <main className="bg-foreground text-navy py-14 md:py-24">
            <section className="container">
                {/* HERO */}
                <div className="text-center mb-14 md:mb-24 max-w-4xl mx-auto">
                    <p className="uppercase tracking-[0.35em] text-sm md:text-xl mb-3 md:mb-5 text-coral font-extrabold">
                        Newsroom
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight font-light">
                        Stories shaping modern care and thoughtful recovery
                    </h1>

                    <p className="font-opensans mt-4 md:mt-6 text-base md:text-lg text-navylight leading-relaxed">
                        Insights, updates, and perspectives that explain how integrated
                        treatment changes the patient journey.
                    </p>
                </div>

                {/* FEATURED SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center mb-16 md:mb-32 bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
                    <div className="lg:col-span-7">
                        <div className="relative h-64 sm:h-80 md:h-105 lg:h-140 overflow-hidden">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                className="object-cover hover:scale-105 transition duration-700"
                                sizes="(min-width: 1024px) 58vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                    </div>

                    <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 lg:p-14">
                        <p className="uppercase text-xs md:text-sm font-extrabold tracking-[0.35em] text-coral mb-3 md:mb-5">
                            Featured Story
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6">
                            {featured.title}
                        </h2>

                        <p className="font-opensans text-base md:text-lg text-navylight mb-6 md:mb-8 leading-relaxed">
                            {featured.description}
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-3 bg-navy text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-coral transition text-sm md:text-base"
                        >
                            Read Article <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* ARTICLE GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {articles.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 flex flex-col"
                        >
                            <div className="relative h-56 md:h-65 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                            </div>

                            <div className="p-5 md:p-6 flex flex-col flex-1">
                                <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.3em] text-coral mb-3">
                                    {item.category}
                                </p>

                                <h3 className="font-opensans text-lg md:text-xl leading-snug mb-4 group-hover:text-coral transition flex-1">
                                    {item.title}
                                </h3>

                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-coral transition self-start"
                                >
                                    Explore <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}