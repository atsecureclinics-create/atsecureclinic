import Image from "next/image";
import Link from "next/link";
import Container from "./components/container";
import Reviews from "./components/reviews";
import Features from "./components/features";
import TeamMember from "./components/teammember";
import ProblemSolution from "./components/problemsolution";
import HowWeTreat from "./components/howwetreat";
import SecureStories from "./components/securestories";
import StatisticTestimonialSlider from "./components/testimonial";
import HospitalAssociations from "./components/hospitalassociations";
import MovingGallery from "./components/movinggallery";

export default function Home() {
  return (
    <>
      <section className="bg-background text-navy">
        <Container>
          <div className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ">
              {/* LEFT CONTENT */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#0b1f23]">
                  What if healthcare actually worked together?
                </h1>

                <p className="mt-6 text-lg font-bold">
                  One clinic. One team. Doctors, therapy, recover & strength –
                  working as one clinic in Mumbai. We are not just surgeons.
                  We’re the system.
                </p>

                <div className="mt-10">
                  <Link href="/book-consult" className="theme-button px-6 py-3">
                    BOOK A CONSULT
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE / VIDEO */}
              <div className="relative rounded-2xl overflow-hidden">
                <video
                  src="https://cdn.prod.website-files.com/604926b0c95ad5f7026a505d%2F69136cda4850c7f206613aef_Mi%20peli%CC%81cula%202-transcode.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-xl"
                />

                {/* Play Button */}
                <button
                  aria-label="Play video"
                  className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg hover:scale-105 transition"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-28">
        <Container>
          <Reviews />
        </Container>
      </section>

      <section className="bg-white pb-12">
        <Container>
          <Features />
        </Container>
      </section>

      <section className=" bg-navy" >
        <TeamMember />
      </section>

      <section>
        <ProblemSolution />
      </section>

      <section>
        <HowWeTreat />
      </section>

      <section>
        <SecureStories />
      </section>

      <section>
        <StatisticTestimonialSlider />
      </section>

      <section>
        <HospitalAssociations />
      </section>

      <section>
        <MovingGallery />
      </section>
    </>
  );
}
