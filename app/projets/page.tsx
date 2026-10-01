import Link from "next/link";
import { Kicker, TechTag, type Tone } from "../components/blueprint";

type Project = {
  href: string;
  badge: string;
  tone: Tone;
  title: string;
  description: string;
  tech: string;
  status?: "current";
};

// ── Expérience professionnelle ──────────────────────────────────────────────
const experienceProjects: Project[] = [
  {
    href: "/projects/reservoir",
    badge: "Stage de recherche · Institut d'Optique / INRIA",
    tone: "teal",
    status: "current",
    title: "Reservoir Computing optique à base de fibres",
    description:
      "Stage de recherche (3 mois, en cours) à l'Institut d'Optique Graduate School en collaboration avec l'INRIA : développement d'un système de calcul neuromorphique basé sur des fibres optiques, conception d'une interface de pilotage (MATLAB), et modélisation par IA (réseau de neurones, régression Ridge) pour valider le montage.",
    tech: "Reservoir Computing · Fibres optiques · IA · Régression Ridge · MATLAB · Python",
  },
  {
    href: "/projects/XAI",
    badge: "Stage de recherche · CNRS / Sorbonne Université",
    tone: "blue",
    title: "Intelligence Artificielle Explicable (XAI)",
    description:
      "Stage de recherche (1 mois, 2025) au Laboratoire de Chimie Physique Matière et Rayonnement (CNRS / Sorbonne Université) : développement de modèles de deep learning pour classifier des données hyperspectrales, application de méthodes XAI (SHAP, LIME) et présentation orale des résultats lors d'un workshop interdisciplinaire.",
    tech: "Python · Deep Learning · XAI · SHAP · LIME",
  },
];

// ── Robotique et systèmes embarqués ────────────────────────────────────────
const roboticsProjects: Project[] = [
  {
    href: "/projects/FirstBot",
    badge: "Robotique mobile · Systèmes embarqués",
    tone: "orange",
    title: "FirstBot, construire son premier robot",
    description:
      "Conception d'un robot mobile autonome : châssis en CAO découpé au laser, servomoteurs Dynamixel pilotés depuis une Raspberry Pi, vision par caméra pour le suivi de ligne, odométrie, déplacement vers une cible et cartographie de la piste.",
    tech: "Python · Raspberry Pi · OpenCV · Dynamixel · Odométrie · CAO",
  },
];

// ── Traitement du signal et modélisation ────────────────────────────────────
const signalProjects: Project[] = [
  {
    href: "/projects/schrodinger",
    badge: "Modélisation numérique · FFT",
    tone: "indigo",
    title: "Simulation numérique de l'équation de Schrödinger",
    description:
      "Solveur Python de l'équation de Schrödinger dépendant du temps via la méthode Split-Step Fourier (FFT), pour la propagation de paquets d'onde et l'analyse spectrale dans le domaine fréquentiel.",
    tech: "Python · NumPy · SciPy · FFT",
  },
  {
    href: "/projects/EEG",
    badge: "Traitement du signal",
    tone: "cyan",
    title: "Analyse de signaux EEG",
    description:
      "Conception d'un protocole expérimental multi-capteurs, acquisition de signaux physiologiques, filtrage et analyse fréquentielle (FFT) pour modéliser l'effet de stimuli musicaux sur l'activité cérébrale.",
    tech: "Python · FFT · Filtrage · Traitement du signal",
  },
  {
    href: "/projects/Optique",
    badge: "Optique · Ondes",
    tone: "sky",
    title: "Diffraction en optique",
    description:
      "Étude expérimentale et numérique des phénomènes de diffraction, avec modélisation de la propagation d'ondes et analyse des distributions d'intensité.",
    tech: "Python · Modélisation · Physique des ondes",
  },
  {
    href: "/projects/filtrage",
    badge: "Traitement d'image · Matlab",
    tone: "rose",
    title: "Filtrage des images",
    description:
      "Implémentation sous Matlab de chaînes de traitement d'image : filtrage fréquentiel, convolution et amélioration de signal.",
    tech: "Matlab · Filtrage · Traitement du signal",
  },
];

