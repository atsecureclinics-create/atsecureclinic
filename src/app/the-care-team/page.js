import Image from "next/image";
import Link from "next/link";
import { team } from "../api/team";

export default function CareTeam() {
  return (
    <><div className="bg-background py-28" >
      <h1 className=" md:text-6xl text-center font-extrabold">Meet Our People</h1>
    </div>
      <section className="bg-foreground py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-navy">
            Your Care Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Link
                key={member.slug}
                href={`/the-care-team/${member.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-background cursor-pointer block"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Hover Content */}
                <div
                  className="
                  absolute inset-x-0 bottom-0
                  bg-vanilla p-6
                  rounded-t-2xl
                  translate-y-[calc(100%-130px)] 
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
                >
                  {/* Note: Adjusted translate-y calculation for better mobile/desktop consistency */}

                  <p className="text-lg font-semibold tracking-widest uppercase text-coral mb-2">
                    {member.role}
                  </p>

                  <h3 className="font-opensans text-xl font-semibold text-navy">
                    {member.name}
                  </h3>

                  <div className="font-opensans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="mt-4 text-base text-navy leading-relaxed">
                      {member.description}
                    </p>

                    <span className="mt-4 inline-flex text-base font-semibold text-coral items-center gap-1 ">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}