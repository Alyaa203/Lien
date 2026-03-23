import Link from "next/link";

export default function EEGMusic() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">
        
        <Link
          href="/"
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
            Projet expérimental de traitement du signal visant à étudier l’influence
            de stimuli musicaux sur l’activité cérébrale à partir de signaux EEG,
            avec acquisition, prétraitement et analyse fréquentielle.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce projet porte sur l’acquisition de signaux physiologiques et leur
              analyse dans un cadre expérimental, afin d’observer les variations
              d’activité cérébrale en présence ou en absence de musique.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Mettre en place un protocole EEG, extraire des descripteurs fréquentiels
              pertinents, puis modéliser statistiquement les corrélations entre les
              stimuli musicaux et l’activité cérébrale mesurée.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le projet a été réalisé en groupe à partir d’un protocole
                expérimental conçu pour comparer différentes conditions de stimuli.
                Les signaux EEG ont été acquis, prétraités, puis analysés dans le
                domaine fréquentiel afin d’extraire des indicateurs liés à l’activité
                cérébrale.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Conception d’un protocole expérimental EEG</span>
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
                  <span>Modélisation statistique des corrélations</span>
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
                Les signaux ont été étudiés dans le domaine fréquentiel afin
                d’observer les variations de puissance sur différentes électrodes
                selon les conditions expérimentales.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Interprétation</h3>
              <p className="text-slate-600 leading-relaxed">
                Le projet a permis de relier stimuli musicaux, organisation du
                protocole expérimental et comportement des signaux mesurés, tout en
                mettant en évidence les enjeux d’analyse de données physiologiques.
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

        {/* Apports */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Apports du projet</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce projet m’a permis de me familiariser avec la manipulation de données
            physiologiques, la mise en place d’un protocole expérimental, ainsi que
            les différentes étapes d’analyse d’un signal biomédical, depuis
            l’acquisition jusqu’à l’interprétation.
          </p>
        </section>

        {/* Tech */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Python
            </span>
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