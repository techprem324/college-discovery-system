import { MOCK_COLLEGES } from '@/lib/mock-data';
import { PlacementAnalyticsChart } from '@/components/modules/college-detail/PlacementAnalyticsChart';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { Layers } from 'lucide-react';

export default function CollegePlacementsPage({ params }: { params: { slug: string } }) {
  const college = MOCK_COLLEGES.find((c) => c.slug === params.slug || c.id === params.slug);

  if (!college) notFound();

  return (
    <div className="space-y-6">
      <PlacementAnalyticsChart
        yearlyPlacements={college.yearlyPlacements}
        collegeName={college.name}
      />

      {/* Top Recruiting Companies Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Layers className="h-5 w-5 text-indigo-600" />
            Top Hiring Partners & Recruiters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {college.topRecruiters.map((company) => (
              <div
                key={company}
                className="rounded-standard border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800 shadow-xs hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition"
              >
                {company}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
