# Alexis Hegarty Portfolio

A static portfolio site: no backend, build tools, or database required. Edit the words and project links directly in `index.html`, then push to GitHub. The included workflow publishes changes automatically to GitHub Pages.

## Personalize before publishing

1. In `index.html`, replace the three project placeholders with your actual title, client/context, category, description, and destination link.
2. Replace `hello@example.com` plus the LinkedIn and GitHub URLs.
3. Update the About copy and skills as needed.
4. Keep the portrait at `assets/alexis-hegarty-headshot.png`, or replace it with another image using that same filename.

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

The GitHub Pages workflow deploys the new version automatically.
