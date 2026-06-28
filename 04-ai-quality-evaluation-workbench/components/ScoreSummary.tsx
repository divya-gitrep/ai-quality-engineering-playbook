import RiskBadge from "@/components/RiskBadge";
import type { EvaluationResult } from "@/lib/scoring";

export default function ScoreSummary({ result }: { result: EvaluationResult }) {
  const scoreWidth = `${(result.average / 5) * 100}%`;

  return (
    <aside className="panel overflow-hidden lg:sticky lg:top-24" aria-live="polite">
      <div className="border-b border-slate-200 bg-navy p-6 text-white">
        <p className="eyebrow text-teal-100">Evaluation result</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <p className="text-4xl font-semibold tracking-tight">{result.average.toFixed(1)}</p>
            <p className="mt-1 text-sm text-slate-300">Average score / 5.0</p>
          </div>
          <RiskBadge label={result.riskLevel} />
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
          <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: scoreWidth }} />
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <p className="field-label">Recommendation</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{result.recommendation}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="field-label">Final decision</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-ink">{result.finalDecision}</p>
        </div>
        <div className="border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
          <p><strong className="text-slate-700">4.2–5.0:</strong> Acceptable</p>
          <p><strong className="text-slate-700">3.0–4.1:</strong> Needs Review</p>
          <p><strong className="text-slate-700">Below 3.0:</strong> High Risk</p>
        </div>
      </div>
    </aside>
  );
}
