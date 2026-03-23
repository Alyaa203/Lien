import Link from "next/link";

export default function Hackaphone() {
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
            Projet interactif – audio & temps réel
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Hackaphone – méta-instrument musical interactif
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Développement d’un système interactif permettant de contrôler et
            transformer la musique en temps réel à l’aide d’un smartphone ou
            d’une manette Bluetooth, via le protocole OSC.
          </p>
        </section>

        {/* CONTEXTE */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Projet réalisé en groupe visant à concevoir un instrument numérique
              interactif permettant de manipuler un flux audio en temps réel,
              dans une logique proche d’un contrôleur DJ ou d’un système de live performance.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Permettre à l’utilisateur de contrôler dynamiquement des paramètres
              audio à partir de capteurs externes (smartphone ou manette), et
              transformer le son en temps réel.
            </p>
          </div>

        </section>

        {/* METHODO */}
        <section className="mb-12 bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Architecture du système</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-slate-600 leading-relaxed">
                Les données issues des capteurs (smartphone ou manette Bluetooth)
                sont transmises via le protocole OSC à un programme Python chargé
                de traiter et transformer le signal audio en temps réel.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Transmission via Open Sound Control (OSC)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Traitement audio temps réel</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Mapping des capteurs → paramètres audio</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Interface graphique de contrôle</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* RESULTATS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Fonctionnalités</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Effets audio</h3>
              <p className="text-slate-600">
                Modification dynamique du signal audio avec différents effets :
                filtrage fréquentiel, distorsion, chorus, écho et réverbération.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Interaction utilisateur</h3>
              <p className="text-slate-600">
                Contrôle en temps réel via smartphone ou manette Bluetooth,
                permettant une interaction intuitive avec le système.
              </p>
            </div>

          </div>
        </section>

        {/* IMAGE */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden border bg-white shadow-sm">
            <img
              src="/hackaphone.png"
              alt="Interface du projet Hackaphone"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Interface graphique et contrôle du méta-instrument.
          </p>
        </section>
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden border bg-white shadow-sm">
            <img
              src="/hackaphone2.png"
              alt="Interface du projet Hackaphone"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Interface graphique et contrôle du méta-instrument.
          </p>
        </section>


        {/* APPORTS */}
        <section className="mb-12 bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Apports</h2>

          <p className="text-slate-600 leading-relaxed">
            Ce projet m’a permis de travailler sur des systèmes temps réel,
            d’intégrer des capteurs externes, et de concevoir une interaction
            homme-machine dans un contexte créatif et technique.
          </p>
        </section>

        {/* TECH */}
        <section className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
              Python
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
              Open Sound Control
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
              Audio processing
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              Temps réel
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
              Interface graphique
            </span>
          </div>
        </section>

      </div>
    </main>
  );
}