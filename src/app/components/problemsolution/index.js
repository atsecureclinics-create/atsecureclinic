"use client";

import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const data = [
    {
        problem: "Care feels scattered across multiple clinics",
        solution: "Doctors, diagnostics, therapy and recovery work together under one roof",
    },
    {
        problem: "Too many opinions, no clear plan",
        solution: "A single, coordinated care plan from start to finish built by a multidisciplinary team",
    },
    {
        problem: "Surgery suggested too quickly",
        solution: "Conservative options explored first, with minimally invasive surgery only when truly needed",
    },
    {
        problem: "Endless appointments, referrals and multiple locations",
        solution: "Consultations, scans, therapy and rehab scheduled in one location",
    },
    {
        problem: "Advanced tech used without context",
        solution: "Technology used with intent — only what improves diagnosis and outcomes.",
    },
    {
        problem: "Treatment ends once symptoms reduce",
        solution: "Structured post-treatment care focused on long-term recovery, not just relief",
    },
    {
        problem: "Patients left unsure of what’s next",
        solution: "Clear guidance at every stage, from first visit to full recovery and maintenance",
    },
    {
        problem: "Rehabilitation treated as an afterthought",
        solution: "Physiotherapy, strength training and aqua therapy built into the care journey since prognosis depends on it",
    },
    {
        problem: "Diagnostics outsourced, reviewed later",
        solution: "Imaging and reports reviewed in real time by the care team",
    },
    {
        problem: "Short-term fixes, recurring pain",
        solution: "Long-term treatments designed to prevent recurrence and build resilience and strength",
    },
];

export default function ProblemSolution() {
    return (
        <div className="relative bg-[#F6F4EF] py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="flex flex-col items-start justify-start p-8">
                        <img src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/66984df219ec09e8718fb02d_face5.png'} alt="Problem" className="w-[50px
                        ] h-[100px] object-contain mb-4" />
                        <h2 className="text-4xl font-semibold tracking-tight text-[#1E1E1E]">
                            The Problem
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-md">
                            And how @SecureClinics fixes it.
                        </p>
                    </div>
                    <div className="bg-[#BFD6DC] rounded-3xl p-8">
                    <img src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/66984dff3649a85b335a071c_Big%20Smiley.png'} alt="Problem" className="w-[50px
                        ] h-[100px] object-contain mb-4" />
                        <h2 className="text-4xl font-semibold tracking-tight text-[#0C3C46]">
                            The SECURE Solution
                        </h2>
                        <p className="mt-4 text-lg text-[#0C3C46]/80 max-w-md">
                            Problem focussed solutions. Prevention comes first. Prevent before a problem arises. Prevention focussed solutions.
                        </p>
                    </div>
                </div>

                <hr className="my-8 border-gray-300/60" />

                {/* Rows */}
                <div className="divide-y divide-gray-300/60 rounded-3xl overflow-hidden">
                    {data.map((item, index) => {
                        const isFirst = index === 0;
                        const isLast = index === data.length - 1;
                        return (
                            <div key={index} className="grid md:grid-cols-2 items-center">
                                {/* Problem */}
                                <div
                                    className={`flex gap-4 items-start p-8 bg-[#F6F4EF] ${isFirst ? "rounded-tl-[22px] rounded-tr-[22px]" : ""} ${isLast ? "rounded-bl-[22px] rounded-br-[22px]" : ""}`}
                                >
                                    <AlertTriangle className="w-6 h-6 text-[#C2572A] mt-1" />
                                    <p className="text-lg text-gray-800 leading-relaxed">
                                        {item.problem}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div
                                    className={`flex gap-4 items-start p-8 bg-[#BFD6DC] ${isFirst ? "rounded-tl-[22px] rounded-tr-[22px]" : ""} ${isLast ? "rounded-bl-[22px] rounded-br-[22px]" : ""}`}
                                >
                                    <CheckCircle className="w-6 h-6 text-[#0C3C46] mt-1" />
                                    <p className="text-lg text-[#0C3C46] leading-relaxed">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
