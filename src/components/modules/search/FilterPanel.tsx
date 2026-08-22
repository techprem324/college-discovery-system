'use client';

import { useURLFilters } from '@/hooks/useURLFilters';
import { FacetCounts } from '@/types/college';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { Filter, RotateCcw, Building2, MapPin, DollarSign, Award, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FilterPanelProps {
  facets?: FacetCounts;
}

const STREAM_OPTIONS = ['Engineering', 'Management', 'Medical', 'Design', 'Sciences'];
const STATE_OPTIONS = ['Maharashtra', 'Delhi', 'Tamil Nadu', 'Rajasthan', 'Gujarat', 'Telangana'];
const OWNERSHIP_OPTIONS = [
  { label: 'Public / Government', value: 'PUBLIC' },
  { label: 'Private University', value: 'PRIVATE' },
];
const SORT_OPTIONS = [
  { label: 'NIRF Rank (Low to High)', value: 'nirfAsc' },
  { label: 'Avg Salary Package (High to Low)', value: 'packageDesc' },
  { label: 'Tuition Fee (Low to High)', value: 'feeAsc' },
  { label: 'Student Rating (High to Low)', value: 'ratingDesc' },
];

export function FilterPanel({ facets }: FilterPanelProps) {
  const { filters, updateFilters, clearFilters, hasActiveFilters } = useURLFilters();

  const [feeRange, setFeeRange] = useState<[number, number]>([
    filters.feeMin || 0,
    filters.feeMax || 1500000
  ]);

  useEffect(() => {
    setFeeRange([filters.feeMin || 0, filters.feeMax || 1500000]);
  }, [filters.feeMin, filters.feeMax]);

  const handleStreamToggle = (stream: string) => {
    const next = filters.stream.includes(stream)
      ? filters.stream.filter((s) => s !== stream)
      : [...filters.stream, stream];
    updateFilters({ stream: next });
  };

  const handleStateToggle = (st: string) => {
    const next = filters.state.includes(st)
      ? filters.state.filter((s) => s !== st)
      : [...filters.state, st];
    updateFilters({ state: next });
  };

  const handleOwnershipToggle = (own: string) => {
    const next = filters.ownership.includes(own)
      ? filters.ownership.filter((o) => o !== own)
      : [...filters.ownership, own];
    updateFilters({ ownership: next });
  };

  const handleFeeCommit = (values: number[]) => {
    updateFilters({ feeMin: values[0], feeMax: values[1] });
  };

  return (
    <div className="space-y-6 rounded-prominent border border-slate-200 bg-white p-5 shadow-sm">
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-brand-600" />
          <h3 className="font-bold text-slate-900 text-base">Filter Matrix</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-8 text-xs text-brand-600 hover:text-brand-800 hover:bg-brand-50"
          >
            <RotateCcw className="h-3 w-3 mr-1" /> Reset
          </Button>
        )}
      </div>

      {/* Sort By */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <Layers className="h-3.5 w-3.5 text-slate-400" /> Sort Results
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => updateFilters({ sortBy: e.target.value as any })}
          className="w-full rounded-standard border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Course Streams */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <Building2 className="h-3.5 w-3.5 text-slate-400" /> Course Streams
        </label>
        <div className="space-y-1.5">
          {STREAM_OPTIONS.map((st) => {
            const isChecked = filters.stream.includes(st);
            const count = facets?.byStream[st] ?? 0;

            return (
              <label
                key={st}
                className="flex items-center justify-between cursor-pointer rounded-standard p-2 text-xs text-slate-700 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleStreamToggle(st)}
                    className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className={isChecked ? "font-semibold text-brand-700" : ""}>{st}</span>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                  {count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Fee Slider */}
      <div className="space-y-3 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <DollarSign className="h-3.5 w-3.5 text-slate-400" /> Annual Fee Range
          </label>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold text-brand-700 bg-brand-50 p-2 rounded-standard">
          <span>{formatCurrency(feeRange[0])}</span>
          <span>to</span>
          <span>{formatCurrency(feeRange[1])}</span>
        </div>
        <Slider
          min={0}
          max={1500000}
          step={25000}
          value={feeRange}
          onValueChange={(val) => setFeeRange(val as [number, number])}
          onValueCommit={handleFeeCommit}
          className="my-2"
        />
      </div>

      {/* State / Location */}
      <div className="space-y-2.5 border-t border-slate-100 pt-4">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-slate-400" /> Location / State
        </label>
        <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
          {STATE_OPTIONS.map((stateName) => {
            const isChecked = filters.state.includes(stateName);
            const count = facets?.byState[stateName] ?? 0;

            return (
              <label
                key={stateName}
                className="flex items-center justify-between cursor-pointer rounded-standard p-2 text-xs text-slate-700 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleStateToggle(stateName)}
                    className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className={isChecked ? "font-semibold text-brand-700" : ""}>{stateName}</span>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                  {count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Ownership */}
      <div className="space-y-2.5 border-t border-slate-100 pt-4">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <Award className="h-3.5 w-3.5 text-slate-400" /> Ownership
        </label>
        <div className="space-y-1.5">
          {OWNERSHIP_OPTIONS.map((own) => {
            const isChecked = filters.ownership.includes(own.value);
            const count = facets?.byOwnership[own.value] ?? 0;

            return (
              <label
                key={own.value}
                className="flex items-center justify-between cursor-pointer rounded-standard p-2 text-xs text-slate-700 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleOwnershipToggle(own.value)}
                    className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className={isChecked ? "font-semibold text-brand-700" : ""}>{own.label}</span>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                  {count}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
