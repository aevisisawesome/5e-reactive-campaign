# The Broken March — WP01: Campaign State Model

**Status:** Canonical campaign systems document  
**Consumes:** `Campaign design doc.md`  
**Feeds:** WP02–WP16  
**Scope:** Persistent world state, economy, factions, crime, time, escalation, infrastructure, NPC persistence, and DM tracking

This document operationalizes the reactive-world systems established in the campaign design document rather than replacing them. The campaign remains a 4-session, optionally 5-session, mechanics-first, dangerous sandbox centered on Greybank, with persistent consequences, finite resources, independently acting factions, progressing threats, and Illefarn systems that alter the overworld.

---

# 1. Design Goals

WP01 exists to make the following campaign promises mechanically real:

1. **The world remembers.**
2. **Ignored problems evolve.**
3. **Time has a cost.**
4. **Resources are finite.**
5. **NPC death permanently matters.**
6. **Crime produces investigation and social consequences.**
7. **Factions act without waiting for the PCs.**
8. **Infrastructure affects actual play.**
9. **Illefarn activity changes the region.**
10. **Clever action can substantially change difficult situations.**
11. **Consequences should usually follow understandable causality rather than arbitrary rolls.**
12. **The state model must be usable at an actual table.**

## 1.1 State-design rule

Every persistent variable must answer four questions:

| Question | Requirement |
|---|---|
| Why track it? | It changes player options or danger. |
| What changes it? | Concrete player/world events. |
| What do thresholds do? | Mechanical consequences. |
| What do players notice? | Observable fiction. |

If a value cannot satisfy all four, it is not tracked.

---

# 2. Core State Model

The original design proposes:

- Food 0–6
- Trade 0–6
- Defense 0–6
- Village Unity 0–6
- Elf Relations -3 to +3
- Goblin Relations -3 to +3
- Illefarn Instability 0–6

WP01 makes two structural changes.

## 2.1 Changes to original model

### Change 1 — “Relations” become Reputation

**Elf Relations** and **Goblin Relations** move into a unified faction reputation system.

Add:

- Greybank Reputation
- Laughing Hollow Reputation
- Red-Tusk Reputation
- Daggerford Reputation

Range remains:

**-3 to +3**

Reason:

Relationship scores are fundamentally faction attitudes toward the party and should use one common system.

---

### Change 2 — Illefarn becomes a composite site state

**Illefarn Instability 0–6** remains.

However, WP01 adds three non-meter site trackers:

- discovered systems;
- active systems;
- sector status.

These are factual state rather than additional abstract meters.

---

## 2.2 Final global variables

### Greybank condition

| Variable | Range | Start |
|---|---:|---:|
| Food | 0–6 | 4 |
| Trade | 0–6 | 3 |
| Defense | 0–6 | 2 |
| Unity | 0–6 | 4 |

### Party reputation

| Faction | Range | Start |
|---|---:|---:|
| Greybank | -3 to +3 | 0 |
| Laughing Hollow | -3 to +3 | 0 |
| Red-Tusk | -3 to +3 | -1 |
| Daggerford Interests | -3 to +3 | 0 |

### Major clocks

- Greybank Reaction
- Laughing Hollow Intervention
- Red-Tusk Strategic State
- Daggerford Commercial Involvement
- Illefarn Instability

### Other persistent state

- active investigations;
- unresolved threats;
- infrastructure condition;
- critical inventory;
- important NPC state;
- elapsed campaign time.

This is the entire mandatory campaign simulation.

---

# 3. World Variables

---

## 3.1 Food

**Range:** 0–6  
**Start:** 4

Represents the village's usable food security rather than literal sacks of grain.

It covers:

- stored grain;
- preserved food;
- livestock availability;
- farm output;
- functioning food-processing infrastructure.

### Why track it?

Food affects:

- prices;
- willingness to shelter outsiders;
- public stability;
- militia effectiveness;
- urgency of threats.

### Food thresholds

| Food | Mechanical effect | What players notice |
|---:|---|---|
| 6 | Surplus. Food prices -20%. Can provision expeditions freely. | Full granaries, preserved meat, food traded outward. |
| 5 | Comfortable. No scarcity effects. | Meals plentiful. |
| 4 | Stable. Normal starting condition. | Basic food available. |
| 3 | Tight. Food prices +25%. Village cannot freely support outsiders. | Smaller meals, complaints, rationing begins. |
| 2 | Shortage. Food prices +50%. Long expeditions require purchasing or supplying food. Unity loses 1 if this persists through a second dawn. | Livestock guarded, rationing enforced. |
| 1 | Severe shortage. Food rarely sold to PCs unless Greybank Rep ≥ +1. Militia effectiveness -1 step. Unity loses 1 each dawn unless relief occurs. | Hunger visible; livestock slaughtered early. |
| 0 | Crisis. No ordinary food available for sale. Civilian evacuation/theft/unrest begins. Defense -1 after each dawn at Food 0. | Starvation behavior and abandonment. |

### Food changes

Typical:

- major livestock attack: -1;
- farms abandoned/destroyed: -1;
- mill disabled for a full day: possible -1 at next dawn;
- successful food shipment: +1;
- Red-Tusk trade agreement: potentially +1;
- emergency hunting success: prevents a decline rather than producing permanent surplus.

Food normally changes by **1 per event**.

---

# 3.2 Trade

**Range:** 0–6  
**Start:** 3

Represents reliable commercial connection to Daggerford and nearby settlements.

### Why track it?

Trade controls replenishment of goods Greybank cannot produce locally.

### Thresholds

| Trade | Mechanical effect | Observable result |
|---:|---|---|
| 6 | Strong flow. Replenishment checks gain automatic success. Imported mundane items available within reason. Prices -10%. | Multiple traders, carts and buyers. |
| 5 | Healthy. Critical imported stock replenishes quickly. | Regular wagons. |
| 4 | Functional. Standard replenishment. | Predictable merchants. |
| 3 | Fragile. Starting condition. Imported critical stock replenishes only at scheduled arrivals. | Occasional caravans. |
| 2 | Disrupted. Imported stock replenishment takes twice as long. Imported prices +25%. | Empty shelves and delayed wagons. |
| 1 | Nearly cut off. No routine imported replenishment. Imported prices +50% if available privately. | Traders avoid Greybank. |
| 0 | Isolated. No commercial replenishment. Daggerford aid requires deliberate intervention. | Road effectively abandoned. |

### Trade changes

- bridge destroyed: immediately -1;
- major route becomes monster-controlled: -1;
- merchant caravan destroyed: -1;
- local merchant murdered: -1 if crime remains unresolved/public;
- route secured: +1;
- new reliable goblin/elf trade route: potentially +1;
- Daggerford establishes a commercial post: +1.

Trade cannot exceed what physical infrastructure supports.

---

# 3.3 Defense

**Range:** 0–6  
**Start:** 2

Defense measures Greybank's ability to detect, organize against, and resist an attack.

It does **not** represent HP.

### Thresholds

| Defense | Mechanical consequence |
|---:|---|
| 6 | Fortified settlement. Attacks are detected early; organized missile positions; strong fallback positions. |
| 5 | Strong. Village can repel modest raids without PCs. |
| 4 | Prepared. Militia can hold chokepoints effectively. |
| 3 | Functional. Village can mount a coherent defense. |
| 2 | Weak. Starting condition. Militia exists but requires time to organize. |
| 1 | Vulnerable. Surprise attacks inflict immediate civilian/infrastructure losses. |
| 0 | Defenseless. Organized hostile force can overrun or force evacuation of Greybank. |

