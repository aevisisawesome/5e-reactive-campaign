# The Broken March — Maps Audit

**Status:** Phase 1 checked by the DM, 1 Nov 2026. Answers are in §5. Prompts: [[Maps — Generation Prompts]].
**Purpose:** list every place that could have a map, every map that exists, and every map that is missing. This file creates no canon.
**Sources read:** WP02 §4–§6, WP05 §3, §4.2, §5.1, §10, §13–§14, WP06 §4, §16, WP09 §2.5–§2.6, §4 (scenes 1, 3, 8, 9, 10), §8.2, WP15 §1, §3, §4.5, §5, Canon Amendments §1–§5, Campaign design doc §33.9–§33.10, `assets/entities.js`, `assets/img/README.md`.

---

## 1. Locations that could have a map

**Region**
- The whole region, Z1–Z18 (WP05 §3.3). Includes the Marrow and its four crossings (bridge, shoal, Anvil Gorge, Bythe Ford), the Daggerford road and the Cut.
- The ward line: six waystones W1–W6 and the Kettlerock Gate (Canon Amendments §1, WP09 §2.6).
- Off the map, never drawn: Daggerford (~40 mi SE), Laughing Hollow.

**Village**
- Greybank (Z1): the 22 keyed places G1–G22, the earth ring (G21) with its four gaps, the seven ways in (WP02 §4.7).

**Village sites** (places that could need their own close-up or battle map)
- G1 Marrow Bridge + G2 Toll-shed (Scene 8, the envoy).
- G3 The Sundered Cart (Scenes 1 and 7).
- G6 Mill, G7 Granary, G8 Wharf and **the shoal** (Millside).
- G9 Shrine (holds W2).
- G13 The Tower + G19 Burial Ground (W1 and W3; Scene 3).
- G14 The Quarry / the Pale, with the aperture, + G15 Bunkhouse.
- G18 The Fold and Byres (Scene 1, the fold raid).
- G20 The Charcoal Camp, far bank, in the Coppice (Z5) (Scene 9A).
- Other G-sites (store, smithy, green, Moot Hall, militia shed, cotts, wagonyard, herbwife) are fine on the village map alone.

**Outside the village** (zones that could need a local map)
- Z7 Stonecrop Rise: W4, the cairns, the goblin scouts' cache (Scene 9B).
- Z11 Hagsfoot Moor: where S16 breaks the surface.
- Z14 Wend's Barrow: W5 under the spoil.
- Z15 The Hollowmarch: W6, the elves.
- Z16 Kettlerock: the Red-Tusk camp, 61 goblins.
- Z17 The Old Delving: the Kettlerock Gate from outside.
- The goblin trail: fold → Home Fields → Stonecrop Rise → Kettlerock (Scene 9B).
- The rest (Z3–Z6, Z8–Z10, Z12, Z13, Z18) need nothing beyond the regional map.

**Dungeon — the Marrowward** (WP06 §4.2–§4.3)
- The whole site in one sheet: all four stages and both gates (WP06 §16 "section drawing").
- **Stage I** (level 3): S1 Aperture and Ramp, S2 Muster Floor, S3 Anchor Room, S4 Watch Chamber.
- **Stage II** (level 4): S5 Lock Gallery + **the Lock-keeper's Cell**, S6 Workshops (stone-shop, metal-shop, store, records room), S7 Sluice Hall (opens off S8), S8 Drowned Stair.
- **Stage III** (level 4–5): S9 Transit Ring South (the grooved turning floor), S10 Long Gallery, S11 Deterrent Chain, S12 Kettlerock Gate.
- **Stage IV** (level 5–6): S13 Approach of Names, S14 Sentinel's Walk, S15 Ward Heart, S16 Broken Quarter.

---

## 2. Existing maps

I searched the whole repo for .png .jpg .jpeg .webp .svg .gif (and the folders around it, read-only). I looked at every candidate. Only **four** images are maps.

