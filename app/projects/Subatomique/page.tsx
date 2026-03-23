"use client";

import Link from "next/link";
import { useState } from "react";

export default function RadioactivityProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/tp1.png",
      alt: "Page de garde du projet",

    },
    {
      src: "/tp2.png",
      alt: "Principe de détection",

    },
    {
      src: "/tp3.png",
      alt: "Matériel expérimental",
    },
    {
      src: "/tp4.png",
      alt: "Bruit de fond",
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
            Projet de physique expérimentale
          </div>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            Étude statistique d’une source radioactive
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Dans ce projet réalisé en groupe, j’ai participé à l’étude
            expérimentale et statistique d’une source radioactive à l’aide d’un
            compteur Geiger-Müller, afin d’analyser le caractère aléatoire du
            comptage et d’estimer l’activité d’une source de Sr-90.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Contexte</h2>
            <p className="leading-relaxed text-slate-600">
              La désintégration radioactive est un phénomène aléatoire. Ce
              projet visait à comprendre le fonctionnement du compteur
              Geiger-Müller et à étudier statistiquement les mesures obtenues
              lors du comptage d’une source radioactive et du bruit de fond.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Objectif</h2>
            <p className="leading-relaxed text-slate-600">
              Mon objectif était de mesurer l’activité d’une source
              radioactive, de comparer les distributions observées à des lois
              théoriques comme la loi de Poisson et la loi de Gauss, puis
              d’interpréter les résultats expérimentaux.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-2xl font-semibold">Méthodologie</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <ul className="list-inside list-disc space-y-2 text-slate-600">
                <li>Utilisation d’un compteur Geiger-Müller</li>
                <li>Mesure du bruit de fond</li>
                <li>Comptage d’une source β de Sr-90</li>
                <li>Comparaison aux lois de Poisson et de Gauss</li>
                <li>Estimation de l’activité expérimentale</li>
                <li>Exploitation de l’angle solide et des incertitudes</li>
              </ul>
            </div>

            <div>
              <p className="leading-relaxed text-slate-600">
                J’ai participé à la manipulation expérimentale, au traitement
                statistique des mesures et à l’interprétation physique des
                résultats, notamment pour distinguer le comportement du bruit de
                fond et celui de la source radioactive.
              </p>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">Résultats</h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="leading-relaxed text-slate-600">
              Les résultats montrent que la distribution du bruit de fond suit
              la loi de Poisson, tandis que la distribution liée à la source
              radioactive est cohérente avec une approximation gaussienne pour
              des comptages élevés. L’activité expérimentale obtenue est proche
              de la valeur attendue, avec un écart relatif faible, ce qui
              confirme la cohérence du protocole expérimental.
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
              "Physique expérimentale",
              "Statistiques",
              "Loi de Poisson",
              "Traitement de données",
              "Analyse d’incertitudes",
              "Python / R",
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