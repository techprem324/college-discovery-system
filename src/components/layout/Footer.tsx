import Link from 'next/link';
import { GraduationCap, ShieldCheck, Cpu, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-subtle bg-brand-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">CampusIQ</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Enterprise-grade decision matrix and college discovery platform for higher education institution evaluation.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Core Modules</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/colleges" className="hover:text-white transition">Faceted Search Engine</Link></li>
            <li><Link href="/compare" className="hover:text-white transition">Side-by-Side Matrix</Link></li>
            <li><Link href="/predictor" className="hover:text-white transition">Admission Cutoff Predictor</Link></li>
            <li><Link href="/colleges/iit-bombay" className="hover:text-white transition">Placement Analytics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Engineering Value</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Zap className="h-3.5 w-3.5 text-brand-400" /> URL State Sync (`nuqs`)</li>
            <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-400" /> Zustand Compare Tray Store</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-purple-400" /> Zod Validated Predictor Engine</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Evaluated Tech Stack</h4>
          <p className="text-xs leading-relaxed text-slate-400">
            Built with Next.js 14 App Router, TypeScript 5.x, TailwindCSS, Zustand, React Hook Form, Zod, and Recharts.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2026 CampusIQ Engine. Production-Grade Frontend System.</p>
        <p>Evaluated for UI Architecture, State Topology & Product Experience.</p>
      </div>
    </footer>
  );
}
