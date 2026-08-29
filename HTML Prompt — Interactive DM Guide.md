# HTML Prompt — Interactive DM Guide

**Status:** Standing process document. Not campaign content.
**Purpose:** Build an offline, interactive HTML guide that teaches **The Broken March** to a DM who has never seen any of it, then walks them through session 1.
**Tracked by:** `Campaign design doc.md` **§34**, chunks **G0–G8**.
**Consumes:** `Campaign design doc.md`, WP01–WP08, and the five `Session 1 Prep` documents.

---

# A. How to invoke

## A1. One chunk per conversation

Open a fresh conversation with the campaign folder as the working directory and send:

```
Read "HTML Prompt — Interactive DM Guide.md" and execute chunk G0.
```

Replace `G0` with whichever chunk is marked ▶ **NEXT** in `Campaign design doc.md` §34.3.

**Do not batch two chunks into one conversation.** Each is large, and each becomes the foundation the next depends on.

## A2. What every chunk must end with

1. **Files written to disk** under `The Broken March - DM Guide/`, in the campaign folder.
2. **A verification statement**: what you created, what you left as a placeholder, and what the next chunk needs.
3. **§34.3 updated** in the design doc — this chunk ✅ **COMPLETE**, the next ▶ **NEXT**.
4. **Never a placeholder for work this chunk owns.** Placeholders are only for content that does not exist anywhere in the vault yet (§F).

## A3. Before writing anything

Read **Sections B through H of this file**, then read the source documents your chunk needs. State in one sentence what your chunk produces and what depends on it.

---

# B. The brief

*(Everything from here to the end of Section H is the prompt.)*

## B1. What is being made

An offline HTML guide, in the style of a published starter adventure — a *Lost Mine of Phandelver*-shaped introduction and first-session walkthrough for **The Broken March**, a 4-session D&D 5e reactive sandbox near Daggerford.

**The reader is a DM who knows nothing.** They have not read the design doc. They do not know what a "watch" is, what "Illefarn Instability" tracks, or why the village has 260 gp in it. They may never open the source documents. **The guide has to work alone.**

## B2. The reader

Assume they are:

- **Competent at 5e.** You never explain an attack roll.
- **Completely new to this campaign.** Every campaign-specific term is defined on first use, in one clause, in plain language.
- **Prepping the night before**, wanting to know what to *do*.
- **Possibly sceptical** of "reactive sandbox" — so Part 0 earns their trust by showing the machinery working, not by asserting it.

**Written to be read once, then used at the table.** Prose to learn from, tables to run from, and the two must look different.

## B3. What it is not

- **Not new canon.** Everything comes from WP01–WP08 and the design doc. **On any conflict, the vault documents win.**
- **Not a replacement for the work packages.** It is a doorway. Where the reader will eventually need full detail, name the document and section.
- **Not a rules primer.** No 5e basics.
- **Not the source of truth.** It is a viewer with a scratchpad.

## B4. Sources, and their standing

| Document | Take from it |
|---|---|
| `Campaign design doc.md` | Pillars, tone, structure, §33–§33.8 canon. **§33 is authoritative on canon conflicts** |
| `WP01 — Campaign State Model` | Variables, reputation, clocks, threat ladder, watches, crime, the dashboard |
| `WP02 — Greybank Village` | 22 locations, 143 people, defence, fire, economy, the upgrade catalogue |
| `WP03 — NPC Roster` | 28 villagers: voice, want, fear, resource, tonight line, death consequence |
| `WP04 — Factions` | Four factions, their internal splits, red lines, the four-session default |
| `WP05 — Regional Map` | Eighteen zones, travel in watches, crossings, waystones |
| `WP06 — Illefarn Dungeon` | Sectors, systems, the Listener, the Sentinel |
| `WP07 — Hardcore Encounter Library` | Stat blocks, morale, encounter format, the Moorgaunt |
| `WP08 — Session 1` | **The spine of Part 4.** Follow it exactly |
| `Session 1 Prep — *` ×5 | Run-sheet, stat cards, handouts, items, visual asset prompts |

