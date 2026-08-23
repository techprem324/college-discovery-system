# CampusIQ — Production-Grade College Discovery & Decision Engine

CampusIQ is an enterprise-grade higher education institution evaluation platform designed to showcase mastery in frontend architecture, state topology, data visualization, and complex form state machines.

---

## 🚀 Key Features

### 1. Multi-Faceted Search & Faceted Filter Matrix (`/colleges`)
- **URL-First State Sync**: Uses search parameters (`?q=&stream=&state=&feeMin=&feeMax=&ownership=&sort=`) as the single source of truth for deep-linkable queries.
- **Faceted Counting Engine**: Computes real-time match counters for each filter facet.
- **Debounced Input**: Smooth search input processing without UI/UX flicker.
- **Responsive Layout**: Desktop sticky sidebar filter panel paired with a triggerable mobile slide-over drawer.

### 2. Dynamic Side-by-Side Comparison Matrix (`/compare` & `CompareTray`)
- **Persistent Global State**: Zustand store backed by `persist` middleware storing up to 3 selected institutions.
- **Floating Comparison Drawer**: Floating bottom drawer displaying currently pinned colleges, thumbnail logos, NIRF ranks, and quick clear actions.
- **Automated Metric Highlight Engine**: Dynamically calculates and highlights "Best in Category" cells (Lowest Tuition Fee, Top NIRF Rank, Highest CTC Package, Highest Student Rating).

### 3. Institutional Deep-Dive & Analytics (`/colleges/[slug]`)
- **Interactive Data Visualization**: Powered by `recharts` to plot 3-year placement salary CTC trends (Highest, Average, and Median).
- **Sub-Route Navigation**: Deep linkable tabbed routing (`/overview`, `/placements`, `/fees`, `/reviews`).
- **Fee & Auxiliary Breakdown**: Comprehensive course-wise annual fees, hostel fees, and scholarship eligibility criteria.

### 4. Admission Cutoff & Rank Predictor (`/predictor`)
- **Interactive Multi-Step Wizard**: Form state machine built with `react-hook-form` and `zod` schema validation.
- **Algorithmic Match Classifier**: Evaluates candidate rank against historical admission cutoffs and categorizes matches into:
  - **Safe** (Cutoff rank is ≥ 25% higher than user rank)
  - **Target** (Cutoff rank is within ±20% of user rank)
  - **Dream** (Cutoff rank is 10-30% more competitive)

---

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5.x (Strict Mode)
- **Styling**: Tailwind CSS + `clsx` + `tailwind-merge` + `class-variance-authority`
- **State Management**:
  - Global State: `Zustand` (with LocalStorage persistence)
  - URL State: `Next.js Navigation / SearchParams`
- **Forms & Validation**: `react-hook-form` + `zod`
- **Data Visualization**: `recharts`
- **Icons & UI Primitives**: `lucide-react`, `@radix-ui/react-slider`, `@radix-ui/react-tabs`

---

## 🏛 Architecture Decision Records (ADRs)

### ADR 001: Bidirectional URL Parameter State for Search
- **Status**: Accepted
- **Decision**: Manage search query, stream filters, fee sliders, and location facets in URL search parameters rather than transient component state.
- **Consequence**: Every filter combination is 100% deep-linkable, shareable, and survives page reloads.

### ADR 002: Zustand Store for Comparison Tray Persistence
- **Status**: Accepted
- **Decision**: Maintain comparison matrix selections in a global Zustand store with `persist` middleware.
- **Consequence**: Users can pin colleges across any page (Home, Search, Details) without losing selections or triggering unnecessary full page re-renders. Max 3-item limit is enforced with guardrails.

### ADR 003: Compound Component Pattern for Data Grids
- **Status**: Accepted
- **Decision**: Build compound components (`<ComparisonTable>`, `<MetricDiffCell>`) for matrix data rendering.
- **Consequence**: Decoupled rendering logic allows instant highlighting of optimal metrics without massive prop-drilling.

---

## 💻 Local Development Setup

```bash
# Clone the repository
git clone https://github.com/your-username/campusiq.git
cd campusiq

# Install dependencies
npm install

# Run development server
npm run dev

# Run TypeScript type checker
npm run type-check

# Build for production
npm run build
```

The application will be accessible at `http://localhost:3000`.
