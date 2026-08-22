import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';
import { CompareTray } from '@/components/modules/compare/CompareTray';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CampusIQ — College Discovery & Decision Matrix Platform',
  description: 'Enterprise-grade higher education institution evaluation engine with multi-faceted filtering, side-by-side comparison matrix, cutoff predictor wizard, and placement analytics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex min-h-full flex-col bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="flex-1 pb-24 md:pb-12">{children}</main>
        <CompareTray />
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
