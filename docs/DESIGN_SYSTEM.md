# MASAR / DIGITAL CRAFT

## Identity and composition

Abdallah Sayed / Masar Tech. Full-stack software developer, SaaS builder, automation and digital products. The visual signature is an original continuous M-shaped route with an outlined start and violet endpoint, contained by a calibrated circle. It suggests a deliberate path through a system. It is decorative and has no statistical meaning.

One hero anchors an otherwise native GitHub document. No decorative project thumbnails: the work is best explained through concise, selectable text. The banner uses a left text column and a right geometric counterweight. A narrow viewport uses a separate composition with a two-line name and smaller motif.

## Tokens

| Role | Dark | Light |
| --- | --- | --- |
| Background | `#0B1120` | `#F8FAFC` |
| Surface | `#151D30` | `#EEF2F7` |
| Primary text | `#F1F5F9` | `#0F172A` |
| Secondary text | `#94A3B8` | `#475569` |
| Primary accent | `#67E8F9` | `#087E91` |
| Secondary accent | `#A78BFA` | `#7051B8` |
| Decorative rule | `#344155` | `#CBD5E1` |

The secondary accent is limited to one endpoint. Surface is reserved for future assets; the final hero uses the background. Decorative rules need not meet text contrast; all foreground text colors do. Contrast ratios are generated in `previews/validation.json`.

## Type and spacing

- SVG: Arial, Helvetica, sans-serif. No font downloads. Font substitution is expected across platforms.
- Desktop: 1000 × 370 viewBox; 48-unit horizontal inset; name 66, role 27, product areas 22, minor labels 14–16.
- Mobile: 420 × 390 viewBox; 28-unit inset; name 56, role 24, product areas 19, brand 16. Used at viewport widths up to 600px.
- Small labels are supporting decoration; role and product areas have larger text and are repeated in the document.
- Body: GitHub's native font sizes, spacing, link states and heading anchors. No stylesheet is shipped for the README.
- Five projects follow one sequence: title, one description, technologies, source and optional live link. No multi-column tables in the public README.

## Asset behavior

`picture` sources are ordered: mobile dark, mobile light, desktop dark, light fallback. Assets use SVG primitives and text only. No scripts, foreignObject, external references, CSS, fonts, filters or animation. The fallback `img` supplies meaningful alt text and intrinsic width; GitHub constrains it to the content column.

GitHub's `themed-picture` wrapper may rewrite color-scheme media conditions to match explicit site themes. Actual site light/dark settings are tested separately from operating-system color scheme. If a downstream Markdown viewer ignores `picture`, the light fallback stays readable.

## Copy rules

Use clear product purposes. Avoid claims about customer counts, revenue, employment, years of experience or production readiness. Label work in development. Public source inspection verifies technology presence, not production service health. Keep link labels explicit and never add credentials, private endpoints or client records.

## Maintenance

Run `npm ci`, then `npm run assets` to regenerate all four heroes from one palette and geometry definition. `npm run concepts` recreates the initial SVG studies. `npm run validate` checks the document and artwork and writes the machine-readable report. `npm run screenshots` captures the actual GitHub feature-branch README using installed Chrome. See the validation report for exact environment commands and limits.
