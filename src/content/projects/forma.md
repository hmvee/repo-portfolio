---
title: Forma Design System
description: A comprehensive design system built for a Series B fintech startup's product suite — covering token architecture, component library, documentation, and team adoption process.
type: Design
tech: [Figma, Storybook, CSS Custom Properties, React]
year: 2023
featured: true
color: "#3D2B1F"
colorText: light
---

## Overview

Forma is the design system I built during my time at Northgate Digital for a fintech
client whose product had grown from one app to four in eighteen months. They had a
design debt problem: four products, three designers, no shared language.

The brief was to create something that would reduce the cost of shipping consistent
UI across an expanding product surface — without requiring every team to rebuild from
scratch.

## What the system covers

**Tokens** — A three-tier token architecture: primitive values (raw colors, spacing
units), semantic tokens (surface/text/border/action), and component-level tokens.
The semantic layer means that changing a brand color propagates correctly across the
entire system.

**Component library** — 47 components covering the full range of fintech UI: data
tables, form controls, status indicators, empty states, confirmation flows. Each
component has documented variants, states, accessibility notes, and copy guidelines.

**Documentation** — A Storybook site with live examples, prop tables, and a usage
section that explains when to use each component and when not to. The "when not to"
section was novel for this team and reduced misuse significantly.

**Motion guidelines** — A small but deliberate motion language: entrance timings,
exit timings, which transitions to use for what semantic purpose. Written against the
principle that motion should communicate, not decorate.

## Process

The first month was documentation: I audited every screen in production, catalogued
every unique visual element, and grouped them into natural clusters. That audit
surfaced 23 distinct button styles, 14 different input variants, and 7 completely
different empty state patterns. All of them doing essentially the same jobs.

I ran weekly working sessions with the engineering leads throughout the build. The
goal wasn't to hand off a spec — it was to get the component library merged into
their actual codebase before I left. We got to 78% coverage before project end,
with a clear roadmap for the remainder.

## Outcomes

Six months after delivery, the client reported that new feature UI was shipping
in roughly half the time it had taken before. A designer who joined the team after
my engagement told me Forma was the first thing they checked when starting any
new screen.

That's the outcome I was hoping for: something that gets used because it's useful,
not because it's mandated.
