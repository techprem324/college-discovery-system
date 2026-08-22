'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCompareStore } from '@/stores/comparisonStore';
import { Search, Scale, Sparkles, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function MobileNav() {
  const pathname = usePathname();
  const selectedCollegeIds = useCompareStore((state) => state.selectedCollegeIds);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Discover', href: '/colleges', icon: Search },
    { label: 'Compare', href: '/compare', icon: Scale, badge: mounted ? selectedCollegeIds.length : 0 },
    { label: 'Predictor', href: '/predictor', icon: Sparkles },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t border-slate-200 bg-white/95 backdrop-blur-md md:hidden">
      <div className="grid h-16 grid-cols-4 items-center">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center py-1 text-[11px] font-medium transition-colors",
                isActive ? "text-brand-600 font-semibold" : "text-slate-500 hover:text-slate-900"
              )}
            >
              <div className="relative">
                <Icon className="h-5 w-5 mb-0.5" />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[9px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
