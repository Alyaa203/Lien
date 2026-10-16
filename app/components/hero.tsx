"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";

// Hero de la page d'accueil : fond slate-900 (#0F172A), accent unique indigo-600 (#4F46E5).
// Les variantes plus claires de l'accent (indigo-400) servent au texte pour garder un bon contraste.

const roles = [
  "Robotique autonome",
  "Systèmes embarqués",
  "Intelligence artificielle",
  "Traitement du signal",
  "Simulation numérique",
];

const TYPE_DELAY = 85;
const DELETE_DELAY = 40;
const HOLD_DELAY = 1800;
const REDUCED_MOTION_DELAY = 3000;

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
}

// Tape un mot, le laisse affiché, l'efface puis passe au suivant.
// Si l'utilisateur a demandé moins d'animations, les mots s'affichent en entier, sans frappe.
function useTypingEffect(words: string[]) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      const timer = setTimeout(() => setIndex((index + 1) % words.length), REDUCED_MOTION_DELAY);
      return () => clearTimeout(timer);
    }

    const word = words[index];
    const fullyTyped = !deleting && text === word;
    const timer = setTimeout(
      () => {
        if (fullyTyped) {
          setDeleting(true);
        } else if (deleting && text === "") {
          setDeleting(false);
          setIndex((index + 1) % words.length);
        } else {
          setText(word.slice(0, text.length + (deleting ? -1 : 1)));
        }
      },
      fullyTyped ? HOLD_DELAY : deleting ? DELETE_DELAY : TYPE_DELAY,
    );
    return () => clearTimeout(timer);
  }, [words, index, text, deleting, reducedMotion]);

  return reducedMotion ? words[index] : text;
}

// Quadrillage discret, estompé vers le bas et les bords
const gridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgb(148 163 184 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.08) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
  maskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
};

function Caret() {
  return (
    <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] rounded-full bg-indigo-400 motion-safe:animate-caret" />
  );
}

export function Hero() {
  const role = useTypingEffect(roles);

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-slate-900 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={gridStyle} />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl sm:h-[44rem] sm:w-[44rem]"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
          <span>
            <span className="hidden sm:inline">Portfolio · </span>
            <span className="whitespace-nowrap">ENSC et ENSEIRB-MATMECA,</span> Bordeaux INP
          </span>
        </p>

        <h1 className="mt-6 font-bold tracking-tight">
          <span className="block text-4xl sm:text-6xl lg:text-7xl">Alyaa Saab</span>
          <span className="sr-only">, {roles.join(", ")}</span>
          {/* Tous les rôles sont empilés en invisible dans la même cellule :
              la hauteur reste celle du plus long, donc rien ne saute pendant la frappe. */}
          <span aria-hidden className="mt-3 grid text-3xl font-semibold text-indigo-400 sm:text-5xl lg:text-6xl">
            {roles.map((r) => (
              <span key={r} className="invisible col-start-1 row-start-1">
                {r}
                <Caret />
              </span>
            ))}
            <span className="col-start-1 row-start-1">
              {role}
              <Caret />
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projets"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Voir mes projets
            <span aria-hidden>→</span>
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-indigo-400 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
