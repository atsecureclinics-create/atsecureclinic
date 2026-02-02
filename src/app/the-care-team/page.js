import Image from "next/image";
import Link from "next/link";
import { team } from "../api/team"; // Use alias if set up, or relative path

export default function CareTeam() {
  return (
    <section className="bg-[#F4F2EE] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-14 text-[#0B1F23]">
          Your Care Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Link
              key={member.slug}
              href={`/the-care-team/${member.slug}`}
              className="group relative rounded-[28px] overflow-hidden bg-[#E66A45] cursor-pointer block"
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
                  bg-[#FBFAF7] p-6
                  rounded-t-[24px]
                  translate-y-[calc(100%-85px)] 
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
              >
                {/* Note: Adjusted translate-y calculation for better mobile/desktop consistency */}
                
                <p className="text-xs font-semibold tracking-widest uppercase text-[#E66A45] mb-2">
                  {member.role}
                </p>

                <h3 className="text-xl font-semibold text-[#0B1F23]">
                  {member.name}
                </h3>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="mt-4 text-sm text-[#0B1F23]/80 leading-relaxed">
                    {member.description}
                    </p>

                    <span className="mt-4 inline-flex text-sm font-semibold text-[#E66A45]">
                    Learn More +
                    </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}