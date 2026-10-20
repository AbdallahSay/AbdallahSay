# Profile validation report

Review date: 20 October 2026. Target: the root README in the separate public profile repository, feature branch `feat/masar-digital-craft`. The profile redesign has not been merged or enabled on the default branch.

## Results

| Check | Result | Evidence |
| --- | --- | --- |
| GitHub Markdown sanitization | PASS | GitHub REST `/markdown`, GFM mode and repository context; output saved in [github-api-rendered.html](previews/github-api-rendered.html). Both responsive pictures, native theme links, alt text, headings and actions survive. |
| Actual GitHub rendering | PASS | Hosted feature-branch README rendered by GitHub, captured in Chrome. No mock HTML or custom stylesheet used. [Preview index](previews/README.md). |
| Desktop light / dark | PASS | 1440px viewport; 1012px article; matching desktop SVG; no document or article overflow. |
| Tablet light / dark | PASS | 768px viewport; 670px article; matching desktop SVG; no document or article overflow. |
| Mobile light / dark | PASS | 390px viewport; 324px article; matching mobile SVG; no overflow. |
| Narrow light / dark | PASS | 320px viewport; 254px article; matching mobile SVG; no overflow. |
| Explicit theme opposite to system | PASS | Desktop and mobile in each direction. GitHub's existing `data-color-mode` attribute was changed locally in the test browser to simulate a site preference; no account setting was changed. Native CSS selected one correct theme and the correct size. |
| SVG parsing and rendering | PASS | All four assets parsed and rasterized with Sharp. Meaningful title/description, local files, no scripts, foreignObject, fonts, external references, filters or animation. |
| Asset paths / loading | PASS | Relative paths checked on disk and loaded from actual branch URLs; exactly one hero visible in each browser scenario. |
| Project visibility / URLs | PASS | All five repository API responses confirm public visibility. See [source evidence](PROJECT_VERIFICATION.md). |
| Live interfaces | PASS, limited scope | Four GET requests returned 200 with matching titles. No product transactions, AI requests or integration workflows executed. |
| Copy accuracy | PASS | Repository README and source inspection; no years, revenue, customers, employment or completion claims invented. Digital Menu is labeled in development. |
| Whitespace validation | PASS | `git diff --check`. |

Machine-readable results: [37 validation checks](previews/validation.json) and [12 browser scenarios](previews/browser-validation.json). Browser metadata records source URLs, viewport and article widths, document scroll widths, headings and site color mode.

> **Validation environment note:** All 37 static validation checks and 12 browser rendering scenarios were executed in the local verification environment using Node 24, Playwright 1.62, and GitHub REST APIs against the live feature-branch URL. GitHub Actions CI is not currently configured on this repository; these checks represent thorough local automated verification rather than remote CI pipelines.

## Contrast and accessibility

WCAG relative-luminance formula, against the actual hero background:

| Text role | Dark ratio | Light ratio |
| --- | --- | --- |
| Primary | 17.19:1 | 17.06:1 |
| Secondary | 7.34:1 | 7.24:1 |
| Primary accent | 12.99:1 | 4.56:1 |
| Violet endpoint | 6.92:1 | 5.64:1 |

All text colors clear 4.5:1. The endpoint is decorative. Borders and ticks carry no information and are not assessed as body text. SVG font sizes scale with image width; dedicated mobile artwork keeps name and role larger than scaling down the desktop composition would. The smallest SVG brand labels are supplementary; essential identity and positioning are repeated in alt text and the introduction.

Projects and technology lists are native text with real headings. Portfolio and email actions are ordinary keyboard-accessible links. No animated content, interaction traps or autoplay media. Screen-reader and magnification testing with assistive hardware/software was **not run**; this report does not claim a complete WCAG conformance audit.

## Theme compatibility finding

Initial combined theme/width sources worked under automatic themes but were unsafe under an explicitly selected theme: GitHub's own loaded `themed-picture` implementation replaces theme-source media attributes with unconditional color-scheme matches. The final markup separates responsibilities: GitHub's native `#gh-dark-mode-only` and `#gh-light-mode-only` anchor selectors choose the theme, and each picture has only a width condition. Actual loaded GitHub CSS contains these theme selectors for explicit and automatic modes. The test browser exercises both.

The explicit-mode cases simulate the root theme attribute on the real hosted page; they are not captures of a logged-in account appearance-settings flow. Generic Markdown viewers that lack GitHub's native theme selectors may display both banners. GitHub is the intended viewing environment.

## Visual inspection

Reviewed the concept comparison, actual desktop dark/light output, and actual mobile output. The final design uses one banner, consistent native project hierarchy, restrained accents and no decorative screenshots. Screenshot crops come from full-page captures made at scroll position zero, preserving the banner top without GitHub's sticky toolbar obscuring it. Context captures retain the surrounding GitHub UI for provenance. Cropping is the only image processing applied to final screenshots.

## Reproduction

```powershell
npm ci
npm run assets
npm run validate
npm run screenshots
git diff --check
```

Authoring dependencies: Node.js 24.19.0, Playwright 1.62.1, Sharp 0.35.5, installed Google Chrome. The execution environment used the supplied dependency bundle through `NODE_PATH`; the lockfile supports a normal local `npm ci`. Capture source: `https://github.com/AbdallahSay/AbdallahSay/blob/feat/masar-digital-craft/README.md`. SVG/Markdown checks and capture scripts exited 0. The profile itself has no dependency installation or runtime service.

## Review boundaries

- Actual GitHub branch rendering is verified. The final profile overview container can only be checked after an approved merge enables the root README.
- No merge, deployment, repository visibility change, portfolio edit, account-field change or pin change was performed.
- The public repository was created with an empty initialization commit on `main`; the redesign remains exclusively on the feature branch.
- Product backend functionality and security were not audited. HTTP reachability is not proof of production readiness.
- Recheck live URLs when publishing; externally hosted pages can change.
