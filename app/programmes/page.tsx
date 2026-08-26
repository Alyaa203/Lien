import Link from "next/link";

const timeline = [
  {
    title: "Cycle Ingénieur en Cognitique",
    place: "ENSC, Talence",
    date: "Depuis 2024",
  },
  {
    title: "Licence de Physique, spécialité physique quantique",
    place: "Université de Bordeaux",
    date: "2025",
  },
  {
    title: "Classe préparatoire aux grandes écoles, Physique-Chimie (PC)",
    place: "Lycée Jacques Amyot, Melun",
    date: "2023",
  },
  {
    title: "Classe préparatoire aux grandes écoles, PCSI",
    place: "Lycée Jacques Amyot, Melun",
    date: "2022",
  },
];

export default function Programmes() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">

        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 transition mb-8"
        >
          ← Retour à l’accueil
        </Link>

        <section className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            Formation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Programmes de formation
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Élève-ingénieure en 3ème année (Bac+5) à l&apos;ENSC (Bordeaux INP),
            licence de physique (spécialité physique quantique) obtenue en
            parallèle.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              ENSC · Bordeaux INP
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Ingénieur spécialité Cognitique
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Formation d&apos;ingénieur pluridisciplinaire à l&apos;interface entre
              sciences cognitives, traitement du signal, intelligence artificielle
              et conception centrée utilisateur. Titre d&apos;ingénieur reconnu au
              RNCP (niveau 7, code 40203), couvrant notamment les secteurs de
              l&apos;informatique, de l&apos;aéronautique, des transports et de la santé.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Bac+5", "180 ECTS", "3 ans", "Campus de Talence"].map((f) => (
                <span
                  key={f}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
              Licence obtenue en 2025
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Physique quantique</h2>
            <p className="text-slate-600 leading-relaxed">
              Licence de Physique, spécialité physique quantique, obtenue à
              l&apos;Université de Bordeaux en parallèle du cursus d&apos;ingénieur. Elle
              m&apos;a donné un socle solide en mécanique quantique, modélisation
              numérique et physique des systèmes complexes.
            </p>
          </div>
        </section>

        <section className="mb-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
            Structure de la formation
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Deux premières années organisées autour d&apos;enseignements
            thématiques communs (cognitique, fondamentaux scientifiques,
            formation générale et vie de l&apos;entreprise), puis une 3ème année
            de spécialisation au choix : augmentation et autonomie,
            intelligence artificielle, systèmes cognitifs hybrides, ou{" "}
            <span className="font-medium text-slate-900">robotique et apprentissage</span>{" "}
            (la mienne). Chacune se conclut par un projet de fin d&apos;études.
          </p>
        </section>

        <section className="mb-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Parcours</h2>
          <ul className="space-y-4">
            {timeline.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-1 border-b border-slate-100 pb-4 last:border-none last:pb-0 md:flex-row md:items-baseline md:justify-between"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.place}</p>
                </div>
                <span className="text-sm font-medium text-slate-500">{item.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
            3ème année · 2026-2027 · À la recherche d&apos;une alternance
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Spécialisation Robotique et apprentissage
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Passionnée par la robotique et l&apos;interaction humain-robot, je me
            spécialise cette année à l&apos;ENSEIRB-MATMECA (Bordeaux INP), en
            contrat de professionnalisation (alternance école/entreprise).
            C&apos;est un semestre organisé en cinq unités
            d&apos;enseignement, avec des projets menés en lien avec des
            partenaires industriels (Aquitaine Robotics, festival Robot
            Makers&apos; Day).
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            {[
              {
                code: "UE A",
                title: "Modélisation et commande de systèmes robotiques",
                items: "Contrôle-commande · Modélisation des robots et analyse des performances · Méthodes numériques pour la robotique",
              },
              {
                code: "UE B",
                title: "IA et robotique",
                items: "Interactions humains-robots · IA pour la robotique autonome · Planification · Outils d'imagerie pour la robotique",
              },
              {
                code: "UE C",
                title: "Systèmes embarqués",
                items: "Mécatronique · Projet systèmes embarqués",
              },
              {
                code: "UE D",
                title: "Projet Robotique",
                items: "Projet robotique en lien avec des partenaires industriels · État de l'art",
              },
              {
                code: "UE E",
                title: "Intégration professionnelle",
                items: "Atelier robotique (premier robot) · Workshops IA et ROS pour l'industrie · Séminaire R4 · Techniques orales de communication scientifique · Journée dans les pas d'un dirigeant d'entreprise",
              },
              {
                code: "UE Langues",
                title: "Langues et culture de l'ingénieur",
                items: "Anglais (LV1) · Intégrer l'entreprise",
              },
            ].map((ue) => (
              <div key={ue.code} className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700 mb-1">
                  {ue.code}
                </p>
                <p className="font-medium text-slate-900 mb-1">{ue.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{ue.items}</p>
              </div>
            ))}
          </div>

          <a
            href="/formation-robotique-2026-2027.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-sm"
          >
            Voir le programme de spécialisation (PDF)
          </a>
        </section>

        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
            Domaines d&apos;intérêt
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Traitement du signal",
              "Systèmes embarqués",
              "Robotique",
              "Photonique",
              "IA appliquée",
              "Aéronautique et spatial",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
