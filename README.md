<div align="center">

# Alyaa Saab — Portfolio

**My personal portfolio website: engineering projects, research internships and certifications in robotics, signal processing, AI and scientific computing.**

<!-- Replace with the deployed URL: [Visit the portfolio](https://your-portfolio-url) -->

![Next.js](https://img.shields.io/badge/Next.js_16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## Overview

A fast, responsive website that presents who I am and what I have built: an engineering student in my final year at ENSC (Bordeaux INP) with a physics degree, looking for an apprenticeship or end-of-studies internship in **robotics, embedded systems, AI, signal processing or numerical simulation**.

**Why it exists:** to give recruiters one place to see my projects grouped by field, with images, the tools used and supporting documents (reports, slides, certificates), instead of scattered repositories.

---

## Features

- **Home page** with a short profile and contact links (email, LinkedIn, GitHub)
- **Projects page** with 13 projects sorted by field, with quick-jump navigation:
  - Professional experience: optical reservoir computing, explainable AI (XAI) internship at CNRS / Sorbonne Université
  - Robotics: FirstBot, building a first robot
  - Signal processing: Schrödinger equation simulation, EEG signal analysis, optical diffraction, image filtering
  - Programming: Hackaphone (interactive music instrument), Smash Princes (real-time multiplayer card game)
  - Modelling, UX design and statistics projects
- **A detail page for each project**: context, goals, method, results and tools, with click-to-zoom image galleries on several pages
- **Certificates page** (for example IBM *Build an AI Agent*) and **Programmes page** (ENSC curriculum, physics degree, robotics specialisation)
- **Downloadable documents**: internship slides, reports and certificates as PDFs
- **Shared UI components** (`app/components/blueprint.tsx`) for a consistent look across pages
- **Responsive design** for phone, tablet and desktop

---

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Code quality | ESLint (`eslint-config-next`) |
| Hosting | Vercel-ready |

---

## Getting started

Requires [Node.js](https://nodejs.org/) 20 or later.

```bash
git clone https://github.com/Alyaa203/Lien.git
cd Lien
npm install
npm run dev
```

Then open http://localhost:3000.

Other commands:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

### Project structure

```
app/
├── page.tsx              # Home page
├── projets/page.tsx      # Project list, grouped by field
├── projects/<name>/      # One detail page per project
├── certificats/          # Certificates
├── programmes/           # Education
└── components/           # Shared UI components
public/                   # Images and PDF documents
```

To add a project: create `app/projects/<Name>/page.tsx`, put its images in `public/`, and add an entry to the right list in `app/projets/page.tsx`.

---

**Contact:** [LinkedIn](https://www.linkedin.com/in/alyaa-saab-ensc) · [GitHub](https://github.com/Alyaa203)
