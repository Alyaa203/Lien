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
            Développement d’une application mobile visant à centraliser les
            informations de la vie étudiante (événements, contacts, annonces)
            et à simplifier la communication entre étudiants et administration.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              La communication au sein de l’école est dispersée entre plusieurs
              canaux (emails, réseaux, affichage), rendant l’accès à
              l’information difficile pour les étudiants.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Concevoir une application centralisée permettant de diffuser,
              organiser et rendre accessibles les informations importantes de
              la vie étudiante de manière simple et efficace.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le projet a été réalisé en équipe, en suivant une démarche
                centrée utilisateur (UX). Il inclut des phases de recherche,
                de conception, de développement mobile et de validation par
                des tests utilisateurs.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                  <span>Analyse du besoin et état de l’art</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                  <span>UX research et maquettage</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                  <span>Développement mobile (Flutter)</span>
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
                Mise en place d’un système centralisé incluant un fil
                d’informations, un calendrier d’événements, un annuaire et des
                outils de communication avec l’administration.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Validation utilisateur</h3>
              <p className="text-slate-600 leading-relaxed">
                Des tests utilisateurs ont permis d’identifier des problèmes
                d’ergonomie et d’améliorer l’interface, notamment sur la
                lisibilité et l’accès aux informations.
              </p>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="mb-12">
    <div className="flex justify-center gap-6 flex-wrap">
        
        <img
        src="/comunique.png"
        alt="App 1"
        className="w-40 rounded-2xl shadow-md"
        />
        <img
        src="/comunique4.png"
        alt="App 1"
        className="w-40 rounded-2xl shadow-md"
        />
    

        <img
        src="/comunique2.png"
        alt="App 2"
        className="w-40 rounded-2xl shadow-md"
        />

        <img
        src="/comunique3.png"
        alt="App 3"
        className="w-40 rounded-2xl shadow-md"
        />
        <img
        src="/c5.png"
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
            Ce projet m’a permis de travailler sur la conception d’un produit
            complet, depuis l’identification du besoin jusqu’au développement
            et aux tests utilisateurs. Il m’a également apporté une expérience
            en développement mobile et en travail collaboratif.
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
              Gestion de projet
            </span>
          </div>
        </section>

      </div>
    </main>
  );
}