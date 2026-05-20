
"use client";
import { useState } from "react";
import Container from "../components/container";
import ConsultButton from "../components/consultmodal/button";
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

const contentParagraphs = [
  <>
    <AtTheRate /> is an integrated healthcare centre designed to make care feel clearer, more connected, and more reassuring for patients.
  </>,
  "We bring together experienced orthopaedic and spine specialists, physiotherapists, rehabilitation experts, and nutrition professionals under one roof, so diagnosis, treatment, recovery, and prevention are never fragmented. Every care plan is thoughtfully structured, discussed across disciplines, and tailored to the individual, because no two bodies, injuries, or recovery journeys are the same.",
  "Our approach is grounded in evidence-based medicine and real-world clinical experience, with a strong focus on movement, function, and long-term outcomes. Just as importantly, we believe patients should feel informed and involved at every step. Options are explained clearly, decisions are shared, and progress is reviewed together — creating care that feels intentional, not overwhelming.",
];

export default function MembershipPage() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      {/* HERO */}
      <section className="min-h-[70vh] lg:min-h-[85vh] flex items-center bg-[#ebebe6] py-14 lg:py-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-7 xl:col-span-6">

              <p className="mb-3 md:mb-4 text-base md:text-xl lg:text-2xl font-semibold uppercase tracking-[0.25em] text-coral">
                Specialist Led Care
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-navy">
                Designed for a SECURE long term recovery, in Mumbai
              </h1>

              <div className="mt-8 md:mt-10">
                <ConsultButton className="theme-button px-6 md:px-8 py-3.5 md:py-4 font-bold text-base md:text-xl!">
                  Book a Consult
                </ConsultButton>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg aspect-4/5 rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl">
                <Image src={team} alt="Membership" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section className="pt-16 md:pt-24 bg-vanilla">
        <div className="container">

          <div className="max-w-5xl m-auto">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight mb-6 md:mb-8 text-center">
              A More Connected Approach to Care
            </h2>

            <div className="text-base md:text-lg lg:text-xl text-navy leading-relaxed font-bold space-y-4 md:space-y-5">
              {contentParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

          </div>

        </div>
      </section>

      <section className="py-10 md:py-16 my-10 md:my-16" style={{
        backgroundImage: "url('/common/blue-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="container">
          <div className="max-w-4xl m-auto">
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center text-navy leading-relaxed inline-flex flex-wrap items-baseline gap-2 justify-center">
              <AtTheRate />, the goal is not just to treat pain, but to support confident, sustainable recovery and better quality of life.
            </p>
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
