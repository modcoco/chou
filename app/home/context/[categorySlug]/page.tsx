import { getCategory } from '@/app/api/categories/getCategories';
import { Boundary } from '@/components/ui/test/boundary';
import { Counter } from '../context-click-counter';

export default async function Page(props: {
  params: Promise<{ categorySlug: string }>;
}) {
  const params = await props.params;
  const category = await getCategory({ slug: params.categorySlug });

  return (
    <Boundary labels={['Page [Server Component]']} animateRerendering={false}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-400/80">
          All {category.name}
        </h1>

        <Counter />
      </div>
    </Boundary>
  );
}
