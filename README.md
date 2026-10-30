# Dr. Akif Ahamad Baig — Portfolio Website

Plain HTML + Tailwind (CDN) + vanilla JS. No build step.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page (layout, sections, styles) |
| `assets/js/main.js` | All content data + interactions (ECG strip, ventures, team, gallery, booking) |
| `assets/img/` | Optimised photos (WebP) and logo |

## Change content

Open `assets/js/main.js`. The top section `DATA` has:

| Block | Change |
|---|---|
| `CONFIG` | Clinic phone, WhatsApp number, hours, map link |
| `SOCIAL` | YouTube, Instagram, LinkedIn, SlideShare links. Empty `url` = hidden |
| `VIDEOS` | YouTube videos and Instagram reels in the Media section |
| `EXPERTISE` | Procedures list |
| `VENTURES` | 7 venture cards (text, links, status, pricing, contact) |
| `TALKS` | SlideShare views chart |
| `TEAM` | Team members — add `photo: 'assets/img/name.webp'` for a real photo |
| `GALLERY` | Gallery photos and captions (clinic photos go here too) |

## Run locally

```
cd akif-site
python3 -m http.server 8000
```
Open http://localhost:8000

## Add a new photo

```
pip install pillow
python3 -c "from PIL import Image; im=Image.open('photo.jpg'); im.thumbnail((900,1600)); im.save('assets/img/photo.webp', quality=82)"
```

## Venture pages

Each venture card opens a full page at `#venture-<id>` (for example `index.html#venture-infumedz`).
You can share that link directly. Edit store links in `VENTURES[].platforms`:
`{ href: '...' }` = live button, `{ soon: true }` = "Coming soon", `null` = hidden.

## Add a video

1. Copy the ID from the link: `youtu.be/dc8HThZNOso` -> `dc8HThZNOso`; `instagram.com/reel/Dcox-2dz1TA` -> `Dcox-2dz1TA`
2. Save a cover image to `assets/img/` (YouTube cover: `https://i.ytimg.com/vi/<ID>/maxresdefault.jpg`)
3. Add a line to `VIDEOS`:
   `{ kind: 'youtube', id: 'ID', title: 'Title', meta: 'ECG lecture on YouTube', thumb: 'assets/img/file.webp' },`

## Add Aaira clinic photos

1. Convert each photo (command above) into `assets/img/`, e.g. `aaira-reception.webp`
2. Add a line to `GALLERY`:
   `{ src: 'assets/img/aaira-reception.webp', w: 1200, h: 900, cap: 'Reception, Aaira Heart & Polyclinic' },`

## Booking form -> Django

The form POSTs JSON to `CONFIG.bookingApi` in `main.js`. Django code is in `backend/`
(models, serializers, views, urls, admin, settings_additions). If the API is down,
the form offers WhatsApp instead. Open the site over http (localhost or hosting),
not by double-clicking index.html: YouTube blocks embeds on file:// (Error 153).

## Deploy (GitHub Pages)

```
git init && git add . && git commit -m "Akif portfolio"
git branch -M main
git remote add origin https://github.com/<you>/akif-portfolio.git
git push -u origin main
```
Then: Repo → Settings → Pages → Branch `main` / root. Point the domain with a CNAME in GoDaddy.

## Before going live

- Replace phone / WhatsApp / hours in `CONFIG` (currently placeholders)
- Replace placeholder team members in `TEAM` (all except the two doctors)
- For production, swap the Tailwind CDN for a compiled CSS file (Tailwind CLI) for faster loading
