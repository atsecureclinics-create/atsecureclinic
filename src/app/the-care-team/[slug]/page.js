import Image from "next/image";
import { notFound } from "next/navigation";
import { team } from "../../api/team";
import Link from "next/link";
import MoreTeam from "@/app/components/morerteams";
import ContactSection from "@/app/components/contactus";

// 1. Statically generate routes at build time (Great for SEO and Speed)
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
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">

          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <Link href="/the-care-team" className="text-sm md:text-base uppercase tracking-[.2em] text-coral mb-4 md:mb-6 hover:underline font-extrabold">
              ← Back to Team
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-navy mb-3 md:mb-4 leading-tight">
              {member.name}
            </h1>

            <p className="text-lg md:text-xl text-navy mb-6 md:mb-10 border-b border-navy pb-4 md:pb-6 inline-block">
              {member.role}
            </p>

            <div className="font-opensans space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-navy">
              {(member.content || []).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-3/4 rounded-3xl lg:rounded-[36px] overflow-hidden shadow-xl bg-[#E66A45] lg:sticky lg:top-10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
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