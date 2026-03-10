
"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "../components/container";
import team from "../../../public/common/team.png";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import MemberRoadmap from "../components/memberroadmap";
import FAQ from "../components/faq";
import AtTheRate from "../components/attherate";
import MovingGallery from "../components/movinggallery";

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

const content = `<span className="text-white text-4xl align-baseline"><AtTheRate size={40} /></span>SecureClinics is an integrated healthcare centre designed to make care feel clearer, more connected, and more reassuring for patients.

We bring together experienced orthopaedic and spine specialists, physiotherapists, rehabilitation experts, and nutrition professionals under one roof, so diagnosis, treatment, recovery, and prevention are never fragmented. Every care plan is thoughtfully structured, discussed across disciplines, and tailored to the individual, because no two bodies, injuries, or recovery journeys are the same.

Our approach is grounded in evidence-based medicine and real-world clinical experience, with a strong focus on movement, function, and long-term outcomes. Just as importantly, we believe patients should feel informed and involved at every step. Options are explained clearly, decisions are shared, and progress is reviewed together <code>-</code> creating care that feels intentional, not overwhelming.`;

export default function MembershipPage() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      {/* HERO */}
      <section
        className="min-h-[85vh] flex items-center bg-[#ebebe6]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 xl:col-span-6">

              {/* Eyebrow */}
              <p className="mb-4 text-2xl font-semibold uppercase tracking-[0.25em] text-coral">
                Specialist<code>-</code>Led Care
              </p>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-navy">
                Designed for a SECURE long<code>-</code>term recovery, in Mumbai
              </h1>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/book-consult"
                  className="theme-button px-8 py-4 font-bold !text-xl"
                >
                  Book a Consult
                </Link>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl">

                <Image src={team} alt="Membership" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section className="pt-24 bg-vanilla">
        <div className="container">

          <div className="max-w-5xl m-auto">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-8 text-center">
              A More Connected Approach to Care
            </h2>

            {/* Content */}
            {/* <span className="text-white text-4xl align-baseline"><AtTheRate size={16} /></span> */}
            <p
              className="text-lg md:text-xl text-navy leading-relaxed font-bold"
              dangerouslySetInnerHTML={{ __html: content }}
            />

          </div>

        </div>
      </section>

      <section className="py-16 my-16" style={{
        backgroundImage: "url('/common/blue-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="container">
          <div className="max-w-4xl m-auto">
            <p className="text-lg md:text-4xl text-center text-navy leading-relaxed"><span className="text-navy text-4xl align-baseline"><AtTheRate size={30} /></span>SecureClinics, the goal is not just to treat pain, but to support confident, sustainable recovery and better quality of life.</p>
          </div>
        </div>
      </section>

      <MemberRoadmap />

      <section>
        <MovingGallery />
      </section>

      <section className="bg-background">
        <FAQ />
      </section>
    </>
  );
}
