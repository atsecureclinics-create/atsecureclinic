export default function MemberRoadmap() {
    return (
      <section className="bg-vanilla py-24">
        <div className="max-w-6xl mx-auto px-6 relative">
  
          {/* Heading */}
          <h2 className="text-center font-seasons text-4xl md:text-5xl text-navy mb-20">
            Member Roadmap
          </h2>
  
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-[140px] h-[90%] w-[3px] bg-coral -translate-x-1/2" />
  
          {/* STEP 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="md:pr-20">
              <div className="bg-[#E7D6A8] rounded-[28px] p-10">
                <span className="text-3xl font-semibold text-navy">1</span>
  
                <h3 className="mt-4 text-2xl font-semibold text-navy">
                  Baseline Assessment
                </h3>
  
                <ul className="mt-6 space-y-4 text-navy/80 list-disc pl-5">
                  <li>
                    During this extensive, in-person, whole-body assessment,
                    your Care Team will dig into your health history, current
                    lifestyle, and longevity goals.
                  </li>
                  <li>
                    You can expect a comprehensive physical exam, body composition
                    analysis, and in-depth review of lab results.
                  </li>
                </ul>
              </div>
            </div>
  
            <div />
          </div>
  
          {/* STEP 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div />
  
            <div className="md:pl-20">
              <div className="bg-navy text-white rounded-[28px] p-10">
                <span className="text-3xl font-semibold">2</span>
  
                <h3 className="mt-4 text-2xl font-semibold">
                  Personalized Care Plan
                </h3>
  
                <ul className="mt-6 space-y-4 text-white/80 list-disc pl-5">
                  <li>
                    After reviewing your lab results and information gathered
                    during your Baseline Visit, we craft a personalized,
                    integrative Care Plan.
                  </li>
                  <li>
                    This actionable roadmap prioritizes your goals and clarifies
                    next steps — everything you need to optimize your health.
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* STEP 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="md:pr-20">
              <div className="bg-[#E6EFF3] rounded-[28px] p-10">
                <span className="text-3xl font-semibold text-navy">3</span>
  
                <h3 className="mt-4 text-2xl font-semibold text-navy">
                  Get Well, Better
                </h3>
  
                <p className="mt-6 text-navy/80">
                  Ongoing care, accountability, and guidance from your dedicated
                  Care Team to help you feel better — and stay that way.
                </p>
              </div>
            </div>
  
            <div />
          </div>
  
        </div>
      </section>
    );
  }
  