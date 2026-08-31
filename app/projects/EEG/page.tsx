import Link from "next/link";

export default function EEGMusic() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        <Link
          href="/projets"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            Projet de traitement du signal
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Analyse de signaux EEG : effet de la musique sur l’activité cérébrale
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Étude de l’effet de la musique sur l’activité cérébrale à partir de signaux EEG.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Comparer l’activité cérébrale avec et sans stimulation musicale.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Extraire des indicateurs fréquentiels pertinents et observer les liens avec le stimulus musical.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Protocole expérimental en groupe : acquisition, nettoyage puis analyse fréquentielle des signaux.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Conception du protocole EEG</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Acquisition et prétraitement des signaux</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Analyse fréquentielle</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Analyse statistique des résultats</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Résultats</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Analyse fréquentielle</h3>
              <p className="text-slate-600 leading-relaxed">
                Comparaison de la puissance des bandes de fréquence selon les conditions expérimentales.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Interprétation</h3>
              <p className="text-slate-600 leading-relaxed">
                Des liens entre stimuli musicaux et signaux enregistrés, malgré la complexité des données EEG.
              </p>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src="/EEG.jpg"
              alt="Visualisation du projet EEG"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Exemple de setup expérimental ou de résultats d’analyse EEG.
          </p>
        </section>

        {/* Tech */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Traitement du signal
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              FFT
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              EEG
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Analyse de données
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
