import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MOCK_COLLEGES } from '@/lib/mock-data';
import { CollegeCard } from '@/components/modules/search/CollegeCard';
import { Sparkles, Search, Scale, Trophy, TrendingUp, ShieldCheck, ArrowRight, GraduationCap } from 'lucide-react';

export default function LandingPage() {
  const topColleges = MOCK_COLLEGES.slice(0, 3);

  return (
    <div className="space-y-16 py-8">
      {/* Hero Portal Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-900 via-slate-900 to-slate-950 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 py-16 sm:py-24 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
          <Badge className="bg-brand-500/20 text-brand-300 border border-brand-400/30 px-3 py-1 font-semibold text-xs backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 mr-1 text-amber-300" />
            Frontend Systems Evaluation Platform
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Data-Driven College Discovery & <span className="bg-gradient-to-r from-brand-400 to-indigo-300 bg-clip-text text-transparent">Decision Matrix</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminate higher education choice anxiety. Evaluate top institutions side-by-side across NIRF rankings, fee structures, verified student reviews, placement CTC trends, and cutoffs.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/colleges" className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2 font-bold bg-brand-500 hover:bg-brand-600 shadow-glow">
                <Search className="h-5 w-5" />
                <span>Browse & Filter Colleges</span>
              </Button>
            </Link>

            <Link href="/predictor" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full gap-2 font-bold bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Sparkles className="h-5 w-5 text-amber-300" />
                <span>Predict Admission Cutoff</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">High-Impact Frontend Engineering Features</h2>
          <p className="text-sm text-slate-500">Evaluated across state management, reusable architecture, and interactive UX.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-slate-200 bg-white p-6 space-y-3 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-standard bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">1. Multi-Faceted Search Engine</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deep-linkable URL search state synchronization (`nuqs` engine), instant facet counter calculations, and debounced input rendering.
            </p>
            <Link href="/colleges" className="text-xs font-bold text-brand-600 flex items-center gap-1 hover:underline pt-2">
              Launch Search <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>

          <Card className="border border-slate-200 bg-white p-6 space-y-3 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-standard bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Scale className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">2. Side-by-Side Comparison Matrix</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Global Zustand comparison store with LocalStorage persistence, persistent floating drawer, and dynamic metric diff highlighting.
            </p>
            <Link href="/compare" className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:underline pt-2">
              Open Matrix <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>

          <Card className="border border-slate-200 bg-white p-6 space-y-3 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-standard bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">3. Admission Cutoff Predictor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Multi-step wizard state machine with React Hook Form + Zod schema validation, outputting classified Safe, Target, and Dream matches.
            </p>
            <Link href="/predictor" className="text-xs font-bold text-purple-600 flex items-center gap-1 hover:underline pt-2">
              Run Predictor <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>
        </div>
      </section>

      {/* Featured Institutes Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Featured Tier-1 Institutions</h2>
            <p className="text-xs text-slate-500">Discover top NIRF ranked universities with verified placement data</p>
          </div>

          <Link href="/colleges">
            <Button variant="ghost" size="sm" className="text-brand-600 hover:text-brand-800 font-semibold gap-1">
              <span>View All Colleges</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>
    </div>
  );
}
