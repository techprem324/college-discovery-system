'use client';

import { PredictorMatchResult } from '@/types/predictor';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCompareStore } from '@/stores/comparisonStore';
import { formatLakhs } from '@/lib/utils';
import { Trophy, CheckCircle, Scale, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface MatchResultCardProps {
  match: PredictorMatchResult;
}

export function MatchResultCard({ match }: MatchResultCardProps) {
  const { toggleCollege, hasCollege } = useCompareStore();
  const { college, branch, closingRank, userRank, cutoffDelta, matchTier, matchProbabilityPercentage, reason } = match;
  const isCompared = hasCollege(college.id);

  const getTierVariant = () => {
    if (matchTier === 'Safe') return 'safe';
    if (matchTier === 'Target') return 'target';
    return 'dream';
  };

  const handleCompareClick = () => {
    const res = toggleCollege(college.id);
    if (!res.success && res.message) {
      alert(res.message);
    }
  };

  return (
    <Card className="overflow-hidden border border-slate-200 bg-white transition-all hover:shadow-lg">
      <CardContent className="p-5 space-y-4">
        {/* Header Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-standard border border-slate-200 bg-white p-1 shadow-sm flex items-center justify-center shrink-0">
              <img src={college.logoUrl} alt={college.name} className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant={getTierVariant()} className="font-bold text-xs">
                  {matchTier.toUpperCase()} MATCH ({matchProbabilityPercentage}% Probable)
                </Badge>
                <Badge variant="outline" className="text-[10px]">
                  NIRF #{college.nirfRank}
                </Badge>
              </div>
              <h3 className="font-bold text-base text-slate-900 mt-1">{college.name}</h3>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="h-3 w-3 text-slate-400" />
                {college.location.city}, {college.location.state}
              </p>
            </div>
          </div>
        </div>

        {/* Branch & Cutoff Details */}
        <div className="rounded-standard bg-slate-50 p-3.5 border border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <span className="text-[10px] uppercase font-semibold text-slate-400 block">Allotted Branch</span>
            <span className="font-bold text-slate-900">{branch}</span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-semibold text-slate-400 block">Closing Cutoff Rank</span>
            <span className="font-bold text-slate-900">Rank #{closingRank.toLocaleString('en-IN')}</span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-semibold text-slate-400 block">Your Rank Margin</span>
            <span className={`font-bold ${cutoffDelta >= 0 ? "text-emerald-700" : "text-amber-700"}`}>
              {cutoffDelta >= 0 ? `+${cutoffDelta.toLocaleString('en-IN')} Rank Buffer` : `${cutoffDelta.toLocaleString('en-IN')} Delta`}
            </span>
          </div>
        </div>

        {/* Evaluation Insight */}
        <p className="text-xs text-slate-600 bg-slate-100/60 p-2.5 rounded-subtle border-l-2 border-brand-500">
          <Sparkles className="h-3.5 w-3.5 text-brand-600 inline mr-1" />
          {reason}
        </p>

        {/* Quick Placement CTC & Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <div className="text-xs">
            <span className="text-slate-500">Avg CTC: </span>
            <span className="font-bold text-emerald-700">{formatLakhs(college.averagePackageLpa)}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={isCompared ? "secondary" : "outline"}
              size="sm"
              onClick={handleCompareClick}
              className="text-xs h-8"
            >
              {isCompared ? (
                <>
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600 mr-1" /> Pinned
                </>
              ) : (
                <>
                  <Scale className="h-3.5 w-3.5 text-slate-500 mr-1" /> Compare
                </>
              )}
            </Button>

            <Link href={`/colleges/${college.slug}`}>
              <Button size="sm" className="text-xs h-8 gap-1">
                View Profile <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
