"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../../../public/icons/logo.svg";
import Image from "next/image";
import ConsultButton from "../consultmodal/button";

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
            <div className="container flex items-center justify-between gap-3 py-3 md:py-4">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMobile}
                    className="flex items-center gap-2 shrink-0"
                >
                    <Image
                        src={Logo}
                        alt="Secure Clinic"
                        width={200}
                        height={80}
                        priority
                        className="w-32 sm:w-40 md:w-50 h-auto"
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
                            <div className="absolute top-full left-0 pt-2 w-52 bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden">
                                <Link href="/about" className="block px-5 py-3 hover:bg-vanilla transition">
                                    About Us
                                </Link>
                                <Link href="/press" className="block px-5 py-3 hover:bg-vanilla transition">
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
                            <div className="text-base absolute top-full left-0 pt-2 w-60 bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden">
                                <Link href="/surgical" className="block px-5 py-3 hover:bg-vanilla transition">
                                    Surgical Treatments
                                </Link>
                                <Link href="/nonsurgical" className="block px-5 py-3 hover:bg-vanilla transition">
                                    Non-Surgical Treatments
                                </Link>
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
                            <div className="flex flex-col pl-3 pb-3 gap-2 text-base font-normal font-opensans">
                                <Link href="/surgical" onClick={closeMobile} className="py-1.5">
                                    Surgical Treatments
                                </Link>
                                <Link href="/nonsurgical" onClick={closeMobile} className="py-1.5">
                                    Non-Surgical Treatments
                                </Link>
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
