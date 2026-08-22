import { FeeStructure, PopularCourse } from '@/types/college';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

interface FeeBreakdownTableProps {
  feeStructure: FeeStructure;
  courses: PopularCourse[];
}

export function FeeBreakdownTable({ feeStructure, courses }: FeeBreakdownTableProps) {
  return (
    <div className="space-y-6">
      {/* Course-Wise Annual Fees */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold">Course-Wise Annual Fee Structure</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
                  <th className="p-4">Program / Degree</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Annual Fee</th>
                  <th className="p-4">Avg CTC Offered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {courses.map((course) => (
                  <tr key={course.name} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-bold text-slate-900">{course.name}</td>
                    <td className="p-4 text-slate-600">{course.durationYears} Years</td>
                    <td className="p-4 font-bold text-brand-700">{formatCurrency(course.annualFee)} / year</td>
                    <td className="p-4 text-emerald-700 font-semibold">{course.avgPackage} LPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Auxiliary Charges Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-bold">Additional Auxiliary Fees</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-slate-600">Hostel & Mess Charges (Annual)</span>
              <span className="font-bold text-slate-900">{formatCurrency(feeStructure.hostelFeePerYear)}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-slate-600">One-Time Caution Deposit (Refundable)</span>
              <span className="font-bold text-slate-900">{formatCurrency(feeStructure.oneTimeCautionDeposit)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Other Academic & Lab Fees</span>
              <span className="font-bold text-slate-900">{formatCurrency(feeStructure.otherAcademicCharges)}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-brand-50/50 border-brand-200">
          <CardHeader>
            <CardTitle className="text-sm font-bold text-brand-900 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-600" /> Scholarship & Waiver Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-brand-800">
            {feeStructure.scholarshipCriteria.map((c, idx) => (
              <p key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="font-bold text-brand-600">•</span>
                <span>{c}</span>
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
