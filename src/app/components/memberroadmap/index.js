import Link from "next/link";
import AtTheRate from "../attherate";
import { ArrowRight } from "lucide-react";
import Container from "../container";

export default function MemberRoadmap() {
  return (
    <section className="bg-vanilla py-24">
      <Container>
        <div className="max-w-6xl mx-auto px-6 relative">

          {/* Heading */}
          <h2 className="text-center font-seasons text-4xl md:text-5xl text-navy mb-20">
            Member Roadmap
          </h2>

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-[140px] h-[90%] w-[3px] bg-coral -translate-x-1/2" />

          {/* STEP 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="md:pr-4 text-navy">
              <div className="bg-coral rounded-[28px] p-10">
                <span className="text-4xl font-extrabold">1</span>

                <h3 className="mt-4 text-3xl font-extrabold">
                  The Philosophy
                </h3>

                <h4 className="font-opensans mt-4 text-xl font-semibold" >Conservative First. Surgical When Necessary.</h4>

                <ul className="font-opensans mt-6 space-y-4 list-disc pl-5 text-lg">
                  <li>
                    At Secure Clinics, treatment always begins with the least invasive, most effective option.
                  </li>
                  <li>
                    Physiotherapy, rehabilitation, strength training, aqua therapy and nutrition form the foundation of care.
                  </li>
                  <li>When surgery is required, it is performed with precision using advanced minimally invasive and endoscopic techniques.</li>
                  <li>Restraint is a choice mastery is a standard.</li>
                </ul>
              </div>
            </div>
            <div />
          </div>

          {/* STEP 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div />

            <div className="md:pl-4 text-white">
              <div className="bg-navy rounded-[28px] p-10">
                <span className="text-4xl font-extrabold">2</span>

                <h3 className="mt-4 text-3xl font-extrabold">
                  Vision
                </h3>

                <h4 className="font-opensans mt-4 text-xl font-semibold" >Designed for Long<code>-</code>Term Recovery</h4>

                <ul className="font-opensans mt-6 space-y-4 list-disc pl-5 text-lg">
                  <li>
                    Our vision is to set a new standard for healthcare in India <code>-</code> one that values judgement over volume.
                  </li>
                  <li>
                    We aim to build clinics where ethical, multidisciplinary and outcome-driven care is the default.
                  </li>
                  <li>Not more treatment. Just the right treatment, delivered well.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="md:pr-4 text-white">
              <div className="bg-green rounded-[28px] p-10">
                <span className="text-4xl font-extrabold">3</span>

                <h3 className="mt-4 text-3xl font-extrabold">
                  Mission
                </h3>

                <h4 className="font-opensans mt-4 text-xl font-semibold" >What Guides Every Plan</h4>

                <ul className="font-opensans mt-6 space-y-4 list-disc pl-5 text-lg">
                  <li>
                    Our mission is to deliver personalised, evidence-based healthcare through a multidisciplinary approach.
                  </li>
                  <li>
                    We create a la carte treatment plans that adapt to the patient - not preset packages.
                  </li>
                  <li>From diagnosis to recovery, every decision is considered, coordinated and purposeful.</li>
                </ul>
              </div>
            </div>

            <div />
          </div>

        </div>
        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/book-consult"
            className="theme-button"
          >
            Book a consult <ArrowRight size={20} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
