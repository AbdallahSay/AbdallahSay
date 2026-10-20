# Profile setup and review

The separate public username repository is [AbdallahSay/AbdallahSay](https://github.com/AbdallahSay/AbdallahSay). It did not exist when this task started. Its `main` branch has an empty initialization commit, with no README or profile redesign. All design files belong to `feat/masar-digital-craft` for review.

## Review before publishing

1. Open the pull request and review the README in **rich diff** or open `README.md` on the feature branch.
2. Inspect `docs/previews` for actual GitHub desktop/mobile screenshots in both themes. See `VALIDATION_REPORT.md` for what was checked.
3. Review project wording and `PROJECT_VERIFICATION.md`, especially the in-development label and limits on live-interface verification.
4. Merge only after explicit approval. A root README on the public username repository's default branch enables the profile presentation. This task does not merge the PR or change account fields/pins.

## Suggested account fields

**Name:** Abdallah Sayed

**Bio:** Full-stack software developer | SaaS, automation & digital products | Masar Tech | C#/.NET, TypeScript, Next.js & Angular

**Website:** https://abdallah-sayed-portfolio.vercel.app

**Suggested pins**, in this order:

1. `Abdallah-Portfolio-V6-MasarTech-Nextjs` — primary identity and case studies.
2. `factory-quote-generator` — backend and automation depth.
3. `watsstore-saas` — commerce application across frontend and API.
4. `Nabra` — Arabic audio and AI interface work.
5. `digital-menu-saas` — Angular/.NET work in development.

Five pins are intentional; do not fill the sixth slot with unrelated coursework merely for symmetry. These settings are suggestions and have not been applied.

## Local review and exact commands

```powershell
git clone https://github.com/AbdallahSay/AbdallahSay.git
Set-Location AbdallahSay
git switch feat/masar-digital-craft
npm ci
npm run validate
npm run screenshots
```

Screenshots require locally installed Google Chrome and network access to GitHub. Override `CHROME_PATH` or `PROFILE_REVIEW_URL` if necessary. Validation uses the GitHub CLI for anonymous public metadata and Markdown API requests; authenticated `gh` avoids low anonymous rate limits. It never prints authentication material.

To reproduce the original SVG assets, use `npm run assets`; to recreate the concept vectors, use `npm run concepts`. The final profile needs none of Node, npm, these scripts or third-party packages at viewing time.

## After an approved merge

Check the profile at [github.com/AbdallahSay](https://github.com/AbdallahSay) in light and dark modes and at a narrow viewport. GitHub may cache images. Verify that all assets resolve relative to the default-branch README. Apply the suggested account fields and pins manually if desired. No portfolio repository changes, visibility changes, external deployment or notification integrations are needed.
