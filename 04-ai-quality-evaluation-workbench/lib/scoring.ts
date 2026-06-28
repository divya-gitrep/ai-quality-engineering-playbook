import type { Scores } from "@/data/evaluationCriteria";

export type RiskLevel = "Acceptable" | "Needs Review" | "High Risk";
export type FinalDecision = "Pass" | "Needs Review" | "Fail";

export interface EvaluationResult {
  average: number;
  riskLevel: RiskLevel;
  recommendation: string;
  finalDecision: FinalDecision;
}

const outcomes: Record<RiskLevel, Omit<EvaluationResult, "average" | "riskLevel">> = {
  Acceptable: {
    recommendation: "Response can be used with normal QA review.",
    finalDecision: "Pass",
  },
  "Needs Review": {
    recommendation: "Response needs human review before use.",
    finalDecision: "Needs Review",
  },
  "High Risk": {
    recommendation: "Response should not be trusted without correction.",
    finalDecision: "Fail",
  },
};

export function calculateAverage(scores: Scores): number {
  const values = Object.values(scores);
  const average = values.reduce((total, score) => total + score, 0) / values.length;
  return Math.round(average * 10) / 10;
}

export function getRiskLevel(average: number): RiskLevel {
  if (average >= 4.2) return "Acceptable";
  if (average >= 3) return "Needs Review";
  return "High Risk";
}

export function evaluateScores(scores: Scores): EvaluationResult {
  const average = calculateAverage(scores);
  const riskLevel = getRiskLevel(average);
  return { average, riskLevel, ...outcomes[riskLevel] };
}
