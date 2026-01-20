"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Logo from '../../../../public/icons/logo.svg';
import Image from "next/image";

export default function Header() {
    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <header className="bg-background relative">
            <div className="container flex items-center justify-between py-5">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Secure Clinic" width={200} height={80} />
                </Link>

                {/* Navigation */}
                <nav className="font-seasons hidden md:flex items-center gap-8 text-xl font-extrabold text-black ">

                    <Link href="/membership" className="hover:opacity-70">
                        Membership
                    </Link>

                    <Link href="/labs" className="hover:opacity-70">
                        Just the Labs
                    </Link>

                    <Link href="/programs" className="flex items-center gap-1 hover:opacity-70">
                        Programs <ChevronDown size={16} />
                    </Link>

                    {/* About Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setAboutOpen(true)}
                        onMouseLeave={() => setAboutOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:opacity-70">
                            About <ChevronDown size={16} />
                        </button>

                        {aboutOpen && (
                            <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden z-50">
                                <Link
                                    href="/about-us"
                                    className="block px-5 py-3 hover:bg-vanilla transition"
                                >
                                    About Us
                                </Link>

                                <Link
                                    href="/our-team"
                                    className="block px-5 py-3 hover:bg-vanilla transition"
                                >
                                    Our Team
                                </Link>

                                <Link
                                    href="/mission"
                                    className="block px-5 py-3 hover:bg-vanilla transition"
                                >
                                    Our Mission
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="/faq" className="hover:opacity-70">
                        FAQ
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6 text-xl font-extrabold text-black ">
                    <Link href="/consult" className="text-navy">
                        Book a Consult
                    </Link>

                    <Link
                        href="/join"
                        className="bg-navy text-white px-6 py-3 rounded-full font-semibold tracking-wide hover:opacity-90 transition"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </header>
    );
}
