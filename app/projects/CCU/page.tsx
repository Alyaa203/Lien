import Link from "next/link";

export default function CCU() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">
        
        {/* Retour */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            UX Design · Projet annuel
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Conception centrée utilisateur (CCU)
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Projet réalisé sur une année complète autour de la démarche UX.
            Il couvre l’ensemble du processus de conception centrée utilisateur :
            analyse des besoins, idéation, conception de maquettes et tests utilisateurs
            sur différents cas d’étude.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Le projet s’inscrit dans une approche de conception centrée utilisateur,
              avec pour objectif de comprendre des usages réels et de concevoir
              des solutions adaptées à différents contextes (santé, consommation,
              organisation quotidienne).
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Mettre en œuvre une démarche UX complète : analyser un problème,
              proposer des solutions via des maquettes, puis évaluer leur
              utilisabilité à travers des tests utilisateurs.
            </p>
          </div>
        </section>

        {/* Phases du projet */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Déroulé du projet</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <h3 className="text-lg font-semibold mb-2">1. Idéation</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Analyse d’un problème lié à l’observance thérapeutique :
                recherche utilisateur, personas, benchmark et génération
                de solutions. Proposition d’un objet connecté facilitant
                la prise de traitement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2. Maquettage</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Conception d’une application autour d’un pass textile
                responsable. Travail sur l’architecture de l’information,
                la navigation, et la hiérarchie des fonctionnalités.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3. Tests utilisateurs</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Mise en place d’un protocole de test sur une maquette
                interactive : scénarios, observation des utilisateurs,
                analyse des erreurs et recommandations UX.
              </p>
            </div>

          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                <span>Recherche utilisateur et analyse des besoins</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                <span>Création de personas et scénarios d’usage</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                <span>Conception de maquettes (wireframes / prototypes)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                <span>Tests utilisateurs et analyse des résultats</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Image */}
        <section className="mb-12">
    <div className="flex justify-center gap-6 flex-wrap">
        
        <img
        src="/ccu1.png"
        alt="App 1"
        className="w-40 rounded-2xl shadow-md"
        />
        <img
        src="/ccu2.png"
        alt="App 1"
        className="w-40 rounded-2xl shadow-md"
        />
    

        <img
        src="/ccu3.png"
        alt="App 2"
        className="w-40 rounded-2xl shadow-md"
        />

        <img
        src="/ccu4.png"
        alt="App 3"
        className="w-40 rounded-2xl shadow-md"
        />
    

    </div>

    <p className="mt-3 text-sm text-slate-500 text-center">
        Interfaces de l’application COM’UNIQUE.
    </p>
    </section>

        {/* Apports */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Apports du projet</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce projet m’a permis de maîtriser les différentes étapes d’une
            démarche UX complète, d’apprendre à concevoir pour des utilisateurs
            réels, et d’itérer à partir de retours concrets. Il m’a également
            permis de développer une approche structurée de la conception
            d’interfaces.
          </p>
        </section>

        {/* Tech */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Figma
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              UX Research
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Prototypage
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              Tests utilisateurs
            </span>
          </div>
        </section>

      </div>
    </main>
  );
}