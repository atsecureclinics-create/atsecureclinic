"use client";

import Container from "../components/container";
import ConsultButton from "../components/consultmodal/button";
import FAQ from "../components/faq";
import AtTheRate from "../components/attherate";
import MovingGallery from "../components/movinggallery";
import MemberRoadmap from "../components/memberroadmap";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[70vh] lg:min-h-[85vh] flex items-center bg-foreground py-14 lg:py-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 xl:col-span-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-navy">
                One Team.{" "}
                <span className="text-coral">One Plan.</span>
                <br />
                One Goal.
                <br />
                Your Recovery.
              </h1>

              <div className="mt-5 md:mt-7 space-y-3 text-base md:text-lg font-medium text-navy">
                <p className="font-opensans leading-relaxed">
                  Pain rarely has one cause and it rarely needs one solution.
                </p>
                <p className="font-opensans leading-relaxed">
                  From your first consultation through to full recovery, your care is connected, coordinated, and built around you — not around departments. No gaps. No guesswork. No referrals.
                </p>
                <p className="font-opensans leading-relaxed">
                  Spine and orthopaedic surgeons work with physiotherapists, nutritionists and movement trainers from day one.
                </p>
              </div>

              <div className="mt-8 md:mt-10">
                <ConsultButton className="theme-button">
                  Book A Consult
                </ConsultButton>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-[15/17] rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  src="/video/banner-video.mp4"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* THE <code>@</code>Secure Clinics STORY */}
      <section className="py-14 md:py-24 bg-vanilla">
        <Container>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight mb-8 md:mb-12 text-center inline-flex items-baseline justify-center gap-2 w-full flex-wrap">
            The <AtTheRate /> Story
          </h2>

          <div className="max-w-4xl mx-auto font-opensans space-y-5 text-base md:text-lg text-navy leading-relaxed">
            <p>
              At Secure Clinics, we believe recovery is more than just healing an injury — it's about getting back to the life you love.
            </p>
            <p>
              We built this clinic because we saw a gap in the way orthopaedic and spine care was being delivered. Too often, patients were treated for their symptoms and sent home or sent to another doctor or therapist for rehabilitation, without anyone truly addressing why the pain started in the first place. We wanted to change that.
            </p>
            <p>
              Our team brings together spine and orthopaedic surgical specialists, physiotherapists, rehabilitation experts, and movement specialists — all under one roof, all working together on your recovery plan. Whether you're managing a spine condition, recovering from surgery, or dealing with chronic joint pain, we treat the whole picture: the injury, the movement patterns, and the day-to-day function that pain has taken from you.
            </p>
            <p>
              We're big believers in honest, ethical care. That means no unnecessary procedures, no one-size-fits-all treatment plans, and no decisions made without your full understanding, input and participation. Every step of your care is evidence-based, collaborative, and built around what you need to recover confidently.
            </p>
            <p>
              Because at the end of the day, our goal isn't just to get you out of pain — it's to help you move better, feel stronger, and live fully.
            </p>
          </div>

          {/* Dr. Shah quote */}
          <div className="max-w-4xl mx-auto mt-12 md:mt-16 border-l-4 border-coral pl-6 md:pl-8">
            <p className="font-opensans text-base md:text-xl text-navy leading-relaxed italic">
              "The spine doesn't exist in isolation — and neither should your treatment. Most patients come to us having seen three different doctors who never spoke to each other. That's not care — that's chaos. We built At Secure Clinics to fix exactly that."
            </p>
            <div className="mt-4 md:mt-5">
              <p className="font-seasons font-bold text-navy text-base md:text-lg">Dr. Sambhav Shah</p>
              <p className="font-opensans text-sm md:text-base text-coral">Founder and Endoscopic Spine Surgeon, At Secure Clinics</p>
            </div>
          </div>
        </Container>
      </section>

      <MemberRoadmap />

      <section>
        <MovingGallery />
      </section>

      <section className="bg-background">
        <FAQ />
      </section>
    </>
  );
}
