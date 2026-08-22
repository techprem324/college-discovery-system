# Software Requirements Specification (SRS) — CampusIQ

## 1. Interface & Component Specifications

- **Input Controls**: Dual-thumb slider for fee range, multi-select checkboxes for stream & location, rank input with immediate Zod format validation.
- **Data Grids**: Responsive CSS Grid system collapsing from 3 columns on desktop (> 1024px) to single-column cards on mobile (< 768px).
- **Loading & Fallbacks**: Skeleton screens matching final component dimensions to prevent Cumulative Layout Shift (CLS).

---

## 2. Input Validation Matrix (Zod Schemas)

```typescript
// types/predictor.ts
import { z } from "zod";

export const PredictorInputSchema = z.object({
  exam: z.enum(["JEE_MAIN", "JEE_ADVANCED", "NEET", "GATE", "CAT"], {
    required_error: "Please select an entrance exam",
  }),
  rank: z
    .number({ invalid_type_error: "Rank must be a valid number" })
    .int("Rank must be a whole number")
    .positive("Rank must be greater than 0")
    .max(1500000, "Rank exceeds maximum valid range"),
  category: z.enum(["OPEN", "OBC_NCL", "SC", "ST", "EWS"], {
    required_error: "Please select your category",
  }),
  homeState: z.string().min(2, "Please select your home state"),
  preferredBranch: z.array(z.string()).min(1, "Select at least one branch"),
  maxAnnualFee: z.number().optional(),
});

export type PredictorInput = z.infer<typeof PredictorInputSchema>;
```

---

## 3. Component State Contract

```typescript
export type UIState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: { code: string; message: string } };
```

---

## 4. Domain Data Interfaces

```typescript
export interface College {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  location: { city: string; state: string; campusAreaAcres?: number };
  establishedYear: number;
  ownership: 'PUBLIC' | 'PRIVATE' | 'GOVERNMENT_AIDED';
  nirfRank: number;
  naacGrade: string;
  overallRating: number;
  popularStreams: string[];
  averagePackageLpa: number;
  highestPackageLpa: number;
  medianPackageLpa: number;
  placementPercentage: number;
  topRecruiters: string[];
  yearlyPlacements: Array<{ year: number; highestPackageLpa: number; avgPackageLpa: number; medianPackageLpa: number }>;
  feePerYearMin: number;
  feePerYearMax: number;
  feeStructure: { tuitionFeePerYear: number; hostelFeePerYear: number; scholarshipCriteria: string[] };
  cutoffs: Array<{ exam: string; category: string; branch: string; closingRank: number }>;
}
```
