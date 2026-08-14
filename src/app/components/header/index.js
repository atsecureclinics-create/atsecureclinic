"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../../../public/icons/logo.png";
import Image from "next/image";
import ConsultButton from "../consultmodal/button";
import { getTreatmentsByCategory } from "../../api/treatments";

const surgicalTreatments = getTreatmentsByCategory("surgical");
const nonsurgicalTreatments = getTreatmentsByCategory("nonsurgical");

const spineConditions = [
    { name: "Back Pain", slug: "back-pain" },
    { name: "Lower Back Pain", slug: "lower-back-pain" },
    { name: "Neck Pain", slug: "neck-pain" },
    { name: "Sciatica", slug: "sciatica" },
    { name: "Slipped Disc (Herniated Disc)", slug: "slipped-disc" },
    { name: "Spinal Stenosis", slug: "spinal-stenosis" },
    { name: "Spondylosis", slug: "spondylosis" },
    { name: "Spondylolisthesis", slug: "spondylolisthesis" },
    { name: "Spinal Fracture", slug: "spinal-fracture" },
    { name: "Cervical Radiculopathy", slug: "cervical-radiculopathy" },
];

const orthopaedicConditions = [
    { name: "Frozen Shoulder", slug: "frozen-shoulder" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff-tear" },
    { name: "Osteoarthritis of Knee", slug: "osteoarthritis-of-knee" },
    { name: "ACL Tear", slug: "acl-tear" },
    { name: "Meniscus Tear", slug: "meniscus-tear" },
    { name: "Tennis Elbow", slug: "tennis-elbow" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel-syndrome" },
    { name: "Ankle Sprain", slug: "ankle-sprain" },
    { name: "Hip Fracture", slug: "hip-fracture" },
    { name: "Avascular Necrosis of Hip", slug: "avascular-necrosis-of-hip" },
    { name: "Flat Feet", slug: "flat-feet" },
    { name: "Heel Pain Syndrome", slug: "heel-pain-syndrome" },
    { name: "Hip Impingement", slug: "hip-impingement" },
    { name: "Trochanteric Bursitis", slug: "trochanteric-bursitis" },
    { name: "Sacroiliitis", slug: "sacroiliitis" },
    { name: "Piriformis Syndrome", slug: "piriformis-syndrome" },
];

export default function Header() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [treatmentOpen, setTreatmentOpen] = useState(false);
    const [conditionOpen, setConditionOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [surgicalOpen, setSurgicalOpen] = useState(false);
    const [nonsurgicalOpen, setNonsurgicalOpen] = useState(false);
    const [spineOpen, setSpineOpen] = useState(false);
    const [orthopaedicOpen, setOrthopaedicOpen] = useState(false);

    useEffect(() => {
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [mobileOpen]);

    const closeMobile = () => {
        setMobileOpen(false);
        setSurgicalOpen(false);
        setNonsurgicalOpen(false);
        setSpineOpen(false);
        setOrthopaedicOpen(false);
    };

    return (
        <header className="bg-background relative z-50">
            <div className="container flex items-center justify-between gap-3 py-1 md:py-4">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMobile}
                    className="flex items-center gap-2 shrink-0"
                >
                    <Image
                        src={Logo}
                        alt="Secure Clinic"
                        width={300}
                        height={100}
                        priority
                        className="w-40 md:w-40 xl:w-80 h-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="font-seasons hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8 text-base lg:text-lg xl:text-xl font-extrabold text-navy">

                    {/* About Dropdown */}
                    <Link href="/about" className="hover:opacity-70">
                        About Us
                    </Link>
                    {/* <div
                        className="relative"
                        onMouseEnter={() => setAboutOpen(true)}
                        onMouseLeave={() => setAboutOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:opacity-70 cursor-pointer">
                            About <ChevronDown size={16} />
                        </button>

                        {aboutOpen && (
                            <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden">
                                <Link href="/about" className="block px-2.5 py-2 hover:bg-vanilla transition">
                                    About Us
                                </Link>
                                <Link href="/press" className="block px-2.5 py-2 hover:bg-vanilla transition">
                                    Press
                                </Link>
                            </div>
                        )}
                    </div> */}

                    <Link href="/the-care-team" className="hover:opacity-70">
                        Our Team
                    </Link>

                    {/* Treatments Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setTreatmentOpen(true)}
                        onMouseLeave={() => setTreatmentOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:opacity-70 cursor-pointer">
                            Treatments <ChevronDown size={16} />
                        </button>

                        {treatmentOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[40rem] lg:w-[44rem] bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden">
                                <div className="grid grid-cols-2 divide-x divide-black/5">
                                    <div className="p-4">
                                        <Link
                                            href="/surgical"
                                            className="block text-base font-extrabold text-navy uppercase tracking-[0.15em] px-2 py-2 hover:text-coral transition"
                                        >
                                            Surgical Treatments
                                        </Link>
                                        <ul className="mt-1 font-opensans text-sm font-normal">
                                            {surgicalTreatments.map((t) => (
                                                <li key={t.slug}>
                                                    <Link
                                                        href={`/surgical/${t.slug}`}
                                                        className="block px-2 py-1.5 rounded-md hover:bg-vanilla hover:text-coral transition"
                                                    >
                                                        {t.cardTitle}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4">
                                        <Link
                                            href="/nonsurgical"
                                            className="block text-base font-extrabold text-navy uppercase tracking-[0.15em] px-2 py-2 hover:text-coral transition"
                                        >
                                            Non<code>-</code>Surgical Treatments
                                        </Link>
                                        <ul className="mt-1 font-opensans text-sm font-normal">
                                            {nonsurgicalTreatments.map((t) => (
                                                <li key={t.slug}>
                                                    <Link
                                                        href={`/nonsurgical/${t.slug}`}
                                                        className="block px-2 py-1.5 rounded-md hover:bg-vanilla hover:text-coral transition"
                                                    >
                                                        {t.cardTitle}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Conditions Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setConditionOpen(true)}
                        onMouseLeave={() => setConditionOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:opacity-70 cursor-pointer">
                            Conditions <ChevronDown size={16} />
                        </button>

                        {conditionOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[40rem] lg:w-[44rem] bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden">
                                <div className="grid grid-cols-2 divide-x divide-black/5">
                                    <div className="p-4">
                                        <Link
                                            href="/spine"
                                            className="block text-base font-extrabold text-navy uppercase tracking-[0.15em] px-2 py-2 hover:text-coral transition"
                                        >
                                            Spine Conditions
                                        </Link>
                                        <div className="relative">
                                            <ul className="mt-1 font-opensans text-sm font-normal max-h-64 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-navy/15 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-coral/50">
                                                {spineConditions.map((c) => (
                                                    <li key={c.slug}>
                                                        <Link
                                                            href={`/spine/${c.slug}`}
                                                            className="block px-2 py-1.5 rounded-md hover:bg-vanilla hover:text-coral transition uppercase"
                                                        >
                                                            {c.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <Link
                                            href="/orthopaedic"
                                            className="block text-base font-extrabold text-navy uppercase tracking-[0.15em] px-2 py-2 hover:text-coral transition"
                                        >
                                            Orthopaedic Conditions
                                        </Link>
                                        <div className="relative">
                                            <ul className="mt-1 font-opensans text-sm font-normal max-h-64 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-navy/15 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-coral/50">
                                                {orthopaedicConditions.map((c) => (
                                                    <li key={c.slug}>
                                                        <Link
                                                            href={`/orthopaedic/${c.slug}`}
                                                            className="block px-2 py-1.5 rounded-md hover:bg-vanilla hover:text-coral transition uppercase"
                                                        >
                                                            {c.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* <Link href="/blogs" className="hover:opacity-70">Blogs</Link> */}
                    <Link href="/faq" className="hover:opacity-70">FAQ</Link>
                    <Link href="/contact-us" className="hover:opacity-70">Contact Us</Link>
                </nav>

                {/* Right side: CTA + mobile toggle */}
                <div className="flex items-center gap-2 shrink-0">
                    <ConsultButton className="theme-button !hidden md:inline-flex text-sm md:text-base py-2.5 md:py-3 px-4 md:px-6">
                        Book a Consult
                    </ConsultButton>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-nav"
                        className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-navy hover:bg-white/40 transition"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div
                    id="mobile-nav"
                    className="md:hidden border-t border-navy/10 bg-background max-h-[calc(100vh-64px)] overflow-y-auto"
                >
                    <nav className="container py-4 font-seasons text-lg font-extrabold text-navy flex flex-col">
                        <Link href="/about" onClick={closeMobile} className="py-3 border-b border-navy/10">
                            About Us
                        </Link>

                        <Link href="/the-care-team" onClick={closeMobile} className="py-3 border-b border-navy/10">
                            Our Team
                        </Link>

                        <details className="group border-b border-navy/10">
                            <summary className="flex justify-between items-center py-3 cursor-pointer list-none">
                                Treatments
                                <ChevronDown
                                    size={18}
                                    className="transition-transform duration-200 group-open:rotate-180"
                                />
                            </summary>
                            <div className="pl-3 pb-3 flex flex-col gap-3">
                                <div>
                                    <div className="flex items-center justify-between py-2">
                                        <Link href="/surgical" onClick={closeMobile} className="text-base font-extrabold uppercase tracking-[0.15em]">
                                            Surgical Treatments
                                        </Link>
                                        <button type="button" onClick={() => setSurgicalOpen(v => !v)} className="p-1">
                                            <ChevronDown size={16} className={`transition-transform duration-200 ${surgicalOpen ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>
                                    {surgicalOpen && (
                                        <ul className="pl-3 pb-2 flex flex-col gap-1 text-sm font-normal font-opensans">
                                            {surgicalTreatments.map((t) => (
                                                <li key={t.slug}>
                                                    <Link
                                                        href={`/surgical/${t.slug}`}
                                                        onClick={closeMobile}
                                                        className="block py-1.5"
                                                    >
                                                        {t.cardTitle}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between py-2">
                                        <Link href="/nonsurgical" onClick={closeMobile} className="text-base font-extrabold uppercase tracking-[0.15em]">
                                            Non-Surgical Treatments
                                        </Link>
                                        <button type="button" onClick={() => setNonsurgicalOpen(v => !v)} className="p-1">
                                            <ChevronDown size={16} className={`transition-transform duration-200 ${nonsurgicalOpen ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>
                                    {nonsurgicalOpen && (
                                        <ul className="pl-3 pb-2 flex flex-col gap-1 text-sm font-normal font-opensans">
                                            {nonsurgicalTreatments.map((t) => (
                                                <li key={t.slug}>
                                                    <Link
                                                        href={`/nonsurgical/${t.slug}`}
                                                        onClick={closeMobile}
                                                        className="block py-1.5"
                                                    >
                                                        {t.cardTitle}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </details>

                        <details className="group border-b border-navy/10">
                            <summary className="flex justify-between items-center py-3 cursor-pointer list-none">
                                Conditions
                                <ChevronDown
                                    size={18}
                                    className="transition-transform duration-200 group-open:rotate-180"
                                />
                            </summary>
                            <div className="pl-3 pb-3 flex flex-col gap-3">
                                <div>
                                    <div className="flex items-center justify-between py-2">
                                        <Link href="/spine" onClick={closeMobile} className="text-base font-extrabold uppercase tracking-[0.15em]">
                                            Spine
                                        </Link>
                                        <button type="button" onClick={() => setSpineOpen(v => !v)} className="p-1">
                                            <ChevronDown size={16} className={`transition-transform duration-200 ${spineOpen ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>
                                    {spineOpen && (
                                        <ul className="pl-3 pb-2 flex flex-col gap-1 text-sm font-normal font-opensans">
                                            {spineConditions.map((c) => (
                                                <li key={c.slug}>
                                                    <Link
                                                        href={`/spine/${c.slug}`}
                                                        onClick={closeMobile}
                                                        className="block py-1.5"
                                                    >
                                                        {c.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between py-2">
                                        <Link href="/orthopaedic" onClick={closeMobile} className="text-base font-extrabold uppercase tracking-[0.15em]">
                                            Orthopaedic
                                        </Link>
                                        <button type="button" onClick={() => setOrthopaedicOpen(v => !v)} className="p-1">
                                            <ChevronDown size={16} className={`transition-transform duration-200 ${orthopaedicOpen ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>
                                    {orthopaedicOpen && (
                                        <ul className="pl-3 pb-2 flex flex-col gap-1 text-sm font-normal font-opensans">
                                            {orthopaedicConditions.map((c) => (
                                                <li key={c.slug}>
                                                    <Link
                                                        href={`/orthopaedic/${c.slug}`}
                                                        onClick={closeMobile}
                                                        className="block py-1.5"
                                                    >
                                                        {c.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </details>

                        {/* <Link href="/blogs" onClick={closeMobile} className="py-3 border-b border-navy/10">
                            Blogs
                        </Link> */}
                        <Link href="/faq" onClick={closeMobile} className="py-3 border-b border-navy/10">
                            FAQ
                        </Link>
                        <Link href="/contact-us" onClick={closeMobile} className="py-3">
                            Contact Us
                        </Link>

                        <div className="sm:hidden mt-4 pb-2">
                            <ConsultButton
                                className="theme-button w-full justify-center"
                                onClick={closeMobile}
                            >
                                Book a Consult
                            </ConsultButton>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