| # | File | What it shows | DM / players | Locations it covers | Where the guide uses it now |
|---:|---|---|---|---|---|
| 1 | `The Broken March - DM Guide/assets/img/map-greybank-dm.png` (copy: `image data/map-greybank-dm.png`) | Painted top-down view of Greybank, north at top, portrait. River across the bottom, bridge with toll-shed on the south bank, mill + wharf + skiff at the west end, quarry NW, tower and burial ground N, fields E, folds and byres W, ring bank with gaps. **No labels, no numbers, no grid.** | DM (shows the skiff, which the player map must hide) | Greybank, G1–G21 (G22 is not clearly drawn), Z3 and Z4 edges | **Yes:** `index.html` (hub figure), `01-introduction.html` (figure), and as the hover picture of the **Greybank** entity in `entities.js` |
| 2 | `Maps/regional-map-dm.svg` + `.png` | Parchment-style region map, labelled. Marrow west→east-south-east, Greybank on the north bank, all key zones with Z-codes, the ward line (living / key-lit / dead spans), W1–W6, Kettlerock camp, the Cut, Bythe Ford, scale "four miles". | DM | Region; Z1–Z17 (Z18 only as "to Coldwell Vale"); W1–W6; Kettlerock Gate | **No.** The guide shows a hand-built HTML schematic of the region in `01-introduction.html` instead |
| 3 | `Maps/regional-map-players.svg` + `.png` | Same drawing as #2 with every label, ward line and settlement removed. Terrain only. Title "The Marrow Valley". | Players | Region (terrain) | **No** |
| 4 | `Maps/marrowward-map-dm.svg` + `.png` | Box-and-line diagram of the dungeon **as played after Session 1**: S1–S16 by stage, barriers (Knock / key / sealed), key A in S3, key B in S9, the Sentinel's circuit in red dots, exits to the surface. Not to scale. | DM | All four stages, S1–S16 | **No picture.** Only named as a file path in text: `07-session-two.html`, Scene 10 "When / where" |

**Checked and NOT maps:**
- `scene-*.png` (6 files): quarry aperture, watch chamber ×3 variants, fold at night, Sundered Cart interior. Scene pictures.
- `npc-*.png` (14 files): portraits.
- `handout-watch-glass.png`: the six rings of the Watch-Glass. It is the ward line's shape, but WP15 §4.5 calls it "completely uninformative" on purpose. A player handout, not a map.
- `recap/session-1/art/*.jpg` (20 files): recap art. I looked at the village, quarry and gallery ones: scenes. The rest are scenes by name.
- Outside the repo (read only): `recap-animation/art/` and `zzzuncompressed images/` hold the same pictures. No extra maps.

---

## 3. Missing maps

Priority: **1** = needed next session (Session 2), **2** = soon, **3** = nice to have.
I set priority from WP09 §8.2 (the maps Session 2 asks for), the Session 2 scene list (WP09 §4), and WP15 §5.

