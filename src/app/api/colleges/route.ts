import { NextRequest, NextResponse } from "next/server";
import { MOCK_COLLEGES } from "@/lib/mock-data";
import { College, FacetCounts } from "@/types/college";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const q = (searchParams.get("q") || "").toLowerCase().trim();
  const stream = searchParams.get("stream") ? searchParams.get("stream")!.split(",") : [];
  const state = searchParams.get("state") ? searchParams.get("state")!.split(",") : [];
  const ownership = searchParams.get("ownership") ? searchParams.get("ownership")!.split(",") : [];
  const feeMin = searchParams.get("feeMin") ? Number(searchParams.get("feeMin")) : 0;
  const feeMax = searchParams.get("feeMax") ? Number(searchParams.get("feeMax")) : 1500000;
  const maxNirf = searchParams.get("maxNirf") ? Number(searchParams.get("maxNirf")) : 100;
  const minRating = searchParams.get("minRating") ? Number(searchParams.get("minRating")) : 0;
  const sortBy = searchParams.get("sortBy") || "nirfAsc";

  // Filter colleges
  let filtered = MOCK_COLLEGES.filter((col) => {
    // Search query
    if (q) {
      const matchName = col.name.toLowerCase().includes(q) || col.shortName.toLowerCase().includes(q);
      const matchCity = col.location.city.toLowerCase().includes(q);
      const matchCourse = col.popularStreams.some(s => s.toLowerCase().includes(q));
      if (!matchName && !matchCity && !matchCourse) return false;
    }

    // Streams
    if (stream.length > 0) {
      const hasStream = col.popularStreams.some(s => stream.includes(s));
      if (!hasStream) return false;
    }

    // State
    if (state.length > 0) {
      if (!state.includes(col.location.state)) return false;
    }

    // Ownership
    if (ownership.length > 0) {
      if (!ownership.includes(col.ownership)) return false;
    }

    // Fees
    if (col.feePerYearMin > feeMax || col.feePerYearMax < feeMin) {
      return false;
    }

    // NIRF
    if (col.nirfRank > maxNirf) return false;

    // Rating
    if (col.overallRating < minRating) return false;

    return true;
  });

  // Sort
  if (sortBy === "nirfAsc") {
    filtered.sort((a, b) => a.nirfRank - b.nirfRank);
  } else if (sortBy === "packageDesc") {
    filtered.sort((a, b) => b.averagePackageLpa - a.averagePackageLpa);
  } else if (sortBy === "feeAsc") {
    filtered.sort((a, b) => a.feePerYearMin - b.feePerYearMin);
  } else if (sortBy === "ratingDesc") {
    filtered.sort((a, b) => b.overallRating - a.overallRating);
  }

  // Calculate Facet Counts
  const byStream: Record<string, number> = {};
  const byState: Record<string, number> = {};
  const byOwnership: Record<string, number> = {};
  let top10 = 0, top50 = 0, top100 = 0;

  MOCK_COLLEGES.forEach((col) => {
    col.popularStreams.forEach((s) => {
      byStream[s] = (byStream[s] || 0) + 1;
    });
    byState[col.location.state] = (byState[col.location.state] || 0) + 1;
    byOwnership[col.ownership] = (byOwnership[col.ownership] || 0) + 1;
    
    if (col.nirfRank <= 10) top10++;
    if (col.nirfRank <= 50) top50++;
    if (col.nirfRank <= 100) top100++;
  });

  const facets: FacetCounts = {
    byStream,
    byState,
    byOwnership,
    byNirfRange: { top10, top50, top100 }
  };

  return NextResponse.json({
    colleges: filtered,
    total: filtered.length,
    facets
  });
}
