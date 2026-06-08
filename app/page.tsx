"use client";
import Link from "next/link";
import { useState } from "react";

type Project = {
  href: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  tech: string;
};

// ── Section mise en avant CNES ──────────────────────────────────────────────
const signalProjects: Project[] = [
  {
    href: "/projects/schrodinger",
    badge: "Modélisation numérique · FFT",
    badgeColor: "bg-indigo-100 text-indigo-700",
    title: "Simulation numérique de l'équation de Schrödinger",
    description:
      "Solveur Python de l'équation de Schrödinger dépendant du temps via la méthode Split-Step Fourier (FFT) — propagation de paquets d'onde et analyse spectrale dans le domaine fréquentiel.",
    tech: "Python · NumPy · SciPy · FFT",
  },
  {
    href: "/projects/EEG",
    badge: "Traitement du signal",
    badgeColor: "bg-cyan-100 text-cyan-700",
    title: "Analyse de signaux EEG",
    description:
      "Conception d'un protocole expérimental multi-capteurs, acquisition de signaux physiologiques, filtrage et analyse fréquentielle (FFT) pour modéliser l'effet de stimuli musicaux sur l'activité cérébrale.",
    tech: "Python · FFT · Filtrage · Traitement du signal",
  },
  {
    href: "/projects/Optique",
    badge: "Optique · Ondes",
    badgeColor: "bg-sky-100 text-sky-700",
    title: "Diffraction en optique",
    description:
      "Étude expérimentale et numérique des phénomènes de diffraction — modélisation de la propagation d'ondes et analyse des distributions d'intensité.",
    tech: "Python · Modélisation · Physique des ondes",
  },
  {
    href: "/projects/filtrage",
    badge: "Traitement d'image · Matlab",
    badgeColor: "bg-rose-100 text-rose-700",
    title: "Filtrage des images",
    description:
      "Implémentation sous Matlab de chaînes de traitement d'image : filtrage fréquentiel, convolution et amélioration de signal.",
    tech: "Matlab · Filtrage · Traitement du signal",
  },
];

// ── Autres projets ───────────────────────────────────────────────────────────
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
    href: "/projects/TransD",
    badge: "Audio interactif",
    badgeColor: "bg-pink-100 text-pink-700",
    title: "Hackaphone – méta-instrument musical",
    description:
      "Système interactif permettant de contrôler et transformer un flux audio en temps réel via smartphone ou manette Bluetooth.",
    tech: "Python · OSC",
  },
  {
    href: "/projects/MOBI",
    badge: "Développement mobile · React",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Jeu de combat de cartes – Projet MOBI",
    description:
      "Application mobile de jeu de cartes compétitif (inspiré de Hearthstone) développée en ReactJS : authentification Google, collection de cartes via API externe, construction de deck et combats PvP en temps réel synchronisés via Firebase.",
    tech: "ReactJS · Firebase · MaterialUI · API externe · Netlify",
  },
];

const physicsProjects: Project[] = [
  {
    href: "/projects/Subatomique",
    badge: "Physique subatomique",
    badgeColor: "bg-violet-100 text-violet-700",
    title: "Compteur de Müller en subatomique",
    description:
      "Travaux pratiques autour de mesures expérimentales et d'analyses statistiques sur un compteur de Müller.",
    tech: "Python · Analyse de données",
  },
  {
    href: "/projects/TIPE",
    badge: "Projet long",
    badgeColor: "bg-fuchsia-100 text-fuchsia-700",
    title: "TIPE — Modélisation d'un système dynamique",
    description:
      "Étude expérimentale de l'érosion des falaises d'Étretat et développement d'un modèle physique décrivant la dynamique du phénomène.",
    tech: "Matlab · Modélisation",
  },
];

const uxProjects: Project[] = [
  {
    href: "/projects/comunique",
    badge: "Application mobile",
    badgeColor: "bg-orange-100 text-orange-700",
    title: "COM'UNIQUE – plateforme de communication étudiante",
    description:
      "Développement d'une application mobile visant à centraliser les informations de la vie étudiante : événements, annuaire, communication avec l'administration.",
    tech: "Flutter · Dart · UX Design · Tests utilisateurs",
  },
  {
    href: "/projects/CCU",
    badge: "UX Design · Projet annuel",
    badgeColor: "bg-emerald-100 text-emerald-700",
    title: "Conception centrée utilisateur (CCU)",
    description:
      "Projet mené sur un an intégrant idéation, conception de maquettes et tests utilisateurs.",
    tech: "UX · Prototypage · Tests utilisateurs · Figma",
  },
];

const statsProjects: Project[] = [
  {
    href: "/projects/Statistique",
    badge: "Statistiques",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "Étude statistique de l'activation de l'aire de Broca",
    description:
      "Analyse statistique de données expérimentales portant sur l'activation de l'aire de Broca, avec interprétation des résultats.",
    tech: "R Studio · ANOVA · Statistiques",
  },
];

// ── Composants ───────────────────────────────────────────────────────────────
const navItems = [
  { label: "Traitement du signal", href: "#signal" },
  { label: "Programmation", href: "#coding" },
  { label: "Physique", href: "#physics" },
  { label: "UX Design", href: "#ux" },
  { label: "Statistiques", href: "#stats" },
];

function NavButtons() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {navItems.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActive(href)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition border ${
            active === href
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

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
  highlight?: boolean;
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

// ── Page ─────────────────────────────────────────────────────────────────────
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
              Étudiante à l'École nationale supérieure de cognitique (ENSC) et en
              double cursus de physique quantique.
            </p>

            <NavButtons />
          </div>
        </section>

        {/* ── Section mise en avant ── */}
        <ProjectSection
          id="signal"
          title="Traitement numérique du signal et modélisation"
          description="Analyse fréquentielle, FFT, filtrage et modélisation de systèmes physiques — en Python et Matlab."
          projects={signalProjects}
        />

        {/* ── Autres sections ── */}
        <ProjectSection
          id="coding"
          title="Code et Intelligence artificielle"
          description="Projets en programmation, deep learning et traitement audio."
          projects={codingProjects}
        />

        <ProjectSection
          id="physics"
          title="Physique et modélisation scientifique"
          description="Projets liés à la physique subatomique, optique et modélisation numérique."
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
          description="Travaux d'analyse statistique, expérimentation et interprétation de résultats."
          projects={statsProjects}
        />

        {/* Contact */}
        <section
          id="contact"
          className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-2xl"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mt-4 leading-7 text-slate-300">
                N'hésitez pas à me contacter pour toute question ou échange.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:alyaa.saabfr@gmail.com"
                className="block rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="text-slate-400">Email</span>
                <div className="font-medium text-white">alyaa.saabfr@gmail.com</div>
              </a>
              <a
                href="https://www.linkedin.com/in/alyaa-saab-ensc"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="text-slate-400">LinkedIn</span>
                <div className="font-medium text-white">linkedin.com/in/alyaa-saab-ensc</div>
              </a>
              <a
                href="https://github.com/Alyaa203"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="text-slate-400">GitHub</span>
                <div className="font-medium text-white">github.com/Alyaa203</div>
              </a>
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