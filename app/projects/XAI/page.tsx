import Link from "next/link";

export default function XAIProject() {
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
      

        {/* HEADER */}
        <section className="mb-12">

          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            Stage de recherche – Sorbonne Université / CNRS
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Classification de pigments avec IA explicable (XAI)
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Stage de recherche portant sur l’interprétation de modèles de deep learning
            appliqués à des données hyperspectrales pour la classification de pigments
            historiques dans les œuvres d’art.
          </p>

        </section>
  {/* Image principale */}
  <section className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src="/CNN.png"
              alt="Visualisation de la simulation de l’équation de Schrödinger"
              className="w-full h-auto"
            />
          </div>
        </section>
        {/* CONTEXTE */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte scientifique</h2>
            <p className="text-slate-600 leading-relaxed">
              Le projet s’inscrit dans l’analyse de données hyperspectrales issues
              d’œuvres peintes. Chaque pigment est représenté par des signatures
              spectrales mesurées sur plusieurs centaines de longueurs d’onde,
              couvrant le visible et l’infrarouge.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Comprendre les décisions de modèles de deep learning (CNN, FCNN)
              en identifiant les zones spectrales influençant la prédiction des pigments,
              afin de rendre les modèles interprétables.
            </p>
          </div>

        </section>

        {/* METHODO */}
        <section className="mb-12 bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-slate-600 leading-relaxed">
                Deux approches d’intelligence artificielle explicable ont été utilisées :
                SHAP et LIME. Ces méthodes permettent d’attribuer une importance aux
                différentes zones du spectre en fonction de leur contribution à la prédiction.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>SHAP : valeurs de Shapley issues de la théorie des jeux</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>LIME : approximation locale du modèle</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Analyse sur spectres VIS et SWIR</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Segmentation en zones spectrales</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* RESULTATS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Résultats</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Performance des modèles</h3>
              <p className="text-slate-600">
                Les modèles CNN et FCNN atteignent respectivement ~99% et ~97% de précision,
                montrant la forte capacité de discrimination des signatures spectrales.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Interprétation</h3>
              <p className="text-slate-600">
                L’analyse SHAP/LIME permet d’identifier les zones spectrales pertinentes,
                mais montre également les limites des approches sans segmentation préalable.
              </p>
            </div>

          </div>
        </section>

        {/* DIFFICULTES */}
        <section className="mb-12 bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Difficultés</h2>

          <p className="text-slate-600 leading-relaxed">
            La principale difficulté réside dans la complexité des données hyperspectrales
            et l’adaptation des méthodes d’interprétabilité à des signaux continus.
            L’implémentation de DeepSHAP et l’analyse des résultats ont nécessité
            une compréhension approfondie des modèles et des données.
          </p>
        </section>

        {/* TECH */}
        <section className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">Python</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">Deep Learning</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">SHAP</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">LIME</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              Hyperspectral data
            </span>
          </div>
        </section>

      </div>
    </main>
  );
}