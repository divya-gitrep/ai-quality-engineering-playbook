import type { Metadata } from "next";
import EvaluationWorkspace from "./EvaluationWorkspace";

export const metadata: Metadata = { title: "Evaluation Workspace" };

export default async function EvaluatePage({
  searchParams,
}: {
  searchParams: Promise<{ scenario?: string }>;
}) {
  const { scenario } = await searchParams;

  return (
    <section className="page-section">
      <div className="mb-10">
        <p className="eyebrow">Manual QA execution</p>
        <h1 className="page-title mt-3">Evaluation Workspace</h1>
        <p className="page-intro">Assess response evidence against nine quality and risk dimensions, then derive a transparent QA decision.</p>
      </div>
      <EvaluationWorkspace initialSlug={scenario} />
    </section>
  );
}
