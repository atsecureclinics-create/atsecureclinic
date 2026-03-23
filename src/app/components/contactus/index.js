import AtTheRate from "../attherate";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* MAP */}
        <div className="lg:col-span-6">
          <div className="w-full h-[420px] rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4304.393681318998!2d72.82150867573729!3d18.944004682233683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf4600f349%3A0x58cfd2a4995a0d68!2sAt%20Secure%20Clinics!5e1!3m2!1sen!2sin!4v1774187246496!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-6">
          <p className="text-xl font-extrabold tracking-[.2em] text-coral uppercase mb-4">
            Contact
          </p>

          <h2 className="font-seasons text-4xl md:text-5xl xl:text-6xl text-navy mb-2">
            Get in touch
          </h2>

          <p className="font-opensans text-lg text-navy max-w-xl mb-4">
            Conveniently located in the heart of Manhattan, between Bryant Park
            and Grand Central Station.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mb-8">

            {/* VISIT */}
            <div>
              <h4 className="text-lg font-bold tracking-widest uppercase text-navy mb-2">
                Visit
              </h4>
              <p className="text-navy font-opensans">Ground floor, Shiv Prasad Building, Netaji Subhash Chandra Bose Rd, Marine drive, Mumbai, Maharashtra 400002</p>
            </div>

            {/* CALL */}
            <div>
              <h4 className="text-lg font-bold tracking-widest uppercase text-navy mb-1">
                Call
              </h4>
              <p className="text-navy font-opensans"><Link href={'tel:99989898989'} className="">99989898989</Link></p>
            </div>

            {/* HOURS */}
            <div>
              <h4 className="text-lg font-bold tracking-widest uppercase text-navy mb-1">
                Hours
              </h4>
              <p className="text-navy font-opensans">
                Monday<code>-</code>Friday<br />
                9 AM <code>-</code> 5 PM
              </p>
            </div>

            {/* EMAIL + INSTAGRAM */}
            <div>
              <h4 className="text-lg font-bold tracking-widest uppercase text-navy mb-1">
                Email
              </h4>
              <p className="text-navy mb-6 font-opensans">
                hello<code>@</code>secureclinics.com
              </p>

              <h4 className="text-lg font-bold tracking-widest uppercase text-navy mb-1">
                Instagram
              </h4>
              <p className="text-navy font-opensans">
                <AtTheRate /> the.secureclinics
              </p>
            </div>

          </div>

          {/* CTA */}
          <button className="flex justify-center items-center gap-2 theme-button">
            Book a consult
          </button>
        </div>

      </div>
    </section>
  );
}
