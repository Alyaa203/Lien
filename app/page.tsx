import Link from "next/link";

type Project = {
  href: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  tech: string;
};

const codingProjects: Project[] = [
  {
    href: "/projects/XAI",
    badge: "IA explicable",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Classification de pigments (XAI)",
    description:
      "Modèles de deep learning appliqués à des données hyperspectrales avec interprétation par SHAP et LIME.",
    tech: "Python · Deep Learning · XAI",
  },
  {
    href: "/projects/EEG",
    badge: "Signal Processing",
    badgeColor: "bg-cyan-100 text-cyan-700",
    title: "Analyse de signaux EEG",
    description:
      "Modélisation de l’effet de la musique sur l’activité cérébrale à partir de signaux EEG et d’outils d’analyse fréquentielle.",
    tech: "Python · FFT · Signal Processing",
  },
  {
    href: "/projects/TransD",
    badge: "Audio interactif",
    badgeColor: "bg-pink-100 text-pink-700",
    title: "Hackaphone – méta-instrument musical",
    description:
      "Système interactif permettant de contrôler et transformer un flux audio en temps réel via smartphone ou manette Bluetooth.",
    tech: "Python · OSC · Audio Processing",
  },
];

const physicsProjects: Project[] = [
  {
    href: "/projects/schrodinger",
    badge: "Physique quantique",
    badgeColor: "bg-indigo-100 text-indigo-700",
    title: "Simulation quantique (Schrödinger)",
    description:
      "Simulation numérique avec calcul des états propres et étude de l’évolution temporelle d’un système quantique.",
    tech: "Python · NumPy · SciPy",
  },
  {
    href: "/projects/Subatomique",
    badge: "Physique subatomique",
    badgeColor: "bg-violet-100 text-violet-700",
    title: "Compteur de Müller en subatomique",
    description:
      "Travaux pratiques autour de mesures expérimentales et d’analyses statistiques sur un compteur de Müller.",
    tech: "Python · Analyse de données",
  },
  {
    href: "/projects/Optique",
    badge: "Optique",
    badgeColor: "bg-sky-100 text-sky-700",
    title: "Diffraction en optique",
    description:
      "Étude expérimentale et numérique des phénomènes de diffraction en optique.",
    tech: "Python · Modélisation · Physique",
  },
  {
    href: "/projects/TIPE",
    badge: "Projet long",
    badgeColor: "bg-fuchsia-100 text-fuchsia-700",
    title: "TIPE",
    description:
      "Projet scientifique mené sur un an et demi en classe préparatoire, avec une démarche expérimentale et analytique.",
    tech: "Matlab · Modélisation · Recherche",
  },
];

const uxProjects: Project[] = [
  {
    href: "/projects/comunique",
    badge: "Application mobile",
    badgeColor: "bg-orange-100 text-orange-700",
    title: "COM’UNIQUE – plateforme de communication étudiante",
    description:
      "Développement d’une application mobile visant à centraliser les informations de la vie étudiante : événements, annuaire, communication avec l’administration et gestion des informations importantes.",
    tech: "Flutter · Dart · UX Design · Tests utilisateurs",
  },
  {
    href: "/projects/CCU",
    badge: "UX Design · Projet annuel",
    badgeColor: "bg-emerald-100 text-emerald-700",
    title: "Conception centrée utilisateur (CCU)",
    description:
      "Projet mené sur un an intégrant idéation, conception de maquettes et tests utilisateurs. Approche complète de la démarche UX appliquée à plusieurs cas d’étude.",
    tech: "UX Research · Prototypage · Tests utilisateurs · Figma",
  },
];

const statsProjects: Project[] = [
  {
    href: "/projects/Statistique",
    badge: "Statistiques",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "Étude statistique de l’activation de l’aire de Broca",
    description:
      "Analyse statistique de données expérimentales portant sur l’activation de l’aire de Broca, avec interprétation des résultats.",
    tech: "R Studio · ANOVA · Statistiques",
  },
];

const matlabProjects: Project[] = [
  {
    href: "/projects/filtrage",
    badge: "Traitement d’image",
    badgeColor: "bg-rose-100 text-rose-700",
    title: "Filtrage des images",
    description:
      "Projet de traitement d’image sous Matlab autour de techniques de filtrage et d’amélioration visuelle.",
    tech: "Matlab · Image Processing",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href}>
      <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div
          className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${project.badgeColor}`}
        >
          {project.badge}
        </div>

        <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">{project.description}</p>

        <p className="mt-4 text-sm font-medium text-slate-500">{project.tech}</p>
      </div>
    </Link>
  );
}

function ProjectSection({
  id,
  title,
  description,
  projects,
}: {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">{description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        {/* Hero */}
        <section className="mb-16 grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-56 w-56 md:h-72 md:w-72">
              <img
                src="/moi.JPG"
                alt="Alyaa Saab"
                className="h-full w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
              Portfolio
            </p>

            <h1 className="mt-2 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Alyaa Saab
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Étudiante à l’École nationale supérieure de cognitique (ENSC) et en
              double cursus de physique quantique.
            </p>

         

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#coding"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Code & IA
              </a>
              <a
                href="#physics"
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                Physique
              </a>
              <a
                href="#ux"
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                UX Design
              </a>
              <a
                href="#stats"
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                Statistiques
              </a>
              <a
                href="#matlab"
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                Matlab
              </a>
            </div>
          </div>
        </section>

        {/* Intro projets */}
        <section className="mb-16 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-3xl font-bold tracking-tight">Mes projets</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Les projets sont organisés par domaine pour rendre la navigation plus
            claire et permettre une lecture rapide de mon profil, entre code,
            recherche, physique, UX et outils d’analyse.
          </p>
        </section>

        {/* Sections projets */}
        <ProjectSection
          id="coding"
          title="Code, IA et traitement du signal"
          description="Projets techniques en programmation, intelligence artificielle, audio et analyse de signaux."
          projects={codingProjects}
        />

        <ProjectSection
          id="physics"
          title="Physique et modélisation scientifique"
          description="Projets liés à la physique quantique, subatomique, optique et modélisation numérique."
          projects={physicsProjects}
        />

        <ProjectSection
          id="ux"
          title="UX Design et conception centrée utilisateur"
          description="Projets orientés expérience utilisateur, prototypage, recherche et tests utilisateurs."
          projects={uxProjects}
        />

        <ProjectSection
          id="stats"
          title="Statistiques et analyse de données"
          description="Travaux d’analyse statistique, expérimentation et interprétation de résultats."
          projects={statsProjects}
        />

        <ProjectSection
          id="matlab"
          title="Projets Matlab"
          description="Travaux en traitement d’image et calcul scientifique réalisés sous Matlab."
          projects={matlabProjects}
        />

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
                traitement du signal, UX, recherche appliquée et modélisation
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
                <p className="mt-1 font-semibold">
                  www.linkedin.com/in/alyaa-saab-ensc
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">GitHub</p>
                <p className="mt-1 font-semibold">
                  github.com/Alyaa203
                </p>
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