"use client";

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
        problem: "Short-term fixes, recurring pain",
        solution:
            "Long-term treatments designed to prevent recurrence and build resilience and strength",
    },
];

export default function ProblemSolution() {
    return (
        <section className="bg-[#F6F4EF] max-w-7xl m-auto my-16">
            {/* HEADER */}
            <div className="grid md:grid-cols-2">

                {/* LEFT */}
                <div className="px-6 md:px-16 py-16">
                    <img src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/66984df219ec09e8718fb02d_face5.png'} alt="Problem" className="w-[50px ] h-[100px] object-contain mb-4" />

                    <h2 className="text-3xl md:text-4xl font-semibold text-[#C2572A] tracking-wide uppercase">
                        The Problem
                    </h2>

                    <p className="mt-4 text-navy max-w-md text-xl font-bold">
                        Stop feeling frustrated, overwhelmed, or stuck with fragmented care.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="px-6 md:px-16 py-16 bg-[#9FB8C1] rounded-tl-[30px] rounded-tr-[30px]">
                    <img src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/66984dff3649a85b335a071c_Big%20Smiley.png'} alt="Problem" className="w-[50px ] h-[100px] object-contain mb-4" />

                    <h2 className="text-3xl md:text-4xl font-semibold text-[#0C3C46] tracking-wide uppercase">
                        The SECURE Solution
                    </h2>

                    <p className="mt-4 text-navy max-w-md text-xl font-bold">
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
                        <div className="px-6 md:px-16 py-10">
                            <p className="text-lg md:text-2xl text-navy leading-relaxed max-w-xl">
                                {item.problem}
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div
                            className="px-6 md:px-16 py-10 bg-[#9FB8C1] 
                 group-last:rounded-bl-[30px] 
                 group-last:rounded-br-[30px]"
                        >
                            <p className="text-lg md:text-2xl text-navy leading-relaxed max-w-xl">
                                {item.solution}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
