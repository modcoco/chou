import { getCategory } from "@/app/api/categories/getCategories";
import BuggyButton from "@/components/ui/test/buggy-button";
import { SkeletonCard } from "@/components/ui/test/skeleton-card";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ categorySlug: string; subCategorySlug: string }>;
}) {
  const params = await props.params;
  const category = await getCategory({ slug: params.subCategorySlug });

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <BuggyButton />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
