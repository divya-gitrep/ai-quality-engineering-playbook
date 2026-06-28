"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/scenarios", label: "Scenarios" },
  { href: "/evaluate", label: "Evaluate" },
  { href: "/dashboard", label: "Risk Dashboard" },
  { href: "/evidence", label: "Evidence" },
  { href: "/release-recommendation", label: "Release Decision" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="overflow-x-auto border-t border-white/10 lg:border-0">
      <div className="flex min-w-max items-center gap-1 py-2 lg:py-0">
        {links.map((link) => {
          const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                active
                  ? "bg-white/12 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
