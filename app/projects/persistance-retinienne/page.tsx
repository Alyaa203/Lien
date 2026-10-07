import Link from "next/link";

export default function PersistanceRetinienne() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        <Link
          href="/projets"
          className="inline-flex items-center text-sm text-slate-500 hover:text-violet-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
            Systèmes embarqués · 2026
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Afficheur à persistance rétinienne sur microcontrôleur
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Une horloge affichée par une barre de 16 LED qui tourne vite : l&apos;œil perçoit une image fixe.
          </p>
        </section>

        {/* Image */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src="/horlloge.png"
              alt="Afficheur à persistance rétinienne affichant l'heure"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              La persistance rétinienne : une barre de LED tournant assez vite pour que l&apos;œil perçoive une image fixe plutôt qu&apos;un point lumineux mobile.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Afficher une horloge lisible sur 16 LED, programmée en C sur microcontrôleur AVR, sans bibliothèque.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500"></span>
              <span>Programmation bas niveau en C sur microcontrôleur AVR, sans bibliothèque</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500"></span>
              <span>Détection de chaque tour via un capteur magnétique</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500"></span>
              <span>Mesure du temps avec les timers du microcontrôleur</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500"></span>
              <span>Réglage de l&apos;heure par Bluetooth</span>
            </li>
          </ul>
        </section>

        {/* Fonctionnement */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Fonctionnement</h2>
          <p className="text-slate-600 leading-relaxed">
            Chaque tour de la barre de LED est synchronisé grâce au capteur magnétique, ce qui permet d&apos;afficher l&apos;heure de façon stable malgré la vitesse de rotation.
          </p>
        </section>

        {/* Tech */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            {["C embarqué", "AVR", "Timers", "Bluetooth", "Capteurs", "Microcontrôleur"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
