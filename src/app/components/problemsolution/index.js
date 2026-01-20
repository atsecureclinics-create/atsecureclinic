"use client";

import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const data = [
    {
        problem: "Care feels scattered across multiple clinics",
        solution: "Doctors, diagnostics, therapy and recovery work together under one roof",
    },
    {
        problem: "Too many opinions, no clear plan",
        solution: "A single, coordinated care plan built by a multidisciplinary team",
    },
    {
        problem: "Surgery suggested too quickly",
        solution: "Conservative options explored first, with minimally invasive surgery only when truly needed",
    },
    {
        problem: "Endless appointments and referrals",
        solution: "Consultations, scans, therapy and rehab scheduled seamlessly in one place",
    },
    {
        problem: "Advanced tech used without context",
        solution: "Technology used with intent — only what improves diagnosis and outcomes",
    },
    {
        problem: "Treatment ends once symptoms reduce",
        solution: "Structured post-treatment care focused on recovery, not just relief",
    },
    {
        problem: "Patients left unsure of what’s next",
        solution: "Clear guidance at every stage, from first visit to full recovery",
    },
    {
        problem: "Rehab treated as an afterthought",
        solution: "Physiotherapy, strength training and aqua therapy built into the care journey",
    },
    {
        problem: "Diagnostics done elsewhere, reviewed later",
        solution: "Imaging and reports reviewed in real time by the care team",
    },
    {
        problem: "Short-term fixes, recurring pain",
        solution: "Long-term plans designed to prevent recurrence and build strength",
    },
];

export default function ProblemSolution() {
    return (
        <div className="relative bg-[#F6F4EF] py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div>
                        <h2 className="text-4xl font-semibold tracking-tight text-[#1E1E1E]">
                            The Problem
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-md">
                            Modern healthcare often feels fragmented, reactive, and rushed.
                        </p>
                    </div>
                    <div className="bg-[#BFD6DC] rounded-3xl p-8">
                        <h2 className="text-4xl font-semibold tracking-tight text-[#0C3C46]">
                            How SecureClinics Fixes It
                        </h2>
                        <p className="mt-4 text-lg text-[#0C3C46]/80 max-w-md">
                            A prevention-first, coordinated approach designed around you.
                        </p>
                    </div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-gray-300/60 rounded-3xl overflow-hidden">
                    {data.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-2 items-center">
                            {/* Problem */}
                            <div className="flex gap-4 items-start p-8 bg-[#F6F4EF]">
                                <AlertTriangle className="w-6 h-6 text-[#C2572A] mt-1" />
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    {item.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="flex gap-4 items-start p-8 bg-[#BFD6DC]">
                                <CheckCircle className="w-6 h-6 text-[#0C3C46] mt-1" />
                                <p className="text-lg text-[#0C3C46] leading-relaxed">
                                    {item.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
