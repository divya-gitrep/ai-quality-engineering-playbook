type BadgeTone = "Critical" | "High" | "Medium" | "Acceptable" | "Needs Review" | "High Risk" | "Pass" | "Fail";

const toneClasses: Record<BadgeTone, string> = {
  Critical: "border-red-200 bg-red-50 text-red-700",
  High: "border-orange-200 bg-orange-50 text-orange-700",
  Medium: "border-amber-200 bg-amber-50 text-amber-700",
  Acceptable: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Pass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Needs Review": "border-amber-200 bg-amber-50 text-amber-700",
  "High Risk": "border-red-200 bg-red-50 text-red-700",
  Fail: "border-red-200 bg-red-50 text-red-700",
};

interface RiskBadgeProps {
  label: BadgeTone;
  prefix?: string;
}

export default function RiskBadge({ label, prefix }: RiskBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClasses[label]}`}>
      {prefix ? `${prefix}: ` : ""}{label}
    </span>
  );
}
