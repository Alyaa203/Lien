"use client";

import Link from "next/link";
import { useState } from "react";

export default function ImageProcessingProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [

    {
      src: "/img1.png",
      alt: "Filtre passe-bas gaussien",
      caption: "Filtre passe-bas gaussien",
    },
    {
      src: "/img2.png",
      alt: "Filtre passe-bande",
      caption: "Construction du filtre passe-bande",
    },
    {
      src: "/img3.png",
      alt: "Premier détramage",
      caption: "Premier détramage par filtre coupe-bande",
    },
    {
      src: "/img4.png",
      alt: "Second détramage",
      caption: "Second détramage et nettoyage du spectre",
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
            Projet de traitement d’images
          </div>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            Détramage d’images par filtrage fréquentiel
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Dans ce projet réalisé en groupe, j’ai participé à la suppression de
            trames parasites présentes dans une image numérisée, en utilisant des
            outils de traitement du signal et d’analyse fréquentielle pour isoler
            puis éliminer les composantes périodiques indésirables.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Contexte</h2>
            <p className="leading-relaxed text-slate-600">
              Une trame d’impression apparaît comme un motif périodique de haute
              fréquence qui dégrade la lisibilité de l’image. Dans le domaine
              fréquentiel, cette trame se manifeste par des pics localisés. Le
              projet consistait à exploiter cette signature pour supprimer ces
              parasites sans détériorer le contenu utile de l’image.
              </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Objectif</h2>
            <p className="leading-relaxed text-slate-600">
              Mon objectif était de construire des filtres adaptés pour détecter
              et supprimer successivement deux trames, puis de vérifier que
              l’ordre d’application des filtres ne modifie pas le résultat final,
              avant d’analyser plus finement le contenu fréquentiel réel de
              l’image.
            </p>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-2xl font-semibold">Méthodologie</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <ul className="list-inside list-disc space-y-2 text-slate-600">
                <li>Analyse de la FFT de l’image tramée</li>
                <li>Construction d’un filtre passe-bas gaussien</li>
                <li>Modulation pour créer un filtre passe-bande ciblé</li>
                <li>Construction d’un filtre coupe-bande (notch)</li>
                <li>Application d’un second détramage</li>
                <li>Vérification expérimentale de la commutativité</li>
                <li>Comparaison du contenu fréquentiel avant/après filtrage</li>
              </ul>
            </div>

            <div>
              <p className="leading-relaxed text-slate-600">
                J’ai participé à l’identification des pics fréquentiels parasites,
                à la conception des filtres spatiaux et à l’interprétation des
                résultats. Le travail reposait sur la convolution 2D, l’analyse
                spectrale par FFT et l’étude de l’impact du filtrage sur la
                structure fréquentielle des images.
              </p>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">Résultats</h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="leading-relaxed text-slate-600">
              Les résultats montrent qu’un premier filtre notch permet de
              supprimer la trame dominante, puis qu’un second filtrage élimine
              une composante résiduelle plus discrète. La vérification de la
              commutativité confirme que l’ordre des deux détramages ne change
              pas le résultat, à des erreurs numériques près. Enfin, après
              nettoyage, le spectre de l’image devient plus lisible et met mieux
              en évidence les vraies structures de la scène, comme les contours
              et les textures.
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
              "Traitement d’images",
              "FFT",
              "Filtrage fréquentiel",
              "Convolution 2D",
              "Analyse spectrale",
              "MATLAB",
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