# The Broken March — WP04: Factions

**Status:** Canonical campaign faction document
**Consumes:** `Campaign design doc.md`, `WP01 — Campaign State Model.md`, `WP02 — Greybank Village.md`, `WP03 — NPC Roster.md`
**Feeds:** WP05, WP06, WP07, WP08–WP12, WP13, WP14
**Scope:** The four factions — leadership, blocs, goals, resources, methods, red lines, stage-by-stage clock behaviour, reputation effects, alliance and conflict triggers, faction NPCs, and what every faction does across four sessions if the party never touches them

WP01 built five clocks and named their stages. WP02 and WP03 built a village and filled it with people who already want incompatible things. WP04 makes the clocks run. Every stage of every clock now has a behaviour, a trigger, and a named person who does it — so a DM can advance a faction on a Tuesday night without the party in the room, and so two factions meeting each other produces a determinable outcome rather than an improvisation. It does not decide what is behind the quarry boards, where anyone lives on the regional map, or how any of these people fight.

---

# 1. Purpose and Boundaries

## 1.1 What WP04 owns

- Leadership and internal structure of all four factions, **including Greybank's own blocs**.
- Goals, resources, methods, and **red lines** — the things each faction will not do.
- **Stage-by-stage behaviour** for all five WP01 §6 clocks: what the faction actually does at each stage, given the current world state.
- **Advancement and reversal triggers**, consolidated into one place.
- The **Red-Tusk branch decision** at stage 3 — a determinable procedure, not a roll.
- Alliance and conflict triggers, and the pairwise matrix of what happens when two factions meet without the party.
- Faction-specific rewards, services and denial-of-service at each reputation tier.
- **Six faction NPCs**, in WP03's format.
- The default four-session timeline: what advances if the party does nothing.

## 1.2 What WP04 defers

| Deferred | To | Note |
|---|---|---|
| **What is actually inside the Illefarn site** | **WP06** | WP04 records what each faction *believes and claims*. **Their claims are testimony, not truth.** WP06 adjudicates. |
| Where the elves, the Red-Tusk, and the roads physically are | **WP05** | WP04 gives relative position and travel expectations only. |
| Stat blocks, warband composition, patrol strength | **WP07** | WP04 gives numbers and intent, not blocks. |
| Greybank buildings, services, stock, keys, prices | **WP02** | Unchanged. |
| Greybank NPC functions, households, services | **WP03** | Attitudes move through play; functions are fixed. |
| Which faction is behind any given session's incident | **WP08–WP12** | WP04 supplies the menu and the consequences. |
| Artifact design | **WP13** | WP04 says who wants artifacts and what they will pay. |

## 1.3 Design decisions taken

Flagged for confirmation.

| # | Decision | Reason |
|---:|---|---|
| 1 | **Each faction has an internal split**, embodied in two named NPCs who disagree. | Design doc §28 forbids cartoonishly evil factions and §7 forbids a mastermind. A faction with one voice is a monolith; a faction with two is a situation. |
| 2 | **The Red-Tusk branch is determined, not rolled** — a three-column pressure count resolved at stage 3, with the Ghesh/Orbal disagreement breaking ties. | WP01 §17: deterministic consequences stay deterministic. The campaign's largest fork should not be a die. |
| 3 | **What displaced the Red-Tusk is not specified here.** They will describe it; their description is unreliable. | WP06 owns it. It also makes the goblins a design doc §6 Level-2 signal delivered as testimony. |
| 4 | **Daggerford is two competing interests, not one.** A trading house wants stone and stability; a collector's agent wants artifacts and does not care about either. | Design doc §7.4 says *"Commercial Interests"*, plural. One clock, two agents whose success conditions conflict. |
| 5 | **The elves are correct about the danger and indifferent to Greybank's survival**, exactly as design doc §7.2 states — and they will not explain themselves. | Their refusal to justify is what makes them a problem rather than a quest-giver. |
| 6 | **Design doc §7.1's "traditionalists" are the same constituency as WP02's isolationists.** Not a sixth bloc. | Prevents drift between documents. Greybank has **five** blocs. |
| 7 | **No faction wants Greybank destroyed.** All four would prefer it functioning, for different reasons. | The campaign's threats come from incompatible goals and from the Illefarn site, not from anyone's malice. |

---

# 2. Changes to Upstream Canon

**None.**

**Four factions, as design doc §7 specifies. No fifth.** WP04 introduces no new clock, no new reputation track, and does not rename a single WP01 §6 stage. Every stage below carries WP01's exact label; WP04 supplies only the behaviour underneath it.

**Inherited unchanged:**

- WP01 §6's five clocks and all their stage names, including the Red-Tusk W/C/F branch structure.
- WP01 §4.2–4.5's per-faction reputation effect tables.
- **Starting positions:** Greybank Rep 0, Laughing Hollow 0, Red-Tusk **−1**, Daggerford 0; Illefarn Instability **1**; all other clocks at **1**.
- WP02 §8.4's five Greybank blocs and their geography.
- WP03 §8.4's three standing tensions, §3.2's roster, and its NPC format — **used here for all six faction NPCs.**

---

# 3. The Four Factions

## 3.1 At a glance

| | **Greybank** | **Laughing Hollow** | **Red-Tusk** | **Daggerford Interests** |
|---|---|---|---|---|
| **Wants** | To reach harvest, then winter, intact | The Illefarn site left closed | Somewhere to be that is not where they were | Stone, and whatever the ruins hold |
| **Method** | Moot, levy, militia, refusal of service | Observation, then obstruction, then force | Pressure, then a decision | Money, contracts, and patience |
| **Strength** | 143 people who know the ground | Competence, and time | Mobility, and nothing left to lose | Capital, and two days' distance |
| **Weakness** | Cannot mobilize and quarry at once | Too few, and they will not explain | Starving, and divided | Cannot make anyone do anything |
| **Red line** | Harm to its children | The site being opened wider | Being made to go back | Losing the stone contract |
| **Wants from the party** | That they be useful and leave | That they stop | To know which they are — enemy, partner, or obstacle | An inventory |
| **Will never** | Fight beyond the boundary stones | Explain themselves fully | Return to where they came from | Send armed help for free |

## 3.2 Starting positions

| Faction | Clock | Stage at campaign start | Party reputation |
|---|---|---|---:|
| Greybank | Greybank Reaction | **1 — Routine Governance** | **0** |
| Laughing Hollow | Intervention | **1 — Observation** | **0** |
| Red-Tusk | Strategic | **1 — Displaced Scouting** | **−1** |
| Daggerford Interests | Commercial | **1 — Rumor** | **0** |
| *(the site)* | Illefarn Instability | **1 — Dormant Disturbance** | *n/a* |

> **Read the Red-Tusk's −1 correctly.** WP01 §4.4: *"PCs viewed as probable enemies; armed negotiations possible."* They have not been wronged by this party. They have been wronged, and the party looks like the sort of people who do it.

## 3.3 One line each

- **Greybank** is a village that would like everyone to go away and let it work.
- **Laughing Hollow** is a small number of people who are right, and who have decided that explaining why is not worth the risk.
- **The Red-Tusk** are refugees with weapons, deciding this tenday whether the humans are a door or a wall.
- **Daggerford Interests** are two men who both want something from Greybank and who want different things.

---

# 4. Greybank

**[CAMPAIGN]** · WP01 §6.1 Greybank Reaction Clock · WP01 §4.2 reputation

## 4.1 Leadership

Greybank has no ruler. It has an office and a room.

| Role | Who | Power | Limit |
|---|---|---|---|
| **Reeve** | Ondra Vell (WP03 §5.1) | The labour levy, the moot chest, the granary key, and the right to call a moot | **Chosen and removable by the moot.** She can be voted out and knows it |
| **The moot** | Any adult who attends, at G11 or G9 | Decides anything the Reeve will not decide alone | Meets when called. Cannot be called if both hall and shrine are unavailable |
| **Militia captain** | Berrick Hone (WP03 §5.6) | Command of 18 names | Only at the Reeve's word, only inside the boundary stones |
| **Bloc spokesmen** | Durrow, Orrick, Dray, Hone, *(no one)* | Speak for their constituency at moot | None of them command anything |

## 4.2 The five blocs

Design doc §7.1's "traditionalists" are the isolationists here. **Five blocs, not six.**

### Quarry — 14 crew, 8 households, plus the bunkhouse six

**Speaks through:** Kael Durrow · **Lives:** H5–H12 and G15 · **Gathers:** the bunkhouse and the taproom, Evening

**Wants:** the expansion approved, the crew paid through winter, and their nine men off the militia roll.
**Fears:** the face closing. Fourteen families eat from that hole.
**Will support:** anything that keeps stone moving — bridge reinforcement, road security, Daggerford investment.
**Will oppose:** the levy, drills, and anything that stops the cut. **Including the elves, absolutely.**
**Leverage:** they are 14 of the village's 85 able adults, and **nine of them are on the militia roll**.

### Farms — 8 cott households, 3 outlying farmsteads

**Speaks through:** Tam Orrick · **Lives:** H13–H20, H32–H34 · **Gathers:** the Green after moot

**Wants:** the harvest in. It is six weeks off and they are counting days of labour.
**Fears:** the levy at the wrong six days; livestock losses; the fold.
**Will support:** the palisade, the militia, anything that protects the outlying farmsteads — **they live outside the ring**.
**Will oppose:** the expansion, if it takes hands at harvest. Goblins on the western grazing.
**Leverage:** they grow the food. Food 4 is theirs.

### Trade and craft — the Street

**Speaks through:** Sember Dray, informally and reluctantly · **Lives:** H3, H4, G3, G4, G5, G16

**Wants:** the cart on six days instead of eight. A road worth driving.
**Fears:** isolation. Every one of them depends on something arriving.
**Will support:** bridge work, road security, Daggerford involvement, **the apothecary**.
**Will oppose:** anything that closes the road or frightens merchants.
**Leverage:** Sember's ledger carries nine households (WP03 Secret S4). This bloc has quiet obligations owed to it across the other four.

### Militia advocates — cuts across all blocs

**Speaks through:** Berrick Hone · **Centred:** H1, G12

**Wants:** the ring closed, the tower manned at night, a drill that people attend.
**Fears:** the next wolf winter. Berrick's private version of this is Secret S5.
**Will support:** every WP02 §15 defensive project.
**Will oppose:** nothing, actively. This bloc's problem is that it is a mood rather than a constituency.
**Leverage:** almost none, until something happens. **Then all of it.**

### Isolationists — scattered, elderly-weighted

**Speaks through:** nobody · **Centred:** H21, and the older households

**Wants:** outsiders gone. Adventurers, elves, goblins, Daggerford men, all of it.
**Fears:** that Greybank becomes somewhere things happen.
**Will support:** refusing everyone.
**Will oppose:** every alliance, every investment, every project that brings people in.
**Leverage:** **none, while Unity ≥3.** At Unity ≤2 they become the loudest voice in the room because they are the only bloc whose position requires no cooperation.

> **This is the bloc that grows on failure.** Every other bloc needs the village to work together. The isolationists need it not to. WP08–WP12 should let Old Tarn get louder as Unity falls.

## 4.3 Unity and the blocs

WP01 §3.4 gives Unity's mechanical effects. This is what each level looks like in the room.

| Unity | The moot | Which bloc is winning |
|---:|---|---|
| 6 | Decides in one sitting | Whoever the Reeve backs |
| 5 | Accepts trusted leadership | Consensus |
| **4** | **Functional disagreement. Two sittings for anything contested** | **Nobody — starting condition** |
| 3 | Controversial policy is one step harder to carry | Quarry and farms deadlock; trade brokers |
| 2 | Major projects need opposition resolved first. **Volunteers halved — 10, not 20** | Whoever shouts. Isolationists audible for the first time |
| 1 | Theft, desertion, private deals. **Defense cannot exceed 3 by collective action** | Isolationists |
| 0 | No moot. No levy. Splinter, evacuation, or internal violence | Nobody. There is no village to win |

