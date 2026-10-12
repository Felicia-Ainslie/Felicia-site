# Felicia Ainslie — Personal Portfolio

Learn. Solve. Document. Deliver.

This is my personal portfolio and a working example of how I approach building software. It brings together my product leadership, technical experience, education, and independent projects—from enterprise cybersecurity work to games made with my family.

I enjoy solving messy problems, uncovering operational friction, and building systems that teams can actually adopt, trust, and scale. This site is a place to share that work, the learning behind it, and the perspective I bring to product decisions.

## Explore the site

| Page | Purpose |
| --- | --- |
| `/home` | About me and my operating philosophy. `/` redirects here. |
| `/experience` | Skills, work experience, education, and professional development. |
| `/portfolio` | Independent projects first, followed by academic capstones and original document downloads. |
| `/ask` | The current coming-soon page for Ask Felicia AI. The site does not yet run an AI assistant. |
| `/contact` | Email and professional social links. |

[Play FamJam Games](https://famjam-games.pages.dev) · [Explore the AI agent platform](https://github.com/Felicia-Ainslie/fai-agent-platform)

## Run locally

Use Node.js 22.13+ or a newer supported LTS release, and npm.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). The homepage implementation is `app/home/page.tsx`; `app/page.tsx` handles the root redirect.

## Validate changes

```bash
npx tsc --noEmit
npm run lint
npm test -- --run
npm run build
npm audit
```

Resolve dependency audit findings before committing or deploying. Run the full `npm audit`, including development dependencies; `npm audit --omit=dev` provides a separate production-only check.

The scoped override in `package.json` replaces the Next.js ESLint plugin's `fast-glob` dependency with `tinyglobby` 0.2.17, removing the vulnerable `micromatch`/`braces` chain. It preserves the plugin's directory-matching API without downgrading Next.js, disabling lint rules, or suppressing audit findings. `tests/lintDependencies.test.ts` verifies directory matching and Next.js rule execution. Reassess the override when updating `eslint-config-next`.

Use `npm run test:watch` for focused development. To serve the production build locally, run `npm run start` after building.

The build downloads Playfair Display and Montserrat through `next/font/google`, so it requires access to Google Fonts. Automated tests cover shared links/components and the integrity of local document collections and content references. They do not replace desktop/mobile visual or keyboard checks.

## How the code is organized

The site uses Next.js App Router, React, TypeScript, and Tailwind CSS. It keeps content in typed modules and uses shared components where behavior or presentation repeats.

- `components/layout/`: `PageShell`, navigation, and the shared footer.
- `components/ui/`: shared cards, rounded buttons, text links, and other existing UI helpers.
- `app/globals.css`: brand tokens, shared warm panels, link behavior, and responsive page styles. Playfair Display is the heading font; Montserrat is the body font. Decorative gold and the darker gold text color use separate tokens for readability.
- `data/profile.ts`: my handwritten summary and profile information.
- `data/technicalSkills.ts`: the complete skills inventory, rendered on Experience.
- `data/experience.ts`: employer contributions and individual Nextiva role history.
- `data/education.ts`: degrees, certificate links, and academic project quick reads shared by Experience and Portfolio.
- `data/academicDocuments.ts`: local document paths, original source URLs, formats, and file sizes.
- `data/projects.ts`: project descriptions, technologies, repository links, and availability.
- `data/navigation.ts`: shared navigation order and available destinations.

Text links to external sites and PDF reads open in a new tab with ↗. Explicit downloads use ↓. Internal page links stay in the current tab. Buttons retain their own appearance and behavior.

## Content and original work

Employment contributions come from my resume; the individual roles and credential links were reconciled with my LinkedIn profile. Degree dates and academic examples were brought over from [my earlier Wix portfolio](https://feliciaainslie.wixsite.com/mysite).

Academic capstones are clearly identified as school projects for fictional organizations. Their original PDFs, spreadsheets, and presentations are preserved in `public/documents/education/`; the locally available course certificate is in `public/documents/certificates/`. Other credentials remain on their issuer sites and may require sign-in.

Maintain explanatory comments when making layout changes. Update the relevant content module instead of duplicating descriptions across pages. Preserve original academic files; add previews or summaries separately. Project status should distinguish live work, work in progress, and developing concepts.

The FA logo is `public/images/FA-logo.jpg`. Its URL must match that capitalization exactly. The resume remains in `public/documents/`.

## Publishing

This repository contains the website source. Local builds and tests do not publish it. Preserve the existing hosting setup; do not commit `.next/`, `node_modules/`, credentials, or environment files. The hosting provider must support this project's Next.js configuration.


## Social brand assets

Contact uses the unchanged official LinkedIn blue [in] icon and GitHub black Invertocat with clear space. They link to my profiles, remain secondary to the FA branding, and are not recolored on hover.

- LinkedIn: [profile-link usage guidelines](https://brand.linkedin.com/in-logo) and [official downloads](https://brand.linkedin.com/downloads).
- GitHub: [logo and social-button usage guidelines](https://brand.github.com/foundations/logo) and [official logo pack](https://brand.github.com/GitHub_Logos.zip).

These marks belong to their respective owners. Keep their approved colors, proportions, and clear space when changing the Contact layout.
