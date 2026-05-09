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
            "A single, coordinated care plan from start to finish, built by a multidisciplinary team",
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
            "Technology used with intent — only what improves diagnosis and outcomes",
    },
    {
        problem: "Treatment ends once symptoms reduce",
        solution:
            "Structured post-treatment care focused on long-term recovery, not just relief",
    },
    {
        problem: "Patients left unsure of what's next",
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
    {
        problem: "Problem focussed solutions",
        solution:
            "Prevention comes first. Prevent before a problem arises. Prevention focussed solutions.",
    },
];

export default function ProblemSolution() {
    return (
        <section className="md:max-w-6xl m-auto my-10 md:my-16 px-0 sm:px-6">
            {/* HEADER */}
            <div className="grid grid-cols-2">

                {/* LEFT */}
                <div className="px-3 sm:px-5 md:px-8 py-5 md:py-8">
                    <img
                        src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/66984df219ec09e8718fb02d_face5.png'}
                        alt="Problem elsewhere"
                        className="w-12 sm:w-16 md:w-25 h-12 sm:h-16 md:h-25 object-contain mb-3 md:mb-4"
                    />

                    <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-coral tracking-wide uppercase leading-tight">
                        Problem Elsewhere
                    </h2>

                    <p className="font-opensans mt-2 sm:mt-3 md:mt-4 text-navy max-w-md text-sm sm:text-base md:text-xl leading-relaxed">
                        Stop feeling frustrated, overwhelmed, or stuck with fragmented care.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="px-3 sm:px-5 md:px-8 py-5 md:py-8 bg-background rounded-tl-2xl rounded-tr-2xl">
                    <img
                        src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/66984dff3649a85b335a071c_Big%20Smiley.png'}
                        alt="Solution at Secure Clinics"
                        className="w-12 sm:w-16 md:w-25 h-12 sm:h-16 md:h-25 object-contain mb-3 md:mb-4"
                    />

                    <h2 className="text-base sm:text-2xl md:text-3xl font-semibold text-navy tracking-wide uppercase inline-flex items-baseline gap-2 flex-wrap leading-tight">
                        Solution <AtTheRate />
                    </h2>

                    <p className="font-opensans mt-2 sm:mt-3 md:mt-4 text-navy max-w-md text-sm sm:text-base md:text-xl leading-relaxed">
                        Problem focussed solutions. Prevention comes first. Prevent before a problem arises.
                    </p>
                </div>
            </div>

            {/* TABLE ROWS */}
            <div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-2 border-t border-gray-300/60 last:border-b"
                    >
                        <div className="font-opensans px-3 sm:px-5 md:px-8 py-3 sm:py-4 md:py-5">
                            <p className="text-sm sm:text-base md:text-xl text-navy leading-relaxed max-w-xl">
                                {item.problem}
                            </p>
                        </div>

                        <div
                            className={`font-opensans px-3 sm:px-5 md:px-8 py-3 sm:py-4 md:py-5 bg-background ${index === data.length - 1 ? "rounded-br-2xl" : ""}`}
                        >
                            <p className="text-sm sm:text-base md:text-xl text-navy leading-relaxed max-w-xl">
                                {item.solution}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
