# Task Requirements — Compliance Checklist

This document maps each assignment requirement to how it is implemented in this project.

| # | Requirement | Status | Evidence in project |
|---|-------------|--------|---------------------|
| 1 | Develop design using HTML, CSS, JS, or frontend frameworks | **Done** | React 19 + JSX; semantic HTML in components; CSS in `index.css`, `header.css`, `footer.css`, `style.css` |
| 2 | Fully responsive (desktop, tablet, mobile) | **Done** | Viewport meta tag; breakpoints at 1200 / 1024 / 900 / 600 / 480 / 400 px across header, page, footer |
| 3 | Clean, maintainable, well-structured code | **Done** | Component split (Header, Footer, MainPage); data arrays; CSS variables; ESLint configured |
| 4 | Modern practices & performance | **Done** | Vite build; asset imports; font preconnect; lazy images below fold; `fetchPriority` on hero |
| 5 | Cross-browser compatibility | **Done** | Standard CSS (flex/grid); `box-sizing`; vendor-free layout; `-webkit-text-size-adjust` + standard `text-size-adjust` |
| 6 | Proper folder structure & organisation | **Done** | See structure below |

---

## 1. Frontend framework (React)

- **Stack:** React 19, Vite 8, JavaScript (JSX).
- **Entry:** `src/main.jsx` → `App.jsx` → `MainPage.jsx`.
- **Design assets:** Imported from `src/assets/Markham_VE (1)/` (bundled by Vite).

---

## 2. Responsive design

| Viewport | Typical width | Behaviour |
|----------|---------------|-----------|
| **Desktop** | > 1024px | Full header (utility + nav), 4-column quick nav, 4-card showroom, side-by-side news/video |
| **Tablet** | 900px – 1024px | Condensed header; 2×2 quick nav; 2-column showroom; stacked welcome diamonds |
| **Mobile** | ≤ 900px | Hamburger nav + utility drawer; stacked sections; 2×2 or 1-column grids |

**Files with media queries:**

- `src/component/header.css` — 1200, 1024, 900, 600, 480px
- `src/pages/style.css` — 900, 600, 480, 400px
- `src/component/footer.css` — 900, 600px

**Global:** `index.html` includes `viewport` meta tag.

---

## 3. Code quality & maintainability

- **Components:** Single responsibility — `Header`, `Footer`, `MainPage`.
- **Reusable data:** `quickNavItems`, `showroomCars`, `navLinks`, `quickLinks` (arrays + `.map()`).
- **Design tokens:** `:root` variables in `src/index.css` (`--purple`, `--layout-max`, fonts).
- **Scoped styles:** One CSS file per major UI area (no single 2000-line stylesheet).
- **Linting:** `npm run lint` (ESLint + React hooks plugin).

---

## 4. Modern practices & performance

| Practice | Implementation |
|----------|----------------|
| Fast dev/build | Vite HMR and tree-shaken production build |
| Asset pipeline | `import img from "..."` (correct hashed paths in `dist/`) |
| Font loading | `preconnect` to Google Fonts in `index.html` |
| Image loading | Hero: `fetchPriority="high"`; cars & news: `loading="lazy"` |
| Minimal JS | No heavy UI libraries; small bundle |
| Accessibility | `aria-label`, `aria-expanded`, `aria-hidden` on decorative icons, focus-visible styles |

---

## 5. Cross-browser compatibility

- Layout uses **Flexbox** and **CSS Grid** (supported in all current browsers).
- **No** experimental-only CSS required for core layout.
- Reset uses universal `box-sizing: border-box`.
- Images: `max-width: 100%` for fluid scaling.
- Buttons: normalized `font`, `cursor`, `border` in global CSS.
- **Reduced motion:** `prefers-reduced-motion` disables smooth scroll when requested.

**Recommended manual test:** Chrome, Firefox, Edge, Safari (desktop + mobile emulation).

---

## 6. Folder structure

```
markham-website/
├── public/              # Favicon and static files
├── src/
│   ├── assets/          # Design PNG/JPG (Markham_VE)
│   ├── component/       # Header + Footer (JSX + CSS)
│   ├── pages/           # MainPage + page styles
│   ├── App.jsx          # App shell
│   ├── main.jsx         # React bootstrap
│   └── index.css        # Global tokens & reset
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
├── REQUIREMENTS_CHECKLIST.md   # This file
├── README.md
└── INTERVIEW_PREP.txt
```

---

## Page coverage vs design

| Design section | Component / file |
|----------------|------------------|
| Header & nav | `Header.jsx`, `header.css` |
| Hero banner | `MainPage.jsx` (`.hero`) |
| Quick links | `MainPage.jsx` (`.quick-nav`) |
| Model showroom | `MainPage.jsx` (`.showroom`) |
| Welcome + diamonds | `MainPage.jsx` (`.welcome`) — side blocks: `gray_bg.png` CSS background; center: `viloet_bg.png` |
| News & video | `MainPage.jsx` (`.news-section`) |
| Footer | `Footer.jsx`, `footer.css` |

---

## How to verify before submission

```bash
npm install
npm run lint
npm run build
npm run preview
```

1. Resize browser: desktop → tablet (≈768–1024px) → mobile (≤480px).
2. Test header: hamburger menu and “Contact & hours” on mobile.
3. Confirm all images load (no broken paths).
4. Run production build without errors.

---

## Summary

**All six task requirements are met.** The project uses React as the chosen framework, implements responsive layouts at multiple breakpoints, keeps code organised by component and concern, follows common performance patterns (Vite, lazy loading, preconnect), uses widely supported CSS, and follows a clear `src/` folder layout suitable for review or interview demonstration.
