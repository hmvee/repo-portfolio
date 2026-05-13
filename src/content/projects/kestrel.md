---
title: Kestrel
description: A CLI tool for managing local development TLS certificates with zero configuration. One command to trust a wildcard cert for any .local domain.
type: Open Source
tech: [Go, Cobra, mkcert, Homebrew]
year: 2023
url: https://github.com/jordanellis/kestrel
color: "#1A2E3D"
colorText: light
---

## The problem

Every few months I'd start a new local development environment and spend an
afternoon going through the same motions: install mkcert, generate a certificate,
figure out where the project expected it, update the nginx config, repeat for
the staging subdomain.

The steps are documented, they're not complicated, and I've done them enough
times that I should be able to do them quickly. But each time there's a slightly
different configuration, and each time I end up spending time I don't want to
spend reading my own previous notes.

Kestrel is the thing I wanted to exist: run `kestrel init`, get a trusted
wildcard certificate for `*.local.dev`, have it wired into your project's
expected paths, done.

## How it works

Kestrel is a thin wrapper around mkcert that adds:

- **Profile management** — Named certificate profiles so you can have different
  configurations for different project types (Django, Rails, Next.js, etc.)
- **Auto-placement** — Reads a simple config file to know where the project
  expects certificates and puts them there
- **Shell hooks** — Optional direnv integration so the cert paths are available
  as environment variables without manual configuration
- **Rotation** — `kestrel rotate` regenerates and redistributes certificates
  when they're near expiry or when you've changed your root CA

## Technical notes

Written in Go because I wanted the distribution story to be simple (single
binary, no runtime dependency). Uses Cobra for the CLI scaffolding.

The most interesting part of the implementation is the project-type detection:
Kestrel looks at your project structure and configuration files and infers the
likely expected certificate paths without requiring explicit configuration. It's
right about 85% of the time and falls back to asking when it's uncertain.

## Status

Kestrel is stable and I use it daily. It has around 180 GitHub stars, which
surprised me — I assumed this was a deeply personal problem. The main feature
request I keep getting is Caddy integration, which is on the list.
