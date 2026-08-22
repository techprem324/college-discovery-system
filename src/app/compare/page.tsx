'use client';

import { useSearchParams } from 'next/navigation';
import { useCompareStore } from '@/stores/comparisonStore';
import { MOCK_COLLEGES } from '@/lib/mock-data';
import { ComparisonTable } from '@/components/modules/compare/ComparisonTable';
import { useEffect, useState } from 'react';

export default function ComparePage() {
  const searchParams = useSearchParams();
  const storeIds = useCompareStore((state) => state.selectedCollegeIds);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const idsFromUrl = searchParams.get('ids');
  const activeIds = idsFromUrl ? idsFromUrl.split(',').filter(Boolean) : storeIds;

  const comparedColleges = activeIds
    .map((id) => MOCK_COLLEGES.find((c) => c.id === id || c.slug === id))
    .filter(Boolean);

  if (!mounted) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <ComparisonTable colleges={comparedColleges as any} />
    </div>
  );
}
