import Link from "next/link";

export default function CV() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        <section className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-slate-900 text-white text-sm font-medium">
              CV
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Curriculum Vitae
            </h1>
          </div>

          {/* TODO: le fichier CV-Alyaa-Saab.pdf n'existe pas encore, ajoute-le dans public/ */}
          <a
            href="/CV-Alyaa-Saab.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition shadow-sm"
          >
            Télécharger le PDF
          </a>
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <object
            data="/CV-Alyaa-Saab.pdf"
            type="application/pdf"
            className="w-full h-[85vh]"
          >
            <div className="p-10 text-center text-slate-500">
              Le CV n&apos;est pas encore disponible en ligne. Utilise le bouton
              ci-dessus une fois le fichier ajouté.
            </div>
          </object>
        </section>
      </div>
    </main>
  );
}
