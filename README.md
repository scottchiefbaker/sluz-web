# sluz-web

Website for [Sluz](https://sluz.org) — a lite, Smarty-like PHP templating engine.

Live site: **https://www.sluz.org** · Engine repo: **https://github.com/scottchiefbaker/sluz** · Packagist: **https://packagist.org/packages/sluz/sluz**

Sluz itself is a single-file (`sluz.class.php`), zero-dependency PHP 8.x+ engine that separates logic (`.php`) from presentation (`.stpl`) with familiar Smarty syntax. This repository contains only the marketing/docs site — not the engine source.

## Stack

Static site — no build step, no bundler, no CDN.

- `index.html` — single-page site (hero, features, syntax cheat sheet, quick start, security, ecosystem)
- `css/style.css` — custom styles
- `js/site.js` — copy buttons, scroll reveal, navbar
- `vendor/` — local Bootstrap + Bootstrap Icons + fonts (Inter, JetBrains Mono)
- `img/favicon.svg` — site icon
- `latest/sluz.class.php` — copy of the current engine for direct download (`/latest/sluz.class.php`)
- `.htaccess` — serves `sluz.class.php` as `text/plain` so it can be `wget`/`curl`'d

## Local preview

Just serve the directory — any static server works:

## Updating the engine file

```bash
curl -o latest/sluz.class.php https://raw.githubusercontent.com/scottchiefbaker/sluz/master/sluz.class.php
```

## Deployment

Push to `main` — hosted as a static site. No CI/build needed.

## License

Site content: same as Sluz — [GPL-3.0-or-later](https://www.gnu.org/licenses/gpl-3.0.html).
