"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../../../public/icons/logo.svg";
import Image from "next/image";
import ConsultButton from "../consultmodal/button";
import { getTreatmentsByCategory } from "../../api/treatments";

const surgicalTreatments = getTreatmentsByCategory("surgical");
const nonsurgicalTreatments = getTreatmentsByCategory("nonsurgical");

export default function Header() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [treatmentOpen, setTreatmentOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    return (
        <header className="bg-background relative z-50">
            <div className="container flex items-center justify-between gap-3 py-3 md:py-5">
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
                        className="w-36 md:w-40 xl:w-60 h-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="font-seasons hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8 text-base lg:text-lg xl:text-xl font-extrabold text-navy">

                    {/* About Dropdown */}
                    <div
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
                    </div>

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
                                            Non-Surgical Treatments
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

                    <Link href="/blogs" className="hover:opacity-70">Blogs</Link>
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
                        <details className="group border-b border-navy/10">
                            <summary className="flex justify-between items-center py-3 cursor-pointer list-none">
                                About
                                <ChevronDown
                                    size={18}
                                    className="transition-transform duration-200 group-open:rotate-180"
                                />
                            </summary>
                            <div className="flex flex-col pl-3 pb-3 gap-2 text-base font-normal font-opensans">
                                <Link href="/about" onClick={closeMobile} className="py-1.5">
                                    About Us
                                </Link>
                                <Link href="/press" onClick={closeMobile} className="py-1.5">
                                    Press
                                </Link>
                            </div>
                        </details>

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
                                <details className="group/sub">
                                    <summary className="flex justify-between items-center py-2 cursor-pointer list-none text-base font-extrabold uppercase tracking-[0.15em]">
                                        <Link href="/surgical" onClick={closeMobile}>
                                            Surgical Treatments
                                        </Link>
                                        <ChevronDown
                                            size={16}
                                            className="transition-transform duration-200 group-open/sub:rotate-180"
                                        />
                                    </summary>
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
                                </details>

                                <details className="group/sub">
                                    <summary className="flex justify-between items-center py-2 cursor-pointer list-none text-base font-extrabold uppercase tracking-[0.15em]">
                                        <Link href="/nonsurgical" onClick={closeMobile}>
                                            Non-Surgical Treatments
                                        </Link>
                                        <ChevronDown
                                            size={16}
                                            className="transition-transform duration-200 group-open/sub:rotate-180"
                                        />
                                    </summary>
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
                                </details>
                            </div>
                        </details>

                        <Link href="/blogs" onClick={closeMobile} className="py-3 border-b border-navy/10">
                            Blogs
                        </Link>
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