**On state mechanics WP01 wins. On tone, scope and canon the design doc wins.**

---

# C. Output architecture

**Multi-file, offline-first, no build step, no network.** The DM double-clicks `index.html` from a folder on disk.

```
The Broken March - DM Guide/
  index.html                        hub · state panel · global search
  01-introduction.html              Part 0 + Part 1
  02-background.html                Part 2 + Part 3   (DM-only, spoiler-gated)
  03-session-one.html               Part 4
  04-reference-people-places.html   Part 5.1–5.3
  05-reference-props.html           Part 5.4–5.9
  06-after-session-one.html         Part 6 + pending-content report
  assets/
    app.css          shared styles, theme tokens, print rules
    app.js           auto-linker, previews, nav, search, placeholders, images
    entities.js      the entity registry (data only)
    state.js         save / load / export / import
    img/
      README.md      the image manifest — where to copy generated art
```

**Shared files load via `<script src="assets/app.js">` and `<link rel="stylesheet" href="assets/app.css">`.** Both work from `file://`. **`fetch()` does not** — never use it.

**Every page** includes, in this order: `app.css`, then `entities.js`, `state.js`, `app.js` before `</body>`.

---

# D. The chunks

Each is one conversation. **Status lives in `Campaign design doc.md` §34.3 — read it first and update it last.**

---

## G0 — Shell and framework

**Produces:** the folder, `index.html`, `assets/app.css`, `assets/app.js`, `assets/state.js`, a stub `assets/entities.js`, `assets/img/README.md` (stub).

**Build:**

1. **The folder structure of §C**, with every file present even if minimal.
2. **`app.css`** — the complete design system: theme tokens for light and dark, typography, prose measure, tables, stat-block styling, read-aloud boxes, entity links, preview cards, placeholder blocks, image frames, print rules (§E).
3. **`app.js`** — the framework: auto-linker (§G2), preview cards (§G3), navigation and search (§G7), placeholder rendering (§F1), image fallback (§F2), theme toggle.
4. **`state.js`** — the full state model (§H), working, with export and import.
5. **`index.html`** — a working hub: title, what this is, links to all six pages *(pages not yet built link to a stub that says which chunk builds them)*, the state panel, global search.
6. **A demo section inside `index.html`** exercising every component — an entity link with a preview, a read-aloud box, a stat block, a table, a placeholder, an image frame — so the next chunks have a visual reference and G8 has something to regression-test.

**Done when:** `index.html` opens offline, the theme toggle works, the demo entity link shows a preview on hover and navigates on click, and state exports and re-imports without loss.

---

## G1 — Entity registry

**Produces:** `assets/entities.js`, complete.

**Build the full registry** to §G1's schema. Targets:

| Type | Count | Source |
|---|---:|---|
| `npc` | ~34 | WP03 §3.2 (28) + WP04 §13 (6) |
| `location` | 22 | WP02 §7, G1–G22 |
| `zone` | 18 | WP05 §6, Z1–Z18 |
| `sector` | 16 | WP06 §4.3, S1–S16 |
| `faction` | 4 | WP04 §3 |
| `term` | ~22 | WP01 §22 vocabulary |
| `item` | ~8 | Session 1 Prep — Items, WP06 §5.2 |
| `creature` | ~7 | WP07 §5–§11 |
| `rumour` | 12 | WP08 §10 |

**Every entity needs a real summary written from its source** — one to three sentences, the memorable fact first. **Do not stub these.** A registry of empty summaries makes every hover preview useless and is the fastest way to make the whole guide feel hollow.

**`href` values point into pages G5 and G6 will build.** That is correct and expected; they resolve once those chunks land.

**Done when:** the registry loads without error, `index.html`'s search finds any entity by name or alias, and every entry has a non-empty summary.

---

## G2 — Part 0 and Part 1

**Produces:** `01-introduction.html`.

**Part 0 — How to Run This Campaign.** The trust-earning section. Two to three screens, prose, not bullets.

