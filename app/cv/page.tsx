import Link from "next/link";

const skillGroups = [
  {
    title: "Simulation numérique",
    items: "MATLAB, Python, modélisation de systèmes physiques, équations différentielles, Monte-Carlo, Split-Step Fourier",
  },
  {
    title: "Programmation",
    items: "C++ (POO), Python (NumPy, SciPy, Pandas, Matplotlib), MATLAB, R, LaTeX",
  },
  {
    title: "Systèmes embarqués & Automatique",
    items: "Acquisition et traitement de données capteurs temps réel, systèmes de contrôle et régulation, architecture logicielle, protocole OSC, notions d'électronique et d'instrumentation",
  },
  {
    title: "Intelligence Artificielle",
    items: "Deep Learning, CNN, XAI (SHAP, LIME), Reservoir Computing, PyTorch, scikit-learn",
  },
  {
    title: "Traitement du signal",
    items: "FFT, analyse spectrale, filtrage numérique, EEG, données hyperspectrales",
  },
  {
    title: "Robotique",
    items: "Robotique collaborative (formation 2026-2027), interaction homme-robot, capteurs et acquisition de données, vision artificielle",
  },
];

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
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Alyaa Saab — Élève-ingénieure en 2ème année à l&apos;ENSC, licence de
              physique quantique obtenue en parallèle. À la recherche d&apos;une
              alternance en Robotique, Systèmes embarqués, IA, Traitement du
              signal et Simulation numérique.
            </p>
          </div>

          {/* TODO: le fichier CV-Alyaa-Saab.pdf n'existe pas encore — ajoute-le dans public/ */}
          <a
            href="/CV-Alyaa-Saab.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition shadow-sm"
          >
            Télécharger le PDF
          </a>
        </section>

        <section className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
          <div>
            <p className="text-sm text-slate-500">Téléphone</p>
            <p className="font-medium text-slate-900">06 38 05 53 42</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-medium text-slate-900">alyaa.saabfr@gmail.com</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Langues</p>
            <p className="font-medium text-slate-900">Français · Arabe (bilingue) · Anglais (B2)</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">Compétences</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{group.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
            Centres d&apos;intérêt
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Aéronautique et spatial", "Guitare", "Photographie"].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <object
            data="/CV-Alyaa-Saab.pdf"
            type="application/pdf"
            className="w-full h-[80vh]"
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
