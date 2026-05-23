# Markham Infiniti Website

A responsive marketing homepage for **Markham Infiniti** dealership, built from a visual design (VE mockup). The site presents inventory, welcome content, news, and contact information in a single-page layout.

**Related docs:** [REQUIREMENTS_CHECKLIST.md](./REQUIREMENTS_CHECKLIST.md) (assignment compliance) · [INTERVIEW_PREP.txt](./INTERVIEW_PREP.txt) (interview talking points)

---

## Technologies Used

| Category | Technology |
|----------|------------|
| **UI library** | React 19 |
| **Build tool** | Vite 8 |
| **Language** | JavaScript (JSX) |
| **Styling** | Plain CSS (component-scoped + page styles) |
| **Fonts** | Google Fonts — Raleway, Open Sans, Playfair Display |
| **Linting** | ESLint 10 |
| **Assets** | PNG/JPG design exports in `src/assets/Markham_VE/` |

There is no backend, routing library, or CSS framework — the project focuses on **pixel-close UI implementation**, **responsive layout**, and **clean component structure**.

---

## Task Requirements Compliance

All six assignment requirements are implemented and documented.

| Requirement | Status |
|-------------|--------|
| Implement design with HTML/CSS/JS or a frontend framework (**React**) | Met |
| Fully responsive (desktop, tablet, mobile) | Met |
| Clean, maintainable, well-structured code | Met |
| Modern practices & performance optimisation | Met |
| Cross-browser compatibility | Met |
| Proper folder structure & organisation | Met |

See **[REQUIREMENTS_CHECKLIST.md](./REQUIREMENTS_CHECKLIST.md)** for requirement-by-requirement evidence, breakpoints, and verification steps.

---

## Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** (comes with Node.js)

---

## Setup Instructions

### 1. Open the project

```bash
cd markham-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### 4. Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs optimised static files to `dist/`. `npm run preview` serves that build locally.

### 5. Lint

```bash
npm run lint
```

---

## Project Structure

```
markham-website/
├── public/                      # Favicon and static files
├── src/
│   ├── assets/
│   │   └── /      # Design images (banner, cars, icons, etc.)
│   ├── component/
│   │   ├── Header.jsx           # Top bar + navigation (mobile menu)
│   │   ├── header.css
│   │   ├── Footer.jsx           # Map background, contact, quick links
│   │   └── footer.css
│   ├── pages/
│   │   ├── MainPage.jsx         # Hero, quick nav, showroom, welcome, news
│   │   └── style.css
│   ├── App.jsx                  # Root → MainPage
│   ├── main.jsx                 # React entry + global CSS
│   └── index.css                # CSS variables, reset, fonts, a11y
├── index.html                   # Viewport, meta description, font preconnect
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md                    # This file
├── REQUIREMENTS_CHECKLIST.md    # Assignment requirements mapping
└── INTERVIEW_PREP.txt           # Interview preparation notes
```

---

## Page Sections

| Section | Key assets / notes |
|---------|-------------------|
| **Header** | `Logo.png`, `Header_strip.png`, contact icons, social PNGs; mobile hamburger + utility drawer |
| **Hero** | `banner.png` as `<img>` with `fetchPriority="high"` |
| **Quick nav** | `cta_01`–`cta_04`, `bg_dotted_Line.png`; labels below circles |
| **Model showroom** | `car_01`–`car_04`, `Plus.png`; lazy-loaded images |
| **Welcome** | `welocme_bg.png`; side diamonds use `gray_bg.png` (CSS background); center uses `viloet_bg.png` |
| **News & video** | `event.png`, arrow icons; CSS mock video player |
| **Footer** | `footer_map_bg.jpg.png` with gradient overlay; quick links + copyright |

---

## Key Implementation Notes

- **Vite asset imports:** Images are imported in JSX (`import Banner from "..."`) so paths resolve at build time — avoid broken string paths in components.
- **Global design tokens:** `src/index.css` defines `--purple`, `--layout-max`, font families, reset, `:focus-visible`, and `prefers-reduced-motion`.
- **Responsive breakpoints:** Header (1200 / 1024 / 900 / 600 / 480px), page (900 / 600 / 480 / 400px), footer (900 / 600px).
- **React state:** `Header.jsx` uses `useState` for mobile nav and utility panel (only one open at a time).
- **Data-driven UI:** `quickNavItems`, `showroomCars`, `navLinks`, and `quickLinks` use `.map()` to reduce duplication.
- **Performance:** Font `preconnect` in `index.html`; hero priority load; `loading="lazy"` on below-fold images; production bundle via Vite (~248 KB JS gzipped ~83 KB).

---

## Responsive Testing (quick guide)

| Device | Width to test | What to check |
|--------|---------------|---------------|
| Desktop | > 1024px | Full header, 4 quick-nav items, 4-column showroom |
| Tablet | 900–1024px | Condensed header, 2×2 quick nav, 2-column showroom |
| Mobile | ≤ 900px | Hamburger menu, stacked welcome diamonds, single-column news |

---

## Interview Preparation

For a 30-second pitch, section-by-section work log, challenges, and sample Q&A, see:

**[INTERVIEW_PREP.txt](./INTERVIEW_PREP.txt)**

---

## License

Private / interview project — assets belong to the original Markham Infiniti design package.