1. **What kind of campaign this is** — mechanics-first, story-light, four sessions, levels 3→5/6, a small persistent region where nearly every meaningful action changes future play.
2. **The five rules that make it different**, each with a one-line worked illustration: the world does not scale · combat is one solution among many, and some things cannot be killed at all · consequences persist · **there is no villain** · prepare what happens if the players do nothing.
3. **The fairness contract** — harsh, not arbitrary. The four threat-signalling levels, and the plain statement that once level 4 is reached the DM is not required to protect anyone.
4. **The vocabulary**, as a glossary table: watch (4 hours; long rest 2) · the four village variables · reputation vs. NPC attitude · the five clocks · the six-stage threat ladder · infrastructure states · sector and system states. **Register these as `term` entities so they link everywhere else.**
5. **What you actually track**, with the dashboard shown.
6. **The honest warning** — the default outcome is Greybank losing, slowly and legibly. That is not a failure state and the DM should not steer away from it.

**Part 1 — The Setting.**

1. **Greybank** — WP02 §3.1's pitch, then the hard facts: ≈260 gp in the whole village · seven ways in and the village watches two · the ring breached in four places · the bell that reaches none of the five places where forty of the hundred and forty-three work · Defense 2.
2. **The region** — eighteen zones, travel in watches, Daggerford two days away and always two days. Redraw WP05 §3.3's schematic as an HTML figure.
3. **The four factions** — one panel each: who, what they want, **their internal split**, their red lines. A faction played as a monolith is played wrong.
4. **The village cast** — a compact table of the NPCs session 1 uses, with the five load-bearing providers marked.

---

## G3 — Part 2 and Part 3

**Produces:** `02-background.html`.

**Part 2 — What Is Actually Going On. DM-only, behind the spoiler gate (§G6), defaulting to hidden.**

1. **The Marrowward** — a failing ward line, not a vault. Six anchors, three inside Greybank, unremarked for ninety years. Three of six spans dead, facing north-west.
2. **Nothing went catastrophically wrong** — attrition over two thousand years, and **nothing there advances on a timer.**
3. **The Sentinel** — intact instruction, corrupted map. Why it cannot be killed and the four things that work instead.
4. **The Red-Tusk** — 61 goblins, 22 fighters, 39 who cannot fight, holding a door shut without knowing it.
5. **The Moorgaunt, and why the moor is empty** — one shortage, two consequences, no mastermind.
6. **Who believes what** — WP06 §3.4's table. **Nobody holds the whole picture, including the elves.**
7. **The default if the party does nothing** — WP04 §12.2's four-session table in full.

**Part 3 — Starting the Campaign.**

1. **The four arrival hooks**, with the recommendation and why. **None is a patron giving orders.**
2. **The three doors** — the fold, the Pale, the far bank — and Daggerford arriving as an offer rather than a problem.
3. **Where it can go** — the four sessions and the end states, shape without ending.
4. **Session zero notes** — death is expected, backups encouraged, retreat is legitimate.

---

## G4 — Part 4, session one

**The largest chunk. Produces `03-session-one.html`. Follow WP08 exactly.**

Structure as **watch blocks**, Day 1 Afternoon through Day 3 Dawn. Each block carries:

- **What fires**, and whether it is a **deadline** (fires regardless of the party) or contingent.
- **Read-aloud text** in a distinct box, written to §F4's rules.
- **What the DM needs to know**, in prose.
- **What the players are likely to do**, and what each option costs.
- **State changes**, explicitly, in campaign vocabulary.

**The three deadlines must be unmissable**: the bench collapse (Day 2 Morning), the fold probe (Day 2 Night), Bessa Ruddock and the dragged ewe (Day 2 Dawn). Give them a distinct treatment and repeat them in a pinned strip at the top of the page.

**Subsections, each its own anchor:**

