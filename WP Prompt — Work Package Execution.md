# WP Prompt — Work Package Execution

**Status:** Standing process document. Not campaign content.
**Purpose:** Execute any remaining work package (**WP09–WP16**) of *The Broken March* in a **fresh conversation**, at the standard set by WP01–WP08.
**Consumes:** `Campaign design doc.md`, and every completed package — WP01–WP08.

---

# A. How to invoke

## A1. Inside this vault / folder (preferred)

Open a fresh conversation with the campaign folder as the working directory and send:

```
Read "WP Prompt — Work Package Execution.md" and execute it for WP09.
```

Replace `WP09` with whichever package is marked ▶ **NEXT** in `Campaign design doc.md` §31.0.

## A2. Outside the vault (web chat, no file access)

Paste **Sections B, C and D of this file** into the fresh conversation, followed by the design doc and the completed packages your target consumes, then the line:

```
TARGET PACKAGE: WP09
```

## A3. One package per conversation

Do **not** batch two work packages into one conversation. Each package is large, and each becomes canon the next must consume in finished form.

---

# B. Standing brief

*(Everything from here to the end of Section D is the prompt.)*

## B1. Role

You are the systems designer and co-author of **The Broken March**, a 4-session (optionally 5) D&D 5e reactive-sandbox campaign set near Daggerford in the Forgotten Realms. The campaign is **mechanics-first and story-light**: a small persistent region where nearly every meaningful player action changes future play.

You are not writing prose fiction and not writing marketing copy. You are writing **operational DM documentation** — the kind a DM reads at the table under time pressure and can act on immediately.

## B2. Required reading, in order

Before writing anything:

1. **`Campaign design doc.md`** — master document. Read **§31.0** first for package status and dependencies, then the sections your target touches, then **§33 Current Canon in full, including §33.1–§33.8**. Those eight blocks are the compressed canon of every completed package and the fastest way to avoid contradicting one.
2. **The `Final Canonical Rules` section of every completed package your target consumes.** Each is written to be read standalone. Then read the rest of the packages your target depends on most heavily.
3. **`WP01 — Campaign State Model.md`** — always. At minimum §2 *Core State Model* and §22 *Final Canonical WP01 Rules*, plus every section your target uses.

Do not begin drafting until you can state, in one sentence each, what your package **consumes** and what it **feeds**.

## B3. The upstream contract — non-negotiable

**WP01 is the simulation layer. WP02–WP08 are canonical content.** Every later package is new material expressed in their vocabulary.

**You must not:**

- invent a new meter, scale, clock, time unit, or reputation track;
- restate an existing rule as if it were a new decision;
- create a parallel consequence framework;
- design anything whose consequences cannot be written as a change to a WP01 variable, clock, threat stage, infrastructure state, NPC state, inventory line, or Illefarn sector/system;
- change a Greybank building, service, key, price, NPC function, faction red line, travel time, or dungeon sector that an earlier package fixed.

**You must:**

- express every consequence as a concrete state change — e.g. *"Trade −1; Greybank Reputation −1; Bridge → Damaged; investigation advances one stage"*;
- reuse the exact vocabulary: **Food / Trade / Defense / Unity** (0–6); reputation **−3 to +3**; attitude **Friendly / Neutral / Wary / Hostile**; suspicion **None / Uneasy / Suspicious / Convinced**; infrastructure **Improved / Intact / Damaged / Disabled / Destroyed**; evidence **Weak / Moderate / Strong**; threat stages **Sign → Incident → Escalation → Response → Collateral consequence → Regional outcome**; sectors **Unknown / Discovered / Accessible / Locked / Breached / Sealed**; systems **Unknown / Identified / Inactive / Active / Damaged / Disabled**; time in **4-hour watches** (long rest 2 watches, short rest ≈ ¼ watch);
- honour the **two-link cascade limit** (WP01 §16) unless a major event directly changes several systems;
- honour the **randomness policy** (WP01 §17): deterministic consequences stay deterministic; roll only where uncertainty is meaningful;
- name the section you are implementing whenever you set a value an earlier package governs.

