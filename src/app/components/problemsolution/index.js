"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AtTheRate from "../attherate";

const data = [
    {
        problem: "Care feels scattered across multiple clinics",
        solution:
            "Doctors, diagnostics, therapy and recovery work together under one roof",
    },
    {
        problem: "Too many opinions, no clear plan",
        solution:
            "A single, coordinated care plan from start to finish built by a multidisciplinary team",
    },
    {
        problem: "Surgery suggested too quickly",
        solution:
            "Conservative options explored first, with minimally invasive surgery only when truly needed",
    },
    {
        problem: "Endless appointments, referrals and multiple locations",
        solution:
            "Consultations, scans, therapy and rehab scheduled in one location",
    },
    {
        problem: "Advanced tech used without context",
        solution:
            "Technology used with intent — only what improves diagnosis and outcomes.",
    },
    {
        problem: "Treatment ends once symptoms reduce",
        solution:
            "Structured post-treatment care focused on long-term recovery, not just relief",
    },
    {
        problem: "Patients confused of what to do next",
        solution:
            "Clear guidance at every stage, from first visit to full recovery and maintenance",
    },
    {
        problem: "Rehabilitation treated as an afterthought",
        solution:
            "Physiotherapy, strength training and aqua therapy built into the care journey since prognosis depends on it",
    },
    {
        problem: "Diagnostics outsourced, reviewed later",
        solution:
            "Imaging and reports reviewed in real time by the care team",
    },
    {
        problem: "Short<code>-</code>term fixes, recurring pain",
        solution:
            "Long<code>-</code>term treatments designed to prevent recurrence and build resilience and strength",
    },
];

export default function ProblemSolution() {
    return (
        <section className="max-w-6xl m-auto my-16">
            {/* HEADER */}
            <div className="grid md:grid-cols-2">

                {/* LEFT */}
                <div className="px-4 md:px-4 py-8">
                    <img src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/66984df219ec09e8718fb02d_face5.png'} alt="Problem" className="w-[100px] h-[100px] object-contain mb-4" />

                    <h2 className="text-3xl md:text-4xl font-semibold text-coral tracking-wide uppercase">
                        Problem Elsewhere
                    </h2>

                    <p className=" font-opensans mt-4 text-navy max-w-md text-xl">
                        Stop feeling frustrated, overwhelmed, or stuck with fragmented care.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="px-4 md:px-4 py-8 bg-background rounded-tl-2xl rounded-tr-2xl">
                    <img src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/66984dff3649a85b335a071c_Big%20Smiley.png'} alt="Problem" className="w-[100px] h-[100px] object-contain mb-4" />

                    <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-wide uppercase">
                        Solution <AtTheRate size={30} /> Secure Clinics
                    </h2>

                    <p className=" font-opensans mt-4 text-navy max-w-md text-xl">
                        Problem focussed solutions. Prevention comes first. Prevent before a problem arises.
                    </p>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-300/60" />

            {/* TABLE ROWS */}
            <div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="grid md:grid-cols-2 border-t border-gray-300/60 group last:border-b"
                    >
                        {/* LEFT */}
                        <div className="font-opensans px-4 md:px-8 py-5">
                            <p
                                className="text-lg md:text-xl text-navy leading-relaxed max-w-xl"
                                dangerouslySetInnerHTML={{ __html: item.problem }}
                            />
                        </div>

                        {/* RIGHT */}
                        <div
                            className={`font-opensans px-4 md:px-8 py-5 bg-background ${index === data.length - 1
                                ? "rounded-bl-2xl rounded-br-2xl"
                                : ""
                                }`}
                        >
                            <p
                                className="text-lg md:text-xl text-navy leading-relaxed max-w-xl"
                                dangerouslySetInnerHTML={{ __html: item.solution }}
                            />
                        </div>
                    </div>
                ))}
                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <Link href="/the-care-team" className="theme-button flex justify-center items-center gap-2">
                        Meet the Team <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
