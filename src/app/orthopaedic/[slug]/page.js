import { notFound } from "next/navigation";
import { getConditionBySlug, getConditionsByCategory } from "../../api/conditions";
import ConditionPage from "../../components/conditionpage";

export async function generateStaticParams() {
    return getConditionsByCategory("orthopaedic").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const condition = getConditionBySlug(slug, "orthopaedic");
    if (!condition) return {};
    return {
        title: condition.metaTitle,
        description: condition.metaDescription,
    };
}

export default async function OrthopaedicConditionPage({ params }) {
    const { slug } = await params;
    const condition = getConditionBySlug(slug, "orthopaedic");
    if (!condition) notFound();
    return <ConditionPage condition={condition} />;
}
