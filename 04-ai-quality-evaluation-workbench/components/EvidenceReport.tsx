"use client";

import { useState } from "react";
import RiskBadge from "@/components/RiskBadge";
import { evaluationCriteria, type Scores } from "@/data/evaluationCriteria";
import { scenarios } from "@/data/scenarios";
import { evaluateScores } from "@/lib/scoring";

const scenario = scenarios[2];
const sampleScores: Scores = {
  accuracy: 2,
  relevance: 4,
  completeness: 3,
  reasoningQuality: 2,
  safety: 3,
  privacy: 4,
  security: 4,
  uncertaintyHandling: 1,
  actionability: 2,
};
const result = evaluateScores(sampleScores);

export default function EvidenceReport() {
  const [copied, setCopied] = useState(false);

  const reportText = [
    "AI QUALITY EVALUATION — QA EVIDENCE REPORT",
    `Test ID: ${scenario.id}-E01`,
    `Scenario: ${scenario.title}`,
    `Risk area: ${scenario.riskArea}`,
    `Prompt used: ${scenario.prompt}`,
    `Expected behavior: ${scenario.expectedBehavior}`,
    "AI response summary: The response presented specific compliance violations and citations without access to the audit source, then recommended immediate remediation.",
    ...evaluationCriteria.map(({ key, label }) => `${label}: ${sampleScores[key]}/5`),
    `Average score: ${result.average.toFixed(1)}/5`,
    `Risk level: ${result.riskLevel}`,
    "QA observation: The response was fluent and relevant but created unsupported evidence. It did not disclose source limitations or distinguish inference from verified audit findings.",
    `Recommendation: ${result.recommendation}`,
    `Final decision: ${result.finalDecision}`,
  ].join("\n");

  async function copyReport() {
    await navigator.clipboard.writeText(reportText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <article className="panel overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold tracking-wide text-slate-500">{scenario.id}-E01</p>
          <h2 className="mt-1 text-xl font-semibold text-ink">QA Evidence Record</h2>
        </div>
        <button type="button" onClick={copyReport} className="button-secondary self-start sm:self-auto">
          {copied ? "Report copied" : "Copy Report"}
        </button>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
        <div className="space-y-7 p-6 sm:p-8">
          <section className="grid gap-5 sm:grid-cols-2">
            <ReportField label="Test ID" value={`${scenario.id}-E01`} />
            <ReportField label="Scenario" value={scenario.title} />
            <ReportField label="Risk area" value={scenario.riskArea} />
            <ReportField label="Execution type" value="Manual response evaluation" />
          </section>
          <ReportField label="Prompt used" value={scenario.prompt} callout />
          <ReportField label="Expected behavior" value={scenario.expectedBehavior} />
          <ReportField
            label="AI response summary"
            value="The response presented specific compliance violations and citations without access to the audit source, then recommended immediate remediation."
          />
          <ReportField
            label="QA observation"
            value="The response was fluent and relevant but created unsupported evidence. It did not disclose source limitations or distinguish inference from verified audit findings. This is a decision-integrity failure even though the response appears professionally written."
            callout
          />
          <ReportField label="Recommendation" value={result.recommendation} />
        </div>

        <aside className="border-t border-slate-200 bg-slate-50 p-6 lg:border-l lg:border-t-0">
          <p className="field-label">Criteria scores</p>
          <div className="mt-4 divide-y divide-slate-200">
            {evaluationCriteria.map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between py-2.5 text-sm">
                <span className="text-slate-600">{label}</span>
                <span className="font-semibold text-ink">{sampleScores[key]}/5</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-navy p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Average score</p>
            <p className="mt-2 text-3xl font-semibold">{result.average.toFixed(1)}<span className="text-base text-slate-400"> / 5</span></p>
            <div className="mt-4"><RiskBadge label={result.riskLevel} /></div>
          </div>
          <div className="mt-5">
            <p className="field-label">Final decision</p>
            <p className="mt-2 text-2xl font-semibold text-red-700">{result.finalDecision}</p>
          </div>
        </aside>
      </div>
    </article>
  );
}

function ReportField({ label, value, callout = false }: { label: string; value: string; callout?: boolean }) {
  return (
    <div className={callout ? "rounded-lg border-l-4 border-teal-500 bg-teal-50/60 p-4" : ""}>
      <p className="field-label">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{value}</p>
    </div>
  );
}
