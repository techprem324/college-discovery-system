import React from 'react';
import { cn } from '@/lib/utils';
import { Award, CheckCircle2 } from 'lucide-react';

interface MetricDiffCellProps {
  value: string | number;
  isBest?: boolean;
  bestLabel?: string;
  className?: string;
}

export function MetricDiffCell({ value, isBest, bestLabel, className }: MetricDiffCellProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-4 text-center rounded-standard transition-colors",
        isBest
          ? "bg-emerald-50/90 border border-emerald-300 font-bold text-emerald-900 shadow-sm"
          : "bg-white text-slate-800",
        className
      )}
    >
      <span className="text-sm">{value}</span>
      {isBest && (
        <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
          <CheckCircle2 className="h-3 w-3" />
          {bestLabel || "Best Value"}
        </span>
      )}
    </div>
  );
}
