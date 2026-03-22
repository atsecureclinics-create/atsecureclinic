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
        <main className="bg-foreground text-navy py-24">
            <section className="container">
                {/* HERO */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <p className="uppercase tracking-[0.35em] text-xl md:text-2xl mb-5 text-coral font-extrabold">
                        Newsroom
                    </p>

                    <h1 className="text-3xl md:text-7xl leading-tight font-light">
                        Stories shaping modern care and thoughtful recovery
                    </h1>

                    <p className="font-opensans mt-6 text-lg text-navylight leading-relaxed">
                        Insights, updates, and perspectives that explain how integrated
                        treatment changes the patient journey.
                    </p>
                </div>

                {/* FEATURED SECTION */}
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-32 bg-white rounded-3xl shadow-lg overflow-hidden">
                    <div className="lg:col-span-7">
                        <div className="relative h-[550px] overflow-hidden">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                className="object-cover hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                    </div>

                    <div className="lg:col-span-5 p-10 md:p-14">
                        <p className="uppercase text-sm font-extrabold tracking-[0.35em] text-coral mb-5">
                            Featured Story
                        </p>

                        <h2 className="text-3xl md:text-5xl leading-tight mb-6">
                            {featured.title}
                        </h2>

                        <p className="font-opensans text-lg text-navylight mb-8 leading-relaxed">
                            {featured.description}
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-3 bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-coral transition"
                        >
                            Read Article <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* ARTICLE GRID */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {articles.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2"
                        >
                            <div className="relative h-[260px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            <div className="p-6 flex flex-col justify-between items-baseline">
                                <p className="text-xl font-extrabold uppercase tracking-[0.3em] text-coral mb-3">
                                    {item.category}
                                </p>

                                <h3 className="font-opensans text-xl leading-snug mb-4 group-hover:text-coral transition">
                                    {item.title}
                                </h3>

                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-coral transition"
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