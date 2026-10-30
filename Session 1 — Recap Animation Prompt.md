# Session 1 recap: animated comic (prompt pack)

Based on [Session 1 — Player Recap.md](Session%201%20—%20Player%20Recap.md). Player-safe: it shows only what the characters saw.

**How to use this file**

1. Generate the art with the prompts in **Part B**. Save each image with the exact filename given, all in one folder named `art/`.
2. Paste **Part A** into a new AI chat (Claude or similar) to get the HTML file. Put the HTML next to the `art/` folder.
3. Missing images are fine. The page shows a labelled placeholder, so you can build the animation before the art is done.

---

## Part A: the build prompt (copy everything in the box)

```text
Build me a single self-contained HTML file: an animated "Previously on…" recap for my
D&D campaign, in the style of a 1990s fantasy comic book that has been brought to life,
like the motion-comic cutscenes in Metal Gear Solid: Peace Walker.

== FEEL ==
- The panels are mostly still drawings. The life comes from camera moves and effects, not
  from character animation.
- Panels slam, slide or wipe onto the page one after another, with thick black borders and
  white gutters. A screen holds 1 to 5 panels; the layout changes from screen to screen.
- Inside a panel: a slow push-in or pan across the image (Ken Burns), and light effects on
  top (rain, dust, glow, flicker, a white flash).
- Comic lettering: rectangular yellow caption boxes for narration, white speech balloons
  with tails, and big hand-drawn sound effects (SFX) that pop in with a slight overshoot
  and a small screen shake.
- Halftone dots and a faint paper grain over everything. Slight colour misprint on the SFX
  (a red/cyan offset of 1–2 px) is welcome.
- Between scenes: an ink-splash or page-turn wipe to black, then the next screen.

== FORMAT ==
- One .html file. Vanilla HTML/CSS/JS, no build step. You may load Google Fonts for
  lettering (e.g. "Bangers" for SFX, "Comic Neue" or "Patrick Hand" for captions).
  No other external files except my images.
- The stage is 16:9 and letterboxed inside the window, scaling to any screen size.
- Background: near-black (#0d0c0b) by default. Add a toggle for a white "paper" background
  (#f4efe3) and remember the choice in localStorage (wrapped in try/catch).
- Total length about 60 seconds. Autoplays after a "Click to start" title card (needed so
  a sound track can be added later).
- Controls that fade out while playing and reappear on mouse move: play/pause, restart,
  previous/next screen, caption on/off, background toggle. Keyboard: Space, ←, →, R.
- All timing lives in ONE data array (screens → panels → effects → lettering, each with
  start time and duration). I'll add a voice-over later and will need to retime things
  there, so keep it readable and commented. Don't build any audio now, but leave an empty
  hook for one audio track per screen.
- Images load from art/<filename>. If an image is missing, draw a grey hatched panel with
  the filename and a one-line description written in it, and keep playing.
- Respect prefers-reduced-motion: no shake and no flashes, crossfades instead of slams.

== THE STORY (screens, panels, timings) ==
Panel sizes: W = wide 16:9, T = tall 2:3, S = square, B = banner 3:1.

TITLE (0:00–0:04)
- Black. Big lettering slams in: "THE BROKEN MARCH". Under it, a caption: "Previously…"
  Ink-splash wipe out.

SCREEN 1 — "STRANGERS IN GREYBANK" (0:04–0:15), 4 panels
1. [W] s1-village.png — slow pan left to right over the village.
   Caption: "Greybank. One bridge, one quarry, zero visitors. Until now."
2. [S] s1-tarn.png — Old Tarn on his bench, scowling. Balloon: "Move along."
   Then musical notes drift up over the panel, his scowl panel crossfades to
   s1-tarn-happy.png. Caption: "One song and one gold piece later: fan club president."
3. [W, big, slams in across the lower half] s1-heroes.png — the four heroes, hero pose.
   Name tags pop in one by one beside each figure: HOWLING MATZA · BAR.D.SYNC · ALLINO ·
   BIGGY SMALLS.
4. [T] s1-beer.png — Biggy drinking a tankard, Vadd glaring in the background.
   SFX: "GLUG GLUG". Caption: "Vadd remembers."

SCREEN 2 — "SOMETHING BIG" (0:15–0:24), 3 panels
1. [T] s2-nissa.png — a frightened halfling bursting through the inn door, rain behind
   her. Balloon (shaky letters): "Voices at the sheep pen! Small ones… then something BIG!"
   Small shake.
2. [W] s2-fold.png — night, rain overlay, a dog frozen, staring into the dark.
   Very slow push-in. Lightning flash once.
3. [B] s2-two-signs.png — split image: left, a wall top smashed by something huge;
   right, stones pulled out with goblin tracks. Caption: "Two problems. For the price of one."

SCREEN 3 — "THE COLLAPSE" (0:24–0:33), 3 panels
1. [W] s3-quarry.png — a white quarry on a hill, a dust cloud rising. Big SFX: "KRRRAKK!"
   with heavy shake, dust particles drifting across.
2. [T] s3-slab.png — Biggy and Allino lifting a huge slab with quarrymen, straining.
   SFX: "HNNNGH!" Caption: "They walked there. The DM noticed."
3. [S] s3-heal.png — Howling Matza's hands over a wounded man, golden light.
   A soft pulsing glow overlay. Caption: "A life saved. A leg… not so much."

SCREEN 4 — "UNDER THE QUARRY" (0:33–0:50), 5 panels across two screens
Screen 4a (0:33–0:42):
1. [W] s4-ramp.png — the party small at the top of a vast ramp of pale stone going down
   into darkness. Slow push-in. Caption: "Elven ruins. Thousands of years old."
2. [T] s4-names.png — a wall of carved Elvish names, the last ones scratched in a hurry.
   Caption: "The last names were cut in a hurry. Never a good sign."
3. [S] s4-basin-3.png — a stone basin of dark liquid with six rings of light, three lit.
   At 0:39 a white flash, then crossfade to s4-basin-4.png (four rings lit) with a glow
   pulse on the new ring. SFX: "KLAK!" Caption: "Key in. Doors open. A fourth light."
Screen 4b (0:42–0:50):
4. [W] s4-stair.png — a flooded stair into black water, old bodies on the dry steps,
   a huge pale shape just under the surface. Water ripple effect on the lower third.
   Biggy in silhouette at the top, throwing a rope. SFX: "SPLOOSH".
   Caption: "Biggy went fishing. With a lasso. For a corpse."
5. [B] s4-gallery.png — a dead-straight stone gallery, the floor worn an inch deep by
   footsteps, fading into dark. The party seen from behind, backing away. Very slow
   push-in, a faint flicker. Caption: "Whose footsteps? Not today." Hold for 2 seconds of
   silence before the wipe.

SCREEN 5 — "PAYDAY" (0:50–1:00), 3 panels
1. [S] s5-serina.png — Serina Malk, composed, counting gold coins over a stack of stone
   tablets. Coins clink in one by one (small coin sprites or SFX "CLINK CLINK").
   Caption: "Thirty tablets. 75 gold each."
2. [T] s5-biggy-bed.png — Biggy carrying a wooden bed frame toward an old pale stone tower
   at dusk. Balloon: "I'm sleeping in the tower."
3. [W] s5-night.png — the village at night, the tower dark on the hill, one window of the
   inn lit. Slow zoom out. Caption: "Coin in pocket. Something blind under the quarry.
   Something big still out there. Sleep well."
   Final card, slams in: "TO BE CONTINUED…" Hold 2 seconds, then fade to black.

== QUALITY BAR ==
- It should feel like a real motion comic, not a slideshow: overlapping entrances, easing
  with a little overshoot, effects layered over art.
- Keep lettering readable: captions on screen at least 2.5 s, never over a face.
- Test at 1920×1080 and at a phone in landscape.
```

