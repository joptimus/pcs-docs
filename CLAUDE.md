# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Docusaurus 3.5.2 static documentation site** serving as the Pro Captain Staffing (PCS) Employee Handbook. It's a content-focused project with minimal custom code, deployed to Netlify at `https://pcs-docs.netlify.app`.

## Common Development Commands

### Setup & Installation
```bash
npm install      # Install dependencies (also supports yarn)
```

### Local Development
```bash
npm start        # Start dev server with hot reload (http://localhost:3000)
```

### Building & Deployment
```bash
npm run build    # Generate production build to /build directory
npm run serve    # Serve the production build locally for testing
npm run deploy   # Build and deploy to GitHub Pages (if configured)
npm run clear    # Clear Docusaurus caches
```

### Code Quality
```bash
npm run typecheck  # Run TypeScript type checking
```

### Documentation Utilities
```bash
npm run write-translations   # Generate translation files
npm run write-heading-ids    # Auto-generate heading IDs in markdown
npm run swizzle              # Customize theme components (advanced)
```

## Project Structure

### Content Organization
- **`/docs`** - Main documentation content (33 markdown files)
  - `intro.md` - Training home/getting started
  - `/personal-safety/` - Safety training (fire, weather, lightning, etc.)
  - `/environmental/` - Environmental compliance (pollution, sewage, litter control)
  - `/services/` - Service offerings (captain services, boat handling, checklists)
  - `/uniforms/` - Uniform and gear requirements

### Code Files
- **`/src`** - React components and styling
  - `/pages/index.tsx` - Homepage component
  - `/components/` - Reusable React components
  - `/css/custom.css` - Global styling (Infima theme customization)

### Configuration
- **`docusaurus.config.ts`** - Main configuration (site title, URL, navbar, footer, theme)
- **`sidebars.ts`** - Documentation sidebar structure (auto-generated from filesystem)
- **`package.json`** - Dependencies and npm scripts
- **`tsconfig.json`** - TypeScript configuration
- **`babel.config.js`** - Babel configuration

### Static Assets
- **`/static/img/`** - Images (favicon, badges, logos)
- **`/blog`** - Blog posts and authors (minimal usage)

## Architecture Overview

### Docusaurus & Theme System
- Uses Docusaurus **classic preset** which includes docs, blog, and theming
- Theme is built on **Infima CSS framework** with teal/cyan customization (#00A6AA)
- Supports light (GitHub) and dark (Dracula) color schemes
- Markdown is rendered via React with syntax highlighting (Prism)

### Sidebar Auto-Generation
The sidebar is automatically generated from the `/docs` directory structure:
- Each subdirectory becomes a collapsible sidebar category
- Files are ordered alphabetically within categories
- `intro.md` serves as the documentation home

### Build & Deployment
- Build output: `/build` directory (production-ready static HTML/CSS/JS)
- Strict link checking: `onBrokenLinks: 'throw'` (build fails on broken internal links)
- Warnings only for broken markdown links: `onBrokenMarkdownLinks: 'warn'`
- Deployment: Git-based via Netlify (currently configured)
- Edit links point to GitHub repo for content contributors

## Key Development Notes

### Adding New Documentation
1. Create `.md` files in `/docs` or subdirectories
2. Sidebar automatically updates based on directory structure
3. Files are auto-discovered and ordered alphabetically (prefix with numbers if custom order needed)
4. Front matter is optional but can be used for metadata (title, description, etc.)

### Customizing Styling
- Global styles: `/src/css/custom.css` - CSS variables control Infima theme
- Component styles: Create `.module.css` files next to React components
- No CSS-in-JS framework in use; Infima tokens are used for consistency

### TypeScript
- Configured for React + Node.js
- Type checking: `npm run typecheck`
- Docusaurus provides type definitions for config files

### Deployment Pipeline
- Current: Netlify (git-based, auto-deploys on main branch push)
- Alternative: GitHub Pages via `npm run deploy` command
- Build: Triggered on Netlify when main branch is updated
- Production URL: https://pcs-docs.netlify.app

## Important Constraints

- **Break on Broken Links**: The build will fail (`onBrokenLinks: 'throw'`) if there are internal links to non-existent pages. Always verify links exist before committing.
- **Node.js Version**: Requires Node.js >= 18.0
- **Single Locale**: English only - internationalization is disabled
- **Edit Links**: Point to GitHub repo's main branch; content is version-controlled there

## Common Tasks

### Updating Documentation Content
Edit markdown files in `/docs` directly. Changes hot-reload in dev server.

### Fixing Broken Links
Run `npm run build` to identify broken links. The build will throw an error showing the file and line number.

### Customizing Theme Colors
Edit CSS variables in `/src/css/custom.css` (Infima custom properties for colors, spacing, etc.)

### Adding New Pages
Create `.md` files in `/docs`. For special pages not in sidebar, create React components in `/src/pages/`.
