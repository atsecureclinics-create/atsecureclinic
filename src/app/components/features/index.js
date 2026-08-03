import React from 'react';
import ConsultButton from '../consultmodal/button';

const features = [
  {
    title: "Collaborative Clinical Care",
    description: "Surgeons, Physiotherapists, Strength Trainers and Nutritionists work together right from consultation and diagnosis to treatment planning, execution, post surgical rehabilitation and recovery.",
    image: "/usp/usp3.png",
    imageAlt: "Collaborative clinical care"
  },
  {
    title: "Evidence Based Treatment",
    description: "Every recommendation is guided by specialists from years of proven clinical research, precise clinical evaluation, advanced diagnostic imaging, thorough movement assessment to ensure long-term functional outcomes",
    image: "/usp/usp4.png",
    imageAlt: "Evidence based treatment"
  },
  {
    title: "Minimally Invasive Philosophy",
    description: "Conservative and rehabilitation-focussed approaches are prioritised before surgical intervention whenever clinically appropriate",
    image: "/usp/usp5.png",
    imageAlt: "Minimally invasive philosophy"
  },
  {
    title: "Advanced Endoscopic Spine Expertise",
    description: "Specialised care for spinal disorders with modern imaging and technology leading to one day recovery and movement",
    image: "/usp/usp6.png",
    imageAlt: "Advanced endoscopic spine expertise"
  },
  {
    title: "One Secure Stop",
    description: "Integrated treatment plan under the guidance of a team of specialists in the field of spine and orthopaedic care, along with physiotherapists, nutritionists and strength trainers to give you structured and definitive recovery",
    image: "/usp/usp7.png",
    imageAlt: "One secure stop for complete care"
  },
];

const Features = () => {
  return (
    <section className="font-seasons text-navy relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-0 pt-8 md:pt-10 px-4 sm:px-6">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 lg:gap-14 py-6 group">
              {/* Image Side */}
              <div className="w-full md:w-2.5/4 relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-black/5">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2.5/4">
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight text-navy mb-3 md:mb-4"
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                />
                <p
                  className="font-opensans text-base md:text-lg lg:text-xl leading-relaxed text-navy font-normal"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            </div>

            {index < features.length - 1 && (
              <div className="w-full h-px bg-green my-2" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center pt-8 md:pt-10">
        <ConsultButton className="flex justify-center items-center gap-2 theme-button">
          Book A Consult
        </ConsultButton>
      </div>
    </section>
  );
};

export default Features;