---

## Part B: art prompts

### B1. The shared style (add to the start of every prompt)

> **Style:** 1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look. Dark and moody, but with heroic energy. No text, no lettering, no speech balloons, no panel borders, no watermark.

The animation adds all text and borders, so the images must have none. Also add to every prompt (or put in the "negative prompt" field if your tool has one): `text, letters, words, signature, watermark, panel border, photo, 3d render, anime`.

### B2. The cast (paste the right line in whenever a character appears)

Fill in the **[brackets]** once with your players and keep the result identical in every prompt, so the characters stay consistent.

- **Howling Matza:** a tabaxi (cat-folk) woman bard, [fur colour and markings], wearing a hood over half-plate armour, a shortsword on each hip, a lute on her back.
- **Bar.D.Sync:** a small lightfoot halfling man, a flashy travelling musician, [hair], wearing stylish leather armour and a rapier, a whistle on a cord around his neck, a showman's grin.
- **Allino:** a tall weathered human man of about 38, an ex-farmer turned ranger, [hair, beard], wearing leather armour and carrying a longbow, lucky charms and amulets around his neck, a faint fey shimmer in his eyes.
- **Biggy Smalls:** a huge goliath man, about 7½ feet tall, grey stone-like skin with darker markings, bald, wearing chain mail, a glaive on his back, faintly glowing giant runes on his forearms.

Tip: generate a **character line-up** first (prompt `cast-lineup` below) and use it as a reference image for the rest, if your tool allows that.

### B3. One prompt per image

Format is **filename** · aspect ratio · prompt (after the style line).

