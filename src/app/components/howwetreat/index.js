"use client";

import Link from "next/link";
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
        title: "Nutrition & Lifestyle Care",
        href: "/treatments/nutrition-lifestyle",
        icon: Apple,
    },
    {
        title: "Diagnostics, Path Lab & IV Procedures",
        href: "/treatments/diagnostics",
        icon: Microscope,
    },
];

export default function HowWeTreat() {
    return (
        <section className="bg-[#F6F4EF] py-28">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl font-semibold tracking-tight text-[#1E1E1E]">
                        How We Treat <span className="text-[#0C3C46]">SecureClinics</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600">
                        An integrated, step-by-step approach to personalized healthcare in Mumbai.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-300/70 rounded-3xl overflow-hidden">
                    {treatments.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group flex flex-col items-center justify-center gap-6 p-10 bg-[#F6F4EF] hover:bg-[#BFD6DC]/60 transition border border-gray-300/70"
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm group-hover:scale-105 transition">
                                <item.icon className="w-8 h-8 text-[#0C3C46]" />
                            </div>
                            <p className="text-lg font-medium text-center text-[#1E1E1E] group-hover:text-[#0C3C46]">
                                {item.title}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
