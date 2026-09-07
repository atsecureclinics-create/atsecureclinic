import Link from "next/link";
import Container from "../container";
import ContactForm from "../contactform";
import AtTheRate from "../attherate";

const NEXT_STEPS = [
  "Your request is reviewed by our care team",
  "You’re guided to the right specialist",
  "Appointments are scheduled thoughtfully",
  "Your care journey begins — without chaos",
];

const REACH_OUT_REASONS = [
  "They want answers, not assumptions",
  "They’re looking for conservative, ethical care",
  "They need spine or orthopaedic guidance they can trust",
  "They want everything — doctors, diagnostics, therapy and recovery — in one place",
];

export default function ContactSection() {
  return (
    <>
      {/* HERO + FORM */}
      <section className="bg-vanilla py-14 md:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <p className="text-sm md:text-xl font-extrabold tracking-[.2em] text-coral uppercase mb-3 md:mb-4">
              Contact
            </p>
            <h1 className="font-seasons text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-navy mb-4 md:mb-6 leading-tight">
              Care that listens starts here.
            </h1>
            <p className="font-opensans text-base md:text-lg lg:text-xl text-navy leading-relaxed">
              At <AtTheRate />, appointments are not rushed. Your concern is reviewed carefully and directed to the right specialist — spine, orthopaedics, physiotherapy, diagnostics, rehabilitation or nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 md:p-10">
                <h2 className="font-seasons text-2xl md:text-3xl text-navy mb-2 leading-tight">
                  Request an Appointment
                </h2>
                <p className="font-opensans text-navy/70 mb-6 leading-relaxed">
                  Share a few details and our team will reach out to confirm the next steps.
                </p>
                <ContactForm idPrefix="contact-page" />
              </div>
            </div>

            {/* WHAT HAPPENS NEXT */}
            <div className="lg:col-span-5">
              <p className="uppercase tracking-[.2em] text-sm md:text-base font-extrabold text-coral mb-3">
                What Happens Next?
              </p>
              <h2 className="font-seasons text-2xl sm:text-3xl md:text-4xl text-navy mb-6 md:mb-8 leading-tight">
                Clear. Calm. Coordinated.
              </h2>
              <ol className="space-y-4 md:space-y-5">
                {NEXT_STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="font-seasons text-2xl md:text-3xl text-coral/80 leading-none w-8 shrink-0">
                      <code>{String(i + 1).padStart(2, "0")}</code>
                    </span>
                    <p className="font-opensans text-base md:text-lg text-navy leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 md:mt-10 font-opensans text-base md:text-lg text-navy/75 leading-relaxed border-l-2 border-coral/50 pl-4 md:pl-5">
                <p>No unnecessary referrals.</p>
                <p>No running between clinics.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VISIT US */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* MAP */}
            <div className="lg:col-span-6 w-full">
              <div className="w-full h-72 sm:h-80 md:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden">
                <iframe
                  title="Secure Clinics location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4304.393681318998!2d72.82150867573729!3d18.944004682233683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf4600f349%3A0x58cfd2a4995a0d68!2sAt%20Secure%20Clinics!5e1!3m2!1sen!2sin!4v1774187246496!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* DETAILS */}
            <div className="lg:col-span-6">
              <p className="text-sm md:text-xl font-extrabold tracking-[.2em] text-coral uppercase mb-3 md:mb-4">
                Visit Us
              </p>
              <h2 className="font-seasons text-3xl sm:text-3xl md:text-4xl text-navy mb-3 leading-tight inline-flex items-end gap-2 flex-wrap">
                <AtTheRate />, Mumbai
              </h2>
              <p className="font-opensans text-base md:text-lg text-navy/80 mb-8 md:mb-10 leading-relaxed">
                An integrated healthcare clinic offering spine care, orthopaedics, physiotherapy, rehabilitation, diagnostics and recovery — all under one roof.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <h4 className="text-sm md:text-base font-bold tracking-widest uppercase text-navy mb-2">
                    Location
                  </h4>
                  <p className="text-navy font-opensans text-sm md:text-base leading-relaxed">
                    Ground floor, Tarabai Hall, Netaji Subhash Chandra Bose Rd, Marine drive, Mumbai, Maharashtra 400002
                  </p>
                </div>

                <div>
                  <h4 className="text-sm md:text-base font-bold tracking-widest uppercase text-navy mb-2">
                    Phone
                  </h4>
                  <p className="text-navy font-opensans text-sm md:text-base">
                    <Link href="tel:+919833165670" className="hover:text-coral transition">
                      09833165670
                    </Link>
                  </p>
                </div>

                <div>
                  <h4 className="text-sm md:text-base font-bold tracking-widest uppercase text-navy mb-2">
                    Email
                  </h4>
                  <p className="text-navy font-opensans text-sm md:text-base">
                    <Link href="mailto:contact@secure-clinics.com" className="hover:text-coral transition">
                      contact@secure-clinics.com
                    </Link>
                  </p>
                </div>

                <div>
                  <h4 className="text-sm md:text-base font-bold tracking-widest uppercase text-navy mb-2">
                    Hours
                  </h4>
                  <p className="text-navy font-opensans text-sm md:text-base leading-relaxed">
                    Monday – Saturday<br />
                    9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY PATIENTS REACH OUT */}
      <section className="bg-foreground py-14 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm md:text-xl font-extrabold tracking-[.2em] text-coral uppercase mb-3 md:mb-4 text-center">
              Why Patients Reach Out to Us
            </p>
            <h2 className="font-seasons text-3xl sm:text-4xl md:text-5xl text-navy mb-10 md:mb-14 leading-tight text-center">
              Clarity, not conjecture.
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {REACH_OUT_REASONS.map((reason) => (
                <li
                  key={reason}
                  className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 border border-navy/5"
                >
                  <p className="font-opensans text-base md:text-lg text-navy leading-relaxed">
                    {reason}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
