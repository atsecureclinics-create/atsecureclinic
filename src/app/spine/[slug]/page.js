import { notFound } from "next/navigation";
import { getConditionBySlug, getConditionsByCategory } from "../../api/conditions";
import ConditionPage from "../../components/conditionpage";

export async function generateStaticParams() {
    return getConditionsByCategory("spine").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const condition = getConditionBySlug(slug, "spine");
    if (!condition) return {};
    return {
        title: condition.metaTitle,
        description: condition.metaDescription,
    };
}

export default async function SpineConditionPage({ params }) {
    const { slug } = await params;
    const condition = getConditionBySlug(slug, "spine");
    if (!condition) notFound();
    return <ConditionPage condition={condition} />;
}
