---
title: "Resolve Arrival Direction"
source: "https://chatgpt.com/g/g-p-6a86ed0cc4788191bb7e118e24cf876a-d-d-5e-campaign-the-broken-march/c/6a92cc59-b308-83eb-9d27-f2531a529db4"
author:
published: 2026-09-19
created: 2026-10-27
description:
tags:
  - "clippings"
---
#### You said:

Been away from the project; give me a summary of where we got to.

#### ChatGPT said:

## Where we left the transcription project

The short version: **we got the entire first D&D session transcribed, diarized, partially speaker-attributed, manually audited, packaged, and committed to the private repo.** We had moved past experimenting with transcription models. The main unfinished work is improving the remaining speaker attribution and then turning the imperfect transcript into useful campaign/session information.

### 1\. We finished the pipeline experimentation

On the earlier controlled recordings, we established the basic architecture:

| Component | Decision |
| --- | --- |
| Primary audio | combined.flac |
| Local ASR | faster-whisper large-v3 |
| Diarization | pyannote Community-1 |
| Individual mics | Speaker evidence / selective repair only |
| Adaptive near-mic mix | Rejected |
| Qwen3-ASR | Rejected |
| Parakeet | Rejected |
| Narrative/context prompts | Avoid — caused hallucinations |
| Prompting | Short vocabulary/name prompts only |

The adaptive MIC A/B track sometimes helped, but also introduced serious hallucinations, so we deliberately kept the original combined track as the primary source. Transcription\_Pipeline\_Progress…

Whisper large-v3 remained our best **local** model, although we explicitly concluded that its raw accuracy wasn't sufficient for the bad five-hour D&D recording. Qwen and Parakeet both performed worse. Transcription\_Pipeline\_Progress…

That experimentation phase is effectively **done**. I would not restart model-shopping unless we deliberately decide to reevaluate newer models.

---

## 2\. We then processed the actual first D&D session

The usable recording began around:

**00:30:00 → 05:31:27**

So roughly **5 hours 1 minute 27 seconds** of actual session audio.

Because the recording quality was poor, we changed tactics from relying purely on local Whisper to using **ElevenLabs Scribe v2** for the main transcription.

The full session was split into five chunks and transcribed successfully.

Final merged transcription:

**31,494 words**

We also produced roughly:

**2,346 readable turns**, with **94 turns marked for review**, while removing **51 duplicated overlap words** introduced at chunk boundaries.

Crucially, the Scribe speaker labels were treated as meaningless chunk-local labels. We did **not** trust them for identity.

---

## 3\. Full-session diarization also succeeded

We ran pyannote over the retained 5-hour interval with a target of **five speakers**.

That produced the proper full-session diarization, including regular and exclusive forms.

The five anonymous clusters were then investigated using:

- pyannote speaker embeddings;
- microphone characteristics;
- where people were physically seated;
- transcript context;
- manually generated audit clips;
- your direct recognition of the voices.

The working cluster interpretation became approximately:

| Cluster | Identity |
| --- | --- |
| SPEAKER\_02 | DM / you |
| SPEAKER\_04 | DM / you |
| SPEAKER\_03 | Radu |
| SPEAKER\_00 | primarily Con |
| SPEAKER\_01 | primarily Mau |

There was one important complication:

**Peeka did not emerge as a clean standalone cluster.**

Some Peeka speech was absorbed into other clusters, particularly Mau's. Therefore we explicitly decided **not to simply globally rename clusters** and pretend speaker attribution was solved.

---

## 4\. We aligned the complete transcript with diarization

All **31,494 Scribe words** were retained and aligned against the pyannote timeline.

The initial automatic attribution managed to assign names to:

**13,702 words — 43.5%**

while:

**17,792 words remained UNKNOWN.**

Those numbers were **before your manual audit**, so they should not be interpreted as the final reviewed attribution quality.

We intentionally preferred UNKNOWN over confidently assigning the wrong person.

---

## 5\. You then manually audited representative speaker clips

This was probably the most valuable thing we did.

I generated audit clips A01–A12, and you identified them as:

