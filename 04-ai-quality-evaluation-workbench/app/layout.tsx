import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI Quality Evaluation Workbench",
    template: "%s | AI Quality Evaluation Workbench",
  },
  description: "A Senior QA-led framework for evaluating AI responses across quality, trust, safety, privacy, and security risks.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="page-shell flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>AI Quality Evaluation Workbench</p>
            <p>Risk-based evaluation • QA evidence • Release decision support</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
