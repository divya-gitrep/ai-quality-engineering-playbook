import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
      <div className="page-shell lg:flex lg:h-[72px] lg:items-center lg:justify-between">
        <div className="flex h-16 items-center justify-between lg:h-auto">
          <Link href="/" className="group flex items-center gap-3" aria-label="AI Quality Evaluation Workbench home">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-teal-500/40 bg-teal-500/15 text-xs font-bold tracking-wider text-teal-100">
              QE
            </span>
            <span>
              <span className="block text-sm font-semibold leading-tight text-white">AI Quality Evaluation</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Workbench</span>
            </span>
          </Link>
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-100 lg:hidden">
            QA Framework
          </span>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
