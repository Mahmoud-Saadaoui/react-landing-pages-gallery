<div align="center">

# React Landing Pages Gallery

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![i18next](https://img.shields.io/badge/i18next-25-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)

**Central gallery of converted React landing pages (24 pages: Vite, Tailwind CSS 4, React Router, i18next).**

</div>

---

## Overview

This project migrates the original `Landing-Pages/` repository (vanilla JS, Bootstrap, jQuery,
CSS templates) into **modern React pages written entirely with Tailwind CSS 4 utilities**.
Every landing page becomes a real route (`/landing-pages/<slug>`) rendered from JSX + hooks,
assembled in a single React app.

- A **gallery home page** lists every landing page as a card (title, category, screenshot).
- Each landing is **lazy-loaded** and rendered in a bare `LandingLayout` (no global chrome),
  with RTL/Arabic handling where the source template is Arabic.
- The **Dashboard** template is a multi-page app: one shared React sidebar layout with
  **8 sub‑routes** (`/landing-pages/dashboard/settings`, `/profile`, `/projects`, `/courses`,
  `/friends`, `/files`, `/plans`, and the index).
- **Migration complete**: all 24 pages are pure Tailwind 4.

## Features

| Feature | Description |
|---------|-------------|
| **Gallery** | Home page with a live grid of every landing page (slug, category, screenshot) |
| **Routing** | React Router 7, lazy routes + Suspense, route `/:slug/*` for multi-page templates |
| **RTL ready** | Arabic source pages keep `dir="rtl"` / `lang="ar"` via `LandingLayout` |
| **Styling** | Every page uses pure Tailwind CSS 4 utilities (arbitrary values for legacy px/pixels); single shared `src/index.css` |
| **Icons** | `react-icons` everywhere, including Dashboard (Font Awesome 6 set via `react-icons/fa6`) |
| **Error Handling** | Global error boundary with i18n support |
| **Loading States** | Reusable spinner / pending-page component |
| **DX** | ESLint 9 (flat config) + Vite HMR, code-split vendor chunks |

## Tech Stack

- **React 18** + **Vite 7**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **React Router 7** (lazy routes + Suspense)
- **i18next** + **react-i18next** + **browser-language-detector**
- **ESLint 9** (flat config, react-hooks, react-refresh)
- **react-icons** (Font Awesome 6 via `react-icons/fa6`, Feather, …)
- **sharp** + **ffmpeg-static** (asset optimization script)

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** (or yarn / pnpm)

### Installation

```bash
git clone <your-repo-url> my-project
cd my-project
npm install
cp .env.example .env   # optional, configures client vars
npm run client
```

The app is available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run client` | Start dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run build:analyze` | Build with bundle analysis mode |
| `npm run optimize` | Recompress assets / screenshots (sharp) |

## Project Structure

```
src/
├── assets/                # Generic shared images
├── components/
│   ├── common/            # Loading, ErrorBoundary, BackToGallery, PendingPage, LanguageSwitcher
│   └── <Landing>/         # One folder per landing page
│       ├── <Section>.jsx  # Each section = a mini-component
│       ├── data.js        # Content arrays (nav, features, grids, icons as react-icons, …)
│       └── images/        # Landing images (imported as assets; Dashboard uses imgs/ + images.js)
├── config/
│   ├── i18n.js            # i18n configuration
│   └── landingPages.js    # Central registry: slug, title, category, screenshot, lazy component
├── hooks/                 # useCountdown, useTilt, …
├── layouts/
│   ├── MainLayout.jsx     # Gallery: global header/footer + language switcher
│   └── LandingLayout.jsx  # Bare layout: per-page RTL/lang + "back to gallery" button
├── locales/               # en/fr/ar translations
├── pages/                 # HomePage + one routed page per landing (<Landing>Page.jsx)
├── App.jsx                # Routes (lazy + Suspense)
├── main.jsx               # Entry point
└── index.css              # Tailwind import, @theme tokens, global/raw styles
scripts/
└── optimize-assets.mjs    # sharp/ffmpeg-based asset optimization
public/
└── screenshots/           # Gallery card screenshots (.webp)
```

## Add a New Landing Page

1. Create `src/components/<Landing>/` with its section components, `data.js` and `images/`.
2. Create `src/pages/<Landing>Page.jsx` that assembles the sections with Tailwind utilities
   (no CSS import — all styles live in `src/index.css`).
3. Register it in `src/config/landingPages.js`:

```javascript
import { lazy } from "react";
const MyLandingPage = lazy(() => import("../pages/MyLandingPage.jsx"));

// in the exported array:
{
  slug: "my-landing",
  title: "My Landing",
  category: "corporate",
  screenshot: "/screenshots/My-Landing.webp",
  status: "done",
  component: MyLandingPage,
}
```

The gallery card and the `/landing-pages/my-landing` route are generated automatically.
For Arabic sources set `rtl: true` and `lang: "ar"` so `LandingLayout` toggles the document
direction on mount. Multi-page sources use sub-routes matched by the `/:slug/*` route pattern.

## Customization

- **Fonts**: Google Fonts are loaded once in `index.html` (preconnect + stylesheet).
- **Theme colors**: Tailwind tokens in `src/index.css`.
- **UI base components**: extend `src/components/common/`.
- **Default language**: change `fallbackLng` in `src/config/i18n.js`.

## Deployment

```bash
npm run build   # outputs to dist/
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host. For history-based routing,
configure SPA fallback to `index.html`. Set your `VITE_*` variables in the hosting dashboard.

## License

MIT