### Concrete combat effect

When Greybank fights as a settlement:

- Defense 0–1: disorganized defenders;
- Defense 2–3: normal organized defenders;
- Defense 4–5: prepared positions, cover, coordinated missile fire;
- Defense 6: fortified defense including prepared barriers and reserves.

WP07/WP08+ will specify exact stat blocks.

### Defense changes

- militia training: +1;
- repaired palisade/watchtower: +1 where appropriate;
- major militia casualties: -1;
- watchtower destroyed: -1 if no redundant warning system;
- important defender killed: possible -1;
- civilians armed once during crisis: temporary situational benefit, not automatic permanent Defense increase.

---

# 3.4 Unity

**Range:** 0–6  
**Start:** 4

Unity measures whether Greybank's population can make collective decisions and accept collective sacrifice.

It is **not** general happiness.

### Why track it?

Unity determines whether the village can:

- cooperate;
- mobilize;
- accept dangerous policies;
- tolerate allies;
- avoid factional paralysis.

### Thresholds

| Unity | Effect |
|---:|---|
| 6 | Exceptional solidarity. Major collective projects require little persuasion. |
| 5 | Cooperative. Villagers generally accept trusted leadership. |
| 4 | Functional disagreement. Starting condition. |
| 3 | Divided. Group Persuasion involving controversial village policy is one difficulty step harder. |
| 2 | Fractured. Major collective projects require resolving opposition; volunteer manpower is halved. |
| 1 | Near breakdown. Theft, desertion and private deals become common. Defense cannot rise above 3 through collective action. |
| 0 | Collapse. Village ceases functioning politically as one settlement; evacuation, splinter groups or violent internal conflict follows. |

### Unity changes

- public success against threat: +1;
- fair distribution of scarce aid: possibly +1;
- trusted NPC murdered: -1;
- Food ≤2 for multiple periods: -1;
- visibly catastrophic PC decision: -1;
- forcing controversial goblin settlement without consensus: -1 initially;
- resolving internal conflict through credible compromise: +1.

Unity is usually changed only after a **major scene**, not every argument.

---

# 4. Reputation

Reputation measures what a faction collectively believes about the party.

Individual NPC opinions are separate.

## 4.1 General scale

| Rep | Faction response |
|---:|---|
| +3 | Trusted strategic partners |
| +2 | Strong allies |
| +1 | Favorable |
| 0 | Neutral / transactional |
| -1 | Suspicious |
| -2 | Hostile |
| -3 | Active enemy |

Reputation usually changes only by **1 per substantial action**.

Repeated actions can accumulate.

---

# 4.2 Greybank Reputation

| Rep | Mechanical effect |
|---:|---|
| +3 | Broad trust. Access to communal supplies when justified; civilians volunteer information; village may mobilize for PC plan. |
| +2 | Local services 10% cheaper where economically possible; free modest lodging; militia support possible. |
| +1 | Friendly treatment; NPCs readily share ordinary information. |
| 0 | Normal prices and neutral reactions. |
| -1 | PCs watched; sensitive information withheld; credit refused. |
| -2 | Most discretionary services refused; party shadowed or openly challenged; weapons may be requested to remain sheathed. |
| -3 | Party considered a direct threat. Arrest, expulsion, or mobilized resistance. |

---

# 4.3 Laughing Hollow Reputation

| Rep | Effect |
|---:|---|
| +3 | Strategic cooperation; ward knowledge; possible specialist support. |
| +2 | Safe passage and significant Illefarn information. |
| +1 | Warnings, limited information, negotiations in good faith. |
| 0 | Distant neutrality. |
| -1 | Observation and restricted access. |
| -2 | Interference, surveillance, deliberate obstruction. |
| -3 | Armed exclusion from sensitive territory. |

---

# 4.4 Red-Tusk Reputation

| Rep | Effect |
|---:|---|
| +3 | Reliable military/trade alliance within goblin interests. |
| +2 | Safe passage, guides, intelligence, limited reinforcements. |
| +1 | Neutral meetings and minor trade possible. |
| 0 | Mutual caution. |
| -1 | Starting state. PCs viewed as probable enemies; armed negotiations possible. |
| -2 | Ambushes, sabotage, prisoners used as leverage. |
| -3 | Kill/capture priority where strategically sensible. |

A Red-Tusk warrior may still hate a PC at +2 faction reputation because of a personal death.

---

# 4.5 Daggerford Interests Reputation

| Rep | Effect |
|---:|---|
| +3 | Preferential financing, valuable equipment access, agents take PC reports seriously. |
| +2 | Better purchasing terms and commercial support. |
| +1 | Reliable business relationship. |
| 0 | Transactional. |
| -1 | Less favorable terms, demands for guarantees/payment up front. |
| -2 | Refusal of commercial support; rumors or pressure against PCs. |
| -3 | PCs treated as threats to commercial interests; bounty/legal pressure may emerge through plausible authorities. |

---

# 4.6 NPC opinion

NPC attitude is tracked independently:

- Friendly
- Neutral
- Wary
- Hostile

Only recurring NPCs need this value.

Faction reputation supplies the default.

Personal experience overrides it.

Example:

> Greybank Rep -2, but the miller's daughter remains Friendly because the PCs saved her family.

---

# 5. Resource Economy

Greybank does not require an inventory spreadsheet containing every rope and torch.

Resources are divided into three classes.

---

## 5.1 Class A — Abstract village resources

Represented through world variables or infrastructure.

Do not individually count:

- ordinary food stores;
- bulk timber;
- bulk stone;
- common trade goods;
- routine militia ammunition.

These matter through:

- Food;
- Trade;
- infrastructure;
- specific crisis conditions.

---

# 5.2 Class B — Critical discrete stock

Track individually because scarcity meaningfully alters play.

Initial provisional campaign stock:

| Item | Start |
|---|---:|
| Potion of Healing | 2 |
| Healer's kit | 2 |
| Antitoxin | 1 |
| Chain shirt | 1 |
| Shield | 1 |
| Spare martial weapon-quality items | 2 |
| Riding horses available for sale/hire | 2 |
| Specialized spell-component packages | 2 |
| Large ammunition bundles | 4 |

These figures are **WP01 defaults** and may be geographically assigned by WP02.

---

# 5.3 Class C — Ordinary goods

Common items remain obtainable as long as:

- appropriate service exists;
- Trade ≥2;
- supply is plausible.

Examples:

- rope;
- torches;
- waterskins;
- simple tools;
- common clothing.

Do not count these individually until scarcity or destruction makes them strategically significant.

---

# 5.4 Pricing

Use PHB-equivalent baseline prices where appropriate.

Apply one scarcity multiplier.

| Condition | Modifier |
|---|---:|
| Surplus | -10% to -20% |
| Normal | baseline |
| Tight | +25% |
| Severe | +50% |
| Crisis | item unavailable or negotiated privately |

Do not stack five independent price modifiers.

Use the **single worst applicable scarcity condition**, then apply reputation-based adjustment if applicable.

---

# 5.5 Medicine

Medicine is a semi-discrete category.

Critical medicinal goods include:

