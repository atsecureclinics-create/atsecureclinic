"use client";

import { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";

const faqData = [
    {
        question: "Is SecureClinics a full replacement for primary care?",
        answer:
            "Yes. SecureClinics offers complete coordinated care including diagnostics, preventive care, specialist referrals, and follow-ups.",
    },
    {
        question: "What is functional medicine?",
        answer:
            "Functional medicine focuses on identifying root causes of health concerns through integrated treatment.",
    },
    {
        question: "What is included in my membership?",
        answer:
            "Consultations, diagnostics planning, wellness monitoring, and specialist coordination.",
    },
    {
        question: "What is not included in my membership?",
        answer:
            "External diagnostics, medications, and specialist procedures may be billed separately.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen text-navy">

            {/* HERO */}
            <section className="bg-foreground py-28 md:py-36">
                <div className="container max-w-5xl text-center">

                    <Search
                        size={42}
                        strokeWidth={1.5}
                        className="mx-auto mb-8 text-black"
                    />

                    <h1 className="font-seasons text-5xl md:text-6xl leading-tight">
                        Frequently Asked Questions
                    </h1>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="max-w-4xl py-24 m-auto">

                <p className="uppercase tracking-[0.25em] text-2xl font-extrabold text-navy mb-8">
                    The Membership
                </p>

                <div className="border-t border-navy/10">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-b border-navy/15">

                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-6 text-left group cursor-pointer"
                            >
                                <span className="text-lg md:text-xl font-medium font-opensans">
                                    {item.question}
                                </span>

                                <span className="text-coral">
                                    {openIndex === index ? (
                                        <Minus size={28} strokeWidth={1.5} />
                                    ) : (
                                        <Plus size={28} strokeWidth={1.5} />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`grid transition-all duration-500 ${openIndex === index
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="pb-8 pr-20 text-lg text-black/70 leading-relaxed font-opensans">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}