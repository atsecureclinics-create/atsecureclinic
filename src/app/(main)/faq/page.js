"use client";

import { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";

const faqData = [
    {
        question: "Where are you located?",
        answer:
            "@secureclinics is located in Marine Drive, Mumbai.",
    },
    {
        question: "Is the clinic wheelchair or crutches friendly?",
        answer:
            "Yes, completely. @secureclinics step-free entry, wide corridors, and a chair lift for pool access.",
    },
    {
        question: "Will I have to wait long once I arrive?",
        answer:
            "We run strictly by appointment, so waiting time is minimal. We understand you may be in pain or discomfort — keeping you waiting is not something we take lightly.",
    },
    {
        question: "What are your clinic hours?",
        answer:
            "Monday to Saturday, 8:00 AM to 9:00 PM.",
    },
    {
        question: "Are treatment rooms private?",
        answer:
            "Yes. All consultations and therapy sessions are conducted in fully enclosed, private rooms.",
    },
    {
        question: "Do I need to know how to swim for aqua therapy?",
        answer:
            "No. A trained therapist is with you throughout your session. Aqua therapy is specifically designed for rehabilitation — swimming ability is not required.",
    },
    {
        question: "How clean is the pool?",
        answer:
            "The pool at @secureclinics is a medical-grade hydrotherapy pool maintained to clinical hygiene standards. Water is continuously filtered and chemically treated.",
    },
    {
        question: "Is there a lady doctor available?",
        answer:
            "Yes. Female doctors and therapists are part of the @secureclinics team. If you'd like to be seen by a female specialist, let us know when booking and we'll arrange accordingly.",
    },
    {
        question: "Can I get a same-day appointment?",
        answer:
            "We do our best to accommodate urgent cases. Call us or WhatsApp and we'll check availability for the same day. For planned visits, booking in advance is recommended.",
    },
    {
        question: "Do you do home visits?",
        answer:
            "Yes. For patients who are in pain or discomfort and cannot travel to our clinic, we offer the facility of home visits. Call or WhatsApp us for more details on this.",
    },
    {
        question: "Can I get my X-ray done here?",
        answer:
            "We have a dedicated X-Ray room with long shot X-Rays to reduce the exposure for the patient. Reporting of X-Rays too is carried out here.",
    },
    {
        question: "How do I book an appointment — online or via WhatsApp?",
        answer:
            "You can book via WhatsApp, phone call, through our website or through our app.",
    },
    {
        question: "What conditions do you treat?",
        answer:
            "@secureclinics treats a wide range of musculoskeletal and lifestyle conditions including back pain, neck pain, spine disorders, sports injuries, post-surgical rehabilitation, joint pain, arthritis, neurological conditions, obesity, and nutritional deficiencies. If you're unsure whether we can help, please get in touch with our team.",
    },
    {
        question: "Do I need a referral from a doctor to come to you?",
        answer:
            "No referral needed. You can book directly with any of our specialists. If you do have reports or prescriptions from a previous doctor, it is advised to bring them along.",
    },
    {
        question: "What's the difference between physiotherapy, orthopaedics, and spine care — how do I know which one is right for me?",
        answer:
            "Orthopaedics focuses on bones, joints, and surgical conditions. Spine care is specialised treatment for the neck, back, and spinal cord. Physiotherapy uses movement, manual therapy, and exercise to restore function and reduce pain. In many cases, all three work together on the same patient. At @secureclinics, you don't need to figure this out yourself — tell us your symptoms and we'll direct you to the right specialist, or to multiple specialists if needed.",
    },
    {
        question: "Do you have in-house diagnostics, or will I need to go elsewhere for scans and tests?",
        answer:
            "All pathology and diagnostics solutions are found within our space. There is no need for you to go to multiple places to get tests done and then come back to us. Your entire journey is integrated into one ecosystem, here at @secureclinics.",
    },
    {
        question: "Do you offer nutrition and diet counselling as part of treatment?",
        answer:
            "Yes. @secureclinics has an in-house nutrition team. Nutrition is integrated into treatment plans where relevant.",
    },
    {
        question: "Can I get a medical report or certificate for my employer?",
        answer:
            "Yes. Medical reports, fitness certificates, and documentation for employer or insurance purposes can be provided by your treating doctor at @secureclinics.",
    },
    {
        question: "Do the doctors talk to each other about my case?",
        answer:
            "Yes — and this is what sets @secureclinics apart. Our specialists don't work solo. Every case is discussed in detail, internally.",
    },
    {
        question: "Is there a gym at the facility?",
        answer:
            "Yes. @secureclinics has a fully equipped rehabilitation and strength training space on-site. It's used for post-surgical recovery, injury rehab, strength training, and performance conditioning — supervised by qualified professionals at all times.",
    },
    {
        question: "Are trainers or physios present during gym sessions?",
        answer:
            "Always. You are never left alone with equipment. Every session at @secureclinics is supervised by a physiotherapist or qualified trainer who monitors your form, progression, and safety throughout.",
    },
    {
        question: "What is an aqua treadmill?",
        answer:
            "An aqua treadmill is a treadmill submerged in a therapeutic pool. Walking or running in water significantly reduces the load on your joints — making it ideal for post-surgical recovery, arthritis, obesity-related joint pain, and sports rehabilitation. You get all the benefits of movement with a fraction of the impact.",
    },
    {
        question: "Can a wheelchair user use the pool?",
        answer:
            "Yes. @secureclinics is equipped with a chair lift that allows wheelchair users to enter and exit the therapy pool safely, comfortably, and with full dignity. Aqua therapy is highly beneficial for wheelchair users and those with limited mobility.",
    },
    {
        question: "What is an ice bath used for?",
        answer:
            "Ice baths — also known as cold water immersion therapy — reduce inflammation, accelerate muscle recovery, and improve circulation. At @secureclinics, ice baths are used as part of structured recovery protocols for post-surgical patients, athletes, and those managing chronic pain or swelling.",
    },
    {
        question: "What is the sauna used for?",
        answer:
            "The sauna at @secureclinics is used therapeutically to relieve muscle tension, improve blood circulation, and support musculoskeletal recovery. It is often recommended alongside physiotherapy for enhanced outcomes. Sessions are guided by your treatment team — not a standalone wellness amenity.",
    },
    {
        question: "Are the ice bath and sauna included in my treatment or charged separately?",
        answer:
            "Each Secure Plan is carefully curated by our team of Specialists. Charges of the same are always conveyed beforehand.",
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