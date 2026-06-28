import Link from "next/link";

const workflow = [
  { number: "01", title: "Scenario Library", text: "Translate AI failure modes into controlled, repeatable QA test cases." },
  { number: "02", title: "Evaluation Workspace", text: "Score response quality and safeguards against explicit evidence criteria." },
  { number: "03", title: "Risk Dashboard", text: "Prioritize trust, safety, privacy, and security exposure by business impact." },
  { number: "04", title: "QA Evidence Report", text: "Capture observations, scores, risk status, and an auditable decision." },
  { number: "05", title: "Release Recommendation", text: "Turn evaluation results into a clear release position and mitigation path." },
];

const disciplines = [
  { title: "Quality & reasoning", text: "Accuracy, relevance, completeness, consistency, and actionability." },
  { title: "Trust & uncertainty", text: "Evidence grounding, calibrated confidence, and transparent limitations." },
  { title: "Safety & fairness", text: "Harm prevention, refusal boundaries, and equitable decision criteria." },
  { title: "Privacy & security", text: "Sensitive data controls, misuse resistance, and secure output handling." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_35%,rgba(22,143,122,0.14))]" />
        <div className="page-shell relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <p className="eyebrow text-teal-100">Senior QA-led AI assurance</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              AI Quality Evaluation Workbench
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A Senior QA-led framework for evaluating AI responses across quality, trust, safety, privacy, and security risks.
            </p>
            <p className="mt-5 max-w-2xl border-l-2 border-teal-500 pl-4 text-sm leading-6 text-slate-400">
              AI testing is not just output validation. It evaluates whether reasoning is grounded, risks are controlled, and a response is trustworthy enough to support a real decision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/evaluate" className="button-primary">Start Evaluation <span aria-hidden="true">→</span></Link>
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                View Risk Dashboard
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Assurance coverage</p>
                <p className="mt-1 text-lg font-semibold">Decision trust model</p>
              </div>
              <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-100">9 criteria</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {disciplines.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-navy/40 p-4">
                  <span className="mb-3 block h-1.5 w-8 rounded-full bg-teal-500" />
                  <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-3xl">
          <p className="eyebrow">End-to-end QA workflow</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">From risk hypothesis to release evidence</h2>
          <p className="page-intro">A connected evaluation path demonstrates test strategy thinking—not a collection of disconnected AI prompts.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {workflow.map((step, index) => (
            <article key={step.title} className="panel relative p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-teal-700">{step.number}</span>
                {index < workflow.length - 1 && <span className="hidden text-slate-300 md:block" aria-hidden="true">→</span>}
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="page-shell grid gap-8 py-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="eyebrow">Evaluation principle</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">Fluent is not the same as trustworthy.</h2>
          </div>
          <p className="text-base leading-7 text-slate-600">
            A response can be well-written and still create unacceptable decision risk. This workbench makes quality signals, safeguard failures, QA observations, and release implications visible in one evidence chain.
          </p>
        </div>
      </section>
    </>
  );
}
