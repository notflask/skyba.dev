---
name: skyba.dev
description: A quiet, typographic, strictly black-and-white one-page CV site.
colors:
  paper: "#f5f6f7"
  surface: "#ffffff"
  ink: "#0f1115"
  ink-2: "#4a4f58"
  ink-3: "#666c76"
  night: "#0c0d10"
  night-surface: "#14161a"
  night-ink: "#ecedef"
  night-ink-2: "#a3a8b1"
  night-ink-3: "#8a909a"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.5rem + 6.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.6vw, 3.5rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1vw, 2rem)"
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.9rem, 1.3rem + 2.2vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "1rem"
  lg: "1.25rem"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(5rem, 10vw, 9rem)"
  row: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.5rem 0.5rem 1.5rem"
  button-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "2.5rem"
  button-copy:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1rem"
  nav-island:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.5rem 0.5rem 0.9rem"
  project-row-hover:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "2.5rem 0.75rem"
  portrait:
    rounded: "{rounded.lg}"
---

# Design System: skyba.dev

## Overview

**Creative North Star: "The Typeset Page"**

A one-page CV set like a printed page: off-white paper, off-black ink, hairline rules, and type doing the work that cards and colour do elsewhere. There is no accent colour anywhere; hierarchy comes from size, weight, and three greys. Dark mode inverts the same family and is not a second palette.

Density is calm and generous (large section rhythm, 62 to 68ch measures). Motion is small and single-purpose: hero rise, one hand-drawn stroke, scroll reveal, underline-on-hover, the 3D project card. All of it collapses under prefers-reduced-motion.

**Key Characteristics:**
- Strictly monochrome; light default, dark by system setting or toggle.
- Hairlines instead of cards; the only "surface" is the hovered project row.
- Pill geometry for interactive controls, generous radius on the portrait and rows.
- Visible film grain in both themes.
- Monochrome brand marks and glyph icons inherit `currentColor`.

## Colors

One neutral family, tinted very slightly cool; never pure black or white as page colour.

