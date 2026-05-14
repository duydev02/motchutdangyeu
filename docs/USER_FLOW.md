# Current User Flow

This document describes how the app currently works based on `index.html`, `script.js`, `style.css`, and the assets in `images/`.

## Idea

The app pretends to be a video quality picker. The visitor taps through increasing quality levels. Each tap reveals a new image, and the final level unlocks music plus a slideshow.

## States

### 1. First Load

- `#qualityImage` is hidden with `d-none`.
- No image is visible yet; the first screen stays dark and simple.
- The title says `this is not loading...`.
- The hint says `but maybe it gets better if you tap the button`.
- The button says `start at 144p`.
- There is no visible step counter or progress row, so the experience feels less like a wizard.

### 2. Start at `144p`

- The visitor taps `start at 144p`.
- `images/144p.png` appears.
- The title, hint, and button update.
- The button becomes `upgrade to 240p`.

### 3. Choose `240p`

- The visitor taps `upgrade to 240p`.
- `images/240p.png` appears.
- The button becomes `upgrade to 480p`.

### 4. Choose `480p`

- The visitor taps `upgrade to 480p`.
- `images/480p.png` appears.
- The button becomes `upgrade to 720p`.

### 5. Choose `720p`

- The visitor taps `upgrade to 720p`.
- `images/720p.png` appears.
- The button becomes `unlock 1080p`.

### 6. Unlock `1080p`

- The visitor taps `unlock 1080p`.
- `images/1080p1.png` appears first.
- The final title moves above the slideshow so it stays visible.
- The app creates audio from `cute.mp3`.
- The volume is set to `0.4`, looping is enabled, and `audio.play()` is called.
- The button is hidden.
- `body` receives the `is-final` class.
- The slideshow cycles through `images/1080p0.png` to `images/1080p5.png`.
- `displayText()` types `I luv u 3000 <3` and loops the trailing dots.

## Notes

- Music can only play after a user gesture. The `unlock 1080p` tap is that gesture.
- The app no longer depends on hidden `<option>` behavior inside a native `<select>`, which is the important iOS fix.
- The image stage has a fixed height per breakpoint so different image dimensions do not move the copy and button around.
- The final state uses a shorter image stage so the typed message has enough space below the image.
- The final slideshow starts at `1080p1.png`, then cycles through the rest of the `1080p*.png` images.

## Intended Feeling

The visitor should quickly understand three things:

1. This is a tiny playful interaction, not a real video player.
2. They should keep upgrading the quality.
3. The highest quality unlocks the actual surprise.
