'use client';

import { useURLFilters } from '@/hooks/useURLFilters';
import { useDebounce } from '@/hooks/useDebounce';
import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function SearchBar() {
  const { filters, updateFilters } = useURLFilters();
  const [searchTerm, setSearchTerm] = useState(filters.q || '');
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    setSearchTerm(filters.q || '');
  }, [filters.q]);

  useEffect(() => {
    if (debouncedSearch !== filters.q) {
      updateFilters({ q: debouncedSearch });
    }
  }, [debouncedSearch]);

  const handleClear = () => {
    setSearchTerm('');
    updateFilters({ q: '' });
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search colleges by name, city, course stream (e.g. IIT Bombay, Delhi, Engineering)..."
        className="w-full rounded-prominent border border-slate-200 bg-white py-3.5 pl-12 pr-10 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-sm transition-all focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10"
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