| Subsection | Source |
|---|---|
| The arrival, six beats | WP08 §4.2 |
| The five NPCs who must land | WP08 §5.1 |
| The Evening at the Sundered Cart | WP08 §11 |
| The three problems and their decay tables | WP08 §6 |
| **The quarry incident** and the twenty-five-minute clock | WP08 §7 |
| The first tactical encounter, stat block inline | WP08 §8 + prep stat cards |
| **Illefarn Stage I in one visit**, both permanent choices | WP08 §9 |
| The twelve rumour cards | WP08 §10 |
| Ending the session: nine steps, unconditional level 4 | WP08 §12.4 |

**Include an "if the party does none of this" panel.** A do-nothing session ends at Greybank Reaction 2 with nothing else moved, and that is legitimate.

**If this chunk grows too large, split at the quarry incident** and produce `03-session-one.html` and `03b-session-one-continued.html`, linked both ways. Say so in your verification statement.

---

## G5 — Reference: people and places

**Produces:** `04-reference-people-places.html`. **The target of most entity links.**

1. **NPC directory** — every named villager and faction NPC: portrait frame, voice handle, want, fear, resource, attitude, tonight line, **what happens if they die**. IDs must match `entities.js`.
2. **Location directory** — G1–G22: what it provides, who runs it, what breaks if it is lost, tactical note.
3. **Zone directory** — Z1–Z18: travel time from Greybank, terrain, current threat stage, who knows it.

---

## G6 — Reference: dungeon, blocks, props

**Produces:** `05-reference-props.html`.

1. **Illefarn** — S1–S4 in full; S5–S16 as one-line entries flagged as later-session content.
2. **Stat blocks** — the three-scout probe, the village blocks, the collapse rulings.
3. **The twelve rumour cards**, print-ready, one per card face.
4. **Handouts** — Bessa's slate, the crossing book page, the Watch-Glass image.
5. **Items** — the Watch-Glass and the resonance key, with what selling each costs.
6. **The dashboard**, filled in at campaign start.
7. **Glossary** — every campaign term in one line, cross-linked.

---

## G7 — Part 6, hub, state

**Produces:** `06-after-session-one.html` and the finished `index.html`.

1. **Part 6 — After Session One.** What the DM writes down, what advances on its own, where to go next. WP09 is not built: point at WP04 §12.2's default table and WP08 §6's decay tables as session 2's material.
2. **The pending-content report** — auto-generated from every placeholder in the guide (§F1), grouped by owning package.
3. **Finish `index.html`** — the state panel wired to every page, global search across the registry, a "current session position" readout, and export/import controls prominent.
4. **Verify state round-trips across pages**: set values on `03-session-one.html`, export, reload, import, confirm.

---

## G8 — QA and placeholder audit

**Produces:** fixes applied across all files, and the finished `assets/img/README.md`.

Work Section H's checklist end to end, and additionally:

1. **Cross-file link check** — every entity `href` resolves to a real anchor in a real file. Report and fix every dead one.
2. **Placeholder audit** — every placeholder names a real owning package and appears in the pending-content report.
3. **Image manifest** — `assets/img/README.md` listing every expected filename, what it depicts, and which § of `Session 1 Prep — Visual Assets (WP15)` generated it.
4. **Regression-test G0's demo section.**
5. **Canon spot-check** — sample twenty numbers across the guide against their sources.

---

# E. Technical constraints

- **Offline, always.** No CDN, no remote font, no `fetch`, no service worker. Must work from `file://` with the network off.
- **No build step, no framework.** Vanilla HTML, CSS, JavaScript.
- **Theme-aware.** Complete light palette as custom properties on `:root`; redefine only the changed tokens under `@media (prefers-color-scheme: dark)`; also under `:root[data-theme="dark"]` so a manual toggle wins both ways. `body` gets an explicit background token. Persist the toggle in `localStorage` inside `try/catch`.
- **Responsive.** Relative units, flex and grid. Wide tables and stat blocks scroll inside their own `overflow-x: auto` container — **the page body never scrolls horizontally.** No horizontal scroll at 360 px.
- **Typography.** System font stacks only. A serif or humanist face for body prose at 60–75 characters measure; a distinct face or weight for tables and stat blocks.
- **Performance.** The auto-linker runs once, after paint, in a single pass, and must not take a visible moment on a mid-range laptop.
- **No console errors, ever.**

