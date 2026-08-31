import Link from "next/link";

export default function MOBI() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        {/* Retour */}
        <Link
          href="/projets"
          className="inline-flex items-center text-sm text-slate-500 hover:text-purple-600 transition mb-8"
        >
          ← Retour à l'accueil
        </Link>

        {/* Hero */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            Développement mobile · React
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Jeu de combat de cartes, Projet MOBI
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Jeu de cartes compétitif inspiré de Hearthstone, où deux joueurs s'affrontent en temps réel via Firebase.
          </p>

          <div className="mt-8">
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="https://smash-princes.netlify.app/deck"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition shadow-sm"
              >
                Jouer au jeu
              </a>
            </div>
          </div>
        </section>

        {
    <section className="mb-12">
      <div className="flex justify-center">
        <img
          src="/mobi.png"
          alt="Capture du jeu de combat de cartes"
          className="max-w-sm h-auto rounded-2xl shadow-sm border border-slate-200"
        />
      </div>
    </section>
        }

        {/* Grille info */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Projet en binôme pour le cours de développement mobile à l'ENSC : architecture React, Firebase et API externe.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Un jeu de cartes PvP jouable sur mobile, avec deck, authentification Google et combats synchronisés en temps réel.
            </p>
          </div>
        </section>

        {/* Règles du jeu */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Règles du jeu</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed">
                Deck de 10 cartes (ATK/DEF), 5 PV par joueur. À chaque tour, le joueur actif attaque, l'adversaire bloque ou encaisse.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-500 shrink-0"></span>
                  <span>Deck de 10 cartes, 3 cartes sur le terrain à chaque tour</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-500 shrink-0"></span>
                  <span>5 Points de Vie par joueur</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-500 shrink-0"></span>
                  <span>ATK vs DEF : si ATK &gt; DEF, le défenseur perd 1 PV</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-500 shrink-0"></span>
                  <span>Attaque directe possible : la carte attaquante n'est pas défaussée</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-500 shrink-0"></span>
                  <span>Victoire : réduire les PV adverses à 0</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Fonctionnalités clés</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Authentification & Profil</h3>
              <p className="text-slate-600 leading-relaxed">
                Connexion via Google, profil persistant sauvegardé dans Firebase.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Collection de cartes</h3>
              <p className="text-slate-600 leading-relaxed">
                Cartes alimentées par une API externe, statistiques ATK/DEF communes à tous les joueurs.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Construction du deck</h3>
              <p className="text-slate-600 leading-relaxed">
                Sélection de 10 cartes avant chaque partie, sauvegardée en temps réel.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Combat PvP en temps réel</h3>
              <p className="text-slate-600 leading-relaxed">
                État du combat synchronisé en temps réel entre les deux appareils via Firebase.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">ReactJS</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">JavaScript</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">Firebase</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">API externe</span>
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">MaterialUI</span>
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">Netlify</span>
          </div>
        </section>

      </div>
    </main>
  );
}
