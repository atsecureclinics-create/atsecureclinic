
"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "../components/container";
import team from "../../../public/common/team.png";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import MemberRoadmap from "../components/memberroadmap";
import FAQ from "../components/faq";

const faqs = [
  {
    title: "Comprehensive baseline assessment to kick off your membership",
    content: [
      "A comprehensive intake to bring your Care Team up to speed on your health and wellness.",
      "Extensive lab work and a complete physical exam (including vitals and body composition analysis) to establish your baseline.",
      "Collaborative conversation with your Care Team to understand your lifestyle and define your goals."
    ]
  },
  {
    title: "Personalized Care Plan based on your biometric data and goals",
  },
  {
    title: "Coordination of any care outside of The Lanby to make getting healthy seamless",
  },
  {
    title: "Continuous care from your dedicated Care Team",
  },
  {
    title: "Trusted content and community events",
  }
];

export default function MembershipPage() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      {/* HERO */}
      <section
        className="min-h-[85vh] flex items-center bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 xl:col-span-6">

              {/* Eyebrow */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#0B1F23]/70">
                What if healthcare actually worked together?
              </p>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-[#0B1F23]">
                Heal. Recover. Move
              </h1>

              {/* H2 – emphasis lines */}
              <div className="mt-6 space-y-2 text-xl md:text-2xl font-medium text-[#0B1F23]/90">
                <p>Heal stronger · Recover faster · Move better</p>
                <p>Pain does not define you</p>
                <p className="font-semibold">From pain to performance</p>
              </div>

              {/* Body copy */}
              <p className="mt-6 text-lg text-[#0B1F23]/80 max-w-2xl">
                One clinic. One team. Doctors, therapy, recovery & strength working as one clinic in Mumbai.
                We are not just surgeons. We&apos;re the system.
              </p>

              {/* H3 */}
              <p className="mt-5 text-base md:text-lg font-semibold text-[#0C3C46] max-w-2xl">
                Surgeons, Therapists, Nutritionists and Strength Trainers.
                <br />
                One Clinic. One Team. One System.
              </p>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/book-consult"
                  className="inline-flex items-center justify-center rounded-full bg-[#0C3C46] px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white hover:bg-[#092E35] transition"
                >
                  Book a Consult
                </Link>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">

                <Image src={team} alt="Membership" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section className="bg-navy py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center font-seasons text-4xl md:text-5xl text-white mb-16">
          What’s included?
        </h2>

        {/* Card */}
        <div className="bg-vanilla rounded-[40px] px-8 md:px-14 py-10">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-navy/10 last:border-none">

                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-8 text-left"
                >
                  <h3 className="text-lg md:text-xl text-navy pr-6">
                    {faq.title}
                  </h3>

                  <span className="text-2xl text-coral font-light">
                    {isOpen ? <Minus /> : <Plus/>}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-out
                    ${isOpen ? "max-h-[500px] pb-8" : "max-h-0"}
                  `}
                >
                  {faq.content && (
                    <ul className="space-y-3 text-navy/80 pl-5 list-disc">
                      {faq.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>

    <MemberRoadmap />

          {/* Cost breakdown + Membership card – two columns */}
          <section
        className="py-16 md:py-24 relative"
        style={{ backgroundColor: "#E6EDF0" }}
      >
        <Container>
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-12 md:mb-16 max-w-4xl mx-auto">
            Every year, inadequate primary care robs you of $25,000
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start px-48 py-0">
            {/* Left column – cost breakdown */}
            <div className="lg:col-span-6 xl:col-span-7">
              <h3 className="text-lg md:text-xl font-bold text-[#2C3E50] mb-6">
                Breakdown of Annual Costs Due to Inadequate Primary Care:
              </h3>
              <div className="bg-white/60 rounded-xl border border-[#D9DDE0]/80 overflow-hidden">
                <table className="w-full">
                  <tbody className="text-[#2C3E50]">
                    {[
                      { label: "Managing chronic illnesses", value: "$11,800" },
                      { label: "Purchasing ineffective supplements", value: "$1,200" },
                      { label: "Fluffy wellness services", value: "$3,000" },
                      { label: "Excessive ER visits", value: "$1,500" },
                      { label: "Lost productivity from preventable issues", value: "$5,500" },
                      { label: "Doctor visit copays", value: "$500" },
                      { label: "Dismissive care and repeated visits", value: "$1,500" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#D9DDE0]/60 last:border-b-0">
                        <td className="py-4 px-4 md:px-6 text-base">{row.label}</td>
                        <td className="py-4 px-4 md:px-6 text-right text-base font-semibold whitespace-nowrap" style={{ color: "#DD7F68" }}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-[#D9DDE0] bg-white/40">
                      <td className="py-4 px-4 md:px-6 font-bold text-[#2C3E50]">Total</td>
                      <td className="py-4 px-4 md:px-6 text-right font-bold whitespace-nowrap" style={{ color: "#DD7F68" }}>
                        $25,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right column – membership card */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <div
                className="w-full max-w-md rounded-xl border border-[#D9DDE0] p-8 shadow-sm"
                style={{ backgroundColor: "#F0F4F6" }}
              >
                {/* Building illustration placeholder */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-24 h-24 rounded-lg flex items-center justify-center text-[#2C3E50]/50 text-xs border-2 border-dashed border-[#D9DDE0]"
                    aria-hidden
                  >
                    Building
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] text-center mb-4">
                  The Lanby Membership
                </h3>
                <p className="text-[#2C3E50]/90 text-center text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                  An in-house team working alongside you through ongoing visits and in-app chat, providing individualized clinical and lifestyle recommendations to enhance your care.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/join"
                    className="inline-block rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:opacity-95 transition"
                    style={{ backgroundColor: "#2C4A5A" }}
                  >
                    JOIN NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <FAQ />
      </section>
    </>
  );
}
