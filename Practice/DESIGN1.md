---
name: Cyber Luminescence
colors:
  surface: '#11131d'
  surface-dim: '#11131d'
  surface-bright: '#373944'
  surface-container-lowest: '#0b0e18'
  surface-container-low: '#191b26'
  surface-container: '#1d1f2a'
  surface-container-high: '#272935'
  surface-container-highest: '#323440'
  on-surface: '#e1e1f1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e1e1f1'
  inverse-on-surface: '#2e303b'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#d1bcff'
  on-secondary: '#3c0090'
  secondary-container: '#7000ff'
  on-secondary-container: '#ddcdff'
  tertiary: '#d8ffe7'
  on-tertiary: '#003824'
  tertiary-container: '#65f2b5'
  on-tertiary-container: '#006d4a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d1bcff'
  on-secondary-fixed: '#23005b'
  on-secondary-fixed-variant: '#5700c9'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#11131d'
  on-background: '#e1e1f1'
  surface-variant: '#323440'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Outfit
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Outfit
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.015em
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an atmospheric, ultra-modern interface engineered for exploration, predictive modeling, and planetary-scale career guidance in 2050. The visual philosophy blends deep-space obsidian void layers with sharp, radiant photonic instrumentation. 

- **Aesthetic Direction:** Cyber-Luminescent Glassmorphism. Dark optical substrates, crystalline structural borders, laser-sharp vector accents, and tactical HUD-grade data density.
- **Tone & Persona:** Visionary, hyper-intelligent, precise, exploratory, and commanding without becoming overwhelming.
- **Audience:** Next-generation learners, spatial computing researchers, synthetic biology apprentices, and autonomous systems engineers navigating future trajectory branches.
- **Emotional Response:** Inspires boundless curiosity and scientific rigor, delivering the sensation of piloting an interstellar command deck dedicated to human potential.

## Colors

The palette operates on high-contrast chromatic emission emerging from an ultra-deep obsidian foundation. 

### Palette Architecture
- **Primary (`#00F0FF` - Quantum Cyan):** The primary focal point and interactive driver. Signifies kinetic pathway energy, focal state selections, real-time links, and primary action affordance.
- **Secondary (`#7000FF` - Hyper-Violet):** Represents cognitive computing depth, synthetic intelligence processing, simulation nodes, and ambient structural glow.
- **Tertiary (`#10B981` - Neon Emerald):** Designates verified proficiencies, validated future trajectories, active telemetry streams, and positive system states.
- **Accent Warning/Catalyst (`#FF6B4A` - Glowing Amber/Coral):** Used for mission critical shifts, high-friction skill milestones, alerts, and high-demand career vectors.
- **Neutral Foundation (`#070913` to `#0B0F19` - Deep Obsidian / Space Navy):** Multi-layered backdrop surfaces engineered to absorb glare and provide maximal optical contrast for photonic glass layers.

### Applied Rules
- Never use pure black (`#000000`) for surface backdrops; always maintain atmospheric tint via `#070913` (canvas) and `#0B0F19` (elevated substrate).
- Surface borders utilize low-opacity tinted emissive strokes (`rgba(0, 240, 255, 0.15)` or `rgba(112, 0, 255, 0.2)`).
- Glowing text must preserve WCAG AAA contrast against deep backgrounds; text shadows must never compromise edge definition.

## Typography

The typographic hierarchy implements three distinct operational disciplines:
1. **Space Grotesk (Display & Headlines):** Imparts geometric, speculative-industrial authority to milestone headings, simulation titles, and primary metrics.
2. **Outfit (Body & Narrative):** Delivers pristine readability, humanistic geometry, and comfortable tracking across dense educational curricula and career pathways.
3. **JetBrains Mono (Telemetry, Metadata & Badges):** Calibrates precision feedback, career match indexes, AI probability vectors, and status telemetry.

### Typographic Directives
- Numeric telemetry and probability readouts must always employ `JetBrains Mono` with tabular lining figures.
- Transform key labels (`label-mono-sm`) to uppercase with generous tracking (`0.06em`) for HUD classification badges.
- Avoid ultra-thin font weights in dark environments to prevent halation and subpixel degradation.

## Layout & Spacing

The structural scaffolding relies on an adaptive 12-column dynamic grid, configured for dense information streams alongside expansive exploratory canvases.

### Grid & Layout Rules
- **Desktop (1440px+):** 12-column layout, `3rem` section margins, `1.5rem` gutters. Maximum content bounding container spans `1400px` to retain optical focus.
- **Tablet (768px - 1439px):** 8-column layout, `2rem` section margins, `1.25rem` gutters.
- **Mobile (< 768px):** 4-column layout, `1rem` edge margins, `0.75rem` gutters. Node graphs and branching visualizers collapse to vertical pathway lists.

### Spatial Rhythm
- Apply strict multiples of `0.25rem` (4px base unit).
- Reserve `space-xl` for sectional breaks and major panel offsets.
- Internal telemetry component spacing adheres to tight, unified clusters using `space-xs` and `space-sm` to maintain instrument-panel coherence.

