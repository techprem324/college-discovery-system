# Frontend Systems Architecture — CampusIQ

## 1. Directory & App Router Structure

```
d:/student1/src/
├── app/
│   ├── layout.tsx                 # Root layout (Navbar, CompareTray, MobileNav)
│   ├── page.tsx                   # Landing page portal
│   ├── api/
│   │   ├── colleges/route.ts       # Faceted search API endpoint
│   │   ├── colleges/[slug]/route.ts# Detailed profile API endpoint
│   │   └── predictor/route.ts      # Predictor algorithm API endpoint
│   ├── colleges/
│   │   ├── page.tsx               # Listing & Search view
│   │   └── [slug]/
│   │       ├── layout.tsx         # QuickStatsBanner & SubNav layout
│   │       ├── page.tsx           # Overview
│   │       ├── placements/page.tsx # Salary CTC Recharts visualizer
│   │       ├── fees/page.tsx      # Fee structure breakdown
│   │       └── reviews/page.tsx   # Verified student reviews
│   ├── compare/
│   │   └── page.tsx               # Side-by-Side comparison screen
│   └── predictor/
│       └── page.tsx               # Multi-step cutoff wizard
├── components/
│   ├── ui/                        # Reusable primitives (Button, Card, Input, Slider, Badge)
│   ├── layout/                    # Navbar, Footer, MobileNav
│   └── modules/                   # Domain features
│       ├── search/                # FilterPanel, SearchBar, CollegeCard, ActiveFilters
│       ├── compare/               # CompareTray, ComparisonTable, MetricDiffCell
│       ├── college-detail/        # PlacementAnalyticsChart, FeeBreakdownTable, QuickStatsBanner
│       └── predictor/             # PredictorWizard, MatchResultCard
├── hooks/
│   ├── useURLFilters.ts           # Bidirectional URL search param sync
│   └── useDebounce.ts             # Input debouncer
├── stores/
│   └── comparisonStore.ts         # Zustand persistent store (max 3 items)
└── lib/
    ├── mock-data.ts               # Database of 30+ college profiles
    ├── predictor-engine.ts        # Algorithmic rank/cutoff match classifier
    └── utils.ts                   # Tailwind merge cn() & formatters
```

---

## 2. State Topology Matrix

| State Layer | Management Mechanism | Scope & Purpose |
| --- | --- | --- |
| **URL State** | `useSearchParams` / `useRouter` | Search query `q`, stream array, state location array, fee limits `feeMin`/`feeMax`, sort order. |
| **Global Client State** | `Zustand` (`useCompareStore`) | Persistent comparison tray array (`selectedCollegeIds`), max capacity limit guardrails. |
| **Form State** | `React Hook Form` + `Zod` | Predictor wizard multi-step form validation & submit payloads. |
| **Server Cache** | Next.js API Routes (`/api/*`) | Filtered college data, detailed institution profiles, predictor matches. |

---

## 3. Data Flow Workflows

### Multi-Faceted Search Flow
```
User inputs Filter/Search ──> useURLFilters (URL SearchParams Sync) ──> Next.js API Route (/api/colleges) ──> Faceted Counting Engine ──> Skeleton / Render Cards
```

### Compare Tray Flow
```
Click "Add to Compare" ──> Zustand Store validates count <= 3 ──> Append ID & Persist LocalStorage ──> Animate Floating Drawer ──> Navigate to /compare?ids=col1,col2
```
