export type OwnershipType = 'PUBLIC' | 'PRIVATE' | 'GOVERNMENT_AIDED';
export type CourseStream = 'Engineering' | 'Management' | 'Medical' | 'Design' | 'Law' | 'Sciences';
export type ExamType = 'JEE_MAIN' | 'JEE_ADVANCED' | 'NEET' | 'GATE' | 'CAT';
export type ReservationCategory = 'OPEN' | 'OBC_NCL' | 'SC' | 'ST' | 'EWS';

export interface Location {
  city: string;
  state: string;
  campusAreaAcres?: number;
}

export interface PopularCourse {
  name: string;
  durationYears: number;
  totalSeats: number;
  annualFee: number;
  avgPackage: number;
}

export interface CutoffDetail {
  exam: ExamType;
  category: ReservationCategory;
  branch: string;
  openingRank: number;
  closingRank: number;
  year: number;
}

export interface YearlyPlacementData {
  year: number;
  highestPackageLpa: number;
  avgPackageLpa: number;
  medianPackageLpa: number;
  placementPercentage: number;
  studentsPlaced: number;
}

export interface FeeStructure {
  tuitionFeePerYear: number;
  hostelFeePerYear: number;
  oneTimeCautionDeposit: number;
  otherAcademicCharges: number;
  scholarshipCriteria: string[];
}

export interface StudentReview {
  id: string;
  authorName: string;
  batchYear: number;
  course: string;
  ratingOverall: number;
  ratingFaculty: number;
  ratingPlacements: number;
  ratingInfrastructure: number;
  ratingCampusLife: number;
  title: string;
  comment: string;
  verifiedStudent: boolean;
  date: string;
}

export interface College {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  location: Location;
  establishedYear: number;
  ownership: OwnershipType;
  nirfRank: number;
  naacGrade: string; // e.g. "A++", "A+", "A"
  overallRating: number; // 0 to 5
  popularStreams: CourseStream[];
  
  // Placement stats
  averagePackageLpa: number;
  highestPackageLpa: number;
  medianPackageLpa: number;
  placementPercentage: number;
  topRecruiters: string[];
  yearlyPlacements: YearlyPlacementData[];
  
  // Fees
  feePerYearMin: number;
  feePerYearMax: number;
  feeStructure: FeeStructure;
  
  // Cutoffs data
  cutoffs: CutoffDetail[];
  
  // Courses
  courses: PopularCourse[];
  
  // Media & Info
  logoUrl: string;
  coverImageUrl: string;
  galleryImages: string[];
  highlights: string[];
  aboutText: string;
  facultyCount: number;
  studentCount: number;
}

export interface FilterState {
  q: string;
  stream: string[];
  state: string[];
  ownership: string[];
  feeMin: number;
  feeMax: number;
  maxNirf: number;
  minRating: number;
  sortBy: 'nirfAsc' | 'packageDesc' | 'feeAsc' | 'ratingDesc';
}

export interface FacetCounts {
  byStream: Record<string, number>;
  byState: Record<string, number>;
  byOwnership: Record<string, number>;
  byNirfRange: {
    top10: number;
    top50: number;
    top100: number;
  };
}

export interface CollegeSearchResponse {
  colleges: College[];
  total: number;
  facets: FacetCounts;
}
