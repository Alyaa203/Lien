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
            collaboration avec l&apos;INRIA — développement d&apos;un système de calcul
            neuromorphique basé sur des fibres optiques, et étude des réservoirs
            optiques comme alternative aux implémentations numériques.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Le reservoir computing est une approche de calcul neuromorphique qui
              exploite la dynamique intrinsèque d&apos;un système physique — ici un
              montage à base de fibres optiques — comme réservoir non linéaire,
              plutôt que d&apos;entraîner l&apos;ensemble d&apos;un réseau de neurones.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Étudier les réservoirs optiques comme alternative aux implémentations
              numériques du reservoir computing, et modéliser/valider le système à
              l&apos;aide de jumeaux numériques.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le travail combine développement expérimental sur un montage à
                fibres optiques et modélisation numérique du système via des
                jumeaux numériques, permettant de comparer le comportement du
                réservoir physique à sa contrepartie simulée.
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
                  <span>Étude du réservoir optique comme alternative aux implémentations numériques</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-500"></span>
                  <span>Modélisation du système à l&apos;aide de jumeaux numériques</span>
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
                {/* TODO: décrire les résultats obtenus jusqu'ici */}
                Résultats préliminaires en cours de consolidation — cette section
                sera mise à jour au fur et à mesure de l&apos;avancement du stage.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Perspectives</h3>
              <p className="text-slate-600 leading-relaxed">
                {/* TODO: décrire les prochaines étapes envisagées */}
                Poursuite de la validation du jumeau numérique et évaluation des
                performances du réservoir optique sur des tâches de calcul.
              </p>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src="/reservoir1.png"
              alt="Montage ou résultats du réservoir optique"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            {/* TODO: remplacer reservoir1.png par le nom réel du fichier ajouté dans public/ */}
            Placeholder — ajoute une image dans public/ et mets à jour le nom du fichier.
          </p>
        </section>

        {/* Apports */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Ce que j’apprends</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce stage me permet d&apos;approfondir le lien entre optique physique et
            calcul neuromorphique, et de manipuler un système expérimental de
            bout en bout — du montage à fibres optiques jusqu&apos;à sa modélisation
            par jumeau numérique, en environnement de recherche.
          </p>
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
              Jumeaux numériques
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
