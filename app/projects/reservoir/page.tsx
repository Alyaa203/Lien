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
              Le reservoir computing est une approche de calcul neuromorphique qui
              exploite la dynamique intrinsèque d&apos;un système physique (ici un
              montage à base de fibres optiques) comme réservoir non linéaire,
              plutôt que d&apos;entraîner l&apos;ensemble d&apos;un réseau de neurones.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Étudier les réservoirs optiques comme alternative aux implémentations
              numériques du reservoir computing, et construire, par IA (réseau de
              neurones, régression Ridge), un modèle numérique du montage qui
              reproduit son comportement pour le valider et l&apos;analyser sans
              dépendre uniquement du banc optique physique.
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
                fibres optiques, conception logicielle d&apos;une interface de
                pilotage complète, et modélisation par IA (réseau de neurones,
                régression Ridge) du montage physique, permettant de comparer
                le comportement du réservoir physique à sa contrepartie simulée.
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
                J&apos;ai conçu et développé l&apos;interface de pilotage complète du
                montage (réglage des paramètres et du masque de phase, centrage
                du faisceau, contrôle caméra, boucle de calcul du réservoir), en
                soignant sa lisibilité et sa robustesse : retours visuels en
                direct, gestion des échecs d&apos;acquisition et export des données
                pour analyse. J&apos;ai aussi ajouté un onglet de vérification pour
                tester la stabilité du montage optique.
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
                L&apos;interface MATLAB réunit tous les onglets nécessaires au
                pilotage du montage (paramètres et masque de phase, centrage du
                faisceau, caméra, boucle de calcul du réservoir, vérification),
                avec un souci constant de lisibilité : aperçus en direct du
                masque envoyé au SLM, de l&apos;image caméra et des courbes de
                suivi. La robustesse est traitée dès l&apos;acquisition : plusieurs
                tentatives et un timeout court en cas d&apos;échec réseau, pour que
                le pilotage reste fiable sur de longues séries de mesures.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Modélisation par IA</h3>
              <p className="text-slate-600 leading-relaxed">
                Le modèle numérique n&apos;est pas une simple simulation physique :
                c&apos;est un modèle d&apos;IA (réseau de neurones, régression Ridge)
                entraîné pour reproduire le comportement entrée-sortie du
                réservoir optique, avec sa propre architecture et ses propres
                paramètres. Il permet de valider le montage physique par
                comparaison, et d&apos;explorer des configurations sans dépendre à
                chaque essai du banc optique.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Exemple concret : test de stabilité</h3>
            <p className="text-slate-600 leading-relaxed">
              Le SLM alterne strictement entre deux masques fixes, un pas sur
              deux : un masque uniforme et un masque en créneaux. Comme le
              motif se répète tous les deux pas, je compare le speckle capturé
              à l&apos;itération n avec celui capturé à l&apos;itération n − 2, qui
              correspond toujours au même masque. Sur un premier test de 20
              itérations, la corrélation reste entre 0,9 et 1 sur la majorité
              des itérations, confirmant la stabilité attendue du montage,
              avec une chute temporaire (jusqu&apos;à environ 0,6) entre les
              itérations 15 et 19 dont la cause reste à confirmer.
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

        {/* Apports */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Ce que j’apprends</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce stage me permet d&apos;approfondir le lien entre optique physique et
            calcul neuromorphique, et de manipuler un système expérimental de
            bout en bout, du montage à fibres optiques jusqu&apos;à sa modélisation
            par IA, en environnement de recherche.
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
