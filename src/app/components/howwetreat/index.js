import Link from "next/link";
import AtTheRate from "../attherate";
import {
    Activity,
    Bone,
    Stethoscope,
    HeartPulse,
    Waves,
    Dumbbell,
    Apple,
    Microscope,
    Syringe,
    FlaskConical,
    Sparkles,
} from "lucide-react";
import { getTreatmentsByCategory } from "../../api/treatments";

const ICONS = {
    activity: Activity,
    bone: Bone,
    stethoscope: Stethoscope,
    heartPulse: HeartPulse,
    waves: Waves,
    dumbbell: Dumbbell,
    apple: Apple,
    microscope: Microscope,
    syringe: Syringe,
    flaskConical: FlaskConical,
    sparkles: Sparkles,
};

const CATEGORY_LABEL = {
    surgical: "SURGICAL",
    nonsurgical: "NON-SURGICAL",
};

export default function HowWeTreat({ category = "surgical" }) {
    const items = getTreatmentsByCategory(category);

    if (items.length === 0) return null;

    const basePath = category === "nonsurgical" ? "/nonsurgical" : "/surgical";
    const label = CATEGORY_LABEL[category] ?? "TREATMENTS";

    return (
        <section className="bg-foreground py-28">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-8">
                    <h2 className="flex flex-wrap items-baseline gap-2 text-5xl font-semibold tracking-tight text-navy items-end justify-center">
                        {label} <AtTheRate size={38} />TREATMENTS
                    </h2>

                    <p className="font-opensans mt-6 text-2xl text-navy">
                        An integrated step-by-step approach to personalised healthcare in Mumbai.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-300/70 rounded-3xl overflow-hidden">
                    {items.map((item) => {
                        const Icon = ICONS[item.iconKey] ?? Activity;
                        return (
                            <Link
                                key={item.slug}
                                href={`${basePath}/${item.slug}`}
                                className="group flex flex-col items-center justify-center gap-6 p-10 bg-vanilla hover:bg-[#BFD6DC]/60 transition border border-gray-300/70"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm group-hover:scale-105 transition">
                                    <Icon className="w-8 h-8 text-navy" />
                                </div>
                                <p className="text-xl text-center font-bold text-navy group-hover:text-[#0C3C46]">
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
