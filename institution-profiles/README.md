# Sanborn StoryMap Institution Profiles

Generated: 2026-05-06T20:55:19Z

## What this contains

- `index.html` — Rock Hall-inspired institution profile story map page.
- `assets/images/` — copied institution images from the uploaded photo dump.
- `assets/js/data.js` — institution data used by the page.
- `data/institutions.json` — clean JSON version of the story map data.
- `data/storymap_text_extract.csv` — extracted institution text from the uploaded Numbers spreadsheet.
- `data/storymap_content_report.csv` — QA report showing missing text/images.

## How to use

Open `index.html` locally, or copy this folder into the GitHub Pages repo. If replacing an existing page, keep the `assets/` and `data/` folders together with `index.html` so the image paths do not break.

## Schema used

Each institution profile follows this structure:

1. Hero/media panel
2. Institution name
3. Short excerpt
4. Profile facts: city, institution layer, corridor/network, story map status
5. Profile narrative from the spreadsheet
6. QA/status pills

This mirrors the broad structure of a museum/artist profile page: headline identity, summary, facts, feature media, and interpretive narrative.
