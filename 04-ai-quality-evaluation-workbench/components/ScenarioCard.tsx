import Link from "next/link";
import RiskBadge from "@/components/RiskBadge";
import type { Scenario } from "@/data/scenarios";

export default function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <article className="panel flex h-full flex-col overflow-hidden">
      <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs font-semibold tracking-wide text-slate-500">{scenario.id}</span>
          <div className="flex items-center gap-2">
            <RiskBadge label={scenario.severity} />
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
              P{scenario.priority}
            </span>
          </div>
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-ink">{scenario.title}</h2>
        <p className="mt-1 text-sm font-medium text-teal-700">{scenario.riskArea}</p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <dl className="space-y-5 text-sm">
          <div>
            <dt className="field-label">Test objective</dt>
            <dd className="mt-1.5 leading-6 text-slate-600">{scenario.testObjective}</dd>
          </div>
          <div>
            <dt className="field-label">Prompt</dt>
            <dd className="mt-1.5 rounded-lg border border-slate-200 bg-slate-50 p-3 leading-6 text-slate-700">“{scenario.prompt}”</dd>
          </div>
          <div>
            <dt className="field-label">Expected behavior</dt>
            <dd className="mt-1.5 leading-6 text-slate-600">{scenario.expectedBehavior}</dd>
          </div>
          <div>
            <dt className="field-label">Evaluation focus</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {scenario.evaluationFocus.map((focus) => (
                <span key={focus} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{focus}</span>
              ))}
            </dd>
          </div>
        </dl>
        <Link href={`/evaluate?scenario=${scenario.slug}`} className="button-primary mt-6 w-full justify-center">
          Evaluate Scenario <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