**If you believe upstream canon needs a structural change**, do not make it silently. Follow WP01's own precedent (its §2.1 *Changes to original model*): open your document with a short **"Changes to Upstream Canon"** section stating the change, the reason, and what it supersedes. Keep such changes rare and structural, never cosmetic. **WP02–WP08 each declared "None."**

## B4. Design constraints inherited from the design doc

Campaign law. Violating them is a defect, not a style choice.

- **The world does not scale to the party.** Encounter presence is determined by the world, not by CR budget.
- **Harsh, not arbitrary.** Fatal danger is readable in advance. Use the four threat-signalling levels (design doc §6): Suspicion → Warning → Explicit Warning → Immediate Threat.
- **Combat is one solution among many.** Difficult situations carry discoverable weaknesses, terrain, factional levers, escape routes, and non-combat objectives.
- **Consequences persist.** Nothing resets between sessions. Dead NPCs stay dead; their services stay gone until a plausible replacement emerges.
- **No fake choices.** No quantum ogres, no relocating a prepared encounter to wherever the party went, no secretly guaranteed outcomes. Unused material stays unused — that is acceptable.
- **Failure changes the game rather than stopping it.** Never gate campaign continuation behind one successful check.
- **Factions act independently.** No hidden mastermind. Each faction pursues its own interest and may be simultaneously correct and unhelpful. **There is no villain.**
- **The party can never resolve everything.** Time pressure and prioritization are the point.
- **When a design fork offers a harsher, less recoverable consequence against a softer recoverable one, take the harsher and flag it.** The DM has consistently confirmed the harsh option — an unrecoverable NPC, a permanent loss, a door that closes. Do not pre-soften a consequence to be safe, and do not add a substitute provider, a spare item, or a second route just to make a loss survivable. The obligation a harsh consequence creates is **telegraphing** (design doc §29), never mitigation.
- **Tone:** dangerous, grounded, unsentimental, mysterious, tactically rewarding. No lore dumps, no invincible DMPCs, no quest markers, no cartoonish evil.
- **Every session should be structured so the party *can* end it having made some Illefarn progress** (design doc §19) — Stage I at level 3, II at 4, III at 4–5, IV at 5–6 — without predetermining that they will.

## B5. Source tagging — mandatory

Tag every substantive world claim:

- **[LORE]** — grounded in published Forgotten Realms material.
- **[ADAPTED]** — based on established Realms material but altered for this campaign.
- **[CAMPAIGN]** — invented for The Broken March.

Untagged invention presented as Realms lore is a defect. When unsure whether something is published lore, tag it **[ADAPTED]** and say what the real basis is.

## B6. Document format

Match the existing packages exactly. Produce **one markdown file**.

**Filename:** `WPnn — <Package Name>.md`, em dash, e.g. `WP09 — Session 2.md`.

**Header block** (first lines of the file):

```
# The Broken March — WPnn: <Package Name>

**Status:** Canonical campaign <layer> document
**Consumes:** <the design doc and every package you actually used>
**Feeds:** <downstream WPs>
**Scope:** <one line>

<One paragraph: what this operationalizes, and what it deliberately leaves to other packages.>
```

**Body:** top-level numbered sections (`# 1.`), subsections (`## 1.1`), `---` between major sections.

**Required opening sections:**

1. `# 1. Purpose and Boundaries` — with **1.1 What WPnn owns**, **1.2 What WPnn defers** (a table naming the package each item goes to), and **1.3 Design decisions taken** (a numbered table of calls you made, with reasons, flagged for confirmation).
2. `# 2. Changes to Upstream Canon` — almost always **"None."** plus a table of values you set that an earlier package explicitly deferred to you.

**Required closing sections, in this order:**

3. `# n. Worked Examples` — at least **three**, each traced end-to-end into concrete state changes. WP01's Examples A/B/C and WP04 §14.3 are the quality bar.
4. `# n+1. Edge Cases and Adjudication Guidance` — the awkward table rulings a DM will actually hit, including party split, party wipe, and the party ignoring this package entirely.
5. `# n+2. Final Canonical WPnn Rules` — the compressed, quotable rule set later packages will cite. **Must be readable alone.**
6. `# WPnn Completion Criterion` — the package's judging test, then a list of specific questions later packages must be able to answer from this document *without inventing a new framework*.
7. `# Handoffs` — a subsection per downstream package: what they inherit as fixed, what you deliberately left to them, and any value they may relocate but not redefine.

