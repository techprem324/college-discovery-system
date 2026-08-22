'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCompareStore } from '@/stores/comparisonStore';
import { GraduationCap, Scale, Sparkles, Search, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const selectedCollegeIds = useCompareStore((state) => state.selectedCollegeIds);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Discover Colleges', href: '/colleges', icon: Search },
    { name: 'Side-by-Side Compare', href: '/compare', icon: Scale, badge: mounted ? selectedCollegeIds.length : 0 },
    { name: 'Admission Predictor', href: '/predictor', icon: Sparkles, highlight: true },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-standard bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow group-hover:scale-105 transition-transform">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Campus<span className="text-brand-600">IQ</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Decision Matrix
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-2 rounded-standard px-4 py-2 text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-brand-50 text-brand-700 font-semibold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                  link.highlight && !isActive && "text-brand-600 bg-brand-50/50 hover:bg-brand-100"
                )}
              >
                <Icon className={cn("h-4 w-4", isActive ? "text-brand-600" : "text-slate-500")} />
                <span>{link.name}</span>
                
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white shadow-sm animate-pulse-subtle">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/predictor"
            className="hidden sm:inline-flex items-center gap-2 rounded-standard bg-gradient-to-r from-brand-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-glow hover:scale-[1.02] transition-all"
          >
            <Sparkles className="h-4 w-4 text-amber-300 animate-spin-slow" />
            <span>Predict Cutoff</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
