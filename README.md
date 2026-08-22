# Portfolio

Lauren Chaplinski's personal portfolio site — built with [Astro](https://astro.build)
and Tailwind CSS, deployed to Azure Static Web Apps.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build to dist/
npm run preview   # preview the production build locally
```

## Content

Project case studies live in `src/content/projects/*.mdx`. Each has frontmatter:

```yaml
title: string
summary: string
order: number          # display order on the projects index
kind: personal | client-generalized
stack: string[]
year: string
draft: boolean          # set true to hide from listings without deleting
```

Case studies still needing your input are marked with an inline `{/* TODO(Lauren): ... */}`
comment inside the MDX file — these don't render on the page.

## Deployment

Deploys via GitHub Actions to Azure Static Web Apps
(`.github/workflows/azure-static-web-apps.yml`). To connect it to a real Azure
resource:

1. Create a Static Web App resource in the Azure portal (or `az staticwebapp create`),
   pointing at this repo — or create it detached and just take the deployment token.
2. Add the deployment token as a repo secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`
   (Settings → Secrets and variables → Actions).
3. Push to `main` (or open a PR) to trigger a deploy. PRs get their own preview
   environment; closing the PR tears it down automatically.

A separate `ci.yml` workflow runs typecheck + build on every PR regardless of whether
the Azure secret is set, so you get build feedback even before hosting is wired up.

## Outstanding content

- `public/resume.pdf` doesn't exist yet — the "View résumé" links will 404 until you
  add the real file at that path.
- Case study "Outcome" sections have placeholder copy pending the project walkthrough.
