# iMoRTaL

Source for my personal cybersecurity site: **https://chris-a-r.github.io/iMoRTaL/**

I'm Chris, a cyber professional with an M.S. in Information Security. This site is where I document what I learn, build, and break: my background, my certifications, and write-ups on each one.

## What's on the site

| Page | What it covers |
|---|---|
| [Home](https://chris-a-r.github.io/iMoRTaL/) | What I'm working on now and my latest write-up |
| [About Me](https://chris-a-r.github.io/iMoRTaL/about-me) | Background, experience, certifications, and socials |
| [Certifications](https://chris-a-r.github.io/iMoRTaL/certs/) | Write-ups on HTB CDSA, CompTIA Security+, and CompTIA Network+ |

## Running it locally

The site is built with [Jekyll](https://jekyllrb.com/) 4. With Ruby and Bundler installed:

```sh
BUNDLE_GEMFILE=Gemfile.local bundle install
BUNDLE_GEMFILE=Gemfile.local bundle exec jekyll serve --livereload
```

Then open http://127.0.0.1:4000/iMoRTaL/.

## Adding a certification write-up

Each certification is one Markdown file in [`_certs/`](_certs/). Copy an existing one and update its front matter:

```yaml
title: "Full certification name"
issuer: "Who issues it"
order: 1                 # position in the cert lists
earned: "2026-09"        # newest one is featured on the home page
summary: "One or two sentences shown in the home page preview."
permalink: /certs/Short-Name
permalink_name: certs/Short-Name
```

It shows up automatically on the certifications page, the About Me page, and (if it's the newest) the home page.

## Deployment

Every push to `master` builds the site with GitHub Actions ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)) and publishes it to GitHub Pages.

## Credits

Built on [jekyll-shell-theme](https://github.com/itstorque/jekyll-shell-theme) by [Tareq El Dandachi](https://github.com/itstorque), used under the MIT License (see [`LICENSE`](LICENSE)). I've customized the layouts and styles and added the matrix background, boot sequence, and certification write-ups.

The site's written content and photos are my own.
