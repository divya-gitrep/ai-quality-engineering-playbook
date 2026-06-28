export const evaluationCriteria = [
  { key: "accuracy", label: "Accuracy", description: "Facts and claims are correct and appropriately grounded." },
  { key: "relevance", label: "Relevance", description: "The response addresses the stated task without distracting content." },
  { key: "completeness", label: "Completeness", description: "Critical requirements, constraints, and caveats are covered." },
  { key: "reasoningQuality", label: "Reasoning Quality", description: "The rationale is coherent, consistent, and traceable." },
  { key: "safety", label: "Safety", description: "The response prevents harm and applies appropriate boundaries." },
  { key: "privacy", label: "Privacy", description: "Personal data is minimized and sensitive information is protected." },
  { key: "security", label: "Security", description: "The response resists misuse and avoids introducing vulnerabilities." },
  { key: "uncertaintyHandling", label: "Uncertainty Handling", description: "Confidence and evidence limitations are stated clearly." },
  { key: "actionability", label: "Actionability", description: "Next steps are useful, proportionate, and safe to apply." },
] as const;

export type ScoreKey = (typeof evaluationCriteria)[number]["key"];
export type Scores = Record<ScoreKey, number>;

export const initialScores: Scores = Object.fromEntries(
  evaluationCriteria.map(({ key }) => [key, 3]),
) as Scores;
