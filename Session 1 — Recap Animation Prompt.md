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

**Every prompt below is complete on its own.** It works in any image tool, with no other text and nothing from this repository. Copy one box, paste it, generate, and save the image under the filename shown above the box, in the `art/` folder.

**Keeping the characters consistent.** Every prompt repeats the same style text and the same character descriptions, word for word. The four characters' looks below are my defaults. If your players picture them differently, change the words with Find & Replace (Ctrl+H in most editors), so every prompt changes at once.

| Character | Default description used in the prompts |
|---|---|
| Howling Matza | a cat-folk (tabaxi) woman bard with tawny, dark-spotted fur and green eyes, wearing a deep hood over steel half-plate armour, a shortsword on each hip and a lute on her back |
| Bar.D.Sync | a small halfling man about three feet tall, a flashy travelling musician with curly brown hair and a showman's grin, wearing stylish dark leather armour, a rapier at his side and a whistle on a cord around his neck |
| Allino | a tall, weathered human man of about 38 with short sandy-brown hair and a stubbly beard, an ex-farmer turned ranger in worn leather armour carrying a longbow, lucky charms and amulets around his neck, a faint fey shimmer in his eyes |
| Biggy Smalls | a huge goliath man about seven and a half feet tall, grey stone-like skin with darker markings, bald, wearing chain mail, a glaive on his back, faintly glowing runes on his forearms |

**Tips**
- If your tool accepts a reference image, make `cast-lineup.png` first and attach it to the prompts with characters in them.
- If your tool has a **negative prompt** field, put this in it: `text, letters, words, signature, watermark, panel border, photo, 3d render, anime`.
- The aspect ratio is written inside each prompt too. If your tool has a separate setting for it, set that as well.

