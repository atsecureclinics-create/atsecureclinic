import AtTheRate from "../attherate";
import Link from "next/link";
import Container from "../container";
import ConsultButton from "../consultmodal/button";

export default function ContactSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">

          {/* MAP */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full h-72 sm:h-80 md:h-105 rounded-2xl md:rounded-3xl overflow-hidden">
              <iframe
                title="Secure Clinics location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4304.393681318998!2d72.82150867573729!3d18.944004682233683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf4600f349%3A0x58cfd2a4995a0d68!2sAt%20Secure%20Clinics!5e1!3m2!1sen!2sin!4v1774187246496!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-6">
            <p className="text-sm md:text-xl font-extrabold tracking-[.2em] text-coral uppercase mb-3 md:mb-4">
              Contact
            </p>

            <h2 className="font-seasons text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-navy mb-3 md:mb-2 leading-tight">
              Get in touch
            </h2>

            <p className="font-opensans text-base md:text-lg text-navy max-w-xl mb-6 md:mb-4 leading-relaxed">
              Conveniently located at Marine Drive in South Mumbai, steps from Churchgate and Chhatrapati Shivaji Terminus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <div>
                <h4 className="text-base md:text-lg font-bold tracking-widest uppercase text-navy mb-2">
                  Visit
                </h4>
                <p className="text-navy font-opensans text-sm md:text-base leading-relaxed">Ground floor, Shiv Prasad Building, Netaji Subhash Chandra Bose Rd, Marine Drive, Mumbai, Maharashtra 400002</p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold tracking-widest uppercase text-navy mb-1">
                  Call
                </h4>
                <p className="text-navy font-opensans text-sm md:text-base">
                  <Link href="tel:+919998989898" className="hover:text-coral transition">+91 99989 89898</Link>
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold tracking-widest uppercase text-navy mb-1">
                  Hours
                </h4>
                <p className="text-navy font-opensans text-sm md:text-base leading-relaxed">
                  Monday – Friday<br />
                  9 AM – 5 PM
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold tracking-widest uppercase text-navy mb-1">
                  Email
                </h4>
                <p className="text-navy mb-5 font-opensans text-sm md:text-base">
                  <Link href="mailto:hello@secureclinics.com" className="hover:text-coral transition">hello@secureclinics.com</Link>
                </p>

                <h4 className="text-base md:text-lg font-bold tracking-widest uppercase text-navy mb-1">
                  Instagram
                </h4>
                <p className="text-navy font-opensans text-sm md:text-base">
                  <AtTheRate /> the.secureclinics
                </p>
              </div>
            </div>

            <ConsultButton className="flex justify-center items-center gap-2 theme-button w-full sm:w-auto">
              Book a Consult
            </ConsultButton>
          </div>

        </div>
      </Container>
    </section>
  );
}
