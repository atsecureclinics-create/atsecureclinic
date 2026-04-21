"use client";

import { Activity, TrendingUp, HeartPulse } from "lucide-react";

const stats = [
    {
        value: "97<code>%</code>",
        description:
            "Patients are able to stand and walk within hours after minimally invasive spine surgery.",
        icon: Activity,
    },
    {
        value: "9<code>/</code>10 Patients",
        description:
            "Complete treatment with a clear recovery and post-recovery plan, supported by rehabilitation and counselling.",
        icon: TrendingUp,
    },
    {
        value: "92<code>%</code>",
        description:
            "Report significant improvement in pain and mobility while treatment is ongoing.",
        icon: HeartPulse,
    },
];

export default function StatisticTestimonial() {
    return (
        <section className="relative bg-navy py-16 md:py-24 lg:py-28 overflow-hidden mt-6 md:mt-8">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#ffffff_1px,transparent_1px)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                        Real Results, Backed by Care
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/95 backdrop-blur rounded-2xl md:rounded-3xl px-5 md:px-6 py-8 md:py-12 shadow-xl text-center hover:scale-[1.03] transition duration-300"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full mb-4 bg-white flex items-center justify-center">
                                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-navy" />
                            </div>

                            <h3
                                className="text-4xl md:text-5xl font-bold text-navy mb-3 md:mb-4"
                                dangerouslySetInnerHTML={{ __html: item.value }}
                            />

                            <p className="font-opensans text-base md:text-lg lg:text-xl text-navy leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