---

# F. Placeholders, images, and read-aloud

## F1. Content placeholders

**Anything not yet written anywhere in the vault renders as a visible placeholder. Never invent content to fill a gap.**

```html
<div class="tbd" data-owner="WP13" data-topic="Full artifact price list">
  Pending — owned by WP13 (Items and Rewards). Session 1 needs only the
  Watch-Glass and the resonance key, both of which are in this guide.
</div>
```

Rendered as an obviously provisional block — dashed border, muted, labelled **PENDING**, with the owning package shown. `app.js` collects every `.tbd` on load and feeds the **pending-content report** in `06-after-session-one.html`.

**Known gaps at time of writing**, all legitimate placeholders:

| Gap | Owner |
|---|---|
| Sessions 2–4 content | WP09–WP12 |
| Full item and reward catalogue beyond session 1 | WP13 |
| Handouts beyond the four session-1 ones | WP14 |
| **All images** | WP15 — see §F2 |
| Printable dashboard and refill sheets | WP16 |

## F2. Images — the pipeline

**Images are being generated separately and will arrive after the guide is built. Nothing may break because a file is absent.**

Every image is referenced by a **fixed filename** in `assets/img/`, wrapped so a missing file degrades gracefully:

```html
<figure class="art" data-img="npc-bessa-ruddock.webp">
  <img src="assets/img/npc-bessa-ruddock.webp" alt="Bessa Ruddock, head shepherd"
       loading="lazy" onerror="this.closest('.art').classList.add('missing')">
  <figcaption>Bessa Ruddock — head shepherd</figcaption>
</figure>
```

When `.missing` is set, `app.css` shows a labelled frame at the right aspect ratio carrying **the expected filename** and **the § of the Visual Assets document that generates it**, so the DM can see exactly what to drop in.

**Naming convention — use it exactly:**

| Kind | Pattern | Example |
|---|---|---|
| Portrait | `npc-<entity-id>.webp` | `npc-kael-durrow.webp` |
| Map | `map-<slug>.webp` | `map-greybank-dm.webp`, `map-greybank-player.webp`, `map-illefarn-stage-1.webp` |
| Scene | `scene-<slug>.webp` | `scene-quarry-aperture.webp`, `scene-fold-at-night.webp` |
| Handout | `handout-<slug>.webp` | `handout-watch-glass.webp`, `handout-bessa-slate.webp` |
| Region | `map-region.webp` | — |

> **Tell the DM, in `assets/img/README.md` and in the G8 verification statement: drop finished images into `assets/img/` using these exact filenames. No code changes and no regeneration are needed — the placeholders resolve themselves.**

Prefer `.webp`; accept `.png` by also trying that extension in the `onerror` handler before giving up.

## F3. Reserving space

Give every image frame an explicit aspect ratio in CSS — portraits 3:4, maps 4:3, scenes 16:9, handouts 5:7 — so **layout does not shift** when real art lands.

## F4. Read-aloud text

**You will write this; the sources contain almost none, and it is the most dangerous content in the build.**

1. **It may only describe what canon fixes.** WP02 says the store has a slate roof and it is the Street's only one — you may describe that. You may not invent a signboard, a smell, or a greeting that contradicts a WP03 voice handle.
2. **Three to five sentences.** A DM reading aloud for a minute has lost the table.
3. **Sensory and concrete** — limestone dust, work stopping early, the missing parapet on the downstream side. Never atmospheric filler.
4. **Never state a mechanic, a clock, a stage, or a number the players have not earned.**
5. **Never assume a player action.** No "you decide to", no "you feel that you should".
6. **Excluded from auto-linking** (§G2).

---

# G. The interactive specification

## G1. Entity registry schema

One array in `assets/entities.js`:

