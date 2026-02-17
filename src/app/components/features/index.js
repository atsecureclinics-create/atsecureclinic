import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Features = () => {
    const features = [
        {
            title: "Ethical by Design",
            description: "Every care plan is based on need, not numbers. <b>Clear diagnosis, honest conversations, and no unnecessary procedures</b> <code>-</code> always.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Patient and doctor in a modern clinic"
        },
        {
            title: "Team-Based Precision",
            description: "Decisions are made collaboratively, not in isolation. Doctors, therapists, nutritionists and rehabilitation <strong>experts work together to deliver accurate, minimally invasive care</strong>.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "Technology with Intent",
            description: "Advanced diagnostics meet minimally invasive and endoscopic surgical techniques. Technology is used to reduce tissue damage, improve precision and support faster recovery <code>-</code> not to overtest.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "One SECURE Stop",
            description: "Consultations, diagnostics, therapy, rehabilitation and recovery happen under one roof. No referrals across the city. No fragmented appointments. So you can focus on healing, not managing healthcare",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "Recovery, Reimagined",
            description: "Your journey from pain to performance is entirely our  responsibility Structured physiotherapy, strength training, aqua therapy and nutrition support help patients return to movement sooner and stronger.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Medical consultation in progress"
        }
    ];

    return (
        <section className="min-h-screen font-seasons text-navy relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-0">
                {features.map((feature, index) => (
                    <>
                        <div key={index} className="flex items-center gap-14 py-12 group">
                            {/* Image Side with Premium Reveal Effect */}
                            <div className="w-1/3 relative overflow-hidden rounded-3xl shadow-2xl shadow-black/5 w-[300px] h-[300px] ">
                                <img
                                    src={feature.image}
                                    alt={feature.imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Subtle overlay for depth */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-40" /> */}
                            </div>

                            {/* Text Side */}
                            <div className="w-2/3 space-y-6">
                                <h2
                                    className="text-4xl lg:text-5xl font-serif font-bold leading-tight text-navy"
                                    dangerouslySetInnerHTML={{ __html: feature.title }}
                                />

                                <p
                                    className="text-2xl leading-relaxed text-navy font-bold"
                                    dangerouslySetInnerHTML={{ __html: feature.description }}
                                />
                            </div>
                        </div>

                        {/* Premium Divider - doesn't show after the last item */}
                        {index < features.length - 1 && (
                            <div className="w-full h-[1px] bg-green my-2" />
                        )}
                    </>
                ))}
            </div>
            {/* Optional "Learn More" link to enhance premium feel */}
            <div className='flex justify-center' >
                <Link href="/book-consult" className="flex justify-center items-center gap-2 theme-button px-6 py-4 !text-xl">
                    Book a consult <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default Features;