- healer's kits;
- antitoxin;
- rare herbs;
- treatment supplies;
- healing potions.

Medicine replenishment requires:

- functioning relevant NPC/service;
- Trade ≥2, unless locally produced;
- elapsed replenishment time.

An apothecary improvement can create local replenishment later.

---

# 5.6 Ammunition

Routine arrows/bolts are not tracked village-wide while:

- smith/carpenter capacity exists;
- Trade ≥2;
- Defense is not actively consuming supplies.

During siege or Trade ≤1:

Ammunition becomes a critical stock.

WP07/WP11 may define explicit bundles for sustained defense.

---

# 5.7 Weapons and armor

Greybank cannot manufacture arbitrary high-tier equipment.

Without a functioning smith:

- damaged metal equipment cannot reliably be repaired;
- new martial weapons stop replenishing;
- metal armor availability freezes at current stock.

Even with a smith:

- plate armor does not appear merely because players wait.

---

# 5.8 Horses

Horses are discrete.

If killed, stolen, sold, or taken:

they are gone.

New horses require:

- incoming trade;
- breeder availability;
- sufficient time.

A 4–5 session campaign means replacement may never occur.

---

# 5.9 Timber and stone

Normally abstract.

They become discrete project resources only when PCs attempt major work such as:

- bridge reconstruction;
- fortification;
- barricades;
- structural collapse plan.

Use:

- **1 Timber Load**
- **1 Stone Load**

as project-sized units if necessary.

Do not count individual boards.

---

# 5.10 Replenishment

At each **dawn**, check only resources scheduled to replenish.

### Trade 4–6

Normal imported critical good:

**1 day**

### Trade 3

**1–2 days**

### Trade 2

**2 days**

### Trade 1

No automatic replenishment.

### Trade 0

No commercial replenishment.

A caravan can replenish several stocks at once.

---

# 5.11 Service-provider death

If an NPC providing a unique service dies:

1. that service immediately stops;
2. existing physical stock remains unless stolen/destroyed;
3. no replacement appears automatically;
4. another NPC may improvise only if their established skills support it;
5. a permanent replacement requires a plausible world event.

Example:

Shopkeeper murdered:

- shop closes;
- remaining inventory may become sealed evidence/property;
- Trade can suffer;
- villagers do not casually loot and reopen it;
- another trader might later operate from a wagon if Daggerford becomes sufficiently involved.

---

# 6. Faction Clocks

Clocks measure **what the faction is currently doing**, not merely whether conditions are good or bad.

Clock numbers are DM shorthand.

---

# 6.1 Greybank Reaction Clock

Tracks political mobilization around destabilization, fear, and PC conduct.

| State | Situation |
|---:|---|
| 1 | Routine governance |
| 2 | Concern |
| 3 | Organized response |
| 4 | Emergency measures |
| 5 | Mobilization |
| 6 | Irreversible political outcome |

### 1 — Routine Governance

Factional disagreements remain ordinary.

**Players notice:** routine village life.

Moves forward when:

- serious threat becomes public;
- major crime occurs;
- Food/Defense falls sharply.

---

### 2 — Concern

Meetings, rumors, informal watchfulness.

Effects:

- suspicious outsiders draw attention;
- leaders seek information.

---

### 3 — Organized Response

Specific committees/patrols/guards form.

Effects:

- militia patrols;
- restricted sensitive areas;
- serious crimes investigated efficiently.

Can move backward if crisis credibly resolves.

---

### 4 — Emergency Measures

Curfews, rationing, barricades or weapon distribution may appear depending on cause.

Effects:

- public movement restricted;
- investigations can advance faster;
- controversial PC activity more visible.

---

### 5 — Mobilization

Greybank acts collectively against a defined threat.

Could target:

- monster;
- goblin warband;
- invading faction;
- PCs.

Effects:

- bells;
- prepared defenders;
- evacuation procedures;
- messengers.

---

### 6 — Political Outcome

A major social change locks in.

Examples:

- evacuation;
- party outlawed;
- goblin coexistence agreement;
- emergency militia regime;
- elven protectorate.

State 6 is not inherently bad.

It cannot simply tick backward. A new status quo has formed.

---

# 6.2 Laughing Hollow Intervention Clock

| State | Activity |
|---:|---|
| 1 | Observation |
| 2 | Contact |
| 3 | Warning |
| 4 | Interference |
| 5 | Containment |
| 6 | Settlement |

### 1 — Observation

Elves watch Illefarn-related activity.

### 2 — Contact

Scouts or representatives make indirect/direct contact.

### 3 — Warning

Explicit limits are communicated.

Players now clearly understand likely consequences.

### 4 — Interference

Elves:

- remove artifacts;
- sabotage access;
- misdirect others;
- disable exposed mechanisms.

### 5 — Containment

Armed patrols or wards restrict access.

Safe passage depends heavily on reputation.

### 6 — Settlement

A durable outcome forms:

- cooperative containment;
- elven control;
- withdrawal after PCs prove safety;
- armed confrontation.

Moves forward through:

- unstable activations;
- artifact exploitation;
- ignored warnings.

Moves backward through:

- demonstrable stabilization;
- returning dangerous artifacts;
- shared containment.

Certain destructive actions can permanently prevent return to states 1–2.

---

# 6.3 Red-Tusk Strategic Clock

This clock branches.

States 1–3 describe early pressure.

At 3, Red-Tusk strategy moves toward **War**, **Compact**, or **Flight**.

### Common stages

| State | Activity |
|---:|---|
| 1 | Displaced scouting |
| 2 | Resource pressure |
| 3 | Strategic decision |

### 1 — Displaced Scouting

Goblins probe territory.

Players observe:

- tracks;
- scouts;
- missing small supplies.

---

### 2 — Resource Pressure

Foraging theft, confrontations, livestock pressure.

Red-Tusk may request or accept contact.

---

### 3 — Strategic Decision

Leadership determines whether humans are:

- enemy;
- partner;
- obstacle.

From here branch.

---

## WAR BRANCH

### W4 — Raiding

Targeted raids and ambushes.

### W5 — Fortifying / preparing assault

Routes blocked, strongpoints prepared.

### W6 — War

Major regional conflict.

Locked if:

- PCs massacre negotiators;
- existential hostility becomes mutual.

---

## COMPACT BRANCH

### C4 — Negotiation

Territory, food or access terms discussed.

### C5 — Cooperation

Trade/intelligence/shared military action.

### C6 — Settlement

Durable alliance/coexistence arrangement.

May reduce Unity initially.

---

## FLIGHT BRANCH

### F4 — Withdrawal preparations

Goblins abandon weak sites and concentrate civilians.

### F5 — Migration

Red-Tusk movement affects roads and other factions.

### F6 — Gone / transformed regional presence

They leave Greybank's immediate region or join another power.

This may expose whatever displaced them in the first place.

---

# 6.4 Daggerford Commercial Clock

Not a villain meter.

| State | Activity |
|---:|---|
| 1 | Rumor |
| 2 | Inquiry |
| 3 | Opportunity |
| 4 | Investment |
| 5 | Leverage |
| 6 | Commercial settlement |

### 1 — Rumor

Stories of Greybank/Illefarn reach Daggerford.

### 2 — Inquiry

Travelers/agents gather information.

### 3 — Opportunity

Offers appear:

