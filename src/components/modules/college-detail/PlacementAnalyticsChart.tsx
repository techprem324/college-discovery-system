'use client';

import { YearlyPlacementData } from '@/types/college';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, Award, Users, CheckCircle2 } from 'lucide-react';
import { formatLakhs } from '@/lib/utils';

interface PlacementAnalyticsChartProps {
  yearlyPlacements: YearlyPlacementData[];
  collegeName: string;
}

export function PlacementAnalyticsChart({ yearlyPlacements, collegeName }: PlacementAnalyticsChartProps) {
  const chartData = yearlyPlacements.map((item) => ({
    year: item.year.toString(),
    Highest: item.highestPackageLpa,
    Average: item.avgPackageLpa,
    Median: item.medianPackageLpa,
    placementRate: item.placementPercentage,
  }));

  const latest = yearlyPlacements[0] || yearlyPlacements[yearlyPlacements.length - 1];

  return (
    <div className="space-y-6">
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-standard bg-emerald-600 text-white shadow-sm">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Average Package</span>
              <p className="text-xl font-bold text-emerald-950">{formatLakhs(latest.avgPackageLpa)}</p>
              <span className="text-[10px] text-emerald-700 font-medium">Batch {latest.year}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-standard bg-purple-600 text-white shadow-sm">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-purple-800 uppercase tracking-wider">Highest CTC Offered</span>
              <p className="text-xl font-bold text-purple-950">{formatLakhs(latest.highestPackageLpa)}</p>
              <span className="text-[10px] text-purple-700 font-medium">Global offer</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-standard bg-blue-600 text-white shadow-sm">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider">Placement Rate</span>
              <p className="text-xl font-bold text-blue-950">{latest.placementPercentage}%</p>
              <span className="text-[10px] text-blue-700 font-medium">{latest.studentsPlaced} students placed</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Recharts Graph */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold flex items-center justify-between">
            <span>3-Year Salary CTC Placement Trends (₹ LPA)</span>
            <span className="text-xs font-normal text-slate-500">2022 - 2024</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="year" stroke="#64748B" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748B" fontSize={12} tickLine={false} unit=" LPA" />
                <Tooltip
                  formatter={(value: number) => [`₹${value} LPA`, 'CTC']}
                  contentStyle={{ backgroundColor: '#1E293B', borderRadius: '8px', color: '#FFF', border: 'none' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Bar dataKey="Highest" fill="#8B5CF6" radius={[4, 4, 0, 0]} name="Highest CTC" />
                <Bar dataKey="Average" fill="#0066FF" radius={[4, 4, 0, 0]} name="Average CTC" />
                <Bar dataKey="Median" fill="#10B981" radius={[4, 4, 0, 0]} name="Median CTC" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
