import Link from "next/link";

export default function Reservoir() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        <Link
          href="/projets"
          className="inline-flex items-center text-sm text-slate-500 hover:text-teal-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
              Stage de recherche en cours · 3 mois
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
              Reservoir Computing optique
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Reservoir Computing optique à base de fibres
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Stage de recherche à l&apos;Institut d&apos;Optique Graduate School, en
            collaboration avec l&apos;INRIA. Je développe un système de calcul
            neuromorphique basé sur des fibres optiques et j&apos;étudie les
            réservoirs optiques comme alternative aux implémentations numériques.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Le reservoir computing exploite la dynamique d&apos;un système physique (ici un montage à fibres optiques) comme réservoir non linéaire.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Construire, par IA (réseau de neurones, régression Ridge), un modèle numérique du montage pour le valider sans dépendre uniquement du banc optique.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Développement expérimental, interface de pilotage et modélisation par IA du montage, pour comparer réservoir physique et simulé.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                  <span>Développement du système de calcul neuromorphique à fibres optiques</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                  <span>Conception d&apos;une interface de pilotage (MATLAB) organisée en plusieurs onglets</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                  <span>Modélisation du système par IA (réseau de neurones, régression Ridge)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                  <span>Validation expérimentale du modèle</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Résultats (stage en cours)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Avancement</h3>
              <p className="text-slate-600 leading-relaxed">
                Conception d&apos;une interface de pilotage complète (paramètres, centrage, caméra, calcul du réservoir) et d&apos;un onglet de vérification pour tester la stabilité du montage.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Perspectives</h3>
              <p className="text-slate-600 leading-relaxed">
                Poursuite de la validation du modèle par IA et évaluation des
                performances du réservoir optique sur des tâches de calcul
                (régression Ridge, classification).
              </p>
            </div>
          </div>
        </section>

        {/* Interface et modélisation par IA */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">
            Interface de pilotage et modélisation par IA
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Pilotage et robustesse</h3>
              <p className="text-slate-600 leading-relaxed">
                Interface MATLAB multi-onglets avec aperçus en direct, et gestion robuste des échecs d&apos;acquisition (tentatives, timeout).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Modélisation par IA</h3>
              <p className="text-slate-600 leading-relaxed">
                Un modèle d&apos;IA (réseau de neurones, régression Ridge) entraîné pour reproduire le comportement du réservoir optique.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Exemple concret : test de stabilité</h3>
            <p className="text-slate-600 leading-relaxed">
              Comparaison du speckle entre itérations n et n − 2 (même masque) : corrélation entre 0,9 et 1, avec une chute temporaire à confirmer entre les itérations 15 et 19.
            </p>
          </div>

          <a
            href="/reservoir-verification.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm"
          >
            Voir le compte-rendu complet (PDF)
          </a>
        </section>

        {/* Tech */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm">
              Reservoir Computing
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Fibres optiques
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Calcul neuromorphique
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              IA
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Régression Ridge
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              MATLAB
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              Python
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
