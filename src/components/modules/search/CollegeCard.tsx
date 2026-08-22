'use client';

import { College } from '@/types/college';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCompareStore } from '@/stores/comparisonStore';
import { formatCurrency, formatLakhs } from '@/lib/utils';
import { MapPin, Star, Trophy, TrendingUp, CheckCircle, Scale, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface CollegeCardProps {
  college: College;
}

export function CollegeCard({ college }: CollegeCardProps) {
  const { toggleCollege, hasCollege } = useCompareStore();
  const isCompared = hasCollege(college.id);

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const result = toggleCollege(college.id);
    if (!result.success && result.message) {
      alert(result.message);
    }
  };

  return (
    <Card className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      {/* Cover / Header Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
        <img
          src={college.coverImageUrl}
          alt={college.name}
          className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge className="bg-amber-400 text-slate-950 font-bold border-none shadow-md">
            <Trophy className="h-3 w-3 mr-1 text-slate-950" />
            NIRF #{college.nirfRank}
          </Badge>
          <Badge variant={college.ownership === 'PUBLIC' ? 'public' : 'private'}>
            {college.ownership}
          </Badge>
        </div>

        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-white/90 font-bold text-slate-800 backdrop-blur-sm">
            NAAC {college.naacGrade}
          </Badge>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-bold leading-snug drop-shadow-sm group-hover:text-brand-300 transition-colors">
            {college.name}
          </h3>
          <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-brand-400" />
              {college.location.city}, {college.location.state}
            </span>
            <span className="flex items-center gap-1 font-semibold text-amber-300">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {college.overallRating} / 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Card Content & Key Metrics */}
      <CardContent className="flex flex-1 flex-col justify-between p-5 space-y-4">
        {/* Metric Grid */}
        <div className="grid grid-cols-2 gap-3 rounded-standard bg-slate-50 p-3 border border-slate-100">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-emerald-600" /> Avg Package
            </span>
            <p className="text-base font-bold text-slate-900 mt-0.5">
              {formatLakhs(college.averagePackageLpa)}
            </p>
            <span className="text-[10px] text-emerald-600 font-semibold">
              Highest: {formatLakhs(college.highestPackageLpa)}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
              Annual Fees
            </span>
            <p className="text-base font-bold text-slate-900 mt-0.5">
              {formatCurrency(college.feePerYearMin)}
            </p>
            <span className="text-[10px] text-slate-500">
              Tuition + Hostel approx.
            </span>
          </div>
        </div>

        {/* Popular Streams & Top Recruiters */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-medium">Streams:</span>
            {college.popularStreams.map((stream) => (
              <span key={stream} className="rounded bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
                {stream}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 truncate">
            <span className="text-slate-400 font-medium">Top Recruiters:</span>
            <span className="truncate text-slate-700 font-medium">
              {college.topRecruiters.slice(0, 4).join(', ')}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <Button
            variant={isCompared ? "secondary" : "outline"}
            size="sm"
            onClick={handleCompareClick}
            className={`flex-1 gap-1.5 text-xs font-semibold ${
              isCompared ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100" : ""
            }`}
          >
            {isCompared ? (
              <>
                <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                <span>Pinned to Compare</span>
              </>
            ) : (
              <>
                <Scale className="h-3.5 w-3.5 text-slate-500" />
                <span>Add to Compare</span>
              </>
            )}
          </Button>

          <Link href={`/colleges/${college.slug}`} className="flex-1">
            <Button size="sm" className="w-full gap-1 text-xs font-semibold">
              <span>View Profile</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
