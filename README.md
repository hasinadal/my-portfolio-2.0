# Tabrez Dal — Portfolio
### Product Engineer — Software & UX

Personal portfolio and case study showcase built with React.  
Live at **[tabrezdal.com](https://tabrezdal.com)**

---

## Overview

A single-page React application presenting my work across software engineering,
UX/UI design, and product thinking. The site features detailed case studies,
a filterable project grid, testimonials, and direct booking via Calendly.

Designed and developed entirely by me — from information architecture and visual
design through to implementation, deployment, and ongoing iteration.

---

## Pages & Sections

| Page | Description |
|---|---|
| **Home** | Hero, Skills, Tools, Technologies, Featured Work, Projects, Testimonials, CTA |
| **UI/UX Projects** | Filterable grid of UX/UI design work with category tabs |
| **Case Studies** | In-depth project breakdowns — problem, process, outcome |
| **Projects Grid** | Full portfolio filterable by discipline |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 (Create React App) |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Styling | CSS Modules + Bootstrap 5 + CSS Custom Properties |
| Design Tokens | CSS custom properties (`src/styles/tokens.css`) |
| Hosting | Firebase Hosting |
| Version Control | GitHub |

---

## Architecture Highlights

### Design Token System
All colors, spacing, typography weights, border-radius, shadows, transitions,
and z-index values are defined as CSS custom properties in a single token file:

```
src/styles/tokens.css
```

Imported once in `index.css` — available globally across all component styles
with no per-component imports needed.

### Shared Animation Variants
Framer Motion animation variants are centralised in:

```
src/utils/animationVariants.js
```

16 named exports (`fadeUpVariants`, `fadeLeftVariants`, `scaleUpVariants`, etc.)
used consistently across all animated components. Intentional one-off variants
(unique distances, delay-based stagger) are kept local where appropriate.

### Project Data Layer
All portfolio content is data-driven — projects, case studies, testimonials,
technologies, and skills are defined in structured JS data files under:

```
src/Data/
src/Helpers/
```

Components consume data via props — no content is hardcoded in JSX.

### Component Structure
```
src/
├── Assets/               # Images, icons, fonts
├── components/           # Feature components (sections, case study parts)
├── sharedComponents/     # Reusable UI (buttons, social links, cards)
├── layouts/              # Header, Footer, page wrappers
├── pages/                # Route-level page components
├── Data/                 # Portfolio content data files
├── Helpers/              # Image imports, constants, utilities
├── styles/               # Global styles and token file
└── utils/                # Shared logic (animationVariants.js)
```

---

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Install & Run
```bash
git clone https://github.com/tabrezdal/my-portfolio-2.0.git
cd my-portfolio-2.0
npm install
npm start
```

Opens at `http://localhost:3000`

### Build
```bash
npm run build
```

### Deploy
Hosted on Firebase. Deploy via:
```bash
firebase deploy
```

---

## Design Decisions

**CSS custom properties over a CSS-in-JS library** — keeps styling portable,
avoids runtime overhead, and works cleanly alongside Bootstrap without conflicts.

**Framer Motion for animations** — scroll-triggered entrance animations use
`whileInView` with `once: true` to avoid re-triggering. All variants are
centralised to keep animation behaviour consistent and easy to update globally.

**Data-driven content layer** — separating content from presentation means
updating a project, testimonial, or technology requires editing one data file,
not hunting through JSX.

**CRA over Next.js (current)** — deliberately kept for now. A Next.js migration
is planned for a future phase to gain SSR, SSG, and improved SEO capabilities.

---

## Contact

**Portfolio:** [tabrezdal.com](https://tabrezdal.com)  
**Schedule a call:** [calendly.com/tabrezdal](https://calendly.com/tabrezdal)  
**LinkedIn:** [linkedin.com/in/tabrezdal](https://linkedin.com/in/tabrezdal)