```js
const ENTITIES = [
  {
    id: "bessa-ruddock",
    name: "Bessa Ruddock",
    aliases: ["Bessa"],
    type: "npc",
    tag: "Head shepherd · G18 · Neutral",
    summary: "Runs the fold. Has lost four ewes in eleven days and keeps a tally on a slate. Talks to people the way she talks to dogs. <strong>Does not ask twice.</strong>",
    href: "04-reference-people-places.html#npc-bessa-ruddock",
    img: "npc-bessa-ruddock.webp"
  }
];
```

**Required:** `id`, `name`, `aliases`, `type`, `tag`, `summary`, `href`. **Optional:** `img`.

**`href` is page-qualified** so links work across files.

## G2. Auto-linking

**Do not hand-write links.** On load, walk text nodes and wrap matches in `<a class="ent" data-ent="id">`.

1. **Longest match wins** — "Bessa Ruddock" before "Bessa".
2. **Whole words only.**
3. **First mention per `<section>` only.** **Linking every occurrence turns the page into soup and is the single most likely way to ruin this guide.**
4. **Never link inside** `h1`–`h4`, read-aloud boxes, an entity's own reference entry, existing links, `code`, `pre`, `.tbd`, or `.nolink`.
5. Case-sensitive for proper nouns; case-insensitive for `term`.
6. Skip the walker inside Part 0's glossary.

## G3. Hover previews

On hover **and keyboard focus**, show a floating card with `name`, `tag`, `summary`, and a type chip.

| Requirement | Behaviour |
|---|---|
| Delay | ~250 ms in, ~150 ms out; no flicker between adjacent links |
| Position | Prefer above; flip below when there is no room; clamp horizontally |
| Width | 280–360 px, `max-width: calc(100vw - 2rem)` |
| Persistence | Stays open while the pointer is over the card, so text can be selected |
| Dismiss | Pointer leaves both · `Escape` · scroll · another opens |
| Stacking | **Never.** One card, reparented and repositioned |

## G4. Click navigation

- **Smooth scroll** with an offset for the sticky header.
- **Briefly highlight** the target entry.
- **Push a history entry** so Back returns the reader to where they were. **A DM mid-session must never lose their place.**
- A floating **"back to where I was"** control after any entity jump.

## G5. Touch

Detect coarse pointers. **First tap** opens the preview anchored to the link, with a visible **"Go to entry →"** button. **Second tap**, or the button, navigates. Tapping elsewhere dismisses.

## G6. Spoiler gate

`02-background.html` opens with DM-only content hidden behind one **"Reveal DM-only content"** toggle, so the DM can turn a screen toward a player without thinking. The choice persists per-page in state.

## G7. Navigation, search, print

- **Sticky top bar** with the six part names, current page highlighted.
- **Collapsible sidebar TOC** on wide screens, drawer on narrow.
- **Search** filtering the registry by name, alias and tag; Enter jumps; `/` focuses it.
- **Deadlines strip** pinned in Part 4.
- **Print:** hide nav, search, sidebar and previews; expand collapsed content; force light colours; entity links print as plain text; page-break before each Part; never break a stat block or table across pages.

## G8. Accessibility

Real `<a>` elements, focusable, in order. Preview is `role="tooltip"` with `aria-describedby`, or `role="dialog"` on touch. `Escape` closes and returns focus. Contrast met in both themes. `prefers-reduced-motion` respected — no smooth scroll, no fades.

---

# H. State: save, load, export, import

**The DM runs this across multiple machines. Portability is the requirement, not a nicety.**

## H1. The model

One versioned JSON object in `assets/state.js`:

```js
{
  schema: 1,
  savedAt: "2026-08-29T22:14:00Z",
  campaign: {
    day: 1, watch: "Afternoon",
    variables:   { food: 4, trade: 3, defense: 2, unity: 4 },
    reputation:  { greybank: 0, hollow: 0, redTusk: -1, daggerford: 0 },
    clocks:      { reaction: 1, hollow: 1, redTusk: 1, daggerford: 1, instability: 1 },
    redTuskBranch: null,
    infrastructure: { bridge: "Intact", mill: "Intact" },
    stock:       { potion: 2, healersKit: 2, antitoxin: 1, blastingPowder: 6 },
    illefarn:    { sectors: {}, systems: {}, breaches: [] },
    threatStages:{ Z4: "Incident", Z17: "Escalation" }
  },
  session: {
    deadlinesFired: [], rumoursDealt: [], npcsMet: []
  },
  notes: { "session-one/quarry-incident": "free text" },
  ui: { theme: "auto", spoilersRevealed: {} }
}
```

