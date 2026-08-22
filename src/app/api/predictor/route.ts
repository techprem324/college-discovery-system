import { NextRequest, NextResponse } from "next/server";
import { PredictorInputSchema } from "@/types/predictor";
import { evaluatePredictorMatches } from "@/lib/predictor-engine";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = PredictorInputSchema.parse(body);
    const result = evaluatePredictorMatches(validated);

    return NextResponse.json(result);
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation Error", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: error.message || "Failed to process predictor evaluation" },
      { status: 500 }
    );
  }
}