- A01 — Peeka
- A02 — Peeka
- A03 — Peeka
- A04 — DM → Radu, switching approximately halfway
- A05 — DM + Mau talking over each other
- A06 — Mau → Radu
- A07 — Mau
- A08 — Mau
- A09 — Mau
- A10 — Con
- A11 — Unknown
- A12 — DM

This exposed exactly why global cluster renaming would have been dangerous: some regions contained speaker changes, overlaps, or incorrect cluster merging.

---

## 6\. We applied that audit conservatively

We created an audited/reviewed attribution layer rather than rewriting the raw data.

The review covered **134 relevant records**:

| Result | Records |
| --- | --- |
| Confirmed single-speaker | 76 |
| Mixed-speaker | 23 |
| Unresolved | 3 |
| Kept UNKNOWN because of boundary/timing uncertainty | 32 |

A04–A06 were deliberately marked as mixed rather than inventing precise speaker-switch timestamps we hadn't actually verified.

A05 remained explicitly overlapping speech.

**All original 31,494 word records and timestamps were preserved.**

That preservation rule was deliberate: every future improvement should operate as another evidence layer rather than destructively "cleaning" the source.

---

## 7\. We created the reviewed deliverables

The important final artifacts included:

Plain text

`sessions/20260830/reviewed/ ├── README.md ├── Session1_Transcript_Reviewed.md ├── apply_session1_audit.py ├── attributed_words_reviewed.jsonl ├── audit_corrections.json └── review_summary.json`

We also produced a packaged reviewed transcript earlier as:

Session1\_Reviewed\_Transcript\_Package.zip

So **Session1\_Transcript\_Reviewed.md is currently the main human-readable transcript to open if you just want to read Session 1.**

---

## 8\. Everything was committed to Git

Private repository:

aevisisawesome/dnd-transcription-private

The reviewed-attribution commit was:

**946afb9 — Add manually reviewed speaker attribution**

The six reviewed files above were added in that commit.

At the end:

**local main matched origin/main, and the working tree was clean.**

So there wasn't unfinished local work sitting around waiting to be committed.

---

## Current checkpoint

Conceptually, we're here:

**Raw recording → extraction → transcription → diarization → word alignment → speaker investigation → manual speaker audit → reviewed transcript → Git archive**

All of that is done.

What is **not** done is making the transcript genuinely useful for the D&D campaign.

There are two remaining layers.

**First, speaker attribution could still be improved.** The immediate technical cleanup would be identifying exact changeover points in A04 and A06, preserving A05 as overlap, and potentially auditing more UNKNOWN/high-value regions. Because Peeka is merged into other clusters, more audio evidence would be required if we wanted substantially better global attribution.

**Second — and probably more valuable now — is transcript interpretation/enrichment.** The plan when we stopped was to combine the reviewed transcript with campaign material, session notes, character/NPC names, journals, chats, and the actual campaign repository. An LLM can then reconstruct reliable session events while explicitly distinguishing high-confidence transcript evidence from uncertain or garbled sections.

#PERSONAL OPINION

I wouldn't spend much more time chasing perfect diarization.

We already crossed the useful threshold: **we have the entire session preserved, timestamped, diarized enough to identify most major participants, and a reviewed correction layer.**

The highest-value next step is now:

**Session1\_Transcript\_Reviewed.md → structured Session 1 reconstruction**

For example: scenes, player decisions, NPC interactions, combat, loot, promises, discoveries, unresolved threads, character knowledge, world-state changes, and things that must persist into Session 2.

That was the point where the transcription work could finally start paying off for **The Broken March** instead of remaining an audio-engineering project.

#### You said:

The highest-value next step is now: Session1\_Transcript\_Reviewed.md → structured Session 1 reconstruction For example: scenes, player decisions, NPC interactions, combat, loot, promises, discoveries, unresolved threads, character knowledge, world-state changes, and things that must persist into Session 2. That was the point where the transcription work could finally start paying off for The Broken March instead of remaining an audio-engineering project.

where is the transcript stored on my machine, give path

#### ChatGPT said:

The reviewed transcript should be here:

Plain text

`C:\Users\tomaa\Documents\dnd-transcription-private\sessions\20260830\reviewed\Session1_Transcript_Reviewed.md`

The whole reviewed-output folder is:

Plain text

