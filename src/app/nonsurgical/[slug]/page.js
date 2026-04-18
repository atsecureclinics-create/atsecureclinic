import { notFound } from "next/navigation";
import {
  getTreatmentBySlug,
  getTreatmentsByCategory,
} from "../../api/treatments";
import TreatmentPage from "../../components/treatmentpage";

export async function generateStaticParams() {
  return getTreatmentsByCategory("nonsurgical").map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug, "nonsurgical");
  if (!treatment) return {};
  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
  };
}

export default async function NonSurgicalTreatmentPage({ params }) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug, "nonsurgical");
  if (!treatment) notFound();
  return <TreatmentPage treatment={treatment} />;
}
