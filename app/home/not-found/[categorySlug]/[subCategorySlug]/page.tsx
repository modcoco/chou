import { getCategory } from '@/app/api/categories/getCategories';
import { SkeletonCard } from '@/components/ui/test/skeleton-card';

export default async function Page(props: {
  params: Promise<{ categorySlug: string; subCategorySlug: string }>;
}) {
  const params = await props.params;
  // - `getCategory()` returns `notFound()` if the fetched data is `null` or `undefined`.
  // - `notFound()` renders the closest `not-found.tsx` in the route segment hierarchy.
  // - For `layout.js`, the closest `not-found.tsx` starts from the parent segment.
  // - For `page.js`, the closest `not-found.tsx` starts from the same segment.
  // - Learn more: https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy.
  const category = await getCategory({ slug: params.subCategorySlug });

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
