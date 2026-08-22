'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PredictorInputSchema, PredictorInput, PredictorResponse } from '@/types/predictor';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MatchResultCard } from './MatchResultCard';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, RefreshCw, Layers } from 'lucide-react';

const EXAM_OPTIONS = [
  { value: 'JEE_MAIN', label: 'JEE Main (B.Tech / B.E.)' },
  { value: 'JEE_ADVANCED', label: 'JEE Advanced (IITs)' },
  { value: 'NEET', label: 'NEET UG (Medical / MBBS)' },
  { value: 'CAT', label: 'CAT (IIMs / MBA)' },
  { value: 'GATE', label: 'GATE (M.Tech / PSUs)' },
];

const CATEGORY_OPTIONS = [
  { value: 'OPEN', label: 'General / Open' },
  { value: 'OBC_NCL', label: 'OBC - Non Creamy Layer' },
  { value: 'SC', label: 'Scheduled Caste (SC)' },
  { value: 'ST', label: 'Scheduled Tribe (ST)' },
  { value: 'EWS', label: 'Economically Weaker Section (EWS)' },
];

const STATE_OPTIONS = [
  'Maharashtra', 'Delhi', 'Tamil Nadu', 'Rajasthan', 'Gujarat', 'Telangana', 'Karnataka', 'Uttar Pradesh'
];

const BRANCH_OPTIONS = [
  'Computer Science & Engineering',
  'Electrical Engineering',
  'Electronics & Communication',
  'Mechanical Engineering',
  'Mathematics & Computing',
  'MBBS',
  'MBA / Management',
];

