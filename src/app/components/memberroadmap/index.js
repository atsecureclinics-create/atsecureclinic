import Container from "../container";

export default function MemberRoadmap() {
  return (
    <section className="bg-vanilla py-14 md:py-24">
      <Container>
        <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 relative">

          <h2 className="text-center font-seasons text-3xl sm:text-4xl md:text-5xl text-navy mb-12 md:mb-20">
            The Secure Patient Journey
          </h2>

          <div className="hidden md:block absolute left-1/2 top-[140px] h-[90%] w-[3px] bg-coral -translate-x-1/2" />

          {/* STAGE 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-24">
            <div className="md:pr-4 text-white">
              <div className="bg-coral rounded-3xl p-6 sm:p-8 md:p-10">
                <span className="font-opensans text-xs font-bold tracking-[0.25em] uppercase opacity-70">Stage 1</span>
                <h3 className="mt-3 md:mt-4 text-2xl md:text-3xl font-extrabold">
                  Comprehensive Clinical Evaluation
                </h3>
                <ul className="font-opensans mt-4 md:mt-6 space-y-3 md:space-y-4 list-disc pl-5 text-base md:text-lg leading-relaxed">
                  <li>Detailed spine and orthopaedic evaluation and movement assessments to identify the underlying cause of pain and dysfunction.</li>
                  <li>Radiographic imaging, movement analysis, and rehabilitation assessments used to create accurate treatment strategies.</li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>

          {/* STAGE 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-24">
            <div className="hidden md:block" />
            <div className="md:pl-4 text-white">
              <div className="bg-navy rounded-3xl p-6 sm:p-8 md:p-10">
                <span className="font-opensans text-xs font-bold tracking-[0.25em] uppercase opacity-70">Stage 2</span>
                <h3 className="mt-3 md:mt-4 text-2xl md:text-3xl font-extrabold">
                  Integrated Treatment Planning
                </h3>
                <ul className="font-opensans mt-4 md:mt-6 space-y-3 md:space-y-4 list-disc pl-5 text-base md:text-lg leading-relaxed">
                  <li>Collaborative discussions between surgeons and rehabilitation experts to determine the most appropriate care pathway.</li>
                  <li>A holistic, organised plan is presented, explained, discussed and provided with complete transparency.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* STAGE 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="md:pr-4 text-white">
              <div className="bg-green rounded-3xl p-6 sm:p-8 md:p-10">
                <span className="font-opensans text-xs font-bold tracking-[0.25em] uppercase opacity-70">Stage 3</span>
                <h3 className="mt-3 md:mt-4 text-2xl md:text-3xl font-extrabold">
                  Precision Treatment <codde>&amp;</codde> Long<code>-</code>Term Recovery
                </h3>
                <ul className="font-opensans mt-4 md:mt-6 space-y-3 md:space-y-4 list-disc pl-5 text-base md:text-lg leading-relaxed">
                  <li>Evidence-based rehabilitation, minimally invasive procedures, or surgery if required, tailored to clinical necessity and recovery goals.</li>
                  <li>Strength, mobility, movement retraining, and performance rehabilitation focused on sustainable outcomes.</li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>

        </div>
      </Container>
    </section>
  );
}