// ── Code et intelligence artificielle ───────────────────────────────────────
const codingProjects: Project[] = [
  {
    href: "/projects/TransD",
    badge: "Audio interactif",
    tone: "pink",
    title: "Hackaphone, méta-instrument musical",
    description:
      "Système interactif permettant de contrôler et transformer un flux audio en temps réel via smartphone ou manette Bluetooth.",
    tech: "Python · OSC",
  },
  {
    href: "/projects/MOBI",
    badge: "Développement mobile · React",
    tone: "purple",
    title: "Jeu de combat de cartes, Projet MOBI",
    description:
      "Application mobile de jeu de cartes compétitif (inspiré de Hearthstone) développée en ReactJS : authentification Google, collection de cartes via API externe, construction de deck et combats PvP en temps réel synchronisés via Firebase.",
    tech: "ReactJS · Firebase · MaterialUI · API externe · Netlify",
  },
];

// ── Modélisation et automatique ─────────────────────────────────────────────
const modelingProjects: Project[] = [
  {
    href: "/projects/TIPE",
    badge: "Projet long",
    tone: "fuchsia",
    title: "TIPE : modélisation d'un système dynamique",
    description:
      "Étude expérimentale de l'érosion des falaises d'Étretat et développement d'un modèle numérique décrivant la dynamique du phénomène.",
    tech: "Matlab · Modélisation · Automatique",
  },
];

// ── UX Design ────────────────────────────────────────────────────────────────
const uxProjects: Project[] = [
  {
    href: "/projects/comunique",
    badge: "Application mobile",
    tone: "orange",
    title: "COM'UNIQUE, plateforme de communication étudiante",
    description:
      "Développement d'une application mobile visant à centraliser les informations de la vie étudiante : événements, annuaire, communication avec l'administration.",
    tech: "Flutter · Dart · UX Design · Tests utilisateurs",
  },
  {
    href: "/projects/CCU",
    badge: "UX Design · Projet annuel",
    tone: "emerald",
    title: "Conception centrée utilisateur (CCU)",
    description:
      "Projet mené sur un an intégrant idéation, conception de maquettes et tests utilisateurs.",
    tech: "UX · Prototypage · Tests utilisateurs · Figma",
  },
];

// ── Statistiques ─────────────────────────────────────────────────────────────
const statsProjects: Project[] = [
  {
    href: "/projects/Statistique",
    badge: "Statistiques",
    tone: "amber",
    title: "Étude statistique de l'activation de l'aire de Broca",
    description:
      "Analyse statistique de données expérimentales portant sur l'activation de l'aire de Broca, avec interprétation des résultats.",
    tech: "R Studio · ANOVA · Statistiques",
  },
];

const navItems = [
  { label: "Expérience professionnelle", href: "#experience" },
  { label: "Robotique", href: "#robotics" },
  { label: "Traitement du signal", href: "#signal" },
  { label: "Programmation", href: "#coding" },
  { label: "Modélisation", href: "#modeling" },
  { label: "UX Design", href: "#ux" },
  { label: "Statistiques", href: "#stats" },
];

function ProjectCard({ project }: { project: Project }) {
  const techs = project.tech
    .split("·")
    .map((t) => t.trim())
    .filter(Boolean);
  return (
    <Link href={project.href} className="block h-full">
      <div className="group h-full cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Kicker tone={project.tone}>{project.badge}</Kicker>
          {project.status === "current" && <Kicker tone="amber">Stage en cours</Kicker>}
        </div>
        <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
          {project.title}
        </h3>
        <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techs.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
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
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
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

export default function Projets() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        <section className="mb-10">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">Projets</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Mes projets
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Expérience professionnelle et projets académiques, classés par domaine.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium border bg-white text-slate-700 border-slate-300 hover:border-slate-400 transition"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <ProjectSection
          id="experience"
          title="Expérience professionnelle"
          description="Stages et alternance."
          projects={experienceProjects}
        />

        <ProjectSection
          id="robotics"
          title="Robotique et systèmes embarqués"
          description="Conception et programmation de robots mobiles : mécanique, électronique, vision et commande."
          projects={roboticsProjects}
        />

        <ProjectSection
          id="signal"
          title="Traitement numérique du signal et modélisation"
          description="Analyse fréquentielle, FFT, filtrage et modélisation de systèmes physiques, en Python et Matlab."
          projects={signalProjects}
        />

        <ProjectSection
          id="coding"
          title="Code et Intelligence artificielle"
          description="Projets en programmation, deep learning et traitement audio."
          projects={codingProjects}
        />

        <ProjectSection
          id="modeling"
          title="Modélisation et automatique"
          description="Projets de modélisation numérique de systèmes dynamiques."
          projects={modelingProjects}
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
          description="Travaux d'analyse statistique, expérimentation et interprétation de résultats."
          projects={statsProjects}
        />
      </div>
    </main>
  );
}
