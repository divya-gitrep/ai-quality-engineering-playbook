import type { Metadata } from "next";
import DashboardCard from "@/components/DashboardCard";
import RiskBadge from "@/components/RiskBadge";
import { scenarios } from "@/data/scenarios";

export const metadata: Metadata = { title: "Risk Dashboard" };

export default function DashboardPage() {
  const criticalCount = scenarios.filter((scenario) => scenario.severity === "Critical").length;
  const highCount = scenarios.filter((scenario) => scenario.severity === "High").length;
  const priorityOne = scenarios.filter((scenario) => scenario.priority === 1);

  return (
    <section className="page-section">
      <div>
        <p className="eyebrow">Risk-based test prioritization</p>
        <h1 className="page-title mt-3">Risk Dashboard</h1>
        <p className="page-intro">A Senior QA view of which AI failure modes deserve the earliest and strongest evaluation coverage.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard label="Total scenarios" value={scenarios.length} detail="Controlled AI risk cases" />
        <DashboardCard label="Critical risks" value={criticalCount} detail="Immediate decision exposure" accent="red" />
        <DashboardCard label="High risks" value={highCount} detail="Material safeguard exposure" accent="orange" />
        <DashboardCard label="Priority 1 areas" value={priorityOne.length} detail="Execute before release" accent="teal" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="panel overflow-hidden">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-semibold text-ink">Risk priority table</h2>
            <p className="mt-1 text-sm text-slate-500">Execution order based on impact, exploitability, and decision trust.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-semibold">Priority</th>
                  <th className="px-6 py-3 font-semibold">Risk scenario</th>
                  <th className="px-6 py-3 font-semibold">Risk area</th>
                  <th className="px-6 py-3 font-semibold">Severity</th>
                  <th className="px-6 py-3 font-semibold">QA rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {scenarios.map((scenario) => (
                  <tr key={scenario.id} className="align-top transition hover:bg-slate-50/70">
                    <td className="px-6 py-4"><span className="font-semibold text-ink">P{scenario.priority}</span></td>
                    <td className="px-6 py-4"><p className="font-semibold text-ink">{scenario.title}</p><p className="mt-1 font-mono text-xs text-slate-400">{scenario.id}</p></td>
                    <td className="px-6 py-4 text-slate-600">{scenario.riskArea}</td>
                    <td className="px-6 py-4"><RiskBadge label={scenario.severity} /></td>
                    <td className="max-w-sm px-6 py-4 leading-6 text-slate-500">{scenario.testObjective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="panel p-6">
            <p className="field-label">Priority 1 test areas</p>
            <ol className="mt-4 space-y-3">
              {priorityOne.map((scenario, index) => (
                <li key={scenario.id} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-50 text-xs font-bold text-red-700">{index + 1}</span>
                  {scenario.title}
                </li>
              ))}
            </ol>
          </div>
          <blockquote className="rounded-xl bg-navy p-6 text-white shadow-panel">
            <span className="block text-3xl leading-none text-teal-500">“</span>
            <p className="mt-2 text-base font-medium leading-7">The highest AI risks are often failures in trust, reasoning, privacy, safety, and decision-making rather than traditional software defects.</p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Senior QA insight</footer>
          </blockquote>
        </aside>
      </div>
    </section>
  );
}
