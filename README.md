# Wargavi48 Website

Official community website for **Wargavi48** (JKT48V fanbase), built with React + Vite and deployed on GitHub Pages.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Swiper (project/comic sliders)
- Font Awesome icons

## Current Features

- Modern community-first homepage redesign
- Automatic light/dark mode detection with manual toggle
- Hero section with member name sparkle accents
- Project and comic sliders with:
  - pagination bullets below cards
  - play/pause autoplay control
- Project detail modal:
  - opens on project card click
  - includes title, description, article, external project link
  - close via close button or outside click
  - open/close fade animation
- Comic reader modal:
  - opens on comic card click
  - close via close button or outside click
  - open/close fade animation
- Embedded Discord widget section

## Local Development

```bash
npm install
npm run dev
```

Vite default URL: `http://localhost:5173`

## Production Build

```bash
npm run build
npm run preview
```

## Content Sources

- Projects data: `src/Constant/Project.ts`
- Comics data: `src/Constant/Comic.ts`
- Main page layout: `src/App.tsx`

## Project Structure

```text
src/
  components/
    ComicCard.tsx
    ComicModal.tsx
    ProjectCard.tsx
    ProjectModal.tsx
    CardSlider.tsx
    ProjectCardSlider.tsx
    Header.tsx
  Constant/
    Comic.ts
    Project.ts
  styles/
    style.css
  App.tsx
  main.tsx
```
