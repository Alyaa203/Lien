import Link from "next/link";

type TabTile = {
  href: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
};

const tabs: TabTile[] = [
  {
    href: "/projets",
    title: "Projets",
    description: "Mon expérience professionnelle et mes projets académiques, classés par domaine.",
    badge: "Portfolio",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    href: "/certificats",
    title: "Certificats",
    description: "Mes formations complémentaires certifiantes.",
    badge: "Certifications",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    href: "/programmes",
    title: "Programmes",
    description: "Mon cursus ENSC, ma licence de physique et ma spécialisation Robotique.",
    badge: "Formation",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        {/* Hero */}
        <section className="mb-16 grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-56 w-56 md:h-72 md:w-72">
              <img
                src="/moi.JPG"
                alt="Alyaa Saab"
                className="h-full w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
              Portfolio
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Alyaa Saab
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Élève-ingénieure en 3ème année (Bac+5) à l&apos;École nationale
              supérieure de cognitique (ENSC), et titulaire d&apos;une licence de
              physique obtenue en parallèle. Je recherche actuellement une
              alternance ou un stage de fin d&apos;études en Robotique, Systèmes
              embarqués, IA, Traitement du signal ou Simulation numérique.
            </p>
          </div>
        </section>

        {/* Tabs vers les autres pages */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {tabs.map((tab) => (
              <Link key={tab.href} href={tab.href} className="block h-full">
                <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
                  <div className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium ${tab.badgeColor}`}>
                    {tab.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
                    {tab.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{tab.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mb-16 rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-2xl"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mt-4 leading-7 text-slate-300">
                N&apos;hésitez pas à me contacter pour toute question ou échange.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:alyaa.saabfr@gmail.com"
                className="block rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="text-slate-400">Email</span>
                <div className="font-medium text-white">alyaa.saabfr@gmail.com</div>
              </a>
              <a
                href="https://www.linkedin.com/in/alyaa-saab-ensc"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="text-slate-400">LinkedIn</span>
                <div className="font-medium text-white">linkedin.com/in/alyaa-saab-ensc</div>
              </a>
              <a
                href="https://github.com/Alyaa203"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="text-slate-400">GitHub</span>
                <div className="font-medium text-white">github.com/Alyaa203</div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-slate-500">
          © 2026 Alyaa Saab, Portfolio personnel
        </footer>
      </div>
    </main>
  );
}
