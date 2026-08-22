import { STUDENT_REVIEWS_MOCK } from '@/lib/mock-data';
import { ReviewCard } from '@/components/modules/college-detail/ReviewCard';

export default function CollegeReviewsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900">Verified Student Reviews & Feedback</h3>
        <span className="text-xs text-slate-500 font-semibold">{STUDENT_REVIEWS_MOCK.length} verified reviews</span>
      </div>

      <div className="space-y-4">
        {STUDENT_REVIEWS_MOCK.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