- artifact purchases;
- supply contracts;
- protection arrangements.

### 4 — Investment

Equipment and capital become available.

Trade can improve.

Costs:

- influence;
- contractual claims;
- artifact removal.

### 5 — Leverage

Commercial actors have enough investment to demand concessions.

### 6 — Settlement

Outcome:

- merchant boom;
- withdrawal;
- monopoly;
- sanctioned salvage operation;
- commercial post.

Moves forward through:

- artifact sales;
- requests for investment;
- escalating commercial importance.

Can move backward if:

- route becomes too dangerous;
- profits disappear;
- agents are attacked.

---

# 6.5 Illefarn Instability Clock

**Range:** 0–6  
**Start:** 1

| State | Condition |
|---:|---|
| 0 | Quiescent |
| 1 | Dormant disturbance |
| 2 | Waking |
| 3 | Active |
| 4 | Unstable |
| 5 | Breaching |
| 6 | Catastrophic transformation |

### 0 — Quiescent

No active external influence.

Achievable through major successful stabilization.

### 1 — Dormant Disturbance

Starting state.

Minor anomalies.

### 2 — Waking

Systems intermittently operate.

Observable:

- lights;
- vibration;
- ward effects;
- creature displacement.

### 3 — Active

Multiple systems influence surrounding region.

At least one overworld condition changes.

### 4 — Unstable

Activation produces uncontrolled secondary effects.

Every new major activation requires an instability consequence unless correctly stabilized.

### 5 — Breaching

Containment failure affects wilderness or Greybank directly.

### 6 — Catastrophic Transformation

A campaign-defining regional event occurs.

Not necessarily an explosion.

Could produce:

- uncontrolled defensive network;
- magical exclusion zone;
- mass creature displacement;
- flood;
- sealed territory opening;
- permanent ward failure.

Clock 6 creates a new situation rather than automatically ending the campaign.

---

# 7. Crime System

The crime system has three components:

1. **Crime severity**
2. **Evidence**
3. **Investigation stage**

No legal-simulation subsystem is required.

---

# 7.1 Crime severity

| Crime | Base consequence |
|---|---|
| Suspicious behavior | Attention only |
| Petty theft | Victim complaint / restitution |
| Serious theft | Investigation |
| Assault | Immediate intervention + investigation |
| Property destruction | Restitution + investigation |
| Murder | Full investigation |
| Witnessed murder | Immediate identification/mobilization likely |
| Crime against outsider | Depends on relationship and local law |
| Emergency violation | Judged against necessity and outcome |

Context matters.

Stealing food while starving is treated differently from murdering a farmer for food.

---

# 7.2 Evidence categories

Evidence is recorded as **Strong**, **Moderate**, or **Weak**.

Do not assign numeric evidence points.

### Strong

Examples:

- reliable eyewitness;
- stolen property found on PC;
- magical confirmation;
- unmistakable weapon/property trace;
- confession.

### Moderate

Examples:

- PC seen near scene;
- motive;
- matching footprints;
- contradictory statements;
- blood on clothing;
- multiple circumstantial details.

### Weak

Examples:

- rumor;
- unexplained absence;
- vague description;
- known hostility.

---

# 7.3 Evidence rule

A serious investigation normally needs one of:

- **1 Strong + supporting context**, or
- **2+ Moderate pieces**, or
- a credible confession

to advance into confident accusation.

This is guidance, not a courtroom formula.

NPC judgment remains relevant.

---

# 7.4 Concealment

Players may:

- remove body;
- destroy weapon;
- clean scene;
- fabricate alibi;
- intimidate witnesses;
- bribe;
- frame another;
- use disguises/illusions;
- flee.

Resolve meaningful uncertainty using normal D&D ability checks.

Consequences follow logically.

A failed intimidation attempt can create:

- a new witness;
- stronger suspicion;
- another crime.

A successful attempt may genuinely work.

Do not force failure because the DM wants the investigation to continue.

---

# 8. Investigation Mechanics

Serious investigations use six stages.

| Stage | State |
|---:|---|
| 1 | Crime discovered |
| 2 | Witnesses interviewed |
| 3 | Evidence collected |
| 4 | Suspects identified |
| 5 | Surveillance / questioning |
| 6 | Arrest / accusation |

---

# 8.1 Advancement timing

Check an active serious investigation:

- after each relevant major scene;
- at the end of each **watch** in which investigators can work;
- after a long rest;
- at dawn if unresolved.

Normally advance **maximum 1 stage per check**.

---

# 8.2 Automatic advancement

Advance automatically when the next investigative step is straightforward.

Examples:

Witness saw party leave shop immediately after scream:

Stage 1 → 2 requires no roll.

Bodies contain obvious weapon wounds:

evidence collection proceeds.

---

# 8.3 Bonus advancement

An investigation may advance twice during one watch if investigators receive:

- reliable eyewitness identification;
- confession;
- strong magical evidence;
- offender caught with stolen property;
- offender attacks investigators;
- multiple independent strong clues.

---

# 8.4 Stalling

Investigation stalls when:

- body is undiscovered;
- investigators are occupied by a major attack;
- witnesses are unavailable;
- evidence genuinely points nowhere;
- leadership is incapacitated.

A stalled clock remains where it is.

---

# 8.5 Reversal

Normally investigation stages do not numerically reverse.

Instead, findings can become:

- **discredited**;
- **redirected**;
- **inconclusive**.

Example:

Party successfully frames a plausible third party.

Investigation stays at Stage 4 but the identified suspect changes.

This avoids bookkeeping gymnastics.

---

# 8.6 Murder without witnesses

Murder without witnesses does not automatically implicate PCs.

Process:

1. body discovered;
2. timeline reconstructed;
3. relationships investigated;
4. evidence examined;
5. suspects narrowed.

Players who committed a clean crime may escape consequences.

That possibility is intentional.

---

# 8.7 Murder with witnesses

If a credible surviving witness directly sees a PC kill an innocent villager:

Investigation may effectively begin at:

**Stage 4 or 5.**

There is no requirement to slowly fill the clock.

Causality overrides clock formalism.

---

# 8.8 Investigation magic

Player abilities work normally.

## Zone of Truth

Can radically strengthen questioning if:

- caster is present;
- targets submit or are compelled plausibly;
- investigators understand the spell.

It does not force speech.

Refusal may influence social suspicion but is not supernatural proof.

---

## Speak with Dead

Potentially transformative.

The corpse can provide what it knew.

Limitations are those of the spell, not artificial campaign protections.

If victim saw murderer clearly:

this can identify them.

Rural Greybank should not casually possess this capability unless WP03 establishes someone able to use it or outside aid arrives.

---

## Detect Thoughts

Works normally.

Using it without consent can itself create serious social consequences.

---

## Disguise Self / illusions

Can genuinely mislead witnesses.

Subsequent physical evidence may contradict the illusion.

---

## Charm magic

A charmed witness may behave differently.

When magic expires, knowledge of manipulation can worsen the situation depending on the spell.

---

## Modify Memory

If available to PCs, it works according to its rules.

Such high-level magic is unusually powerful in a small-community investigation.

That is appropriate.

---

# 9. Village Hostility and Mobilization

Known murderers or existential threats are not handled as a chain of balanced encounters.

When Greybank reaches a point where the community believes the party must be stopped:

trigger **Village Mobilization**.