export function PredictorWizard() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState<PredictorResponse | null>(null);
  const [activeTier, setActiveTier] = useState<'All' | 'Safe' | 'Target' | 'Dream'>('All');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<PredictorInput>({
    resolver: zodResolver(PredictorInputSchema),
    defaultValues: {
      exam: 'JEE_MAIN',
      rank: 4500,
      category: 'OPEN',
      homeState: 'Maharashtra',
      preferredBranch: ['Computer Science & Engineering', 'Electrical Engineering'],
    }
  });

  const selectedExam = watch('exam');
  const selectedCategory = watch('category');
  const selectedState = watch('homeState');
  const selectedBranches = watch('preferredBranch') || [];

  const handleBranchToggle = (branchName: string) => {
    const current = selectedBranches;
    const next = current.includes(branchName)
      ? current.filter(b => b !== branchName)
      : [...current, branchName];
    setValue('preferredBranch', next, { shouldValidate: true });
  };

  const onSubmit = async (data: PredictorInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/predictor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate cutoffs');
      }

      const resData: PredictorResponse = await response.json();
      setResults(resData);
      setStep(4); // Results step
    } catch (err: any) {
      alert(err.message || 'Error running predictor');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setStep(1);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Wizard Progress Indicator */}
      <div className="flex items-center justify-between px-2 sm:px-6">
        {[
          { num: 1, label: 'Exam & Rank' },
          { num: 2, label: 'Category & State' },
          { num: 3, label: 'Branch Choice' },
          { num: 4, label: 'Admission Results' },
        ].map((item) => (
          <div key={item.num} className="flex items-center gap-2">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all ${
                step === item.num
                  ? 'bg-brand-600 text-white shadow-glow ring-4 ring-brand-100'
                  : step > item.num
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              {step > item.num ? <CheckCircle2 className="h-5 w-5" /> : item.num}
            </div>
            <span
              className={`hidden sm:inline text-xs font-semibold ${
                step === item.num ? 'text-brand-700' : 'text-slate-500'
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1: Exam & Rank */}
      {step === 1 && (
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-600" />
              Step 1: Entrance Exam & Candidate Score
            </CardTitle>
            <CardDescription>
              Select your competitive entrance exam and enter your all-India or state rank.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Entrance Exam Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXAM_OPTIONS.map((exam) => (
                  <button
                    key={exam.value}
                    type="button"
                    onClick={() => setValue('exam', exam.value as any, { shouldValidate: true })}
                    className={`flex items-center justify-between p-3.5 rounded-standard border text-left text-xs font-bold transition ${
                      selectedExam === exam.value
                        ? 'border-brand-600 bg-brand-50 text-brand-800 shadow-sm'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{exam.label}</span>
                    {selectedExam === exam.value && <CheckCircle2 className="h-4 w-4 text-brand-600" />}
                  </button>
                ))}
              </div>
              {errors.exam && <p className="text-xs text-red-500">{errors.exam.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Candidate All India Rank (AIR) / Percentile Rank
              </label>
              <Input
                type="number"
                placeholder="e.g. 4500"
                {...register('rank', { valueAsNumber: true })}
                className="text-base font-bold text-slate-900"
              />
              {errors.rank && <p className="text-xs text-red-500 font-semibold">{errors.rank.message}</p>}
              <p className="text-[11px] text-slate-500">
                Enter your exact rank number (e.g. 4500 for AIR 4500).
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={() => setStep(2)} className="gap-2 font-semibold shadow-md">
              <span>Next: Category & State</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 2: Category & State */}
      {step === 2 && (
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Step 2: Quota, Category & Home State
            </CardTitle>
            <CardDescription>
              Cutoff benchmark ranks vary based on reservation categories and state quota allocations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Reservation Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CATEGORY_OPTIONS.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setValue('category', cat.value as any, { shouldValidate: true })}
                    className={`p-3 rounded-standard border text-left text-xs font-bold transition ${
                      selectedCategory === cat.value
                        ? 'border-brand-600 bg-brand-50 text-brand-800'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Home State (For State Quota Matching)
              </label>
              <select
                value={selectedState}
                onChange={(e) => setValue('homeState', e.target.value, { shouldValidate: true })}
                className="w-full rounded-standard border border-slate-200 bg-white p-3 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-brand-500"
              >
                {STATE_OPTIONS.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            <Button onClick={() => setStep(3)} className="gap-2 font-semibold shadow-md">
              <span>Next: Branch Preferences</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 3: Branch Selection & Submit */}
      {step === 3 && (
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Step 3: Preferred Academic Branches
            </CardTitle>
            <CardDescription>
              Select one or more target academic disciplines.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Select Branches
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BRANCH_OPTIONS.map((branchName) => {
                  const isChecked = selectedBranches.includes(branchName);
                  return (
                    <button
                      key={branchName}
                      type="button"
                      onClick={() => handleBranchToggle(branchName)}
                      className={`flex items-center justify-between p-3 rounded-standard border text-xs font-bold text-left transition ${
                        isChecked
                          ? 'border-brand-600 bg-brand-50 text-brand-800'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{branchName}</span>
                      {isChecked && <CheckCircle2 className="h-4 w-4 text-brand-600" />}
                    </button>
                  );
                })}
              </div>
              {errors.preferredBranch && (
                <p className="text-xs text-red-500 font-semibold">{errors.preferredBranch.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="gap-2 font-bold bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-glow"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" /> Evaluating Cutoffs...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 text-amber-300" /> Calculate Matches
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 4: Results Display */}
      {step === 4 && results && (
        <div className="space-y-6">
          {/* Summary Banner */}
          <div className="rounded-prominent bg-slate-900 text-white p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                  Cutoff Evaluation Complete
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  Found {results.summary.totalMatches} Institution Match Opportunities
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Based on AIR Rank #{results.userInputs.rank.toLocaleString('en-IN')} ({results.userInputs.exam}, Category: {results.userInputs.category})
                </p>
              </div>

              <Button onClick={handleReset} variant="outline" size="sm" className="bg-white/10 text-white border-slate-700 hover:bg-white/20">
                <RefreshCw className="h-4 w-4 mr-1" /> Re-predict
              </Button>
            </div>

            {/* Summary Tier Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800">
              <div className="rounded-standard bg-emerald-950/60 border border-emerald-800/80 p-3 text-center">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block">Safe Matches</span>
                <span className="text-xl font-bold text-emerald-300">{results.summary.safeCount}</span>
              </div>
              <div className="rounded-standard bg-amber-950/60 border border-amber-800/80 p-3 text-center">
                <span className="text-[10px] uppercase font-bold text-amber-400 block">Target Matches</span>
                <span className="text-xl font-bold text-amber-300">{results.summary.targetCount}</span>
              </div>
              <div className="rounded-standard bg-purple-950/60 border border-purple-800/80 p-3 text-center">
                <span className="text-[10px] uppercase font-bold text-purple-400 block">Dream Matches</span>
                <span className="text-xl font-bold text-purple-300">{results.summary.dreamCount}</span>
              </div>
            </div>
          </div>

          {/* Tier Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
            {(['All', 'Safe', 'Target', 'Dream'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`rounded-standard px-4 py-2 text-xs font-bold transition ${
                  activeTier === tier
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tier} Matches
              </button>
            ))}
          </div>

          {/* Matches List */}
          <div className="space-y-4">
            {results.matches
              .filter((m) => activeTier === 'All' || m.matchTier === activeTier)
              .map((match, idx) => (
                <MatchResultCard key={`${match.college.id}-${match.branch}-${idx}`} match={match} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
