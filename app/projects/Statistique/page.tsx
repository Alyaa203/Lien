"use client";

import Link from "next/link";
import { useState } from "react";

export default function StatistiqueProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/stat1.png",
      alt: "Illustration aire de Broca",
      caption: "Localisation de l’aire de Broca",
    },
    {
      src: "/stat2.png",
      alt: "Statistiques descriptives",
      caption: "Statistiques descriptives",
    },
    {
      src: "/stat3.png",
      alt: "Matrice de corrélation",
      caption: "Matrice de corrélation",
    },
    {
      src: "/stat4.png",
      alt: "Analyse en composantes principales",
      caption: "Analyse en composantes principales",
    },
    {
      src: "/stat5.png",
      alt: "Modèle de régression linéaire",
      caption: "Modèle de régression linéaire",
    },
    {
      src: "/stat6.png",
      alt: "ANOVA",
      caption: "Test ANOVA",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-slate-500 transition hover:text-indigo-600"
        >
          ← Retour à l’accueil
        </Link>

        <section className="mb-12">
          <div className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
            Projet de statistique
          </div>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            Analyse statistique de l’activation de l’aire de Broca
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Dans ce projet réalisé en groupe de 5, j’ai participé à l’analyse
            statistique de données cérébrales afin de comprendre les facteurs
            influençant l’activation de l’aire de Broca gauche lors d’une tâche
            de langage.
          </p>
        </section>

        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Contexte</h2>
            <p className="leading-relaxed text-slate-600">
              Je me suis inscrit dans une étude sur la latéralisation du langage
              dans le cerveau. L’objectif était d’explorer les relations entre
              différentes régions cérébrales et certaines variables individuelles
              comme l’âge, le sexe ou le volume cérébral.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Objectif</h2>
            <p className="leading-relaxed text-slate-600">
              Mon objectif était d’expliquer l’activation de l’aire de Broca
              gauche à partir de plusieurs variables explicatives, en utilisant
              des méthodes statistiques adaptées.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-2xl font-semibold">Méthodologie</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <ul className="list-inside list-disc space-y-2 text-slate-600">
                <li>Analyse descriptive des variables</li>
                <li>Analyse en composantes principales (ACP)</li>
                <li>Régression linéaire multiple</li>
                <li>Tests statistiques (ANOVA)</li>
              </ul>
            </div>

            <div>
              <p className="leading-relaxed text-slate-600">
                J’ai contribué à la mise en place des modèles statistiques et à
                l’interprétation des résultats afin d’identifier les variables
                les plus influentes sur l’activation cérébrale.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">Résultats</h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="leading-relaxed text-slate-600">
              Les analyses ont permis de mettre en évidence des relations entre
              certaines régions cérébrales et l’activation de l’aire de Broca.
              La régression linéaire a montré que certaines variables expliquent
              une partie significative de la variabilité observée.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Résultats visuels</h2>
              <p className="mt-2 text-sm text-slate-500">
                Cliquez sur une image pour l’agrandir.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {images.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image.src)}
                className="overflow-hidden rounded-2xl bg-white p-4 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-[420px] w-full rounded-xl object-contain"
                />
                <p className="mt-3 text-center text-sm text-slate-600">
                  {image.caption}
                </p>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-semibold">
            Compétences développées
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Statistiques",
              "Régression linéaire",
              "ACP",
              "Analyse de données",
              "R / Python",
              "Travail en équipe",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-3xl font-light text-white transition hover:opacity-80"
              aria-label="Fermer l’image"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Image agrandie"
              className="max-h-[90vh] w-full rounded-2xl bg-white object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}