import { Boundary } from '@/components/ui/test/boundary';

export default function Page() {
  return (
    <Boundary labels={['@audience/subscribers/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Subscribers</h2>
      </div>
    </Boundary>
  );
}
