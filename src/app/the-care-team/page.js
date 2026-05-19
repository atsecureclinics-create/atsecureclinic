import Image from "next/image";
import Link from "next/link";
import { team } from "../api/team";

export default function CareTeam() {
  return (
    <>
      <div className="bg-background py-16 md:py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold px-4">
          Meet Our People
        </h1>
      </div>
      <section className="bg-foreground py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-14 text-navy">
            Your Care Team
          </h2> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member) => (
              <Link
                key={member.slug}
                href={`/the-care-team/${member.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-background cursor-pointer block"
              >
                <div className="relative w-full aspect-4/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-vanilla p-5 md:p-6 rounded-t-2xl translate-y-[calc(100%-120px)] sm:translate-y-[calc(100%-130px)] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p
                    className="text-sm md:text-lg font-semibold tracking-widest uppercase text-coral mb-2"
                    dangerouslySetInnerHTML={{ __html: member.role }}
                  />

                  <h3 className="font-opensans text-lg md:text-xl font-semibold text-navy">
                    {member.name}
                  </h3>

                  <div className="font-opensans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="mt-4 text-sm md:text-base text-navy leading-relaxed">
                      {member.description}
                    </p>

                    <span className="mt-4 inline-flex text-sm md:text-base font-semibold text-coral items-center gap-1">
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