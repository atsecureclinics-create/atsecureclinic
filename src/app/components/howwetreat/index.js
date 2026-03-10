"use client";

import Link from "next/link";
import AtTheRate from "../attherate";
import {
    Activity,
    Bone,
    Stethoscope,
    HeartPulse,
    Waves,
    Dumbbell,
    Apple,
    Microscope,
} from "lucide-react";

const treatments = [
    {
        title: "Spine Care",
        href: "/treatments/spine-care",
        icon: Activity,
    },
    {
        title: "Orthopaedic Care",
        href: "/treatments/orthopaedic-care",
        icon: Bone,
    },
    {
        title: "Surgical Care",
        href: "/treatments/surgical-care",
        icon: Stethoscope,
    },
    {
        title: "Physiotherapy",
        href: "/treatments/physiotherapy",
        icon: HeartPulse,
    },
    {
        title: "Aqua Therapy",
        href: "/treatments/aqua-therapy",
        icon: Waves,
    },
    {
        title: "Strength Training",
        href: "/treatments/strength-training",
        icon: Dumbbell,
    },
    {
        title: "Nutrition <code>&</code> Lifestyle Care",
        href: "/treatments/nutrition-lifestyle",
        icon: Apple,
    },
    {
        title: "Diagnostics, Path Lab <code>&</code> IV Procedures",
        href: "/treatments/diagnostics",
        icon: Microscope,
    },
];

export default function HowWeTreat() {
    return (
        <section className="bg-foreground py-28">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-8">
                    <h2 className="flex flex-wrap items-baseline gap-2 text-5xl font-semibold tracking-tight text-navy items-end justify-center">
                        The <span className="text-coral text-4xl align-baseline"><AtTheRate size={48} /></span>SECURE Treatments </h2>

                    {/* <p className="mt-6 text-2xl text-navy">
                        An integrated step<code>-</code>by<code>-</code>step approach to personalized healthcare in Mumbai.
                    </p> */}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-300/70 rounded-3xl overflow-hidden">
                    {treatments.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group flex flex-col items-center justify-center gap-6 p-10 bg-vanilla hover:bg-[#BFD6DC]/60 transition border border-gray-300/70"
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm group-hover:scale-105 transition">
                                <item.icon className="w-8 h-8 text-navy" />
                            </div>
                            <p
                                className="text-xl text-center font-bold text-navy group-hover:text-[#0C3C46]"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
