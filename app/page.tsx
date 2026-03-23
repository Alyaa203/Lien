import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <section className="mb-16 grid gap-10 md:grid-cols-2 items-center">

          {/* Photo  */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <img
                src="/moi.JPG"
                alt="Alyaa Saab"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Texte  */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Alyaa Saab
            </h1>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-800">
             
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed max-w-xl">
              Étudiante à l'école nationale supérieure de cognitique (ENSC) et en double cursus de physique quantique.
            </p>
          </div>

          </section>

        {/* Projects */}
        <section id="projets" className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Mes projets</h2>
            <p className="mt-2 text-slate-600">
              Une sélection de travaux en IA, calcul scientifique, audio et
              traitement du signal.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/projects/XAI">
              <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  IA explicable
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600">
                  Classification de pigments (XAI)
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Modèles de deep learning appliqués à des données
                  hyperspectrales avec interprétation par SHAP et LIME.
                </p>
                <p className="mt-4 text-sm font-medium text-slate-500">
                  Python · Deep Learning · XAI
                </p>
              </div>
            </Link>

            <Link href="/projects/schrodinger">
              <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Calcul scientifique
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600">
                  Simulation quantique (Schrödinger)
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Simulation numérique avec calcul des états propres et étude de
                  l’évolution temporelle d’un système quantique.
                </p>
                <p className="mt-4 text-sm font-medium text-slate-500">
                  Python · NumPy · SciPy
                </p>
              </div>
            </Link>

            <Link href="/projects/EEG">
              <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Signal Processing
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600">
                  Analyse de signaux EEG
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Modélisation de l’effet de la musique sur l’activité cérébrale
                  à partir de signaux EEG et d’outils d’analyse fréquentielle.
                </p>
                <p className="mt-4 text-sm font-medium text-slate-500">
                  Python · FFT · Signal Processing
                </p>
              </div>
            </Link>

            <Link href="/projects/TransD">
              <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
                  Audio interactif
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-pink-600">
                  Hackaphone – méta-instrument musical
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Système interactif permettant de contrôler et transformer un
                  flux audio en temps réel via smartphone ou manette Bluetooth.
                </p>
                <p className="mt-4 text-sm font-medium text-slate-500">
                  Python · OSC · Audio Processing
                </p>
              </div>
            </Link>
            <Link href="/projects/comunique">
        <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          
          <div className="mb-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            Application mobile
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600">
            COM’UNIQUE – plateforme de communication étudiante
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Développement d’une application mobile visant à centraliser les informations
            de la vie étudiante : événements, annuaire, communication avec l’administration
            et gestion des informations importantes.
          </p>

          <p className="mt-4 text-sm font-medium text-slate-500">
            Flutter · Dart · UX Design · Tests utilisateurs
          </p>

        </div>
      </Link>
      <Link href="/projects/CCU">
        <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          
          <div className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            UX Design · Projet annuel
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600">
            Conception centrée utilisateur (CCU)
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Projet mené sur un an intégrant idéation, conception de maquettes et tests utilisateurs.
            Approche complète de la démarche UX appliquée à plusieurs cas d’étude.
          </p>

          <p className="mt-4 text-sm font-medium text-slate-500">
            UX Research · Prototypage · Tests utilisateurs · Figma
          </p>

        </div>
      </Link>
      <Link href="/projects/Statistique">
      <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          
          <div className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Projet statistique sur une étude de l'activation de l'aire de Borca 
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600">
            R studio 
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Nous avons réalisé un projet qui étudie l'activatio
          </p>

          <p className="mt-4 text-sm font-medium text-slate-500">
            R studio , ANOVA
          </p>

        </div>
      </Link>
  
      <Link href="/projects/Subatomique">
      <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          
          <div className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Projet statistique sur le compteur de Muller en Subatomique
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600">
            Subatomique 
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
           Nous avons réalisé un travaux pratique sur le com
          </p>

          <p className="mt-4 text-sm font-medium text-slate-500">
            Python 
          </p>

        </div>
      </Link>
      <Link href="/projects/Optique">
      <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          
          <div className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Projet statistique sur le compteur de Muller en Subatomique
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600">
            Diffraction en optique  
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
           Nous avons réalisé un travaux pratique sur le com
          </p>

          <p className="mt-4 text-sm font-medium text-slate-500">
            Python 
          </p>

        </div>
      </Link>



          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-2xl"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Contactez-moi</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Je suis intéressée par les projets en intelligence artificielle,
                traitement du signal, recherche appliquée et modélisation
                scientifique.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Email</p>
                <p className="mt-1 font-semibold">alyaa.saabfr@gmail.com</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">LinkedIn</p>
                <p className="mt-1 font-semibold">www.linkedin.com/in/alyaa-saab-ensc</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">GitHub</p>
                <p className="mt-1 font-semibold">https://github.com/Alyaa203</p>
              </div>
            </div>
          </div>
        </section>
      

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-slate-500">
          © 2026 Alyaa Saab — Portfolio personnel
        </footer>
      </div>
    </main>
  );
}