### Primary
- **Ink** (#0f1115 light / #ecedef dark): text, primary button fill, focus ring, selection fill, active-nav underline, signature stroke.

### Neutral
- **Paper** (#f5f6f7 light / #0c0d10 dark): page background, inverse text on ink.
- **Surface** (#ffffff light / #14161a dark): only the hovered or focused project row.
- **Ink 2** (#4a4f58 / #a3a8b1): running prose, nav links, project descriptions.
- **Ink 3** (#666c76 / #8a909a): mono labels, meta text, footer links.
- **Hairline** (ink at 12% alpha) and **Hairline Strong** (28% light, 30% dark): dividers, outlines, scrollbar.
- **Hover Wash** (ink at 3.5 to 4.5% alpha): hover fill on nav and icon buttons.

### Named Rules
**The No Accent Rule.** No hue exists in the system. Emphasis is inversion (ink on paper), weight, or underline. The favicon's emerald dot is the owner's own mark and does not extend into the UI.
**The Never Pure Rule.** Page and text colours are the tinted off-values above, never #000 or #fff as page or text.

## Typography

**Display Font:** Bricolage Grotesque Variable (Geist, system-ui fallback), width axis narrowed (wdth 88 to 92)
**Body Font:** Geist (400/500/600)
**Label/Mono Font:** Geist Mono, for data and labels only
**Statement Font:** Newsreader italic, one line per page

**Character:** A tight, slightly condensed grotesque for names and headings against a neutral text face; the serif italic appears once as a human voice.

### Hierarchy
- **Display** (700, clamp 3rem to 6rem, 1.05, -0.04em): hero name, kept on one line.
- **Headline** (650, clamp 2.25rem to 3.5rem, 1.02, -0.03em): section headings, legal page h1.
- **Title** (650, clamp 1.5rem to 2rem, 1.05): project names; the mobile menu links and mail link reuse the same face and tracking at larger sizes.
- **Lead** (400, clamp 1.25rem to 1.7rem, 1.38, max 34ch): hero sentence.
- **Statement** (Newsreader italic 400, clamp 1.9rem to 3rem, 1.14): the about pull line.
- **Body** (400, 1.0625rem, 1.65, max 62 to 68ch): prose, in Ink 2.
- **Label** (Geist Mono 0.78 to 0.82rem, 0.02em): fact keys, stack column heads, project stacks.

### Named Rules
**The Mono Is Data Rule.** Geist Mono carries facts and tech names only, never decorative captions.
**The One Serif Rule.** Newsreader italic is the single statement line; it is not a second heading face.

## Layout

Single column page inside a 73.75rem wrapper with a fluid gutter (clamp 1.25rem to 2.5rem). Sections separated by a fluid block padding (clamp 5rem to 9rem). Hero is two-part: name, lead and actions left, a hairline-ruled facts list (7.5rem key column) right. Project rows are a three-column grid (5fr / 5fr / 3fr) from 900px, stacking below; stack lists right-align on desktop. Technique is a set of icon lists under mono column heads. Scroll padding is 6rem to clear the fixed island.

## Elevation & Depth

Flat by default, tonal and hairline separated. Depth appears only as a response: the project card lifts in 3D (translate -6px, tilt up to 4 degrees toward the cursor over a 1600px perspective, inner layers at 10 to 24px depth, cursor spotlight, deeper layered shadow) while the other cards blur (3px) and dim (40%), on fine pointers only; other pointers get the Surface tone with a hairline ring; the primary button gains the shadow on hover; the nav island floats with the same shadow over a blurred, 93% paper backing (opaque under reduced-transparency). Grain sits fixed over everything at 7.5% (light) and 4.5% (dark).

### Shadow Vocabulary
- **Soft Lift** (`0 1px 0 rgba(15,17,21,0.04), 0 12px 32px -14px rgba(15,17,21,0.18)`; dark uses a deeper 0.75 black variant): island, hovered row, hovered primary button.

### Named Rules
**The Response Only Rule.** Rest state is flat; shadow marks hover or floating chrome, never static content.

## Shapes

Pills (999px) for every control: buttons, nav links, island, icon buttons, copy button. Project rows 1rem, portrait 1.25rem, inline code and focus ring 4px. Structure is drawn with 1px hairlines, not boxes. The one hand-drawn round-capped stroke under the surname is the signature.

## Components

### Buttons
- **Shape:** full pill.
- **Primary:** ink fill, paper text, 0.95rem/500, padding 0.5rem 0.5rem 0.5rem 1.5rem, ending in a 2.5rem inverted paper circle holding an arrow glyph; the chip scales to 1.1 on hover, the button gains Soft Lift, presses to 0.98.
- **Quiet:** ink text with a glyph that nudges 2px up-right on hover.
- **Copy:** 1px strong-hairline pill, hover wash, border goes to ink once done.
- **Icon button:** 2.5rem hairline circle, hover wash, press 0.94.

### Navigation
Fixed pill island, logo only at left (no wordmark), links in Ink 2 with a 2px ink underline scaling in for the current section, theme toggle icon button. Mobile opens a full-screen paper sheet with large display links separated by hairlines, staggered in.

### Project Row (signature)
Whole row is one link, top hairline draws in on reveal. On hover it becomes a Surface-toned card: on a fine pointer with motion allowed it lifts and tilts toward the cursor with layered depth, a soft cursor spotlight, and its siblings blur and dim; the arrow slides in. Under reduced motion or on touch there is no tilt or blur. Focus-within shows a 2px ink ring.

### Links
Animated underline: strong hairline at rest, 2px ink stroke draws left to right on hover/focus over 0.5s.

### Contact
The email address is set as display type with a thin underline that floods to full ink on hover (text flips to paper).

## Do's and Don'ts

### Do:
- **Do** use only the ink/paper family and its three greys; express emphasis by inversion, weight, or underline.
- **Do** separate content with 1px hairlines, not boxes.
- **Do** ease with `cubic-bezier(0.16, 1, 0.3, 1)` (fluid variant `0.32, 0.72, 0, 1` for surfaces and sheets) and provide a reduced-motion fallback for every animation.
- **Do** inherit `currentColor` for icons and use 2px ink focus rings with 3px offset.

### Don't:
- **Don't** introduce any hue or gradient colour.
- **Don't** add nested cards, pills used as labels, or numbered sections.
- **Don't** put a wordmark in the navbar or footer; logo only.
- **Don't** use hard offset shadows; shadow is the soft lift only.
