"use client";

import Link from "next/link";
import { useState } from "react";

export default function ErosionProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
 
 
    {
      src: "/tipe1.png",
      alt: "Mesure de la perméabilité et de la porosité",
    },
    {
      src: "/tipe2.png",
      alt: "Effet de la pluie et du pH",
    },
    {
      src: "/tipe3.png",
      alt: "Calcimètre de Bernard",
    },
    {
        src: "/tipe4.png",
        alt: "Présentation du sujet",
      },
      {
        src: "/tipe5.png",
        alt: "Présentation du sujet",
      },
      {
        src: "/tipe6.png",
        alt: "Présentation du sujet",
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
            Projet de géophysique expérimentale
          </div>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            Érosion des roches calcaires et risque pour les sentiers côtiers
          </h1>

 
        </section>

        {/* Contexte + Objectif */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Contexte</h2>
            <p className="leading-relaxed text-slate-600">
              Le GR21 longe les falaises normandes, soumises à une érosion continue pouvant rendre certains passages impraticables.
              </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Objectif</h2>
            <p className="leading-relaxed text-slate-600">
              Identifier les facteurs dominants de l’érosion (pluie, pH, porosité, perméabilité, composition calcaire).
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-2xl font-semibold">Méthodologie</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <ul className="list-inside list-disc space-y-2 text-slate-600">
                <li>Observation du recul du trait de côte à partir d’images</li>
                <li>Prélèvement d’échantillons de falaises à Étretat</li>
                <li>Mesure de la perte de masse sous l’effet de la pluie</li>
                <li>Mesure de la porosité et de la perméabilité</li>
                <li>Propagation d’incertitudes par algorithme Monte-Carlo</li>
                <li>Mesure de la teneur en CaCO₃ avec un calcimètre de Bernard</li>
                <li>Étude de l’effet du pH, de l’eau pure et de l’eau salée</li>
              </ul>
            </div>

            <div>
              <p className="leading-relaxed text-slate-600">
                Observations de terrain, protocoles expérimentaux et traitement quantitatif des données, avec incertitudes estimées par simulation Monte-Carlo.
              </p>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">Résultats</h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="leading-relaxed text-slate-600">
              Une érosion combinant porosité (≈2,0 %), perméabilité (≈5,3×10⁻⁸ m²) et forte teneur en CaCO₃ (83,3 %), sensible à la dissolution en milieu acide.
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
              "Géophysique",
              "Physique expérimentale",
              "Analyse de données",
              "Monte-Carlo",
              "Mesures d’incertitudes",
              "Python",
              "Travail expérimental",
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