---

# 9.1 Mobilization sequence

### Initial alarm

- bells;
- shouting;
- runners;
- doors barred.

### Within minutes

- civilians retreat indoors or evacuate;
- militia gathers;
- hunting dogs released where useful;
- archers occupy elevated windows/roofs;
- roads and bridge points watched.

### Organized defense

- carts become barricades;
- narrow streets exploited;
- flammable materials prepared where plausible;
- PCs denied shelter and resupply;
- local guides predict likely escape routes.

### External reaction

A messenger leaves for Daggerford if possible.

---

# 9.2 Mechanical principle

Do not place twenty villagers on one initiative count unless battle truly becomes necessary.

Instead treat the village as a **hostile environment**.

Effects can include:

- missile fire when exposed;
- movement routes blocked;
- no safe rest;
- tracking parties;
- doors locked;
- civilians feeding information to pursuers.

If a stand-up battle occurs, use actual militia numbers rather than CR-balanced waves.

---

# 9.3 Escape remains possible

Telegraph exits:

- river;
- fields;
- forest;
- hidden routes learned previously;
- surrender;
- hostage negotiation;
- breaking a specific blockade.

Players should have a credible chance to escape if they act quickly and intelligently.

The consequence is:

**the village is now hostile and Greybank content may become inaccessible.**

Not:

**the DM automatically kills the party.**

---

# 10. Time Model

Campaign time is tracked in **4-hour watches**.

One day contains six watches:

1. Dawn
2. Morning
3. Afternoon
4. Evening
5. Night
6. Deep Night

Exact clock time matters only when necessary.

---

# 10.1 Why watches?

Four-hour blocks are large enough to avoid bookkeeping and small enough that:

- travel matters;
- rests matter;
- threats can progress;
- multiple objectives compete.

---

# 10.2 Time costs

Default guidance:

| Activity | Time |
|---|---|
| Short local conversation | negligible unless extended |
| Meaningful negotiation / investigation scene | ~1/4–1/2 watch |
| Search small location | ~1/4 watch |
| Search complex site | ~1/2–1 watch |
| Local Greybank movement | negligible |
| Nearby regional travel | 1/4–1 watch depending WP05 distance |
| Combat | tactical time, but recovery/search may consume narrative time |
| Short rest | 1 hour = 1/4 watch |
| Long rest | 8 hours = 2 watches |
| Major repair/build work | defined per project |
| Dungeon exploration | track elapsed blocks approximately |

Do not repeatedly calculate ten-minute increments.

Round to meaningful chunks.

---

# 10.3 Watch transition

When a watch ends:

Check only systems that are currently relevant:

- active threat deadlines;
- investigations;
- faction action scheduled this watch;
- injured NPC deadlines;
- travel arrivals;
- active construction.

Do not advance every clock every four hours.

---

# 11. Rest Procedure

Rest mechanics remain RAW-compatible unless later campaign design specifically modifies them.

Time is the balancing factor.

---

# 11.1 Short Rest

Consumes roughly 1 hour.

Before completing it, ask:

### Is there an immediate active situation?

If no:

rest completes normally.

If yes, determine whether that situation logically changes during one hour.

Possible changes:

- enemy patrol shifts;
- fleeing enemy escapes;
- witness reaches Greybank;
- fire worsens;
- prisoner is moved;
- injured NPC deteriorates.

Do **not** automatically advance faction clocks because PCs took a short rest.

---

# 11.2 Long Rest

Consumes approximately **two watches**.

After declaring a long rest:

### Step 1 — Identify active deadlines

Examples:

- bleeding NPC;
- goblin meeting;
- escaping prisoner;
- burning structure;
- arriving caravan.

Resolve them.

### Step 2 — Advance investigations

Every active serious investigation gets a progression check.

### Step 3 — Advance threats whose conditions are met

Not every threat.

Only those that had time-based escalation due during the eight hours.

### Step 4 — Resolve faction actions

If a faction had a planned overnight action, it occurs.

### Step 5 — Update resources

At dawn:

- Food scarcity;
- scheduled replenishment;
- infrastructure production.

### Step 6 — Present changed world

Players should notice consequences when they wake.

Examples:

- smoke on horizon;
- missing livestock;
- messenger waiting;
- bridge barricaded;
- goblin envoy gone.

---

# 12. Threat Escalation

Unresolved threats use a reusable six-state escalation template.

---

# 12.1 Generic threat structure

| Stage | Function |
|---:|---|
| 1 | Sign |
| 2 | Incident |
| 3 | Escalation |
| 4 | Response |
| 5 | Collateral consequence |
| 6 | Regional outcome |

---

# 12.2 Example — Wolf Problem

### 1 — Sign

Tracks and nervous livestock.

### 2 — Incident

One animal killed.

### 3 — Escalation

Pack attacks more aggressively.

### 4 — Response

Hunters intervene without PCs.

### 5 — Collateral consequence

Hunter dies / another threat is exposed / wolves move closer to settlement.

### 6 — Regional outcome

Possible:

- pack establishes territory;
- wolves are mostly killed;
- livestock herds moved;
- hunters abandon an area.

---

# 12.3 Advancement

Each threat specifies a trigger such as:

- every dawn;
- after 2 watches;
- after another specific event;
- if PCs ignore a meeting;
- after faction action.

Do not default all threats to one stage per watch.

---

# 12.4 Player intervention

A player action can:

- remove threat;
- reduce stage;
- branch outcome;
- accelerate it accidentally;
- redirect target.

Threat stages exist to describe current situation, not to force six scenes.

A decisive solution at Stage 2 can end the threat immediately.

---

# 12.5 Reusable threat categories

Use the same framework for:

- monsters;
- raids;
- disease;
- missing persons;
- shortages;
- political disputes;
- magical disturbances.

---

# 13. NPC State

Approximately 20–30 recurring NPCs are expected.

Only persistent gameplay information is tracked.

---

# 13.1 Compact NPC table

Every recurring NPC receives:

| Field | Required |
|---|---|
| Name | yes |
| Status | yes |
| Role | yes |
| Faction | yes |
| PC attitude | yes |
| Service/resource | if any |
| Important knowledge | if any |
| Suspicion | if relevant |
| Current objective | important NPCs only |

---

# 13.2 Status

Use:

- Alive
- Injured
- Incapacitated
- Missing
- Captured
- Dead
- Gone

Injury may include a short note:

> broken arm — smithing unavailable 2 days

Do not use wound-point systems.

---

# 13.3 Suspicion

Only crime-relevant NPCs receive:

- None
- Uneasy
- Suspicious
- Convinced

This is personal belief.

It is not faction reputation.

---

# 13.4 NPC cards

Important NPC card:

**NAME**  
Role  
Faction

**WANT**  
**FEAR**  
**RESOURCE**  
**ATTITUDE**

Optional reverse:

- current objective;
- important knowledge;
- suspicion.

---

# 13.5 Full NPC sheets

Reserved for NPCs needing:

- combat stat block;
- spellcasting;
- complex secrets;
- substantial social role.

WP03 owns biographies.

WP01 only defines persistence fields.

---

# 14. Infrastructure

Only infrastructure with mechanical consequences is tracked.

Default conditions:

- Improved
- Intact
- Damaged
- Disabled
- Destroyed

Not every structure can meaningfully be Improved.

---

# 14.1 Bridge

