import React from 'react'
import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link'
import team from "../../../public/common/team.png";
import AtTheRate from '../components/attherate';
import HowWeTreat from '../components/howwetreat';
import MovingGallery from '../components/movinggallery';
import FAQ from '../components/faq';
// import Biomarkers from '../../../public/common/'

const surgerySteps = [
    {
        number: "01",
        title: "You’re Heard <code>-</code> Properly",
        text: "Every journey starts with listening, not rushing. Your spine or ortho concerns, pain, lifestyle, and goals are understood before any treatment is suggested.",
    },
    {
        number: "02",
        title: "Nothing Is Rushed",
        text: "Surgery is never the first step. We explore all conservative, non-surgical options first, ensuring that every decision is thoughtful and patient-focused.",
    },
    {
        number: "03",
        title: "Only What Truly Helps",
        text: "When surgery becomes necessary, it’s because it delivers clear benefits. Our specialists recommend minimally invasive or endoscopic spine and ortho procedures only when truly needed.",
    },
    {
        number: "0<code>4</code>",
        title: "A Plan Made Just for You",
        text: "No standard protocols. No packages. Each surgical plan — from approach to technique to recovery — is tailor-made for your spine or ortho condition.",
    },
    {
        number: "05",
        title: "Precision Over Trauma",
        text: "We focus on treating the problem, not disturbing healthy tissue. Using minimally invasive and endoscopic surgery, we reduce tissue damage, shorten hospital stays, and enable faster recovery.",
    },
    {
        number: "06",
        title: "You’re Prepared, Not Surprised",
        text: "Every step is explained clearly: what will happen, how it feels, and what recovery entails. This clarity reduces anxiety and builds confidence in your care journey.",
    },
    {
        number: "07",
        title: "Recovery Is Actively Supported",
        text: "Post-surgery, we guide you through physiotherapy, strength training, aqua therapy, and rehabilitation. Every step is designed for safe and effective spine and ortho recovery.",
    },
    {
        number: "08",
        title: "We Stay With You",
        text: "Follow-ups, rehab guidance, and progress tracking ensure your recovery continues smoothly. You’re never left to navigate the journey alone.",
    },
];

const ProgramOutline = [
    {
        number: "01",
        title: "You’re Heard Properly",
        text: "Every journey starts with listening, not rushing. Your spine or ortho concerns, pain, lifestyle, and goals are understood before any treatment is suggested.",
    },
    {
        number: "02",
        title: "Nothing Is Rushed",
        text: "Surgery is never the first step. We explore all conservative, non-surgical options first, ensuring that every decision is thoughtful and patient-focused.",
    },
    {
        number: "03",
        title: "Only What Truly Helps",
        text: "When surgery becomes necessary, it’s because it delivers clear benefits. Our specialists recommend minimally invasive or endoscopic spine and ortho procedures only when truly needed.",
    },
    {
        number: "04",
        title: "A Plan Made Just for You",
        text: "Each surgical plan — from approach to technique to recovery — is tailored specifically for your condition.",
    },
];

const steps = [
    {
        number: "1.",
        title: "YOU’RE HEARD PROPERLY",
        text: "Every journey starts with listening carefully. Your spine or ortho concerns, pain, lifestyle, and goals are understood before treatment is suggested.",
    },
    {
        number: "2.",
        title: "NOTHING IS RUSHED",
        text: "Surgery is never the first step. We explore conservative, non-surgical options first so every decision remains thoughtful and patient-focused.",
    },
    {
        number: "3.",
        title: "WATCH AND LEARN",
        text: "When surgery becomes necessary, specialists recommend minimally invasive or endoscopic procedures only when truly beneficial.",
    },
    {
        number: "4.",
        title: "APPLY YOUR INSIGHTS",
        text: "Recovery plans include physiotherapy, rehab guidance, and continuous follow-up for long-term healing.",
    },
];

