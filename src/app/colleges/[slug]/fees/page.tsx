import { MOCK_COLLEGES } from '@/lib/mock-data';
import { FeeBreakdownTable } from '@/components/modules/college-detail/FeeBreakdownTable';
import { notFound } from 'next/navigation';

export default function CollegeFeesPage({ params }: { params: { slug: string } }) {
  const college = MOCK_COLLEGES.find((c) => c.slug === params.slug || c.id === params.slug);

  if (!college) notFound();

  return (
    <FeeBreakdownTable
      feeStructure={college.feeStructure}
      courses={college.courses}
    />
  );
}
