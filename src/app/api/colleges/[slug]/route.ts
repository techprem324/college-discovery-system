import { NextRequest, NextResponse } from "next/server";
import { MOCK_COLLEGES, STUDENT_REVIEWS_MOCK } from "@/lib/mock-data";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const college = MOCK_COLLEGES.find((c) => c.slug === slug || c.id === slug);

  if (!college) {
    return NextResponse.json({ error: "College not found" }, { status: 404 });
  }

  return NextResponse.json({
    college,
    reviews: STUDENT_REVIEWS_MOCK
  });
}
