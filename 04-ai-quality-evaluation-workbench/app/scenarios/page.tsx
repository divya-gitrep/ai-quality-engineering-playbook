import type { Metadata } from "next";
import ScenarioCard from "@/components/ScenarioCard";
import { scenarios } from "@/data/scenarios";

export const metadata: Metadata = { title: "Scenario Library" };

export default function ScenariosPage() {
  return (
    <section className="page-section">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Risk-based test design</p>
          <h1 className="page-title mt-3">Scenario Library</h1>
          <p className="page-intro">AI failure modes expressed as repeatable QA cases with explicit objectives, expected safeguards, and evaluation focus.</p>
        </div>
        <div className="panel flex shrink-0 items-center gap-4 px-5 py-3">
          <span className="text-2xl font-semibold text-ink">{scenarios.length}</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Controlled<br />scenarios</span>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {scenarios.map((scenario) => <ScenarioCard key={scenario.id} scenario={scenario} />)}
      </div>
    </section>
  );
}