**Bloc-driven Unity changes:**

| Event | Unity |
|---|---:|
| A project completes that the opposing bloc predicted would fail | **+1** |
| A dispute between two blocs is settled by credible compromise | **+1** |
| The levy is called during harvest week over Orrick's objection | **−1** |
| The expansion is approved over the farms' objection, or refused over the quarry's | **−1** *(one or the other, not both)* |
| A quarryman dies at the face after the expansion was pushed through | **−1** |
| Goblins are settled on the western grazing without consensus | **−1**, per design doc §18 |
| An outsider faction is given anything the isolationists can point at, at Unity ≤2 | **−1** |

> WP01 §3.4: Unity moves **after a major scene**, not after every argument. A moot that goes badly is not automatically −1.

## 4.4 Goals, resources, methods, red lines

**Goals**, in strict priority order: **1.** Get to harvest. **2.** Get through winter. **3.** Keep the stone contract. **4.** Be left alone.

**Resources:** 143 people · 18 militia (11 prompt at Defense 2) · the labour levy · ~260 gp total liquid coin · the granary · the quarry's output · the bell · terrain knowledge · **and the ability to simply stop dealing with someone.**

**Methods:** the moot. The levy. Refusal of service. Investigation (WP01 §8). Mobilization as a last resort (WP02 §12.6). **Greybank's characteristic move is not violence — it is exclusion.**

**Red lines — Greybank will not:**

1. **Fight beyond the boundary stones.** Not for the party, not for coin, not ever.
2. **Enter the Illefarn site.** No villager, for any inducement (WP03 §14.8).
3. **Forgive harm to its children.** WP03 §8.3's grief map is permanent.
4. **Sell the granary.** Not at any price, not at any Food level.
5. **Accept a garrison** — Daggerford's, the elves', or the party's — while Unity ≥3.

## 4.5 The Greybank Reaction Clock, stage by stage

WP01 §6.1's stages, populated.

### 1 — Routine Governance · *starting stage*

Moot meets when there is business. Militia drills four times a year and is overdue. The ring gaps have been discussed for thirty years.

**Who acts:** nobody. **The party sees:** WP02 §16.1's ordinary village day.

**Advances to 2 when:** a threat becomes public knowledge (the fold, the road, the quarry) · a serious crime occurs · Food or Defense falls sharply · **outsiders are visibly interested in the site.**

---

### 2 — Concern

Ondra calls a moot she would rather not have called. Berrick asks for a drill and gets one. Rosal Tunn's Evening room gets busier and quieter.

**Who acts:** Ondra Vell (asks questions), Berrick Hone (asks for a drill), Rosal Tunn (collects).
**The party sees:** being asked where they are going. Pell following them. Old Tarn watching from H21.
**Mechanically:** WP01 §4.2's *"PCs watched"* begins here even at Rep 0.

**Advances to 3 when:** the threat recurs · a second incident occurs · the first one is not explained within two days.
**Reverses to 1 when:** the cause is resolved publicly and credibly.

---

### 3 — Organized Response

The moot appoints. Two-man patrols walk the ring gaps at Evening and Night. **The tower gets manned after dark** — WP02 §15.3, for free, out of fear rather than planning. Sensitive areas get watched: the granary, the quarry road, the store.

**Who acts:** Berrick Hone runs the patrols and is happier than he has been in a decade. Kael Durrow objects to losing men.
**Mechanically:** WP01 §8 investigations advance efficiently. Party movement at night is noticed. **WP03 §8.4's tension 1 becomes public** — Hone and Durrow argue at moot over the same nine men.

**Advances to 4 when:** the threat causes a death · a second threat opens · Food ≤2 or Defense ≤1.
**Reverses to 2 when:** the crisis credibly resolves. WP01 §6.1 permits this explicitly.

---

### 4 — Emergency Measures

Rationing if Food-driven. Curfew if threat-driven. The militia shed is opened and billhooks distributed — **and per WP02 §7 (G12), the shed's contents are finite and are now in people's houses.**

**Who acts:** Ondra Vell, using powers she has never used. Tam Orrick pulls the outlying farmsteads' families inside the ring — **Farms → Threatened** (WP02 §14.9).
**The party sees:** doors barred at Evening. Being asked to leave weapons at the taproom door. Their movements logged.
**Mechanically:** investigations advance **faster**. Controversial party activity is far more visible.

**Advances to 5 when:** the village identifies a specific enemy it believes it can act against.
**Reverses to 3 when:** the emergency passes — but the shed's contents do not automatically come back.

---

### 5 — Mobilization

Greybank acts collectively against a defined target: a monster, a warband, an invading faction, **or the party** (WP02 §12.6).

**Who acts:** Berrick Hone commands. Kael Durrow's fourteen come down the haul road — **or do not, and that is the moment tension 1 resolves.** Nissa Crake on the bell. Civilians to G7 and G9.
**Mechanically:** WP02 §12.3's manpower at the current Defense; WP02 §12.6's environment if the target is the party.

**Advances to 6 when:** the mobilization succeeds, fails, or is superseded by a decision that cannot be unmade.
**Reverses to 4 when:** the target is removed and the village stands down. **Mobilizing and standing down twice costs Unity −1** — a village cannot be called out repeatedly for nothing.

---

### 6 — Political Outcome

WP01 §6.1: *"It cannot simply tick backward. A new status quo has formed."* Greybank's available outcomes:

| Outcome | Requires | Result |
|---|---|---|
| **Evacuation** | Food ≤1 or Defense 0 with a live threat | Greybank Abandoned (design doc §24). The village empties toward Daggerford |
| **Party outlawed** | Greybank Rep −3 and a mobilization against them | Greybank content inaccessible. A runner goes to Daggerford |
| **Goblin coexistence** | Red-Tusk **C6** and Unity ≥3 | Design doc §24's Goblin Alliance |
| **Emergency militia regime** | Mobilization succeeds under Hone at Unity ≤3 | Berrick Hone displaces the Reeve in practice. Defense +1; **moot no longer binding** |
| **Elven protectorate** | Laughing Hollow **6** with the village's acquiescence | Quarry restricted permanently |
| **Commercial settlement** | Daggerford **6** | Design doc §24's Merchant Boom |
| **Fortified survival** | Defense ≥4, Food ≥3, no live existential threat | Greybank Fortified. **The quiet win** |

## 4.6 What Greybank gives and denies

WP01 §4.2 and WP02 §9.4 govern. **Faction-specific additions:**

| Rep | Greybank additionally offers |
|---:|---|
| **+3** | The **levy without a moot**. The moot chest — all 31 gp. Militia support **inside the boundary stones**. The shrine potion on request |
| **+2** | A moot called at the party's request. Volunteers for a project at half the usual argument. Free lodging (WP02 §9.4) |
| **+1** | Information freely. A household will take them in. Ordga takes their work ahead of the queue |
| **0** | Transactional. **Class B stock exists but is not volunteered** |
| **−1** | Watched. Credit refused. Pell called indoors |
| **−2** | Discretionary services refused. **Weapons requested sheathed** (WP01 §4.2). Corm Iddick's commission is the workaround (WP02 §17.4) |
| **−3** | WP02 §12.6 |

## 4.7 If the party does nothing

Greybank reaches **stage 2** in session 1 and **stage 3** by mid session 2 on the fold and the road alone. It stalls at 3 unless something kills someone. The ring gaps stay open, because at stage 3 the village patrols them instead of closing them — **which is cheaper, worse, and exactly what a village does.**

---

# 5. Laughing Hollow

**[LORE region / CAMPAIGN representatives]** · WP01 §6.2 Intervention Clock · WP01 §4.3 reputation

**[LORE]** Laughing Hollow and the forested country near Daggerford support elven and fey presence. **[CAMPAIGN]** The specific wardens who have taken an interest in Greybank are original to this campaign.

## 5.1 Who they are

Not a kingdom. Not an army. **A warden-band of nine**, of whom the party will ever see three.

| | |
|---|---|
| **Total involved** | 9 wardens. Never more than 4 near Greybank at once |
| **Ever seen by the party** | Vaerelin Ossuine, Nethra, and one nameless bow at a distance |
| **Where** | The wooded country west and south-west. **WP05 fixes the distance**; assume 1–2 watches to reach the far bank |
| **Authority behind them** | Real but slow. They can summon more. It takes a season |

**The internal split** — the disagreement that makes them a faction rather than an obstacle:

- **Vaerelin Ossuine** believes the humans cannot be told, because a village that knows will either flee or dig. **Containment through restriction.**
- **Nethra** has watched Greybank for eleven years and thinks Vaerelin is wrong — that these people can hold a line if someone explains where it is. **Containment through alliance.**

Vaerelin has authority. Nethra has been right before. **At clock stages 3–4, this argument is live**, and a party that reaches Nethra gets a different faction than one that only ever meets Vaerelin.

## 5.2 Goals, resources, methods, red lines

**Goals**, in priority order: **1.** The site stays closed. **2.** Nothing comes out of it. **3.** Nothing goes out of it into Daggerford's hands. **4.** The Hollow's own country stays untouched. **Greybank's survival is not on this list.**

**Resources:** nine competent wardens · accurate knowledge of what the site is · ward-craft · mobility · **and time, which none of the other factions have**.

**Methods:** watch first. Speak once. Remove what is portable. Disable what is exposed. Ward what remains. **They escalate slowly and they do not bluff** — every warning they give is followed through.

**Red lines — the Hollow will not:**

1. **Explain fully.** They will tell you to stop. They will not tell you everything, and pressing them is what moves the clock forward, not backward.
2. **Let an Illefarn artifact reach Daggerford.** This is the one thing that gets them to act against people rather than places.
3. **Defend Greybank.** Not from goblins, not from anything. They will let the village burn if the site stays shut.
4. **Kill villagers to close the site** — **unless at Instability 5+.** This limit is real and it has a limit.
5. **Negotiate with the Red-Tusk.** Not hostility. They regard the goblins as a symptom.

> **Design doc §7.2 in one sentence:** they may be entirely correct about the danger while being entirely indifferent to Greybank's economic survival. Play both halves. A DM who softens the indifference has removed the faction.

## 5.3 The Intervention Clock, stage by stage

### 1 — Observation · *starting stage*

Nethra is already watching and has been for years. Nobody in Greybank knows. **Pell has seen her twice** and told nobody because nobody asked.

**The party sees:** nothing. A sense of being watched on the far bank, at most.

**Advances to 2 when:** the aperture is opened or approached · the quarry cuts toward it · Instability rises to 2 · an Illefarn object leaves the site.

---

### 2 — Contact

Indirect first: a mark on a tree at the charcoal camp, a warden seen deliberately at the wood's edge. Then Vaerelin, once, at a time and place of his choosing.

**Who acts:** Nethra makes the indirect contact. Vaerelin makes the direct one.
**The party sees:** an elf standing where an elf was not, who asks what they have taken.
**Ib Sallow** (WP03 §6.13) is the villager most likely to meet them first — he is on the far bank, alone, every night.

**Advances to 3 when:** activity continues after contact · anything is removed · the party lies to them and is caught.
**Reverses to 1 when:** activity stops entirely for several days.

---

### 3 — Warning

Explicit, specific, and final. Vaerelin states the limit: *what* must not be done, *what* happens if it is. **He does not say why.**

