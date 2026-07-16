import Container from "../container";
import ConsultButton from "../consultmodal/button";
import FAQ from "../faq";
import MovingGallery from "../movinggallery";

function BulletList({ items, cols = 1 }) {
    const grid = cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1";
    return (
        <ul className={`grid ${grid} gap-y-2 gap-x-6`}>
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-opensans text-sm md:text-base text-navy leading-snug">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-coral shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    );
}

function SectionHeading({ eyebrow, heading, subheading }) {
    return (
        <div className="mb-8 md:mb-12">
            {eyebrow && (
                <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-coral font-extrabold mb-2 font-opensans">
                    {eyebrow}
                </p>
            )}
            <h2
                className="font-seasons text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy leading-tight"
                dangerouslySetInnerHTML={{ __html: heading }}
            />
            {subheading && (
                <p className="font-opensans mt-3 text-sm md:text-lg text-navy/75 leading-relaxed max-w-3xl">
                    {subheading}
                </p>
            )}
        </div>
    );
}

export default function ConditionPage({ condition }) {
    const {
        cardTitle,
        hero,
        what,
        symptoms,
        causes,
        associatedConditions,
        types,
        diagnosis,
        nonSurgical,
        whenSurgery,
        recovery,
        whenDoctor,
        whyChoose,
    } = condition;

    const causeColCount = causes
        ? [causes.common, causes.sports, causes.medical, causes.riskFactors].filter(Boolean).length
        : 0;
    const causeGridClass =
        causeColCount >= 3
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : causeColCount === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1";

    return (
        <div>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="bg-vanilla pt-12 pb-10 md:pt-20 md:pb-16 lg:pt-28 lg:pb-20">
                <Container>
                    {hero.eyebrow && (
                        <p className="mb-3 md:mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-coral font-opensans">
                            {hero.eyebrow}
                        </p>
                    )}
                    <h1
                        className="font-seasons text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-navy mb-5"
                        dangerouslySetInnerHTML={{ __html: hero.title }}
                    />
                    <div className="font-opensans text-sm md:text-lg lg:text-xl text-navy/85 leading-relaxed space-y-3">
                        {(Array.isArray(hero.intro) ? hero.intro : [hero.intro]).map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── WHAT IS IT ───────────────────────────────────────── */}
            {what && (
                <section className="bg-white py-10 md:py-16">
                    <Container>
                        <SectionHeading heading={what.heading || `What is ${cardTitle}?`} />
                        <div className="font-opensans text-sm md:text-lg lg:text-xl text-navy leading-relaxed space-y-5">
                            {what.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* ── SYMPTOMS ─────────────────────────────────────────── */}
            {symptoms && (
                <section className="bg-vanilla py-10 md:py-16">
                    <Container>
                        <SectionHeading heading={symptoms.heading} />
                        {symptoms.intro && (
                            <p className="font-opensans text-sm md:text-lg text-navy mb-6 leading-relaxed">
                                {symptoms.intro}
                            </p>
                        )}
                        <BulletList items={symptoms.list} cols={2} />
                        {symptoms.closing && (
                            <p className="font-opensans text-sm md:text-base text-navy/70 mt-5 leading-relaxed">
                                {symptoms.closing}
                            </p>
                        )}
                    </Container>
                </section>
            )}

            {/* ── ASSOCIATED CONDITIONS ────────────────────────────── */}
            {associatedConditions && (
                <section className="bg-foreground py-8 md:py-12">
                    <Container>
                        <h3 className="font-seasons text-xl md:text-2xl text-navy mb-4">
                            {associatedConditions.heading}
                        </h3>
                        <BulletList items={associatedConditions.items} cols={2} />
                    </Container>
                </section>
            )}

            {/* ── CAUSES & RISK FACTORS ────────────────────────────── */}
            {causes && (
                <section className="bg-white py-10 md:py-16">
                    <Container>
                        <SectionHeading heading={causes.heading} subheading={causes.intro} />
                        <div className={`grid ${causeGridClass} gap-8 md:gap-10`}>
                            {causes.common && (
                                <div>
                                    <h3 className="font-seasons text-lg md:text-xl text-coral uppercase tracking-wide mb-4">
                                        {causes.common.heading}
                                    </h3>
                                    <BulletList items={causes.common.items} />
                                </div>
                            )}
                            {causes.sports && (
                                <div>
                                    <h3 className="font-seasons text-lg md:text-xl text-coral uppercase tracking-wide mb-4">
                                        {causes.sports.heading}
                                    </h3>
                                    <BulletList items={causes.sports.items} />
                                </div>
                            )}
                            {causes.medical && (
                                <div>
                                    <h3 className="font-seasons text-lg md:text-xl text-coral uppercase tracking-wide mb-4">
                                        {causes.medical.heading}
                                    </h3>
                                    <BulletList items={causes.medical.items} />
                                </div>
                            )}
                            {causes.riskFactors && (
                                <div>
                                    <h3 className="font-seasons text-lg md:text-xl text-coral uppercase tracking-wide mb-4">
                                        {causes.riskFactors.heading}
                                    </h3>
                                    <BulletList items={causes.riskFactors.items} />
                                    {causes.riskFactors.closing && (
                                        <p className="font-opensans text-xs md:text-sm text-navy/65 mt-3 leading-relaxed">
                                            {causes.riskFactors.closing}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </Container>
                </section>
            )}

            {/* ── TYPES (for Hip Impingement etc.) ─────────────────── */}
            {types && (
                <section className="bg-vanilla py-10 md:py-16">
                    <Container>
                        <SectionHeading heading={types.heading} />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {types.items.map((t, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-navy/5">
                                    <h3 className="font-seasons text-xl md:text-2xl text-navy mb-3">{t.title}</h3>
                                    <p className="font-opensans text-sm md:text-base text-navy/75 leading-relaxed">{t.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* ── DIAGNOSIS ────────────────────────────────────────── */}
            {diagnosis && (
                <section className="bg-foreground py-10 md:py-16">
                    <Container>
                        <SectionHeading heading={diagnosis.heading} subheading={diagnosis.intro} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {diagnosis.items.map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-navy/5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl md:text-3xl font-serif text-coral/60">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="font-seasons text-lg md:text-xl text-navy">{item.title}</h3>
                                    </div>
                                    <p className="font-opensans text-sm md:text-base text-navy/75 leading-relaxed">
                                        {item.description}
                                    </p>
                                    {item.subItems && (
                                        <ul className="mt-3 space-y-1.5">
                                            {item.subItems.map((sub, j) => (
                                                <li key={j} className="flex items-start gap-2 font-opensans text-xs md:text-sm text-navy/70">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coral/60 shrink-0" />
                                                    {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* ── NON-SURGICAL TREATMENT ───────────────────────────── */}
            {nonSurgical && (
                <section className="bg-vanilla py-10 md:py-16">
                    <Container>
                        <SectionHeading heading={nonSurgical.heading} subheading={nonSurgical.intro} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nonSurgical.items.map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 hover:shadow-md transition-shadow">
                                    <h3 className="font-seasons text-lg md:text-xl text-navy mb-3">{item.title}</h3>
                                    <p className="font-opensans text-sm md:text-base text-navy/75 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* ── WHEN IS SURGERY NEEDED ───────────────────────────── */}
            {whenSurgery && (
                <section className="bg-white py-10 md:py-16">
                    <Container>
                        <div className="">
                            <SectionHeading heading={whenSurgery.heading} />
                            {whenSurgery.intro && (
                                <p className="font-opensans text-sm md:text-lg text-navy mb-5 leading-relaxed">
                                    {whenSurgery.intro}
                                </p>
                            )}
                            <BulletList items={whenSurgery.items} />
                            {whenSurgery.closing && (
                                <p className="font-opensans text-sm md:text-base text-navy/70 mt-6 leading-relaxed italic">
                                    {whenSurgery.closing}
                                </p>
                            )}
                        </div>
                    </Container>
                </section>
            )}

            {/* ── RECOVERY ─────────────────────────────────────────── */}
            {recovery && (
                <section className="bg-foreground py-10 md:py-16">
                    <Container>
                        <SectionHeading heading={recovery.heading} />
                        {recovery.intro && (
                            <p className="font-opensans text-sm md:text-lg text-navy mb-6 leading-relaxed max-w-3xl">
                                {recovery.intro}
                            </p>
                        )}
                        <div className="max-w-3xl">
                            <BulletList items={recovery.items} cols={2} />
                            {recovery.closing && (
                                <p className="font-opensans text-sm md:text-base text-navy/70 mt-6 leading-relaxed">
                                    {recovery.closing}
                                </p>
                            )}
                        </div>
                    </Container>
                </section>
            )}

            {/* ── WHEN TO SEE A DOCTOR ─────────────────────────────── */}
            {whenDoctor && (
                <section className="bg-vanilla py-10 md:py-16">
                    <Container>
                        <div className="">
                            <SectionHeading heading={whenDoctor.heading} />
                            {whenDoctor.intro && (
                                <p className="font-opensans text-sm md:text-lg text-navy mb-5 leading-relaxed">
                                    {whenDoctor.intro}
                                </p>
                            )}
                            <BulletList items={whenDoctor.items} cols={2} />
                            {whenDoctor.closing && (
                                <p className="font-opensans text-sm md:text-base text-navy/70 mt-6 leading-relaxed">
                                    {whenDoctor.closing}
                                </p>
                            )}
                        </div>
                    </Container>
                </section>
            )}

            {/* ── WHY CHOOSE SECURE CLINICS ────────────────────────── */}
            {whyChoose && (
                <section className="bg-navy py-10 md:py-16 lg:py-20">
                    <Container>
                        <h2 className="font-seasons text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-vanilla mb-5">
                            {whyChoose.heading}
                        </h2>
                        <div className="font-opensans text-sm md:text-lg text-vanilla/80 leading-relaxed space-y-4 max-w-3xl mb-8">
                            {whyChoose.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <ConsultButton className="theme-button inline-flex! px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg!">
                            Book a Consultation
                        </ConsultButton>
                    </Container>
                </section>
            )}

            <section>
                <MovingGallery />
            </section>

            <section className="bg-background">
                <FAQ />
            </section>
        </div>
    );
}
