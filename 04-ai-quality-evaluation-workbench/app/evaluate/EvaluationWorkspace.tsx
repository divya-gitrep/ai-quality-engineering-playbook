"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RiskBadge from "@/components/RiskBadge";
import ScoreInput from "@/components/ScoreInput";
import ScoreSummary from "@/components/ScoreSummary";
import { evaluationCriteria, initialScores, type ScoreKey, type Scores } from "@/data/evaluationCriteria";
import { getScenarioBySlug, scenarios } from "@/data/scenarios";
import { evaluateScores } from "@/lib/scoring";

export default function EvaluationWorkspace({ initialSlug }: { initialSlug?: string }) {
  const router = useRouter();
  const [selectedSlug, setSelectedSlug] = useState(getScenarioBySlug(initialSlug).slug);
  const [response, setResponse] = useState("");
  const [scores, setScores] = useState<Scores>({ ...initialScores });
  const selectedScenario = getScenarioBySlug(selectedSlug);
  const result = evaluateScores(scores);

  function selectScenario(slug: string) {
    setSelectedSlug(slug);
    router.replace(`/evaluate?scenario=${slug}`, { scroll: false });
  }

  function updateScore(key: ScoreKey, score: number) {
    setScores((current) => ({ ...current, [key]: score }));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
      <div className="space-y-6">
        <section className="panel p-6">
          <label htmlFor="scenario" className="field-label">Scenario under evaluation</label>
          <select
            id="scenario"
            value={selectedSlug}
            onChange={(event) => selectScenario(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm font-medium text-ink outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          >
            {scenarios.map((scenario) => (
              <option key={scenario.id} value={scenario.slug}>{scenario.id} — {scenario.title}</option>
            ))}
          </select>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-semibold text-slate-500">{selectedScenario.id}</p>
                <h2 className="mt-1 text-xl font-semibold text-ink">{selectedScenario.title}</h2>
                <p className="mt-1 text-sm font-medium text-teal-700">{selectedScenario.riskArea}</p>
              </div>
              <div className="flex gap-2">
                <RiskBadge label={selectedScenario.severity} />
                <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600">Priority {selectedScenario.priority}</span>
              </div>
            </div>
            <dl className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <dt className="field-label">Test objective</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600">{selectedScenario.testObjective}</dd>
              </div>
              <div>
                <dt className="field-label">Expected behavior</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600">{selectedScenario.expectedBehavior}</dd>
              </div>
            </dl>
            <div className="mt-5 rounded-lg border-l-4 border-teal-500 bg-slate-50 p-4">
              <p className="field-label">Test prompt</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{selectedScenario.prompt}</p>
            </div>
          </div>
        </section>

        <section className="panel p-6">
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="ai-response" className="text-base font-semibold text-ink">AI response evidence</label>
            <span className="text-xs text-slate-400">Manual input</span>
          </div>
          <p className="mt-1 text-sm text-slate-500">Paste the response exactly as produced so the evaluation remains traceable.</p>
          <textarea
            id="ai-response"
            value={response}
            onChange={(event) => setResponse(event.target.value)}
            rows={9}
            placeholder="Paste the AI response to be evaluated…"
            className="mt-4 w-full resize-y rounded-lg border border-slate-300 bg-white p-4 text-sm leading-6 text-ink outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          />
          <p className="mt-2 text-right text-xs text-slate-400">{response.length} characters captured</p>
        </section>

        <section>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-ink">Evaluation criteria</h2>
              <p className="mt-1 text-sm text-slate-500">Score each dimension from 1 (unacceptable) to 5 (strong).</p>
            </div>
            <button type="button" onClick={() => setScores({ ...initialScores })} className="text-left text-xs font-semibold text-teal-700 hover:text-teal-800">Reset scores to 3</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {evaluationCriteria.map((criterion) => (
              <ScoreInput
                key={criterion.key}
                label={criterion.label}
                description={criterion.description}
                value={scores[criterion.key]}
                onChange={(score) => updateScore(criterion.key, score)}
              />
            ))}
          </div>
        </section>
      </div>
      <ScoreSummary result={result} />
    </div>
  );
}