**Who acts:** Vaerelin Ossuine, in person, once.
**The party sees:** design doc §6's **Level 3 — Explicit Warning.** After this, the campaign's fairness contract is satisfied.
**Nethra's dissent begins here.** She will find the party separately if they have given her any reason to think they will listen.

**Advances to 4 when:** the warning is ignored **once** · an artifact is sold or promised to Daggerford · Instability reaches 4.
**Reverses to 2 when:** the party visibly complies, returns what was taken, or stabilizes something.

---

### 4 — Interference

They stop asking. Wardens **remove artifacts** from wherever they are — including out of the party's camp, out of Sember's store, out of a Daggerford wagon on the road. Exposed mechanisms are disabled. Access routes are sabotaged. Other parties are misdirected.

**Who acts:** all nine, working at distance. Theft, not battle.
**The party sees:** things gone in the morning. A collapsed approach. Daggerford's factor complaining that a shipment never arrived.
**Mechanically:** this is where WP13's artifacts start *leaving* the campaign. Trade may suffer if Daggerford's cargo is what went missing.

**Advances to 5 when:** interference is answered with violence · Instability reaches 5 · a warden is killed.
**Reverses to 3 when:** the party returns everything and stops. **Expensive, and it works.**

---

### 5 — Containment

Armed patrols. Wards across approaches. The quarry road watched. **Safe passage now depends entirely on Laughing Hollow reputation** (WP01 §4.3): at 0 or below, the party is turned back or shot at; at +1 or better, they pass and are escorted.

**Who acts:** four wardens permanently near Greybank. More coming.
**The village notices.** Greybank Reaction advances — elves on the quarry road is a public threat.
**Mechanically:** the quarry cannot work. **Stone Loads stop. Every WP02 §15 stone project stalls.** This is the elves hurting Greybank without touching a villager, which is precisely who they are.

**Advances to 6 when:** containment fails, succeeds, or is broken by force.
**Reverses to 4 when:** the site is demonstrably stabilized. **WP01 §6.2's note applies: certain destructive actions permanently prevent return to stages 1–2.**

---

### 6 — Settlement

| Outcome | Requires | Result |
|---|---|---|
| **Cooperative containment** | Hollow Rep ≥ +2, site stable, Nethra's position won | The party and the wardens hold it together. Quarry restricted but working |
| **Elven control** | Hollow Rep ≤ 0 and containment succeeded | Design doc §24's **Elven Protectorate**. Permanent quarry restriction, WP02 §15.9 |
| **Withdrawal** | The party proves the site is safe | They leave. **And the party now owns the consequences** |
| **Armed confrontation** | A warden killed, or an artifact reaching Daggerford at stage 5 | Nine competent enemies with time on their side |

## 5.4 What they give and deny

WP01 §4.3 governs. Additions:

| Rep | The Hollow additionally offers |
|---:|---|
| **+3** | **Ward-craft.** They will help stabilize something. Nethra speaks openly |
| **+2** | Safe passage, and **real Illefarn information** — the first honest answers in the campaign |
| **+1** | Warnings **in advance** rather than after. Negotiation in good faith |
| **0** | Distant neutrality. Watched, not obstructed |
| **−1** | Restricted access. Nethra stops coming |
| **−2** | Active obstruction. Things go missing |
| **−3** | Armed exclusion. They will not hunt the party, but the site is closed to them permanently |

## 5.5 What they know

**They are right.** Whatever WP06 puts behind the boards, the Hollow's assessment of the danger is **accurate**, and the campaign should never reveal that they were exaggerating.

What they will actually say, at each stage: stage 2, *"what have you taken?"* · stage 3, *"do not open it further, and do not carry anything out"* · stage 5, *"this was always going to happen"* · **stage 6 with Nethra's position won, the whole truth.**

> **WP06 owns the truth. WP04 owns only that the elves have it.** A DM running stages 1–5 never has to know what is down there.

## 5.6 If the party does nothing

The Hollow reaches **stage 2** only if the quarry moves toward the aperture. Left entirely alone, they stay at **1 — Observation** for the whole campaign and Nethra watches four sessions of the party doing something else.

**This is correct and important.** The Laughing Hollow is the one faction that does not advance on its own. It advances on **what is done to the site** — which makes it the campaign's cleanest signal that the players' choices, not the clock, drive this thread.

---

# 6. The Red-Tusk

**[CAMPAIGN]** · WP01 §6.3 Strategic Clock · WP01 §4.4 reputation

## 6.1 Who they are

Sixty-one goblins who used to live somewhere else.

| | |
|---|---:|
| Total | **61** |
| Fighters | 22 |
| Non-combatants — old, young, injured | 39 |
| Wounded, from whatever displaced them | 11 |
| **Where** | Rough ground north and west, beyond the moor edge. **WP05 fixes it** |

They are **not a warband**. They are a population with weapons, and every strategic decision they make is constrained by having thirty-nine people who cannot fight and cannot travel fast.

**The internal split:**

- **Ghesh Two-Knife**, war-leader by strength, twenty-nine, has buried too many. Believes the humans will never share and that the band must **take** a place before winter. **War.**
- **Orbal the Rememberer**, old, keeper of the band's agreements and the reason anyone remembers them. Believes there was a bargain here once and could be again. **Compact.**

Neither commands. The band follows whoever is right most recently. **The stage-3 branch is this argument being settled** — see §8.

## 6.2 Goals, resources, methods, red lines

**Goals:** **1.** A place to be before winter. **2.** Food for thirty-nine mouths that do not hunt. **3.** Not going back.

**Resources:** 22 fighters · complete mobility · knowledge of the wilderness the village does not have · **and knowledge of the ruins' outer reaches, which they lived beside**.

**Methods:** scout, then pressure, then decide. They test before they commit. **Every raid before stage W4 is a probe, and probes are designed to be survivable by both sides.**

**Red lines — the Red-Tusk will not:**

1. **Go back.** Whatever is there, it is worse than war with humans. This is the band's defining fact.
2. **Abandon the thirty-nine.** Every plan carries them, which is why they are slow and why Flight is expensive.
3. **Trust a party that killed a parley.** Killing a negotiator is the one act that locks the War branch (WP01 §6.3).
4. **Attack the elves.** They regard the Laughing Hollow as weather.
5. **Take Greybank's granary by storm at 22 fighters.** They can count. They would need the village divided first.

## 6.3 Stages 1–3

### 1 — Displaced Scouting · *starting stage*

Two or three scouts, at distance, at night. Nothing taken that would be missed by a careful person.

**The party sees:** design doc §6 **Level 1 — Suspicion.** Tracks at the wood's edge. A missing hen nobody counted. Bessa Ruddock's dogs unsettled two nights running.
**Who acts:** scouts under Ghesh's instruction. **Orbal has not yet been consulted.**

**Advances to 2 when:** the band's food fails — **which it does, by mid session 2, regardless of anything the party does.**

---

### 2 — Resource Pressure

Foraging theft becomes visible. Livestock at the fold. A confrontation that both sides walk away from.

**The party sees:** design doc §6 **Level 2 — Warning.** Bessa Ruddock reporting losses (WP03 §6.7). Tracks that are unmistakably goblin.
**Who acts:** Ghesh raids. **Orbal sends a runner** — and this is the moment the campaign either has a negotiation or does not.

> **The envoy.** At stage 2 the Red-Tusk send **one goblin, unarmed, in daylight**, to the bridge or the fold. Whether that envoy is received, ignored, driven off, or killed is **the single most consequential thing that happens in the first half of the campaign** — see §8.2. It is WP01 §20's Example B arriving on the table.

**Advances to 3 when:** the envoy is answered, ignored for two days, or killed · or a raid is met with a reprisal.
**Does not reverse.** Their food does not come back.

---

### 3 — Strategic Decision

The band decides what humans are. **This is not a stage they sit in.** It resolves within a day of being reached, by the procedure in §8.

**Who acts:** Ghesh and Orbal, in front of everyone.

## 6.4 The three branches

### WAR — W4 Raiding · W5 Fortifying · W6 War

**W4 — Raiding.** Targeted, at night, against the things the village cannot protect: **the fold, the outlying farmsteads, the charcoal camp, the bunkhouse.** All outside the ring (WP02 §4.3). Not the village core — they are not stupid.
**Effect:** Food −1 per successful raid on the fold or farms. Farms → **Threatened**, then **Partially abandoned**.

**W5 — Fortifying / preparing assault.** The haul road and the north footpath get watched. Greybank's messengers to Daggerford stop arriving. **Trade −1** as the road becomes unsafe.
**Effect:** the village is being isolated before it is attacked, and Berrick Hone will say so and be right.

**W6 — War.** An assault on the ring, at the gap they have watched longest. **22 fighters against WP02 §12.3's manpower at the current Defense.** At Defense 2 this is a catastrophe; at Defense 4 with the ring closed it is a costly repulse.
**Locked if:** the party or the village killed a negotiator, or hostility became mutually existential (WP01 §6.3).

### COMPACT — C4 Negotiation · C5 Cooperation · C6 Settlement

**C4 — Negotiation.** Terms: **food, and a place**. Orbal asks for the western grazing beyond the fold — WP02 §15.8's site, which is outside the ring, upwind, out of sight of the Street. **The siting is itself the negotiation.**
**Effect:** Greybank must give **Food −1** while the arrangement holds, unless offset. Unity −1 initially (design doc §18).

**C5 — Cooperation.** Shared intelligence, shared patrols, trade. The Red-Tusk know the wilderness; Greybank has grain and a smith. **Defense +1** — WP02 §15.8.
**Effect:** the goblins tell Greybank things about the moor edge and the ruins that nobody else could. **This is where the Red-Tusk become the campaign's best source on the site's outer reaches.**

**C6 — Settlement.** Durable coexistence. Design doc §24's **Goblin Alliance**. Greybank Reaction 6 if the village accepts it formally.

### FLIGHT — F4 Withdrawal · F5 Migration · F6 Gone

**F4 — Withdrawal preparations.** Weak camps abandoned, the thirty-nine concentrated. Raids **stop** — and Greybank will misread the quiet as victory.

**F5 — Migration.** Sixty-one goblins moving through the region. **Roads become unsafe by accident rather than intent. Trade −1.** WP05 owns which routes.

**F6 — Gone.** They leave, or attach to another power.

> **WP01 §6.3's warning is the point of this branch:** *"This may expose whatever displaced them in the first place."* The Red-Tusk have been a buffer between Greybank and something to the north, and nobody in the village knows it. **Flight is the branch that looks like a win and is not.** WP06 owns what fills the gap; WP04 records only that a gap opens.

## 6.5 What they give and deny

WP01 §4.4 governs. Additions:

| Rep | The Red-Tusk additionally offer |
|---:|---|
| **+3** | Fighters — **the only faction in the campaign that will bring armed help for free** |
| **+2** | Guides through the moor edge. **What they saw at the ruins' outer reaches** |
| **+1** | A meeting that both sides survive. Minor trade — they have furs, herbs, and information |
| **0** | Mutual caution |
| **−1** | *Starting state.* Probable enemies; armed negotiation possible |
| **−2** | Ambush, sabotage, prisoners taken for leverage |
| **−3** | Kill or capture where it makes sense |

> WP01 §4.4's own note applies: **a Red-Tusk warrior may hate a specific PC at faction +2** because of a specific death. Attitude is personal (WP01 §4.6) and the goblins are not an exception.

## 6.6 If the party does nothing

**They advance regardless.** Stage 2 by mid session 2 because their food fails; stage 3 by session 3 because it keeps failing.

**Left entirely alone — no contact, no reprisal, envoy ignored — the branch resolves to WAR**, per §8.3. Not because ignoring goblins is punished, but because Ghesh's argument wins by default when nobody gives Orbal anything to point at.

