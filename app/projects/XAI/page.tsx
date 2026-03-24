"use client";

import Link from "next/link";
import { useState } from "react";

export default function XAIProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        {/* Retour */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        {/* HEADER */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            Stage de recherche – Sorbonne Université / CNRS
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Classification de pigments avec IA explicable (XAI)
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            J’ai travaillé sur l’interprétation de modèles de deep learning appliqués
            à des données hyperspectrales pour identifier des pigments dans des œuvres d’art.
          </p>
        </section>



        {/* CONTEXTE */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Contexte scientifique</h2>
            <p className="text-slate-600 leading-relaxed">
              Les pigments possèdent des signatures spectrales mesurées sur de nombreuses
              longueurs d’onde. Ces données hyperspectrales permettent de les distinguer,
              mais restent difficiles à interpréter.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-600 leading-relaxed">
              Comprendre les décisions de modèles comme les CNN en identifiant
              quelles zones du spectre influencent réellement les prédictions.
            </p>
          </div>

        </section>

        {/* METHODO */}
        <section className="mb-12 bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Méthodologie</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-slate-600 leading-relaxed">
                J’ai utilisé deux approches d’IA explicable pour analyser les modèles :
                SHAP et LIME. Elles permettent d’attribuer une importance aux différentes
                zones du spectre en fonction de leur contribution.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>SHAP : attribution basée sur les valeurs de Shapley</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>LIME : approximation locale du modèle</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Analyse VIS et SWIR</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  <span>Étude par zones spectrales</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* RESULTATS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-5">Résultats</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Performance</h3>
              <p className="text-slate-600">
                Les modèles atteignent jusqu’à 99% de précision, montrant
                la richesse des signatures spectrales.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Interprétation</h3>
              <p className="text-slate-600">
                SHAP et LIME mettent en évidence les zones utiles du spectre,
                mais révèlent aussi les limites des approches globales.
              </p>
            </div>

          </div>
        </section>
                {/* IMAGE AVEC ZOOM */}
                <section className="mb-12">
          <button
            onClick={() => setSelectedImage("/CNN.png")}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
          >
            <img
              src="/CNN.png"
              alt="Architecture du modèle CNN"
              className="w-full h-auto object-contain"
            />
          </button>

          <p className="mt-3 text-sm text-slate-500">
            Architecture du modèle utilisé pour la classification.
          </p>
        </section>



        {/* TECH */}
        <section className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-5">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">Python</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">Deep Learning</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">SHAP</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">LIME</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              Hyperspectral data
            </span>
          </div>
        </section>

      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl"
            >
              ×
            </button>

            <img
              src={selectedImage}
              className="w-full max-h-[90vh] object-contain rounded-2xl bg-white"
            />
          </div>
        </div>
      )}
    </main>
  );
}