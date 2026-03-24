import Link from "next/link";

export default function Comunique() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">
        
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-orange-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
            Application mobile
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            COM’UNIQUE – plateforme de communication étudiante
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Nous avons conçu une application mobile pour centraliser la vie étudiante 
            et simplifier les échanges entre étudiants et administration.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              L’information circule sur plusieurs canaux : emails, réseaux, affichage. 
              Résultat : les étudiants perdent du temps à la chercher.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Concevoir une application claire pour regrouper, organiser et rendre 
              l’information accessible rapidement.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Travail en équipe avec une démarche UX complète : comprendre, concevoir, tester, améliorer.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                  <span>Analyse du besoin et de l’existant</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                  <span>Conception des parcours et maquettes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                  <span>Développement mobile avec Flutter</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                  <span>Tests utilisateurs et itérations</span>
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
              <h3 className="text-lg font-semibold mb-2">Fonctionnalités</h3>
              <p className="text-slate-600 leading-relaxed">
                Fil d’actualité, calendrier, annuaire et outils de communication intégrés dans une seule interface.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Tests utilisateurs</h3>
              <p className="text-slate-600 leading-relaxed">
                Observation des usages, identification des frictions, amélioration de la navigation et de la lisibilité.
              </p>
            </div>
          </div>
        </section>

        {/* Images */}
        <section className="mb-12">
          <div className="flex justify-center gap-6 flex-wrap">
            <img src="/comunique.png" className="w-40 rounded-2xl shadow-md" />
            <img src="/comunique4.png" className="w-40 rounded-2xl shadow-md" />
            <img src="/comunique2.png" className="w-40 rounded-2xl shadow-md" />
            <img src="/comunique3.png" className="w-40 rounded-2xl shadow-md" />
            <img src="/c5.png" className="w-40 rounded-2xl shadow-md" />
          </div>

          <p className="mt-3 text-sm text-slate-500 text-center">
            Interfaces de l’application COM’UNIQUE.
          </p>
        </section>

        {/* Apports */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Ce que j’ai appris</h2>
          <p className="text-slate-600 leading-relaxed">
            J’ai participé à la conception d’un produit complet, du besoin aux tests. 
            Ce projet m’a appris à travailler en équipe et à améliorer une interface à partir de retours réels.
          </p>
        </section>

        {/* Tech */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Flutter
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Dart
            </span>
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm">
              UX Design
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Tests utilisateurs
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Travail en équipe
            </span>
          </div>
        </section>

      </div>
    </main>
  );
}