| # | Location | Why it needs a map (where it's used in play) | DM / players / both | Priority |
|---:|---|---|---|:---:|
| 1 | **Greybank — player map** | WP15 §5 lists it as asset #1: "handed out in the first watch". WP02 §6 and WP15 §3.2 specify it (crude sketch, few labels, hides ring gaps, shoal, skiff, aperture). Not found anywhere. | Players | **1** |
| 2 | **The Tower (G13) + Burial Ground (G19)** | Scene 3, everyone goes. W1's palm-dip recess inside, W3 in the graveyard wall. WP09 §8.2 asks for `map-tower-g13.png`. | DM (a players' copy is possible: the recess is visible, its meaning is not) | **1** |
| 3 | **Marrowward Stage II** — S5 + Lock-keeper's Cell, S6 (4 rooms), S7 off S8, S8 | Scene 10.2–10.5. WP09 §8.2 asks for `map-illefarn-stage-2.png`. The schematic (#4 above) has no cell and no room shapes. | DM only (WP06 §16: no player interior maps) | **1** |
| 4 | **Marrowward Stage III** — S9 turning floor, S10, S11 mouth, S12 | Scene 10.4 and 10.6: the Sentinel's turn and its 120 ft range into the S6 records room. WP09 §8.2 asks for `map-illefarn-stage-3.png`. | DM only | **1** |
| 5 | **The Fold (G18)** | Scene 1 opens Session 2: the fold raid over the loose wall stones. A fight is possible if anyone guards it. | Both (DM copy marks the loose stones) | **1** |
| 6 | **Marrow Bridge (G1) + Toll-shed (G2)** | Scene 8, the envoy: "the single most consequential event" of the first half. Could turn into a fight on the bridge (11 ft wide). | Both | 2 |
| 7 | **Charcoal Camp (G20) and the Coppice (Z5)** | Scene 9A: Ib Sallow and the marked alder. Mostly talk and tracking. | Both | 2 |
| 8 | **Stonecrop Rise (Z7)** — W4, cairns, the scouts' cache, view over the valley | Scene 9B, the goblin trail. | DM (W4 is a secret; a players' copy would show "a standing stone" only) | 2 |
| 9 | **Greybank — DM map with key** | Map #1 exists but has no G1–G22 numbers, ring gap letters, routes, chokepoints or grid (WP02 §5, WP15 §3.1 "annotate by hand"). This is not a new picture: it is numbers on top of the existing one. | DM | 2 |
| 10 | **Marrowward Stage I** — S1–S4 as rooms | WP15 §3.3 and WP06 §16. The party walks through it again in Scene 10.1; the schematic (#4) is enough for that, so not urgent. | DM only | 2 |
| 11 | **Marrowward — whole-site section** (side view: four stages, both gates, the overflow shaft, S16 breaking out on Hagsfoot Moor) | WP06 §16: "the sheet that makes the site legible as one place". | DM only | 3 |
| 12 | **Marrowward Stage IV** — S13–S16 | Level 5–6 content, later sessions. | DM only | 3 |
| 13 | **Kettlerock (Z16)** — the Red-Tusk camp | Only if the party goes there (Scene 9B mentions it). | Both | 3 |
| 14 | **The Old Delving (Z17)** — the Kettlerock Gate from outside | Later sessions; the north gate. | DM | 3 |
| 15 | **The Sundered Cart (G3)** — floor plan | Scenes 1 and 7 happen here. Only needed if a fight breaks out inside. | Both | 3 |
| 16 | **Millside (G6–G8) and the shoal** | The village's back door (WP02 §4.7 routes 6–7). Only needed for a raid or escape there. | DM | 3 |
| 17 | **Wend's Barrow (Z14)** — W5 under the spoil | Later sessions. | DM | 3 |
| 18 | **The Hollowmarch (Z15)** — W6 and the wardens | Later sessions. | DM | 3 |
| 19 | **Hagsfoot Moor (Z11)** — where S16 breaks the surface | Later sessions. | DM | 3 |

Not needed: Z3–Z6, Z8–Z10, Z12, Z13, Z18. The regional map is enough for them.

---

## 4. Unclear things — questions for the DM

1. **Player village map.** WP15 made it the #1 asset for Session 1, but I can't find it. Did the players get a paper map in Session 1? If yes, is there a photo or scan of it (with their notes)?
2. **Two copies of the village map.** `assets/img/map-greybank-dm.png` (3.9 MB) and `image data/map-greybank-dm.png` (0.3 MB) look the same to me. The files are not byte-identical; the smaller one looks like a compressed copy. (So the guide uses the big original, and `image data/` holds the small copies, the opposite of what I expected.) For the Maps page, should I use the small one? It loads faster.
3. **Source conflict — where is the charcoal camp?** WP09 Scene 9A and the WP02 §4.4 schematic put it **south-west** of the bridge. The regional DM map draws "charcoal camp" a little **east / south-east** of the bridge. Which is right? (The map was made by `Maps/tools/build_maps.py`, so it can be fixed in the tool if needed.)
4. **Source conflict — which end of the village is downstream?** The Marrow runs west → east-south-east (WP05 §3.1, WP15 §3.1), so the **west** end is **upstream**. But WP02 §4.3 calls Millside (mill, granary, wharf) "the downstream end", while WP02 §4.4 and WP15 §3.1 put the mill at the **west** end. Also: the WP02 §4.4 schematic puts the wharf (G8) away to the east, but WP15 §3.1 and the painted map put it next to the mill at the west. The painted map follows WP15. Which do you want the new prompts to follow? (My guess: keep the painted map as it is, and treat "downstream" as a slip. But it's your call.)
5. **Player regional map.** WP05 §14 says the player map starts almost empty: a few labels (Greybank, the Cut, the Pale, Reedwater, Bythe Ford, "the moor") and the west half **blank**. The existing `regional-map-players` has no labels and shows terrain everywhere, including the west woods and the trail north. Canon Amendments §5 describes it as "terrain only". I take that as your ruling and won't change it, unless you tell me otherwise.
6. **S9's name.** WP06 and `entities.js` call S9 "The Transit Ring, South". The dungeon map labels it "S9 Turning Floor" (WP09 calls it "the grooved turning floor"). Same place, two names. Fine to keep both? On the Maps page I'd use the WP06 name with "turning floor" as a note.
7. **The village map has no numbers.** WP15 §3.1 says to add G1–G22 and the rest "by hand or in an editor". For the guide I can put numbered pins **on top of** the picture in HTML (no new image needed). Is that OK, or do you prefer a separate image with the numbers?

---

## 5. DM answers and what changed (1 Nov 2026)

| Question | Answer |
|---|---|
| Existing map 1 (painted village) | **Good map. Annotate it.** Done: `The Broken March - DM Guide/assets/img/maps/map-greybank-dm-annotated.png` (+ `.svg`), built by `Maps/tools/annotate_greybank.py`. It shows G1–G22, the four ring gaps, routes R1–R7, chokepoints 1–6 with widths, the shoal, the bridge depth, the aperture, W1–W3, a key panel, a rough scale. Not added: the 50-yard grid and H1–H34, because the painting is not to scale and no source says which cottage is which household. G22's spot is approximate. |
| Existing maps 2–4 (the SVG schematics) | **Schematic. Use their information to write real image prompts.** Done: `map-region-dm.png`, `map-region-players.png`, the four stage maps and `map-marrowward-section-dm.png` in [[Maps — Generation Prompts]]. |
| Missing maps | **Write prompts for all of them.** Done: 20 prompts in total. Missing map #9 (village DM key) needs no prompt; it is the annotated map above. |
| Q3 — where is the charcoal camp? | **South-west of the bridge** (WP09 9A and WP02 §4.4 win). The regional DM schematic draws it too far east; the new region prompt follows the text. |
| Q5 — the player regional map | **Follow WP05 §14: mostly blank.** Only what the villagers know; north of the moor edge and the west/south-west stay empty paper. |
| Q4 — which end is "downstream"? | Not asked again. The DM approved the painted map, so the prompts follow it: mill, granary and wharf together at the west end. WP02 §4.3's "downstream end" is still a wording slip there. |
| Q2 — two copies of the village map | Found out more: `image data/*.png` are really **JPEG files** with a .png name (0.3 MB each). The guide's copies are real PNGs (2–4 MB). The annotated map embeds the small JPEG. |

Still open: Q1 (was a player village map used in Session 1?), Q6 (S9's two names) — not blocking.

---

## 6. The generated maps — checked and wired in (1 Nov 2026)

All 20 pictures arrived in `The Broken March - DM Guide/assets/img/maps/` with the right names (as `.jpg`, which the guide uses). Each was checked against the sources. The guide now has a **Maps** page (`09-maps.html`); keys and overlays live in `assets/maps.js`.

| Map | Matches the sources? | What I did |
|---|---|---|
| Region, DM | Yes: north bank, quarry NW, ford E, camp SW, mound SE. The model wrote descriptive labels; the north is squeezed (Z17 ~9 map-miles out, not 16). | Overlay: Z1–Z18, W1–W6, the ward line by span state. Note on the squeeze. |
| Region, players | Mostly. The river climbs to the NE instead of running ESE; the ford is drawn as a path. | Overlay: the villagers' names. Note. |
| Village, players | Yes. The model added correct labels ("long hall" = Moot Hall). | Overlay: store, taproom, smithy, mill, shrine, Moot Hall, quarry. |
| Tower | Yes. The recess is on the east wall, not opposite the door. | Overlay + note. |
| Fold | Yes. | Overlay. |
| Bridge | Deck drawn ~20 ft wide; the rule is 11 ft. | Note: treat it as two squares. Prompt tightened. |
| Sundered Cart | Six pallets drawn; WP02 lets four. | Note. |
| Millside | **No**: a stone causeway was drawn right across the river (a crossing canon doesn't have). | **Cropped out** on the overlay. Prompt tightened. |
| Charcoal camp | Yes (small labels "toward bridge", "path" are right). | Overlay. |
| Stonecrop Rise | Yes. Cache on the village side (sources don't say which side). | Overlay. |
| Kettlerock, Old Delving, Wend's Barrow, Hollowmarch, Hagsfoot Moor | Yes. | Overlays. |
| Stage I | Ramp drawn inside the hall between two walls. | Overlay + note. |
| Stage II | A fifth room (a second "store"); the flooded passage starts near the top of the stair. Model wrote room labels (correct). | Overlay + notes. |
| Stage III | Flooded passage enters from the west, not the bottom; stray "TOP"/"BOTTOM" words. | Words painted out; overlay incl. the Sentinel's circuit. |
| Stage IV | Yes. | Overlay incl. the Sentinel's circuit. |
| Side view | **No**: one ramp ran from the aperture straight to S9, skipping Stages I–II; the moor chimney crosses the Long Gallery. | Wrong passage **painted out**, Stage I → II link drawn; chimney noted. Prompt tightened. |

Also copied into the maps folder: `map-greybank-dm.jpg` (the painted village, from `image data/`) and `marrowward-map-dm.png` (the as-played diagram, from `Maps/`).
