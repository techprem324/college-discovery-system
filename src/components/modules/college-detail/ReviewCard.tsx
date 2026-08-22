import { StudentReview } from '@/types/college';
import { Card, CardContent } from '@/components/ui/card';
import { Star, CheckCircle, UserCheck } from 'lucide-react';

interface ReviewCardProps {
  review: StudentReview;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="border border-slate-200 bg-white p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-brand-100 font-bold text-brand-700 flex items-center justify-center text-sm">
            {review.authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-sm text-slate-900">{review.authorName}</h4>
              {review.verifiedStudent && (
                <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  <UserCheck className="h-3 w-3 mr-0.5" /> Verified Student
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">{review.course} • Batch of {review.batchYear}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-standard border border-amber-200 text-xs font-bold text-amber-900">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span>{review.ratingOverall} / 5.0</span>
        </div>
      </div>

      <h5 className="font-bold text-sm text-slate-800">{review.title}</h5>
      <p className="text-xs text-slate-600 leading-relaxed">{review.comment}</p>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
        <div>Faculty: <span className="font-bold text-slate-700">{review.ratingFaculty}/5</span></div>
        <div>Placements: <span className="font-bold text-slate-700">{review.ratingPlacements}/5</span></div>
        <div>Campus Life: <span className="font-bold text-slate-700">{review.ratingCampusLife}/5</span></div>
      </div>
    </Card>
  );
}
