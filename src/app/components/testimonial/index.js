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
            "Complete treatment with a clear recovery and post recovery plan, supported by rehabilitation and counselling.",
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
        <section className="relative bg-navy py-28 overflow-hidden mt-8">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#ffffff_1px,transparent_1px)]" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* <p className="uppercase tracking-widest text-sm text-[#CAB37A] font-medium">
                        Statistic Testimonial
                    </p> */}
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                        Real Results, Backed by Care
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/95 backdrop-blur rounded-3xl px-4 py-10 md:py-12 2xl:px-4 shadow-xl text-center hover:scale-[1.03] transition duration-300"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 mx-auto rounded-full mb-4 bg-white flex items-center justify-center">
                                <item.icon className="w-10 h-10 text-navy" />
                            </div>

                            {/* Value */}
                            <h3
                                className="text-5xl font-bold text-navy mb-4"
                                dangerouslySetInnerHTML={{ __html: item.value }}
                            />

                            {/* Description */}
                            <p className="text-xl text-navy leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
