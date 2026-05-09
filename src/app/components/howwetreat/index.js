import Link from "next/link";
import Image from "next/image";
import AtTheRate from "../attherate";
import { getTreatmentsByCategory } from "../../api/treatments";

import SpineSurgeryImg from "../../../../public/surgical/Spine Surgery.png";
import KneeSurgeryImg from "../../../../public/surgical/Knee Surgery.png";
import MinimallyInvasiveImg from "../../../../public/surgical/Minimally invasive surgery.png";
import PhysiotherapyImg from "../../../../public/non-surgical/Physiotheraphy.png";
import AquaTherapyImg from "../../../../public/non-surgical/Aqua Theraphy.png";
import StrengthTrainingImg from "../../../../public/non-surgical/Strength  Training.png";
import NutritionImg from "../../../../public/non-surgical/Nutrition.png";
import DiagnosticsImg from "../../../../public/non-surgical/Diagnostics.png";

const CATEGORY_LABEL = {
    surgical: "Surgical",
    nonsurgical: "Non Surgical",
    homepage: "Treatments",
};

const HOMEPAGE_TREATMENTS = [
    {
        slug: "spine-surgery",
        cardTitle: "Spine Care",
        href: "/surgical/spine-surgery",
        image: SpineSurgeryImg,
    },
    {
        slug: "osteoporosis-and-orthopaedic-care",
        cardTitle: "Orthopaedic Care",
        href: "/nonsurgical/osteoporosis-and-orthopaedic-care",
        image: KneeSurgeryImg,
    },
    {
        slug: "minimally-invasive-spine-surgery",
        cardTitle: "Surgical Care",
        href: "/surgical/minimally-invasive-spine-surgery",
        image: MinimallyInvasiveImg,
    },
    {
        slug: "physiotherapy",
        cardTitle: "Physiotherapy",
        href: "/nonsurgical/physiotherapy",
        image: PhysiotherapyImg,
    },
    {
        slug: "aqua-therapy",
        cardTitle: "Aqua Therapy",
        href: "/nonsurgical/aqua-therapy",
        image: AquaTherapyImg,
    },
    {
        slug: "strength-training",
        cardTitle: "Strength Training",
        href: "/nonsurgical/strength-training",
        image: StrengthTrainingImg,
    },
    {
        slug: "clinical-nutrition",
        cardTitle: "Nutrition & Lifestyle Care",
        href: "/nonsurgical/clinical-nutrition",
        image: NutritionImg,
    },
    {
        slug: "path-labs-and-imaging",
        cardTitle: "Diagnostics, Path Lab & IV Procedures",
        href: "/nonsurgical/path-labs-and-imaging",
        image: DiagnosticsImg,
    },
];

export default function HowWeTreat({ category = "surgical", label: labelProp }) {
    const isHomepage = category === "homepage";

    const items = isHomepage
        ? HOMEPAGE_TREATMENTS
        : getTreatmentsByCategory(category);

    if (items.length === 0) return null;

    const basePath = category === "nonsurgical" ? "/nonsurgical" : "/surgical";
    const label = labelProp ?? CATEGORY_LABEL[category] ?? "Solutions";

    return (
        <section className="bg-foreground py-10 md:py-24 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-2 md:mb-8">
                    <h2 className="flex flex-wrap items-baseline justify-center gap-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy">
                        {label} <AtTheRate />
                    </h2>

                    <p className="font-opensans mt-4 md:mt-6 text-sm sm:text-xl md:text-2xl text-navy">
                        An integrated step-by-step approach to personalised healthcare in Mumbai.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-gray-300/70 rounded-2xl md:rounded-3xl overflow-hidden">
                    {items.map((item) => {
                        const href = isHomepage
                            ? item.href
                            : `${basePath}/${item.slug}`;
                        const image = isHomepage ? item.image : item.hero?.image;

                        return (
                            <Link
                                key={item.slug}
                                href={href}
                                className="group flex flex-col items-center justify-center gap-4 md:gap-6 p-5 sm:p-6 md:p-10 bg-vanilla hover:bg-[#BFD6DC]/60 transition border border-gray-300/70"
                            >
                                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-white shadow-sm group-hover:scale-105 transition">
                                    {image && (
                                        <Image
                                            src={image}
                                            alt={item.cardTitle}
                                            fill
                                            sizes="(max-width: 768px) 80px, 112px"
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <p className="font-opensans text-sm sm:text-base md:text-xl text-center font-medium md:font-bold text-navy group-hover:text-[#0C3C46] leading-snug">
                                    {item.cardTitle}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