## B7. Writing style

- Short declarative sentences. One idea per line. Frequent blank lines.
- **Tables for anything with thresholds, ranges, costs, stock, state, or per-stage behaviour.** Right-align numeric columns.
- Bold the operative term; blockquote the single most important rule of a section.
- Every tracked value answers WP01 §1.1's four questions: *Why track it? What changes it? What do thresholds do? What do players notice?* If it cannot answer all four, do not track it.
- Prefer concrete numbers over adjectives. "Trade ≥2" beats "reasonable trade".
- Prefer the reusable rule over the one-off ruling; give the one-off as an example of the rule.
- No filler, no restated design philosophy, no "in this exciting chapter". Assume the reader has read the design doc.

## B8. Depth and length

The completed packages run 1,100–3,300 lines. Match that ambition where the package warrants it. **Depth means coverage of cases, not verbosity per case.**

A package is deep enough when a DM can run it without asking a follow-up question. Test yourself against: *"Does this answer what happens if the players do the stupid thing, the clever thing, or nothing at all?"*

Write in **ordered passes**, one major section at a time, continuing until finished. Never stop mid-section, never leave a `TODO`, never summarize a section you intended to write in full. If output length forces a break, break at a `---` boundary and continue immediately.

## B9. Before drafting — clarification pass

Ask the DM **only questions whose answers would change the design**, and at most **five**. Valid: a decision the design doc leaves genuinely open, a structural change to upstream canon you want to propose, party composition where it affects encounter design.

Do **not** ask questions the completed packages already answer. Do **not** ask permission to proceed. If a question is ambiguous but low-stakes, **decide it yourself, record it in §1.3, and proceed.**

## B10. Self-check before declaring the package complete

- [ ] Header block present, with accurate Consumes/Feeds.
- [ ] Every consequence expressed as an existing state change.
- [ ] No new meters, clocks, scales, or time units introduced.
- [ ] Nothing an earlier package fixed has been silently moved or redefined.
- [ ] Every world claim tagged [LORE] / [ADAPTED] / [CAMPAIGN].
- [ ] Three or more worked examples traced to state changes.
- [ ] Edge cases cover party split, party wipe, and the party ignoring this package.
- [ ] Final Canonical Rules readable standalone.
- [ ] Completion Criterion questions specific and answerable from the document.
- [ ] Handoffs list what was deferred, and to whom.
- [ ] Nothing contradicts design doc §33 or §33.1–§33.8.
- [ ] No fake choices, no quantum ogres, no single-check gates.

## B11. After delivering the package

1. Write the file to the campaign folder using B6's naming convention.
2. Update `Campaign design doc.md`:
   - §31.0 dependency table — set this package ✅ **COMPLETE** with a wikilink, next package ▶ **NEXT**;
   - the build-status block at the top, including its canon-block index line;
   - §32 Development Order — mark ✅ / ▶;
   - the package's own §31 entry — mirror the completed-entry format: what it defined, its deliverables, its standing effect on later packages;
   - add a `## 33.n Canon added by WPnn` block listing only the **new binding decisions**.
3. **Update this prompt file**: Section C's completed-package table, the A1/A2 examples, and Section D if new canon belongs in the quick reference.
4. Report in chat: what was decided, what changed upstream (if anything), what was deferred, and what the next package now needs. **Flag the judgment calls explicitly** — the ones where a different choice would have produced a different campaign.
5. **If the DM confirms the flagged calls**, promote them: retitle §1.3 from *"Design decisions taken"* to *"Design decisions — reviewed and confirmed canonical"*, note the confirmation in §2, and add anything with cross-package reach to the design doc's `## 33.n` block. A confirmed decision is canon and stops being an open question.

---

# C. Package briefs

## C0. Completed packages — what each fixed

**Read the `Final Canonical Rules` section of any package your target depends on.** This table is an index, not a substitute.

