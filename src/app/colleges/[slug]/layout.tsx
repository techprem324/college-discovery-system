import { MOCK_COLLEGES } from '@/lib/mock-data';
import { QuickStatsBanner } from '@/components/modules/college-detail/QuickStatsBanner';
import { SubNav } from '@/components/modules/college-detail/SubNav';
import { notFound } from 'next/navigation';

export default function CollegeDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const college = MOCK_COLLEGES.find((c) => c.slug === params.slug || c.id === params.slug);

  if (!college) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <QuickStatsBanner college={college} />
      <SubNav slug={college.slug} />
      <main className="pt-2">{children}</main>
    </div>
  );
}
