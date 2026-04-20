import Link from "next/link";
import Image from "next/image";
import AtTheRate from "../attherate";
import { getTreatmentsByCategory } from "../../api/treatments";

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
        <section className="bg-foreground py-16 md:py-24 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-8">
                    <h2 className="flex flex-wrap items-baseline justify-center gap-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy">
                        {label} <AtTheRate size={28} className="sm:hidden" /><AtTheRate size={38} className="hidden sm:inline-block" />TREATMENTS
                    </h2>

                    <p className="font-opensans mt-4 md:mt-6 text-base sm:text-xl md:text-2xl text-navy">
                        An integrated step-by-step approach to personalised healthcare in Mumbai.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-gray-300/70 rounded-2xl md:rounded-3xl overflow-hidden">
                    {items.map((item) => (
                        <Link
                            key={item.slug}
                            href={`${basePath}/${item.slug}`}
                            className="group flex flex-col items-center justify-center gap-4 md:gap-6 p-5 sm:p-6 md:p-10 bg-vanilla hover:bg-[#BFD6DC]/60 transition border border-gray-300/70"
                        >
                            <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-white shadow-sm group-hover:scale-105 transition">
                                {item.hero?.image && (
                                    <Image
                                        src={item.hero.image}
                                        alt={item.cardTitle}
                                        fill
                                        sizes="(max-width: 768px) 80px, 112px"
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <p className="text-sm sm:text-base md:text-xl text-center font-bold text-navy group-hover:text-[#0C3C46] leading-snug">
                                {item.cardTitle}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