### Intact

Normal trade/travel.

### Damaged

Heavy carts delayed.

Possible:

Trade cannot exceed 4.

### Disabled

Crossing possible only with difficulty/alternate means.

Trade -1.

### Destroyed

Trade -1 immediately.

Commercial replenishment delayed.

WP05 determines detour time.

### Improved

Trade gains +1 if other route conditions permit.

---

# 14.2 Mill

### Intact

Normal.

### Damaged

Reduced output.

If Food ≤3 and damage persists through dawn:

Food -1.

### Disabled

Food may fall -1 at next dawn.

### Destroyed

Same as Disabled, but restoring service requires substantial reconstruction.

---

# 14.3 Smithy

### Intact

Repairs and limited metal equipment production.

### Damaged

Repair time doubles.

### Disabled

No metal repair/new production.

### Destroyed

Service unavailable until rebuilt.

Smith death is tracked separately.

An intact building without a smith does not provide smithing.

---

# 14.4 General Store

### Intact + shopkeeper active

Normal retail access.

### Closed

Stock physically exists but no ordinary service.

### Looted

Reduce/remove discrete inventory.

Greybank reaction likely worsens.

### Destroyed

Remaining stock lost unless specifically recovered.

---

# 14.5 Shrine

Exact religious function belongs in WP02/WP03.

WP01 effects:

- functioning shrine can support morale/social recovery;
- destruction of a culturally important shrine may reduce Unity;
- magical services exist only if an NPC actually possesses them.

---

# 14.6 Quarry

### Intact

Provides Stone Loads and employment.

### Expanded

More materials become available.

Illefarn disturbances may increase depending on excavation.

### Disabled

Stone projects cannot replenish.

### Collapsed

Potential casualties and access changes.

---

# 14.7 Palisade

### None / breached

No defensive benefit.

### Intact

Defense support.

### Improved

Prepared defensive positions contribute toward higher Defense.

---

# 14.8 Watchtower

### Intact

Village detects ordinary approaching threats earlier.

### Destroyed

Loss of warning capability.

May reduce Defense if no alternative warning exists.

---

# 14.9 Farms

Track farms collectively unless a specific farm becomes a location.

Use:

- Productive
- Threatened
- Partially abandoned
- Abandoned

Progressive loss affects Food.

---

# 14.10 Apothecary

Not assumed to exist initially.

If created:

- local healer's kits/medicine can replenish despite weak Trade;
- healing potion production requires later explicit justification and materials.

---

# 15. Illefarn State Framework

WP06 designs dungeon content.

WP01 tracks only persistent site state.

---

# 15.1 Instability

Use the 0–6 clock above.

---

# 15.2 Sectors

Every WP06 sector will use:

- Unknown
- Discovered
- Accessible
- Locked
- Breached
- Sealed

A sector can have two descriptors where necessary:

> Discovered / Locked

---

# 15.3 Systems

Illefarn mechanisms use:

- Unknown
- Identified
- Inactive
- Active
- Damaged
- Disabled

Examples may later include:

- wards;
- water controls;
- transport;
- observation;
- defensive constructs.

WP01 does not decide exact implementations.

---

# 15.4 Activation consequence rule

Activating an Illefarn system must define:

1. local effect;
2. regional effect if any;
3. instability change;
4. faction awareness;
5. whether activation is reversible.

Example template:

**System:** Ward Node  
**Local:** seals corridor  
**Regional:** suppresses creature movement nearby  
**Instability:** -1 if correctly stabilized / +1 if forced  
**Faction reaction:** elves notice  
**Reversible:** yes

---

# 15.5 Breach rule

A breach is a factual change, not only instability.

Examples:

- sealed area opened;
- water route opened;
- construct released;
- ward perimeter broken.

Once physically breached, the sector does not magically reset because Instability later falls.

---

# 16. Cascading Consequences

Systems should interact, but a single event must not require an accounting cascade through the entire campaign.

---

# 16.1 Direct links

Use these intentional connections:

### Trade affects

- imported inventory;
- medicine;
- horses;
- equipment price.

### Food affects

- Unity;
- militia sustainability;
- willingness to aid outsiders.

### Defense affects

- raid outcomes;
- village survival;
- mobilization effectiveness.

### Unity affects

- projects;
- militia participation;
- political decisions.

### Infrastructure affects

- Food;
- Trade;
- Defense;
- resource availability.

### Reputation affects

- service access;
- information;
- negotiation;
- faction assistance.

### Illefarn affects

- factions;
- threats;
- overworld conditions.

---

# 16.2 Cascade limit

**Maximum automatic cascade: two links.**

Example:

Bridge destroyed  
→ Trade -1  
→ medicine replenishment delayed

Stop.

Do not automatically continue:

→ wounded NPC dies  
→ Unity -1  
→ leadership changes  
→ Defense -1

Those later consequences occur only when their own triggers become relevant.

---

# 16.3 Major-event exception

A truly catastrophic event can alter several values directly.

Example:

Greybank burns during a raid:

- Defense -1;
- Food -1;
- specific infrastructure destroyed;
- casualties recorded.

These are direct consequences, not chain reactions.

---

# 17. Randomness vs Determinism

Use deterministic outcomes whenever causality is obvious.

### Automatic

- shop burned → shop unavailable;
- bridge destroyed → Trade disruption;
- NPC killed → NPC dead;
- witnessed murder → witness knows culprit;
- consumed potion → potion gone.

### Roll

Use randomness when the outcome is genuinely uncertain.

Examples:

- Did a distant farmer see the disguised PC?
- Does damaged caravan reach Greybank?
- Do hunters find the wolf den?
- Which secondary structure catches fire?
- Does a fleeing messenger evade pursuit?

---

# 17.1 Recommended uncertainty roll

For world uncertainty where no PC directly rolls:

Use a simple **d6**.

| d6 | Outcome |
|---:|---|
| 1 | severe complication |
| 2 | complication |
| 3–4 | mixed / expected outcome |
| 5 | favorable |
| 6 | strongly favorable |

Only use this when exact odds are not important.

Do not roll merely to make the simulation look active.

---

# 18. DM Update Procedure

---

# 18.1 During Play

Update immediately when:

- NPC dies/goes missing;
- item consumed;
- infrastructure changes;
- reputation obviously changes;
- crime occurs;
- investigation evidence is created;
- faction agreement is made;
- Illefarn system activates;
- major threat is solved.

Use short notation.

Example:

> Bridge DESTROYED → Trade 3→2

---

# 18.2 After a Major Scene

Take approximately 30 seconds.

Ask:

1. Did reputation change?
2. Did a clock move?
3. Did meaningful time pass?
4. Did any unresolved threat acquire a new trigger?
5. Did inventory or infrastructure change?

If none:

continue playing.

---

# 18.3 End of Session

Target: **10–15 minutes**.

### Step 1 — Ask player intentions

Record:

> “What does your character intend to do next?”

### Step 2 — Update four world variables

Only where consequences occurred.

### Step 3 — Record reputation changes

Four factions.

### Step 4 — Review active clocks

Greybank  
Elves  
Red-Tusk  
Daggerford  
Illefarn

### Step 5 — Review active threats

Advance only those with triggered progression.

### Step 6 — Record NPC changes

Dead  
Missing  
Injured  
Hostile  
Unavailable