## H2. Persistence

- **`localStorage` for convenience**, every write wrapped in `try/catch`. On `file://` some browsers give each page an opaque origin — **assume it may silently fail and never depend on it.**
- **Export is the real mechanism.** A button downloads `broken-march-state.json` via a Blob and `<a download>`.
- **Import** via `<input type="file">` and `FileReader`. Validate `schema`, then merge.
- **Clipboard fallback both ways** — "Copy state" and "Paste state" — for machines where file dialogs are awkward.
- **Autosave to `localStorage` on every change**, and show a small "unsaved since last export" indicator so the DM knows when to export before switching machines.

## H3. Rules

- **Every page reads and writes the same object.** A value set in `03-session-one.html` is visible in `index.html` after import.
- **Import replaces; it never silently merges conflicting campaign values.** Ask before overwriting a non-default state.
- **Never make the guide the source of truth.** State is a scratchpad over canonical documents.

---

# I. Content rules

## I1. Canon fidelity

- **Every number, name, price, distance, time and state change matches its source.** On apparent conflict, WP01 wins on mechanics, the design doc on canon — and footnote it rather than silently choosing.
- **Cite the source** for anything a DM might look up: *(WP02 §12.3)*. Small and unobtrusive.
- **Never invent** an NPC, location, price, monster, rule or outcome. If something is missing, place a `.tbd` (§F1) naming its owner.

## I2. Source tagging

Preserve **[LORE]** / **[ADAPTED]** / **[CAMPAIGN]** where the sources carry it. Style as small chips. Explain the three once, in Part 0.

## I3. Teaching, not presenting

- **Define on first use.** The first "watch" in prose carries its definition.
- **Explain why, in one clause**, where a rule looks strange — why 260 gp, why the militia never crosses the boundary stones, why nothing at the site advances on a timer. The reasoning is what makes it stick.
- **Prefer a worked example** where the sources already provide one.

## I4. Tone

Match the campaign: **dangerous, grounded, unsentimental, tactically rewarding.** No lore dumps, no purple prose, no exclamation marks, no "in this thrilling chapter". Short declarative sentences. Bold the operative term. Blockquote the single most important rule of a section.

---

# J. Self-check before declaring a chunk complete

**Every chunk:**

- [ ] Files written to disk; folder structure matches §C exactly.
- [ ] Opens from `file://` with the network off. **No console errors.**
- [ ] No CDN, no remote font, no `fetch`.
- [ ] Light and dark both render correctly, including previews, stat blocks and placeholders.
- [ ] No horizontal page scroll at 360 px.
- [ ] Nothing this chunk owns is a placeholder; every placeholder names a real owning package.
- [ ] Every image reference uses §F2's naming and degrades to a labelled frame.
- [ ] Every number matches its source; citations present where a DM would look something up.
- [ ] §34.3 updated — this chunk ✅, the next ▶.

**Additionally, once the relevant chunk exists:**

- [ ] Auto-linking respects **first-mention-per-section** and never fires in headings, read-aloud boxes, or an entity's own entry.
- [ ] Hover previews position correctly near all four viewport edges and never stack.
- [ ] Touch: tap to preview, tap again to navigate.
- [ ] Browser Back returns the reader to where they were after an entity jump.
- [ ] `Escape` closes previews; keyboard reaches every link; `prefers-reduced-motion` respected.
- [ ] State exports, and re-imports on a different machine, without loss.
- [ ] Print: nav hidden, Part 4 and Part 5 legible, stat blocks and tables unbroken.
- [ ] The three deadlines are visually unmissable in Part 4.
- [ ] Read-aloud text invents no fact and states no mechanic.
- [ ] Part 2 is DM-only and defaults to hidden.
