# SolidCastCo

Epoxy flooring services website built with SvelteKit 5 and Tailwind CSS.

## Setup

```bash
npm install
cp .env.example .env
```

Edit `.env` with your WhatsApp number:
```
PUBLIC_WHATSAPP_NUMBER=27821234567
PUBLIC_PHONE_NUMBER="+27 82 123 4567"
```

## Local Development

```bash
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
   - **Catchall Document:** `404.html`
4. Add environment variables:
   - `PUBLIC_WHATSAPP_NUMBER`
   - `PUBLIC_PHONE_NUMBER`
5. Deploy

Static sites are free on Digital Ocean (3 sites, 1GB bandwidth/month).
