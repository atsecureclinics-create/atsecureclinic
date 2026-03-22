import React from 'react';
import LogoFooter from '../../../../public/icons/logo.svg';
import Image from 'next/image';
import {
    Instagram,
    Linkedin,
    Youtube,
    Send,
    ChevronDown,
    Music2,
    Podcast,
    Twitter,
    ArrowUpRight
} from 'lucide-react';

const Footer = () => {
    const sections = [
        {
            title: "About",
            links: ["Mission", "Testimonials", "Our Story", "Mumbai Office", "Press"]
        },
        {
            title: "Services",
            links: ["Spine Care", "Orthopaedic Care", "Surgical Care", "Physiotherapy", "Aqua Therapy", "Strength Training", "Nutrition & Lifestyle", "Diagnostics & Path Lab"]
        },
        {
            title: "Care",
            links: ["Meet The Care Team", "How We Treat", "Secure Stories", "FAQs"]
        },
        {
            title: "Resources",
            links: ["Blog", "Events", "Guides"]
        },
        {
            title: "Company",
            links: ["Careers", "Partnerships", "Book a Consult", "Contact Us"]
        }
    ];

    return (
        <footer className="font-seasons relative bg-background text-navy pt-24 pb-16 px-8 md:px-16 lg:px-24">
            {/* Subtle Grainy Overlay for Premium Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT: Subscription & Podcast */}
                    <div className="lg:col-span-4 space-y-12">

                        {/* Newsletter Card */}
                        <div className="bg-foreground text-navy p-5 rounded-2xl border border-white/30 shadow-2xl shadow-[#002b30]/5">
                            <h3 className="text-xl tracking-[0.2em] mb-3 uppercase font-semibold">Stay In Touch</h3>
                            <p className="font-opensans text-sm mb-8 leading-relaxed">
                                Keep tabs on Secure Clinics and get no-fluff content delivered to your inbox.
                            </p>

                            <form className="space-y-4">
                                <div className="relative group">
                                    <select className="w-full appearance-none bg-white/60 border-none rounded-2xl px-5 py-4 text-sm font-semibold focus:ring-2 focus:ring-[#00434b]/20 transition-all cursor-pointer">
                                        <option>I<code>'</code>m interested in...</option>
                                        <option>Spine <code>&</code> Orthopaedic Care</option>
                                        <option>Physiotherapy <code>&</code> Recovery</option>
                                        <option>Book a Consult</option>
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-white/60 border-none rounded-2xl px-5 py-4 text-sm font-semibold placeholder:opacity-40 focus:ring-2 focus:ring-[#00434b]/20 transition-all"
                                />

                                <button className="w-full theme-button">
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Podcast Section */}
                        <div className="space-y-6">
                            <h3 className="text-base font-bold tracking-[0.2em] uppercase">Resources</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <PodcastLink icon={<Music2 size={18} />} platform="Blog" href="#" />
                                <PodcastLink icon={<Podcast size={18} />} platform="Guides" href="#" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Navigation Links Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
                            {sections.map((section) => (
                                <div key={section.title} className="flex flex-col space-y-3 text-black">
                                    <h3 className="text-lg font-extrabold tracking-[0.2em] uppercase border-b border-navy/10 pb-1">{section.title}</h3>
                                    <ul className="font-opensans flex flex-col space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link} className='mb-2'>
                                                <a href="#" className="group flex items-center text-base transition-all">
                                                    {link}
                                                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Socials Group */}
                            <div className="flex flex-col space-y-5 text-black">
                                <h3 className="text-base font-bold tracking-[0.2em] uppercase opacity-90 border-b border-[#002b30]/10 pb-2">Socials</h3>
                                <div className="flex gap-6 items-center pt-1">
                                    <SocialIcon icon={<Instagram size={20} strokeWidth={1.5} />} />
                                    <SocialIcon icon={<Twitter size={20} strokeWidth={1.5} />} />
                                    <SocialIcon icon={<Linkedin size={20} strokeWidth={1.5} />} />
                                    <SocialIcon icon={<Youtube size={22} strokeWidth={1.5} />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Chat Button */}
                {/* <div className="fixed bottom-10 right-10 z-50">
                    <button className="group flex items-center gap-4 bg-white pl-8 pr-4 py-4 rounded-full shadow-[0_20px_50px_rgba(0,43,48,0.15)] hover:shadow-[0_20px_60px_rgba(0,43,48,0.25)] transition-all transform hover:-translate-y-2 border border-[#002b30]/5">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#002b30]">Want to chat with us?</span>
                        <div className="bg-[#002b30] p-3 rounded-full text-white group-hover:rotate-12 transition-transform shadow-inner">
                            <Send size={16} fill="white" className="mr-0.5" />
                        </div>
                    </button>
                </div> */}
            </div>
            <hr className='my-12' />
            <div className='logo-footer w-full h-[100px]'>
                <Image src={LogoFooter} alt="Secure Clinic" className='w-full h-full object-contain' />
            </div>
            <div className="flex gap-8 justify-between items-center pt-8">
                <div className="text-size-small">© Secure Clinics 2025. All Rights Reserved.</div>
                <div className=" gap-5 flex items-center">
                    <a href="#" className="underline">Privacy policy</a>
                    <a href="#" className="underline">Terms of use</a></div>
            </div>
        </footer>
    );
};

// --- Atomic Components ---

const PodcastLink = ({ icon, platform, href = "#" }) => (
    <a href={href} className="flex items-center gap-4 bg-[#002b30] text-white px-6 py-4 rounded-2xl hover:bg-[#003d45] transition-all group shadow-xl shadow-[#002b30]/10 flex-1 sm:flex-none min-w-[180px]">
        <div className="bg-white/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest opacity-50 font-bold">Listen on</span>
            <span className="text-sm font-bold tracking-wide">{platform}</span>
        </div>
    </a>
);

const SocialIcon = ({ icon }) => (
    <a href="#" className="p-2 -m-2 text-[#002b30] opacity-60 hover:opacity-100 hover:scale-125 transition-all duration-300">
        {icon}
    </a>
);

export default Footer;