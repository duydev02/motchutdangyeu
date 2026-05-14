# UX Improvements

This document tracks the main usability issue and the direction chosen for the current version.

## Goal

Keep the surprise playful and lightweight, while making the path obvious enough that someone on iPhone does not get stuck.

## Main Issue

The first version used a native `<select>` and hid future `<option>` elements. That was fragile on iOS because iPhone uses a native picker UI for selects. CSS-based option hiding can behave differently there, so the intended step-by-step unlock path may not feel reliable.

The earlier copy was also unclear, and one version had broken Vietnamese encoding. The current app uses short English copy throughout the UI.

## Chosen Direction

Use a single button that advances the quality level:

```text
start at 144p
upgrade to 240p
upgrade to 480p
upgrade to 720p
unlock 1080p
```

Each tap:

- Updates the image.
- Changes the title and hint.
- Updates the button label.
- At `1080p`, hides the button, starts the music, and runs the slideshow.

## Visual Direction

The app should feel like a small surprise, not a boxed dashboard. The image should have room to breathe and should not be forced into a strict square frame. The UI exists only to guide the tiny unlock joke.

Current choices:

- First screen stays dark without a placeholder image.
- Loose image stage instead of a hard card/frame.
- No visible progress bar or step label.
- One clear tap target for iPhone.
- Short, casual English copy.
- Dark background with soft color accents.
- Fixed image-stage height so the rest of the content does not jump between different image sizes.
- Final message moves above the slideshow so the image cannot cover it.

## Alternatives

### Locked Quality Buttons

Show all quality levels as buttons and unlock them one by one.

Pros:

- The full path is visible.
- It can feel game-like.

Cons:

- It reveals too much upfront.
- It needs more careful small-screen layout.

### Keep The Select

Re-render the `<select>` options in JavaScript instead of hiding options with CSS.

Pros:

- Closest to the original implementation.

Cons:

- Still depends on native select behavior.
- Less playful on iPhone than a direct tap target.

## Done

1. Replaced the select with a button-based flow.
2. Fixed the broken/awkward visible copy by moving the UI to English.
3. Kept audio playback behind a user gesture.
4. Preserved the original `144p -> 240p -> 480p -> 720p -> 1080p` idea.
5. Removed the rigid image frame so images feel less constrained.
6. Removed the progress bar and step label.
7. Added stable image-stage height to reduce layout jumps.
8. Removed the default placeholder image from the first screen.
9. Moved the final typed message above the slideshow.

## Still Worth Testing

1. Real iPhone Safari tap behavior.
2. Audio behavior on iPhone after the final tap.
3. Whether the copy feels cute enough for the actual recipient.
