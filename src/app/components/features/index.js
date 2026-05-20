import React from 'react';
import ConsultButton from '../consultmodal/button';

const Features = () => {
    const features = [
        {
            title: "Ethical by Design",
            description: "Every care plan is guided by <b>need, not numbers</b>. Clear diagnosis, honest conversations, and <b>no unnecessary procedures ever.</b>",
            image: "./usp/usp1.png",
            imageAlt: "Patient and doctor in a modern clinic"
        },
        {
            title: "Team-Based Precision",
            description: "Decisions are made <b>collaboratively, not in isolation</b>. Doctors, therapists, nutritionists, and rehabilitation specialists work together to deliver <b>accurate, minimally invasive care.</b>",
            image: "./usp/usp2.png",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "Technology with Intent",
            description: "Advanced diagnostics paired with <b>minimally invasive and endoscopic surgical techniques</b>. Technology is used to <b>improve precision, reduce tissue damage, and accelerate recovery never to overtest.</b>",
            image: "./usp/usp3.png",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "One Secure Stop",
            description: "Consultations, diagnostics, therapy, rehabilitation, and recovery <b>under one roof</b>. No referrals across the city. No fragmented appointments. <b>Just seamless care.</b>",
            image: "./usp/usp4.png",
            imageAlt: "Medical consultation in progress"
        },
        {
            title: "Recovery, Reimagined",
            description: "Your journey from <b>pain to performance</b> is fully supported. Structured physiotherapy, strength training, aqua therapy, and nutrition guidance help you <b>return to movement sooner and stronger.</b>",
            image: "./usp/usp5.png",
            imageAlt: "Medical consultation in progress"
        }
    ];

    return (
        <section className="font-seasons text-navy relative overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-0 pt-8 md:pt-10 px-4 sm:px-6">
                {features.map((feature, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 lg:gap-14 py-6 group">
                            {/* Image Side */}
                            <div className="w-full md:w-2.5/4 relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-black/5">
                                <img
                                    src={feature.image}
                                    alt={feature.imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-2.5/4">
                                <h2
                                    className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight text-navy mb-3 md:mb-4"
                                    dangerouslySetInnerHTML={{ __html: feature.title }}
                                />

                                <p
                                    className="font-opensans text-base md:text-lg lg:text-xl leading-relaxed text-navy font-normal"
                                    dangerouslySetInnerHTML={{ __html: feature.description }}
                                />
                            </div>
                        </div>

                        {index < features.length - 1 && (
                            <div className="w-full h-px bg-green my-2" />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className='flex justify-center pt-8 md:pt-10' >
                <ConsultButton className="flex justify-center items-center gap-2 theme-button ">
                    Book A Consult
                </ConsultButton>
            </div>
        </section>
    );
};

export default Features;