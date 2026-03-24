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
          href="/"
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
              Le GR21 longe les falaises normandes, soumises à une érosion
              continue pouvant rendre certains passages impraticables. Le projet
              s’appuie sur des observations du recul du trait de côte à Étretat,
              des prélèvements d’échantillons et plusieurs expériences pour
              relier propriétés de la roche et dégradation observée. 
              </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Objectif</h2>
            <p className="leading-relaxed text-slate-600">
              Mon objectif était d’identifier les facteurs dominants de
              l’érosion, d’évaluer le rôle de la pluie, du pH, de la porosité,
              de la perméabilité et de la composition calcaire, puis de
              comprendre comment ces paramètres contribuent à la fragilisation
              des falaises. 
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
                J’ai combiné observations de terrain, protocoles expérimentaux
                et traitement quantitatif des données. Le projet reposait sur la
                caractérisation de la roche calcaire par ses propriétés
                physiques, puis sur l’analyse de son comportement face à l’eau,
                à l’acidité et aux contraintes extérieures. Les incertitudes de
                certaines mesures ont été estimées par simulation Monte-Carlo. 
              </p>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">Résultats</h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="leading-relaxed text-slate-600">
              Les résultats montrent que l’érosion provient d’une combinaison de
              mécanismes. D’un point de vue mécanique, la roche présente une
              porosité mesurée d’environ 2,0 % et une perméabilité de l’ordre de
              5,3 × 10⁻⁸ m², ce qui favorise la pénétration de l’eau. D’un point
              de vue chimique, la forte teneur en CaCO₃, estimée à 83,3 %, rend
              la roche sensible à la dissolution en milieu acide. Les essais sur
              la pluie et le pH montrent également une augmentation de la perte
              de masse lorsque l’acidité augmente. 
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