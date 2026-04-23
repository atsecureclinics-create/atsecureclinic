import React from 'react';
import Link from 'next/link';
import LogoFooter from '../../../../public/icons/logo.svg';
import Image from 'next/image';
import {
    Instagram,
    Linkedin,
    Youtube,
    Twitter,
    ArrowUpRight
} from 'lucide-react';
import SubscribeForm from './subscribeform';

const SECTIONS = [
    {
        title: "About",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Our Team", href: "/the-care-team" },
            { label: "Press", href: "/press" },
        ],
    },
    {
        title: "Surgical Care",
        links: [
            { label: "All Surgical Treatments", href: "/surgical" },
            { label: "Endoscopic Spine Surgery", href: "/surgical/endoscopic-spine-surgery" },
            { label: "Minimally Invasive Surgery", href: "/surgical/minimally-invasive-spine-surgery" },
            { label: "Spine Surgery", href: "/surgical/spine-surgery" },
            { label: "Knee Surgery", href: "/surgical/knee-surgery" },
            { label: "Shoulder Surgery", href: "/surgical/shoulder-surgery" },
            { label: "Hip Surgery", href: "/surgical/hip-surgery" },
        ],
    },
    {
        title: "Non<code>-</code>Surgical Care",
        links: [
            { label: "All Non-Surgical Treatments", href: "/nonsurgical" },
            { label: "Physiotherapy", href: "/nonsurgical/physiotherapy" },
            { label: "Aqua Therapy", href: "/nonsurgical/aqua-therapy" },
            { label: "Strength Training", href: "/nonsurgical/strength-training" },
            { label: "Pilates", href: "/nonsurgical/pilates" },
            { label: "Clinical Nutrition", href: "/nonsurgical/clinical-nutrition" },
            { label: "Diagnostics & Path Lab", href: "/nonsurgical/path-labs-and-imaging" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Blogs", href: "/blogs" },
            { label: "FAQ", href: "/faq" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Membership", href: "/membership" },
            { label: "Book a Consult", href: "/contact-us" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
];

const Footer = () => {

    return (
        <footer className="font-seasons relative bg-background text-navy pt-16 md:pt-24 pb-10 md:pb-16 px-4 sm:px-8 md:px-12 lg:px-24">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">

                    {/* LEFT: Newsletter & Resources */}
                    <div className="lg:col-span-4 space-y-10 md:space-y-12">

                        <div className="bg-foreground text-navy p-5 rounded-2xl border border-white/30 shadow-2xl shadow-[#002b30]/5">
                            <h3 className="text-base md:text-xl tracking-[0.2em] mb-3 uppercase font-semibold">Stay In Touch</h3>
                            <p className="font-opensans text-sm mb-6 md:mb-8 leading-relaxed">
                                Keep tabs on Secure Clinics and get no-fluff content delivered to your inbox.
                            </p>

                            <SubscribeForm />
                        </div>
                    </div>

                    {/* RIGHT: Navigation Links Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-16 gap-x-6 md:gap-x-8">
                            {SECTIONS.map((section) => (
                                <div key={section.title} className="flex flex-col space-y-3 text-black">
                                    <h3
                                        className="text-sm md:text-lg font-extrabold tracking-[0.2em] uppercase border-b border-navy/10 pb-1"
                                        dangerouslySetInnerHTML={{ __html: section.title }}
                                    />
                                    <ul className="font-opensans flex flex-col space-y-2 md:space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.href + link.label} className="mb-1 md:mb-2">
                                                <Link href={link.href} className="group flex items-center text-sm md:text-base transition-all">
                                                    {link.label}
                                                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="flex flex-col space-y-4 md:space-y-5 text-black">
                                <h3 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase opacity-90 border-b border-[#002b30]/10 pb-2">
                                    Socials
                                </h3>
                                <div className="flex gap-5 md:gap-6 items-center pt-1">
                                    <SocialIcon href="https://instagram.com/the.secureclinics" label="Instagram" icon={<Instagram size={20} strokeWidth={1.5} />} />
                                    <SocialIcon href="#" label="Twitter" icon={<Twitter size={20} strokeWidth={1.5} />} />
                                    <SocialIcon href="#" label="LinkedIn" icon={<Linkedin size={20} strokeWidth={1.5} />} />
                                    <SocialIcon href="#" label="YouTube" icon={<Youtube size={22} strokeWidth={1.5} />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-8 md:my-12 border-navy/15" />

            <div className="logo-footer w-full h-14 md:h-25">
                <Image src={LogoFooter} alt="Secure Clinic" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-between sm:items-center pt-6 md:pt-8 text-xs sm:text-sm">
                <div>© Secure Clinics {new Date().getFullYear()}. All Rights Reserved.</div>
                <div className="flex gap-5 items-center">
                    <Link href="#">Privacy policy</Link>
                    <Link href="#">Terms of use</Link>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href = "#", label }) => (
    <a
        href={href}
        aria-label={label}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="p-2 -m-2 text-[#002b30] opacity-60 hover:opacity-100 hover:scale-125 transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;