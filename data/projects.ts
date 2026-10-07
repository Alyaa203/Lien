import type { Tone } from "@/app/components/blueprint";

export type Project = {
  href: string;
  badge: string;
  tone: Tone;
  title: string;
  description: string;
  tech: string[];
  statusLabel?: string;
  /** Path under /public, e.g. "/projets/slam-robot.jpg". Leave empty until the file is added. */
  image?: string;
  github?: string;
  demo?: string;
};

export type ProjectSection = {
  id: string;
  title: string;
  description: string;
  projects: Project[];
};

export const projectSections: ProjectSection[] = [
  {
    id: "experience",
    title: "Expérience professionnelle",
    description: "Stages de recherche.",
    projects: [
      {
        href: "/projects/reservoir",
        badge: "Stage de recherche · Institut d'Optique / INRIA",
        tone: "teal",
        title: "Reservoir Computing optique à base de fibres",
        description:
          "Stage de recherche (3 mois) à l'Institut d'Optique Graduate School en collaboration avec l'INRIA : développement d'un système de calcul neuromorphique basé sur des fibres optiques, conception d'une interface de pilotage (MATLAB), et modélisation par IA (réseau de neurones, régression Ridge) pour valider le montage.",
        tech: ["Reservoir Computing", "Fibres optiques", "IA", "Régression Ridge", "MATLAB", "Python"],
        image: "/reservoir.png",
      },
      {
        href: "/projects/XAI",
        badge: "Stage de recherche · CNRS / Sorbonne Université",
        tone: "blue",
        title: "Intelligence Artificielle Explicable (XAI)",
        description:
          "Stage de recherche (1 mois, 2025) au Laboratoire de Chimie Physique Matière et Rayonnement (CNRS / Sorbonne Université) : développement de modèles de deep learning pour classifier des données hyperspectrales, application de méthodes XAI (SHAP, LIME) et présentation orale des résultats lors d'un workshop interdisciplinaire.",
        tech: ["Python", "Deep Learning", "XAI", "SHAP", "LIME"],
        image: "/CNN.png",
      },
    ],
  },
  {
    id: "robotics",
    title: "Robotique et systèmes embarqués",
    description: "Conception et programmation de robots mobiles : mécanique, électronique, vision et commande.",
    projects: [
      {
        href: "/projects/slam-suez",
        badge: "Robotique mobile · SLAM",
        tone: "amber",
        statusLabel: "En cours",
        title: "SLAM vision, LiDAR et inertiel pour un robot quadrupède (avec SUEZ)",
        description:
          "Projet ENSEIRB-MATMECA avec SUEZ : localiser un robot quadrupède sans GNSS dans des tunnels peu texturés. J'ajoute les caméras RGB au SLAM LiDAR et inertiel existant (LIO-SAM, ROS), puis je teste en simulation et sur le robot réel.",
        tech: ["ROS", "LIO-SAM", "SLAM", "Fusion de capteurs", "LiDAR", "Vision"],
        image: "/suez.png",
      },
      {
        href: "/projects/FirstBot",
        badge: "Robotique mobile · Systèmes embarqués",
        tone: "orange",
        title: "FirstBot, construire son premier robot",
        description:
          "Conception d'un robot mobile autonome : châssis en CAO découpé au laser, servomoteurs Dynamixel pilotés depuis une Raspberry Pi, vision par caméra pour le suivi de ligne, odométrie, déplacement vers une cible et cartographie de la piste.",
        tech: ["Python", "Raspberry Pi", "OpenCV", "Dynamixel", "Odométrie", "CAO"],
        image: "/robot.JPG",
      },
      {
        href: "/projects/persistance-retinienne",
        badge: "Systèmes embarqués · 2026",
        tone: "violet",
        statusLabel: "En cours",
        title: "Afficheur à persistance rétinienne sur microcontrôleur",
        description:
          "Une horloge affichée par une barre de 16 LED qui tourne vite : l'œil perçoit une image fixe. J'ai programmé le microcontrôleur AVR en C sans bibliothèque. Chaque tour est détecté par un capteur magnétique, le temps est mesuré avec les timers et l'heure se règle par Bluetooth.",
        tech: ["C embarqué", "AVR", "Timers", "Bluetooth", "Capteurs"],
        image: "/horlloge.png",
      },
    ],
  },
  {
    id: "ai-signal-modeling",
    title: "IA, signal et modélisation",
    description: "Simulation, traitement du signal et modélisation de systèmes physiques et dynamiques.",
    projects: [
      {
        href: "/projects/schrodinger",
        badge: "Modélisation numérique · FFT",
        tone: "indigo",
        title: "Simulation numérique de l'équation de Schrödinger",
        description:
          "Solveur Python de l'équation de Schrödinger dépendant du temps via la méthode Split-Step Fourier (FFT), pour la propagation de paquets d'onde et l'analyse spectrale dans le domaine fréquentiel.",
        tech: ["Python", "NumPy", "SciPy", "FFT"],
        image: "/SchrodArt1.png",
        github: "https://github.com/Alyaa203/P2i",
        demo: "https://gnm4pxwnrpb6cy3syst6sn.streamlit.app",
      },
      {
        href: "/projects/filtrage",
        badge: "Traitement d'image · Matlab",
        tone: "rose",
        title: "Filtrage des images",
        description:
          "Implémentation sous Matlab de chaînes de traitement d'image : filtrage fréquentiel, convolution et amélioration de signal.",
        tech: ["Matlab", "Filtrage", "Traitement du signal"],
        image: "/img1.png",
      },
    ],
  },
  {
    id: "human-factors",
    title: "Facteurs humains et interaction",
    description: "Signaux physiologiques, interaction homme-machine et expérience utilisateur.",
    projects: [
      {
        href: "/projects/EEG",
        badge: "Traitement du signal",
        tone: "cyan",
        title: "Analyse de signaux EEG",
        description:
          "Conception d'un protocole expérimental multi-capteurs, acquisition de signaux physiologiques, filtrage et analyse fréquentielle (FFT) pour modéliser l'effet de stimuli musicaux sur l'activité cérébrale.",
        tech: ["Python", "FFT", "Filtrage", "Traitement du signal", "MATLAB"],
        image: "/EEG.jpg",
      },
      {
        href: "/projects/TransD",
        badge: "Audio interactif",
        tone: "pink",
        title: "Hackaphone, méta-instrument musical",
        description:
          "Contrôle en temps réel d'effets audio grâce aux capteurs d'un smartphone ou d'une manette Bluetooth. Les données des capteurs sont transmises par protocole OSC, puis traitées en Python et associées aux paramètres audio.",
        tech: ["Python", "OSC", "Temps réel", "Interaction homme-machine"],
        image: "/Hackaphone.png",
      },
      {
        href: "/projects/Statistique",
        badge: "Statistiques",
        tone: "amber",
        title: "Étude statistique de l'activation de l'aire de Broca",
        description:
          "Analyse statistique de données expérimentales portant sur l'activation de l'aire de Broca, avec interprétation des résultats.",
        tech: ["R Studio", "ANOVA", "Statistiques"],
        image: "/stat1.png",
      },
      {
        href: "/projects/CCU",
        badge: "UX Design · Projet annuel",
        tone: "emerald",
        title: "Conception centrée utilisateur (CCU)",
        description: "Projet mené sur un an intégrant idéation, conception de maquettes et tests utilisateurs.",
        tech: ["UX", "Prototypage", "Tests utilisateurs", "Figma"],
        image: "/ccu1.png",
      },
      {
        href: "/projects/comunique",
        badge: "Application mobile",
        tone: "orange",
        title: "COM'UNIQUE, plateforme de communication étudiante",
        description:
          "Développement d'une application mobile visant à centraliser les informations de la vie étudiante : événements, annuaire, communication avec l'administration.",
        tech: ["Flutter", "Dart", "UX Design", "Tests utilisateurs"],
        image: "/comunique.png",
      },
    ],
  },
  {
    id: "other",
    title: "Autres projets",
    description: "Projets complémentaires.",
    projects: [
      {
        href: "/projects/MOBI",
        badge: "Développement mobile · React",
        tone: "purple",
        title: "Jeu de combat de cartes, Projet MOBI",
        description:
          "Application mobile de jeu de cartes compétitif (inspiré de Hearthstone) développée en ReactJS : authentification Google, collection de cartes via API externe, construction de deck et combats PvP en temps réel synchronisés via Firebase.",
        tech: ["ReactJS", "Firebase", "MaterialUI", "API externe", "Netlify"],
        image: "/mobi.png",
        demo: "https://smash-princes.netlify.app/deck",
      },
    ],
  },
];