function Overview() {
    return (
        <div>
            {/* HERO */}
            <section className="min-h-[85vh] flex items-center bg-vanilla">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7 xl:col-span-6">
                            {/* Eyebrow */}
                            <p className="mb-4 text-2xl font-bold uppercase tracking-[0.25em] text-coral">
                                Specialist<code>-</code>Led Care
                            </p>

                            {/* H1 */}
                            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-navy mb-5">
                                Advanced Surgery, Considered Carefully.
                            </h1>

                            <p className="font-opensans md:text-2xl">Over a decade of pioneering endoscopic surgery in Mumbai, with patient first decision making. Clear decisions, minimally invasive and carefully planned recovery. </p>
                        </div>

                        {/* RIGHT VIDEO */}
                        <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-lg aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl">
                                <Image
                                    src={team}
                                    alt="Membership"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-18 bg-vanilla">
                <Container>
                    <div className="font-opensans text-lg md:text-xl text-navy leading-relaxed space-y-6 ">
                        <p>
                            At Secure Clinics, surgery is never the first conversation <code>-</code> it is the most considered one. Every patient is evaluated through detailed clinical assessment, advanced diagnostics and multidisciplinary discussion. Conservative treatment options are always explored before surgery is recommended.
                        </p>
                        <p>
                            When surgical intervention becomes necessary, it is performed with precision, experience and intent.
                            The surgical team has been at the forefront of minimally invasive and endoscopic spine surgery in Mumbai for over a decade. These techniques allow targeted treatment through smaller incisions, reduced tissue disruption and faster recovery without compromising outcomes.
                        </p>
                        <p>
                            <span className='font-bold text-xl' >What defines surgical care here is judgement.</span>
                            Each procedure is tailored to the individual, never standardised or rushed. Patients are guided clearly through why surgery is recommended, what it involves, and what recovery will look like. From pre-operative planning to post-surgical rehabilitation, care remains structured, personal and closely supported.
                        </p>
                    </div>
                </Container>
            </section>

            <section className='bg-foreground pt-4 pb-8' >
                <Container>
                    <ul className='flex justify-between items-baseline text-xl font-extrabold px-10'>
                        <li>
                            <Image src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/65fa20b30dcdc496ac12a5c3_ilust-test-tubes.webp'} width={100} height={100} className=' m-auto pb-3 ' />
                            <p>A 45 minute consultation</p>
                        </li>
                        <li>
                            <Image src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/63a3384eaec14dea5d85a105_phone-illustration.avif'} width={100} height={100} className=' m-auto pb-3 ' />
                            <p>Care Plan and Next Steps </p>
                        </li>
                        <li>
                            <Image src={'https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d/64f6682600edf017514d172b_ilust-care-plan.webp'} width={100} height={100} className=' m-auto pb-3 ' />
                            <p>Restore and Rebuild Regime</p>
                        </li>
                    </ul>
                </Container>
            </section>

            <section className="bg-vanilla py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Heading */}
                    <div className="text-center mb-24">
                        <p className="uppercase tracking-[0.35em] text-xl text-coral font-extrabold mb-4">
                            Surgery Journey
                        </p>

                        <h2 className="font-seasons text-4xl md:text-6xl text-navy leading-tight max-w-4xl mx-auto">
                            Surgery <span className="text-coral">—</span> Before, During, After
                        </h2>

                        <p className="font-opensans mt-6 text-lg md:text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                            What to expect, how decisions are made and how recovery is supported.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {surgerySteps.map((step) => (
                            <div
                                key={step.number}
                                className="group bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-navy/5 hover:-translate-y-2"
                            >

                                {/* Number */}
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-5xl md:text-6xl font-seasons text-coral/70 group-hover:text-coral transition-colors duration-500" dangerouslySetInnerHTML={{ __html: step.number }} />

                                    <div className="w-12 h-[1px] bg-navy/20 group-hover:w-20 transition-all duration-500"></div>
                                </div>

                                {/* Title */}
                                <h3
                                    className="font-seasons text-3xl md:text-4xl text-navy mb-5 leading-snug"
                                    dangerouslySetInnerHTML={{ __html: step.title }}
                                />

                                {/* Text */}
                                <p
                                    className="font-opensans text-lg text-navy/75 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: step.text }}
                                />

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="bg-[#d9e7e7] py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <div className="grid lg:grid-cols-2 gap-20 items-start">

                        {/* Left Side */}
                        <div className="sticky top-24">
                            <p className="uppercase tracking-[0.3em] text-xl text-coral font-semibold mb-6">
                                Surgery Journey
                            </p>

                            <h2 className="font-seasons text-5xl md:text-7xl text-navy leading-[1.05] max-w-xl">
                                Surgery designed around your recovery.
                            </h2>

                            <p className="font-opensans mt-8 text-lg text-navy max-w-md leading-relaxed font-medium">
                                What to expect, how decisions are made and how recovery is supported.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="space-y-10">
                            {ProgramOutline.map((step) => (
                                <div
                                    key={step.number}
                                    className="border-t border-navy/20 pt-8 group"
                                >
                                    <div className="flex items-start gap-6">

                                        {/* Number */}
                                        <span
                                            className="font-opensans text-3xl text-coral min-w-[60px]"
                                            dangerouslySetInnerHTML={{ __html: step.number }}
                                        />

                                        {/* Content */}
                                        <div>
                                            <h3
                                                className="uppercase tracking-[0.15em] text-xl font-bold text-navy mb-4"
                                                dangerouslySetInnerHTML={{ __html: step.title }}
                                            />

                                            <p className="font-opensans text-lg text-navy leading-relaxed max-w-2xl">
                                                {step.text}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            <section className="bg-green py-18">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h2 className="font-seasons text-5xl md:text-6xl text-navy">
                            How it Works
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="bg-white rounded-3xl p-5 flex flex-col justify-start hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-lg"
                            >
                                {/* Number */}
                                <span className="font-opensans text-coral text-5xl mb-4 font-extrabold">
                                    {step.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-navy uppercase tracking-[0.15em] font-semibold text-xl leading-snug mb-4">
                                    {step.title}
                                </h3>

                                {/* Text */}
                                <p className="font-opensans text-navy text-lg leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            <section>
                <HowWeTreat />
            </section>

            <section>
                <MovingGallery />
            </section>

            <section className="bg-background">
                <FAQ />
            </section>


        </div>
    )
}

export default Overview