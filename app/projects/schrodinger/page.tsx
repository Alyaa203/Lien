import Link from "next/link";

export default function Schrodinger() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        {/* Retour */}
        <Link
          href="/projets"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

            {/* Hero */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            Projet de physique computationnelle
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Simulation de l’équation de Schrödinger
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
          Application interactive pour explorer numériquement les états stationnaires et l’évolution temporelle d’un système quantique.
          </p>


            <div className="mt-8">
           {/* Ligne des boutons */}
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://gnm4pxwnrpb6cy3syst6sn.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-sm"
            >
              Tester la simulation interactive
            </a>

            <a
              href="https://github.com/Alyaa203/P2i"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-sm"
            >
              Voir le code
            </a>
          </div>

          {/* Message en dessous */}
          <p className="text-sm text-slate-500 mt-3">
            Remarque: Le chargement peut prendre quelques minutes
          </p>
        </div>
        </section>

        {/* Image principale */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src="/SchrodArt1.png"
              alt="Visualisation de la simulation de l’équation de Schrödinger"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Grille info */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Résoudre numériquement l’équation de Schrödinger pour modéliser
              l’évolution d’une particule quantique dans un potentiel donné.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Un outil interactif pour modifier les paramètres physiques, observer
              les états propres et suivre la dynamique temporelle du système.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Discrétisation par différences finies pour construire un
                Hamiltonien discret et calculer ses valeurs et vecteurs propres.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Discrétisation de l’espace</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Construction du Hamiltonien discret</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Calcul des états propres</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Simulation de l’évolution temporelle</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Résultats et visualisations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">États stationnaires</h3>
              <p className="text-slate-600 leading-relaxed">
                Visualisation de la densité de probabilité des états propres.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Dynamique temporelle</h3>
              <p className="text-slate-600 leading-relaxed">
                Évolution d’un paquet d’onde au cours du temps selon les paramètres.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Python
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              NumPy
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              SciPy
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Matplotlib
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              Streamlit
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
