import { MOCK_COLLEGES } from '@/lib/mock-data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { Building2, CheckCircle2, Award, Users, BookOpen, GraduationCap } from 'lucide-react';
import { formatCurrency, formatLakhs } from '@/lib/utils';

export default function CollegeOverviewPage({ params }: { params: { slug: string } }) {
  const college = MOCK_COLLEGES.find((c) => c.slug === params.slug || c.id === params.slug);

  if (!college) notFound();

  return (
    <div className="space-y-6">
      {/* About Institution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Building2 className="h-5 w-5 text-brand-600" />
            About {college.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>{college.aboutText}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="rounded-standard bg-slate-50 p-4 border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">Key Highlights</h4>
              <ul className="space-y-1.5 text-xs">
                {college.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-standard bg-brand-50/50 p-4 border border-brand-200/80 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-brand-800">Campus & Academic Stats</h4>
              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div>
                  <span className="text-slate-500 block">Total Students</span>
                  <span className="font-bold text-brand-900 text-sm">{college.studentCount.toLocaleString('en-IN')}+</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Faculty Members</span>
                  <span className="font-bold text-brand-900 text-sm">{college.facultyCount}+</span>
                </div>
                <div>
                  <span className="text-slate-500 block">NIRF Rank</span>
                  <span className="font-bold text-brand-900 text-sm">#{college.nirfRank}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">NAAC Grade</span>
                  <span className="font-bold text-brand-900 text-sm">{college.naacGrade}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Programs Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            Popular Academic Degrees & Offerings
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
                  <th className="p-4">Degree / Program</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Total Seats</th>
                  <th className="p-4">Annual Fee</th>
                  <th className="p-4">Avg Placement CTC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {college.courses.map((course) => (
                  <tr key={course.name} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-bold text-slate-900">{course.name}</td>
                    <td className="p-4 text-slate-600">{course.durationYears} Years</td>
                    <td className="p-4 text-slate-600 font-medium">{course.totalSeats} Intake</td>
                    <td className="p-4 font-bold text-brand-700">{formatCurrency(course.annualFee)} / year</td>
                    <td className="p-4 text-emerald-700 font-semibold">{course.avgPackage} LPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
