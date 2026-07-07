# Orry — Orhan Awatramani | Fan Website

A cinematic, fan-made tribute website for Orry (Orhan Awatramani), built for
deployment at **https://orry.vercel.app/**.

> ⚠️ This is an unofficial fan site. Biography, appearances and quotes were
> compiled from public sources (WikiBio, Tatler Asia, IMDb, Bigg Boss 17 — July 2026).
> Do not add invented facts about a real person; corrections welcome.

## Tech stack

- **Vite 7 + React 19 + TypeScript**
- **Tailwind CSS v4** (CSS-first config)
- **Framer Motion 12** — scroll reveals, parallax hero, trailer lightbox, marquee
- **Fonts** — Playfair Display + Space Grotesk

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Content

All content lives in **one file: `src/data/content.ts`** — bio, appearances,
gallery, videos, press quotes and social links. Photos live in `public/photos/`.
Use only images you have the right to use (credited in the footer).

## Deploy to Vercel (orry.vercel.app)

1. Push to a GitHub repo named `orry`.
2. On vercel.com: **Add New → Project → Import** the repo (auto-detects Vite).
3. Deploy. The project name `orry` yields `orry.vercel.app` if the subdomain is free.

## Legal / etiquette

- Keep the "unofficial fan site" disclaimer visible (footer).
- Credit photographers/publications for images and quotes.
- Honour any takedown request from Orry's team promptly.