---

# 7. Daggerford Interests

**[LORE settlement / CAMPAIGN agents]** · WP01 §6.4 Commercial Clock · WP01 §4.5 reputation

**[LORE]** Daggerford is a fortified frontier settlement of real regional importance. **[CAMPAIGN]** These two agents are original.

## 7.1 Who they are — and why they are two

Design doc §7.4 says *Commercial **Interests***. Plural, and they do not agree.

| | **Corben Threll** | **Serina Malk** |
|---|---|---|
| **For** | A Daggerford trading house | A private collector, unnamed |
| **Wants** | Stone, supply contracts, a commercial post, **stability** | **Illefarn artifacts.** Authenticated, portable, exclusive |
| **Needs Greybank** | Functioning and profitable | Only until the site is emptied |
| **Benefits from** | The bridge working, the quarry cutting, the road safe | **Instability.** A frightened village sells cheap |
| **Method** | Contracts, credit, investment, patience | Coin, discretion, and a standing offer |
| **Will not** | Fund anything that risks the stone contract | Buy anything she cannot authenticate |

They know about each other. They are not allies and they are not enemies — **they are two people bidding for the same village's attention with incompatible plans**, and both advance the same clock.

> **WP01 §6.4 is explicit: this is not a villain meter.** Threll's success is genuinely good for Greybank. Malk's is genuinely good for the party's purse. Neither is a trap. The cost is stated up front in every case and paid later.

## 7.2 Goals, resources, methods, red lines

**Goals:** Threll — stone, a post, a route. Malk — artifacts, before the elves get them.

**Resources:** capital far beyond anything in Greybank (WP02 §10.5: the village holds ~260 gp *total*) · contracts · the road · hired guards, for cargo only · **and two days of distance, which makes them slow and unreachable in a crisis.**

**Methods:** offers. Better offers. Contractual claims. **Neither of them ever does anything quickly.**

**Red lines — Daggerford Interests will not:**

1. **Send armed help for free.** Guards protect cargo. There is no rescue coming.
2. **Act on their own information.** They fund the party; they do not go into the ruins.
3. **Threll: fund anything that endangers the stone contract** — including the quarry expansion, if it looks likely to close the face.
4. **Malk: buy an unauthenticated object**, or one the Laughing Hollow is publicly claiming.
5. **Move faster than two days.** Ever. **This is their defining limitation and every session should honour it.**

## 7.3 The Commercial Clock, stage by stage

### 1 — Rumor · *starting stage*

Gedd Plank has mentioned the strange stone in a Daggerford yard. Nothing has come of it.

**Advances to 2 when:** an artifact or an account of one reaches Daggerford · stone shipments falter · the party sells anything unusual.

---

### 2 — Inquiry

A traveller asks questions at the Sundered Cart and leaves. **Rosal Tunn notices and mentions it** (WP03 §5.8).

**Who acts:** Malk's man first — she is faster and less careful than Threll.

**Advances to 3 when:** the inquiry finds anything · the party makes contact · Greybank's situation becomes commercially interesting.

---

### 3 — Opportunity

Offers arrive. **Both of them, and they are different offers.**

| Threll offers | Malk offers |
|---|---|
| A supply contract — goods on credit against future stone | **Coin now** for anything Illefarn, no questions |
| Repair funding for the bridge, against a claim on the crossing | A standing price list |
| Protection arrangements for the road | Discretion |

**Mechanically:** this is where WP02 §10.5's coin ceiling stops mattering. **The party can finally sell things** — and every sale advances this clock and the Laughing Hollow's.

**Advances to 4 when:** an offer is accepted.
**Reverses to 2 when:** the road becomes too dangerous or profits vanish (WP01 §6.4).

---

### 4 — Investment

Capital arrives. **Trade +1.** Equipment becomes available in Greybank that never could be before — this is the only route to imported armour, quality weapons, or a second Potion of Healing (WP02 §11.3).

**Costs, per WP01 §6.4:** influence, contractual claims, artifact removal. Specifically:
- Threll's investment comes with **a claim on the crossing or the quarry's output**.
- A trader operating from a wagon can now appear — **this is WP02 §9.3's replacement path if Sember Dray is dead.**
- Malk's purchases **leave the campaign permanently** (design doc §7.4).

**Advances to 5 when:** the investment is large enough that withdrawal would hurt Greybank more than the investor.

---

### 5 — Leverage

They ask for concessions and they are in a position to be answered: preferential contracts, a say in the moot, the expansion approved, the elves ignored.

**Who acts:** Threll, formally, at moot. **Malk does not need leverage — she needs the site open**, and at this stage she will fund anyone who will open it.

**Advances to 6 when:** the concession is granted or refused decisively.

---

### 6 — Commercial Settlement

| Outcome | Requires | Result |
|---|---|---|
| **Merchant boom** | Threll wins; Trade ≥5 | Design doc §24. Greybank wealthy, **artifacts stripped away** |
| **Commercial post** | Threll at stage 5 with Greybank Reaction ≤4 | A permanent Daggerford presence. Trade +1, and Greybank stops being self-governing in practice |
| **Sanctioned salvage** | Malk wins; Hollow Rep ≤ −1 | The site is emptied commercially. **Instability +1 minimum**, and the Hollow goes to stage 5 |
| **Monopoly** | Either, at Greybank Rep ≤ −1 | The village's stone is bought at the buyer's price |
| **Withdrawal** | Route unsafe, or agents attacked | They leave. **Trade collapses to its physical maximum** and stays there |

## 7.4 What they give and deny

WP01 §4.5 governs. Additions:

| Rep | Daggerford additionally offers |
|---:|---|
| **+3** | **Financing a WP02 §15 project outright.** Equipment access. Reports taken seriously |
| **+2** | Better terms. Commercial support. **A named contact in Daggerford** |
| **+1** | Reliable business. Malk's standing price list |
| **0** | Transactional. Payment on delivery |
| **−1** | Guarantees demanded up front |
| **−2** | Commercial support refused. **Rumours against the party in Daggerford** |
| **−3** | Treated as a threat to commerce. Bounty or legal pressure through plausible authorities |

## 7.5 If the party does nothing

Daggerford reaches **stage 2** by session 2 on Gedd Plank's gossip alone, and **stalls at 2**. This clock is almost entirely player-driven: it advances when the party sells something, asks for something, or lets the village's crisis become visible from two days away.

**The exception:** if the stone shipments stop for six days — a quarry closure, a broken bridge, a dead carter — **Threll comes to find out why**, and the clock reaches 3 without the party doing anything at all.

---

# 8. The Branch Decision

The campaign's largest fork. WP01 §6.3 states that Red-Tusk strategy branches at stage 3 into **War**, **Compact** or **Flight**. This section makes that determinable.

## 8.1 When it resolves

Within **one day** of the Strategic Clock reaching stage 3. The band does not sit in stage 3 — it is a meeting, not a condition.

**The DM resolves it away from the table**, using §8.3, and the players learn the result from what happens next.

## 8.2 The envoy

At **stage 2**, the Red-Tusk send one goblin, unarmed, in daylight, to the bridge or the fold. Orbal sends them over Ghesh's objection.

This is WP01 §20's Example B made concrete, and it is **the single most consequential event in the first half of the campaign.**

| What the party or village does | Effect on the branch |
|---|---|
| Receives them, hears them out, both walk away | **Compact +2** |
| Receives them and offers something concrete | **Compact +3** |
| Turns them away without violence | **Compact +1** *(they came, and they lived)* |
| Ignores them for two days | **War +1.** Orbal's argument loses its evidence |
| Drives them off with threats | **War +2** |
| **Kills them** | **War +3, and the War branch locks** (WP01 §6.3) |

> **Telegraph the envoy as an envoy.** Unarmed, daylight, alone, open ground. Design doc §6's Level 3 obligation applies in reverse — the party must be able to *see* that this is a parley before they decide what to do about it. A DM who lets an ambiguous goblin get shot has failed the fairness contract, not the players.

## 8.3 The pressure count

Score all three columns at the moment stage 3 is reached. **Highest total wins.**

### WAR

| Condition | Points |
|---|---:|
| An envoy or negotiator was killed | **+3 — and locks the branch** |
| Red-Tusk Reputation ≤ −2 | +2 |
| Goblins killed by party or village, per incident *(max 2)* | +1 |
| A raid was answered with a reprisal raid | +1 |
| Nobody has offered food or territory | +1 |
| Greybank Reaction ≥ 4 — the village is visibly arming | +1 |
| The envoy was ignored or driven off | +1 to +2 *(§8.2)* |

### COMPACT

| Condition | Points |
|---|---:|
| The envoy was received and both sides walked away | +2 to +3 *(§8.2)* |
| Red-Tusk Reputation ≥ 0 | +2 |
| Food or territory has been concretely offered | +2 |
| A shared enemy exists **and both sides know it** | +2 |
| A goblin life was saved by party or village | +1 |
| Orbal has spoken directly with anyone from Greybank | +1 |
| Greybank Unity ≥ 3 — the village *could* agree to something | +1 |

### FLIGHT

| Condition | Points |
|---|---:|
| Illefarn Instability ≥ 4 — what displaced them is getting worse | +3 |
| Six or more of the 22 fighters lost | +2 |
| War is unwinnable: Greybank Defense ≥ 4 **and** the ring closed | +2 |
| Something has come out of the site that they recognise | +2 |
| A viable elsewhere exists *(WP05)* | +1 |
| No compact has been offered by anyone | +1 |

## 8.4 Ties

A tie is resolved by the Ghesh/Orbal argument, in front of the band, and the DM should write one paragraph of it even though no player will hear it.

| Ghesh wins the tie if | Orbal wins the tie if |
|---|---|
| More goblins have died since the last count | **Any human has kept a word given to them** |
| The village is visibly armed | Anyone in Greybank has spoken to Orbal by name |
| A raid succeeded recently | The party returned a body, a prisoner, or a possession |

If none of these apply either way: **Ghesh wins.** He is louder, he is younger, and the band is frightened.

## 8.5 After the branch

| Question | Answer |
|---|---|
| Can the branch change? | **W4→C4 and F4→C4 yes, expensively. C4→W4 yes, instantly, on a betrayal.** W5, W6, C6, F5 and F6 do not revert |
| What moves War back toward Compact? | Returning prisoners; a costly gift of food; **killing whatever displaced them.** All three, realistically |
| What moves Flight back toward Compact? | Offering a place *before* migration begins. After F5 they are already moving |
| Does W6 ever unlock? | No. WP01 §6.3 — *"locked if PCs massacre negotiators; existential hostility becomes mutual"* |

## 8.6 Fairness

Per design doc §29, the players must be able to see this fork coming. Three signals, in order:

1. **Level 1, session 1:** tracks, a missing hen, Bessa's dogs unsettled.
2. **Level 2, session 2:** livestock losses that are unmistakably goblin, and **Bessa Ruddock saying so to their faces**.
3. **Level 3, session 2–3:** the envoy. Unarmed, daylight, open ground.

If the party has seen all three and still kills the envoy, the War branch is theirs and the DM should let it stand.

---

# 9. Alliance and Conflict

## 9.1 What each thinks of the others

| ↓ thinks of → | **Greybank** | **Laughing Hollow** | **Red-Tusk** | **Daggerford** |
|---|---|---|---|---|
| **Greybank** | — | Nobody has seen an elf in a generation. Half the village thinks they're a story | Vermin, until the envoy. Then *an argument* | The people who buy our stone and set the price |
| **Laughing Hollow** | Diggers. Not malicious, not trustworthy, and **not their responsibility** | — | A symptom. Something moved them; that is the only interesting fact about them | **The actual danger.** Merchants take things away and do not stop |
| **Red-Tusk** | Grain, walls, and 143 people who have never been hungry | Weather. Old, dangerous, uninterested | — | Wagons. Wagons are food |
| **Daggerford** | A supplier with a delivery problem | A rumour that complicates title | A road hazard, and an excuse to price protection | — |