### Step 7 — Update infrastructure/inventory

### Step 8 — Update investigations

### Step 9 — Record current campaign watch/day

---

# 18.4 Before next session

Resolve only developments that occur during elapsed in-world time.

Determine:

- faction next actions;
- visible consequences;
- changed inventories;
- updated threats;
- investigation progression;
- changed locations.

Do not invent changes simply because a real-world week passed.

---

# 19. DM Dashboard Prototype

```markdown
# THE BROKEN MARCH — STATE

DAY: 2
WATCH: Evening

## GREYBANK
Food:    4/6
Trade:   2/6
Defense: 3/6
Unity:   3/6

## PARTY REPUTATION
Greybank:     +1
Laughing Hollow: -1
Red-Tusk:      0
Daggerford:   +1

## FACTION / WORLD CLOCKS
Greybank Reaction:        3 — Organized Response
Laughing Hollow:          3 — Warning
Red-Tusk:                 C4 — Negotiation
Daggerford:               3 — Opportunity
Illefarn Instability:     3 — Active

## ACTIVE INVESTIGATIONS
Miller assault — Stage 4
Suspects: PC? / two quarry workers
Evidence: 2 Moderate

## ACTIVE THREATS
Wolf pack — 3/6 — advances next dawn
Quarry disturbance — 4/6 — advances if Illefarn system activated
Missing hunter — 2/6 — deadline: Night

## INFRASTRUCTURE
Bridge: DESTROYED
Mill: INTACT
Smithy: INTACT
Store: CLOSED
Watchtower: INTACT
Palisade: DAMAGED
Quarry: ACTIVE

## CRITICAL STOCK
Healing Potions: 1
Healer's Kits: 2
Antitoxin: 0
Chain Shirt: 1
Shield: 0
Horses: 1
Component Packages: 1

## NPC STATE
DEAD:
- shopkeeper

INJURED:
- militia hunter — severe

MISSING:
- quarry worker

UNAVAILABLE SERVICES:
- general store

## ILLEFARN
Outer Station: Accessible
Workshop: Discovered / Locked
Ward Node: ACTIVE
Transit System: Unknown

## PLAYER INTENTIONS
PC1:
PC2:
PC3:
PC4:

## NEXT WORLD ACTIONS
- Goblin envoy leaves at Dawn if unanswered.
- Investigation advances overnight.
- Daggerford wagon delayed by destroyed bridge.
```

This layout is the required information architecture for WP16.

---

# 20. Worked Examples

---

# Example A — Shopkeeper Murder

Situation:

The PCs murder Greybank's only general-store proprietor after an argument.

No system prescribes why they did it or how NPCs must interpret ambiguous evidence.

---

## A1. Immediate state

NPC:

> Shopkeeper → DEAD

Infrastructure:

> General Store → CLOSED

Critical stock remains physically inside unless:

- stolen;
- destroyed;
- secured by villagers.

---

## A2. If witnessed

A neighbor sees PC A stab the shopkeeper.

Crime:

> Murder — direct witness

Investigation begins effectively at:

> Stage 4 — Suspects Identified

Greybank Reaction may advance:

> 2 → 3

Greybank Reputation:

> 0 → -2

Why -2 rather than automatically -3?

Because one witness's claim may not yet mean the entire community has collectively decided to kill the party.

---

## A3. Evidence

Strong:

- eyewitness.

Moderate:

- blood on PC;
- known argument.

If PCs flee with shop goods:

additional strong/moderate evidence appears.

---

## A4. Inventory

The store does **not** reopen.

If villagers secure it:

remaining critical stock becomes inaccessible during investigation.

If PCs loot it:

they obtain what physically exists.

No stock respawns.

Trade may fall:

> Trade 3 → 2

if merchants perceive Greybank as unsafe or the shop was the normal commercial intermediary.

---

## A5. Player counteraction

PCs threaten witness.

They make an Intimidation check.

### Success

Witness may initially remain silent.

Investigation stalls or proceeds indirectly.

But:

- witness becomes Hostile;
- personal suspicion = Convinced.

### Failure

Witness immediately reports both:

- murder;
- intimidation.

Greybank Reaction can advance faster.

---

## A6. Speak with Dead possibility

If some later cleric capable of the spell becomes available:

the victim may identify the murderer if they saw them.

The spell is not weakened to protect the crime.

---

## A7. Mobilization

If evidence becomes conclusive and PCs resist arrest:

Greybank Reputation → -3.

Greybank Reaction → 5.

Village mobilizes.

The party now faces:

- bells;
- locked services;
- militia concentration;
- archers;
- route watchers;
- messenger to Daggerford.

They may:

- escape;
- surrender;
- negotiate;
- fight.

Openly fighting the village is likely disastrous.

---

# Example B — PCs Ignore Goblin Negotiations

Starting state:

Red-Tusk:

> Stage 2 — Resource Pressure

Reputation:

> -1

A messenger requests a meeting before the next evening.

---

## Day 1 — PCs pursue quarry problem

Meeting deadline passes.

No response.

This does not automatically mean “goblins become evil.”

Red-Tusk advances:

> Stage 2 → Stage 3 — Strategic Decision

Leadership interprets silence using existing relationship.

At Rep -1:

probable interpretation:

> Humans are unwilling to negotiate unless pressured.

---

## Night

Goblins scout Greybank supply routes.

Players can observe:

- tracks;
- missing chickens;
- watching figures.

---

## Day 2

PCs continue ignoring them.

Red-Tusk chooses WAR branch:

> W4 — Raiding

Why?

Because:

- food pressure remains;
- negotiations failed;
- no favorable relationship exists.

A raid targets livestock rather than randomly attacking adventurers.

Possible result:

> Food 4 → 3

Greybank may blame goblins.

Unity could remain unchanged initially.

---

## Alternative outcome

Suppose PCs previously released captured goblins and Red-Tusk Rep were +1.

Ignored meeting still matters.

But Stage 3 might branch instead toward:

> F4 — Withdrawal Preparations

Their leader concludes the humans cannot currently help and seeks another solution.

Same clock.

Different history.

No scripted “goblin attack because players skipped quest.”

---

# Example C — Bridge Destroyed to Stop a Monster

An overwhelming creature pursues the PCs across Greybank's river bridge.

Players correctly judge that fighting conventionally is disastrous.

They collapse the bridge.

---

## C1. Immediate tactical consequence

Creature cannot cross.

Encounter solved without direct victory.

The PCs:

- survive;
- protect Greybank from immediate attack;
- may gain reputation.

Greybank Reputation:

> +1 if villagers understand what occurred.

---

## C2. Infrastructure

Bridge:

> DESTROYED

Immediate direct consequence:

> Trade 3 → 2

No roll.

---

## C3. Replenishment

Healing potions scheduled to arrive next day.

At Trade 2:

arrival is delayed.

No potion replenishment occurs.

Players notice:

> “The Daggerford cart hasn't arrived.”

---

## C4. Price impact

Imported items:

> +25%

---

## C5. Secondary economic effect

Do **not** instantly reduce:

- Food;
- Unity;
- Defense.

Instead, future triggers may do so.

Example:

Two days later, if trade remains disrupted and medicine is exhausted:

a wounded NPC may lack treatment.

That becomes a new direct situation.

---

## C6. Faction reaction

Daggerford Commercial Clock may advance:

> Inquiry → Opportunity

