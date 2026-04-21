"use client";

import { useState } from "react";
import Container from "../container";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is SecureClinics a full replacement for orthopaedic and spine care?",
    a: "Yes. SecureClinics covers consultations, diagnostics, surgery (when needed), physiotherapy, rehabilitation and prevention — all under one roof in Mumbai. We use a conservative-first approach and recommend surgery only when truly needed.",
  },
  {
    q: "What is conservative first care?",
    a: "We prioritise non-surgical options — physiotherapy, strength training, aqua therapy, and lifestyle changes — before considering surgery. Surgery is recommended only when clearly needed for your recovery.",
  },
  {
    q: "What is included in my care?",
    a: "Your care includes consultations with specialists, diagnostics and imaging reviewed in real time, therapy and rehabilitation (physiotherapy, strength training, aqua therapy), nutrition support, and a single coordinated care plan from first visit to full recovery.",
  },
  {
    q: "How do I get started?",
    a: "Book a consult. Our team will guide you through an initial assessment, and if needed, diagnostics and a personalised care plan — all in one location.",
  },
  {
    q: "How does SecureClinics help with specialist referrals?",
    a: "We coordinate with specialists and hospitals when needed, so you get the right care without the back-and-forth. Your care team keeps everything in one place.",
  },
  {
    q: "Do you have family rates?",
    a: "We offer family and group options. Contact us to discuss packages tailored to your needs.",
  },
  {
    q: "How do you work with insurance?",
    a: "We help you use your existing insurance where applicable (e.g. diagnostics, certain procedures). Our team can explain what is covered and how to maximise your benefits.",
  },
];

const FAQ_ACCENT = "#C25E3E";
const FAQ_BG = "#F5F4EF";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="py-16 md:py-24 lg:py-8 relative"
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
          <div className="hidden lg:flex lg:col-span-3 xl:col-span-4 items-center justify-center lg:justify-start min-h-80">
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
                  <span className="text-base sm:text-lg md:text-2xl font-bold text-navy group-hover:opacity-80 transition flex-1">
                    {item.q}
                  </span>

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
