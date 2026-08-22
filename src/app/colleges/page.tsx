'use client';

import { useEffect, useState } from 'react';
import { useURLFilters } from '@/hooks/useURLFilters';
import { CollegeSearchResponse } from '@/types/college';
import { SearchBar } from '@/components/modules/search/SearchBar';
import { FilterPanel } from '@/components/modules/search/FilterPanel';
import { ActiveFilters } from '@/components/modules/search/ActiveFilters';
import { CollegeCard } from '@/components/modules/search/CollegeCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Filter, Building2, SlidersHorizontal, X } from 'lucide-react';

export default function CollegesListingPage() {
  const { filters } = useURLFilters();
  const [data, setData] = useState<CollegeSearchResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    async function fetchColleges() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (filters.q) params.set('q', filters.q);
        if (filters.stream.length) params.set('stream', filters.stream.join(','));
        if (filters.state.length) params.set('state', filters.state.join(','));
        if (filters.ownership.length) params.set('ownership', filters.ownership.join(','));
        if (filters.feeMin > 0) params.set('feeMin', filters.feeMin.toString());
        if (filters.feeMax < 1500000) params.set('feeMax', filters.feeMax.toString());
        if (filters.maxNirf < 100) params.set('maxNirf', filters.maxNirf.toString());
        if (filters.minRating > 0) params.set('minRating', filters.minRating.toString());
        if (filters.sortBy) params.set('sortBy', filters.sortBy);

        const res = await fetch(`/api/colleges?${params.toString()}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('Failed to fetch colleges', err);
      } finally {
        setLoading(false);
      }
    }

    fetchColleges();
  }, [filters]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Multi-Faceted College Discovery Engine
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time deep-linkable search across stream, fee range, location, NIRF rankings, and cutoffs.
          </p>
        </div>

        {/* Mobile Filter Trigger Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileFilterOpen(true)}
          className="md:hidden gap-2 self-start font-semibold text-xs border-slate-300"
        >
          <SlidersHorizontal className="h-4 w-4 text-brand-600" />
          <span>Filters & Sort</span>
        </Button>
      </div>

      {/* Search Input Bar */}
      <SearchBar />

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sticky Filter Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-20">
          <FilterPanel facets={data?.facets} />
        </aside>

        {/* Results Column */}
        <main className="lg:col-span-3 space-y-4">
          <ActiveFilters />

          {/* Results Count & Quick Info */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span className="font-semibold text-slate-700">
              Showing {loading ? '...' : data?.total ?? 0} higher education institution{(data?.total ?? 0) !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Loading Skeleton Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="rounded-prominent border border-slate-200 p-4 space-y-4 bg-white">
                  <Skeleton className="h-40 w-full rounded-standard" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : data?.colleges && data.colleges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.colleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-prominent border border-dashed border-slate-300 bg-white p-12 text-center">
              <Building2 className="h-12 w-12 text-slate-400 mb-3" />
              <h3 className="text-base font-bold text-slate-800">No Colleges Match Your Selected Filters</h3>
              <p className="text-xs text-slate-500 max-w-sm mt-1">
                Try expanding your fee budget range or clearing specific state location constraints.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Slide-Over Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex bg-slate-950/60 backdrop-blur-xs md:hidden">
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-bold text-slate-900 text-sm">Filter Options</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-slate-500 hover:text-slate-900">
                <X className="h-5 w-5" />
              </button>
            </div>
            <FilterPanel facets={data?.facets} />
            <Button onClick={() => setMobileFilterOpen(false)} className="mt-4 w-full">
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
