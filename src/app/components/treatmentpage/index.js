import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "../container";
import FAQ from "../faq";
import MovingGallery from "../movinggallery";

export default function TreatmentPage({ treatment }) {
  const {
    hero,
    why,
    experience,
    procedures,
    benefits,
    rightForYou,
    video,
    cta,
  } = treatment;

  return (
    <div>
      {/* HERO */}
      <section className="min-h-[85vh] flex items-center bg-vanilla pt-16 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {hero.eyebrow && (
                <p className="mb-4 text-sm md:text-base font-bold uppercase tracking-[0.35em] text-coral font-opensans">
                  {hero.eyebrow}
                </p>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-navy mb-6">
                {hero.title}
              </h1>

              <p className="font-opensans text-xl md:text-2xl text-navy/80 italic mb-8 leading-snug">
                {hero.tagline}
              </p>

              <p className="font-opensans text-base md:text-lg text-navy/85 leading-relaxed mb-6">
                {hero.intro}
              </p>

              {hero.closing && (
                <p className="font-opensans text-base md:text-lg text-navy font-semibold leading-relaxed mb-8">
                  {hero.closing}
                </p>
              )}

              <Link
                href={cta.buttonHref}
                className="theme-button !inline-flex px-8 py-4 !text-lg"
              >
                {cta.buttonLabel}
              </Link>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl">
                <Image
                  src={hero.image}
                  alt={hero.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY SECTION */}
      {why && (
        <section className="py-20 md:py-28 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="uppercase tracking-[0.3em] text-sm md:text-base text-coral font-extrabold mb-4 font-opensans">
                {why.eyebrow}
              </p>
              <h2 className="font-seasons text-3xl md:text-5xl text-navy leading-tight">
                {why.heading}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto font-opensans text-lg md:text-xl text-navy/85 leading-relaxed space-y-6">
              {why.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {why.items && why.items.length > 0 && (
                <ul className="space-y-3">
                  {why.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 flex-none w-2 h-2 rounded-full bg-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {why.closing && <p>{why.closing}</p>}
            </div>
          </Container>
        </section>
      )}

      {/* EXPERIENCE / PIONEERS */}
      {experience && (
        <section className="py-20 md:py-28 bg-foreground">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <h2 className="font-seasons text-3xl md:text-5xl text-navy leading-tight">
                  {experience.heading}
                </h2>
              </div>

              <div className="lg:col-span-7 font-opensans text-lg text-navy/85 leading-relaxed space-y-6">
                <p>{experience.intro}</p>

                {experience.listTitle && (
                  <p className="font-semibold text-navy">
                    {experience.listTitle}
                  </p>
                )}

                <ul className="space-y-4">
                  {experience.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex-none w-6 h-6 rounded-full bg-coral/15 text-coral flex items-center justify-center">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {experience.closing && (
                  <p className="font-semibold text-navy text-xl pt-4 border-t border-navy/10">
                    {experience.closing}
                  </p>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* PROCEDURES */}
      {procedures && (
        <section className="py-20 md:py-28 bg-vanilla">
          <Container>
            <div className="text-center mb-16 md:mb-20">
              {procedures.eyebrow && (
                <p className="uppercase tracking-[0.3em] text-sm md:text-base text-coral font-extrabold mb-4 font-opensans">
                  {procedures.eyebrow}
                </p>
              )}
              <h2 className="font-seasons text-3xl md:text-5xl text-navy leading-tight max-w-4xl mx-auto">
                {procedures.heading}
              </h2>
            </div>

            <ProceduresGrid items={procedures.items} />

            {procedures.extraGroups?.map((group, gi) => (
              <div key={gi} className="mt-20 md:mt-24">
                <div className="text-center mb-12">
                  <h3 className="font-seasons text-2xl md:text-4xl text-navy leading-tight">
                    {group.heading}
                  </h3>
                </div>
                <ProceduresGrid items={group.items} />
              </div>
            ))}
          </Container>
        </section>
      )}

      {/* BENEFITS + RIGHT FOR YOU (Two-column) */}
      {(benefits || rightForYou) && (
        <section className="py-20 md:py-28 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {benefits && (
                <div className="bg-vanilla rounded-3xl p-8 md:p-12 border border-navy/5">
                  {benefits.eyebrow && (
                    <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-coral font-extrabold mb-4 font-opensans">
                      {benefits.eyebrow}
                    </p>
                  )}
                  <h2 className="font-seasons text-2xl md:text-4xl text-navy leading-tight mb-8">
                    {benefits.heading}
                  </h2>
                  <ul className="space-y-4 font-opensans text-base md:text-lg text-navy/85">
                    {benefits.items.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex-none w-6 h-6 rounded-full bg-coral text-white flex items-center justify-center">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {rightForYou && (
                <div className="bg-navy text-white rounded-3xl p-8 md:p-12">
                  {rightForYou.eyebrow && (
                    <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-coral font-extrabold mb-4 font-opensans">
                      {rightForYou.eyebrow}
                    </p>
                  )}
                  <h2 className="font-seasons text-2xl md:text-4xl leading-tight mb-6">
                    {rightForYou.heading}
                  </h2>
                  {rightForYou.intro && (
                    <p className="font-opensans text-base md:text-lg text-white/80 mb-6 leading-relaxed">
                      {rightForYou.intro}
                    </p>
                  )}
                  <ul className="space-y-4 font-opensans text-base md:text-lg text-white/90">
                    {rightForYou.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex-none w-6 h-6 rounded-full bg-coral/20 text-coral flex items-center justify-center">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {rightForYou.closing && (
                    <p className="mt-8 pt-6 border-t border-white/15 font-opensans text-base md:text-lg text-white/80 italic leading-relaxed">
                      {rightForYou.closing}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* VIDEO */}
      {video && (
        <section className="py-20 md:py-28 bg-foreground">
          <Container>
            <div className="text-center mb-12">
              {video.eyebrow && (
                <p className="uppercase tracking-[0.3em] text-sm md:text-base text-coral font-extrabold mb-4 font-opensans">
                  {video.eyebrow}
                </p>
              )}
              <h2 className="font-seasons text-3xl md:text-5xl text-navy leading-tight">
                {video.heading}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-navy">
                <video
                  className="w-full h-full object-cover"
                  src={video.url}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* MOVING GALLERY */}
      <section>
        <MovingGallery />
      </section>

      {/* CTA */}
      {cta && (
        <section className="py-20 md:py-28 bg-coral text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-seasons text-3xl md:text-5xl leading-tight mb-6">
                {cta.heading}
              </h2>
              {cta.text && (
                <p className="font-opensans text-lg md:text-xl text-white/90 leading-relaxed mb-10">
                  {cta.text}
                </p>
              )}
              <Link
                href={cta.buttonHref}
                className="inline-flex items-center justify-center bg-white text-coral font-opensans font-bold text-lg px-8 py-4 rounded-xl hover:bg-vanilla transition"
              >
                {cta.buttonLabel}
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-background">
        <FAQ />
      </section>
    </div>
  );
}

function ProceduresGrid({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, i) => (
        <article
          key={item.number ?? i}
          className="group bg-white rounded-3xl p-8 md:p-10 border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
          {(item.number || items.some((it) => it.number)) && (
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl md:text-5xl font-seasons text-coral/70 group-hover:text-coral transition-colors">
                {item.number ?? String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-px bg-navy/20 group-hover:w-20 transition-all" />
            </div>
          )}

          <h3 className="font-seasons text-2xl md:text-3xl text-navy mb-4 leading-snug">
            {item.title}
          </h3>

          {item.description && (
            <p className="font-opensans text-base md:text-lg text-navy/75 leading-relaxed">
              {item.description}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
