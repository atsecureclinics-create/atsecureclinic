import React from 'react';
import Link from 'next/link';

const Features = () => {
    const features = [
        {
            title: "Ethical by Design",
            description: "Every care plan is guided by <b>need, not numbers</b>. Clear diagnosis, honest conversations, and <b>no unnecessary procedures ever.</b>",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Patient and doctor in a modern clinic"
        },
        {
            title: "Team-Based Precision",
            description: "Decisions are made <b>collaboratively, not in isolation</b>. Doctors, therapists, nutritionists, and rehabilitation specialists work together to deliver <b>accurate, minimally invasive care.</b>",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "Technology with Intent",
            description: "Advanced diagnostics paired with <b>minimally invasive and endoscopic surgical techniques</b>. Technology is used to <b>improve precision, reduce tissue damage, and accelerate recovery never to overtest.</b>",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "One Secure Stop",
            description: "Consultations, diagnostics, therapy, rehabilitation, and recovery <b>under one roof</b>. No referrals across the city. No fragmented appointments. <b>Just seamless care.</b>",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "Recovery, Reimagined",
            description: "Your journey from <b>pain to performance</b> is fully supported. Structured physiotherapy, strength training, aqua therapy, and nutrition guidance help you <b>return to movement sooner and stronger.</b>",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            imageAlt: "Medical consultation in progress"
        }
    ];

    return (
        <section className="min-h-screen font-seasons text-navy relative overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-0 pt-10">
                {features.map((feature, index) => (
                    <>
                        <div key={index} className="flex items-center gap-14 py-6 group">
                            {/* Image Side with Premium Reveal Effect */}
                            <div className="w-1/3 relative overflow-hidden rounded-3xl shadow-2xl shadow-black/5 ">
                                <img
                                    src={feature.image}
                                    alt={feature.imageAlt}
                                    className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Subtle overlay for depth */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-40" /> */}
                            </div>

                            {/* Text Side */}
                            <div className="w-2/3">
                                <h2
                                    className="text-2xl lg:text-4xl font-serif font-bold leading-tight text-navy mb-4"
                                    dangerouslySetInnerHTML={{ __html: feature.title }}
                                />

                                <p
                                    className="font-opensans text-xl leading-relaxed text-navy font-normal"
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
            <div className='flex justify-center pt-8' >
                <Link href="/book-consult" className="flex justify-center items-center gap-2 theme-button ">
                    Book a consult
                </Link>
            </div>
        </section>
    );
};

export default Features;