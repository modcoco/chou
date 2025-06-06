import { getCategories } from '@/app/api/categories/getCategories';
import { LayoutHooks } from '@/app/home/hooks/_components/router-context-layout';
import { ClickCounter } from '@/components/ui/test/click-counter';
import { TabGroup } from '@/components/ui/test/tab-group';
import React from 'react';

const title = 'Hooks';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/home/hooks"
          items={[
            {
              text: 'Home',
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
