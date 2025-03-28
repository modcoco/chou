import { getCategories, getCategory } from '@/app/api/categories/getCategories';
import { LayoutHooks } from '@/app/home/hooks/_components/router-context-layout';
import { ClickCounter } from '@/components/ui/test/click-counter';
import { TabGroup } from '@/components/ui/test/tab-group';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ categorySlug: string }>;
}) {
  const params = await props.params;

  const { children } = props;

  const category = await getCategory({ slug: params.categorySlug });
  const categories = await getCategories({ parent: params.categorySlug });

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/home/hooks/${category.slug}`}
          items={[
            {
              text: 'All',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <LayoutHooks />

      <div>{children}</div>
    </div>
  );
}