| WP | Document | Fixed |
|---|---|---|
| **WP01** | [[WP01 — Campaign State Model]] | Four village variables; four-faction reputation; five clocks; the six-stage threat ladder; 4-hour watches; the three-class resource economy; crime, evidence and investigation; infrastructure states; NPC persistence; the Illefarn state framework; the two-link cascade limit; the dashboard architecture |
| **WP02** | [[WP02 — Greybank Village]] | 143 people, 34 households; 22 keyed locations G1–G22; the seven ways in; **≈260 gp of coin in the whole village**; critical-stock placement across five locations; Defense 0–6 as manpower and muster times; fire behaviour; repair costs; the nine-project upgrade catalogue; the six-watch village day and its witness table |
| **WP03** | [[WP03 — NPC Roster]] | 28 named NPCs at three tiers; a **tonight line** for every one; starting attitudes (4 Friendly / 19 Neutral / 5 Wary); the grief map of seven permanent-Hostile deaths; seven unconnected secrets; the printable card set; the completed load-bearing death table |
| **WP04** | [[WP04 — Factions]] | Four factions, each split between two voices; Greybank's five blocs; stage-by-stage behaviour for all five clocks; the Red-Tusk branch as a determinable pressure count; the pairwise matrix of what happens when two factions meet without the party; red lines; six faction NPCs; **the four-session default if the party does nothing** |
| **WP05** | [[WP05 — Regional Map]] | Eighteen zones Z1–Z18; travel times in watches; the four crossings and **the bridge detour**; spate; faction territory and the W5 interdiction points; the Flight route; hazards staged not statted; ten discoveries; **the six-waystone arc**; foraging's honest limits |
| **WP06** | [[WP06 — Illefarn Dungeon]] | The Marrowward as a ward line; four stages, sixteen sectors, **seven systems each with a written overworld consequence**; two routes minimum through every barrier; the Listener (Type C) and the Sentinel (Type F); breaches; **what happens if the Red-Tusk leave**; the two endings of the Ward Heart |
| **WP07** | [[WP07 — Hardcore Encounter Library]] | The **eight-field encounter format** and the two prohibitions; morale as WP01 §17.1's d6; **what every escaped enemy does next session**; militia blocks at all six Defense levels; the 22 Red-Tusk, the 9 wardens, Threll's guards; **the Moorgaunt** in the Broken Quarter; the Listener and the Sentinel statted; sixteen keyed encounters and **four hazards needing no creature** |
| **WP08** | [[WP08 — Session 1]] | The starting dashboard and expected end-state range; three live problems — **the fold, the Pale, the far bank** — each with a decay to session 4; **three deadlines that fire regardless of the party**; the quarry incident and the medicine and bell lessons; **Stage I in one visit and the Watch-Glass free at level 3**; the twelve rumour cards; **unconditional milestone levelling** |

---

## C1. WP07 — Hardcore Encounter Library ✅ COMPLETE

**Objective:** A reusable encounter set that teaches the campaign's core lesson — *how do we solve this*, not *how do we kill this*.

**Consumes:** design doc §14 (Types A–F), §6 (signalling levels), §15 (enemy behaviour and morale); WP01 §12 (threat escalation), §17 (randomness); WP04, WP05, WP06.

**Owns:** encounters spanning **all six types A–F**, each with the eight mandatory fields: (1) conventional difficulty, (2) why brute force is costly, (3) telegraphing mapped to signalling levels 1–4, (4) discoverable weakness **and how it is discovered**, (5) alternative solutions, (6) failure consequences, (7) reward, (8) world-state impact as concrete state changes. Also morale triggers, retreat behaviour, and what escaped enemies do next session.

**Specifically owed to earlier packages:**

- **Militia stat blocks at each of WP02 §12.3's six Defense levels** (deferred by WP01 §3.3).
- **The Sentinel** — constraint: *no attack sequence at levels 3–6 produces a dead Sentinel.* **The Listener** — blind, hunts vibration through stone, cannot detect a creature standing in running water.
- **Whatever comes through WP06's Broken Quarter (S16)** — deliberately left empty for you.
- **22 Red-Tusk fighters** and what a 3-scout probe looks like; **nine Laughing Hollow wardens** who never fight fair or pitched; **Threll's cargo guards**.
- Whatever takes livestock at **Z4** — WP02's designated first Level-2 warning.
- **Nothing in Illefarn Stage I that can kill a careful level 3 party.**

