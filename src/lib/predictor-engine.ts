import { MOCK_COLLEGES } from "./mock-data";
import { PredictorInput, PredictorResponse, PredictorMatchResult, MatchTier } from "@/types/predictor";

export function evaluatePredictorMatches(input: PredictorInput): PredictorResponse {
  const matches: PredictorMatchResult[] = [];

  MOCK_COLLEGES.forEach((college) => {
    // Find cutoffs for selected exam
    const matchingCutoffs = college.cutoffs.filter((cutoff) => {
      const examMatches = cutoff.exam === input.exam;
      const categoryMatches = cutoff.category === input.category || cutoff.category === 'OPEN';
      return examMatches && categoryMatches;
    });

    matchingCutoffs.forEach((cutoff) => {
      // Check branch filter if branch is specified
      if (input.preferredBranch && input.preferredBranch.length > 0) {
        const matchesBranch = input.preferredBranch.some((b) =>
          cutoff.branch.toLowerCase().includes(b.toLowerCase()) || b === "ALL"
        );
        if (!matchesBranch) return;
      }

      const closingRank = cutoff.closingRank;
      const userRank = input.rank;
      const delta = closingRank - userRank;

      let matchTier: MatchTier;
      let probability: number;
      let reason: string;

      if (userRank <= closingRank * 0.8) {
        // User rank is significantly better than closing rank (Safe match)
        matchTier = 'Safe';
        probability = Math.min(98, Math.round(85 + ((closingRank - userRank) / closingRank) * 15));
        reason = `Your rank (${userRank.toLocaleString('en-IN')}) comfortably clears the historical closing rank of ${closingRank.toLocaleString('en-IN')}.`;
      } else if (userRank <= closingRank * 1.15) {
        // User rank is within competitive range (Target match)
        matchTier = 'Target';
        probability = Math.round(55 + ((closingRank * 1.15 - userRank) / (closingRank * 0.35)) * 28);
        reason = `Your rank (${userRank.toLocaleString('en-IN')}) is highly aligned with the target closing cutoff of ${closingRank.toLocaleString('en-IN')}.`;
      } else if (userRank <= closingRank * 1.4) {
        // User rank is ambitious (Dream match)
        matchTier = 'Dream';
        probability = Math.max(20, Math.round(25 + ((closingRank * 1.4 - userRank) / (closingRank * 0.25)) * 25));
        reason = `This institution is competitive (cutoff ${closingRank.toLocaleString('en-IN')}), but achievable with spot round shifts.`;
      } else {
        // Unlikely match
        return;
      }

      matches.push({
        college,
        branch: cutoff.branch,
        closingRank,
        userRank,
        cutoffDelta: delta,
        matchTier,
        matchProbabilityPercentage: probability,
        reason
      });
    });
  });

  // Sort matches by match tier priority (Safe -> Target -> Dream) then by probability
  const tierOrder: Record<MatchTier, number> = { Safe: 1, Target: 2, Dream: 3 };
  matches.sort((a, b) => {
    if (tierOrder[a.matchTier] !== tierOrder[b.matchTier]) {
      return tierOrder[a.matchTier] - tierOrder[b.matchTier];
    }
    return b.matchProbabilityPercentage - a.matchProbabilityPercentage;
  });

  const safeCount = matches.filter(m => m.matchTier === 'Safe').length;
  const targetCount = matches.filter(m => m.matchTier === 'Target').length;
  const dreamCount = matches.filter(m => m.matchTier === 'Dream').length;

  return {
    userInputs: input,
    summary: {
      totalMatches: matches.length,
      safeCount,
      targetCount,
      dreamCount
    },
    matches
  };
}
