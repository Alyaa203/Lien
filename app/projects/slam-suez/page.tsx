import Link from "next/link";

export default function SlamSuez() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        <Link
          href="/projets"
          className="inline-flex items-center text-sm text-slate-500 hover:text-amber-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
              Robotique mobile · SLAM
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
              En cours
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            SLAM vision, LiDAR et inertiel pour un robot quadrupède (avec SUEZ)
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Projet ENSEIRB-MATMECA avec SUEZ : localiser un robot quadrupède sans GNSS dans des tunnels peu texturés.
          </p>
        </section>

        {/* Image */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src="/suez.png"
              alt="Robot quadrupède et pipeline SLAM du projet avec SUEZ"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Contexte + Objectif */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Dans des tunnels souterrains peu texturés, le GNSS est indisponible et la localisation classique devient peu fiable.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Ajouter des caméras RGB au SLAM LiDAR et inertiel existant (LIO-SAM, ROS) pour renforcer la robustesse de la localisation.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
              <span>Intégration de caméras RGB au pipeline LIO-SAM existant (ROS)</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
              <span>Fusion des données LiDAR, centrale inertielle et vision</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
              <span>Tests en simulation avant déploiement sur le robot réel</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
              <span>Évaluation en environnement peu texturé (tunnels)</span>
            </li>
          </ul>
        </section>

        {/* Avancement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Avancement (projet en cours)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">En cours</h3>
              <p className="text-slate-600 leading-relaxed">
                Intégration des caméras RGB au pipeline LIO-SAM, premiers tests en simulation.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Perspectives</h3>
              <p className="text-slate-600 leading-relaxed">
                Validation sur le robot quadrupède réel en environnement tunnel.
              </p>
            </div>
          </div>
        </section>

        {/* Tech */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            {["ROS", "LIO-SAM", "SLAM", "Fusion de capteurs", "LiDAR", "Vision", "Robot quadrupède"].map((t) => (
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
