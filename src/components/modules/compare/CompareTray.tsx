'use client';

import { useCompareStore } from '@/stores/comparisonStore';
import { MOCK_COLLEGES } from '@/lib/mock-data';
import { X, Scale, ArrowRight, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function CompareTray() {
  const { selectedCollegeIds, removeCollege, clearAll, maxCapacity } = useCompareStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || selectedCollegeIds.length === 0) {
    return null;
  }

  const selectedColleges = selectedCollegeIds
    .map((id) => MOCK_COLLEGES.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl rounded-prominent border border-slate-200/90 bg-white/95 p-3 shadow-2xl backdrop-blur-md animate-slide-up">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Tray Header */}
        <div className="flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0 sm:pr-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-standard bg-brand-100 text-brand-700">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Compare Tray</span>
              <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold text-white">
                {selectedCollegeIds.length}/{maxCapacity}
              </span>
            </div>
            <p className="text-[11px] text-slate-500">Pin up to 3 colleges</p>
          </div>
        </div>

        {/* Selected College Chips */}
        <div className="flex flex-1 items-center gap-2 overflow-x-auto py-1 max-w-full">
          {selectedColleges.map((college) => (
            <div
              key={college!.id}
              className="flex items-center gap-2 rounded-standard border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-800 shadow-sm shrink-0"
            >
              <div className="h-6 w-6 flex items-center justify-center rounded bg-white font-bold text-brand-700 border border-slate-200 text-[10px]">
                #{college!.nirfRank}
              </div>
              <span className="max-w-[110px] truncate font-semibold">{college!.shortName}</span>
              <button
                onClick={() => removeCollege(college!.id)}
                className="ml-1 rounded-full p-0.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
                title="Remove college"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}

          {/* Empty slots indicator */}
          {Array.from({ length: maxCapacity - selectedColleges.length }).map((_, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 rounded-standard border border-dashed border-slate-300 bg-slate-50/50 px-3 py-1.5 text-xs text-slate-400 shrink-0"
            >
              <span>+ Add College</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="text-slate-500 hover:text-red-600 hidden sm:flex"
            title="Clear all selected"
          >
            <Trash2 className="h-4 w-4" />
          </Button>

          <Link href={`/compare?ids=${selectedCollegeIds.join(',')}`} className="w-full sm:w-auto">
            <Button size="sm" className="w-full gap-1.5 shadow-md hover:shadow-glow">
              <span>Compare Now</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
