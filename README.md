# PhysioGus

Interactive physiotherapy learning tool with a 3D body explorer, case studies, and quick quizzes — taught by **Gus**, a friendly ginger cat.

## What's inside

- **Explore** — click joints on a 3D humanoid (ankle, knee, hip, shoulder, elbow, wrist) to read anatomy, common injuries, and strengthening exercises.
- **Case studies** — read a social history and assessment findings, identify the pathology, then pick three assessments, one manual therapy, and one soft tissue technique. Gus reviews each choice.
- **Quick quiz** — five multiple-choice questions drawn from a bank across all six joints.

Built with React 18, TypeScript, Vite, three.js and [react-three-fiber](https://docs.pmnd.rs/react-three-fiber).

## Running locally

```
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```
npm run build
npm run preview
```

## Deploying to Netlify

A `netlify.toml` is included. Two options:

**Option A — connect the GitHub repo (recommended):**
1. Push this branch to GitHub.
2. In Netlify, *Add new site → Import an existing project* and pick this repo.
3. Netlify will detect the settings from `netlify.toml` (`npm run build`, publish `dist`).

**Option B — Netlify CLI from your machine:**
```
npm install -g netlify-cli
npm run build
netlify deploy --dir=dist --prod
```

## Disclaimer

This tool is an educational prototype for training purposes only. The content is illustrative placeholder material and **does not constitute medical advice**. Always defer to your course materials, clinical educators, and qualified physiotherapists for real patient care.
