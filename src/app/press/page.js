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
];

export default function NewsroomPage() {
    return (
        <main className="bg-foreground text-navy py-20">
            <section className="container">
                {/* HERO */}
                <div className="text-center mb-20">
                    <p className="uppercase tracking-[0.3em] text-2xl mb-4 text-coral font-extrabold">
                        Newsroom
                    </p>

                    <h1 className="text-4xl md:text-7xl leading-tight font-light">
                        Stories shaping modern care and thoughtful recovery
                    </h1>

                    <p className="mt-6 text-lg text-navylight max-w-2xl mx-auto">
                        Insights, updates, and perspectives that explain how integrated
                        treatment changes the patient journey.
                    </p>
                </div>

                {/* FEATURED */}
                <div className="grid lg:grid-cols-12 gap-10 items-center mb-28">
                    <div className="lg:col-span-7">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <p className="uppercase text-sm tracking-[0.3em] text-coral mb-4">
                            Featured Story
                        </p>

                        <h2 className="text-3xl md:text-5xl leading-tight mb-6">
                            {featured.title}
                        </h2>

                        <p className="text-lg text-navylight mb-8 leading-relaxed">
                            {featured.description}
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 border-b border-navy pb-1"
                        >
                            Read Article <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* GRID ARTICLES */}
                <div className="grid md:grid-cols-2 gap-10">
                    {articles.map((item, index) => (
                        <div
                            key={index}
                            className="group border-t border-navy/10 pt-6"
                        >
                            <div className="relative h-[320px] rounded-2xl overflow-hidden mb-5">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            <p className="text-sm uppercase tracking-[0.3em] text-coral mb-3">
                                {item.category}
                            </p>

                            <h3 className="text-2xl leading-snug group-hover:text-coral transition">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}