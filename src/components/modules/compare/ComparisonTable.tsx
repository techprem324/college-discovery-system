'use client';

import { College } from '@/types/college';
import { useCompareStore } from '@/stores/comparisonStore';
import { MetricDiffCell } from './MetricDiffCell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, formatLakhs } from '@/lib/utils';
import { X, Trophy, MapPin, Building2, TrendingUp, DollarSign, Star, Award, Layers } from 'lucide-react';
import Link from 'next/link';

interface ComparisonTableProps {
  colleges: College[];
}

export function ComparisonTable({ colleges }: ComparisonTableProps) {
  const { removeCollege, clearAll } = useCompareStore();

  if (colleges.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-prominent border border-dashed border-slate-300 bg-slate-50/50 p-12 text-center">
        <Building2 className="h-12 w-12 text-slate-400 mb-3" />
        <h3 className="text-lg font-bold text-slate-800">No Colleges Pinned for Comparison</h3>
        <p className="text-sm text-slate-500 max-w-md mt-1 mb-6">
          Pin up to 3 colleges from the discovery listing or profile pages to launch a side-by-side metric matrix.
        </p>
        <Link href="/colleges">
          <Button className="shadow-md">Browse & Pin Colleges</Button>
        </Link>
      </div>
    );
  }

  // Calculate best metrics across selected colleges
  const minFee = Math.min(...colleges.map((c) => c.feePerYearMin));
  const maxAvgPackage = Math.max(...colleges.map((c) => c.averagePackageLpa));
  const minNirf = Math.min(...colleges.map((c) => c.nirfRank));
  const maxRating = Math.max(...colleges.map((c) => c.overallRating));
  const maxPlacementRate = Math.max(...colleges.map((c) => c.placementPercentage));

  return (
    <div className="space-y-6">
      {/* Matrix Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Side-by-Side Decision Matrix</h2>
          <p className="text-xs text-slate-500">
            Evaluating {colleges.length} institution{colleges.length > 1 ? 's' : ''} across NIRF, fees, placements, and cutoffs.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={clearAll} className="text-red-600 border-red-200 hover:bg-red-50">
          Reset Matrix
        </Button>
      </div>

      {/* Grid Container */}
      <div className="overflow-x-auto rounded-prominent border border-slate-200 bg-white shadow-md">
        <table className="w-full border-collapse text-left">
          {/* Header Row with Sticky Cards */}
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="w-48 p-4 font-bold text-xs uppercase tracking-wider text-slate-500 sticky left-0 bg-slate-50 z-10 border-r border-slate-200">
                Metric Category
              </th>
              {colleges.map((college) => (
                <th key={college.id} className="min-w-[260px] p-4 align-top border-r border-slate-200 last:border-r-0">
                  <div className="relative flex flex-col items-center text-center space-y-2">
                    <button
                      onClick={() => removeCollege(college.id)}
                      className="absolute top-0 right-0 rounded-full p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
                      title="Remove from matrix"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="h-14 w-14 rounded-standard border border-slate-200 bg-white p-1 shadow-sm flex items-center justify-center overflow-hidden">
                      <img src={college.logoUrl} alt={college.name} className="h-full w-full object-contain" />
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 leading-tight">
                      {college.name}
                    </h4>

                    <div className="flex items-center gap-1.5 flex-wrap justify-center">
                      <Badge variant="secondary" className="text-[10px]">
                        NIRF #{college.nirfRank}
                      </Badge>
                      <Badge variant={college.ownership === 'PUBLIC' ? 'public' : 'private'} className="text-[10px]">
                        {college.ownership}
                      </Badge>
                    </div>

                    <Link href={`/colleges/${college.slug}`} className="w-full pt-1">
                      <Button size="sm" variant="outline" className="w-full text-xs h-7 font-semibold">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 text-xs">
            {/* NIRF Ranking */}
            <tr>
              <td className="p-4 font-semibold text-slate-700 bg-slate-50/50 sticky left-0 border-r border-slate-200 flex items-center gap-2">
                <Trophy className="h-4 w-4 text-amber-500" /> NIRF Rank
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-2 border-r border-slate-200 last:border-r-0">
                  <MetricDiffCell
                    value={`#${c.nirfRank} in India`}
                    isBest={c.nirfRank === minNirf}
                    bestLabel="Top Ranked"
                  />
                </td>
              ))}
            </tr>

            {/* Average Package */}
            <tr>
              <td className="p-4 font-semibold text-slate-700 bg-slate-50/50 sticky left-0 border-r border-slate-200 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-600" /> Avg Placement Package
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-2 border-r border-slate-200 last:border-r-0">
                  <MetricDiffCell
                    value={formatLakhs(c.averagePackageLpa)}
                    isBest={c.averagePackageLpa === maxAvgPackage}
                    bestLabel="Highest Avg CTC"
                  />
                </td>
              ))}
            </tr>

            {/* Annual Tuition Fee */}
            <tr>
              <td className="p-4 font-semibold text-slate-700 bg-slate-50/50 sticky left-0 border-r border-slate-200 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-blue-600" /> Annual Fee (Approx)
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-2 border-r border-slate-200 last:border-r-0">
                  <MetricDiffCell
                    value={formatCurrency(c.feePerYearMin)}
                    isBest={c.feePerYearMin === minFee}
                    bestLabel="Lowest Fee"
                  />
                </td>
              ))}
            </tr>

            {/* Highest Package */}
            <tr>
              <td className="p-4 font-semibold text-slate-700 bg-slate-50/50 sticky left-0 border-r border-slate-200 flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-600" /> Highest Package
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-2 border-r border-slate-200 last:border-r-0">
                  <MetricDiffCell value={formatLakhs(c.highestPackageLpa)} />
                </td>
              ))}
            </tr>

            {/* Overall Rating */}
            <tr>
              <td className="p-4 font-semibold text-slate-700 bg-slate-50/50 sticky left-0 border-r border-slate-200 flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" /> Student Rating
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-2 border-r border-slate-200 last:border-r-0">
                  <MetricDiffCell
                    value={`${c.overallRating} / 5.0`}
                    isBest={c.overallRating === maxRating}
                    bestLabel="Top Rated"
                  />
                </td>
              ))}
            </tr>

            {/* Placement Percentage */}
            <tr>
              <td className="p-4 font-semibold text-slate-700 bg-slate-50/50 sticky left-0 border-r border-slate-200">
                Placement Rate
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-2 border-r border-slate-200 last:border-r-0">
                  <MetricDiffCell
                    value={`${c.placementPercentage}% Placed`}
                    isBest={c.placementPercentage === maxPlacementRate}
                    bestLabel="Highest Placement %"
                  />
                </td>
              ))}
            </tr>

            {/* Location & Established */}
            <tr>
              <td className="p-4 font-semibold text-slate-700 bg-slate-50/50 sticky left-0 border-r border-slate-200 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" /> Location & Campus
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 text-center border-r border-slate-200 last:border-r-0">
                  <p className="font-semibold text-slate-800">{c.location.city}, {c.location.state}</p>
                  <span className="text-[11px] text-slate-500">Est. {c.establishedYear} • {c.location.campusAreaAcres} Acres</span>
                </td>
              ))}
            </tr>

            {/* Top Recruiters */}
            <tr>
              <td className="p-4 font-semibold text-slate-700 bg-slate-50/50 sticky left-0 border-r border-slate-200 flex items-center gap-2">
                <Layers className="h-4 w-4 text-indigo-500" /> Key Recruiters
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 text-center border-r border-slate-200 last:border-r-0">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {c.topRecruiters.map((r) => (
                      <span key={r} className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700 font-medium">
                        {r}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
