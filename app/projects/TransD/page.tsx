"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hackaphone() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/hackaphone.png",
      alt: "Interface du projet Hackaphone",
      caption: "Interface de contrôle audio",
    },
    {
      src: "/hackaphone2.png",
      alt: "Interaction temps réel du projet Hackaphone",
      caption: "Interaction en temps réel via capteurs",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">
        {/* Retour */}
        <Link
          href="/projets"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        {/* HEADER */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            Projet interactif, audio et temps réel
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Hackaphone, méta-instrument musical interactif
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            En groupe, un système interactif pour contrôler et transformer la musique en temps réel via smartphone ou manette Bluetooth.
          </p>
        </section>

        {/* CONTEXTE */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte</h2>
            <p className="text-slate-600 leading-relaxed">
              Un instrument numérique interactif, dans une logique proche d’un contrôleur DJ ou de live performance.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Contrôler plusieurs paramètres audio à partir de capteurs externes, de façon fluide et intuitive.
            </p>
          </div>
        </section>

        {/* METHODO */}
        <section className="mb-12 bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Architecture du système</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 leading-relaxed">
                Les données transitent via OSC vers un programme Python qui traite le signal audio et mappe les gestes à des effets.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Transmission via Open Sound Control (OSC)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Traitement audio en temps réel</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Mapping capteurs → paramètres audio</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Interface graphique de contrôle</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* RESULTATS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Fonctionnalités</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Effets audio</h3>
              <p className="text-slate-600 leading-relaxed">
                Filtrage fréquentiel, distorsion, chorus, écho et réverbération.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Interaction utilisateur</h3>
              <p className="text-slate-600 leading-relaxed">
                Contrôle du son en direct via smartphone ou manette, pensé pour rester simple et réactif.
              </p>
            </div>
          </div>
        </section>

        {/* IMAGES */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Aperçu du projet</h2>
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

        {/* TECH */}
        <section className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
              Python
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
              Open Sound Control
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
              Audio processing
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              Temps réel
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
              Interface graphique
            </span>
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