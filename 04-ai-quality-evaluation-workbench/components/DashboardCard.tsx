interface DashboardCardProps {
  label: string;
  value: string | number;
  detail: string;
  accent?: "navy" | "red" | "orange" | "teal";
}

const accents = {
  navy: "bg-navy",
  red: "bg-red-500",
  orange: "bg-orange-500",
  teal: "bg-teal-500",
};

export default function DashboardCard({ label, value, detail, accent = "navy" }: DashboardCardProps) {
  return (
    <article className="panel relative overflow-hidden p-5">
      <span className={`absolute inset-y-0 left-0 w-1 ${accents[accent]}`} />
      <p className="field-label">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{detail}</p>
    </article>
  );
}
