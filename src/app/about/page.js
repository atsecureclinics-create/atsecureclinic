"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "../components/container";
import team from "../../../public/common/team.png";
import Image from "next/image";
import MemberRoadmap from "../components/memberroadmap";
import FAQ from "../components/faq";
import AtTheRate from "../components/attherate";
import MovingGallery from "../components/movinggallery";

export default function MembershipPage() {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <>
            {/* HERO */}
            <section className="min-h-[85vh] flex items-center bg-foreground">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7 xl:col-span-6">
                            {/* Eyebrow */}
                            <p className=" font-opensans mb-4 text-2xl font-bold uppercase tracking-[0.25em] text-coral">
                                <AtTheRate size={28} />Secure Clinics
                            </p>

                            {/* H1 */}
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-navy">
                                Where specialists work together to deliver better care
                            </h1>

                            <div className="mt-6 space-y-2 text-lg md:text-xl font-medium text-navy">
                                <p className="font-opensans no-ligatures">Consultation, diagnosis, treatment, and recovery are designed as one coordinated system so patients experience clearer decisions, fewer procedures, and stronger recovery.</p>
                            </div>

                            {/* CTA */}
                            <div className="mt-10">
                                <Link
                                    href="/book-consult"
                                    className="theme-button !inline-block"
                                >
                                    Book a consult now
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT VIDEO */}
                        <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-lg aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl">
                                <Image
                                    src={team}
                                    alt="Membership"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pt-24 bg-vanilla">
                <div className="container">
                    <div className="">
                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-8 text-center">
                            The <AtTheRate size={40} />SecureClinics Story
                        </h2>

                        {/* Content */}
                        {/* <span className="text-white text-4xl align-baseline"><AtTheRate size={16} /></span> */}
                        <p className="font-opensans text-lg md:text-xl text-navy leading-relaxed pb-4 max-w-6xl m-auto" >At Secure Clinics is an integrated healthcare centre designed to make care clearer, more coordinated, and more reassuring for patients. We bring together experienced orthopaedic and spine specialists, physiotherapists, rehabilitation experts, and nutrition professionals under one roof so diagnosis, treatment, recovery, and prevention are never fragmented. Every care plan is thoughtfully structured, discussed across disciplines, and tailored to the individual because no two bodies, injuries, or recovery journeys are the same. Our approach is grounded in evidence based medicine and real clinical experience, with a strong focus on movement, function, and long term outcomes. Patients remain informed and involved at every stage. Options are explained clearly, decisions are shared, and progress is reviewed together so care feels structured and reassuring. SecureClinics, the goal is not simply to treat pain, but to support confident recovery and a better quality of life.</p>
                    </div>
                </div>
            </section>

            {/* <section
                className="py-16 my-16"
                style={{
                    backgroundImage: "url('/common/blue-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="max-w-4xl m-auto">
                        <p className="text-lg md:text-4xl text-center text-navy leading-relaxed">
                            <span className="text-navy text-4xl align-baseline">
                                <AtTheRate size={30} />
                            </span>
                            SecureClinics, the goal is not just to treat pain, but to support
                            confident, sustainable recovery and better quality of life.
                        </p>
                    </div>
                </div>
            </section> */}

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
