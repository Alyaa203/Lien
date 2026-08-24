import Link from "next/link";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  pdf: string;
  verifyUrl?: string;
};

const certificates: Certificate[] = [
  {
    title: "Build an AI Agent",
    issuer: "IBM SkillsBuild",
    date: "26 janvier 2026",
    pdf: "/certificat-ibm-ai-agent.pdf",
    verifyUrl: "https://www.credly.com/go/ldRbUDve",
  },
];

export default function Certificats() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Certificats
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Certificats et formations complémentaires
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Formations certifiantes suivies en complément du cursus d&apos;ingénieur.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                {cert.issuer}
              </div>
              <h2 className="text-xl font-bold text-slate-900">{cert.title}</h2>
              <p className="mt-2 text-sm text-slate-500">Délivré le {cert.date}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700 transition"
                >
                  Voir le certificat (PDF)
                </a>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700 transition"
                  >
                    Vérifier sur Credly
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
