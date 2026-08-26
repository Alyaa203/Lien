import Link from "next/link";

// Composants partagés, style professionnel sobre
// Cartes blanches arrondies, badges en pastille colorée, typographie standard :
// cohérent avec le reste des pages projets du portfolio.

export type Tone =
  | "indigo"
  | "blue"
  | "purple"
  | "orange"
  | "emerald"
  | "amber"
  | "teal"
  | "slate"
  | "rose"
  | "pink"
  | "violet"
  | "fuchsia"
  | "cyan"
  | "sky";

const toneClasses: Record<Tone, { badge: string; dot: string; link: string }> = {
  indigo: { badge: "bg-indigo-100 text-indigo-700", dot: "bg-indigo-500", link: "hover:text-indigo-600" },
  blue: { badge: "bg-blue-100 text-blue-700", dot: "bg-blue-500", link: "hover:text-blue-600" },
  purple: { badge: "bg-purple-100 text-purple-700", dot: "bg-purple-500", link: "hover:text-purple-600" },
  orange: { badge: "bg-orange-100 text-orange-700", dot: "bg-orange-500", link: "hover:text-orange-600" },
  emerald: { badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500", link: "hover:text-emerald-600" },
  amber: { badge: "bg-amber-100 text-amber-700", dot: "bg-amber-500", link: "hover:text-amber-600" },
  teal: { badge: "bg-teal-100 text-teal-700", dot: "bg-teal-500", link: "hover:text-teal-600" },
  slate: { badge: "bg-slate-100 text-slate-700", dot: "bg-slate-500", link: "hover:text-slate-600" },
  rose: { badge: "bg-rose-100 text-rose-700", dot: "bg-rose-500", link: "hover:text-rose-600" },
  pink: { badge: "bg-pink-100 text-pink-700", dot: "bg-pink-500", link: "hover:text-pink-600" },
  violet: { badge: "bg-violet-100 text-violet-700", dot: "bg-violet-500", link: "hover:text-violet-600" },
  fuchsia: { badge: "bg-fuchsia-100 text-fuchsia-700", dot: "bg-fuchsia-500", link: "hover:text-fuchsia-600" },
  cyan: { badge: "bg-cyan-100 text-cyan-700", dot: "bg-cyan-500", link: "hover:text-cyan-600" },
  sky: { badge: "bg-sky-100 text-sky-700", dot: "bg-sky-500", link: "hover:text-sky-600" },
};

export function BackLink({ tone = "indigo" }: { tone?: Tone }) {
  return (
    <Link
      href="/"
      className={`mb-8 inline-flex items-center text-sm text-slate-500 transition ${toneClasses[tone].link}`}
    >
      ← Retour à l&apos;accueil
    </Link>
  );
}

export function Kicker({
  children,
  tone = "indigo",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <div
      className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium ${toneClasses[tone].badge}`}
    >
      {children}
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-2 max-w-2xl text-slate-600">{description}</p>}
    </div>
  );
}

export function TechTag({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <span className={`rounded-full px-3 py-1 text-sm ${toneClasses[tone].badge}`}>
      {children}
    </span>
  );
}

export function SpecList({ items, tone = "indigo" }: { items: string[]; tone?: Tone }) {
  return (
    <ul className="space-y-3 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${toneClasses[tone].dot}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