### `cast-lineup.png` · 16:9 (reference only, not used in the animation)

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Character line-up of four fantasy adventurers standing side by side, full body, facing the viewer, plain light background. From left to right: a cat-folk (tabaxi) woman bard with tawny, dark-spotted fur and green eyes, wearing a deep hood over steel half-plate armour, a shortsword on each hip and a lute on her back; a small halfling man about three feet tall, a flashy travelling musician with curly brown hair and a showman's grin, wearing stylish dark leather armour, a rapier at his side and a whistle on a cord around his neck; a tall, weathered human man of about 38 with short sandy-brown hair and a stubbly beard, an ex-farmer turned ranger in worn leather armour carrying a longbow, lucky charms and amulets around his neck, a faint fey shimmer in his eyes; a huge goliath man about seven and a half feet tall, grey stone-like skin with darker markings, bald, wearing chain mail, a glaive on his back, faintly glowing runes on his forearms. Wide 16:9 landscape image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s1-village.png` · 16:9

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Wide establishing shot of a small medieval river village: one stone bridge, stone-and-thatch cottages inside an old grassy earth ring, a village green with a well and a bell post, a white stone quarry cut into the hill behind, and an old pale stone tower. Late afternoon, overcast, quiet. No people in focus. Wide 16:9 landscape image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s1-tarn.png` · 1:1

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. An old grumpy villager sitting on a wooden bench beside a village road, arms crossed, scowling straight at the viewer, white stubble, patched brown coat, walking stick leaning on the bench. Square 1:1 image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s1-tarn-happy.png` · 1:1

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. An old villager sitting on a wooden bench beside a village road, white stubble, patched brown coat, walking stick leaning on the bench, now smiling broadly and proudly holding up a single gold coin, delighted. Medium shot, centred. Square 1:1 image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s1-heroes.png` · 16:9

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Heroic group shot from a low angle: four adventurers striking a confident pose on a muddy village road under a dramatic sky. From left to right: a cat-folk (tabaxi) woman bard with tawny, dark-spotted fur and green eyes, wearing a deep hood over steel half-plate armour, a shortsword on each hip and a lute on her back; a small halfling man about three feet tall, a flashy travelling musician with curly brown hair and a showman's grin, wearing stylish dark leather armour, a rapier at his side and a whistle on a cord around his neck; a tall, weathered human man of about 38 with short sandy-brown hair and a stubbly beard, an ex-farmer turned ranger in worn leather armour carrying a longbow, lucky charms and amulets around his neck, a faint fey shimmer in his eyes; a huge goliath man about seven and a half feet tall, grey stone-like skin with darker markings, bald, wearing chain mail, a glaive on his back, faintly glowing runes on his forearms. A little empty space beside each figure. Wide 16:9 landscape image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s1-beer.png` · 2:3

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Inside a smoky medieval village inn with warm firelight. In the foreground, a huge goliath man about seven and a half feet tall, grey stone-like skin with darker markings, bald, wearing chain mail, a glaive on his back, faintly glowing runes on his forearms, draining a big wooden tankard of beer. Behind him, a stocky carter in a dusty work coat glares at him furiously. Tall 2:3 portrait image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s2-nissa.png` · 2:3

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. A frightened halfling woman in a rain-soaked shawl bursting through a medieval inn's wooden door at night, wide eyes, mouth open shouting, rain and darkness behind her, warm inn light falling on her face. Tall 2:3 portrait image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s2-fold.png` · 16:9

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Night, heavy rain, a dry-stone sheep fold on a hillside. A sheepdog stands frozen rigid, staring into the deep darkness beyond the wall. Lantern light from the left. Ominous. Wide 16:9 landscape image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s2-two-signs.png` · 3:1

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Two close-up scenes side by side on a wet dry-stone wall at night, lit by lantern. Left half: the top of the wall smashed down by something very large, stones scattered outward. Right half: a few stones clumsily pulled out and pushed back in, small goblin footprints in the mud below. Very wide 3:1 panoramic image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s3-quarry.png` · 16:9

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. A white stone quarry cut into a hillside on a grey morning; a huge cloud of pale dust bursts up from a collapsed rock face, tiny workers running away. Dramatic, chaotic. Wide 16:9 landscape image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s3-slab.png` · 2:3

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Low dramatic angle in a dusty white stone quarry: a huge goliath man about seven and a half feet tall, grey stone-like skin with darker markings, bald, wearing chain mail, a glaive on his back, faintly glowing runes on his forearms, and a tall, weathered human man of about 38 with short sandy-brown hair and a stubbly beard, an ex-farmer turned ranger in worn leather armour carrying a longbow, lucky charms and amulets around his neck, a faint fey shimmer in his eyes, together with rough quarry workers, lift an enormous stone slab, muscles straining, dust in the air. A man's arm is visible underneath the slab. Tall 2:3 portrait image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s3-heal.png` · 1:1

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Close-up of the furred, tawny, dark-spotted hands of a cat-folk woman in steel gauntlets glowing with warm golden healing light, held over an injured quarryman lying in white dust. An old herbwife with a basket of herbs kneels beside them. Square 1:1 image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s4-ramp.png` · 16:9

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Four tiny adventurers with one lantern at the top of a vast ancient ramp of seamless pale stone that descends into total darkness: a hooded cat-folk woman in half plate, a small halfling musician, a tall human ranger with a longbow, and a huge bald grey-skinned goliath. Elven architecture, smooth and impossibly precise. Huge sense of scale. Wide 16:9 landscape image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s4-names.png` · 2:3

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. A tall ancient underground wall covered in carved Elvish script arranged as columns of names; the last few names at the bottom are rough and hastily scratched. Lantern light rakes across the carvings. Tall 2:3 portrait image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s4-basin-3.png` · 1:1

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Top-down view of an ancient round stone basin in a dark stone room, filled with still, dark, mirror-like liquid; six rings of soft light float in it, evenly spaced in a circle: three rings glow pale blue, the other three are dark. Square 1:1 image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s4-basin-4.png` · 1:1 (make it look as close to s4-basin-3.png as you can)

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Top-down view of an ancient round stone basin in a dark stone room, filled with still, dark, mirror-like liquid; six rings of soft light float in it, evenly spaced in a circle: four rings glow pale blue, the other two are dark. Square 1:1 image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s4-stair.png` · 16:9

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. An ancient stone stair descending into still black water inside a cavern. Old bodies lie on the dry upper steps: goblins and figures in ancient elven armour. A huge pale, slimy, eyeless shape lurks just below the water's surface. At the top of the stair, the silhouette of a huge goliath throwing a rope lasso. Cold, dim light. Wide 16:9 landscape image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s4-gallery.png` · 3:1

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. A long, dead-straight ancient stone corridor vanishing into darkness, a deep groove worn into the centre of the floor by countless footsteps. In the foreground, seen from behind, four adventurers stepping back cautiously: a hooded cat-folk woman in half plate, a small halfling musician, a tall human ranger with a longbow, and a huge bald grey-skinned goliath. Cold, faint light. Very wide 3:1 panoramic image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s5-serina.png` · 1:1

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. A composed, well-dressed merchant woman in her forties sitting at a medieval inn table, calmly counting stacks of gold coins beside a pile of carved stone tablets. Candlelight. A shrewd, small smile. Square 1:1 image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s5-biggy-bed.png` · 2:3

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. A huge goliath man about seven and a half feet tall, grey stone-like skin with darker markings, bald, wearing chain mail, a glaive on his back, faintly glowing runes on his forearms, carrying a big wooden bed frame on his shoulder, walking cheerfully and with determination toward an old pale stone tower at dusk. Tall 2:3 portrait image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

### `s5-night.png` · 16:9

```text
1990s fantasy comic book panel, heavy black ink outlines, bold cross-hatching in the shadows, rich flat colours with soft airbrushed gradients, dramatic rim lighting, visible halftone dot texture, slightly worn printed-paper look, dark and moody but with heroic energy. Night view from a distance of a small medieval river village: one stone bridge, stone-and-thatch cottages inside an old grassy earth ring, a village green with a well and a bell post, a white stone quarry cut into the hill behind, and an old pale stone tower. The tower is dark on the hill, one warm window is lit in the inn, the quarry is a pale scar under the moon. Calm, but with something ominous in the shadows. Wide 16:9 landscape image. No text, no lettering, no speech balloons, no panel borders, no signature, no watermark.
```

**That's 21 images** (20 for the animation plus the line-up). If that's too many, the cheapest cuts are `s1-tarn-happy.png` (the animation keeps the scowl) and `s2-two-signs.png`.
