# The Broken March — Canon Amendments from Session 1 Play

**Status:** Canonical. These are DM rulings made during and after Session 1 (played 29 Aug 2026). They were ratified 28–29 Oct 2026.
**Amends:** [[WP05 — Regional Map]] §10; [[WP06 — Illefarn Dungeon]] §3, §5, §6.2–6.3, §6.8, §7–§9, §11.2, §12; [[WP08 — Session 1]] §9, §12.
**Scope:** Only what is listed here changes. Everything else in WP01–WP08 stands.
**Actual-play record (private, not in this repo):** `C:\Users\tomaa\Documents\!2026 D&D Reactive campaign\session-01-reconstruction\`. It holds the event ledger, post-session state v5, player knowledge and evidence. The public repo carries no player names or personal data.

---

## 1. How the ward line works  *(fills a gap in WP05 §10 / WP06 §3)*

| Ruling | Detail |
|---|---|
| **Shape** | The line is a chain of **straight spans between neighbouring posts**, in this order: Kettlerock Gate (Z17) → **W4** Stonecrop → **W3** graveyard wall → **W1** tower → **W2** shrine → **W5** Wend's Barrow → **W6** Hollowmarch. Each post holds the span arriving at it. The arc's mouth faces west / north-west. |
| **Power** | Every span is powered from the **Ward Heart (S15)**, which acts like a fuse box with six seats. A span works only if its post is alive **and** the Heart feeds it. A dead span leaves a gap. Nothing recalculates or self-repairs. |
| **Which spans are dead** | **W4, W5 and W3.** The long north arm (Kettlerock Gate → W4 → W3) faces Hagsfoot Moor, where the Broken Quarter (S16) surfaces. W5's south-east span failed long ago, and that is why its stone was buried as a "grave". **W1 and W2 are failing but alive. W6 is alive and tended by the elves.** |
| **Inside the line** | The land the arc wraps around (Greybank, the fold, the quarry, Stonecrop) **plus every tunnel**. |
| **The Sentinel** | Never leaves the tunnels below Instability 3 (WP06 §12 then applies: Z7 at night at 3, the village at 5). |
| **At the table** | Walking over the line does **nothing**, and there is no visible effect. |

## 2. Key-powered spans count  *(amends WP06 §6.2, §6.3, §6.8)*

- **A span whose anchor holds a resonance key counts as functioning,** including for the Ward Heart's re-anchoring requirement (WP06 §6.8 item 2: at least three living spans). This is a deliberate DM leniency.
- **Current effect:** key A sits in the S3 recess, so **W3's span is lit**. That gives four functioning spans (W1, W2, W3, W6), and the Watch-Glass shows **4 of 6 lit**. This replaces the earlier "held, not healed" ruling.
- **It lasts only while the key stays in.** Removing key A darkens W3 again and relocks the S5 doors. Anyone can do it: the party, the elves at Hollow stage 4 ("remove artefacts"), or a thief.
- **The other Heart requirements are unchanged:** System 1 stabilised (✔ already), the Hollowmarch anchor kept living (elf cooperation, Hollow Rep ≥ +2), the Sentinel corrected (System 6), and a full uninterrupted watch in S15.
- **Instability is not lowered by this.** It stays at **1** (ruling A2): WP06 §12 reserves 0 for the fully repaired line.
- Only S3 is an anchor room in canon. If a later package adds another anchor recess, the same rule applies.

## 3. Dungeon as played  *(amends WP06 §5, §7–§9; see `Maps/marrowward-map-dm.svg`)*

- **Knock** opens S4 and S5 magic seals. It counts as **Accessible, not Breached**, and has no clock effect.
- **Topology:** S6 ↔ S8 (open passage); S6 ↔ S9 (door with a rectangular lock); **S7 opens off S8** and keeps its overflow shaft to the quarry bench and its water/river control. A second magic-sealed door off S5 is **unexplored and undefined** (WP09 to define).
- **Keys:** there are still three site keys plus the Hollow's.
  - **The S2 warden's kit is empty.** Its key is the one the dead warden carried down to S8 (key B).
  - **Key A** (S6) is in the S3 recess.
  - **Key B** is in the **S9 lock**, and the leaf stands **open**.
  - The S11 key is untouched.
  - The party carries no key.
- **System 1** is stabilised and active. **Do not apply its Instability −1** (§2). Hollow clock +1 and Hollow Rep +1 do apply.
- **Durrow's account** in play ("a large room through a crack") conflicts with the S1 bootprints (ten feet). Keep both: he exaggerated or lied.
- **The S6 archive is depleted:** about 30 tablets were sold to Serina Malk, who now also knows how the Listener works.

## 4. Session 1 also changed  *(amends WP08 §12)*

- The session ended at **Day 2 Evening**, not Day 3 Dawn. The **Day 2 Night fold probe opens Session 2**.
- The party arrived **from the north** (Waterdeep → Daggerford). Greybank is ~40 mi NW of Daggerford.
- No healer's kit was used (the Cure Wounds spell replaced it). There are **still 2**.
- The party is **level 4** from Session 2.

## 5. Maps

`Maps/` holds three maps, each as an SVG and a PNG. Regenerate them with `Maps/tools/build_maps.py`.
- `regional-map-dm` shows the ward line and key places.
- `regional-map-players` shows terrain only.
- `marrowward-map-dm` is the dungeon as played.

The regional geometry is schematic and follows the WP05 §4.2 distances.