## 9.2 When two meet, and the party is not there

**The judging test for this document.** Each row is what happens by default; the DM should be able to run it from this table alone.

### Greybank × Laughing Hollow

| Stage | What happens |
|---|---|
| Hollow 1–2 | **Nothing.** No villager sees an elf. Ib Sallow may, and will tell the taproom, and be disbelieved |
| Hollow 3 | Vaerelin speaks to **Ondra Vell**, once, at the shrine — because it is the one building his people recognise. He states the limit. **He will not explain.** Ondra writes it down |
| | *Greybank Reaction +1.* Ondra brings it to moot. **The quarry bloc rejects it outright** — Durrow's fourteen eat from that face |
| Hollow 4 | Things go missing from the village. Suspicion falls on the party, on Daggerford, on the goblins — **rarely on the elves**, because nobody has seen one |
| Hollow 5 | Wardens on the quarry road. **The quarry stops. Stone Loads stop.** This is a public crisis: *Greybank Reaction → 4 minimum*, and the isolationists get loud |
| Hollow 6 | Elven protectorate if Greybank acquiesces — which it does at **Unity ≤2**, and refuses at Unity ≥4 even at the cost of the quarry |

> **Greybank cannot fight the Laughing Hollow and will not try.** It will comply resentfully, or it will send to Daggerford — which is how these two factions actually collide: **through Threll.**

### Greybank × Red-Tusk

| Stage | What happens |
|---|---|
| RT 1 | Nothing. Tracks dismissed as wolves |
| RT 2 | Livestock losses. **Bessa Ruddock demands the militia do something.** Berrick wants to; Durrow will not give up the men. WP03 §8.4 tension 1, in public |
| RT 2, envoy | **Without the party, Ondra Vell receives the envoy** — she is the Reeve and it is her job. She hears them out and promises nothing, because she cannot promise food six weeks before harvest. **Compact +1, not +2** |
| RT W4–W5 | Raids on the fold and the outlying farms. *Greybank Reaction → 4, then 5.* Farms **Threatened → Partially abandoned**. **Food −1, then −1** |
| RT W6 | 22 fighters against WP02 §12.3. **At Defense 2 the village loses the outer ring and holds the core with casualties.** At Defense 4 with the ring closed, it repels them at a cost |
| RT C4–C6 | Only reachable **with the party's involvement.** Left alone, Ondra cannot deliver a compact — she has no mandate, no food to spare, and a quarry bloc that will vote it down |

> **This is the campaign's most important default:** without the party, Greybank and the Red-Tusk go to war. Not from malice — from a Reeve who cannot promise grain and a war-leader whose people are starving.

### Greybank × Daggerford

| Stage | What happens |
|---|---|
| Dagg 1–2 | Ordinary trade. Gedd Plank's cart, every six days, sometimes eight |
| Dagg 3 | Threll's offer goes to **Ondra Vell**, who reads the contract three times and is right to. The trade bloc wants it; **Orrick's farms don't care; Durrow's quarry wants it badly** |
| Dagg 4 | Investment. **Trade +1.** And a claim on the crossing or the quarry's output — Ondra will take it if Food ≤3, and refuse it at Food ≥4 |
| Dagg 5 | Threll asks for a say. **Unity −1** at the moot that decides |
| Dagg 6 | Commercial post: Greybank prospers and stops governing itself. Ondra Vell resigns rather than sign — *and the moot appoints Tam Orrick, who signs* |

### Laughing Hollow × Red-Tusk

**They do not fight.** This is the pairing most DMs expect to be hostile and it is not.

The Hollow regards the goblins as a **symptom** — something moved them, and that something is the Hollow's actual concern. The Red-Tusk regard the elves as **weather**: old, dangerous, and not interested in them.

| Situation | What happens |
|---|---|
| A warden and a goblin scout meet in the wilderness | Both withdraw. Neither reports it as significant |
| Red-Tusk on the Flight branch, migrating | The Hollow **lets them pass** and watches carefully — *"they are leaving; what are they leaving because of?"* |
| Red-Tusk raid a party carrying Illefarn artifacts | **The one case where their interests align.** The elves will not thank them and will take the artifacts afterwards |
| The party tries to broker an alliance between them | **It fails, and both sides think less of the party for asking.** Neither believes the other has anything to offer |

### Laughing Hollow × Daggerford

**The campaign's real rivalry.** Both want what comes out of the site, for opposite reasons.

| Stage combination | What happens |
|---|---|
| Hollow ≤3, Dagg ≤3 | Nothing. Malk has heard there may be elves and has discounted it |
| Hollow 4, Dagg 4 | **Wardens intercept Daggerford cargo.** Wagons arrive short. Threll blames bandits, raises prices, hires guards. **Malk correctly guesses elves and starts buying faster** |
| Hollow 4–5, Dagg 5 | Threll petitions Daggerford for an escort. **It takes a season and the campaign will end first** |
| Hollow 5, Malk at 5 | Malk funds anyone who will open the site against the wardens. **This is how the Hollow reaches stage 6 armed confrontation without the party ever being involved** |
| Either reaches 6 first | The winner sets the region's outcome. Hollow 6 = protectorate; Dagg 6 = sanctioned salvage |

> **Malk versus the Hollow is a race, and the party is the vehicle both would prefer to use.** If neither can use the party, they use each other's absence.

### Red-Tusk × Daggerford

| Situation | What happens |
|---|---|
| RT 1–2 | Nothing. The goblins have not reached the road |
| RT W5 | **The road becomes unsafe. Trade −1**, and this is how the Red-Tusk hurt Daggerford without meeting them |
| RT W5+, Threll | Threll **prices protection** rather than providing it. He will sell Greybank guards for the road at a rate the village cannot afford |
| RT F5, migrating | Roads unsafe by accident. Threll withdraws — *"route too dangerous"* — and the Commercial Clock **reverses** per WP01 §6.4 |
| Malk × Red-Tusk | **Malk will buy from goblins.** If the Red-Tusk have anything Illefarn from their old home, she will pay for it, and neither the village nor the elves will know until it is gone |

## 9.3 Alliance triggers

| Alliance | Requires | Result |
|---|---|---|
| **Greybank + Red-Tusk** | Compact branch C4+, Unity ≥3, Reeve's agreement, Greybank Rep ≥ +1 | Defense +1, Food −1. Design doc §24 Goblin Alliance |
| **Greybank + Laughing Hollow** | Hollow Rep ≥ +2, village accepts the quarry restriction (Unity ≥3) | WP02 §15.9 Elven Ward. Stone Loads halved |
| **Greybank + Daggerford** | Dagg clock 4+, contract signed | Trade +1, and a claim against the village |
| **Party + Hollow, against Malk** | Hollow Rep ≥ +2 and refusing to sell artifacts | The Hollow's only offered partnership. **Nethra's position winning** |
| **Party + Threll, against instability** | Dagg Rep ≥ +2 and Instability ≤3 | Funding for WP02 §15 projects outright |
| **Red-Tusk + Hollow** | **Not available.** §9.2 | — |

## 9.4 Conflict triggers

| Conflict | Trigger | Consequence |
|---|---|---|
| Greybank vs party | Rep −3 and a mobilization | WP02 §12.6 |
| Greybank vs Red-Tusk | The War branch | §6.4 W4–W6 |
| Hollow vs party | An artifact reaching Daggerford at Hollow stage 4+ | Hollow → 5. Theft, then obstruction |
| Hollow vs Daggerford | Malk's purchases crossing stage 4 | Cargo interception. §9.2 |
| Hollow vs Greybank | The quarry cutting the aperture wider | Hollow → 5. **Stone stops** |
| Red-Tusk vs Daggerford | W5 road interdiction | Trade −1; Threll prices protection |
| Party vs Malk | Selling to the Hollow instead | Dagg Rep −1, rumours in Daggerford |

## 9.5 The three-way problems

Two situations where three factions collide and the DM should know the answer in advance.

**The artifact.** The party holds one Illefarn object. **The Hollow wants it returned, Malk wants it bought, Greybank wants it sold to fund the palisade.** All three are watching. Selling it: Dagg +1 clock, Hollow +1 clock, Greybank Rep +1 if the coin visibly benefits the village. Returning it: Hollow Rep +1, Dagg Rep −1, and Greybank never sees the money. **There is no option that satisfies two of them.**

**The grazing.** The Red-Tusk want the western ground at C4. **The farms bloc lives closest to it, the quarry bloc does not care, the isolationists will fight it, and Threll regards goblins on the road as a commercial risk.** Granting it: Unity −1 immediately, Defense +1 at C5, Dagg Rep −1. Refusing it: Compact fails and the branch drifts toward War.

---

# 10. What Each Faction Uniquely Provides

The cross-faction shopping list. **Nothing here is available from more than one source**, which is what makes reputation a currency rather than a score.

| Only from | At | What |
|---|---|---|
| **Greybank** | Rep +2 | Twenty volunteers, a moot at request, and the labour levy |
| **Greybank** | Rep +3 | The moot chest, the shrine potion, and militia support inside the boundary stones |
| **Laughing Hollow** | Rep +2 | **Honest answers about the site** — the only true information in the campaign that is freely given |
| **Laughing Hollow** | Rep +3 | Ward-craft. The ability to stabilize rather than merely close |
| **Red-Tusk** | Rep +2 | Guides through the moor edge, and what they saw at the ruins' outer reaches |
| **Red-Tusk** | Rep +3 | **Fighters. The only faction that brings armed help for free** |
| **Daggerford** | Rep +2 | Access to goods that cannot exist in Greybank — imported armour, a second potion, quality weapons |
| **Daggerford** | Rep +4 clock | **Capital.** The only way to fund a WP02 §15 project without the village's own hands |
| **Daggerford (Malk)** | any | **A buyer.** The only party in the region who can pay real money for an artifact (WP02 §10.5) |

> **Every one of these costs another faction something.** That is the design. A party that maximizes all four reputations has not understood the campaign; a party that picks two and pays for it has.

---

# 11. Red Lines

Master list. **A faction that crosses its own red line has been written badly.**

| Faction | Will not | Even if |
|---|---|---|
| **Greybank** | Fight beyond the boundary stones | The party pays, begs, or is dying 200 yards past them |
| | Enter the Illefarn site | Any inducement (WP03 §14.8) |
| | Forgive harm to its children | Rep +3, years pass, or it was an accident |
| | Sell the granary | Food 6 and a good offer |
| | Accept a garrison at Unity ≥3 | Daggerford's, the elves', or the party's |
| **Laughing Hollow** | Explain fully below stage 6 | Asked politely, repeatedly, at Rep +2 |
| | Let an artifact reach Daggerford | It costs them the party's goodwill entirely |
| | Defend Greybank | The village burns |
| | Kill villagers to close the site | **Unless Instability ≥5.** This limit has a limit |
| | Negotiate with the Red-Tusk | The party brokers it perfectly |
| **Red-Tusk** | Go back | Offered anything |
| | Abandon the thirty-nine | It costs them the war |
| | Trust a party that killed a parley | Reparations, gifts, or years |
| | Attack the Laughing Hollow | Paid to |
| | Storm the granary at 22 fighters | Starving — **unless the village is already divided** |
| **Daggerford** | Send armed help for free | Anyone dies |
| | Go into the ruins themselves | The party refuses to |
| | *Threll:* risk the stone contract | The profit looks good |
| | *Malk:* buy unauthenticated goods | Cheap |
| | Move faster than two days | Ever |