| File | Ratio | Prompt |
|---|---|---|
| `cast-lineup.png` (reference only) | 16:9 | Character line-up of four fantasy adventurers standing side by side, full body, plain light background: [Howling Matza], [Bar.D.Sync], [Allino], [Biggy Smalls]. |
| `s1-village.png` | 16:9 | Wide establishing shot of a small medieval river village: one stone bridge, stone-and-thatch cottages inside an old grassy earth ring, a village green with a well and a bell post, a white stone quarry cut into the hill behind, an old pale stone tower. Late afternoon, overcast, quiet. |
| `s1-tarn.png` | 1:1 | An old grumpy villager sitting on a wooden bench by a road, arms crossed, scowling straight at the viewer, patched coat, walking stick. |
| `s1-tarn-happy.png` | 1:1 | The same old villager on the same bench, now smiling broadly and holding up a single gold coin, delighted. Same framing as the scowling version. |
| `s1-heroes.png` | 16:9 | Heroic group shot, low angle, four adventurers striking a confident pose on a muddy village road, dramatic sky: [Howling Matza], [Bar.D.Sync], [Allino], [Biggy Smalls]. Leave a little empty space beside each figure. |
| `s1-beer.png` | 2:3 | Inside a smoky village inn, [Biggy Smalls] in the foreground draining a big wooden tankard; behind him a stocky carter in a work coat glares at him furiously. Warm firelight. |
| `s2-nissa.png` | 2:3 | A frightened halfling woman in a rain-soaked shawl bursting through an inn's wooden door at night, wide eyes, mouth open shouting, rain and darkness behind her. |
| `s2-fold.png` | 16:9 | Night, heavy rain, a dry-stone sheep fold on a hillside, a sheepdog frozen rigid, staring into the dark beyond the wall; the dark is very deep. Lantern light from the left. Ominous. |
| `s2-two-signs.png` | 3:1 | Two scenes side by side on a wet stone wall at night. Left: the top of the wall smashed down by something very large, stones scattered outward. Right: a few stones clumsily pulled out and put back, small goblin footprints in the mud. Lantern light. |
| `s3-quarry.png` | 16:9 | A white stone quarry on a hillside in the morning, a huge cloud of pale dust bursting up from a collapsed rock face, tiny workers running. Dramatic. |
| `s3-slab.png` | 2:3 | [Biggy Smalls] and [Allino] with quarry workers lifting an enormous stone slab, muscles straining, dust in the air, low dramatic angle. A man's arm visible underneath the slab. |
| `s3-heal.png` | 1:1 | Close-up of a tabaxi bard's furred hands glowing with warm golden healing light over an injured quarryman lying in dust; an old herbwife kneeling beside them. [Howling Matza]. |
| `s4-ramp.png` | 16:9 | Four tiny adventurers with a lantern at the top of a vast ancient ramp of seamless pale stone, descending into total darkness. Elven architecture, smooth and impossibly precise. Sense of enormous scale. |
| `s4-names.png` | 2:3 | A tall ancient wall covered in carved Elvish script, columns of names; the last few names at the bottom are rough and hastily scratched. Lantern light raking across the carvings. |
| `s4-basin-3.png` | 1:1 | Top-down view of an ancient round stone basin filled with still, dark, mirror-like liquid; six rings of soft light float in it in a circle, three glowing pale blue, three dark. Dark stone room. |
| `s4-basin-4.png` | 1:1 | Exactly the same basin and framing, but four of the six rings now glow pale blue, two dark. |
| `s4-stair.png` | 16:9 | An ancient stone stair descending into black still water in a cavern; old bodies (goblins and figures in ancient elven armour) lie on the dry upper steps; a huge pale, slimy, eyeless shape just below the water's surface. At the top, the silhouette of a huge goliath throwing a rope. Cold, dim light. |
| `s4-gallery.png` | 3:1 | A long dead-straight ancient stone corridor vanishing into darkness, a deep groove worn into the centre of the floor by countless footsteps. In the foreground, four adventurers seen from behind, stepping back. Cold faint light. |
| `s5-serina.png` | 1:1 | A composed, well-dressed merchant woman at an inn table, calmly counting stacks of gold coins beside a pile of carved stone tablets. Candlelight. Shrewd smile. |
| `s5-biggy-bed.png` | 2:3 | [Biggy Smalls] carrying a big wooden bed frame on his shoulder, walking toward an old pale stone tower at dusk, determined and cheerful. |
| `s5-night.png` | 16:9 | The same river village at night, seen from a distance, the old pale tower dark on the hill, one warm window lit in the inn, the quarry a pale scar under the moon. Calm, but with something ominous in the shadows. |

**That's 21 images** (20 for the animation plus the line-up). If that's too many, the cheapest cuts are `s1-tarn-happy.png` (the animation will just keep the scowl) and `s2-two-signs.png`.
