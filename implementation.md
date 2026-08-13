# Portfolio Setup Implementation Guide

This document outlines the step-by-step implementation plan for setting up the **Aville Malintad Portfolio** front end based on the reference design.

---

## 🎨 Design System & Visual Architecture

- **Color Palette**:
  - Background: `#0B0D0E` (Deep charcoal dark)
  - Card/Container: `rgba(22, 25, 28, 0.7)` (Dark frosted glass)
  - Accent Color: `#00E599` / `#00DF89` (Electric emerald green glow)
  - Text Primary: `#FFFFFF`
  - Text Muted: `#9CA3AF`
- **Typography**:
  - **Headers & Large Titles**: `Space Grotesk` (via Google Fonts / Next Font)
  - **Subtext & Body Copy**: `Poppins` (via Google Fonts / Next Font)
- **Key Elements**:
  - Centered profile photo (`profile.png`) on top of glowing background triangle vector (`rotated-V.svg`).
  - Floating pill top navigation bar (`logo.svg` + nav links).
  - Dual dynamic left/right promo text callouts in Hero section.
  - Emerald glow outline borders on hero buttons and bottom frame.

---

## 📐 Page Structure

1. **Header / Navigation** (Pill navbar: Home, About Me, Projects, Services, Contact)
2. **Hero Section** (Title, background triangle shape, profile image, left & right skill callouts)
3. **About Me Section** (Personal bio, metrics, and skill badges using asset tools-logo icons)
4. **Projects Section** (Interactive portfolio cards showcasing UI/UX and Web App builds)
5. **Services Section** (Card grid of offered services)
6. **Contact Section** (Interactive dark contact form + direct details)
7. **Footer** (Brand, quick links, social media, back-to-top button)

---

## 🛠 File Structure & Implementation

```
vel-portfolio/
├── app/
│   ├── globals.css         # Tailwind v4 custom theme, Space Grotesk & Poppins setup, ambient glow
│   ├── layout.tsx          # Next font loading (Space_Grotesk & Poppins) & layout wrapper
│   └── page.tsx            # Main single-page portfolio layout
├── components/
│   ├── Navbar.tsx          # Floating pill header
│   ├── Hero.tsx            # Reference-matched hero section
│   ├── About.tsx           # Bio & tools/skills grid
│   ├── Projects.tsx        # Project showcase grid
│   ├── Services.tsx        # Services cards
│   ├── Contact.tsx         # Contact form & info
│   └── Footer.tsx          # Footer component
└── public/
    └── assets/
        └── images/         # Assets copied from assets/
            ├── logo.svg
            ├── profile.png
            ├── rotated-V.svg
            └── tools-logo/
```

---

## 🚀 Execution Steps

1. Copy images from `vel-portfolio/assets` into `vel-portfolio/public/assets`.
2. Configure `Space_Grotesk` and `Poppins` fonts in `app/layout.tsx` and register `--font-heading` and `--font-body` in `app/globals.css`.
3. Build reusable modular components for `Navbar`, `Hero`, `About`, `Projects`, `Services`, `Contact`, and `Footer`.
4. Assemble all components into `app/page.tsx` with smooth scroll anchors.
5. Verify build with `npm run build` and launch dev server `npm run dev`.
