import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";

export const metadata = {
  title: "About | SecureClinics",
  description:
    "Learn about SecureClinics, an integrated orthopaedic and spine care centre in Mumbai focused on conservative-first, multidisciplinary, long-term recovery.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-background text-navy">
        <Container>
          <div className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
                  About
                </p>
                <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#0b1f23]">
                  Care without the chaos.
                </h1>
                <p className="mt-4 text-xl font-semibold text-[#0b1f23]">
                  Specialist-led care – designed for a SECURE long-term recovery.
                </p>

                <p className="mt-6 text-lg">
                  At <span className="font-semibold">@SecureClinics</span>, healthcare is designed to feel
                  clear, connected and reassuring — not scattered, rushed or excessive. Based in
                  Mumbai, our integrated clinic brings doctors, diagnostics, therapy and recovery
                  together as one team so every plan is deliberate, coordinated and tailored.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/book-consult" className="theme-button px-6 py-3">
                    Book a consult now
                  </Link>
                  <span className="text-sm text-slate-600">
                    One clinic. One team. Designed for long-term recovery.
                  </span>
                </div>
              </div>

              {/* RIGHT: BRAND HERO FILM THUMBNAIL */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src="/window.svg"
                  alt="SecureClinics brand hero film thumbnail"
                  width={960}
                  height={540}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/25" />

                <button
                  aria-label="Play SecureClinics hero film"
                  className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg hover:scale-105 transition"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* THE SECURE STORY */}
      <section className="bg-white text-navy py-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-orange-500 uppercase">
              About
            </h2>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold">
              The SECURE Story
            </h3>
            <p className="mt-6 text-lg">
              <span className="font-semibold">@SecureClinics</span> was built to fix a problem patients
              face every day — healthcare that feels scattered, rushed and excessive. Too often,
              diagnosis, treatment and recovery happen in different places, with no single plan
              tying them together.
            </p>
            <p className="mt-4 text-lg">
              Based in Mumbai, <span className="font-semibold">@@SecureClinics</span> was designed as an
              integrated healthcare clinic where doctors, diagnostics, therapy and recovery function
              as one team. Care here is deliberate and personalised — not bundled, rushed or
              protocol-driven. Every plan is tailored. No buffets. No one-size-fits-all solutions.
            </p>
            <p className="mt-4 text-lg">
              <span className="font-semibold">@SecureClinics</span> is an integrated healthcare centre
              designed to make care feel clearer, more connected, and more reassuring for patients.
              We bring together experienced orthopaedic and spine specialists, physiotherapists,
              rehabilitation experts, and nutrition professionals under one roof, so diagnosis,
              treatment, recovery, and prevention are never fragmented.
            </p>
            <p className="mt-4 text-lg">
              Every care plan is thoughtfully structured, discussed across disciplines, and tailored
              to the individual, because no two bodies, injuries, or recovery journeys are the same.
              Our approach is grounded in evidence-based medicine and real-world clinical
              experience, with a strong focus on movement, function, and long-term outcomes.
            </p>
            <p className="mt-4 text-lg">
              Just as importantly, we believe patients should feel informed and involved at every
              step. Options are explained clearly, decisions are shared, and progress is reviewed
              together — creating care that feels intentional, not overwhelming.
            </p>
            <p className="mt-4 text-lg">
              At <span className="font-semibold">@SecureClinics</span>, the goal is not just to treat
              pain, but to support confident, sustainable recovery and a better quality of life.
            </p>
          </div>

          {/* PHILOSOPHY / GUIDING CARDS */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-background border border-slate-200">
              <h4 className="text-xl font-semibold">The Philosophy</h4>
              <p className="mt-3 text-sm font-semibold text-orange-500">
                Conservative first. Surgical when necessary.
              </p>
              <p className="mt-4 text-base">
                At <span className="font-semibold">@@SecureClinics</span>, treatment always begins with
                the least invasive, most effective option. Physiotherapy, rehabilitation, strength
                training, aqua therapy and nutrition form the foundation of care.
              </p>
              <p className="mt-3 text-base">
                When surgery is required, it is performed with precision using advanced minimally
                invasive and endoscopic techniques. Restraint is a choice — mastery is a standard.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-slate-200">
              <h4 className="text-xl font-semibold">Designed for long-term recovery</h4>
              <p className="mt-4 text-base">
                Our vision is to set a new standard for healthcare in India — one that values
                judgement over volume. We aim to build clinics where ethical, multidisciplinary and
                outcome-driven care is the default.
              </p>
              <p className="mt-3 text-base">
                Not more treatment. Just the right treatment, delivered well.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-slate-200">
              <h4 className="text-xl font-semibold">What guides every plan</h4>
              <p className="mt-4 text-base">
                Our mission is to deliver personalised, evidence-based healthcare through a
                multidisciplinary approach. We create a la carte treatment plans that adapt to the
                patient — not preset packages.
              </p>
              <p className="mt-3 text-base">
                From diagnosis to recovery, every decision is considered, coordinated and
                purposeful.
              </p>
              <div className="mt-6">
                <Link href="/book-consult" className="theme-button px-6 py-3">
                  Book a consult
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

