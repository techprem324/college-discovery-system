import { PredictorWizard } from '@/components/modules/predictor/PredictorWizard';

export default function PredictorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Cutoff & Admission Predictor Engine
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Match your competitive entrance exam rank against historical institution cutoff benchmarks. Categorized into Safe, Target, and Dream recommendations.
        </p>
      </div>

      <PredictorWizard />
    </div>
  );
}
