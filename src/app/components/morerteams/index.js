import Link from "next/link";
import Image from "next/image";
import { team } from "../../api/team"; // Ensure this matches your alias setup

export default function MoreTeam({ currentSlug }) {
  // Filter out the profile currently being viewed
  const otherMembers = team.filter((member) => member.slug !== currentSlug);

  return (
    <section className="bg-white py-24" style={{
      backgroundImage: "url('/common/blue-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-navy text-center mb-16 font-serif">
          Meet the rest of the team
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherMembers.map((member) => (
            <Link
              href={`/the-care-team/${member.slug}`}
              key={member.slug}
              className="group block"
            >
              {/* Card Container - Cream Background */}
              <div className="bg-[#F9F8F6] rounded-[20px] p-4 pb-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">

                {/* Image Wrapper */}
                <div className="relative w-full aspect-[4/4] rounded-[12px] overflow-hidden mb-8">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#0B1F23] mb-2 group-hover:text-[#E66A45] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/70">
                    {member.role}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}