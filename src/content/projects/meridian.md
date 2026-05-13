---
title: Meridian
description: A real-time transit visualization tool that helps urban planners identify gaps in coverage, model service changes, and communicate proposals to non-technical stakeholders.
type: Web Application
tech: [TypeScript, React, D3.js, Mapbox GL, PostGIS]
year: 2024
featured: true
url: https://meridian-transit.app
color: "#1E3A5F"
colorText: light
---

## Overview

Urban transit data is notoriously hard to reason about. Most planning tools are either
decades-old desktop software or sprawling GIS environments that require specialist
training. Meridian is an attempt to make a specific slice of that problem — service
coverage visualization — accessible to planners without requiring GIS expertise.

The core question the tool answers: given a transit network, which neighborhoods fall
outside a 10-minute walk of any stop? How does that change if you add a route, or
remove one?

## The problem

I started this project while doing UX research with a regional transit authority.
Their planners were exporting shapefiles, running analyses in ArcGIS, and then
screenshotting the results to paste into PowerPoint decks for board presentations.
Each iteration of a route proposal took two to three days of back-and-forth.

The technical analysis wasn't the bottleneck. The communication and iteration cycle was.

## What I built

Meridian has three main views:

**Coverage map** — A live isochrone visualization showing walkable area from each stop,
with gap highlighting. Planners can adjust the walk-time threshold and see the coverage
update in real time.

**Proposal builder** — A drag-and-drop interface for sketching route modifications.
Add a stop, move a terminus, change frequency. The coverage map updates as you sketch.

**Presentation export** — One-click export to a structured slide deck with before/after
comparisons and key metrics (population served, coverage delta, estimated ridership
impact based on census data).

## Technical notes

The isochrone calculation runs on the client using a simplified street network graph —
fast enough for interactive use on modern hardware, accurate enough for planning
purposes. For production-quality analysis, the tool also supports offloading to a
PostGIS backend via a configurable API endpoint.

The map rendering uses Mapbox GL with a custom style designed to recede behind the
data — low contrast basemap, with coverage and gaps rendered as high-contrast overlays.

## What I learned

Transit data is messier than I expected. Stop coordinates in GTFS feeds are often
slightly off. Route geometries don't always follow streets. The gap between "this is
technically correct" and "this looks right to a planner" is substantial, and bridging
it required a lot of manual tuning of the rendering pipeline.

The presentation export feature ended up being the most used feature in user testing —
more than the proposal builder. Planners cared more about having something they could
show to their board than having a sophisticated editing tool.