because reconstruction now creates a commercial opening.

Alternatively, if danger remains extreme:

commercial involvement may stall.

---

## C7. Player response

Players can potentially:

- construct temporary crossing;
- negotiate goblin route access;
- activate Illefarn transport;
- hire repair crews;
- use boats;
- accept isolation.

The tactical solution created a strategic problem rather than being punished as a “wrong” choice.

---

# 21. Edge Cases and Adjudication Guidance

---

## 21.1 Multiple consequences from one action

Use only consequences that would be obvious even without the state system.

Do not search for ways to punish players.

Example:

PC burns mill to kill monster.

Reasonable:

- monster harmed;
- mill damaged/destroyed;
- Food risk created;
- possibly reputation consequences.

Unreasonable:

- automatic Trade loss;
- automatic Defense loss;
- automatic faction hostility;
- random unrelated NPC death.

---

# 21.2 Clever solutions

If a player plan logically bypasses a threat:

let it.

The state system records consequences after the fact.

It does not exist to force prepared encounters.

---

# 21.3 Extreme success

A brilliant negotiation may move:

- reputation;
- faction clock;
- threat state

simultaneously.

This is acceptable because they represent different things.

Example:

A treaty might produce:

- Red-Tusk Rep +1;
- Red-Tusk C4 → C5;
- Goblin raid threat removed.

---

# 21.4 Extreme failure

Likewise, a catastrophic choice can directly affect several systems where causally justified.

Do not artificially limit consequences to preserve encounter balance.

---

# 21.5 Reputation disagreements

Faction reputation is the default collective attitude.

Important NPCs may deviate.

At Greybank -2:

- one saved family can remain Friendly;
- victim's brother may be Hostile even if overall Greybank is +1.

---

# 21.6 Party split

World clocks use shared campaign time.

If PCs act simultaneously:

resolve actions within the same watch.

Do not charge two watches because two groups played separate scenes occurring concurrently.

---

# 21.7 Party wipe

The established campaign canon applies:

New characters can enter at current party level.

However, a party wipe creates:

- elapsed in-world time;
- unresolved threats advancing;
- lost equipment unless recovered;
- possible changed faction situations.

Use approximately:

**1–3 watches of lost time**

depending on replacement circumstances.

Do not impose arbitrary level penalties.

---

# 21.8 PCs leave Greybank

The simulation continues.

Advance:

- scheduled faction actions;
- active threats;
- investigations;
- resource consequences.

Do not run every NPC minute-by-minute.

Determine only changes likely to matter when PCs return.

---

# 21.9 Unknown information

DM state and player knowledge are separate.

Players should experience changed variables through fiction:

Trade 1:

> Empty shelves, complaints about the road, no wagon.

Not:

> “Trade is now one.”

Numbers can remain DM-facing unless visible tracking improves the table.

---

# 22. Final Canonical WP01 Rules

The following rules are canonical for later work packages.

## State

Greybank tracks exactly four global condition variables:

- Food 0–6
- Trade 0–6
- Defense 0–6
- Unity 0–6

Starting:

> Food 4 / Trade 3 / Defense 2 / Unity 4

---

## Reputation

Track party reputation separately for:

- Greybank;
- Laughing Hollow;
- Red-Tusk;
- Daggerford Interests.

Range:

> -3 to +3

Individual NPC attitude remains independent.

---

## Major clocks

Track:

- Greybank Reaction;
- Laughing Hollow Intervention;
- Red-Tusk Strategic State;
- Daggerford Commercial Involvement;
- Illefarn Instability.

Faction clocks describe **behavior**, not generic hostility.

Red-Tusk becomes a branching strategic clock.

---

## Time

Campaign time uses:

> **4-hour watches**

Long rest:

> **2 watches**

Short rest:

> approximately **1/4 watch**

World events progress according to stated deadlines, not because PCs happen to rest.

---

## Crime

Serious crimes create investigations.

Investigations use:

1. Crime discovered
2. Witnesses interviewed
3. Evidence collected
4. Suspects identified
5. Surveillance/questioning
6. Arrest/accusation

Evidence is:

- Weak;
- Moderate;
- Strong.

No courtroom subsystem is used.

---

## Investigation magic

Magic functions according to normal D&D logic.

The campaign does not weaken investigative spells.

Access to such magic must remain plausible within the setting.

---

## Resources

Do not track every mundane object.

Track:

- critical consumables;
- scarce weapons/armor;
- horses;
- specialized spell components;
- relevant project materials.

Bulk food/trade/material conditions remain abstract.

---

## Inventory

Consumed, stolen or destroyed goods remain gone.

Replenishment requires:

- functioning service;
- sufficient Trade or local production;
- elapsed time.

Unique service-provider death permanently removes that service until a plausible replacement emerges.

---

## Infrastructure

Track only structures with gameplay effects.

Core candidates:

- bridge;
- mill;
- smithy;
- general store;
- shrine;
- quarry;
- palisade;
- watchtower;
- farms;
- created apothecary.

State vocabulary:

- Improved
- Intact
- Damaged
- Disabled
- Destroyed

plus specific functional states where necessary.

---

## Threats

Ignored threats use a reusable six-stage escalation:

1. Sign
2. Incident
3. Escalation
4. Response
5. Collateral consequence
6. Regional outcome

Threats advance only according to defined triggers.

Player intervention may end or redirect them at any stage.

---

## NPCs

Recurring NPCs persist.

Minimum state:

- status;
- role;
- faction;
- PC attitude;
- service/resource;
- relevant knowledge;
- suspicion where applicable;
- current objective for important NPCs.

Dead NPCs remain dead.

---

## Illefarn

WP01 tracks:

- Instability 0–6;
- sector status;
- discovered systems;
- active systems;
- breaches.

WP06 defines actual dungeon mechanisms.

Dungeon changes persist into the overworld.

---

## Cascades

Systems may influence one another.

Automatic consequence chains stop after:

> **two links**

unless a major event directly changes multiple systems.

---

## Randomness

Deterministic consequences remain deterministic.

Roll only where uncertainty is meaningful.

The state model never requires dice purely to simulate activity.

---

## Village hostility

A village-wide response is an environmental/social military situation, not a sequence of level-balanced fights.

At full mobilization Greybank can use:

- alarm bells;
- militia;
- archers;
- dogs;
- barricades;
- locked buildings;
- civilian evacuation;
- terrain knowledge;
- denial of supplies;
- messengers to Daggerford.

A level 3–5 party openly fighting the whole settlement faces an extremely high probability of death.

Escape and surrender remain possible.

---

## DM operating principle

The DM prepares:

> **what happens if the players do nothing.**

Player choices then alter or replace those outcomes.

The state system records those changes.

It does not dictate the players' route, protect prepared encounters, or force a particular ending.

---

# WP01 Completion Criterion

WP01 is complete when later work packages can answer questions such as:

- What happens if the mill burns?
- What happens if the bridge falls?
- How quickly does a murder investigation progress?
- What changes while the party rests?
- How does an ignored goblin meeting evolve?
- When do healing potions replenish?
- What does Greybank Rep -2 actually do?
- What happens when the village mobilizes?
- How does an Illefarn activation alter external state?
- How does an NPC death permanently affect available services?

without inventing a new campaign-state framework.

This document is therefore the canonical rules engine for **The Broken March**.