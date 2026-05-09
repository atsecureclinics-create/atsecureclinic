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
import ConsultButton from "./components/consultmodal/button";

export default function Home() {
  return (
    <>
      {/* HERO – two-column: text left, media right */}
      <section className="flex items-center pt-4 pb-12 md:py-12 lg:py-18 bg-vanilla">
        <Container>
          <div className="flex gap-8 lg:gap-12 items-center flex-col-reverse md:flex-row">
            {/* LEFT CONTENT */}
            <div className="md:w-1/2 lg:col-span-7 xl:col-span-6">
              <p className="font-opensans mb-3 md:mb-4 text-sm md:text-base font-semibold leading-normal text-navy">
                What if healthcare actually worked together?
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-navy">
                Heal Stronger. <br /> Recover Faster. <br /> Move Better.
              </h1>

              <div className="mt-5 md:mt-6 space-y-2 text-sm md:text-sm lg:text-base font-medium text-navy">
                <p className="font-semibold no-ligatures font-opensans leading-relaxed">
                  Surgeons, therapists, nutritionists, and strength trainers — working together in one integrated system of care.
                </p>
                <p className="font-semibold no-ligatures font-opensans leading-relaxed">
                  Only @ Secure Clinics, Mumbai.
                </p>
              </div>

              <div className="mt-8 md:mt-10">
                <ConsultButton className="theme-button">
                  Book a Consult
                </ConsultButton>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="md:w-1/2 lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-19/20 rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  src="/video/banner-video.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  controls
                  preload="metadata"
                />
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
      <section className="bg-foreground bg-cover bg-center" >
        <TeamMember />
      </section>

      {/* SCROLL 5 – Problem / Solution */}
      <section >
        <Container>
          <ProblemSolution />
        </Container>
      </section>

      {/* SCROLL 6 – How We Treat */}
      <section>
        <HowWeTreat category="homepage" label="Treatments" />
      </section>

      {/* SCROLL 7 – Secure Stories */}
      <section>
        <SecureStories />
      </section>

      {/* SCROLL 9 – Statistic testimonial */}
      <StatisticTestimonialSlider />

      {/* SCROLL 8 – Hospital associations */}
      <section>
        <HospitalAssociations />
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
