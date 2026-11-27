# The Broken March — Ideas

**Status:** Parking lot. Ideas to think about later. **Not canon, not planned, not scheduled.** Nothing here changes a work package or the DM Guide until the DM decides to build it.

Add new ideas at the bottom with a number and the date. When an idea is picked up, note where it went (a WP, a guide chunk, a tool) and mark it ✅ or ❌.

---

## 1. Table companion web app (added 27 Nov 2026)

**One app, one machine, two views.** A campaign-specific mix of DM guide, player guide, map renderer, initiative tracker, music player and session tracker. Think "Improved Initiative, but simpler, with only the essential stuff, and built for *this* campaign."

### The two views

| | **DM view** (laptop) | **Player view** (TV) |
|---|---|---|
| How to open | Default | Press **Player view**, drag the window to the TV |
| Map | Everything: no fog of war, all tokens, secrets | Only what the players have found |
| Initiative | Full HP, stats, notes | Order + rough HP ("healthy / bloodied / near death") |
| Links | Hover anything (map assets, initiative names, NPCs, places) → preview + link into the DM Guide | No guide links |
| Drawing | DM can draw and annotate | Players can annotate and drag their own tokens |

The DM keeps control of the player view at all times: the DM can draw on it, hide things, or take it back.

### Features

- **Map renderer**
  - Grid, tokens for PCs, NPCs and enemies. Drag them around.
  - **Positions are remembered** per map (NPCs stay where you left them between sessions).
  - Annotate on screen: both views. Clear or keep.
  - **Effect images:** drop in an image, move, rotate and scale it (a fireball, a collapsed tunnel, a spell area).
- **Map navigation by in-game paths.** Maps link to each other along real routes. Example: from the village, "head north → the Tower". Click a path exit to switch maps.
- **Zoom levels (three scales)**
  1. **Detailed** (battle map): grid on, each character is a token.
  2. **Local** (a village / city-size area): the party is **one group marker**. If they split up, it becomes two (or more) markers.
  3. **Regional:** the party is a **dot** on the region map.
  Zooming in from a group marker opens the detailed map of that spot.
- **Initiative tracker:** simple. Order, turn pointer, HP, conditions. Names link to the stat block / NPC entry.
- **Music player:** playlists per mood (village, travel, dungeon, combat, boss). Built in, so no other app is needed.
- **Session progress checklist:** the session plan's scenes and steps as ticks. Tick them off as the session goes.
- **Player reminder cards:** show the players a card for a place or NPC they've already met (picture + what *they* know, from the 🎭 player-view text). One click to put it on the TV.
- **"Ask Claude" link:** a ready-made prompt to start a fresh Claude conversation on the *other* PC during the session, with access only to the online (public GitHub) repo files.

### What already exists to build on

- `The Broken March - DM Guide/assets/entities.js`: every linkable name with summary, link and picture. Hover links come almost for free.
- `assets/app.js`: hover previews and the "Players only" view (hides `.dm-only`). Same idea as DM / player view.
- `assets/maps.js` + `09-maps.html`: map keys and overlays for all current maps.
- `assets/state.js`: a browser-side state scratchpad (not canon).
- `assets/img/maps/`: the map images.
- The 🎭 player-view boxes in `The Story So Far.md`: text for the reminder cards.

### Open questions

- Offline only (like the guide), or a small local server? Saving token positions and the checklist needs storage either way.
- Second browser window for the TV, or one window with a toggle? (A second window that mirrors the first is easier to use: the DM keeps their screen.)
- Where does music come from: local files in the repo, or links?
- How much is campaign-specific vs. reusable for a next campaign?

---

## 2. Maps for everything, with a grid (added 27 Nov 2026)

Make a map for every place the party could fight or explore, **detailed, with the grid drawn in from the start** (5 ft squares), so any of them can go straight onto the table or into the app above.

- Today's maps (`Maps — Audit.md` §6) are illustrations with overlays. Several have scale problems already noted (the bridge deck drawn ~20 ft wide instead of 11 ft; the Millside causeway that isn't canon). A true-to-scale gridded version fixes those for play.
- Start with the places most likely to see a fight: the Fold (G18), Marrow Bridge (G1), the Tower (G13), the Marrowward stages I–IV, the Sundered Cart (G3).
- Each map should have both a DM and a player version where secrets differ (see `Maps — Audit.md` §3 "DM / players / both").
- If idea 1 is built, record each map's scale (detailed / local / regional) and its path exits, so the app can link them.
