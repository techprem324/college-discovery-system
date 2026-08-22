'use client';

import { useURLFilters } from '@/hooks/useURLFilters';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, RotateCcw } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export function ActiveFilters() {
  const { filters, updateFilters, clearFilters, hasActiveFilters } = useURLFilters();

  if (!hasActiveFilters) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-standard border border-slate-200/60 bg-slate-50 p-3">
      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
        Active Filters:
      </span>

      {filters.q && (
        <Badge variant="secondary" className="gap-1 bg-white border border-slate-200 text-xs font-medium">
          Query: "{filters.q}"
          <button onClick={() => updateFilters({ q: '' })} className="hover:text-red-500">
            <X className="h-3 w-3" />
          </button>
        </Badge>
      )}

      {filters.stream.map((st) => (
        <Badge key={st} variant="default" className="gap-1 text-xs font-medium">
          Stream: {st}
          <button
            onClick={() => updateFilters({ stream: filters.stream.filter((s) => s !== st) })}
            className="hover:text-red-300"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}

      {filters.state.map((st) => (
        <Badge key={st} variant="outline" className="gap-1 bg-white text-xs font-medium">
          State: {st}
          <button
            onClick={() => updateFilters({ state: filters.state.filter((s) => s !== st) })}
            className="hover:text-red-500"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}

      {filters.ownership.map((own) => (
        <Badge key={own} variant="secondary" className="gap-1 bg-white text-xs font-medium">
          Ownership: {own}
          <button
            onClick={() => updateFilters({ ownership: filters.ownership.filter((o) => o !== own) })}
            className="hover:text-red-500"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}

      {(filters.feeMin > 0 || filters.feeMax < 1500000) && (
        <Badge variant="outline" className="gap-1 bg-white text-xs font-medium">
          Fee: {formatCurrency(filters.feeMin)} - {formatCurrency(filters.feeMax)}
          <button
            onClick={() => updateFilters({ feeMin: 0, feeMax: 1500000 })}
            className="hover:text-red-500"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      )}

      <Button
        variant="ghost"
        size="sm"
        onClick={clearFilters}
        className="h-7 px-2 text-xs text-red-600 hover:bg-red-50"
      >
        <RotateCcw className="h-3 w-3 mr-1" /> Clear All
      </Button>
    </div>
  );
}
