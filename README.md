# SolidCastCo

Epoxy flooring services website built with SvelteKit 5 and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Build & Preview

```bash
npm run build
npm run preview
```

## Deploy to Digital Ocean App Platform

1. Push repo to GitHub
2. Create new app at [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
3. Select **Static Site** and configure:
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Catchall Document:** `index.html`
4. Deploy

Static sites are free on Digital Ocean (3 sites, 1GB bandwidth/month).
