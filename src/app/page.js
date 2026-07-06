import Image from "next/image";
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
import AboutSection from "./components/aboutsection";

export default function Home() {
  return (
    <>
      {/* HERO – MOBILE: image on top, content below */}
      <div className="block md:hidden">
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src="/home-banner-mobile.png"
            alt="Secure Clinics — Precision Spine, Orthopaedic and Rehabilitation Care"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="bg-vanilla px-5 py-8">
          <h1 className="text-3xl font-semibold leading-tight text-navy">
            Precision Spine, Orthopaedic and Rehabilitation Care
          </h1>
          <p className="font-opensans mt-4 text-sm font-medium text-navy/85 leading-relaxed">
            A multidisciplinary clinic where spine and orthopaedic surgeons work together with physiotherapists and rehabilitation experts under one roof to deliver evidence based treatments, minimally invasive solutions and long-term recovery outcomes
          </p>
          <div className="mt-6">
            <ConsultButton className="theme-button">
              Book a Consult
            </ConsultButton>
          </div>
        </div>
      </div>

      {/* HERO – DESKTOP: full-width image with text overlay */}
      <section className="relative min-h-[85vh] hidden md:flex items-center overflow-hidden">
        <Image
          src="/home-banner.png"
          alt="Secure Clinics — Precision Spine, Orthopaedic and Rehabilitation Care"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-navy/55" />
        <Container className="relative z-10 py-24">
          <div className="max-w-2xl xl:max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
              Precision Spine, Orthopaedic and Rehabilitation Care
            </h1>
            <div className="mt-5 md:mt-6 text-base lg:text-lg font-medium text-white/85">
              <p className="font-opensans leading-relaxed">
                A multidisciplinary clinic where spine and orthopaedic surgeons work together with physiotherapists and rehabilitation experts under one roof to deliver evidence based treatments, minimally invasive solutions and long-term recovery outcomes
              </p>
            </div>
            <div className="mt-8 md:mt-10">
              <ConsultButton className="theme-button">
                Book a Consult
              </ConsultButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* SCROLL 2 – Sliding description / Highlight bar */}
      <SlidingDescription />

      {/* SCROLL 3 – USP Features */}
      <section className="bg-white pb-12">
        <Container>
          <Features />
        </Container>
      </section>

      {/* SCROLL 4 – Meet Care Team */}
      <section className="bg-foreground bg-cover bg-center">
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
        <HowWeTreat category="homepage" label="Treatments" />
      </section>

      {/* SCROLL 7 – Patient Stories (video testimonials) */}
      <section>
        <SecureStories />
      </section>

      {/* SCROLL 8 – Statistic testimonial */}
      <StatisticTestimonialSlider />

      {/* SCROLL 9 – Hospital associations */}
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
