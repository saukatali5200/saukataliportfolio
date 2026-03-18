# Raseed Saukat Ali — Portfolio (Next.js)

A full Next.js 14 conversion of the original single-page HTML portfolio.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page assembling all sections
│   └── globals.css      # All styles (themes, animations, responsive)
├── components/
│   ├── CustomCursor.tsx     # Animated custom cursor
│   ├── ThemeSwitcher.tsx    # Ocean / Ember / Jade / White themes
│   ├── Navbar.tsx           # Fixed nav with active-link tracking
│   ├── HeroCanvas.tsx       # Particle canvas animation
│   ├── HeroSection.tsx      # Hero with avatar, headline, stats
│   ├── MarqueeBanner.tsx    # Scrolling tech marquee
│   ├── SkillsSection.tsx    # Animated skill bars
│   ├── ExperienceSection.tsx # Timeline experience
│   ├── ProjectsSection.tsx  # Project cards grid
│   ├── AboutSection.tsx     # Bento-grid about
│   ├── ContactSection.tsx   # Contact links
│   ├── Footer.tsx           # Footer
│   └── ScrollReveal.tsx     # Intersection Observer reveals
└── data/
    └── portfolio.ts     # All content data (edit here to update info)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

All personal data is in `src/data/portfolio.ts` — edit name, links, skills, projects, experience there.

## Features Preserved
- 4 color themes (Ocean, Ember, Jade, White) with localStorage persistence
- Custom animated cursor with ring
- Hero canvas particle animation
- Scroll reveal animations
- Animated skill bars (triggered on scroll)
- Magnetic button hover effect
- Active nav link tracking
- Fully responsive
"# portfolios" 
"# portfolios" 
"# portfolios" 
"# portfolios" 
"# saukataliportfolio" 
"# saukataliportfolio" 
