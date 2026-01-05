# Pro Captain Staffing Employee Handbook

A modern, static documentation site built with **Docusaurus 3** that serves as the central hub for Pro Captain Staffing employee training and information. The handbook covers safety procedures, environmental compliance, service guidelines, and uniform requirements.

**Live Site:** [pcs-docs.netlify.app](https://pcs-docs.netlify.app)

## Quick Start

### Prerequisites
- Node.js >= 20.0
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Starts the development server at http://localhost:3000 with hot reload enabled.

### Production Build
```bash
npm run build
```
Generates optimized static files in the `/build` directory.

```bash
npm run serve
```
Serves the production build locally for testing before deployment.

## Project Structure

```
pcs-docs/
├── docs/                    # Main documentation content (33 markdown files)
│   ├── intro.md            # Training home page
│   ├── commitment.md        # Company commitment
│   ├── personal-safety/     # Fire, weather, lightning safety
│   ├── environmental/       # Pollution, sewage, waste management
│   ├── services/           # Captain services, boat handling, checklists
│   └── uniforms/           # Dress code and gear requirements
├── src/
│   ├── pages/index.tsx      # Homepage component
│   ├── components/          # Reusable React components
│   └── css/custom.css       # Global styling (Infima theme customization)
├── static/img/              # Logos, badges, favicon
├── docusaurus.config.ts     # Main configuration
├── sidebars.ts              # Sidebar structure (auto-generated from /docs)
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Adding Documentation

### Create New Pages
1. Create a `.md` file in `/docs` or a subdirectory
2. The sidebar automatically updates based on directory structure
3. Files are ordered alphabetically (prefix with numbers for custom order)

Example:
```markdown
---
title: My Page Title
description: Brief description
---

# My Page Title

Content goes here...
```

### Front Matter (Optional)
- `title` - Page title (defaults to filename)
- `description` - SEO description
- Any custom metadata

### Sidebar Structure
The sidebar is auto-generated from the `/docs` directory. Each subdirectory becomes a collapsible category. To control ordering, prefix filenames with numbers:
```
01-first-page.md
02-second-page.md
```

## Styling

### Theme Customization
Colors and theme settings are defined in [`/src/css/custom.css`](src/css/custom.css) using CSS variables:
- Primary color: `#00A6AA` (teal/cyan)
- Built on **Infima CSS framework**
- Light (GitHub) and dark (Dracula) color schemes included

### Component Styles
Create `.module.css` files next to React components for component-specific styling.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | Start dev server with hot reload |
| `npm run build` | Create production build |
| `npm run serve` | Serve production build locally |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run clear` | Clear Docusaurus caches |
| `npm run write-translations` | Generate translation files |
| `npm run write-heading-ids` | Auto-generate heading IDs in markdown |
| `npm run swizzle` | Customize theme components (advanced) |

## Deployment

### Netlify (Current)
- **Production URL:** https://pcs-docs.netlify.app
- **Auto-deploys** on push to `main` branch
- **Node.js version:** 22.x (configured in Netlify UI)

To deploy:
1. Push changes to the `main` branch
2. Netlify automatically builds and deploys
3. Build logs available in Netlify dashboard

### Configuration
- Build command: `npm run build`
- Publish directory: `/build`
- Node.js version: `22.x`

## Important Notes

### Build Requirements
- **Strict link checking:** The build fails if there are broken internal links (`onBrokenLinks: 'throw'`)
  - Always verify links exist before committing
  - Run `npm run build` locally to catch broken links
- **Markdown link warnings:** Broken markdown links generate warnings but don't fail builds

### Link Format
- Internal links: `[text](/docs/path/to/page)` or `[text](../relative/path)`
- External links: `[text](https://example.com)`

### Edit Links
"Edit this page" links point to the GitHub repository at:
```
https://github.com/joptimus/pcs-docs/edit/main/
```

## Development Tips

### TypeScript
```bash
npm run typecheck
```
Validates all TypeScript files for type safety.

### Hot Reload
Changes to markdown files and React components automatically reload in the dev server—no restart needed.

### Clear Cache
If the site behaves unexpectedly:
```bash
npm run clear
npm start
```

## Contributing

1. Create a new branch for your changes
2. Add or edit markdown files in `/docs`
3. Run `npm start` to preview locally
4. Run `npm run build` to verify no broken links
5. Commit with clear messages
6. Push to main branch (or create a pull request)
7. Netlify automatically deploys on merge

## Technology Stack

- **Docusaurus 3.9.2** - Static site generator for documentation
- **React 18** - Component framework
- **TypeScript 5.5** - Type safety
- **Prism** - Syntax highlighting
- **Infima** - CSS framework
- **Netlify** - Hosting and deployment

## License

Copyright © Pro Captain Staffing, LLC. All rights reserved.

## Questions?

For issues with the site or deployment, check the [Docusaurus documentation](https://docusaurus.io) or contact the development team.
