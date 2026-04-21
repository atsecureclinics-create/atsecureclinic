"use client";
import { useState } from "react";
import Container from "../components/container";
import ConsultButton from "../components/consultmodal/button";
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
            <section className="min-h-[70vh] lg:min-h-[85vh] flex items-center bg-foreground py-14 lg:py-0">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 xl:col-span-6">
                            <p className="font-opensans mb-3 md:mb-4 text-base md:text-xl lg:text-2xl font-bold uppercase tracking-[0.25em] text-coral inline-flex items-center gap-1">
                                <AtTheRate />
                            </p>

                            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold leading-tight text-navy">
                                Where specialists work together to deliver better care
                            </h1>

                            <div className="mt-5 md:mt-6 space-y-2 text-base md:text-lg lg:text-xl font-medium text-navy">
                                <p className="font-opensans no-ligatures leading-relaxed">
                                    Consultation, diagnosis, treatment and recovery are designed as one coordinated system — so patients experience clearer decisions, fewer procedures and stronger recovery.
                                </p>
                            </div>

                            <div className="mt-8 md:mt-10">
                                <ConsultButton className="theme-button">
                                    Book a consult
                                </ConsultButton>
                            </div>
                        </div>

                        <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-4/5 rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl">
                                <Image
                                    src={team}
                                    alt="Secure Clinics team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pt-14 md:pt-24 bg-vanilla">
                <div className="container">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight mb-6 md:mb-8 text-center inline-flex items-baseline justify-center gap-2 w-full flex-wrap">
                        The <AtTheRate /> Story
                    </h2>

                    <p className="font-opensans text-base md:text-lg lg:text-xl text-navy leading-relaxed pb-4 max-w-6xl m-auto">
                        Secure Clinics is an integrated healthcare centre designed to make care clearer, more coordinated, and more reassuring for patients. We bring together experienced orthopaedic and spine specialists, physiotherapists, rehabilitation experts, and nutrition professionals under one roof so diagnosis, treatment, recovery, and prevention are never fragmented. Every care plan is thoughtfully structured, discussed across disciplines, and tailored to the individual because no two bodies, injuries, or recovery journeys are the same. Our approach is grounded in evidence-based medicine and real clinical experience, with a strong focus on movement, function, and long-term outcomes. Patients remain informed and involved at every stage. Options are explained clearly, decisions are shared, and progress is reviewed together so care feels structured and reassuring. At SecureClinics, the goal is not simply to treat pain, but to support confident recovery and a better quality of life.
                    </p>
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
