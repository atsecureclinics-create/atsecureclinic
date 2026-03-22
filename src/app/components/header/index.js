"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Logo from "../../../../public/icons/logo.svg";
import Image from "next/image";

export default function Header() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [treatmentOpen, setTreatmentOpen] = useState(false);

    return (
        <header className="bg-background relative z-50">
            <div className="container flex items-center justify-between py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Secure Clinic" width={200} height={80} />
                </Link>

                {/* Navigation */}
                <nav className="font-seasons hidden md:flex items-center gap-8 text-xl font-extrabold text-navy">

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
                                <Link href="/mission" className="block px-5 py-3 hover:bg-vanilla transition">
                                    Our Mission
                                </Link>
                                <Link href="/press" className="block px-5 py-3 hover:bg-vanilla transition">
                                    Press
                                </Link>
                                <Link href="/overview" className="block px-5 py-3 hover:bg-vanilla transition">
                                    Overview
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Team */}
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
                            <div className="absolute top-full left-0 pt-2 w-52 bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden">
                                <Link href="/general-dentistry" className="block px-5 py-3 hover:bg-vanilla transition">
                                    General Dentistry
                                </Link>
                                <Link href="/cosmetic-dentistry" className="block px-5 py-3 hover:bg-vanilla transition">
                                    Cosmetic Dentistry
                                </Link>
                                <Link href="/oral-surgery" className="block px-5 py-3 hover:bg-vanilla transition">
                                    Oral Surgery
                                </Link>
                                <Link href="/orthodontics" className="block px-5 py-3 hover:bg-vanilla transition">
                                    Orthodontics
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Other Links */}
                    <Link href="/blogs" className="hover:opacity-70">
                        Blogs
                    </Link>
                    <Link href="/faq" className="hover:opacity-70">
                        FAQ
                    </Link>
                    <Link href="/contact-us" className="hover:opacity-70">
                        Contact Us
                    </Link>
                </nav>

                {/* CTA */}
                <div>
                    <Link href="/contact-us" className="theme-button">
                        Book a Consult <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </header>
    );
}