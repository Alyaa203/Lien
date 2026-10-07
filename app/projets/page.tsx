import Link from "next/link";
import { Kicker, TechTag } from "../components/blueprint";
import { projectSections, type Project, type ProjectSection } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={project.href} className="block flex-1 p-6">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="mb-4 h-40 w-full rounded-xl border border-slate-200 object-cover"
          />
        ) : (
          <div className="mb-4 flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-xs text-slate-400">
            Aperçu à venir
          </div>
        )}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Kicker tone={project.tone}>{project.badge}</Kicker>
          {project.statusLabel && <Kicker tone="amber">{project.statusLabel}</Kicker>}
        </div>
        <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
          {project.title}
        </h3>
        <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
      </Link>

      {(project.github || project.demo) && (
        <div className="flex gap-5 border-t border-slate-100 px-6 py-4 text-sm font-medium">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Voir le code →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 transition hover:text-blue-800"
            >
              Démo →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectSectionBlock({ section }: { section: ProjectSection }) {
  return (
    <section id={section.id} className="mb-16 scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          {section.title}
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">{section.description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {section.projects.map((project) => (
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
            {projectSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full px-4 py-2 text-sm font-medium border bg-white text-slate-700 border-slate-300 hover:border-slate-400 transition"
              >
                {section.title}
              </a>
            ))}
          </div>
        </section>

        {projectSections.map((section) => (
          <ProjectSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
