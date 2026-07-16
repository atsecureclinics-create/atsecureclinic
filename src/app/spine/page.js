import React from 'react'
import Container from '../components/container';
import Image from 'next/image';
import team from "../../../public/home-banner-mobile.png";
import MovingGallery from '../components/movinggallery';
import FAQ from '../components/faq';

const steps = [
    {
        number: "01",
        title: "You're Heard Properly",
        text: "Every journey starts with listening. Your spine concerns, pain history, lifestyle, and goals are fully understood before any treatment is suggested.",
    },
    {
        number: "02",
        title: "Advanced Diagnostic Assessment",
        text: "A thorough clinical evaluation combined with imaging and diagnostic tools helps identify the exact source and nature of your spine condition.",
    },
    {
        number: "03",
        title: "Nothing Is Rushed",
        text: "Surgery is never the first step. Every conservative, non-surgical option is explored first — ensuring each decision is thoughtful and patient-focused.",
    },
    {
        number: "04",
        title: "A Plan Made Just for You",
        text: "No standard protocols. No packages. Each treatment plan — from approach to technique to recovery — is tailor-made for your specific spine condition.",
    },
    {
        number: "05",
        title: "Precision Over Trauma",
        text: "We focus on treating the problem, not disturbing healthy tissue. Minimally invasive and endoscopic techniques reduce damage and enable faster recovery.",
    },
    {
        number: "06",
        title: "You're Prepared, Not Surprised",
        text: "Every step is explained clearly: what will happen, how it feels, and what recovery entails. This clarity reduces anxiety and builds confidence in your care.",
    },
    {
        number: "07",
        title: "Recovery Is Actively Supported",
        text: "We guide you through physiotherapy, strength training, aqua therapy and rehabilitation. Every step is designed for safe and effective spine recovery.",
    },
    {
        number: "08",
        title: "We Stay With You",
        text: "Follow-ups, rehab guidance and progress tracking ensure your recovery continues smoothly. You're never left to navigate the journey alone.",
    },
];

export const metadata = {
    title: "Spine Conditions Treatment in Mumbai | Secure Clinics",
    description: "Expert care for all spine conditions in Mumbai — back pain, sciatica, slipped disc, spinal stenosis and more. Conservative-first, specialist-led spine care.",
};

function SpineConditions() {
    return (
        <div>
            {/* HERO */}
            <section className="min-h-[70vh] lg:min-h-[85vh] flex items-center bg-vanilla py-4 lg:py-0">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 xl:col-span-6">
                            <p className="mb-3 md:mb-4 text-base md:text-xl lg:text-2xl font-bold uppercase tracking-[0.25em] text-coral">
                                Specialist<code>-</code>Led Care
                            </p>

                            <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-navy mb-4 md:mb-5">
                                Spine Care, Considered Carefully.
                            </h1>

                            <p className="font-opensans text-sm md:text-xl lg:text-2xl leading-relaxed">
                                Expert diagnosis and treatment for all spine conditions — from back pain and sciatica to slipped discs and spinal stenosis. Conservative-first, precision-led care.
                            </p>
                        </div>

                        <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-4/5 rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl">
                                <Image
                                    src={team}
                                    alt="Spine care team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-4 md:py-18 bg-vanilla">
                <Container>
                    <div className="font-opensans text-sm md:text-lg lg:text-xl text-navy leading-relaxed space-y-5 md:space-y-6">
                        <p>
                            At Secure Clinics, spine care begins with the right diagnosis — not a rushed recommendation. Every patient presenting with a spine condition is evaluated through detailed clinical assessment, advanced imaging and multidisciplinary discussion before any treatment is suggested.
                        </p>
                        <p>
                            Whether you are dealing with back pain, lower back pain, neck pain, sciatica, a slipped disc, spinal stenosis, spondylosis, spondylolisthesis, spinal fracture or cervical radiculopathy — our spine specialists are experienced in treating the full spectrum of conditions affecting the spine.
                        </p>
                        <p>
                            <span className='font-bold text-lg md:text-xl block mb-1'>What defines our approach is judgement.</span>
                            Each plan is tailored to the individual, never standardised. Patients are guided clearly through every stage — from diagnosis to recovery — with structured, personal support.
                        </p>
                    </div>
                </Container>
            </section>

            <section className='bg-foreground py-8 md:pt-4 md:pb-8'>
                <Container>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center text-base md:text-xl font-extrabold px-2 md:px-10'>
                        <li>
                            <Image src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/65fa20b30dcdc496ac12a5c3_ilust-test-tubes.webp'} alt="Consultation" width={100} height={100} className='m-auto pb-3 w-20 md:w-25 h-20' />
                            <p className='font-serif'>A 45 minute consultation</p>
                        </li>
                        <li>
                            <Image src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/63a3384eaec14dea5d85a105_phone-illustration.avif'} alt="Care plan" width={100} height={100} className='m-auto pb-3 w-20 md:w-25 h-20' />
                            <p className='font-serif'>Care Plan and Next Steps</p>
                        </li>
                        <li>
                            <Image src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64f6682600edf017514d172b_ilust-care-plan.webp'} alt="Rebuild regime" width={100} height={100} className='m-auto pb-3 w-20 md:w-25 h-20' />
                            <p className='font-serif'>Restore and Rebuild Regime</p>
                        </li>
                    </ul>
                </Container>
            </section>

            <section className="bg-vanilla py-4 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-14 md:mb-24">
                        <p className="uppercase tracking-[0.35em] text-sm md:text-xl text-coral font-extrabold mb-3 md:mb-4">
                            Your Spine Care Journey
                        </p>

                        <h2 className="font-seasons text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-navy leading-tight max-w-4xl mx-auto">
                            Spine Care <span className="text-coral">—</span> Step by Considered Step
                        </h2>

                        <p className="font-opensans mt-4 md:mt-6 text-sm md:text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                            How we listen, assess, plan and support you through every stage of your spine care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="group bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-navy/5 hover:-translate-y-2"
                            >
                                <div className="flex items-center justify-between mb-2 md:mb-8">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-serif text-coral/70 group-hover:text-coral transition-colors duration-500">
                                        {step.number}
                                    </span>
                                    <div className="w-10 md:w-12 h-px bg-navy/20 group-hover:w-16 md:group-hover:w-20 transition-all duration-500" />
                                </div>

                                <h3 className="font-seasons text-2xl sm:text-3xl md:text-4xl text-navy mb-3 md:mb-5 leading-snug">
                                    {step.title}
                                </h3>

                                <p className="font-opensans text-sm md:text-lg text-navy/75 leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <MovingGallery />
            </section>

            <section className="bg-background">
                <FAQ />
            </section>
        </div>
    );
}

export default SpineConditions;