`C:\Users\tomaa\Documents\dnd-transcription-private\sessions\20260830\reviewed\`

That is the version you want to open for the current best human-readable transcript.

#### You said:

The highest-value next step is now: Session1\_Transcript\_Reviewed.md → structured Session 1 reconstruction For example: scenes, player decisions, NPC interactions, combat, loot, promises, discoveries, unresolved threads, character knowledge, world-state changes, and things that must persist into Session 2. That was the point where the transcription work could finally start paying off for The Broken March instead of remaining an audio-engineering project.

I have some player journal nktes and gpt conversations from during the session that i want to use along with info from the transcript to create a summary of the entire series of events in that session. I plan to use this to generate a session summary for the players, one general, one per player (i.e. what does your character know atm, stuff like that) I alsowant a general session summary (as detailed as possible) to use to track world events and story progression and plan subsequent sessions. Is it worth using these notes to try to improve the transcript and diarization first OR just use the data together to generate the files

#### ChatGPT said:

Use the data together first. **Do not try to fully “fix” the transcript/diarization before doing the session reconstruction.**

The notes are much more valuable as **additional evidence** than as training data for another round of diarization.

### Recommended approach

Treat everything as separate evidence sources:

- reviewed transcript + timestamps
- player journal notes
- GPT conversations made during/after the session
- your DM notes
- campaign/world state before Session 1
- character sheets / backstories where relevant

Then build a **canonical Session 1 event timeline** from all of them.

For every meaningful event, record something like:

| Field | Example |
| --- | --- |
| Time/scene | ~01:42:00 / Greybank inn |
| Event | Party agrees to investigate X |
| Participants | Radu, Mau, Peeka |
| Evidence | transcript + Radu journal |
| Confidence | High |
| Character knowledge | Radu/Mau/Peeka know; Con doesn't |
| World consequence | NPC expects party tomorrow |
| Unresolved | Why NPC lied about X |
| Sources | transcript timestamp, journal paragraph |

That canonical timeline then becomes the **source of truth** from which we generate everything else.

### Where transcript correction fits

While reconstructing events, we'll inevitably encounter things like:

> Transcript: “We need to go to the northern blah something tomorrow.”

But a journal says:

> “We agreed to investigate the old Illefarn ruins north of Greybank tomorrow.”

If surrounding transcript/context strongly supports it, that's a good candidate for a **targeted transcript correction**.

So instead of:

**notes → fix 5 hours of transcript → analyze transcript**

do:

**transcript + notes → reconstruct events → correct only important ambiguous transcript sections**

This is considerably less work and probably produces a better result.

### Diarization specifically

I would **not** redo diarization based on the journals.

Written notes generally provide weak diarization evidence. They can occasionally tell us:

> “I told Mau that I wasn't going into the cave.”

and therefore help identify who said a specific line, but they don't solve the underlying acoustic clustering problem.

Use them to fix speaker attribution **only when identity matters to an event**.

For example, distinguishing:

> Mau: “I take the sword.”

from:

> Peeka: “I take the sword.”

matters.

Distinguishing who said:

> “Yeah, sure.”

usually doesn't.

---

## The pipeline I'd use now

Plain text

`RAW AUDIO     ↓ CURRENT REVIEWED TRANSCRIPT     ↓ ────────────────────────────         EVIDENCE MERGE ──────────────────────────── Transcript Player journals GPT conversations DM notes Character information Existing campaign state     ↓ CANONICAL SESSION 1 EVENT LEDGER     ↓     ├──► Detailed DM Session Record     │     - everything that happened     │     - NPC actions     │     - world changes     │     - consequences     │     - hidden information     │     - unresolved threads     │     - items/resources     │     - faction state     │     ├──► General Player Recap     │     - only collectively observable information     │     - readable narrative summary     │     - no spoilers     │     ├──► Mau Knowledge State     ├──► Radu Knowledge State     ├──► Peeka Knowledge State     ├──► Con Knowledge State     │     └──► Campaign State Changes           - input for Session 2 planning`

The **per-character knowledge state** is especially worth doing as structured data rather than just prose. For each character we can track things such as:

- facts they definitely know;
- things they believe but which may be false;
- secrets only they know;
- NPC relationships;
- promises/debts;
- items/resources;
- clues discovered;
- locations known;
- suspicions;
- goals;
- information they missed because their character wasn't present.

That distinction is extremely useful in a reactive campaign.

#PERSONAL OPINION

I would stop treating **“perfect transcript”** as the objective.

The transcript is now an evidence repository.

The actual valuable artifact is:

**“What objectively happened during Session 1, who knows what, and what changed in the world?”**

Once we have that, the bad audio matters much less.

And if the evidence merge exposes 20–30 genuinely important unclear moments, **then** we go back to the corresponding audio timestamps and manually resolve those. That's a far better use of effort than cleaning 5 hours indiscriminately.

#### You said:

Generate a detailed prompt to be used in a different project. Provide all relevand details on key file paths containing evidence for the repository. State the objective as per the plan you just outlined. I plan to request similar details from the other dedicated campaign story project about what the overarching story is and where the campaign info resides. I will then ask you to compose the two prompts together and the output i will run in my other project. Provide all necessary information. Do not assume. Do not halucinate.

#### ChatGPT said:

Below is the transcription/evidence-side handoff prompt. It is designed to be combined later with the campaign/story-side prompt.

One point I deliberately left out: I have **not** assigned paths to your player journals or GPT-session notes because you have not yet provided confirmed locations for them. Those should be added when the final combined prompt is built. The older pipeline-plan artifact itself explicitly says its purpose was preserving the earlier transcription setup and decisions, not the later Session 1 reconstruction state. Transcription\_Pipeline\_Progress…

ChatGPT can make mistakes. Check important info.

#### Latest response

#### You said:

what's a good way to download conversations from here to my pc in a token efficient (better if free) way. this is so i can use it as a source of info for another conversation

#### ChatGPT said:

**Use plain text (.txt) or Markdown (.md).** Both are easy to save on your PC and reuse in another conversation.

There are two separate costs: **exporting the conversation** and **having another AI read it**. Copying/exporting needs no AI generation; reading the text still uses context tokens.

| Your goal | Best approach | Cost/tradeoff |
| --- | --- | --- |
| Save one conversation immediately | Copy the messages into Notepad → save as .txt | Free; manual |
| Download many conversations | Built-in **Settings → Data controls → Export data** | Free; export can take up to 7 days |
| Minimize tokens in the next conversation | Save a compact handover summary | Uses one response to summarize; some detail is lost |

The built-in export downloads a ZIP containing your history. Its download link expires after 24 hours. You can extract conversations.json and upload it to another chat as reference, ideally selecting only the conversations you need.

![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fhelp.openai.com&size=32&drop_404_icon=true)

OpenAI Help Center

**#PERSONAL OPINION:** For your purpose, keep **a full transcript as backup and a short handover as the default input**. Give the next conversation the handover first, then relevant transcript sections when needed.

A useful handover should preserve:

- Goals, constraints, and relevant facts you supplied.
- Decisions and the reasons behind them.
- What was tried, what failed, and what remains unresolved.
- Exact numbers, filenames, commands, and source links where needed.
- A clear distinction between your statements and the assistant’s assumptions.

**Changing a transcript from PDF to TXT doesn’t magically shrink its text tokens.** The savings come mainly from removing repetition and irrelevant content. TXT/Markdown simply avoids unnecessary document formatting and extraction problems. Don’t ask the model to reprint the entire conversation just to export it—that spends output tokens reproducing text you already have.

ChatGPT can make mistakes. Check important info.

#### Latest response

Sat, Aug 29 at 3:11 PM

#### You said:

You are my live-session reference assistant for the D&D 5e mini-campaign **The Broken March**.

## Golden source

Use the current main branch of this GitHub repository:

[https://github.com/aevisisawesome/5e-reactive-campaign](https://github.com/aevisisawesome/5e-reactive-campaign)

Use the GitHub connector to inspect the repository recursively. Do not rely only on filenames, repository descriptions, or prior knowledge.

## Initial task

Before answering campaign questions, thoroughly read and understand:

- Campaign design doc.md
- all completed work-package files, currently WP01 through WP08
- all Session 1 Prep files
- The Broken March - DM Guide/
	- every HTML page
		- index.html
		- assets/entities.js
		- assets/state.js
		- other text/code files containing campaign information
- relevant supporting prompt or planning documents when they clarify intended scope or completion status

Do not treat images or styling files as major lore sources, but inspect their filenames and contextual references where useful.

Build an internal reference covering:

- campaign premise, tone, intended experience, level progression, and session structure;
- what work has been completed and what remains incomplete;
- campaign-state systems, clocks, consequences, alerts, suspicion, supplies, and persistent changes;
- Greybank’s locations, services, laws, inhabitants, and current situation;
- NPC identities, motivations, relationships, knowledge, secrets, and likely reactions;
- factions, objectives, resources, and escalation behavior;
- regional locations, travel, encounters, and Illefarn;
- Session 1 structure, scenes, clues, encounters, contingencies, rewards, handouts, items, and stat cards;
- everything implemented in the interactive DM guide, including data stored in JavaScript rather than visible prose.

Do not produce a large summary after reading. Confirm briefly that the repository and DM guide have been reviewed and that you are ready for questions.

## Source handling

The repository’s current main branch is the campaign’s golden source.

However, files inside the repository may contradict one another. Never silently reconcile, average, or choose between materially conflicting statements.

When a question touches conflicting information, respond in this compact form:

**CONFLICT**

- \[source file\]: version A
- \[source file\]: version B
- **DM ruling needed:** state the exact choice required.

The DM makes the final decision.

Do not flag differences that are merely a shortened summary versus a more detailed explanation. Flag only genuinely incompatible information or ambiguity that would affect play.

If the DM makes a ruling in this conversation:

- treat it as authoritative for the remainder of the conversation;
- remember it consistently;
- state briefly which interpretation is now active;
- do not modify the repository unless explicitly asked.

## Live-session response style

Questions will often be typed during play, so responses must be concise, condensed, and immediately usable.

Default format:

1. Give the direct answer first.
2. Add only the mechanics, DCs, consequences, or context needed to run the moment.
3. Mention the source file briefly when useful.
4. Avoid introductions, repetition, long explanations, and generic DM advice.

Use bullets or a compact table when faster to scan.

For NPC roleplay questions, prioritize:

- what the NPC wants now;
- what they know;
- what they conceal;
- how they respond;
- one short sample line only if useful.

For encounters, prioritize:

- immediate situation;
- relevant mechanics;
- enemy behavior;
- alternative solutions;
- consequences of failure, delay, retreat, or violence.

For location questions, prioritize:

- what the players immediately perceive;
- interactive features;
- clues or dangers;
- relevant NPCs;
- state-dependent changes.

## Vocabulary rule

Whenever you use an obscure, archaic, setting-specific, or unusually technical word, immediately add a plain synonym or short meaning in curly brackets.

Examples:

- reeve {local magistrate}
- moot hall {village meeting hall}
- palisade {wooden defensive wall}

Do this naturally and only where clarification is useful.

## Accuracy rules

- Do not invent campaign facts.
- Clearly label reasonable improvisation as **Suggestion**.
- Distinguish campaign-specific rules from standard D&D 5e rules.
- If the repository does not answer the question, say: **Not defined in the repository.**
- If information may exist but has not yet been located, search the repository again before answering.
- Preserve established names, terminology, mechanics, numbers, and consequences exactly.
- Never reveal hidden DM information unless the DM’s question requires it.
- Assume the person asking is the DM, not a player.

Begin by reading the complete repository and DM guide. Then give only a brief readiness confirmation.

Players are travelling southwards, Give me the intro scene and setting

#### ChatGPT said:

**CONFLICT**

- WP08 — Session 1 §4.1: Hook 1 explicitly says **“Passing through, southbound.”**
- WP08 — Session 1 §4.2: says the party **approaches from the south, over the bridge**, which geographically implies northbound travel.
- **DM ruling needed:** for your stated **southward travel**, I recommend treating §4.1 as authoritative and **reversing the physical arrival direction**: they approach Greybank from the **north**, cross the village, then the bridge when continuing south.

For immediate play, use this southbound version:

The road south has been unremarkable for most of the day: damp earth, low fields, scattered woodland, and the occasional cart rut holding yesterday's rain.

Then, ahead, the land begins to gather around a small settlement.

Greybank is not fortified. Stone-and-thatch cottages cluster around a broad village green, smoke rising from their chimneys. Beyond them, the ground drops toward a dark river crossed by a narrow stone bridge. Farther off, cut into the pale hillside, a stepped limestone quarry catches the afternoon light.

The village is working, but as you enter, people notice you. A man carrying timber stops long enough to look. Two children at the well stare openly. Someone disappears through a doorway.

From the quarry comes the distant knock of stone on stone.

Then it stops.

A line of quarrymen is already coming down the hillside.

They are early.

None of them are talking.

**What they immediately see**

- **Green:** open turf, well, bell post, children, Old Tarn watching from a bench.
- **Village:** stone/thatch buildings, water butts, roughly 20–30 people visible; strangers are noticed immediately.
- **Pale:** the white stepped quarry north/uphill; crew descending early and silently.
- **Southward route:** eventually takes them over the **90-ft bridge**, only 11 ft wide, with **no parapet {protective wall} on the downstream side**, then through the toll shed and toward the Cut {narrow road through steep banks}.
- **Important:** nobody asks them to solve anything yet. Greybank is curious, **not suspicious**. The opening should feel like a functioning place with one slightly wrong detail: **the quarry stopped early.**

Canonically, Session 1 begins **Day 1, Afternoon**, with Greybank still functioning normally; destabilization comes afterward. The broader campaign establishes Greybank as the small persistent village at the center of play. Campaign design doc

#### You said:

Old Tarn

[GitHub](https://chatgpt.com/plugins/plugin_connector_1p_1a69035c238881919c4190932b2df699) what is old tarn? also; which way from daggerford is greybank

#### ChatGPT said:

**Old Tarn**

- Elderly Greybank resident, lives at **H21**.
- **Isolationist**, starts **Wary** toward the party.
- Spends Morning→Evening sitting where he can watch the Green.
- **Sees almost everything, but reports it inaccurately** — useful witness, unreliable testimony.
- Functionally, he represents the isolationist attitude in Greybank, but **has no organised bloc behind him**.
- Tonight: stays indoors awake, “complaining to nobody.”

**Daggerford → Greybank**

- Greybank is about **40 miles northwest of Daggerford**.
- Daggerford lies **south-east of Greybank**.
- The Daggerford road approaches Greybank from the **south-east**, through **the Cut**, then reaches the bridge.
- Travel: **2 days on foot/cart**, or **1 hard day mounted**.

So your players traveling **southward from Daggerford to Greybank is geographically wrong**. From Daggerford to Greybank they would be traveling broadly **north-west**. This also resolves the earlier arrival contradiction: WP08's **“approach from the south, over the bridge”** is consistent with coming from Daggerford; the “passing through, southbound” hook is the inconsistent piece.

#### You said:

actually, they will be travelling to daggerford; not yet having reached it, from waterdeep

#### ChatGPT said:

Then the correct setup is:

- **Waterdeep → Daggerford:** broadly **south / south-east along the Trade Way**.
- **Greybank:** about **40 miles northwest of Daggerford** according to WP05, so it can plausibly lie **before Daggerford** on their southbound journey, but it is not directly on the canonical Waterdeep–Daggerford route as written in the repo.
- For your campaign, the clean interpretation is: the party has come south from Waterdeep, taken a western/northwestern local road or detour, and reaches Greybank before continuing southeast to Daggerford.

So the earlier **“passing through, southbound”** hook now works well. The party is travelling generally south from Waterdeep toward Daggerford, and Greybank is an intermediate stop before they continue southeast.

The only thing to keep consistent at the table is that after Greybank, **Daggerford is southeast**, not due south.

#### You said:

ok how do they find the tavern

#### ChatGPT said:

They find it easily. The **Sundered Cart** is **G3, the taproom**, directly on **The Street**, Greybank’s main road, beside the store and near the smithy.

From the **north/Waterdeep-side arrival**, have them enter the village, reach the Green, then continue onto The Street. The tavern is one of the obvious public buildings there.

Use:

> A little beyond the Green, the village narrows into a single hard-packed street. A general store faces a low, broad building with smoke coming from its chimney and voices behind the shutters. A weathered sign hangs over the door: a cart with one wheel split clean through. **The Sundered Cart.**

Inside, **Rosal Tunn** runs the place. She has **four sleeping pallets at 5 cp each**, serves food, and is effectively Greybank’s information exchange.

No check needed to find it. It is a normal, prominent village service.

#### You said:

+they enter the sundered cart; what do they see, who do they encounter?

#### ChatGPT said:

As they enter **the Sundered Cart**, it is already busy. This is Greybank’s evening information exchange, not a quiet roadside inn.

**Read aloud:**

> The Sundered Cart is a low, crowded room, perhaps thirty feet by twenty-five, built around a broad central hearth. Smoke, wet wool, quarry dust and cooked food hang in the air. Most of the tables are occupied, and conversation dips slightly when you enter before starting again around you.
> 
> A group of quarrymen occupy one side of the room. There are six of them. They should be loud after a day at the face, but tonight they are drinking slowly and saying very little.
> 
> Behind the room, a woman moves constantly between tables, carrying bowls, mugs and three conversations at once.

### Immediately present

| NPC | What they're doing |
| --- | --- |
| **Rosal Tunn** | Proprietor. Working constantly and talking at everyone. **Friendly** toward the PCs. She naturally feeds them village rumours while serving them. |
| **6 quarrymen** | Came down **early** today. Drinking less than usual. They conspicuously **do not discuss the lowest bench**. |
| **Vadd Brune** | Drinking here when he is supposed to be collecting charcoal from Ib Sallow. Mostly agrees with whoever spoke last. |
| **Serina Malk** | Outsider, travelling alone. **Buying drinks for the quarry crew** and casually asking about the lowest bench. |
| Other villagers | Enough that the room feels full and anything conspicuous the PCs say will spread through Greybank. |

Later during the evening:

- **Berrick Hone** arrives late, has one drink, and will over-explain Greybank's militia if anyone engages him.
- **Kael Durrow**, quarry foreman, arrives **very late from the quarry**, says almost nothing, and leaves before the crowd thins.
- **Gedd Plank** can tell them about the road and **the Cut**.
- **Wat Dray**, 16, is here despite probably not being supposed to be, and will eagerly tell strangers nearly anything.

### Rosal's opening

She doesn't give them a quest. She handles lodging while casually interrogating them:

> “Four pallets upstairs. Five copper each. That's all I've got. Food's hot if you want it. You heading Daggerford way?”

Then keep her working while she drops rumours into unrelated conversation. The six rumours available **this evening** are:

- four sheep have gone missing;
- dogs have stopped wanting to go out;
- six quarrymen have “gone quiet”;
- charcoal is late;
- **a woman is buying** — Malk;
- the bridge has no downstream rail.

The main visual you want the players to notice without announcing its significance is:

**six unusually quiet quarrymen + Malk buying their drinks + Durrow arriving late from the quarry.**

They are three separate observations. Don't explain the connection yet.

#### You said:

how much for 2x ales in a taproom?

#### ChatGPT said:

**Not defined in the repository.**

Standard 5e pricing: **1 mug of ale = 4 cp**.

So **2 ales = 8 cp**.

**Suggestion:** Use that unchanged at the Sundered Cart.

#### You said:

serina malk passive perception

#### ChatGPT said:

**Not defined in the repository.** Serina Malk does not currently have a specified Passive Perception score.

ChatGPT can make mistakes. Check important info.

#### Latest response

Sat, Aug 29 at 12:24 PM

#### You said:

[GitHub](https://chatgpt.com/plugins/plugin_connector_1p_1a69035c238881919c4190932b2df699) write a prompt for going through the repository and understanding what the campaign is about and what has been done so far, including the dm guide. We will then use the fresh conversation to prompt for information from the materials. Any conflicting info should be called out when asked about and the DM will make the call. Responses should be concise and condensed as the questions will be typed during a live session. When an obscure word is used, add a synonym between {} brackets.

#### ChatGPT said:

Copy this into a fresh conversation with the GitHub plugin selected:

ChatGPT can make mistakes. Check important info.

#### Latest response

Response complete Response complete