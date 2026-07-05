export default function AboutSection() {
  return (
    <section className="bg-foreground py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="font-opensans space-y-5 text-navy text-base md:text-lg leading-relaxed order-2 lg:order-1">
            <h2 className="font-seasons text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">
              About Us
            </h2>
            <p>
              At Secure Clinics, we are dedicated to helping patients regain mobility, reduce pain, and return to an active, healthy life. Our team of skilled spine and orthopaedic specialists along with experienced physiotherapists and nutritionists provide comprehensive diagnosis, treatment, and rehabilitation for a wide range of musculoskeletal conditions, including back pain, neck pain, slipped discs, sports injuries, arthritis, joint disorders and all spine-related problems.
            </p>
            <p>
              We believe in a patient-first approach, focusing on accurate diagnosis and evidence-based treatment plans tailored to individual needs. From advanced non-surgical therapies and physiotherapy to minimally invasive orthopaedic and spine procedures, we offer complete care under one roof.
            </p>
            <p>
              Whether you are experiencing chronic pain, recovering from an injury, or seeking expert advice for a bone, joint, or spine condition, Secure Clinics is committed to delivering compassionate care, advanced medical expertise, and long-term treatment outcomes.
            </p>
            <p className="font-semibold text-navy text-lg md:text-xl">
              Your journey to a pain-free and active life begins here.
            </p>
          </div>

          {/* Right: Local video */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="w-full aspect-[15/17] rounded-2xl overflow-hidden shadow-2xl">
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
      </div>
    </section>
  );
}