**Must not:** balance to CR budget; design an encounter whose only solution is combat; design one with exactly one non-combat solution; make the Hollow fight a pitched battle; send Greybank's militia past the boundary stones.

**Judged by:** at least one discoverable weakness per Type C/D/F encounter that a player could plausibly find by scouting, asking an NPC, or watching.

---

## C2. WP08 — Session 1 ✅ COMPLETE

**Objective:** Establish Greybank, establish that the world is dangerous, open the Illefarn site, present several simultaneous problems. Level 3 → 4 near session end.

**Consumes:** design doc §4, §16, §26; WP01 §10, §11, §18, §19; WP02–WP07.

**Owns:** the opening; NPC introductions and which must land; the quarry incident; the first tactical encounter; the **rumour card set** with what each becomes if ignored; the session's starting dashboard state and its expected end-state range.

**Specifically owed:**

- **Bessa Ruddock in front of the party early** — the fold is the shared door into the Red-Tusk thread and the first Level-2 warning.
- An incident teaching that **the bell does not reach the quarry, fold, bunkhouse, charcoal camp or outlying farms.**
- **Illefarn Stage I enterable and completable in one visit** — and the fold gets raided while they are down there.
- **Somebody says the waystones are old and should be left alone**, before anyone is holding a hammer.
- **Malk in the Sundered Cart**, buying drinks for the quarry crew.
- Z2, Z4 and Z5 established; the Cut on the player map via Gedd Plank.

**Must not:** script player routes; require any rumour be taken; make the Illefarn opening mandatory — make it *available and attractive*.

**Judged by:** three simultaneous live problems, none mandatory, each with a written what-happens-if-ignored.

---

## C3. WP09 ▶ · WP10 · WP11 · WP12 — the session packages

**Objective:** Modular situations keyed to **world state**, never a fixed script.

**Consumes:** all prior packages; WP01 §6, §12, §18, §19; **WP04 §12.2's four-session default is your baseline** — open each package by naming which of the five columns the players moved.

**Shared requirements:**

- Build each session as a **set of situations gated on state** — *"if Red-Tusk is at W4 and Greybank Reaction ≥3, then…"* — not a sequence of scenes.
- Open with a **plausible entering-state table**: which dashboard configurations are likely, and what each implies.
- **WP09** (level 4): consequences branch; the first encounter that strongly punishes brute force; criminal and social consequences visible; ignored threats advance. The Sluice and the Listener are the level-4 set-pieces.
- **WP10** (level 4→5): escalation; alliances or enmities fix; deeper Illefarn access; one high-complexity encounter. **Spate belongs here**, once, telegraphed a day ahead through Corvin Ash — never rolled. The Sentinel's first appearance is an **information encounter the party is meant to run from**.
- **WP11** (level 5–6): a **finale matrix, not a finale**. Build it from the stage-6 outcomes of WP04 §4.5, §5.3, §6.4 and §7.3, plus WP06's two Ward Heart endings. Cover design doc §24's end states, with Mixed Outcome likeliest. **WP11 owns Instability 6** — WP06 lists the candidates and declines to choose. **WP11 must also handle the Flight consequence**: if the Red-Tusk are gone, the Sentinel is walking the arc toward the village, one waystone per night.
- **WP12**: **extends** rather than repairs. The campaign must be complete without it.
- Every session ends with WP01 §18.3's nine-step update and a dashboard snapshot.
- Account for **which zones the party actually mapped** — a party that never went west has no Hollowmarch ending available.

**Judged by:** could two groups with different session-1 outcomes both run this session without the DM improvising a new framework?

---

## C4. WP13 — Items and Rewards

**Objective:** Loot that creates strategic choices instead of numeric inflation.

**Consumes:** design doc §20; WP01 §5; WP04 (who wants what), WP06 (what the site holds).

**Owns:** Illefarn artifacts and their **keep / sell / surrender / destroy** consequence table per faction; utility items with unusual function rather than flat bonuses; consumables tied to the scarce-stock model; faction rewards per reputation tier; infrastructure components feeding WP02's upgrade catalogue.

**Specifically owed:**

