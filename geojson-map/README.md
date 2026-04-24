# Black Cultural Institutions Leaflet Map — Fixed Version

This folder contains a GitHub Pages-ready Leaflet map for Umar's review.

## Files

- `index.html` — interactive map page with embedded GeoJSON for reliable loading
- `data/black_cultural_institutions_geocoded.geojson` — source GeoJSON download copy
- `spatial_data_metadata.txt` — data dictionary and CRS notes

## Why this version fixes the display issue

The first pass could look “wonky” if Leaflet's CSS did not load or if the map container initialized before the browser finished sizing the page. This version adds:

- safer CDN links
- inline fallback Leaflet layout CSS
- fixed map/container heights
- `map.invalidateSize()` after page load
- embedded GeoJSON, so the page does not depend on local `fetch()` during preview

## GitHub Pages path

If uploaded to the existing `sanborn_story_sample` repo inside a folder named `geojson-map`, the public URL should be:

`https://ronaldsheaks.github.io/sanborn_story_sample/geojson-map/`

Prepared: 2026-04-24
