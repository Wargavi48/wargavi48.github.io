# Wargavi48 Homepage Redesign Design

Date: 2026-05-10
Project: `wargavi48.github.io`
Design Direction: `Modern community` + `Community identity first` + `Youthful and energetic`

## Goals

1. Rebuild the main page styling to feel more professional, modern, and creative.
2. Keep Wargavi48 identity as the first-viewport signal.
3. Improve readability, hierarchy, and interaction polish on both desktop and mobile.
4. Preserve current content domains (about, projects, comics, social channels) while upgrading visual execution.

## Constraints

1. Static hosting on GitHub Pages.
2. Existing React + Vite + Tailwind architecture should be preserved.
3. Existing section model and sliders can be retained, but with improved design and UX behavior.
4. Dark mode must align with light palette using darker related shades and stay eye-catching.

## Approved Brand Palette

Light mode source palette:

1. `#fee9d2` (warm base)
2. `#ab0d00` (brand red)
3. `#443943` (deep neutral)
4. `#f1e0e1` (soft surface tint)
5. `#ff0101` (high-energy accent)

Dark mode approach:

1. Derive darker siblings from the same hue family for visual continuity.
2. Preserve red accents for key actions and interactive states.
3. Use high-contrast text and restrained glow/contrast effects for clarity and energy.
4. Avoid oversaturated full-surface red backgrounds.

## Information Architecture

1. Hero (identity-first)
2. About strip
3. Community highlights row (new)
4. Projects showcase
5. Comics showcase
6. Footer

## Component-Level Design

### Header

1. Keep fixed/sticky behavior.
2. Upgrade to a clearer brand/navigation bar with subtle backdrop and separation from content.
3. Preserve section navigation and theme toggle.
4. Ensure mobile touch targets remain comfortable and uncluttered.

### Hero

1. Make `Wargavi48` the strongest visual cue in first viewport.
2. Use real community imagery as core visual surface.
3. Keep concise supporting copy with stronger hierarchy.
4. Present social/CTA cluster (Discord, X, TikTok, others) as a polished action area.
5. Add subtle energetic accents (labels, chips, micro-highlight treatment) without visual noise.

### About Strip

1. Keep original message and community meaning.
2. Restructure long paragraph into scan-friendly layout.
3. Highlight important terms with semantic emphasis and palette accents.
4. Improve line length and spacing for mobile readability.

### Community Highlights Row (new)

1. Add 3-4 compact metric cards (projects/comics/milestones/channels).
2. Use icon + number + short label pattern.
3. Apply modest hover and interaction feedback.
4. Keep cards as individual repeated units, not section wrappers.

### Projects Showcase

1. Keep slider interaction model.
2. Improve card hierarchy: image framing, title weight, description clamp, CTA clarity.
3. Preserve responsive breakpoints and prevent broken slide layouts for smaller data counts.
4. Align visual language with overall palette and spacing rhythm.

### Comics Showcase

1. Keep slider + modal reading flow.
2. Improve card affordance to make clickability obvious.
3. Enhance modal visual hierarchy and close control visibility.
4. Ensure reading comfort across mobile and desktop.

### Footer

1. Keep simple legal/identity content.
2. Improve spacing and separation from preceding sections.
3. Keep visual consistency with upgraded theme tokens.

## Visual System

1. Full-width section bands with constrained content containers.
2. Use cards only for repeated items and modal surfaces.
3. Strong typographic hierarchy:
   - Hero display
   - Section heading
   - Card heading
   - Body copy
4. Consistent spacing scale with predictable vertical rhythm.
5. Intentional motion only:
   - Hero entrance
   - Subtle card hover
   - Smooth section scrolling/transition feel

## Responsive Behavior

1. Mobile-first composition:
   - Hero stack remains readable without crowding
   - Action buttons remain tappable
   - Slider cards preserve readability
2. Desktop composition:
   - Balanced density with no large dead zones
   - Enhanced visual rhythm via spacing and alignment
3. Text fit must be preserved across breakpoints with no overlap.

## Accessibility and UX Baselines

1. Maintain sufficient contrast for text and action states in both themes.
2. Preserve keyboard-focus visibility on interactive elements.
3. Keep semantic structure and alt text where relevant.
4. Avoid animation overload or distracting continuous motion.

## Out of Scope

1. Backend/database integration.
2. CMS/admin implementation in this redesign step.
3. Replacing current data source architecture in this same pass.

## Success Criteria

1. Homepage immediately communicates Wargavi48 identity in first viewport.
2. Visual style clearly feels more modern and professional while remaining energetic.
3. Projects and comics sections feel cohesive and premium, not template-like.
4. Theme consistency across light/dark with approved palette logic.
5. Clean behavior and readability on mobile and desktop.

## Implementation Notes

1. Preserve existing React component structure where reasonable.
2. Refactor styling tokens centrally to avoid one-off color usage.
3. Keep changes scoped to homepage-facing components and shared style layers used by them.