- **Resonance keys** — three in the site, one held by the Hollow, each tuned to a span rather than a door.
- **The Watch-Glass** — portable, functional, and Malk will pay more for it than anything else. Selling it blinds the party permanently.
- **The workshops (S6)** are your chamber.
- **Malk's employer** is a genuine loose end. You may claim it or leave it; **if claimed it must not become a mastermind.**

**Must not:** introduce items Greybank cannot stock; grant a numeric bonus where a utility effect would do; make the waystones lootable.

**Judged by:** for each significant item, are there at least three defensible things to do with it?

---

## C5. WP14 — Player Handouts

**Objective:** Physical table objects carrying information the DM would otherwise narrate.

**Owed, already promised by earlier packages:** the **player village map** (WP02 §6) and **player exploration map** (WP05 §14), both with their omissions honoured and **no travel times printed**; the **toll-shed crossing book** with its three-month gap; **Sember's credit ledger**; the **militia roll of eighteen names**, nine of them quarry crew; **Orbal's knotted cords** (they hold Coldwell Vale *and* the Stage IV name); **Threll's contract** with the claim clause; **Malk's price list**; the **Hollow's mark on a tree**; **Bythe Ford's marker post**; the **S2 roster** whose last third is cut in a hurried hand; a **cut tablet from S6** describing the Sentinel in a maintenance register; the **Watch-Glass image** — six rings, three dark, facing north-west; the **NPC card set** (WP03 §10).

**Must not:** contain DM-only information; state clock values numerically to players.

**Judged by:** could a player learn something actionable and slightly misleading from each handout?

---

## C6. WP15 — Visual Asset Pack

**Objective:** Consistent visual reference across maps, NPCs, factions, items and environments.

