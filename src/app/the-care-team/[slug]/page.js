import Image from "next/image";
import { team } from "../../api/team";
import Link from "next/link";
import MoreTeam from "@/app/components/morerteams";
import ContactSection from "@/app/components/contactus";

// 1. Statically generate routes at build time (Great for SEO & Speed)
export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug,
  }));
}

// 2. Main Page Component
export default async function CareTeamProfile({ params }) {
  // In Next.js 15, params is a Promise. Await it.
  const resolvedParams = await params;
  const member = team.find((m) => m.slug === resolvedParams.slug);

  if (!member) return notFound();

  return (
    <>
      <section className="bg-white min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Link href="/the-care-team" className="text-base uppercase tracking-[.2em] text-coral mb-6 hover:underline font-extrabold ">
              ← Back to Team
            </Link>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-navy mb-4">
              {member.name}
            </h1>

            <p className="text-xl text-navy mb-10 border-b border-navy pb-6 inline-block">
              {member.role}
            </p>

            <div className="font-opensans space-y-6 text-base md:text-lg leading-relaxed text-navy">
              {/* Safe mapping: checks if content exists, otherwise falls back to empty array */}
              {(member.content || []).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[3/4] rounded-[36px] overflow-hidden shadow-xl bg-[#E66A45] sticky top-10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>
      <MoreTeam currentSlug={member.slug} />
      <ContactSection />
    </>
  );
}