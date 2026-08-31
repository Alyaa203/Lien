"use client";

import Link from "next/link";
import { useState } from "react";

export default function OptiqueProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/opt1.png",
      alt: "Régimes de diffraction",
      caption: "Régime de Fresnel",
    },
    {
      src: "/opt2.png",
      alt: "Fraunhofer par fente fine",
      caption: "Régime intermédiaire",
    },
    {
      src: "/opt3.png",
      alt: "Bi-fente",
      caption: "Diffraction de Fraunhofer par une fente fine",
    },
    {
      src: "/opt4.png",
      alt: "Fentes de Young",
      caption: "Interférences de bi-fente sous enveloppe de diffraction",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <Link
          href="/projets"
          className="mb-8 inline-flex items-center text-sm text-slate-500 transition hover:text-indigo-600"
        >
          ← Retour à l’accueil
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
            Projet d’optique expérimentale
          </div>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            Diffraction et interférences en optique
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            En binôme, comparaison de phénomènes de diffraction et d’interférences aux modèles théoriques.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Contexte</h2>
            <p className="leading-relaxed text-slate-600">
              Analyse de plusieurs configurations (fente simple, bi-fente, fentes d’Young, réseau) en optique ondulatoire.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Objectif</h2>
            <p className="leading-relaxed text-slate-600">
              Vérifier les lois de Fresnel et de Fraunhofer, et estimer des paramètres comme la largeur d’une fente ou le pas d’un réseau.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-2xl font-semibold">Méthodologie</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <ul className="list-inside list-disc space-y-2 text-slate-600">
                <li>Observation des régimes de Fresnel et de Fraunhofer</li>
                <li>Mesure de la tache centrale pour une fente fine</li>
                <li>Étude des interférences par bi-fente</li>
                <li>Analyse de la cohérence spatiale avec les fentes d’Young</li>
                <li>Mesures spectrales avec un réseau en transmission</li>
                <li>Estimation des paramètres avec incertitudes</li>
              </ul>
            </div>

            <div>
              <p className="leading-relaxed text-slate-600">
                Acquisition des figures, traitement des profils d’intensité et comparaison aux lois théoriques.
              </p>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">Résultats</h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="leading-relaxed text-slate-600">
              Mesures cohérentes avec la théorie : largeur de fente ≈ 232 µm, écartement ≈ 1,16 mm, contraste de 0,57, réseau compatible avec 1200 traits/mm.
            </p>
          </div>
        </section>

        {/* Images */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Résultats visuels</h2>
            <p className="mt-2 text-sm text-slate-500">
              Cliquez sur une image pour l’agrandir.
            </p>
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

        {/* Compétences */}
        <section>
          <h2 className="mb-5 text-2xl font-semibold">
            Compétences développées
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Optique",
              "Diffraction",
              "Interférences",
              "Analyse expérimentale",
              "Traitement de données",
              "Incertitudes",
              "Travail en binôme",
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

      {/* Lightbox */}
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
