---
title: Tuned
description: A minimal practice log for musicians who want to track their progress without the anxiety that comes with most habit-tracking apps. Built for one user — me — and released when it seemed useful to others too.
type: Side Project
tech: [SvelteKit, SQLite, Fly.io, TypeScript]
year: 2024
url: https://tuned.app
color: "#3D1F3D"
colorText: light
---

## Background

I've been learning guitar slowly for a few years. I tried every practice tracking
app I could find, and they all did the same thing: they made me feel behind.
Streaks, goals, reminders, "you haven't practiced in 3 days!" notifications.

The apps were designed around the idea that the problem is motivation. For me,
the problem was different: I'd practice for 20 minutes, feel good about it, and
then have no idea whether that 20 minutes was actually different from the 20
minutes three weeks ago. Was I improving? In what specific way?

Tuned is designed around logging and reflection, not goals and streaks.

## What it does

Each practice session, you log:
- What you worked on (freeform text)
- How long you practiced
- A 1-5 rating of how the session felt (different from how long it was)
- An optional voice note (transcribed automatically)

The reports view shows you patterns across sessions: what you tend to focus
on, which skills you're avoiding, whether your "felt good" sessions correlate
with particular types of practice.

There are no streaks. There are no goals. There are no notifications unless
you explicitly ask for them.

## Technical decisions

SvelteKit because I wanted a fast, server-rendered app without the React
overhead. SQLite with better-sqlite3 because the data model is simple and
I wanted zero-configuration persistence. Fly.io for deployment because they
handle SQLite persistence well with their volume mounts.

The voice note transcription uses the browser's native Web Speech API — no
external API calls, no data leaving the device.

## Reception

I posted Tuned on a small music and tech forum expecting maybe twenty signups.
It currently has about 340 registered users, mostly from a Hacker News thread
where someone linked it from a comment about journaling apps.

The most common feedback is that people want it on mobile. I'm considering this.