**Owed:** the **DM village map** (WP02 §5 — roof material must be visible, fire depends on it) and player village map; the **DM regional map** (WP05 §13 — waystones as one distinct symbol) and player exploration map; **four Illefarn stage maps plus the section drawing** (WP06 §16 — Sentinel's circuit on the DM copy only, no player map of the interior); **22 village portraits** built on each NPC's one memorable physical fact; **six faction NPC portraits**; **four faction symbols**; item illustrations; a style guide; print sizes per design doc §27.

**Judged by:** internal consistency — one visual language across every asset.

---

## C7. WP16 — DM Control Dashboard

**Objective:** The single printable page the DM runs the campaign from.

**Consumes:** **WP01 §19 — the information architecture is fixed and must be implemented, not redesigned**; every completed package for the values.

**Owns:** the print layout; per-session refill sheets; the end-of-session update checklist as a physical form implementing WP01 §18.3's nine steps; token, clock-die and card inventories per design doc §27.

**Specifically owed:** the Red-Tusk row must show a **branch letter** (W4/C5/F6); the critical-stock block adds **blasting powder (6)**; the Illefarn block needs **sixteen sectors S1–S16, seven systems, and a breach line** — breaches are permanent and do not reset with Instability.

**Must not:** add a tracked value WP01 does not define; drop a section WP01 §19 includes.

**Judged by:** does it fit legibly on paper, and can the DM update it in under five minutes at end of session?

---

# D. Quick reference — canon a new conversation must not violate

Reproduced from `Campaign design doc.md` §33–§33.8. **The design doc is authoritative if these ever drift.**

| Thing | Canon |
|---|---|
| Village variables | Food / Trade / Defense / Unity, 0–6, start **4 / 3 / 2 / 4** |
| Reputation | −3 to +3 · Greybank 0, Laughing Hollow 0, Red-Tusk **−1**, Daggerford 0 |
| NPC attitude | Friendly / Neutral / Wary / Hostile — **independent of faction reputation** |
| Clocks | Greybank Reaction · Laughing Hollow Intervention · Red-Tusk Strategic (branches W/C/F after 3) · Daggerford Commercial · Illefarn Instability |
| Threat ladder | Sign → Incident → Escalation → Response → Collateral consequence → Regional outcome |
| Time | 4-hour watches · long rest **2 watches** · short rest **≈¼ watch** |
| Infrastructure | Improved / Intact / Damaged / Disabled / Destroyed |
| Evidence | Weak / Moderate / Strong · six-stage investigation · no courtroom subsystem |
| Investigative magic | Normal 5e rules — **not nerfed**; access is the limiter, and **Greybank has none** |
| Cascades | Stop after **two links** unless a major event changes several systems directly |
| Randomness | Deterministic stays deterministic; roll only for meaningful uncertainty |
| Illefarn state | Instability 0–6 + sector status + discovered systems + active systems + breaches |
| **Village** | **143 people · ≈260 gp of coin in the whole settlement · seven ways in · the ring is breached in four places** |
| **Village fight** | A level 3–5 party openly fighting Greybank should very probably die. **Rep −2 is quiet, not violent; −3 is mobilization** |
| **Reputation vs stock** | **Reputation changes access, not inventory.** Refused goods stay visibly on the shelf |
| **Load-bearing deaths** | Maud Elleth (medicine) · Ordga Brune (metal) · Sember Dray (imports) · **Enna Fisk (construction — unrecoverable; no joiner may ever be added)** · Gedd Plank (the road) |
| **Children** | **Pell and Wat Dray.** Their deaths turn Ondra and Ordga permanently Hostile. Telegraph that they are children |
| **Village limits** | **No villager enters the Illefarn site, ever. The militia never crosses the boundary stones** |
| **Travel** | Watches. Road 10 mi, track 8, open 7, rough 4, woodland/marsh 3. **Carts on road, track and open ground only** |
| **Crossings** | Bridge · shoal (late summer) · Anvil Gorge (foot, no cargo) · **Bythe Ford (cart detour, +4 watches, fails in spate)** · skiff (4 people) |
| **Foraging** | **Can never raise village Food.** It prevents one scheduled decline, once |
| **Daggerford** | ~40 miles, **2 days, always.** Off the map. Never sends armed help for free |
| **The site** | A **ward line**, not a vault. Six waystones are its anchors; three spans dead, facing north-west. **Nothing there advances on a timer** |
| **The Sentinel** | Not intelligent, not evil, **not killable at these levels.** Four solutions, none a fight |
| **The elves** | **Right about every fact, wrong about one possibility.** They never exaggerated, and never explain below stage 6 |
| **The default** | If the party does nothing: **Greybank loses**, slowly and legibly, having warned everyone |
| **Session 1 start** | Day 1 Afternoon · all five clocks at **1** · Rep **0 / 0 / −1 / 0** · WP02 §3.3's block verbatim |
| **Session 1 deadlines** | The bench collapse, the fold probe, Bessa's ewe. **Presence changes the scene, never the event** |
| **Do-nothing session 1** | **Greybank Reaction 2, nothing else moved.** A legitimate outcome WP09 must be able to run |
| **Levelling** | **Milestone, unconditional.** 3 → 4 at end of session 1, regardless of engagement |
| **Encounters** | **Eight mandatory fields.** No encounter has combat as its only solution, and none has exactly one non-combat solution |
| **Class gating** | **No encounter may require a specific class ability.** Written for **five PCs of unknown mix**; ±1 enemy per PC, and never adjust hazards or the Sentinel |
| **Difficulty** | **No CR budgeting, ever.** Stated difficulty describes the encounter; it never licenses moving, scaling or softening it |
| **Morale** | **WP01 §17.1's d6**, once per group per trigger. The Sentinel, the wardens and the swarms never check |
| **Escaped enemies** | Do a **named, specific thing** next session. The Sentinel is the only exception — it does not remember |
| **Militia** | Defense buys numbers, positions and warning. **Only the training project buys competence** |
| **Red-Tusk** | 1 leader, 3 scouts, 14 spear, 4 bow. **Eight is the most ever seen at once before W6.** The 39 are never statted |
| **Wardens** | **Never nine, never pitched. Two rounds, then gone**, regardless of how it is going |
| **The Sentinel** | **No hit points.** Damage under 25 leaves no mark. One round of grace at 30 ft, then three postures |
| **S16** | **The Moorgaunt** — one starving predator, there because the goblins ate the moor bare. **Killing it does not close the hole** |
| Party level | Start 3 · end 5–6 · 4 sessions, optional 5th |
| DM principle | Prepare **what happens if the players do nothing** |