---

# 12. Running the Clocks

## 12.1 Consolidated triggers

One table. WP01 §10.3 applies — **check only clocks that are currently relevant**, not all five every watch.

| Clock | Advances on | Reverses on |
|---|---|---|
| **Greybank Reaction** | Public threat · serious crime · Food or Defense falling sharply · a death · outsiders visibly interested in the site · a second simultaneous threat | The cause resolving publicly and credibly. **Stages 1–5 only; 6 does not revert** |
| **Laughing Hollow** | The aperture opened or approached · quarry cutting toward it · Instability rising · an artifact leaving the site · a warning ignored · an artifact promised to Daggerford · a warden killed | Activity stopping · artifacts returned · demonstrable stabilization. **Destructive acts can permanently bar return to 1–2** |
| **Red-Tusk** | **Their food failing — automatic, session 2** · the envoy resolving · a raid met with reprisal | Does not reverse below 2. Branches may shift per §8.5 |
| **Daggerford** | An artifact or account reaching Daggerford · the party selling something unusual · an offer accepted · stone shipments stopping for six days | Route too dangerous · profits vanishing · agents attacked |
| **Illefarn Instability** | WP06 owns this. WP04 adds only: **quarry expansion +1** (WP02 §15.7) · **sanctioned salvage +1 minimum** (§7.3) | WP06 owns |

## 12.2 If the party does nothing — the four-session default

**WP01 §22's DM operating principle: prepare what happens if the players do nothing.** This is that preparation. Every entry assumes zero player involvement.

| | **Greybank** | **Hollow** | **Red-Tusk** | **Daggerford** | **Instability** |
|---|---|---|---|---|---|
| **Start** | 1 | 1 | 1 | 1 | 1 |
| **Session 1** | **2** — the fold, and questions at moot | 1 | 1 — tracks, a missing hen | 1 | 1 |
| **Session 2** | **3** — patrols, tower manned at night out of fear | 1 | **2** — their food fails. Livestock at the fold. **The envoy comes** | **2** — Gedd's gossip reaches a Daggerford yard | 1 |
| **Session 3** | **4** — a death at the fold or the farms. Rationing or curfew | 1 | **3 → W4.** Nobody answered Orbal. **Raiding begins** | 2 | 1 |
| **Session 4** | **5** — mobilization against a defined enemy | 1 | **W5** — road watched, village isolating. **Trade −1** | 2, or **3** if shipments stopped | 1 |
| **End state** | Reaction 5, Food 2, Defense 2, Unity 3, Farms partially abandoned | **1 — Observation.** Nethra watched four sessions of nothing | **W5**, preparing an assault the village cannot repel at Defense 2 | 2–3 | **1** |

**Read this table carefully. It says four things:**

1. **The Red-Tusk drive the campaign if nobody else does.** Theirs is the only clock that advances on its own biology.
2. **The Laughing Hollow does not move at all.** Their thread is entirely player-driven, and a party that never touches the site never meets an elf. That is correct.
3. **Illefarn stays at 1.** The site does not wake by itself. **Somebody has to open it** — the party, or the quarry expansion, and the quarry expansion needs the party to fund it or Daggerford to.
4. **Greybank ends session 4 at Reaction 5 with Defense 2 and a warband forming.** The default outcome of this campaign is **the village losing**, slowly and legibly, over four sessions in which it warned everyone.

> **This is the baseline the party is being invited to change.** Every session package should start by asking which of these five columns the players moved, and by how much.

## 12.3 Cross-clock effects

Clocks push each other. **WP01 §16's two-link cascade limit applies: one clock advancing may push at most one other clock, and that second clock pushes nothing.**

| When this | This moves | Note |
|---|---|---|
| Instability reaches 2 | **Hollow +1** | The single most reliable cross-clock link in the campaign |
| Instability reaches 4 | **Red-Tusk: Flight +3** in the §8.3 count | What displaced them is getting worse |
| An artifact reaches Daggerford | **Hollow +1** and **Daggerford +1** | The exception: a major event directly touching two systems (WP01 §16) |
| Hollow reaches 5 — quarry stopped | **Greybank Reaction +1** | Public crisis. Stone Loads stop |
| Red-Tusk reaches W5 — road watched | **Daggerford −1** or stall | *"Route too dangerous"* (WP01 §6.4) |
| Greybank Reaction reaches 5 | **Red-Tusk: War +1** in the §8.3 count | The village is visibly arming |
| Quarry expansion approved | **Instability +1** | WP02 §15.7. The stated price |
| Stone shipments stop 6 days | **Daggerford +1** | Threll comes to find out why |

## 12.4 Reversal

Three rules:

1. **Reversal is always more expensive than advancement**, and it should be visible how much.
2. **Stage 6 never reverts** on any clock. WP01 §6.1: *"a new status quo has formed."*
3. **Some doors close permanently.** WP01 §6.2 — destructive acts can bar the Hollow from returning to 1–2. WP01 §6.3 — killing negotiators locks War. Design doc §22: choices may permanently close content, and that is acceptable.

---

# 13. Faction NPCs

**WP03's format**, as its handoff requires. Six people. There is not a second NPC standard in this campaign.

---

## 13.1 Vaerelin Ossuine — Warden-speaker, Laughing Hollow

**Wood's edge and the far bank · Attitude: Neutral · [CAMPAIGN]**

**Portrait.** A moon elf who has been doing this a long time and dresses for weather rather than for meeting anyone. Carries a bow he does not draw. **The stillness is the memorable thing** — he does not shift his weight while he waits for an answer.

**Voice.** Answers the question asked and stops. Long pauses that are not invitations. Never repeats himself.

| WANT | FEAR | RESOURCE |
|---|---|---|
| The site closed and left closed | Being right too late — again | **The truth about the site**, which he will not give below stage 6. Ward-craft. Eight others |

**Attitude.** Neutral, and it moves on **conduct at the site**, nothing else. Courtesy does not affect him. Neither does rudeness.

**Knows.** What is behind the boards **(WP06 owns it; he has it)**. What happened the last time. That the Red-Tusk were displaced by it and that this is the clearest evidence anyone has.

**Tonight.** Somewhere on the far bank with a view of the quarry road, waiting for a reason.

**If he dies.** The Hollow goes to **stage 5 immediately** and **Nethra's position dies with him** — she cannot carry an argument against a martyr. This is the fastest route to armed confrontation in the campaign.

**Hook.** He gives exactly one explicit warning (stage 3) and then acts. A party that treats his brevity as hostility will misread the whole faction.

---

## 13.2 Nethra — Warden-scout, Laughing Hollow

**Has watched Greybank for eleven years · Attitude: Neutral, and the only Hollow attitude that moves on courtesy · [CAMPAIGN]**

**Portrait.** Younger than Vaerelin and dressed like someone who spends her life within sight of humans without speaking to them. **She has a villager's habit of glancing at the tower when she talks** and does not know she does it.

**Voice.** Asks about people by name — *"the one with the ledger"*, *"the child who runs"* — and is embarrassed to be caught knowing them.

| WANT | FEAR | RESOURCE |
|---|---|---|
| To tell Greybank the truth and be allowed to | That Vaerelin is right and she is about to get 143 people killed by trusting them | **A second opinion inside the Hollow.** Eleven years of observation. **Pell has seen her twice** |

**Attitude.** Neutral. **Moves +1 the first time the party keeps a promise to anyone**, villager or otherwise. She has been keeping score for eleven years.

**Knows.** Greybank by name and habit — better than Daggerford does. What Vaerelin knows. **That the quarry has been cutting toward the aperture for two years and nobody in the village has noticed.**

**Tonight.** On the knoll above the burial ground, in the dark, watching the village she is not allowed to warn.

**If she dies.** The Hollow loses the only voice arguing for alliance. **Cooperative containment (§5.3, stage 6) becomes unreachable.**

**Hook.** She is the campaign's most valuable NPC that the party has to *earn* rather than find. Reaching her converts the Laughing Hollow from an obstacle into a faction.

---

## 13.3 Ghesh Two-Knife — War-leader, Red-Tusk

**With the band · Attitude: Hostile at start, per Red-Tusk Rep −1 · [CAMPAIGN]**

**Portrait.** Twenty-nine and lean in the way of someone who has been giving his share away. Scarring across the jaw from whatever they ran from. **Both knives are new** — he has replaced them since.

**Voice.** Short, declarative, and repeats the important part twice. Speaks Common badly and deliberately, so nobody assumes he is confused.

| WANT | FEAR | RESOURCE |
|---|---|---|
| A place, before winter, by any means | Burying more of the thirty-nine | **22 fighters.** Complete mobility. Knowledge of the ruins' outer reaches |

**Attitude.** **Hostile**, and the only starting Hostile in the campaign. Moves to Wary the first time a human keeps a word. Moves to Neutral if the party fights something beside him.

**Knows.** What displaced them — **and his description is testimony, not truth (WP06 adjudicates).** Every approach to Greybank. Exactly how many fighters the village has, because he has counted them twice.

**Tonight.** Awake, walking the edge of the camp, counting his people again.

**If he dies.** **Orbal's position wins by default** — Compact +3 in the §8.3 count. But if the party killed him, add **War +3** first, and the two do not cancel: the band goes to war *and* nobody is leading it well.

**Hook.** He is not a villain and should never be played as one. He is a young man with 61 dependents and 22 spears, and he has done the arithmetic.

---

## 13.4 Orbal the Rememberer — Red-Tusk

**With the band · Attitude: Wary · [CAMPAIGN]**

**Portrait.** Old for a goblin, small, and carries a bundle of knotted cords that is the band's entire written record. **Missing most of one ear**, ancient injury.

**Voice.** Tells you what was agreed, by whom, and when — including agreements from before anyone present was born. Treats a promise as an object.

| WANT | FEAR | RESOURCE |
|---|---|---|
| A bargain. Any bargain that holds | That the cords end with her, and the band forgets there was ever another way | **The band's memory** — including old agreements with people in this region. **The envoy is hers** |

**Attitude.** **Wary**, not Hostile — she is the exception to the faction default, and a party that notices this has learned something.

**Knows.** That there were arrangements here before. The old routes. **What the band lived beside, in more detail than Ghesh and with less certainty.**

**Tonight.** Sitting with the thirty-nine, telling them something that happened eighty years ago, because it is the only thing she has to give them.

**If she dies.** **The Compact branch becomes unreachable.** Ghesh wins every tie, permanently. If the party killed her, the War branch **locks** — she is a negotiator by definition (WP01 §6.3).

**Hook.** She sends the envoy at stage 2 over Ghesh's objection. She is the reason the campaign has a peaceful branch at all.

---

## 13.5 Corben Threll — Factor, Daggerford trading house

**Two days away · Attitude: Neutral · [CAMPAIGN]**

**Portrait.** Fifties, travels with a clerk and a strongbox, and is visibly uncomfortable more than a day from a decent bed. **Wears good boots, badly maintained** — he does not walk if he can ride.

**Voice.** Restates your position back to you more favourably than you put it, then names a number. Says *"let's be practical"* before every hard clause.

| WANT | FEAR | RESOURCE |
|---|---|---|
| A supply contract and a commercial post | The stone contract collapsing on his watch | **Capital** — more than exists in Greybank by an order of magnitude (WP02 §10.5). Credit. Contracts. Hired guards, **for cargo only** |

**Attitude.** Neutral and **strictly performance-based.** He likes people who deliver and is unmoved by anything else.

**Knows.** What everything is worth. That Greybank has no idea what its stone is actually valued at in Daggerford. **That there is something odd about the quarry, and that he would rather it stayed a rumour** — an investigation is a delay.

