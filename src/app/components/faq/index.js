"use client";

import { useState } from "react";
import Container from "../container";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Where are you located?",
    a: "@secureclinics is located in Marine Drive, Mumbai.",
  },
  {
    q: "Is the clinic wheelchair or crutches friendly?",
    a: "Yes, completely. @secureclinics step-free entry, wide corridors, and a chair lift for pool access.",
  },
  {
    q: "Will I have to wait long once I arrive?",
    a: "We run strictly by appointment, so waiting time is minimal. We understand you may be in pain or discomfort — keeping you waiting is not something we take lightly.",
  },
  {
    q: "What are your clinic hours?",
    a: "Monday to Saturday, 8:00 AM to 9:00 PM.",
  },
  {
    q: "Are treatment rooms private?",
    a: "Yes. All consultations and therapy sessions are conducted in fully enclosed, private rooms.",
  },
  {
    q: "Do I need to know how to swim for aqua therapy?",
    a: "No. A trained therapist is with you throughout your session. Aqua therapy is specifically designed for rehabilitation — swimming ability is not required.",
  },
  {
    q: "How clean is the pool?",
    a: "The pool at @secureclinics is a medical-grade hydrotherapy pool maintained to clinical hygiene standards. Water is continuously filtered and chemically treated.",
  },
  {
    q: "Is there a lady doctor available?",
    a: "Yes. Female doctors and therapists are part of the @secureclinics team. If you'd like to be seen by a female specialist, let us know when booking and we'll arrange accordingly.",
  },
  {
    q: "Can I get a same day appointment?",
    a: "We do our best to accommodate urgent cases. Call us or WhatsApp and we'll check availability for the same day. For planned visits, booking in advance is recommended.",
  },
  {
    q: "Do you do home visits?",
    a: "Yes. For patients who are in pain or discomfort and cannot travel to our clinic, we offer the facility of home visits. Call or WhatsApp us for more details on this.",
  },
  {
    q: "Can I get my X<code>-</code>ray done here?",
    a: "We have a dedicated X-Ray room with long shot X-Rays to reduce the exposure for the patient. Reporting of X-Rays too is carried out here.",
  },
  {
    q: "How do I book an appointment — online or via WhatsApp?",
    a: "You can book via WhatsApp, phone call, through our website or through our app.",
  },
  {
    q: "What conditions do you treat?",
    a: "@secureclinics treats a wide range of musculoskeletal and lifestyle conditions including back pain, neck pain, spine disorders, sports injuries, post-surgical rehabilitation, joint pain, arthritis, neurological conditions, obesity, and nutritional deficiencies. If you're unsure whether we can help, please get in touch with our team.",
  },
  {
    q: "Do I need a referral from a doctor to come to you?",
    a: "No referral needed. You can book directly with any of our specialists. If you do have reports or prescriptions from a previous doctor, it is advised to bring them along.",
  },
  {
    q: "What<code></code>s the difference between physiotherapy, orthopaedics, and spine care how do I know which one is right for me?",
    a: "Orthopaedics focuses on bones, joints, and surgical conditions. Spine care is specialised treatment for the neck, back, and spinal cord. Physiotherapy uses movement, manual therapy, and exercise to restore function and reduce pain. In many cases, all three work together on the same patient. At @secureclinics, you don't need to figure this out yourself — tell us your symptoms and we'll direct you to the right specialist, or to multiple specialists if needed.",
  },
  {
    q: "Do you have in house diagnostics, or will I need to go elsewhere for scans and tests?",
    a: "All pathology and diagnostics solutions are found within our space. There is no need for you to go to multiple places to get tests done and then come back to us. Your entire journey is integrated into one ecosystem, here at @secureclinics.",
  },
  {
    q: "Do you offer nutrition and diet counselling as part of treatment?",
    a: "Yes. @secureclinics has an in-house nutrition team. Nutrition is integrated into treatment plans where relevant.",
  },
  {
    q: "Can I get a medical report or certificate for my employer?",
    a: "Yes. Medical reports, fitness certificates, and documentation for employer or insurance purposes can be provided by your treating doctor at @secureclinics.",
  },
  {
    q: "Do the doctors talk to each other about my case?",
    a: "Yes — and this is what sets @secureclinics apart. Our specialists don't work solo. Every case is discussed in detail, internally.",
  },
  {
    q: "Is there a gym at the facility?",
    a: "Yes. @secureclinics has a fully equipped rehabilitation and strength training space on-site. It's used for post-surgical recovery, injury rehab, strength training, and performance conditioning — supervised by qualified professionals at all times.",
  },
  {
    q: "Are trainers or physios present during gym sessions?",
    a: "Always. You are never left alone with equipment. Every session at @secureclinics is supervised by a physiotherapist or qualified trainer who monitors your form, progression, and safety throughout.",
  },
  {
    q: "What is an aqua treadmill?",
    a: "An aqua treadmill is a treadmill submerged in a therapeutic pool. Walking or running in water significantly reduces the load on your joints — making it ideal for post-surgical recovery, arthritis, obesity-related joint pain, and sports rehabilitation. You get all the benefits of movement with a fraction of the impact.",
  },
  {
    q: "Can a wheelchair user use the pool?",
    a: "Yes. @secureclinics is equipped with a chair lift that allows wheelchair users to enter and exit the therapy pool safely, comfortably, and with full dignity. Aqua therapy is highly beneficial for wheelchair users and those with limited mobility.",
  },
  {
    q: "What is an ice bath used for?",
    a: "Ice baths — also known as cold water immersion therapy — reduce inflammation, accelerate muscle recovery, and improve circulation. At @secureclinics, ice baths are used as part of structured recovery protocols for post-surgical patients, athletes, and those managing chronic pain or swelling.",
  },
  {
    q: "What is the sauna used for?",
    a: "The sauna at @secureclinics is used therapeutically to relieve muscle tension, improve blood circulation, and support musculoskeletal recovery. It is often recommended alongside physiotherapy for enhanced outcomes. Sessions are guided by your treatment team — not a standalone wellness amenity.",
  },
  {
    q: "Are the ice bath and sauna included in my treatment or charged separately?",
    a: "Each Secure Plan is carefully curated by our team of Specialists. Charges of the same are always conveyed beforehand.",
  },
];

