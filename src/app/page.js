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
              <p className="mb-4 text-3xl 2xl:text-4xl font-bold leading-normal text-navy">
                What if healthcare actually worked together ?
              </p>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold leading-tight text-navy">
                HEAL Stronger RECOVER Faster MOVE better
              </h1>

              {/* H2 – emphasis lines */}
              <div className="mt-6 space-y-2 text-lg md:text-2xl font-medium text-navy">
                <p className="font-semibold no-ligatures">Surgeons, Therapists, Nutritionists and Strength Trainers. One Clinic. One team. One System. <code>-</code> Seamlessly Integrated in Mumbai.</p>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/book-consult"
                  className="theme-button px-8 py-4 font-bold !text-xl"
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
                  className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-coral flex items-center justify-center shadow-lg hover:scale-105 transition"
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
      <SlidingDescription />

      {/* SCROLL 3 – Features */}
      <section className="bg-white pb-12">
        <Container>
          <Features />
        </Container>
      </section>

      {/* SCROLL 4 – Meet Care Team */}
      <section style={{
        backgroundImage: "url('/common/orange-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <TeamMember />
      </section>

      {/* SCROLL 5 – Problem / Solution */}
      <section>
        <Container>
          <ProblemSolution />
        </Container>
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
