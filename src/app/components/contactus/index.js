import { ArrowRight } from "lucide-react";
import AtTheRate from "../attherate";

export default function ContactSection() {
  return (
    <section className="bg-vanilla py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* MAP */}
        <div className="lg:col-span-6">
          <div className="w-full h-[420px] rounded-[32px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=The%20Lanby%20Primary%20Care%20in%20NY&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-6">
          <p className="text-xl font-extrabold tracking-[.2em] text-coral uppercase mb-6">
            Contact
          </p>

          <h2 className="font-seasons text-4xl md:text-5xl xl:text-6xl text-navy mb-6">
            Get in touch
          </h2>

          <p className="text-lg text-navy max-w-xl mb-12">
            Conveniently located in the heart of Manhattan, between Bryant Park
            and Grand Central Station.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 mb-14">

            {/* VISIT */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-navy mb-4">
                Visit
              </h4>
              <p className="text-navy">
                The Lanby<br />
                535 Fifth Ave, Suite 603<br />
                New York, NY 10017
              </p>
            </div>

            {/* CALL */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-navy mb-4">
                Call
              </h4>
              <p className="text-navy">
                66<code>-</code>200<code>-</code>5750
              </p>
            </div>

            {/* HOURS */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-navy mb-4">
                Hours
              </h4>
              <p className="text-navy">
                Monday<code>-</code>Friday<br />
                9 AM <code>-</code> 5 PM
              </p>
            </div>

            {/* EMAIL + INSTAGRAM */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-navy mb-4">
                Email
              </h4>
              <p className="text-navy mb-6">
                hello<code>@</code>thelanby.com
              </p>

              <h4 className="text-sm font-semibold tracking-widest uppercase text-navy mb-4">
                Instagram
              </h4>
              <p className="text-navy">
                <AtTheRate /> the.lanby
              </p>
            </div>

          </div>

          {/* CTA */}
          <button className="flex justify-center items-center gap-2 theme-button px-6 py-4 !text-lg">
            Book a consult <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
