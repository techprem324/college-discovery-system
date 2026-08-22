'use client';

import { College } from '@/types/college';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCompareStore } from '@/stores/comparisonStore';
import { MapPin, Trophy, Star, CheckCircle, Scale, Building2, Calendar, Users } from 'lucide-react';

interface QuickStatsBannerProps {
  college: College;
}

export function QuickStatsBanner({ college }: QuickStatsBannerProps) {
  const { toggleCollege, hasCollege } = useCompareStore();
  const isCompared = hasCollege(college.id);

  const handleCompareToggle = () => {
    const res = toggleCollege(college.id);
    if (!res.success && res.message) {
      alert(res.message);
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-900 text-white rounded-prominent shadow-xl mb-6">
      {/* Background Image Overlay */}
      <img
        src={college.coverImageUrl}
        alt={college.name}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="h-20 w-20 shrink-0 rounded-prominent bg-white p-2 shadow-lg flex items-center justify-center overflow-hidden border border-slate-200">
              <img src={college.logoUrl} alt={college.name} className="h-full w-full object-contain" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className="bg-amber-400 text-slate-950 font-bold border-none">
                  <Trophy className="h-3 w-3 mr-1" /> NIRF #{college.nirfRank}
                </Badge>
                <Badge variant={college.ownership === 'PUBLIC' ? 'public' : 'private'}>
                  {college.ownership}
                </Badge>
                <Badge variant="outline" className="text-white border-slate-600 bg-slate-800/80">
                  NAAC {college.naacGrade}
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow">
                {college.name}
              </h1>

              <div className="flex items-center gap-4 text-xs text-slate-300 flex-wrap pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-brand-400" />
                  {college.location.city}, {college.location.state}
                </span>
                <span className="flex items-center gap-1 font-semibold text-amber-300">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {college.overallRating} / 5.0 Rating
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  Estd. {college.establishedYear}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={handleCompareToggle}
              variant={isCompared ? "secondary" : "default"}
              size="lg"
              className="gap-2 font-semibold shadow-md"
            >
              {isCompared ? (
                <>
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Pinned in Compare</span>
                </>
              ) : (
                <>
                  <Scale className="h-4 w-4" />
                  <span>Add to Compare</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Average Package</span>
            <span className="text-lg font-bold text-emerald-400">₹{college.averagePackageLpa} LPA</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Highest Package</span>
            <span className="text-lg font-bold text-purple-300">₹{college.highestPackageLpa} LPA</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Faculty Count</span>
            <span className="text-lg font-bold text-slate-200">{college.facultyCount}+ Members</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Campus Area</span>
            <span className="text-lg font-bold text-slate-200">{college.location.campusAreaAcres} Acres</span>
          </div>
        </div>
      </div>
    </div>
  );
}
