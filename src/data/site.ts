// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — Edit this file to update your personal content.
// Projects live in src/content/projects/ as individual markdown files.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'Jordan Ellis',
  tagline: 'Product designer and occasional builder.',

  // Shown on the home page hero. One paragraph, 2–4 sentences.
  bio: `I work at the intersection of design and engineering — making complex systems
feel simple. Currently focused on developer tools and data products at a
Series B startup. Before that, I spent four years at agencies and one chaotic
year at a fintech, which taught me everything.`,

  // ── About page ────────────────────────────────────────────────────────────
  about: {
    // The main paragraph block on the About page.
    intro: `I grew up drawing on graph paper and eventually taught myself to turn those
sketches into working software. These days I split my time between leading
design on a B2B data platform and building side projects that scratch personal
itches — mostly tools, occasionally essays.`,

    // Second paragraph
    approach: `Good design, to me, isn't about aesthetics first. It's about reducing the
distance between a person and what they're trying to do. I care a lot about
the moment where a user stops reading the UI and starts thinking about their
actual problem. That transition is where interesting work lives.`,

    // Third paragraph
    outside: `Outside of screens: I think about cities a lot (particularly how they fail
people), collect typefaces I'll never have a reason to use, and recently
started woodworking badly in a too-small garage.`,

    // Timeline entries — newest first
    timeline: [
      {
        year: '2022 – Present',
        role: 'Senior Product Designer',
        place: 'Conduit Systems',
        description: 'Leading design for a B2B data pipeline product. Built the design system from scratch, reduced onboarding time by 40% through information architecture work.',
      },
      {
        year: '2020 – 2022',
        role: 'Product Designer',
        place: 'Northgate Digital',
        description: 'Worked across fintech, healthcare, and logistics clients. Designed and shipped a cross-platform mobile app used by 80k+ drivers.',
      },
      {
        year: '2019 – 2020',
        role: 'UX Designer',
        place: 'Lateral Studio',
        description: 'Small agency focused on early-stage startups. Helped eight companies go from napkin sketch to fundable prototype.',
      },
      {
        year: '2015 – 2019',
        role: 'BA Computer Science',
        place: 'University of Edinburgh',
        description: 'Graduated with a focus on human-computer interaction. Spent more time in the design school than the engineering building.',
      },
    ],

    // What you're currently interested in
    interests: [
      'Type design and variable fonts',
      'Urban mobility and 15-minute cities',
      'Independent publishing and small-run print',
      'Functional programming (learning Gleam)',
      'Woodworking (still learning)',
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  email: 'hello@jordanellis.co',

  social: {
    github: 'https://github.com/jordanellis',
    twitter: 'https://twitter.com/jordanellis',
    linkedin: 'https://linkedin.com/in/jordanellis',
    dribbble: 'https://dribbble.com/jordanellis',
  },

  // ── SEO / Meta ────────────────────────────────────────────────────────────
  siteUrl: 'https://yourportfolio.com', // Must match astro.config.mjs site value
  description: 'Jordan Ellis — product designer and builder based in Edinburgh. I make tools and interfaces that get out of the way.',
  ogImage: '/og.png', // Add a 1200×630 image to public/og.png

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
};
