import type { Metadata } from "next";
import EvidenceReport from "@/components/EvidenceReport";

export const metadata: Metadata = { title: "QA Evidence Report" };

export default function EvidencePage() {
  return (
    <section className="page-section">
      <div className="mb-10">
        <p className="eyebrow">Traceable evaluation output</p>
        <h1 className="page-title mt-3">QA Evidence Report</h1>
        <p className="page-intro">A sample evaluation record showing how response evidence becomes a defensible risk finding and final QA decision.</p>
      </div>
      <EvidenceReport />
    </section>
  );
}
