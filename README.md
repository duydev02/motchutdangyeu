# A Little Something Cute

This is a tiny static web app made as a playful surprise for someone you care about. It pretends to be a video quality picker. Each step makes the image a little clearer, and the final step unlocks cute images plus music.

## What It Does

The app has a short unlock flow:

1. The first screen asks the visitor to choose a quality level.
2. The journey starts at `144p`.
3. Each tap updates the image and moves the button to the next quality level.
4. The full path is `144p -> 240p -> 480p -> 720p -> 1080p`.
5. At `1080p`, the button disappears, `cute.mp3` starts looping, the `1080p*.png` slideshow begins, and the final message is typed on screen.

More detail lives in [docs/USER_FLOW.md](docs/USER_FLOW.md).

## Why The UI Changed

The original version used a native `<select>` and hid future `<option>` items. That works inconsistently on iOS because iPhone renders selects with its own native picker. Hidden options can behave differently than expected, which makes the little unlock path harder to understand.

The current version keeps the same joke, but replaces the select with one clear tap target. The first screen stays dark and image-free, then images appear after the first tap. The image area uses stable heights so the text and button do not jump between steps, and the final message sits above the slideshow so it stays readable.

## Run It

Open `index.html` directly in a browser, or serve this folder with any static file server.

No build step is required.

## File Map

- `index.html`: main page structure.
- `style.css`: visual style for the page, stable image stage, and button.
- `script.js`: quality unlock flow, image updates, music, and slideshow.
- `cute.mp3`: music used at the final step.
- `images/`: images shown during the quality steps.
- `docs/`: notes about the current flow and UX decisions.

## Next Ideas

1. Test on a real iPhone to confirm tap behavior and audio unlock.
2. Add a tiny final effect, like confetti, when `1080p` unlocks.
3. Personalize the final text and image set for each recipient.