const FAQ_ACCENT = "#C25E3E";
const FAQ_BG = "#F5F4EF";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="py-10 md:py-24 lg:py-8 relative"
      style={{ backgroundColor: FAQ_BG }}
    >
      <Container>
        {/* Mobile: "FAQ" heading above list */}
        <div className="lg:hidden mb-8 md:mb-10">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: FAQ_ACCENT }}
          >
            FAQ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="hidden lg:flex lg:col-span-3 xl:col-span-4 items-center justify-center lg:justify-start min-h-80 lg:sticky lg:top-24 lg:self-start">
            <h2
              className="text-6xl xl:text-[170px] 2xl:text-[200px] font-bold tracking-tight whitespace-nowrap origin-center"
              style={{
                color: FAQ_ACCENT,
                transform: "rotate(-90deg)",
              }}
            >
              FAQ
            </h2>
          </div>

          <div className="lg:col-span-9 xl:col-span-8 space-y-0">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#1a1a1a]/10 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex items-center justify-between gap-4 md:gap-6 py-4 md:py-6 text-left group cursor-pointer"
                >
                  <span
                    className="text-base sm:text-lg md:text-2xl font-bold text-navy group-hover:opacity-80 transition flex-1"
                    dangerouslySetInnerHTML={{ __html: item.q }}
                  />

                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xl font-light leading-none"
                    style={{ color: FAQ_ACCENT }}
                    aria-hidden="true"
                  >
                    {openIndex === index ? <Minus /> : <Plus />}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-opensans pb-4 md:pb-6 text-navy text-sm sm:text-base md:text-lg leading-relaxed pr-2 sm:pr-6 md:pr-10">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
