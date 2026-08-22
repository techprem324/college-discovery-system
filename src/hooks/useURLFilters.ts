'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { FilterState } from '@/types/college';

export function useURLFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters: FilterState = useMemo(() => {
    const q = searchParams.get('q') || '';
    const stream = searchParams.get('stream') ? searchParams.get('stream')!.split(',') : [];
    const state = searchParams.get('state') ? searchParams.get('state')!.split(',') : [];
    const ownership = searchParams.get('ownership') ? searchParams.get('ownership')!.split(',') : [];
    const feeMin = searchParams.get('feeMin') ? Number(searchParams.get('feeMin')) : 0;
    const feeMax = searchParams.get('feeMax') ? Number(searchParams.get('feeMax')) : 1500000;
    const maxNirf = searchParams.get('maxNirf') ? Number(searchParams.get('maxNirf')) : 100;
    const minRating = searchParams.get('minRating') ? Number(searchParams.get('minRating')) : 0;
    const sortBy = (searchParams.get('sortBy') as FilterState['sortBy']) || 'nirfAsc';

    return {
      q,
      stream,
      state,
      ownership,
      feeMin,
      feeMax,
      maxNirf,
      minRating,
      sortBy,
    };
  }, [searchParams]);

  const updateFilters = useCallback(
    (newFilters: Partial<FilterState>) => {
      const params = new URLSearchParams(searchParams.toString());
      const updated = { ...filters, ...newFilters };

      if (updated.q) params.set('q', updated.q); else params.delete('q');
      if (updated.stream.length > 0) params.set('stream', updated.stream.join(',')); else params.delete('stream');
      if (updated.state.length > 0) params.set('state', updated.state.join(',')); else params.delete('state');
      if (updated.ownership.length > 0) params.set('ownership', updated.ownership.join(',')); else params.delete('ownership');
      
      if (updated.feeMin > 0) params.set('feeMin', updated.feeMin.toString()); else params.delete('feeMin');
      if (updated.feeMax < 1500000) params.set('feeMax', updated.feeMax.toString()); else params.delete('feeMax');
      if (updated.maxNirf < 100) params.set('maxNirf', updated.maxNirf.toString()); else params.delete('maxNirf');
      if (updated.minRating > 0) params.set('minRating', updated.minRating.toString()); else params.delete('minRating');
      
      if (updated.sortBy !== 'nirfAsc') params.set('sortBy', updated.sortBy); else params.delete('sortBy');

      const queryString = params.toString();
      const newPath = queryString ? `${pathname}?${queryString}` : pathname;
      router.push(newPath, { scroll: false });
    },
    [filters, pathname, router, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [pathname, router]);

  return {
    filters,
    updateFilters,
    clearFilters,
    hasActiveFilters: Boolean(
      filters.q ||
      filters.stream.length ||
      filters.state.length ||
      filters.ownership.length ||
      filters.feeMin > 0 ||
      filters.feeMax < 1500000 ||
      filters.maxNirf < 100 ||
      filters.minRating > 0
    )
  };
}