## Elevation & Depth

Visual hierarchy does not use diffuse paper dropshadows. Elevation is established through multi-tier glass refraction, semi-translucent backdrop filters, and light-emitting peripheral borders.

### Surface Tiers
- **Substrate (Tier 0):** Solid deep canvas (`#070913`) overlaid with an ultra-subtle coordinate grid pattern at 4% opacity.
- **Glass Panel Base (Tier 1):** Background `rgba(11, 15, 25, 0.65)` with `16px` backdrop blur and a fine border of `1px solid rgba(255, 255, 255, 0.08)`.
- **Active Node / Card Surface (Tier 2):** Background `rgba(15, 23, 42, 0.75)` with `24px` backdrop blur, inset specular highlight `inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)`, and peripheral accent border `1px solid rgba(0, 240, 255, 0.25)`.
- **Floating Overlays & Portals (Tier 3):** Background `rgba(11, 15, 25, 0.90)` with `32px` backdrop blur, edge contour `1px solid rgba(112, 0, 255, 0.4)`, and a chromatic outer aura: `0 0 24px -4px rgba(0, 240, 255, 0.2)`.

### Chromatic Glow Conventions
Glowing drop shadows indicate active states, interactive focal states, or AI generation processes. Glows must use tight inner spreads combined with diffused outer halos (e.g., `box-shadow: 0 0 8px rgba(0, 240, 255, 0.4), 0 0 24px rgba(0, 240, 255, 0.15)`).

## Shapes

The geometry balances tactical precision with ergonomic polish. Form factors reject extreme roundness in structural containers while embracing pill shapes for compact telemetry tokens.

### Corner Radii Guidelines
- **Telemetry Chips, Status Pills, and Quick Filters:** Full pill caps (`9999px`) to visually isolate status signals.
- **Interactive Control Buttons & Input Fields:** Standardized at `0.5rem` (`roundedness: 2`) for structured, tactical affordance.
- **Telemetry Panels, Laboratory Cards, and Dynamic Modals:** Scale from `1rem` (`rounded-lg`) to `1.5rem` (`rounded-xl`) to soften large high-tech planes while preserving precision edges.
- **Node Connectors & Data Chips:** Angled accents and micro 45-degree chamfers are permitted for tactical accents along corner frames.

## Components

### Buttons
- **Primary Photonic:** Filled with Quantum Cyan (`#00F0FF`), text in deep obsidian (`#070913`, font weight 600). Hover triggers an outer cyan aura (`box-shadow: 0 0 20px rgba(0, 240, 255, 0.6)`) and subtle brightness amplification.
- **Secondary Cyber Glass:** Surface of `rgba(112, 0, 255, 0.15)` enclosed within a `1px` border of `rgba(112, 0, 255, 0.5)`. Text in `#FFFFFF`. Hover elevates border to `#00F0FF` with a reactive ambient glow.
- **Ghost HUD:** Borderless transparent surface with `JetBrains Mono` label in Quantum Cyan. Subtle underline sweep animation on hover.

### Badges & Neon Chips
- Micro pill structures containing a leading pulse dot (4px circle).
- Background: `rgba([Color], 0.12)`, Border: `1px solid rgba([Color], 0.35)`, Text: `[Color]`.
- Specific token variations: Cyan (Real-Time Pathways), Violet (AI Predicted), Emerald (Mastered Skill), Coral (High Velocity Milestone).

### Input Fields
- Dark crystalline input trough (`rgba(7, 9, 19, 0.8)`) with `1px solid rgba(255, 255, 255, 0.12)`.
- Placeholder text in muted cyan-slate (`rgba(148, 163, 184, 0.5)`).
- Active Focus State: Instantly activates border to `1px solid #00F0FF` complemented by an interior and exterior glow (`box-shadow: 0 0 12px rgba(0, 240, 255, 0.25)`). Font switched to `Outfit` for user entry with `JetBrains Mono` helper labels.

### Checkboxes & Radio Controls
- Geometric square (checkbox) and faceted hexagon (radio) casings.
- Unchecked: Inset dark surface with muted cyber-border `rgba(255, 255, 255, 0.2)`.
- Checked: Core illuminated with Quantum Cyan or Hyper-Violet, casting an internal emissive core indicator.

### Telemetry Cards & Glass Panels
- Glassmorphic panels featuring layered gradient backgrounds blending obsidian with low-opacity navy.
- Top-right corner anchors an integrated telemetry tag (`JetBrains Mono`, small uppercase).
- Borders feature directional linear gradient strokes (from high-opacity cyan at top-left fading to low-opacity slate at bottom-right).

### Pathway Node Graph Connectors
- Dedicated visualization nodes representing educational waypoints.
- Circular or hexagonal anchor points wrapped in concentric pulse rings.
- Connective vector lines utilize animated dashed SVG strokes with kinetic gradient sweeps from `#7000FF` to `#00F0FF` indicating progression vectors.