**Tonight.** In Daggerford, two days away, reading a shipment ledger and noticing that Greybank is late again.

**If he dies.** The house sends someone worse. **The Commercial Clock does not reverse** — Daggerford's interest survives the individual.

**Hook.** He is the only route to funding a WP02 §15 project without the village's own hands, and every coin comes with a claim attached.

---

## 13.6 Serina Malk — Collector's agent

**Wherever the site is · Attitude: Neutral · [CAMPAIGN]**

**Portrait.** Thirties, travels alone and light, and is the only outsider in the campaign who arrives in Greybank without an escort and is not worried about it. **Keeps her hands still and visible**, always, which is a trained habit.

**Voice.** Pleasant, direct, and asks the question everyone else is avoiding. Never haggles — names one price and lets the silence work.

| WANT | FEAR | RESOURCE |
|---|---|---|
| Illefarn artifacts, authenticated and exclusive | The Laughing Hollow reaching the site first | **A buyer.** The only real money in the region. A standing price list, and no questions |

**Attitude.** Neutral. **Does not move.** She is transactional by profession and treats affection as a discount she has not offered.

**Knows.** What artifacts are worth to a collector, which is far more than Threll would pay. **That there are elves involved, and she has decided this is a reason to hurry rather than to stop.**

> **Her secret is her employer, and she does not know much about them either.** She was hired by letter, is paid by letter, and has never asked. **WP13 owns what the collector actually wants. This is a genuine loose end, not a concealed plot.**

**Tonight.** In the Sundered Cart, buying drinks for the quarry crew and asking pleasant questions about the lowest bench.

**If she dies.** **The only buyer in the region is gone.** Artifacts become unsellable at value, WP02 §10.5's coin ceiling reasserts itself, and the Hollow's problem solves itself for free.

**Hook.** She is the campaign's most dangerous NPC and she never threatens anyone. She simply offers the party more money than Greybank contains, for the one thing the elves have told them not to sell.

---

# 14. Worked Examples

---

## 14.1 Example A — The envoy arrives and the party is elsewhere

**Situation.** Mid session 2. The Red-Tusk Strategic Clock reaches stage 2; their food has failed. Orbal sends the envoy. **The party is at the quarry that day.**

### A1. What happens without them

Per §9.2, **Ondra Vell receives the envoy** — she is the Reeve and it is her job.

One goblin, unarmed, at the bridge in the Morning watch. Denk Ottersby sees them first and rings nothing, because they are alone and empty-handed. Berrick Hone arrives with four militia and does not attack, because Ondra tells him not to.

**Ondra hears them out and promises nothing.** She cannot: harvest is six weeks off, Food is 4, and giving grain to goblins is not a decision a Reeve makes without a moot.

### A2. The branch count moves

Per §8.2, the envoy came and lived: **Compact +1** — not +2, because nothing was concretely offered.

Running the §8.3 count as it stands:

| Column | Points | From |
|---|---:|---|
| **War** | 2 | Nobody has offered food or territory (+1); Red-Tusk Rep still −1, not ≤−2 (0); envoy received, so no penalty; Greybank Reaction 3, not ≥4 (0). Plus **+1** — Ghesh raids anyway while the parley happens |
| **Compact** | 2 | Envoy received and both walked away (+1); Unity 4 ≥3 (+1) |
| **Flight** | 1 | No compact offered (+1). Instability still 1 |

**Tied 2–2.** Per §8.4: has any human kept a word given to them? **No.** Has anyone spoken to Orbal by name? **No.** Ghesh wins the tie.

> **Branch: WAR.** Not because the village was cruel — because a Reeve who could not promise grain met a war-leader whose people are starving, and nobody gave Orbal anything to point at.

### A3. What the party learns, and when

They come back from the quarry that evening to a taproom talking about it. Rosal Tunn has the whole story by the Evening watch (WP03 §5.8).

**They have roughly two days** before W4 raiding begins. If they move — reach Orbal by name, take food to the band, return something — the branch can still shift (§8.5: W4→C4 is expensive but open).

### A4. The point

The world advanced correctly in their absence, the outcome was determined rather than rolled, and it is **still reversible if they act fast**. Design doc §16: the party should never be able to resolve everything, and the cost of choosing the quarry that day is legible.

---

## 14.2 Example B — Selling an artifact to Serina Malk

**Situation.** Session 3. The party has one Illefarn object out of the site. Malk offers **220 gp** — more than the entire village's liquid coin (WP02 §10.5). The Laughing Hollow is at stage 3 and has told them not to.

### B1. State changes on the sale

| System | Change | Why |
|---|---|---|
| Daggerford Clock | **3 → 4** | An offer accepted (WP01 §6.4) |
| Laughing Hollow Clock | **3 → 4** | A warning ignored, and an artifact promised to Daggerford (§5.3) |
| Hollow Reputation | **0 → −1** | WP01 §4: one step per substantial action |
| Party purse | **+220 gp** | Real, and the only money like it in the region |

Two clocks moved from one event. **This is WP01 §16's permitted exception** — a major event directly changing several systems — and it is explicitly listed in §12.3. **Nothing further cascades.** Greybank does not learn of it; Instability does not move; the Red-Tusk do not care.

### B2. What follows, and when

| Timing | Event |
|---|---|
| Immediately | Daggerford at 4: **Trade +1.** Investment arrives. Imported goods become available in Greybank for the first time |
| Within a session | The Hollow at 4 — **Interference.** Wardens begin removing artifacts *wherever they are* (§5.3) |
| Then | **Malk's wagon is intercepted on the road.** The artifact is gone; her money is not returned; **Daggerford Rep −1** because she blames the party for the exposure |

> The party sold a thing once and got paid once, and the item is now **out of the campaign in both directions** — the Hollow has it, Malk lost it, and Greybank never saw any of it.

### B3. The alternatives, honestly

| Choice | Result |
|---|---|
| Sell to Malk | +220 gp. Dagg +1, Hollow +1, Hollow Rep −1 |
| Return it to the Hollow | **Hollow Rep +1.** Nethra moves +1 if they promised to. No money. Greybank never sees the palisade |
| Sell to Threll instead | Less money — he is not a collector — but **Dagg +1 without Malk's exposure**, and Threll will not carry it into elf country |
| Give it to Greybank | The moot cannot sell it either (WP02 §10.5). It sits in the moot chest and Ondra worries about it |
| Keep it | **Nothing happens, and that is a legitimate choice.** WP13 owns whether it is useful |

**No option satisfies two factions** — §9.5's artifact problem, arriving on the table exactly as designed.

---

## 14.3 Example C — Vaerelin warns the moot

**Situation.** Session 3. The quarry expansion was approved in session 2 — **Instability 1 → 2** (WP02 §15.7). Per §12.3, Instability 2 pushes **Hollow 1 → 2**, then contact leads to **stage 3**. The party is not in the village.

**This is the document's judging test: two factions, one room, no party.**

### C1. The meeting

Vaerelin comes to **the shrine (G9)** — per §9.2, the one building his people recognise, and it has no door to bar. He asks for the Reeve. **Yorrin Fell fetches her and stays**, because it is his shrine.

Vaerelin states the limit: **stop cutting toward the opening; take nothing out.** He does not say why. Ondra asks why three times, in three different ways, and is answered *"because I am telling you"* each time.

**Ondra writes it down.** That is her portrait detail (WP03 §5.1) becoming a mechanic — there is now a record, and it will be read at moot.

### C2. The moot, two days later

| Bloc | Position | Why |
|---|---|---|
| **Quarry** — Durrow | **Reject.** Fourteen families eat from that face | §4.2 |
| **Farms** — Orrick | Indifferent to the elves; **opposed to anything that costs harvest labour** | §4.2 |
| **Trade** — Dray | Nervous. Elves are bad for merchants either way | §4.2 |
| **Militia** — Hone | **Wants to take it seriously.** He has no idea what to do about it | §4.2 |
| **Isolationists** — Old Tarn | **"Send them all away."** First time anyone has listened to him | §4.2 |

**Unity 4** — functional disagreement, two sittings for anything contested (§4.3). The moot does not decide. It agrees to send someone to look at the quarry, which is not a decision.

### C3. State changes

| System | Change |
|---|---|
| Laughing Hollow Clock | **3 — Warning** |
| Greybank Reaction | **+1**, per §9.2 — a public threat has been named |
| Unity | **No change.** WP01 §3.4: a moot that goes badly is not a major scene |
| Quarry | **Still cutting.** Nobody told Durrow to stop, and he would not have |

### C4. What the party walks into

A village that has been given an explicit warning it cannot act on, a quarry still working, an elf who will not be seen again until stage 4, and **Old Tarn newly convinced he was right all along.**

If the party does nothing: the cut reaches the aperture, the Hollow goes to 4, and things start disappearing from Greybank. **All of it determinable from §4.2, §4.3, §5.3 and §9.2 without a single improvised ruling.**

---

## 14.4 Example D — Flight, and the win that isn't

**Situation.** Session 3. The party has fought the Red-Tusk twice and won, killing seven of the twenty-two. They have also opened two Illefarn systems; **Instability is 4.** The Strategic Clock reaches 3.

### D1. The count

| Column | Points | From |
|---|---:|---|
| **War** | 3 | Two incidents of goblins killed (+2); no offer made (+1) |
| **Compact** | 0 | Nothing |
| **Flight** | **6** | Instability ≥4 (+3); six or more fighters lost — seven (+2); no compact offered (+1) |

**Branch: FLIGHT.** Decisively.

### D2. What the party sees

**The raids stop.** Bessa Ruddock's losses end. The tracks at the wood's edge stop appearing. Greybank Reaction reverses from 4 to 3 as the crisis appears to pass, and the taproom's verdict is that the adventurers drove the goblins off.

**Greybank Reputation +1.** The village is not wrong about what happened. It is wrong about what it means.

### D3. What is actually happening

F4 → F5 across sessions 3 and 4. Sixty-one goblins concentrating and then moving. **Roads become unsafe by accident — Trade −1.** Threll's cart stops coming and the Commercial Clock stalls or reverses (§9.2).

And per WP01 §6.3 and §6.4 of this document: **the Red-Tusk were a buffer.** They lived between Greybank and whatever moved them, and at Instability 4 that thing is more active, not less.

> **WP06 owns what fills the gap. WP04 records only that a gap opens**, that it opens in session 4, and that the village will have spent a session congratulating the party for making it.

### D4. Why this is fair, not a trick

Design doc §29 forbids retroactively changing facts to defeat player plans. This is not that. Every input was visible:

- **Level 1:** Orbal's cords and Ghesh's scarring both say they ran from something.
- **Level 2:** any goblin the party speaks to says so directly. Their description is available from session 2.
- **Level 3:** Instability 4 is the party's own doing, and WP01 §6.5 states that at 4 *"every new major activation requires an instability consequence."*

The party was told three times, by three sources, in three registers. **They chose to fight the refugees instead of asking what they were running from**, and the campaign let that be a real choice with a real result.

---

# 15. Edge Cases and Adjudication Guidance

## 15.1 The party tries to please all four

They cannot, and §10 is why: every unique reward costs another faction something. Let them try, and price it honestly — the Hollow and Malk cannot both be satisfied about a single artifact; Greybank and the Red-Tusk cannot both have the grazing at Food 4.

**Do not punish the attempt.** Let the arithmetic do it. A party at +1 with everyone has access to nothing that matters.

## 15.2 The party brokers an elf–goblin alliance

**It fails**, per §9.2, and both sides think less of them for asking. This is not the DM refusing a clever plan — it is two factions who genuinely have nothing to offer each other, one of whom regards the other as a symptom.

