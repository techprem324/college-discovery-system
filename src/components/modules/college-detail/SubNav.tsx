'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, TrendingUp, DollarSign, MessageSquare } from 'lucide-react';

interface SubNavProps {
  slug: string;
}

export function SubNav({ slug }: SubNavProps) {
  const pathname = usePathname();
  const basePath = `/colleges/${slug}`;

  const tabs = [
    { name: 'Overview', href: basePath, icon: LayoutDashboard, exact: true },
    { name: 'Placements & CTC', href: `${basePath}/placements`, icon: TrendingUp },
    { name: 'Fees & Scholarships', href: `${basePath}/fees`, icon: DollarSign },
    { name: 'Student Reviews', href: `${basePath}/reviews`, icon: MessageSquare },
  ];

  return (
    <div className="sticky top-16 z-30 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 sm:px-6 lg:px-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.exact
            ? pathname === tab.href
            : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap border-b-2 py-3 px-4 text-xs font-bold transition-all",
                isActive
                  ? "border-brand-600 text-brand-600 font-bold"
                  : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900"
              )}
            >
              <Icon className={cn("h-4 w-4", isActive ? "text-brand-600" : "text-slate-400")} />
              <span>{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
