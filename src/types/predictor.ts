import { z } from "zod";
import { ExamType, ReservationCategory, College } from "./college";

export const PredictorInputSchema = z.object({
  exam: z.enum(["JEE_MAIN", "JEE_ADVANCED", "NEET", "GATE", "CAT"], {
    required_error: "Please select an entrance exam",
  }),
  rank: z
    .number({ invalid_type_error: "Rank must be a valid number" })
    .int("Rank must be a whole number")
    .positive("Rank must be greater than 0")
    .max(1500000, "Rank exceeds maximum valid limit (1,500,000)"),
  category: z.enum(["OPEN", "OBC_NCL", "SC", "ST", "EWS"], {
    required_error: "Please select your category",
  }),
  homeState: z.string().min(2, "Please select your home state"),
  preferredBranch: z.array(z.string()).min(1, "Select at least one preferred branch"),
  maxAnnualFee: z.number().optional(),
});

export type PredictorInput = z.infer<typeof PredictorInputSchema>;

export type MatchTier = 'Safe' | 'Target' | 'Dream';

export interface PredictorMatchResult {
  college: College;
  branch: string;
  closingRank: number;
  userRank: number;
  cutoffDelta: number; // positive = user rank is better than cutoff
  matchTier: MatchTier;
  matchProbabilityPercentage: number;
  reason: string;
}

export interface PredictorResponse {
  userInputs: PredictorInput;
  summary: {
    totalMatches: number;
    safeCount: number;
    targetCount: number;
    dreamCount: number;
  };
  matches: PredictorMatchResult[];
}