If the party insists, the achievable version is **parallel non-interference**, which already exists and which they have gained nothing by arranging.

## 15.3 The party kills a faction NPC

| Who | Consequence |
|---|---|
| **Vaerelin** | Hollow → 5 immediately. **Nethra's position dies with him.** Armed confrontation |
| **Nethra** | Cooperative containment becomes unreachable. Vaerelin does not soften |
| **Ghesh** | Compact +3 — **and War +3 if the party did it.** War, badly led |
| **Orbal** | **War locks.** She is a negotiator by definition (WP01 §6.3) |
| **Threll** | The house sends someone worse. Clock does not reverse |
| **Malk** | **The only buyer in the region is gone.** WP02 §10.5's ceiling reasserts |

## 15.4 The party ignores all four factions

Run §12.2. The village loses slowly and legibly over four sessions. **This is a valid campaign** and it produces design doc §24's Village Destruction or Greybank Abandoned.

Per design doc §22, unused material stays unused. Do not chase the party with faction content they have declined.

## 15.5 A clock reaches 6 in session 2

Possible, and fine. **Stage 6 creates a new situation, not an ending** — WP01 §6.1 and §6.5 both say so explicitly. A Red-Tusk C6 in session 2 means the rest of the campaign is played in a village with goblins on the western grazing, which is more interesting than one without.

**Do not slow a clock down to protect later material.** Design doc §22 forbids it.

## 15.6 Two clocks reach 6 at once

Resolve in this order: **Illefarn → Laughing Hollow → Red-Tusk → Daggerford → Greybank Reaction.** The physical situation determines the factional ones, and Greybank's political outcome is downstream of everything.

## 15.7 The party wipes mid-campaign

Per design doc §33, new characters and a modest time skip. During the skip, advance every clock **one stage** along its §12.2 default, and resolve any pending branch by §8.3 using the state at the moment of the wipe.

The new party inherits a worse region. **Do not reset a clock to be kind.**

## 15.8 The party wants to join a faction

| Faction | Possible? |
|---|---|
| **Greybank** | Yes — a PC can be made Reeve at Rep +2, Unity ≥3 (WP02 §18.9). They inherit the levy, the chest, and the blame |
| **Laughing Hollow** | **No.** Nine wardens who have known each other for centuries. Rep +3 gets partnership, never membership |
| **Red-Tusk** | Effectively yes at Rep +3 — the band is a population, and populations absorb people |
| **Daggerford** | Yes, as an agent. **Threll will hire the party outright at Dagg Rep +2**, which is the campaign's cleanest patron arrangement and comes with contractual claims |

## 15.9 The players ask who the villain is

**There isn't one, and say so if asked directly.** Design doc §7: no hidden mastermind, and each faction genuinely pursues its own interests.

The honest answer is that four groups want incompatible things in a place where something dangerous is buried, and the closest thing to an antagonist is **whatever is behind the boards** — which is not a faction and does not want anything the party can negotiate with.

## 15.10 A faction NPC should know about the party's crime

Faction NPCs are **outside** WP02 §16.2's witness apparatus — they are not in the village at Deep Night and they do not attend moot. What reaches them:

- **Threll and Malk** learn what Greybank will tell a stranger with money. At Greybank Rep ≤ −1, that is a great deal.
- **Nethra** sees the village from outside and knows the party's movements near the site. She does not know what happens indoors.
- **The Red-Tusk** know nothing about village crime and would not care.
- **Vaerelin** cares only about conduct at the site.

## 15.11 The party successfully plays factions against each other

Reward it. This is design doc §2.2's *"manipulate factions"* working as intended. Two constraints:

1. **Red lines hold** (§11). No amount of clever play makes the Hollow defend Greybank or Daggerford send free swords.
2. **Both sides find out eventually.** Greybank is 143 people, Rosal Tunn's room runs at Evening, and Malk buys drinks for the quarry crew. **Set a specific watch when the deception surfaces** rather than leaving it open.

---

# 16. Final Canonical WP04 Rules

## Four factions

**Greybank, Laughing Hollow, Red-Tusk, Daggerford Interests. No fifth.** No new clock, no new reputation track, no renamed WP01 §6 stage.

## Internal splits

**Every faction is two voices, not one.** Ondra Vell against her own blocs; **Vaerelin against Nethra**; **Ghesh against Orbal**; **Threll against Malk**. A faction played as a monolith has been played wrong.

## Greybank's blocs

**Five**: quarry, farms, trade and craft, militia advocates, isolationists. Design doc §7.1's "traditionalists" **are** the isolationists — not a sixth bloc. The isolationists have no leverage at Unity ≥3 and become the loudest voice at Unity ≤2, because theirs is the only position requiring no cooperation.

## The Red-Tusk branch

Resolved at stage 3 by the **§8.3 three-column pressure count**, not by a roll. Ties break to the Ghesh/Orbal argument; with nothing to separate them, **Ghesh wins**. Killing an envoy is **War +3 and locks the branch** (WP01 §6.3).

**The envoy at stage 2 is the most consequential event in the first half of the campaign** and must be telegraphed as a parley — unarmed, daylight, open ground.

## The default

**If the party does nothing (§12.2):** the Red-Tusk advance on their own biology and reach W5 by session 4; Greybank reaches Reaction 5 with Defense 2; **the Laughing Hollow never moves at all**; Daggerford stalls at 2; **Illefarn stays at 1.** The site does not wake by itself — somebody has to open it.

**The baseline outcome of this campaign is Greybank losing**, slowly and legibly, having warned everyone.

## Cross-clock effects

Per §12.3, honouring WP01 §16: **one clock advancing pushes at most one other**, and that second clock pushes nothing. The single listed exception — an artifact reaching Daggerford moving both the Hollow and Daggerford — is a major event directly touching two systems.

## Faction truth

**The Laughing Hollow is right about the danger and indifferent to Greybank's survival.** Both halves are canonical. They never exaggerated. **WP06 owns what is true; WP04 owns only that the elves have it**, and a DM can run Hollow stages 1–5 without knowing.

**Every other faction's account of the site is testimony, not truth** — including the Red-Tusk's description of what displaced them.

## Red lines

§11 is binding. **Greybank never fights past the boundary stones. No villager enters the site. The Hollow never defends Greybank and never explains below stage 6. The Red-Tusk never go back and never abandon the thirty-nine. Daggerford never sends armed help for free and never moves faster than two days.**

## Reputation is a currency

§10: nothing a faction uniquely provides is available from any other source, and **every one of them costs another faction something.** A party at +1 with all four has access to nothing that matters.

## NPC standard

**Six faction NPCs, in WP03's format.** There is one NPC standard in this campaign.

## Stage 6

Never reverts, on any clock. Some doors close permanently — a destroyed relationship with the Hollow, a locked War branch, an artifact sold. Design doc §22: choices may permanently close content.

---

# WP04 Completion Criterion

**The judging test:** put two factions in a room without the party. Does the DM know what happens? §9.2 answers all six pairings; §14.3 works one through end to end.

WP04 is complete when later packages can answer questions like these without inventing faction machinery:

- The party is at the quarry when the goblin envoy reaches the bridge. Who receives it, and what does the Red-Tusk band decide as a result?
- What does Greybank do, bloc by bloc, when an elf tells the Reeve to stop cutting?
- The party sells an artifact to Daggerford. Which clocks move, and which explicitly do not?
- What happens across four sessions if the party ignores every faction?
- Why does the Laughing Hollow never appear in some campaigns?
- Which faction will bring armed help for free, and at what price?
- Two factions want the same artifact and a third wants the money. What does each do?
- What locks the Red-Tusk into war, and what is the last moment it can be prevented?
- Who buys an Illefarn artifact, and what happens to it afterwards?
- What does the village do when the quarry stops for a reason it cannot fight?
- The party kills the elven speaker. What changes, and what becomes permanently unreachable?
- Which faction advances if nobody does anything at all, and why?

---

# Handoffs

## To WP05 — Regional Map

**Owed by you, needed by this document:**

- **Where the Laughing Hollow wardens operate.** WP04 assumes 1–2 watches from the far bank. Fix it.
- **Where the Red-Tusk camp is** — rough ground north and west, beyond the moor edge. It must be far enough that 61 goblins are not obvious and close enough that scouts reach the fold in a night.
- **A viable elsewhere for the Flight branch** (§8.3 gives it +1). If no such place exists on your map, say so — that changes the count.
- **Which routes W5 interdiction closes**, and what that does to the Daggerford road.
- **The bridge detour**, still outstanding from WP02 §14.1.

## To WP06 — Illefarn Dungeon

**WP04 has deliberately not decided:**

- What is behind the quarry boards.
- **What displaced the Red-Tusk.** Ghesh and Orbal will both describe it; **both accounts are testimony.** You decide what is true and how much they got right.
- **What fills the gap if the Red-Tusk take the Flight branch and leave** (§6.4, F6). WP04 guarantees a gap opens in session 4; you own what comes through it.

**WP04 binds you to:** the Laughing Hollow being **right** about the danger — never revealed as exaggeration. Instability 2 pushes Hollow +1; Instability 4 pushes Flight +3. Quarry expansion is **+1 Instability**, stated in advance.

## To WP07 — Encounters

**Owed:** stat blocks and warband composition for **22 Red-Tusk fighters** (and what a 3-scout probe looks like), **nine Laughing Hollow wardens** (competent, mobile, and never fighting fair), and **Threll's hired cargo guards**.

**Bound by:** the Hollow does not fight pitched battles — theft, sabotage and interdiction, per §5.3. Red-Tusk probes before W4 are **designed to be survivable by both sides**. Greybank's militia never crosses the boundary stones.

## To WP08–WP12 — Sessions

- **§12.2 is your baseline.** Open each session package by naming which of the five columns the players moved.
- **The envoy (§8.2) must appear in session 2** unless the party has already made contact. Telegraph it per §8.6's three signals — the third is **Bessa Ruddock** saying it to their faces (WP03 §6.7).
- **The fold is the shared entry point** for the Red-Tusk thread and WP02's designated first Level-2 warning. If WP08 makes the fold predation a monster instead, the Red-Tusk still reach stage 2 on schedule — they just arrive by a different door.
- **Malk should appear in the Sundered Cart** buying drinks for the quarry crew. It is the cheapest way to introduce the Daggerford thread.
- **WP11's finale matrix** should be built from §4.5's stage-6 outcomes, §5.3's, §6.4's and §7.3's — twenty-two combinations, of which design doc §24's Mixed Outcome is the likeliest.

## To WP13 — Items

- **Serina Malk is the only buyer in the region** at anything like value. WP02 §10.5's ceiling holds otherwise.
- **The Laughing Hollow will take artifacts back by force at stage 4+**, from anywhere — a camp, a store, a wagon. Design accordingly.
- **Malk's employer is a genuine loose end** (§13.6). WP13 may claim it or leave it; if claimed, it must not become a mastermind (design doc §7).

## To WP14 — Handouts

**Owed:** Threll's contract, with the claim clause in it. Malk's standing price list. **Orbal's knotted cords**, as a physical object that a player can hold and not read. The Hollow's mark on a tree at the charcoal camp.

## To WP15 — Visual Assets

**Owed:** six faction NPC portraits, built on each entry's one memorable physical fact — Vaerelin's stillness, Nethra glancing at the tower, Ghesh's two new knives, Orbal's cords, Threll's good boots badly kept, Malk's still and visible hands. **Faction symbols** for all four.

## To WP16 — Dashboard

**No new tracked values.** WP01 §19's clock block already holds all five. WP04 adds only that the Red-Tusk row must be able to show a **branch letter** — W4, C5, F6 — which WP01 §19's prototype already does.
