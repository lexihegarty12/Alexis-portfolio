# Alexis Hegarty Portfolio

A static portfolio site: no backend, build tools, or database required.

## Structure

- `theme.css` — shared color variables, base styles, navigation, and footer used by every page.
- `index.html` — homepage (hero, selected work, about, contact).
- `resume.html` — résumé page.
- `frost-research.html`, `datafest.html` — individual project pages (share `project.css` for layout, on top of `theme.css`).
- `style.css`, `script.js` — legacy files kept for reference; not linked from any page in this version of the site.

## Before publishing — replace these placeholder files

A few assets referenced by the site weren't included in the last upload, so placeholders were generated in the same color palette to keep the site working. Swap in the real files using these exact filenames:

- `frost-preview.png` — Frost research project thumbnail
- `datafest-preview.png` — Cancer Care Journeys project thumbnail
- `Frost2025.pdf` — Frost research presentation slides
- `team35_TheLateVariables.pdf` — DataFest presentation

Everything else (headshot, résumé PDF, Frost SURP poster PDF) is your real file, already in place.

## Publish with GitHub Pages

1. Create a new GitHub repository, e.g. `alexis-portfolio`.
2. Upload this project's contents to the repository's `main` branch.
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Each push to `main` will publish automatically. The live site URL appears in the workflow's deployment details.

## Edit later

Edit locally (or ask Claude/Codex to edit the project), preview by opening `index.html` in a browser, then run:

```bash
git add .
git commit -m "Update portfolio"
git push
```
