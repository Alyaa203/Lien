"use client";

import Link from "next/link";
import { useState } from "react";

export default function FirstBot() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/robot.JPG",
      alt: "Le robot FirstBot : châssis découpé au laser, servomoteurs Dynamixel, Raspberry Pi et caméra",
    },
    {
      src: "/lignes.JPG",
      alt: "Piste de suivi de lignes colorées (rouge, bleue, jaune) avec le robot",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <Link
          href="/projets"
          className="mb-8 inline-flex items-center text-sm text-slate-500 transition hover:text-orange-600"
        >
          ← Retour à l’accueil
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="mb-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
            Robotique mobile · Systèmes embarqués
          </div>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            FirstBot, construire son premier robot
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Conception complète d’un robot mobile autonome : châssis, motorisation, vision embarquée et odométrie pour suivre des lignes et cartographier sa piste.
          </p>
        </section>

        {/* Contexte + Objectif */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Contexte</h2>
            <p className="leading-relaxed text-slate-600">
              Projet en équipe de la spécialisation Robotique, avec dépôt Git du code, QCM individuel et démonstration finale.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Objectif</h2>
            <p className="leading-relaxed text-slate-600">
              Un robot à deux roues, autonome en calcul et en énergie, capable de se repérer et de se déplacer à partir de sa caméra et de ses encodeurs.
            </p>
          </div>
        </section>

        {/* Matériel */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-2xl font-semibold">Architecture</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ul className="list-inside list-disc space-y-2 text-slate-600">
              <li>Châssis dessiné en CAO (OnShape) et découpé au laser au FabLab</li>
              <li>2 servomoteurs Dynamixel MX-12W en mode roue, avec encodeurs</li>
              <li>Bus série half-duplex via adaptateur USB2AX</li>
              <li>Raspberry Pi sous Raspberry Pi OS, piloté en SSH</li>
              <li>Caméra Logitech C270 traitée avec OpenCV</li>
              <li>Batterie LiPo 3S (12 V) et convertisseur DC/DC 5 V</li>
            </ul>

            <p className="leading-relaxed text-slate-600">
              La batterie alimente directement les moteurs, chaînés sur un même bus et identifiés par un ID logiciel, tandis que la Raspberry Pi gère la vision et la commande en Python (PyPot).
            </p>
          </div>
        </section>

        {/* Défis */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">Défis</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Suivi de ligne</h3>
              <p className="leading-relaxed text-slate-600">
                Détection d’une ligne colorée à la caméra et enchaînement des pistes successives.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Go to</h3>
              <p className="leading-relaxed text-slate-600">
                Atteindre une position et une orientation cibles (x, y, θ) depuis un point de départ connu.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Odométrie</h3>
              <p className="leading-relaxed text-slate-600">
                Estimer la position du robot déplacé à la main en n’utilisant que les encodeurs des moteurs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Cartographie et tour à l’aveugle</h3>
              <p className="leading-relaxed text-slate-600">
                Produire une carte vue du ciel de la piste, puis la parcourir caméra masquée grâce à la carte et l’odométrie.
              </p>
            </div>
          </div>
        </section>

        {/* Modélisation */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-2xl font-semibold">Cinématique et commande</h2>
          <ul className="list-inside list-disc space-y-2 text-slate-600">
            <li>Cinématique directe et inverse d’un robot différentiel (vitesses des roues ↔ vitesses linéaire et angulaire)</li>
            <li>Intégration odométrique dans le repère robot puis dans le repère monde</li>
            <li>Projection pixel → repère robot → repère monde pour la cartographie</li>
          </ul>
        </section>

        {/* Images */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Photos</h2>
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
              "Robotique mobile",
              "Systèmes embarqués",
              "Raspberry Pi",
              "Dynamixel",
              "Python",
              "OpenCV",
              "Odométrie",
              "Cinématique",
              "CAO (OnShape)",
              "Découpe laser",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700"
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
