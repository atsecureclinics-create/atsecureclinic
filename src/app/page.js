import Link from "next/link";
import Container from "./components/container";
import SlidingDescription from "./components/slidingdescription";
import Features from "./components/features";
import TeamMember from "./components/teammember";
import ProblemSolution from "./components/problemsolution";
import HowWeTreat from "./components/howwetreat";
import SecureStories from "./components/securestories";
import StatisticTestimonialSlider from "./components/testimonial";
import HospitalAssociations from "./components/hospitalassociations";
import MovingGallery from "./components/movinggallery";
import FAQ from "./components/faq";

export default function Home() {
  return (
    <>
      {/* HERO – two-column: text left, media right */}
      <section
        className="min-h-[85vh] flex items-center bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 xl:col-span-6">

              {/* Eyebrow */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#0B1F23]/70">
                What if healthcare actually worked together?
              </p>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-[#0B1F23]">
                Heal. Recover. Move
              </h1>

              {/* H2 – emphasis lines */}
              <div className="mt-6 space-y-2 text-xl md:text-2xl font-medium text-[#0B1F23]/90">
                <p>Heal stronger · Recover faster · Move better</p>
                <p>Pain does not define you</p>
                <p className="font-semibold">From pain to performance</p>
              </div>

              {/* Body copy */}
              <p className="mt-6 text-lg text-[#0B1F23]/80 max-w-2xl">
                One clinic. One team. Doctors, therapy, recovery & strength working as one clinic in Mumbai.
                We are not just surgeons. We&apos;re the system.
              </p>

              {/* H3 */}
              <p className="mt-5 text-base md:text-lg font-semibold text-[#0C3C46] max-w-2xl">
                Surgeons, Therapists, Nutritionists and Strength Trainers.
                <br />
                One Clinic. One Team. One System.
              </p>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/book-consult"
                  className="inline-flex items-center justify-center rounded-full bg-[#0C3C46] px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white hover:bg-[#092E35] transition"
                >
                  Book a Consult
                </Link>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">

                <video
                  className="w-full h-full object-cover"
                  src="https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d%2F69136cda4850c7f206613aef_Mi%20peli%CC%81cula%202-transcode.mp4"
                  muted
                  loop
                  playsInline
                />

                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-[#E85A3A] flex items-center justify-center shadow-lg hover:scale-105 transition"
                >
                  <svg
                    className="w-5 h-5 text-white ml-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SCROLL 2 – Sliding description */}
      <section className="text-white">
        <SlidingDescription />
      </section>

      {/* SCROLL 3 – Features */}
      <section className="bg-white pb-12">
        <Container>
          <Features />
        </Container>
      </section>

      {/* SCROLL 4 – Meet Care Team */}
      <section className="bg-navy">
        <TeamMember />
      </section>

      {/* SCROLL 5 – Problem / Solution */}
      <section>
        <ProblemSolution />
      </section>

      {/* SCROLL 6 – How We Treat */}
      <section>
        <HowWeTreat />
      </section>

      {/* SCROLL 7 – Secure Stories */}
      <section>
        <SecureStories />
      </section>

      {/* SCROLL 8 – Hospital associations */}
      <section>
        <HospitalAssociations />
      </section>

      {/* SCROLL 9 – Statistic testimonial */}
      <section>
        <StatisticTestimonialSlider />
      </section>

      {/* SCROLL 10 – Gallery */}
      <section>
        <MovingGallery />
      </section>

      {/* SCROLL 11 – FAQs */}
      <section className="bg-background">
        <FAQ />
      </section>
    </>
  );
}
