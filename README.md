# Portfolio

Lauren Chaplinski's personal portfolio site — built with [Astro](https://astro.build)
and Tailwind CSS, deployed to Azure Static Web Apps.

**Live:** https://victorious-water-0fbb0fa10.7.azurestaticapps.net/

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
repoUrl: string          # optional — adds a "view repo" link on the case study page
draft: boolean          # set true to hide from listings without deleting
```

Case studies still needing your input are marked with an inline `{/* TODO(Lauren): ... */}`
comment inside the MDX file — these don't render on the page.

## Deployment

Deploys via GitHub Actions to Azure Static Web Apps
(`.github/workflows/azure-static-web-apps.yml`), on the Free plan. Already connected —
push to `main` (or open a PR) to trigger a deploy. PRs get their own preview
environment; closing the PR tears it down automatically.

To reconnect this to a different Azure resource in the future:

1. Create a Static Web App resource in the Azure portal (or `az staticwebapp create`),
   with source "Other" (not GitHub — that auto-generates a second, conflicting
   workflow file) to get a resource without any CI/CD wiring attached.
2. Grab its deployment token (resource Overview → **Manage deployment token**) and add
   it as a repo secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`
   (Settings → Secrets and variables → Actions), replacing the old one.
3. Re-run the workflow (or push to `main`) to deploy.

A separate `ci.yml` workflow runs typecheck + build on every PR regardless of whether
the Azure secret is set, so you get build feedback even before hosting is wired up.

## Outstanding content

- Case study "Outcome" sections have placeholder copy pending the project walkthrough.
- 2084 needs a connect address once it's publicly hosted.
