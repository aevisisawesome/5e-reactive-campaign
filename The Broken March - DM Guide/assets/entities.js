/* ==========================================================================
   The Broken March — Interactive DM Guide
   assets/entities.js — the entity registry (data only, no behaviour)

   Built by chunk G1. Complete: 153 entities.

   Schema — required: id, name, aliases, type, tag, summary, href
            optional: img

   type ∈ npc | location | zone | sector | faction | term | item | creature | rumour

   Counts:  npc 34 · location 23 · zone 18 · sector 16 · faction 4
            term 27 · item 10 · creature 9 · rumour 12   →  153 entries

   location is 23, not 22: the twenty-two numbered village locations G1–G22,
   plus Greybank itself, which prose refers to constantly and which needs a
   link target of its own.

   RULES FOR LATER CHUNKS
   ----------------------
   1. No two entities may share a surface form. `name` and every `alias` must
      be unique across the whole registry, or the auto-linker resolves the
      collision arbitrarily. Where a zone and a location share a name in the
      sources — Z2 "The Pale" and G14 "The Quarry, the Pale" — the location
      keeps the evocative name and the zone is addressed by its code.
   2. `href` is page-qualified so links work across files. NPCs, locations
      and zones land in 04-reference-people-places.html (G5); sectors,
      items, creatures and rumours in 05-reference-props.html (G6); factions
      and terms in 01-introduction.html (G2). Those chunks must provide the
      matching anchor ids, and G8 checks every one of them.
   3. `img` is present only where Session 1 Prep — Visual Assets (WP15)
      actually generates the picture. Do not invent filenames.
   4. Every summary is written from its source, memorable fact first. Never
      ship an entity with an empty summary.
   ========================================================================== */

var ENTITIES = [

  /* ====================================================================== */
  /* NPCs — 28 villagers (WP03 §3.2) + 6 faction NPCs (WP04 §13)            */
  /* ====================================================================== */

  /* --- Tier 1: full sheets, WP03 §5 ------------------------------------- */
  {
    id: "ondra-vell",
    name: "Ondra Vell",
    aliases: ["the Reeve", "Reeve Vell"],
    type: "npc",
    tag: "Reeve of Greybank · G11 · Leadership · Neutral",
    summary: "Holds the labour levy, the moot chest and the granary key — <strong>every village project runs through her</strong>. Moves on results, not on courtesy. Fears being the Reeve who lost the village: not death, <em>record</em>. If she dies the moot must choose again — <strong>Unity −1</strong>, and no project can be organised until they do. <span class=\"cite\">WP03 §5.1</span>",
    href: "04-reference-people-places.html#npc-ondra-vell",
    img: "npc-ondra-vell.webp"
  },
  {
    id: "maud-elleth",
    name: "Maud Elleth",
    aliases: ["Maud", "the herbwife"],
    type: "npc",
    tag: "Herbwife · G22 · Neutral",
    summary: "A half-elf who looks fifty and is not. Says <em>“mm”</em> instead of yes, and will treat anyone she despises and charge them afterwards. She is <strong>every healing item in Greybank that is not a potion</strong>, made locally rather than imported — which makes her death <strong>the worst single death in the campaign</strong>. <span class=\"cite\">WP03 §5.2</span>",
    href: "04-reference-people-places.html#npc-maud-elleth",
    img: "npc-maud-elleth.webp"
  },
  {
    id: "ordga-brune",
    name: "Ordga Brune",
    aliases: ["Ordga"],
    type: "npc",
    tag: "Smith · G5 · Craft · Wary",
    summary: "Shield dwarf, exacting to the point of obstruction, and <strong>will refuse rush work at any reputation</strong>. She has said twice, out loud, that <strong>the quarry's old stone is cut in a way no chisel she knows produces</strong>, and been ignored both times — the best free lead in the village. Without her there is no smithing at all. <span class=\"cite\">WP03 §5.3</span>",
    href: "04-reference-people-places.html#npc-ordga-brune",
    img: "npc-ordga-brune.webp"
  },
  {
    id: "sember-dray",
    name: "Sember Dray",
    aliases: ["Sember"],
    type: "npc",
    tag: "Storekeeper · G4 · Trade · Neutral",
    summary: "Prices things aloud while talking about something else, and ends statements with <em>“…which is what it is.”</em> Carries <strong>nine households on credit</strong> and would be embarrassed to hear it called kindness. The ledger is a map of the village's private desperation and nobody has ever seen it. <span class=\"cite\">WP03 §5.4</span>",
    href: "04-reference-people-places.html#npc-sember-dray",
    img: "npc-sember-dray.webp"
  },
  {
    id: "kael-durrow",
    name: "Kael Durrow",
    aliases: ["Durrow"],
    type: "npc",
    tag: "Quarry foreman · G14 · Quarry · Wary",
    summary: "Responsible for fourteen men in a hole in the ground and behaves accordingly. Not hostile — <strong>occupied</strong>. Holds quarry access and the six charges of blasting powder, and <strong>he has already opened the aperture once, alone, gone ten feet in with a lantern, and told nobody.</strong> <span class=\"cite\">WP03 §5.5</span>",
    href: "04-reference-people-places.html#npc-kael-durrow",
    img: "npc-kael-durrow.webp"
  },
  {
    id: "berrick-hone",
    name: "Berrick Hone",
    aliases: ["Berrick", "Hone"],
    type: "npc",
    tag: "Militia captain · H1 / G12 · Militia · Neutral",
    summary: "Over-explains, gives a three-step plan for a one-step problem, and <strong>wants very badly to be adequate to something</strong>. Knows every approach to the village and that three of them are unwatched; he has raised it twice. Eleven years ago, in the wolf winter, <strong>he ran</strong>, and Halvard Vell has never said. <span class=\"cite\">WP03 §5.6</span>",
    href: "04-reference-people-places.html#npc-berrick-hone",
    img: "npc-berrick-hone.webp"
  },
  {
    id: "enna-fisk",
    name: "Enna Fisk",
    aliases: ["Enna"],
    type: "npc",
    tag: "Wright · H4 · Craft · Friendly",
    summary: "The only person who whistles in Greybank, and <strong>Friendly from the first conversation</strong> — she is the party's way in. Can quote the whole upgrade catalogue from memory. Without her <strong>every build and repair time is +50%, permanently</strong>, and there is no substitute on the quarry crew: this is the death the players will not see coming and will feel for the rest of the campaign. <span class=\"cite\">WP03 §5.7</span>",
    href: "04-reference-people-places.html#npc-enna-fisk",
    img: "npc-enna-fisk.webp"
  },
  {
    id: "rosal-tunn",
    name: "Rosal Tunn",
    aliases: ["Rosal"],
    type: "npc",
    tag: "Taproom keeper · G3 · Trade · Friendly",
    summary: "The village's switchboard, and she knows it. Talks <em>at</em> people while working and delivers every piece of news inside an unrelated anecdote. She fears the room emptying — not poverty, <strong>the room emptying</strong>. <strong>Paying for someone else's meal is the cheapest genuine reputation gain in the campaign.</strong> <span class=\"cite\">WP03 §5.8</span>",
    href: "04-reference-people-places.html#npc-rosal-tunn",
    img: "npc-rosal-tunn.webp"
  },
  {
    id: "corvin-ash",
    name: "Corvin Ash",
    aliases: ["Corvin", "the miller"],
    type: "npc",
    tag: "Miller · G6 · Neutral",
    summary: "Deaf in the left ear from forty years beside the wheel; says <em>“eh?”</em> and then answers before you repeat it. Reads the river better than anyone and <strong>will tell the party about the shoal</strong>. Holds the sluice, which raises the water at the shoal by eighteen inches. The mill is loud enough that he sees nothing and hears less during a working watch. <span class=\"cite\">WP03 §5.9</span>",
    href: "04-reference-people-places.html#npc-corvin-ash"
  },

  /* --- Tier 2: compact sheets, WP03 §6 ---------------------------------- */
  {
    id: "lisbet-ash",
    name: "Lisbet Ash",
    aliases: ["Lisbet"],
    type: "npc",
    tag: "Miller's daughter · G6 · Neutral",
    summary: "Nineteen, and <strong>the only true redundancy in Greybank</strong> — she can run the mill alone. She is also the roster's demonstration that attitude beats reputation: whatever the party does for the Ash family should still hold at <strong>Greybank Rep −2</strong>. <span class=\"cite\">WP03 §6.2</span>",
    href: "04-reference-people-places.html#npc-lisbet-ash"
  },
  {
    id: "wat-dray",
    name: "Wat Dray",
    aliases: ["Wat"],
    type: "npc",
    tag: "Apprentice smith · G4 / G5 · Craft · Friendly",
    summary: "Sixteen, all wrists, proud of a fresh burn, and says <em>“Ordga says—”</em> constantly. <strong>The party's most eager guide</strong>: he will take them anywhere and tell them anything, including things Sember and Ordga would not. Manages simple repairs at doubled time and no new production. <span class=\"cite\">WP03 §6.1</span>",
    href: "04-reference-people-places.html#npc-wat-dray"
  },
  {
    id: "gedd-plank",
    name: "Gedd Plank",
    aliases: ["Gedd"],
    type: "npc",
    tag: "Carter · H3 / G16 · Trade · Neutral",
    summary: "Measures everything in days — <em>“that's a two-day answer.”</em> Holds the Daggerford run and the village's two horses, and is <strong>the first person who will notice the road has changed</strong>. Anyone can drive a cart; nobody else knows who to ask for what at the far end. <span class=\"cite\">WP03 §6.3</span>",
    href: "04-reference-people-places.html#npc-gedd-plank"
  },
  {
    id: "nissa-crake",
    name: "Nissa Crake",
    aliases: ["Nissa"],
    type: "npc",
    tag: "Bell-warden · H2 / G10 · Militia · Friendly",
    summary: "Halfling, sleeps in her clothes, and asks <em>“did you hear that?”</em> about things nobody heard. <strong>Greybank's only reliable night witness</strong> and one of two people who can shoot. She wants to be believed the first time. She is the campaign's tripwire — for enemies <em>and</em> for the party. <span class=\"cite\">WP03 §6.4</span>",
    href: "04-reference-people-places.html#npc-nissa-crake",
    img: "npc-nissa-crake.webp"
  },
  {
    id: "yorrin-fell",
    name: "Yorrin Fell",
    aliases: ["Yorrin"],
    type: "npc",
    tag: "Lay-keeper of the shrine · G9 · Neutral",
    summary: "<strong>He casts nothing — not a cantrip</strong>, and that is load-bearing canon. Leaves silences that people fill with things they meant to keep. Holds the rites, the sanctuary custom, and the strongbox with <strong>Greybank's second Potion of Healing, which is not for sale</strong>. <span class=\"cite\">WP03 §6.5</span>",
    href: "04-reference-people-places.html#npc-yorrin-fell",
    img: "npc-yorrin-fell.webp"
  },
  {
    id: "denk-ottersby",
    name: "Denk Ottersby",
    aliases: ["Denk", "Ottersby"],
    type: "npc",
    tag: "Ferryman and toll-keeper · G8 / G2 · Neutral",
    summary: "Understates everything; a flood is <em>“a bit of water.”</em> Holds the skiff — the only crossing if the bridge falls — and <strong>the crossing book</strong>, three years of who came and went, and the most under-used investigative resource in the village. Three months ago he was <strong>paid four silver not to write down a wagon</strong>, and has thought about it every day since. <span class=\"cite\">WP03 §6.6</span>",
    href: "04-reference-people-places.html#npc-denk-ottersby"
  },
  {
    id: "bessa-ruddock",
    name: "Bessa Ruddock",
    aliases: ["Bessa"],
    type: "npc",
    tag: "Head shepherd · G18 · Farm · Neutral",
    summary: "Runs the fold, and has lost <strong>four ewes since the moon turned</strong>. Talks to people the way she talks to dogs — short, clear, and not unkind. She is the campaign's first threat signal with a face on it, out past dark with a lantern and two dogs, 260 yards from anyone who could help. If she dies, <strong>Food −1</strong> and the early warning goes with her. <span class=\"cite\">WP03 §6.7</span>",
    href: "04-reference-people-places.html#npc-bessa-ruddock",
    img: "npc-bessa-ruddock.webp"
  },
  {
    id: "tam-orrick",
    name: "Tam Orrick",
    aliases: ["Tam", "Orrick"],
    type: "npc",
    tag: "Senior farmer · H32 · Farm · Neutral",
    summary: "Says <em>“well, now”</em> before every opinion, and the opinion is always shorter than expected. <strong>Speaks for eight of the thirty-four households at moot.</strong> He and Kael Durrow want the same twenty bodies at the same time, and both men are already having that argument. <span class=\"cite\">WP03 §6.8</span>",
    href: "04-reference-people-places.html#npc-tam-orrick"
  },
  {
    id: "halvard-vell",
    name: "Halvard Vell",
    aliases: ["Halvard"],
    type: "npc",
    tag: "Former Reeve · G11 · Leadership · Neutral",
    summary: "Seventy-eight, <strong>sharp two days in three</strong>, in a chair by the Moot Hall fire that everyone walks past. He is the village's search function if anyone thinks to sit down with an old man: the wolf winter, the old Daggerford terms, and that <strong>the ring was breached deliberately, to widen the haul road</strong>, and nobody meant it to stay that way. <span class=\"cite\">WP03 §6.9</span>",
    href: "04-reference-people-places.html#npc-halvard-vell"
  },
  {
    id: "pell",
    name: "Pell",
    aliases: [],
    type: "npc",
    tag: "Fostered girl, Moot Hall · G11 · Friendly",
    summary: "Twelve, fast, and in every part of the village in the course of a day. Reports things breathlessly and in the wrong order, and gets the important detail right by accident. <strong>The cheapest information source in the campaign and a live moral hazard</strong> — and if she dies, Ondra Vell goes Hostile permanently. <span class=\"cite\">WP03 §6.10</span>",
    href: "04-reference-people-places.html#npc-pell",
    img: "npc-pell.webp"
  },
  {
    id: "nen-dray",
    name: "Nen Dray",
    aliases: ["Nen"],
    type: "npc",
    tag: "Sember's niece · G4 · Trade · Neutral",
    summary: "Fourteen, says almost nothing to strangers and then corrects a price. Can mind the counter but <strong>cannot order from Daggerford</strong>. She knows more of what is in the ledger than her uncle realises. <span class=\"cite\">WP03 §6.11</span>",
    href: "04-reference-people-places.html#npc-nen-dray"
  },
  {
    id: "vadd-brune",
    name: "Vadd Brune",
    aliases: ["Vadd"],
    type: "npc",
    tag: "Hauler · G5 · Craft · Neutral",
    summary: "Dwarf, strong and visibly bored; agrees with whatever was just said and then does what he was going to do. Hauls charcoal and stock for the forge and <strong>does not smith and never will</strong>. The party's easiest recruit for something dubious, and Ordga will never forgive them for it. <span class=\"cite\">WP03 §6.12</span>",
    href: "04-reference-people-places.html#npc-vadd-brune"
  },
  {
    id: "ib-sallow",
    name: "Ib Sallow",
    aliases: ["Ib", "Sallow"],
    type: "npc",
    tag: "Charcoal burner · G20, far bank · Neutral",
    summary: "Black to the elbows, smells of smoke from ten feet away, and talks a great deal having spoken to nobody for days. He reads the far-bank woods better than anyone alive and is <strong>the most isolated named person in the campaign</strong> — alone across the water, out of earshot of the bell. Without his charcoal the smithy halves. <span class=\"cite\">WP03 §6.13</span>",
    href: "04-reference-people-places.html#npc-ib-sallow",
    img: "npc-ib-sallow.webp"
  },

  /* --- Tier 3: background named, WP03 §7.1 ------------------------------ */
  {
    id: "corm-iddick",
    name: "Corm Iddick",
    aliases: ["Corm", "Iddick"],
    type: "npc",
    tag: "Bunkhouse ganger · G15 · Daggerford men · Wary",
    summary: "Speaks for the six Daggerford men who sleep outside the ring. <strong>Will buy on commission for anyone the village has refused</strong> — which is what makes Greybank Reputation −2 survivable. <span class=\"cite\">WP03 §7.1</span>",
    href: "04-reference-people-places.html#npc-corm-iddick"
  },
  {
    id: "sabel-quist",
    name: "Sabel Quist",
    aliases: ["Sabel", "Quist"],
    type: "npc",
    tag: "Quarryman · G15 · Daggerford men · Neutral",
    summary: "Has worked the lowest bench and <strong>will not any more</strong>. Won't say why; there isn't a why. He is a Level 1 threat signal that costs the party nothing to find, and his silence has spread through the other five. <span class=\"cite\">WP03 §7.1</span>",
    href: "04-reference-people-places.html#npc-sabel-quist"
  },
  {
    id: "hessa-grail",
    name: "Hessa Grail",
    aliases: ["Hessa"],
    type: "npc",
    tag: "Quarry widow · H6 · Quarry · Wary",
    summary: "Her husband died at the face four years ago. <strong>Kael Durrow owes her something he cannot pay</strong>, and Sember carries her on credit. She sits up with the shutters open, watching the haul road. <span class=\"cite\">WP03 §7.1</span>",
    href: "04-reference-people-places.html#npc-hessa-grail"
  },
  {
    id: "dov-marrek",
    name: "Dov Marrek",
    aliases: ["Dov", "Marrek"],
    type: "npc",
    tag: "Quarryman · H7 · Quarry · Neutral · on the militia roll",
    summary: "One of the nine men both Berrick Hone and Kael Durrow are counting on. Drinks at the Cart and complains about drills. <strong>He is the man under the stone when the bench comes down on Day 2</strong>, and the argument about the shrine potion is about him. <span class=\"cite\">WP03 §7.1, WP08 §7</span>",
    href: "04-reference-people-places.html#npc-dov-marrek"
  },
  {
    id: "alys-penn",
    name: "Alys Penn",
    aliases: ["Alys"],
    type: "npc",
    tag: "Field household · H13 · Farm · Neutral · on the militia roll",
    summary: "Turns out for every muster, first, and <strong>has never been thanked for it</strong>. In bed by full dark, up at dawn. She and Dov Marrek turn the Hone–Durrow manpower argument from a number into two specific people. <span class=\"cite\">WP03 §7.1</span>",
    href: "04-reference-people-places.html#npc-alys-penn"
  },
  {
    id: "old-tarn",
    name: "Old Tarn",
    aliases: ["Tarn"],
    type: "npc",
    tag: "Elderly · H21 · Isolationist · Wary",
    summary: "Sits where he can see the Green from Morning to Evening. <strong>Sees everything and reports it inaccurately</strong> — the campaign's demonstration that testimony has quality, not just existence. He says the quarry was somebody else's before it was Greybank's, and is accidentally right about the half that matters. <span class=\"cite\">WP03 §7.1</span>",
    href: "04-reference-people-places.html#npc-old-tarn"
  },

  /* --- Faction NPCs, WP04 §13 ------------------------------------------- */
  {
    id: "vaerelin-ossuine",
    name: "Vaerelin Ossuine",
    aliases: ["Vaerelin", "Ossuine"],
    type: "npc",
    tag: "Warden-speaker, Laughing Hollow · Neutral",
    summary: "A moon elf who carries a bow he does not draw; <strong>the stillness is the memorable thing</strong>. He wants the site closed and left closed, and fears being right too late — again. His attitude moves on <strong>conduct at the site and nothing else</strong>: courtesy does not affect him, and neither does rudeness. He gives exactly one explicit warning and then acts. <span class=\"cite\">WP04 §13.1</span>",
    href: "04-reference-people-places.html#npc-vaerelin-ossuine"
  },
  {
    id: "nethra",
    name: "Nethra",
    aliases: [],
    type: "npc",
    tag: "Warden-scout, Laughing Hollow · Neutral",
    summary: "Has watched Greybank for eleven years and asks about people by name — <em>“the one with the ledger”</em>, <em>“the child who runs”</em> — and is embarrassed to be caught knowing them. She wants to tell the village the truth and be allowed to. <strong>She moves +1 the first time the party keeps a promise to anyone.</strong> Reaching her converts the Hollow from an obstacle into a faction. <span class=\"cite\">WP04 §13.2</span>",
    href: "04-reference-people-places.html#npc-nethra"
  },
  {
    id: "ghesh-two-knife",
    name: "Ghesh Two-Knife",
    aliases: ["Ghesh"],
    type: "npc",
    tag: "War-leader, Red-Tusk · Hostile",
    summary: "Twenty-nine, lean in the way of someone who has been giving his share away, and <strong>the only starting Hostile in the campaign</strong>. Speaks Common badly and deliberately so nobody assumes he is confused. He is not a villain and must never be played as one: he is a young man with sixty-one dependents and twenty-two spears who has done the arithmetic. <span class=\"cite\">WP04 §13.3</span>",
    href: "04-reference-people-places.html#npc-ghesh-two-knife"
  },
  {
    id: "orbal-the-rememberer",
    name: "Orbal the Rememberer",
    aliases: ["Orbal"],
    type: "npc",
    tag: "Keeper of the cords, Red-Tusk · Wary",
    summary: "Old for a goblin, carrying a bundle of knotted cords that is the band's entire written record. <strong>Treats a promise as an object</strong>, and is Wary rather than Hostile — the exception a party that notices has learned something from. <strong>She is the reason the campaign has a peaceful branch at all</strong>; if she dies the Compact becomes unreachable. <span class=\"cite\">WP04 §13.4</span>",
    href: "04-reference-people-places.html#npc-orbal-the-rememberer"
  },
  {
    id: "corben-threll",
    name: "Corben Threll",
    aliases: ["Threll"],
    type: "npc",
    tag: "Factor, Daggerford trading house · two days away · Neutral",
    summary: "Restates your position back to you more favourably than you put it, then names a number, and says <em>“let's be practical”</em> before every hard clause. Holds <strong>more capital than exists in Greybank by an order of magnitude</strong>, and hired guards for cargo only. He would rather the odd business at the quarry stayed a rumour — an investigation is a delay. <span class=\"cite\">WP04 §13.5</span>",
    href: "04-reference-people-places.html#npc-corben-threll"
  },
  {
    id: "serina-malk",
    name: "Serina Malk",
    aliases: ["Malk", "Serina"],
    type: "npc",
    tag: "Collector's agent · Neutral, and does not move",
    summary: "The only outsider who arrives in Greybank without an escort and is not worried about it. <strong>Never haggles — names one price and lets the silence work.</strong> She is the campaign's most dangerous NPC and she never threatens anyone: she simply offers more money than the village contains for the one thing the elves will tell the party not to sell. <span class=\"cite\">WP04 §13.6</span>",
    href: "04-reference-people-places.html#npc-serina-malk",
    img: "npc-serina-malk.webp"
  },

  /* ====================================================================== */
  /* LOCATIONS — WP02 §7, G1–G22, plus the village itself                   */
  /* ====================================================================== */

  {
    id: "greybank",
    name: "Greybank",
    aliases: [],
    type: "location",
    tag: "The village · 143 people · north bank of the Marrow",
    summary: "A stone village that ran out of reasons to be one. <strong>143 people</strong> at the only bridge for a day's walk, cutting pale limestone their great-grandparents did not dig and cannot account for. 500 yards end to end. The earth ring has been <strong>breached in four places for thirty years</strong> because nothing needed to come through it. Something has now started needing to. <span class=\"cite\">WP02 §3.1</span>",
    href: "01-introduction.html#greybank",
    img: "map-greybank-dm.webp"
  },
  {
    id: "g1-marrow-bridge",
    name: "Marrow Bridge",
    aliases: ["the bridge", "G1"],
    type: "location",
    tag: "G1 · District I · the only crossing for a day's travel",
    summary: "Three stone piers and a timber deck, 11 feet wide and ninety long, with <strong>no parapet on the downstream side</strong> since a cart went through it two winters ago. Two Medium creatures abreast; holdable by three. The deck burns and can be cut; the piers need the quarry's blasting powder. Anyone shoved within 5 ft of that open edge risks a 20 ft fall into 9 ft of opaque water. <span class=\"cite\">WP02 §7, G1</span>",
    href: "04-reference-people-places.html#loc-g1-marrow-bridge"
  },
  {
    id: "g2-toll-shed",
    name: "The Toll-shed",
    aliases: ["G2"],
    type: "location",
    tag: "G2 · District I · south bank, at the bridge foot",
    summary: "A one-room stone hut where Greybank charges carts two copper a wheel, and half the time nobody is in it. It holds <strong>the crossing book — the village's only written record of who has arrived and left in three years</strong>. Burn the shed and you burn that. Also the single best hard point on the south bank. <span class=\"cite\">WP02 §7, G2</span>",
    href: "04-reference-people-places.html#loc-g2-toll-shed"
  },
  {
    id: "g3-the-sundered-cart",
    name: "The Sundered Cart",
    aliases: ["the taproom", "G3"],
    type: "location",
    tag: "G3 · District II · taproom and the only lodging",
    summary: "Greybank's only lodging — four rentable pallets in the loft at 5 cp a night — and its information exchange: <strong>every rumour in the village passes through this room in the Evening watch</strong>. A 30 × 25 ft common room with a central hearth: bad ground for a fight, excellent ground for a confrontation with an audience. Thatch, and the highest fire risk on the Street. <span class=\"cite\">WP02 §7, G3</span>",
    href: "04-reference-people-places.html#loc-g3-the-sundered-cart",
    img: "scene-sundered-cart.webp"
  },
  {
    id: "g4-drays-store",
    name: "Dray's Store",
    aliases: ["the store", "G4"],
    type: "location",
    tag: "G4 · District II · the village's import channel",
    summary: "The only thatch-free building on the Street — Sember Dray reroofed it in slate after a scare, which makes it <strong>the Street's firebreak</strong>. Holds one Potion of Healing, one healer's kit, two spell-component packages and two ammunition bundles. If the shopkeeper dies the store <strong>closes with the stock sealed inside</strong>, and ordinary goods stop being freely obtainable even at Trade 4. <span class=\"cite\">WP02 §7, G4</span>",
    href: "04-reference-people-places.html#loc-g4-drays-store"
  },
  {
    id: "g5-the-smithy",
    name: "The Smithy",
    aliases: ["the forge", "G5"],
    type: "location",
    tag: "G5 · District II · the only metalwork within two days",
    summary: "An open-fronted forge whose buttress narrows the Street to 9 feet — <strong>the village's natural barricade line, and the militia knows it</strong>. Holds a chain shirt and two martial weapons. Note the rule sharply: an intact building without a smith provides no smithing at all. A live forge is both a hazard and a weapon. <span class=\"cite\">WP02 §7, G5</span>",
    href: "04-reference-people-places.html#loc-g5-the-smithy"
  },
  {
    id: "g6-the-mill",
    name: "The Mill",
    aliases: ["G6"],
    type: "location",
    tag: "G6 · District IV · flour, and the sluice",
    summary: "An undershot water mill whose wheel is the most valuable piece of engineering in Greybank and the hardest to replace. The interesting part is <strong>the sluice gate, which raises the water at the shoal by about eighteen inches</strong> — enough to close the shoal, or flood the low ground east of Millside. Thatch over a working machine beside a granary: fire here is a village-level disaster. <span class=\"cite\">WP02 §7, G6</span>",
    href: "04-reference-people-places.html#loc-g6-the-mill"
  },
  {
    id: "g7-the-granary",
    name: "The Granary",
    aliases: ["G7"],
    type: "location",
    tag: "G7 · District IV · two-thirds full, harvest six weeks out",
    summary: "A raised stone store on staddle stones — <strong>this building <em>is</em> the Food variable made visible</strong>. Destroyed is the one place a two-step change is recommended: <strong>Food −2</strong>. Stone, slate, one barred door, and a 30-inch gap underneath. It is the obvious civilian shelter and the obvious siege objective at the same time. <span class=\"cite\">WP02 §7, G7</span>",
    href: "04-reference-people-places.html#loc-g7-the-granary"
  },
  {
    id: "g8-the-wharf",
    name: "The Wharf",
    aliases: ["G8"],
    type: "location",
    tag: "G8 · District IV · the skiff",
    summary: "Thirty feet of timber landing, a fish-drying rack, and <strong>one flat-bottomed skiff that seats four</strong> — Greybank's entire answer to a lost bridge for moving people. It does not move stone or carts. If it burns or drifts, it is gone. The place a body goes in, and the place something comes out. <span class=\"cite\">WP02 §7, G8</span>",
    href: "04-reference-people-places.html#loc-g8-the-wharf"
  },
  {
    id: "g9-shrine-of-chauntea",
    name: "Shrine of Chauntea",
    aliases: ["the shrine", "G9"],
    type: "location",
    tag: "G9 · District III · older than the village",
    summary: "A single open-fronted stone room whose <strong>foundation course is not villager work, and this is visible to anyone who looks</strong>. Provides burial rites, the moot's formal setting, sanctuary by custom — a social protection, not a magical one — and a strongbox holding the village's second Potion of Healing. It cannot be defended and cannot be burned, which is why civilians run here in a fire. <span class=\"cite\">WP02 §7, G9</span>",
    href: "04-reference-people-places.html#loc-g9-shrine-of-chauntea"
  },
  {
    id: "g10-the-green",
    name: "The Green",
    aliases: ["the bell post", "the well", "G10"],
    type: "location",
    tag: "G10 · District III · sixty yards of open turf",
    summary: "The well, the bell post, and <strong>60 yards of open ground with four Cott lane-mouths opening onto it</strong>. The bell is the mechanical trigger for every mobilisation; cut it down and muster time roughly doubles. Crossing the Green under fire from the lanes or the Moot Hall roof is a real decision, and it is the ground the village will make the party cross. <span class=\"cite\">WP02 §7, G10</span>",
    href: "04-reference-people-places.html#loc-g10-the-green"
  },
  {
    id: "g11-moot-hall",
    name: "Moot Hall",
    aliases: ["G11"],
    type: "location",
    tag: "G11 · District III · the Reeve's house and the village hall",
    summary: "A hall that holds sixty standing, and <strong>the only building overlooking the whole Green</strong> — if the village fights the party, archers go here first. Holds the moot chest: 31 gp and 40 sp, the deeds, the crossing-book archive and the granary key. Lose it and the labour levy stops, and with it every collective project. <span class=\"cite\">WP02 §7, G11</span>",
    href: "04-reference-people-places.html#loc-g11-moot-hall"
  },
  {
    id: "g12-militia-shed",
    name: "The Militia Shed",
    aliases: ["G12"],
    type: "location",
    tag: "G12 · District III · Greybank's entire military inventory",
    summary: "Fourteen billhooks, nine hunting spears, six shortbows in poor repair, four lanterns, a horn, rope, <strong>and a barrel of pitch sitting twenty yards from the Green</strong>. Loot or burn it before a muster and the militia turns out with farm tools at <strong>one Defense step lower</strong> — the cheapest way anyone can disarm Greybank. <span class=\"cite\">WP02 §7, G12</span>",
    href: "04-reference-people-places.html#loc-g12-militia-shed"
  },
  {
    id: "g13-the-tower",
    name: "The Tower",
    aliases: ["the watchtower", "G13"],
    type: "location",
    tag: "G13 · District IX · 22 ft of ancient work, 8 ft of villager courses",
    summary: "A stone drum on the knoll north of the village, whose <strong>lower stonework has no visible joints and the villagers have stopped remarking on it</strong>. Manned Dawn through Evening and unmanned at night; while manned it buys Greybank a full watch of warning. Its base course is the same stone as the quarry aperture, and anyone who compares them learns something. <span class=\"cite\">WP02 §7, G13</span>",
    href: "04-reference-people-places.html#loc-g13-the-tower"
  },
  {
    id: "g14-the-quarry",
    name: "The Quarry",
    aliases: ["the Pale", "G14"],
    type: "location",
    tag: "G14 · District VI · 500 yards up the haul road",
    summary: "A stepped limestone cut worked by fourteen men, with a derrick, a powder store holding <strong>six charges of blasting powder</strong>, and — at the north end of the lowest bench — <strong>an opening in the rock face that is not natural and that the crew did not cut.</strong> Seven minutes at a run from the village, which means help from here never arrives in time for anything. <span class=\"cite\">WP02 §7, G14</span>",
    href: "04-reference-people-places.html#loc-g14-the-quarry",
    img: "scene-quarry-aperture.webp"
  },
  {
    id: "g15-the-bunkhouse",
    name: "The Stonecutters' Bunkhouse",
    aliases: ["the bunkhouse", "G15"],
    type: "location",
    tag: "G15 · District VI · outside the ring",
    summary: "A long thatched building beside the haul road housing <strong>six Daggerford quarrymen who are in Greybank but not of it</strong>. They sleep outside the ring, which puts them outside every mobilisation, every alarm, and every count of the village's strength. An enemy that takes the bunkhouse has a dry base within sight of the village. <span class=\"cite\">WP02 §7, G15</span>",
    href: "04-reference-people-places.html#loc-g15-the-bunkhouse"
  },
  {
    id: "g16-the-wagonyard",
    name: "The Wagonyard",
    aliases: ["the stable", "G16"],
    type: "location",
    tag: "G16 · District II · three carts, two stone-wagons, two horses",
    summary: "Greybank's physical trade link and the home of its <strong>two riding horses — if they are killed, stolen or sold, they are gone</strong>, and a four-session campaign may never replace them. The carts here are the barricade material the militia uses. Hay loft plus thatch makes this the second-worst fire in the village after the mill. <span class=\"cite\">WP02 §7, G16</span>",
    href: "04-reference-people-places.html#loc-g16-the-wagonyard"
  },
  {
    id: "g17-the-cotts",
    name: "The Cotts",
    aliases: ["G17"],
    type: "location",
    tag: "G17 · District V · 22 dwellings, four lanes, all thatch",
    summary: "<strong>The most important tactical fact in the village</strong>: no missile line longer than 25 yards exists inside the Cotts, the thatch eaves nearly touch so fire crosses the lanes, and four lane-mouths open onto the Green. Cover for a party fleeing a mobilisation; a trap with a hundred witnesses in it for a party fighting there. Three cotts lost in one night is <strong>Unity −1</strong>. <span class=\"cite\">WP02 §7, G17</span>",
    href: "04-reference-people-places.html#loc-g17-the-cotts"
  },
  {
    id: "g18-the-fold",
    name: "The Fold",
    aliases: ["the Fold and Byres", "G18"],
    type: "location",
    tag: "G18 · District VIII · 260 yards outside the ring",
    summary: "Drystone sheepfolds and three timber byres on the poor western ground, unlit and <strong>260 yards — roughly 26 rounds at a run — from anyone who could help</strong>. Anything hunting Greybank eats here first, and anything that happens here is over before the village arrives. This is the intended location for the campaign's first Level 2 threat signal. <span class=\"cite\">WP02 §7, G18</span>",
    href: "04-reference-people-places.html#loc-g18-the-fold",
    img: "scene-fold-at-night.webp"
  },
  {
    id: "g19-burial-ground",
    name: "The Burial Ground",
    aliases: ["G19"],
    type: "location",
    tag: "G19 · District IX · ninety years of Greybank",
    summary: "Low stone markers and a lych-gate on the knoll below the tower, bounded on the north by <strong>a wall of the same jointless stone as the tower base</strong>. Every NPC death in this campaign ends here and the players will watch it fill. Desecration is <strong>Unity −1 and Greybank Rep −1</strong>, and turns Yorrin Fell against a party permanently. <span class=\"cite\">WP02 §7, G19</span>",
    href: "04-reference-people-places.html#loc-g19-burial-ground"
  },
  {
    id: "g20-charcoal-camp",
    name: "The Charcoal Camp",
    aliases: ["G20"],
    type: "location",
    tag: "G20 · District X · far bank, half a mile from the bridge",
    summary: "Two burning-clamps, a turf shelter and a stack yard in the coppice <strong>across the river</strong>. Without its charcoal the smithy's output halves; without its timber every building project stalls. If the bridge goes down, Ib Sallow is on the wrong side of it and so is Greybank's fuel. Burning clamps are open fire, permanently. <span class=\"cite\">WP02 §7, G20</span>",
    href: "04-reference-people-places.html#loc-g20-charcoal-camp"
  },
  {
    id: "g21-earth-ring",
    name: "The Earth Ring",
    aliases: ["the ring", "G21"],
    type: "location",
    tag: "G21 · encircling Districts II–V · breached in four places",
    summary: "A turf-and-stake bank five feet high where it survives, thrown up ninety years ago and never maintained. <strong>Breached north-west, north, east and south-east, in gaps 20 to 40 feet wide and completely open.</strong> It provides no defensive benefit at all — but the surviving bank still gives half cover and still channels movement, so it shapes a fight even though it stops nothing. <span class=\"cite\">WP02 §7, G21</span>",
    href: "04-reference-people-places.html#loc-g21-earth-ring"
  },
  {
    id: "g22-herbwifes-cottage",
    name: "The Herbwife's Cottage",
    aliases: ["G22"],
    type: "location",
    tag: "G22 · District V, north edge · all of Greybank's medicine",
    summary: "A cott set apart at the north edge with a walled physic garden, drying racks and a still. Maud's kits are <strong>local production, which is the only reason medicine survives a Trade collapse</strong>. It is the most load-bearing single point in Greybank, and it stands 90 yards from the nearest other dwelling, nearest the north gap in the ring. <span class=\"cite\">WP02 §7, G22</span>",
    href: "04-reference-people-places.html#loc-g22-herbwifes-cottage"
  },

  /* ====================================================================== */
  /* ZONES — WP05 §6, Z1–Z18. Travel times are in watches from Greybank.    */
  /* Codes are the primary handle; see the collision rule in the header.    */
  /* ====================================================================== */

  {
    id: "z1-greybank",
    name: "Z1",
    aliases: ["Zone 1"],
    type: "zone",
    tag: "Zone · Greybank itself · 0 watches",
    summary: "The village and everything inside the boundary stones. It is on the regional map only so the travel matrix has an origin — and to record that <strong>three Illefarn waystones stand inside the village</strong>: the tower's base course, the shrine's foundation, and the burial ground's north wall. <span class=\"cite\">WP05 §6, Z1</span>",
    href: "04-reference-people-places.html#zone-z1-greybank"
  },
  {
    id: "z2-the-pale",
    name: "Z2",
    aliases: ["Zone 2"],
    type: "zone",
    tag: "Zone · the quarry and its surrounds · ¼ watch",
    summary: "The haul road, the stepped cut, the spoil heaps that make broken ground for a quarter-mile downslope, and the bunkhouse. <strong>Hazard: Stage 1, Sign — whatever the boards are holding. Nothing has come out.</strong> Kael Durrow's ground, and he has been inside. <span class=\"cite\">WP05 §6, Z2</span>",
    href: "04-reference-people-places.html#zone-z2-the-pale"
  },
  {
    id: "z3-home-fields",
    name: "The Home Fields",
    aliases: ["Z3"],
    type: "zone",
    tag: "Zone · ¼ watch · flat arable, no cover worth the name",
    summary: "There is no reason to go here. <strong>It is the ground an attack crosses.</strong> Three outlying farmsteads stand in it, all outside the ring; on the Red-Tusk war branch they are raided and each becomes <strong>Food −1</strong>. Tam Orrick knows it. <span class=\"cite\">WP05 §6, Z3</span>",
    href: "04-reference-people-places.html#zone-z3-home-fields"
  },
  {
    id: "z4-west-grazing",
    name: "West Grazing",
    aliases: ["Z4"],
    type: "zone",
    tag: "Zone · the fold and the grazing west · ¼–½ watch",
    summary: "Drystone folds, then two miles of poorer grazing, then scrub. <strong>Hazard: Stage 2, Incident — the campaign's first Level 2 warning, and the highest zone on the map at start bar one.</strong> Red-Tusk scouts reach it from their camp in a single night, and the far grazing is exactly where a goblin encampment would be negotiated onto. <span class=\"cite\">WP05 §6, Z4</span>",
    href: "04-reference-people-places.html#zone-z4-west-grazing"
  },
  {
    id: "z5-the-coppice",
    name: "The Coppice",
    aliases: ["Z5"],
    type: "zone",
    tag: "Zone · far bank · ½ watch · timber and charcoal",
    summary: "Managed coppice on the south bank producing one Timber Load a day with four workers. Ib Sallow is here alone every night, out of earshot of the bell. <strong>Hazard: Stage 1, Sign — something uses the coppice at night, Ib talks about it, and nobody listens.</strong> It is also where the wardens leave their first mark on a tree. <span class=\"cite\">WP05 §6, Z5</span>",
    href: "04-reference-people-places.html#zone-z5-the-coppice"
  },
  {
    id: "z6-reedwater",
    name: "Reedwater",
    aliases: ["Z6"],
    type: "zone",
    tag: "Zone · 1 watch · reed beds east of the village",
    summary: "The Marrow spreads across low meadows into reed beds and standing water — <strong>the region's best foraging</strong>, and the riverside track to the ford runs through it. <strong>Hazard: Stage 1, Sign — things come out of the reeds.</strong> In spate the whole zone becomes impassable marsh and closes the track on top of the ford closing. <span class=\"cite\">WP05 §6, Z6</span>",
    href: "04-reference-people-places.html#zone-z6-reedwater"
  },
  {
    id: "z7-stonecrop-rise",
    name: "Stonecrop Rise",
    aliases: ["Z7"],
    type: "zone",
    tag: "Zone · 1 watch · the upland shoulder above the quarry",
    summary: "<strong>It overlooks everything</strong> — the village, the Pale, the fields, both road approaches, and in clear weather the smoke from the goblin camp. Among genuinely old cairns stands <strong>Waystone 4, which is not a cairn, and which anyone who has looked at Greybank's tower will recognise.</strong> Nobody has connected the two. <span class=\"cite\">WP05 §6, Z7</span>",
    href: "04-reference-people-places.html#zone-z7-stonecrop-rise"
  },
  {
    id: "z8-the-cut",
    name: "The Cut",
    aliases: ["Z8"],
    type: "zone",
    tag: "Zone · 1 watch · the Daggerford road defile",
    summary: "Two hundred yards of defile with twenty-foot banks and room for one cart, and <strong>the obvious ambush site in the region — every carter knows it</strong>. It is the last place from which Greybank is visible. Closing it isolates the village from Daggerford entirely and costs <strong>Trade −1</strong>. Gedd Plank will describe it unprompted. <span class=\"cite\">WP05 §6, Z8</span>",
    href: "04-reference-people-places.html#zone-z8-the-cut"
  },
  {
    id: "z9-the-hollowway",
    name: "The Hollowway",
    aliases: ["Z9"],
    type: "zone",
    tag: "Zone · far bank · 1 watch · a sunken lane, roofed in hazel",
    summary: "Cut eight feet below the fields by centuries of use and roofed over with hazel — <strong>this is how nine elves reach Greybank's far bank without ever being seen</strong>. Hazard: Stage 1, Sign; something has been using it that is not a warden and not a villager. <strong>Ib Sallow knows about it. Nobody else does, and it is not on the player map.</strong> <span class=\"cite\">WP05 §6, Z9</span>",
    href: "04-reference-people-places.html#zone-z9-the-hollowway"
  },
  {
    id: "z10-anvil-gorge",
    name: "Anvil Gorge",
    aliases: ["Z10"],
    type: "zone",
    tag: "Zone · 1½ watches · upstream limestone cleft",
    summary: "Seven miles upstream the Marrow narrows into a cleft thirty feet deep and twelve wide, crossed by <strong>a collapsed natural arch four feet wide at its narrowest and wet with spray</strong>. A foot crossing that works when nothing else does. <strong>Hazard: Stage 2, Incident — the crossing itself; falling is sufficient and no monster is needed.</strong> It is not a solution for cargo. <span class=\"cite\">WP05 §6, Z10</span>",
    href: "04-reference-people-places.html#zone-z10-anvil-gorge"
  },
  {
    id: "z11-hagsfoot-moor",
    name: "Hagsfoot Moor",
    aliases: ["Z11"],
    type: "zone",
    tag: "Zone · 2 watches · open upland scrub and peat",
    summary: "No trees, no water, no shelter, and visibility for miles in every direction — <strong>including of you</strong>. Two watches of ground on which the party can be seen from the moment they enter it, crossed nightly by Red-Tusk scouts who will know they are coming before they are halfway. <strong>Nobody in Greybank has been past here</strong>; villagers say “the moor” and stop. <span class=\"cite\">WP05 §6, Z11</span>",
    href: "04-reference-people-places.html#zone-z11-hagsfoot-moor"
  },
  {
    id: "z12-bythe-ford",
    name: "Bythe Ford",
    aliases: ["Z12", "the ford"],
    type: "zone",
    tag: "Zone · 2 watches · the bridge detour",
    summary: "Twelve miles downstream, forty yards of gravel bed, knee-deep in normal water — <strong>the only cart crossing of the Marrow other than Greybank's bridge</strong>. A marker post cut with the water heights of bad years stands beside it, and that post is the explicit warning: <strong>in spate the ford is Stage 3 and impassable for one to two days</strong>, and a party that fords anyway has been told. <span class=\"cite\">WP05 §6, Z12</span>",
    href: "04-reference-people-places.html#zone-z12-bythe-ford"
  },
  {
    id: "z13-fenrow-holding",
    name: "Fenrow Holding",
    aliases: ["Z13", "Fenrow"],
    type: "zone",
    tag: "Zone · 2½ watches · three farmsteads, nineteen people",
    summary: "<strong>A roof that is not Greybank's</strong>, and the only other people in the region who watch the ford. No store, no smith, no shrine, no services of any kind — they buy in Greybank and they know it. They will still take the party in at Greybank Rep −2, for a while, because news travels at the speed of the ford. <span class=\"cite\">WP05 §6, Z13</span>",
    href: "04-reference-people-places.html#zone-z13-fenrow-holding"
  },
  {
    id: "z14-wends-barrow",
    name: "Wend's Barrow",
    aliases: ["Z14"],
    type: "zone",
    tag: "Zone · 2 watches · a long low mound in birch scrub",
    summary: "Local belief says a chieftain is buried here and that digging is unlucky. <strong>It is not a barrow.</strong> Under the turf stands Waystone 5 — the same jointless stone as Greybank's tower, upright — and the mound is spoil heaped against it by people who did not build it. Everyone knows the story; <strong>nobody has dug, which is why the story survives.</strong> <span class=\"cite\">WP05 §6, Z14</span>",
    href: "04-reference-people-places.html#zone-z14-wends-barrow"
  },
  {
    id: "z15-the-hollowmarch",
    name: "The Hollowmarch",
    aliases: ["Z15"],
    type: "zone",
    tag: "Zone · 3 watches · the outer edge of elven-watched country",
    summary: "Old woodland with clearings that are too regular, holding Waystone 6 and warden sign for those who can read it. <strong>To find the elves is the only reason to come here; nothing is for sale.</strong> Hazard: Stage 2, Incident for anyone unwelcome — and the wardens are forbidden to fight fair. Nobody in Greybank knows anything about it. <span class=\"cite\">WP05 §6, Z15</span>",
    href: "04-reference-people-places.html#zone-z15-the-hollowmarch"
  },
  {
    id: "z16-kettlerock",
    name: "Kettlerock",
    aliases: ["Z16"],
    type: "zone",
    tag: "Zone · 3 watches · a bowl of broken ground north-west",
    summary: "Shattered limestone, thorn, and a spring that does not fail: defensible, miserable, and the best available. <strong>The Red-Tusk are here — all sixty-one of them</strong>, with Orbal's knotted cords. Scouts from this bowl reach the fold in a night. Nobody in Greybank knows where it is; Berrick Hone believes the goblins are “up past the moor” and is right by accident. <span class=\"cite\">WP05 §6, Z16</span>",
    href: "04-reference-people-places.html#zone-z16-kettlerock"
  },
  {
    id: "z17-the-old-delving",
    name: "The Old Delving",
    aliases: ["Z17"],
    type: "zone",
    tag: "Zone · 4 watches · the northern gate of the site",
    summary: "A worked cleft with cut stone at the entrance and ground that is wrong underfoot in a way the party notices before they can say why. <strong>This is where the Red-Tusk lived, and what they ran from is here.</strong> The doorway was piled shut from the outside and they did not stay to watch. <strong>Stage 3, Escalation — the only Stage 3 on the map at campaign start.</strong> <span class=\"cite\">WP05 §6, Z17</span>",
    href: "04-reference-people-places.html#zone-z17-the-old-delving"
  },
  {
    id: "z18-coldwell-vale",
    name: "Coldwell Vale",
    aliases: ["Z18"],
    type: "zone",
    tag: "Zone · 5 watches, via Z15 only · water, wood, no people",
    summary: "Better ground than Kettlerock in every respect, and <strong>nobody in Greybank will ever go there — it exists for the Red-Tusk.</strong> It is the Flight branch's destination and the reason that branch exists at all. The only route runs through elven-watched country, which is its own encounter. Orbal knows of it; it is in the cords. <span class=\"cite\">WP05 §6, Z18</span>",
    href: "04-reference-people-places.html#zone-z18-coldwell-vale"
  },

  /* ====================================================================== */
  /* SECTORS — WP06 §4.3, S1–S16. All begin Unknown.                        */
  /* ====================================================================== */

  {
    id: "s1-aperture-and-ramp",
    name: "The Aperture and Ramp",
    aliases: ["S1"],
    type: "sector",
    tag: "Sector · Stage I · level 3 · the way in",
    summary: "A cut ramp descending forty feet at a shallow grade, wide enough for two carts abreast, under a lintel of the jointless stone. <strong>Kael Durrow's boards are nailed across it and two of them are loose.</strong> Inside: his lantern-soot at the ten-foot mark and his bootprints turning round. No danger. The ramp cannot be closed from inside — <strong>this stage is not a trap.</strong> <span class=\"cite\">WP06 §7</span>",
    href: "05-reference-props.html#sector-s1-aperture-and-ramp"
  },
  {
    id: "s2-muster-floor",
    name: "The Muster Floor",
    aliases: ["S2"],
    type: "sector",
    tag: "Sector · Stage I · level 3 · a garrison's waiting room",
    summary: "Eighty feet by forty, stone benches down both walls, and <strong>fifteen sets of pegs, all empty</strong> — except for one warden's kit set down under a bench and never collected, with a resonance key in it. The roster is cut the length of the far wall, and <strong>its last third is in a different, hurried hand</strong>. <span class=\"cite\">WP06 §7</span>",
    href: "05-reference-props.html#sector-s2-muster-floor"
  },
  {
    id: "s3-anchor-room",
    name: "The Anchor Room",
    aliases: ["S3"],
    type: "sector",
    tag: "Sector · Stage I · level 3 · System 1, the Ward Anchor",
    summary: "A drum of jointless stone floor to ceiling with a worn recess at chest height. <strong>The stone is the same as the tower Greybank has been standing under for ninety years, and a party that has seen the tower will say so out loud.</strong> No danger, unless the anchor is forced — and forcing it costs 2d6 to the room and Instability +1. <span class=\"cite\">WP06 §7, §6.2</span>",
    href: "05-reference-props.html#sector-s3-anchor-room"
  },
  {
    id: "s4-watch-chamber",
    name: "The Watch Chamber",
    aliases: ["S4"],
    type: "sector",
    tag: "Sector · Stage I · level 3 · locked · System 2",
    summary: "A small round room with a stone table and a basin of dark, still liquid that <strong>has never stopped working</strong>. This is the campaign's Level 3 explicit warning arriving for free: the Glass shows six anchors, three dark, and the dark ones face north-west. Opened with the S2 key — or by prising the warped shutter, which marks the sector <strong>Breached, permanently</strong>. <span class=\"cite\">WP06 §7</span>",
    href: "05-reference-props.html#sector-s4-watch-chamber",
    img: "scene-watch-chamber.webp"
  },
  {
    id: "s5-lock-gallery",
    name: "The Lock Gallery",
    aliases: ["S5"],
    type: "sector",
    tag: "Sector · Stage II · level 4 · locked · the Stage I–II barrier",
    summary: "A hundred feet of corridor with a counterweighted stone leaf across the middle, opened by resonance. The counterweight housing is exposed and can be broken — <strong>permanently. Breaking it marks the sector Breached, and the elves notice.</strong> A breach is a factual change and does not reset when Instability later falls. <span class=\"cite\">WP06 §8</span>",
    href: "05-reference-props.html#sector-s5-lock-gallery"
  },
  {
    id: "s6-the-workshops",
    name: "The Workshops",
    aliases: ["S6"],
    type: "sector",
    tag: "Sector · Stage II · level 4 · records, tools, a resonance key",
    summary: "Four connected chambers including a records room of cut tablets holding the site's purpose, the ward line's design, the Deterrent Chain's sequence, and <strong>the forms of authorisation</strong>. Reading them takes a full watch and no magic — the names are cut, not written. <strong>The records describe the Sentinel by function, plainly, in the register of a maintenance manual.</strong> <span class=\"cite\">WP06 §8</span>",
    href: "05-reference-props.html#sector-s6-the-workshops"
  },
  {
    id: "s7-sluice-hall",
    name: "The Sluice Hall",
    aliases: ["S7"],
    type: "sector",
    tag: "Sector · Stage II · level 4 · System 3, the Sluice Works",
    summary: "Channels and counterweighted gates over a black race of moving water, wet walkways and a real drop — an environmental hazard that needs no creature. <strong>It is loud enough to mask a conversation and everything else: nothing in here hears anything, including the party.</strong> An overflow shaft climbs out of it into the quarry's lowest bench. <span class=\"cite\">WP06 §8</span>",
    href: "05-reference-props.html#sector-s7-sluice-hall"
  },
  {
    id: "s8-drowned-stair",
    name: "The Drowned Stair",
    aliases: ["S8"],
    type: "sector",
    tag: "Sector · Stage II · level 4 · breached · the Listener's water",
    summary: "A broad stair descending into moving water deep enough that the stair simply disappears. On the dry steps above the waterline lie <strong>eleven bodies — goblins decades old, and two wardens far older — and every one of them is on dry stone. There is not one in the water.</strong> The room hands its own solution to any party that counts. <span class=\"cite\">WP06 §8</span>",
    href: "05-reference-props.html#sector-s8-drowned-stair"
  },
  {
    id: "s9-transit-ring-south",
    name: "The Transit Ring, South",
    aliases: ["S9"],
    type: "sector",
    tag: "Sector · Stage III · level 4–5 · locked · System 4",
    summary: "The southern terminus: a turning floor, a shut leaf, and the mouth of the Long Gallery. <strong>The floor is grooved — something heavy has turned here, repeatedly, for a very long time.</strong> Reachable from the Workshops, or by swimming the flooded gallery from the Drowned Stair. <span class=\"cite\">WP06 §9</span>",
    href: "05-reference-props.html#sector-s9-transit-ring-south"
  },
  {
    id: "s10-long-gallery",
    name: "The Long Gallery",
    aliases: ["S10"],
    type: "sector",
    tag: "Sector · Stage III · level 4–5 · the Sentinel's patrol",
    summary: "Dead straight, level, twelve feet wide, running the whole spine of the line — <strong>the longest sightline in the campaign, and there is nothing in it to hide behind. There is nothing here. That is the danger.</strong> At the midpoint the floor is worn into a groove an inch deep by footsteps, and a party that has read the records knows exactly what makes it. <span class=\"cite\">WP06 §9</span>",
    href: "05-reference-props.html#sector-s10-long-gallery"
  },
  {
    id: "s11-deterrent-gallery",
    name: "The Deterrent Chain",
    aliases: ["S11"],
    type: "sector",
    tag: "Sector · Stage III · level 4–5 · System 5",
    summary: "A side gallery lined with resonating plates, each cut with a depth-mark, and <strong>a resonance key still hanging on the last plate where a warden left it</strong>. Low danger in itself — except that it opens off the Long Gallery, and the Sentinel passes the mouth. <span class=\"cite\">WP06 §9</span>",
    href: "05-reference-props.html#sector-s11-deterrent-gallery"
  },
  {
    id: "s12-kettlerock-gate",
    name: "The Kettlerock Gate",
    aliases: ["S12"],
    type: "sector",
    tag: "Sector · Stage III · level 4–5 · Sealed · the north exit",
    summary: "The northern terminus and a ramp to a doorway <strong>piled shut from the outside with rock and timber for a generation</strong>. From inside it opens outward without tools — the pile is heavy, not fixed. <strong>The Red-Tusk built that pile and have maintained it out of terror, without understanding what they were containing. If they leave, nobody maintains it.</strong> <span class=\"cite\">WP06 §9, §15</span>",
    href: "05-reference-props.html#sector-s12-kettlerock-gate"
  },
  {
    id: "s13-approach-of-names",
    name: "The Approach of Names",
    aliases: ["S13"],
    type: "sector",
    tag: "Sector · Stage IV · level 5–6 · locked · the Stage IV barrier",
    summary: "A short corridor cut floor to ceiling with names, ending in a plain door and a recess. <strong>It is a challenge, not a lock: it accepts a name, and it does not punish a wrong answer — it simply does not open.</strong> Three ways to hold a name: Orbal recites it, the site's own records give it, or Nethra does — and none of them runs through a fight. <span class=\"cite\">WP06 §10, §5.3</span>",
    href: "05-reference-props.html#sector-s13-approach-of-names"
  },
  {
    id: "s14-sentinels-walk",
    name: "The Sentinel's Walk",
    aliases: ["S14"],
    type: "sector",
    tag: "Sector · Stage IV · level 5–6 · System 6, Authorisation",
    summary: "A long chamber with a recess at each end and the floor between worn into a groove. <strong>This is where the Sentinel's circuit begins and ends</strong>, which means using the recess requires knowing where it is — and that requires having watched it. Observation makes this manageable; haste does not. <span class=\"cite\">WP06 §10</span>",
    href: "05-reference-props.html#sector-s14-sentinels-walk"
  },
  {
    id: "s15-ward-heart",
    name: "The Ward Heart",
    aliases: ["S15"],
    type: "sector",
    tag: "Sector · Stage IV · level 5–6 · locked · System 7",
    summary: "<strong>Six seats around a low well. Three seats dark. One warm.</strong> This is the campaign's ending condition, and nothing here is dangerous in itself — everything depends on what is done in the room. <span class=\"cite\">WP06 §10, §6.8</span>",
    href: "05-reference-props.html#sector-s15-ward-heart"
  },
  {
    id: "s16-broken-quarter",
    name: "The Broken Quarter",
    aliases: ["S16"],
    type: "sector",
    tag: "Sector · Stage IV · level 5–6 · Breached",
    summary: "Where three spans failed: collapsed stone, a slope of rubble, daylight at the top and cold air coming down. <strong>This is the hole in the fence, and it is open now.</strong> The three dead anchors cannot be fixed in place. A party that finds it can climb down from the open moor into Stage IV content, skipping Stages I–III entirely, if they are reckless enough. <span class=\"cite\">WP06 §10</span>",
    href: "05-reference-props.html#sector-s16-broken-quarter"
  },

  /* ====================================================================== */
  /* FACTIONS — WP04 §3                                                     */
  /* ====================================================================== */

  {
    id: "faction-greybank",
    name: "The Greybank moot",
    aliases: ["the moot"],
    type: "faction",
    tag: "Faction · Greybank acting for itself · five blocs",
    summary: "Greybank as a faction: <strong>a village that would like everyone to go away and let it work.</strong> It acts through the moot, the labour levy, the militia and the refusal of service, and its strength is 143 people who know the ground. Its red line is harm to its children. <strong>It will never fight beyond the boundary stones.</strong> <span class=\"cite\">WP04 §3, §4</span>",
    href: "01-introduction.html#faction-greybank"
  },
  {
    id: "laughing-hollow",
    name: "Laughing Hollow",
    aliases: ["the Hollow", "the wardens"],
    type: "faction",
    tag: "Faction · a warden-band of nine · Intervention clock at 1",
    summary: "A warden-band of nine, of whom the party will ever see three. <strong>They are right, and they have decided that explaining why is not worth the risk.</strong> Vaerelin Ossuine wants containment through restriction; Nethra, who has watched Greybank for eleven years, wants containment through alliance. Their red line is the site being opened wider. <span class=\"cite\">WP04 §5</span>",
    href: "01-introduction.html#faction-laughing-hollow"
  },
  {
    id: "red-tusk",
    name: "The Red-Tusk",
    aliases: ["Red-Tusk", "Red-Tusks"],
    type: "faction",
    tag: "Faction · 61 goblins · 22 who can fight · Rep −1",
    summary: "Sixty-one goblins who used to live somewhere else — <strong>not a warband, a population with weapons</strong>, thirty-nine of whom cannot fight and cannot travel fast. Ghesh wants to take a place before winter; Orbal thinks there was a bargain here once. <strong>Neither commands: the band follows whoever is right most recently.</strong> Their red line is being made to go back. <span class=\"cite\">WP04 §6</span>",
    href: "01-introduction.html#faction-red-tusk"
  },
  {
    id: "daggerford-interests",
    name: "Daggerford Interests",
    aliases: [],
    type: "faction",
    tag: "Faction · two days away · Commercial clock at 1",
    summary: "<strong>Two men who both want something from Greybank and who want different things</strong> — Corben Threll wants a supply contract, Serina Malk wants Illefarn artifacts. Their method is money, contracts and patience; their weakness is that <strong>they cannot make anyone do anything</strong>; and they will never send armed help for free. <span class=\"cite\">WP04 §7</span>",
    href: "01-introduction.html#faction-daggerford-interests"
  },

  /* ====================================================================== */
  /* TERMS — the vocabulary, WP01 §22 and the design doc                    */
  /* ====================================================================== */

  {
    id: "watch",
    name: "watch",
    aliases: ["watches"],
    type: "term",
    tag: "Time · 4 hours · six to a day",
    summary: "Campaign time runs in <strong>four-hour watches</strong> — Dawn, Morning, Afternoon, Evening, Night, Deep Night. A short rest is a quarter of one; <strong>a long rest is two.</strong> Long enough to skip bookkeeping, short enough that travel, rest and threats compete for the same block. <strong>World events fire on their stated deadlines, not because the party happened to rest.</strong> <span class=\"cite\">WP01 §10</span>",
    href: "01-introduction.html#term-watch"
  },
  {
    id: "food",
    name: "Food",
    aliases: [],
    type: "term",
    tag: "Village variable · 0–6 · starts at 4",
    summary: "Whether Greybank eats. It starts at 4 with the granary two-thirds full and harvest six weeks out. A major livestock attack is a <strong>Food −1</strong> event; losing the granary outright is the one place a two-step drop is recommended. <span class=\"cite\">WP01 §3.1</span>",
    href: "01-introduction.html#term-food"
  },
  {
    id: "trade",
    name: "Trade",
    aliases: [],
    type: "term",
    tag: "Village variable · 0–6 · starts at 3",
    summary: "Whether goods reach the village. It governs <strong>whether anything can be bought or replenished at all</strong> — at Trade 1 or below, imports simply stop, and medicine survives only because Maud makes it locally. Losing the bridge is an immediate Trade −1. <span class=\"cite\">WP01 §3.2</span>",
    href: "01-introduction.html#term-trade"
  },
  {
    id: "defense",
    name: "Defense",
    aliases: [],
    type: "term",
    tag: "Village variable · 0–6 · starts at 2",
    summary: "How much of a response Greybank can actually mount, and the one the players will be asked to care about. <strong>Defense 2 means eleven militia turn out, in about twenty minutes.</strong> The fold is 260 yards away and unlit — at Defense 2 it burns before anyone arrives. <span class=\"cite\">WP01 §3.3, WP02 §12.2–12.3</span>",
    href: "01-introduction.html#term-defense"
  },
  {
    id: "unity",
    name: "Unity",
    aliases: [],
    type: "term",
    tag: "Village variable · 0–6 · starts at 4",
    summary: "Whether the village can still decide things together. At 4 the blocs argue and the moot still functions. It falls when households are burned out, when the moot has to fight over a successor, or when a shrine is desecrated — and a village that cannot agree cannot be organised into anything. <span class=\"cite\">WP01 §3.4</span>",
    href: "01-introduction.html#term-unity"
  },
  {
    id: "reputation",
    name: "reputation",
    aliases: [],
    type: "term",
    tag: "Party standing · −3 to +3 · four factions, tracked separately",
    summary: "How each faction as a whole regards the party, on a scale of −3 to +3. Greybank, Laughing Hollow and Daggerford start at 0; <strong>the Red-Tusk start at −1</strong>, not because the party wronged them but because the party looks like the sort of people who do. <strong>Reputation changes access, not inventory.</strong> <span class=\"cite\">WP01 §4</span>",
    href: "01-introduction.html#term-reputation"
  },
  {
    id: "attitude",
    name: "attitude",
    aliases: [],
    type: "term",
    tag: "NPC standing · Hostile → Wary → Neutral → Friendly",
    summary: "What one individual thinks, tracked separately from faction reputation and <strong>able to contradict it entirely</strong>: the worked example is the miller's daughter staying Friendly at Greybank Rep −2 because the party saved her family. At campaign start the roster runs 4 Friendly, 19 Neutral, 5 Wary, 0 Hostile. <span class=\"cite\">WP01 §4.6</span>",
    href: "01-introduction.html#term-attitude"
  },
  {
    id: "greybank-reaction",
    name: "Greybank Reaction",
    aliases: ["the Reaction clock"],
    type: "term",
    tag: "Clock · 0–6 · starts at 1, Routine Governance",
    summary: "How the village is responding to whatever is happening to it: <strong>1 Routine Governance → 2 Concern → 3 Organized Response → 4 Emergency Measures → 5 Mobilization → 6 Political Outcome.</strong> It describes behaviour, not hostility to the party. A do-nothing session one still ends at 2. <span class=\"cite\">WP01 §6.1</span>",
    href: "01-introduction.html#term-greybank-reaction"
  },
  {
    id: "hollow-intervention",
    name: "Hollow Intervention",
    aliases: ["the Intervention clock"],
    type: "term",
    tag: "Clock · 0–6 · starts at 1, Observation",
    summary: "How close the elves are to acting: <strong>1 Observation → 2 Contact → 3 Warning → 4 Interference → 5 Containment → 6 Settlement.</strong> They watch first and speak once. Nobody in Greybank has seen an elf in a generation, and at stage 1 they do nothing at all. <span class=\"cite\">WP01 §6.2</span>",
    href: "01-introduction.html#term-hollow-intervention"
  },
  {
    id: "red-tusk-strategic",
    name: "Red-Tusk Strategic",
    aliases: ["the Strategic clock"],
    type: "term",
    tag: "Clock · 0–6 · starts at 1 · branches at stage 3",
    summary: "The only branching clock. Stages 1–3 are common — <strong>Displaced Scouting → Resource Pressure → Strategic Decision</strong> — and then it splits into <strong>War, Compact or Flight</strong>, which is Ghesh and Orbal's argument being settled. Kill Orbal and the Compact becomes unreachable; kill Ghesh and the band goes to war with nobody leading it well. <span class=\"cite\">WP01 §6.3</span>",
    href: "01-introduction.html#term-red-tusk-strategic"
  },
  {
    id: "daggerford-commercial",
    name: "Daggerford Commercial",
    aliases: ["the Commercial clock"],
    type: "term",
    tag: "Clock · 0–6 · starts at 1, Rumor",
    summary: "How interested the money is: <strong>1 Rumor → 2 Inquiry → 3 Opportunity → 4 Investment → 5 Leverage → 6 Settlement.</strong> It moves on information, not on violence — telling Serina Malk something true about the quarry advances it <strong>whether or not the party sells her anything</strong>. <span class=\"cite\">WP01 §6.4</span>",
    href: "01-introduction.html#term-daggerford-commercial"
  },
  {
    id: "illefarn-instability",
    name: "Illefarn Instability",
    aliases: ["Instability"],
    type: "term",
    tag: "Clock · 0–6 · starts at 1, Dormant Disturbance",
    summary: "The one clock that is not a faction: how awake the site under the quarry is. It runs <strong>0 Quiescent → 6 Catastrophic Transformation</strong>, and it moves only when something is done to the site. <strong>Nothing there advances on a timer</strong> — it sat at 1 for two thousand years, and every step up has a name and a person who took it. <span class=\"cite\">WP01 §6.5, WP06 §12</span>",
    href: "01-introduction.html#term-illefarn-instability"
  },
  {
    id: "threat-ladder",
    name: "threat ladder",
    aliases: ["threat stage"],
    type: "term",
    tag: "Escalation · six stages · one per unresolved problem",
    summary: "Every ignored threat climbs the same six rungs: <strong>1 Sign → 2 Incident → 3 Escalation → 4 Response → 5 Collateral consequence → 6 Regional outcome.</strong> Threats advance only on defined triggers, never on a general sense of menace, and player intervention can end or redirect one at any stage. <span class=\"cite\">WP01 §12</span>",
    href: "01-introduction.html#term-threat-ladder"
  },
  {
    id: "telegraphing",
    name: "telegraphing",
    aliases: ["signalling levels"],
    type: "term",
    tag: "Fairness · four levels · Suspicion → Immediate Threat",
    summary: "The campaign's promise that harsh is not arbitrary. <strong>1 Suspicion</strong> is an environmental cue in a zone the party crosses anyway; <strong>2 Warning</strong> is physical evidence readable without magic; <strong>3 Explicit warning</strong> comes from a named NPC or an unmissable object; <strong>4 Immediate threat</strong> means they continued anyway, and <strong>the DM is not required to protect them.</strong> <span class=\"cite\">Design doc §6, §29</span>",
    href: "01-introduction.html#term-telegraphing"
  },
  {
    id: "infrastructure-states",
    name: "infrastructure",
    aliases: ["infrastructure state"],
    type: "term",
    tag: "Buildings · Improved · Intact · Damaged · Disabled · Destroyed",
    summary: "Only structures with gameplay effects are tracked — bridge, mill, smithy, store, shrine, quarry, palisade, watchtower, farms, and an apothecary if one is built. Note the rule that catches DMs out: <strong>an intact building without its person provides nothing.</strong> A smithy with no smith is not a smithy. <span class=\"cite\">WP01 §14, §22</span>",
    href: "01-introduction.html#term-infrastructure-states"
  },
  {
    id: "sector-states",
    name: "sector state",
    aliases: ["sector states"],
    type: "term",
    tag: "Illefarn · Unknown · Discovered · Accessible · Locked · Breached · Sealed",
    summary: "Every sector of the site carries one of six states, and may carry two — <em>Discovered / Locked</em>. All sixteen begin <strong>Unknown</strong>. The state that matters is Breached: <strong>once physically breached, a sector does not reset because Instability later falls.</strong> <span class=\"cite\">WP01 §15.2, §15.5</span>",
    href: "01-introduction.html#term-sector-states"
  },
  {
    id: "system-states",
    name: "system state",
    aliases: ["system states"],
    type: "term",
    tag: "Illefarn · Unknown · Identified · Inactive · Active · Damaged · Disabled",
    summary: "The site's seven mechanisms each carry one of six states. Activating one must define its local effect, its regional effect, its change to Instability, <strong>which faction notices</strong>, and whether it can be reversed. Session one identifies exactly one of them and nobody notices. <span class=\"cite\">WP01 §15.3, §15.4</span>",
    href: "01-introduction.html#term-system-states"
  },
  {
    id: "breach",
    name: "breach",
    aliases: [],
    type: "term",
    tag: "Illefarn · a factual change, not a clock movement",
    summary: "A sealed area opened, a water route opened, a construct released, a ward perimeter broken. <strong>A breach is a fact about the world, not a number</strong>, and it is the one thing in the site that cannot be undone by calming the place down afterwards. Prising the Watch Chamber shutter is the cheapest breach in the campaign and it is permanent. <span class=\"cite\">WP01 §15.5</span>",
    href: "01-introduction.html#term-breach"
  },
  {
    id: "investigation",
    name: "investigation",
    aliases: [],
    type: "term",
    tag: "Crime · six steps · no courtroom subsystem",
    summary: "A serious crime opens one, and it advances through <strong>discovery → witnesses → evidence → suspects → surveillance → arrest</strong>. It runs on its own schedule whether or not the party engages, and the Reeve will tell them to their faces that she has started one. <span class=\"cite\">WP01 §8, §22</span>",
    href: "01-introduction.html#term-investigation"
  },
  {
    id: "evidence",
    name: "evidence",
    aliases: [],
    type: "term",
    tag: "Crime · Weak · Moderate · Strong",
    summary: "Testimony has quality, not just existence. <strong>Old Tarn watches the Green all day and reports it inaccurately; Nissa Crake is the only reliable night witness; Maud Elleth can read an injury that has been lied about, which is Moderate on its own.</strong> A crime at Deep Night leaves Weak evidence; the same crime at a working watch leaves Strong. <span class=\"cite\">WP01 §7.2</span>",
    href: "01-introduction.html#term-evidence"
  },
  {
    id: "critical-stock",
    name: "critical stock",
    aliases: ["Class B"],
    type: "term",
    tag: "Resources · counted individually · gone when gone",
    summary: "The short list the DM actually counts: potions, healer's kits, antitoxin, the chain shirt, the shield, the horses, the component packages, the blasting powder. <strong>Consumed, stolen or destroyed goods stay gone</strong>, and replenishment needs a living provider, enough Trade or local production, <em>and</em> elapsed time. <span class=\"cite\">WP01 §5.2, §22</span>",
    href: "01-introduction.html#term-critical-stock"
  },
  {
    id: "loads",
    name: "Loads",
    aliases: ["Stone Load", "Stone Loads", "Timber Load", "Timber Loads"],
    type: "term",
    tag: "Materials · the unit every building project is priced in",
    summary: "Stone comes from the quarry, timber from the charcoal ground at one Load a day with four workers. <strong>Every village upgrade is priced in coin, Loads and days</strong>, which is why losing the quarry foreman or the charcoal burner stalls construction without anything being destroyed. <span class=\"cite\">WP01 §5.9</span>",
    href: "01-introduction.html#term-loads"
  },
  {
    id: "labour-levy",
    name: "labour levy",
    aliases: ["the levy"],
    type: "term",
    tag: "Greybank · 20 volunteers at Unity 4 · the Reeve's to call",
    summary: "The mechanism by which a village project gets its hands. <strong>Every upgrade runs through Ondra Vell</strong>, and she will not call the levy while the quarry households would walk out — which is why the ring is still open. It is a Unity problem wearing a coin problem's clothes. <span class=\"cite\">WP02 §15, WP03 §5.1</span>",
    href: "01-introduction.html#term-labour-levy"
  },
  {
    id: "blocs",
    name: "blocs",
    aliases: ["the five blocs"],
    type: "term",
    tag: "Greybank · Leadership · Craft · Trade · Quarry · Farm · Militia",
    summary: "Greybank does not vote as one thing. <strong>Nine of the eighteen militia are quarry crew, which means the village cannot mobilise and quarry at the same time</strong> — Berrick Hone and Kael Durrow are counting the same men, in public, and both are right. A faction played as a monolith is played wrong. <span class=\"cite\">WP04 §4.2, WP02 §8.3</span>",
    href: "01-introduction.html#term-blocs"
  },
  {
    id: "boundary-stones",
    name: "boundary stones",
    aliases: [],
    type: "term",
    tag: "Greybank · the edge of what the village will defend",
    summary: "The line Greybank marks its own ground with, and <strong>the militia will never fight beyond it</strong> — not to rescue, not to pursue, not for the party. Anything outside the stones is outside the village's problem, which is exactly why the fold, the bunkhouse and the charcoal camp are where the campaign hurts. <span class=\"cite\">WP04 §3.1</span>",
    href: "01-introduction.html#term-boundary-stones"
  },
  {
    id: "morale",
    name: "morale",
    aliases: [],
    type: "term",
    tag: "Combat · 1d6 on a trigger · rout, break, waver, hold, harden",
    summary: "Almost everything in this campaign would rather live. On a trigger — leader down, half the group down, objective lost, <strong>escape route opened</strong> — roll 1d6: <strong>1 rout · 2 break · 3–4 waver · 5 hold · 6 harden.</strong> Opening a way out is a tactic. Constructs and starving animals defending a cache do not check. <span class=\"cite\">WP07 §4</span>",
    href: "01-introduction.html#term-morale"
  },
  {
    id: "cascade-limit",
    name: "cascade limit",
    aliases: ["two links"],
    type: "term",
    tag: "Bookkeeping · consequence chains stop after two steps",
    summary: "Systems influence one another, but an automatic consequence chain <strong>stops after two links</strong> unless a single major event genuinely changed several things at once. This exists so that one burned building does not require an evening of accounting. <span class=\"cite\">WP01 §16.2</span>",
    href: "01-introduction.html#term-cascade-limit"
  },

  /* ====================================================================== */
  /* ITEMS — Session 1 Prep — Items (WP13) and WP06 §5.2                    */
  /* ====================================================================== */

  {
    id: "watch-glass",
    name: "The Watch-Glass",
    aliases: ["Watch-Glass"],
    type: "item",
    tag: "Illefarn · S4 · System 2 · no attunement · 6 lb",
    summary: "A shallow basin of dark liquid that shows <strong>six rings of light, three of them dark, and the dark ones face north-west.</strong> That is its entire function: information, not power, and no combat use whatsoever. What it actually shows — <strong>where the ward line runs</strong> — is the first and always-available answer to the Sentinel, handed to a level 3 party for free. <span class=\"cite\">Items §1, WP06 §6.3</span>",
    href: "05-reference-props.html#item-watch-glass",
    img: "handout-watch-glass.webp"
  },
  {
    id: "resonance-key",
    name: "resonance key",
    aliases: ["resonance keys"],
    type: "item",
    tag: "Illefarn · palm-sized jointless stone · blood-warm",
    summary: "Cut in a shape that is clearly a shape and not a decoration, and warm — not hot, and it stays that way. <strong>Each key is tuned to one span of the ward line, not to a door</strong>, which is why three keys in the site open three different barriers and not one master lock. The one under the bench in the Muster Floor opens the Watch Chamber. <span class=\"cite\">Items §2, WP06 §5.2</span>",
    href: "05-reference-props.html#item-resonance-key"
  },
  {
    id: "wardens-kit",
    name: "the warden's kit",
    aliases: [],
    type: "item",
    tag: "Illefarn · S2 · set down under a bench and never collected",
    summary: "Rations two thousand years gone to dust, a coil of something that was rope, a stone cup, and <strong>a resonance key</strong>. Nothing else in it is worth anything <strong>and it should all be described anyway</strong> — fifteen sets of pegs on the wall above, all empty, and one kit still under the bench. <span class=\"cite\">Items §2</span>",
    href: "05-reference-props.html#item-wardens-kit"
  },
  {
    id: "potion-of-healing",
    name: "Potion of Healing",
    aliases: ["the shrine potion"],
    type: "item",
    tag: "Critical stock · there are two in Greybank",
    summary: "One sits in the store at <strong>62 gp</strong> and <strong>never replenishes locally</strong>. The other is in the shrine strongbox as the village's emergency reserve and <strong>is not for sale at any reputation</strong> — getting it is a scene with the Reeve, not a purchase. Reputation changes access, not inventory: it stays visibly on the shelf. <span class=\"cite\">Items §3, WP02 §11</span>",
    href: "05-reference-props.html#item-potion-of-healing"
  },
  {
    id: "healers-kit",
    name: "healer's kit",
    aliases: ["healer's kits"],
    type: "item",
    tag: "Critical stock · 6 gp · two in the village",
    summary: "One at the store, one at the herbwife's — and the herbwife's <strong>replenishes locally at one per three days, which is Greybank's most important economic fact</strong>: it is the only medicine that survives a Trade collapse. Free from Maud at Greybank Rep +2 or better. <span class=\"cite\">Items §3, WP01 §5.5</span>",
    href: "05-reference-props.html#item-healers-kit"
  },
  {
    id: "antitoxin",
    name: "antitoxin",
    aliases: [],
    type: "item",
    tag: "Critical stock · 62 gp · there is one",
    summary: "Held by the herbwife, who <strong>will sell it and argue about it the whole time</strong> — she wants it in the village, not in a pack. Locally producible at one per six days, but only while Maud is alive and the still is standing. <span class=\"cite\">Items §3, WP02 §11</span>",
    href: "05-reference-props.html#item-antitoxin"
  },
  {
    id: "blasting-powder",
    name: "blasting powder",
    aliases: [],
    type: "item",
    tag: "Critical stock · six charges · the quarry powder store",
    summary: "<strong>The only thing in Greybank capable of dropping a bridge pier, a quarry face or a building at speed.</strong> Six charges, kept by Kael Durrow, who is Wary — taking them without him is a serious crime. If he dies, the powder store loses its only responsible keeper, and that should be treated as a live hazard. <span class=\"cite\">WP02 §11.1, WP03 §5.5</span>",
    href: "05-reference-props.html#item-blasting-powder"
  },
  {
    id: "chain-shirt",
    name: "the chain shirt",
    aliases: [],
    type: "item",
    tag: "Critical stock · smithy · not for sale",
    summary: "Repaired for a militiaman who died before collecting it. <strong>The village regards it as his family's</strong>, which makes acquiring it a social transaction rather than a commercial one. It is the only piece of metal armour in Greybank and its availability freezes entirely if the smith dies. <span class=\"cite\">Items §3, WP02 §11.1</span>",
    href: "05-reference-props.html#item-chain-shirt"
  },
  {
    id: "crossing-book",
    name: "the crossing book",
    aliases: [],
    type: "item",
    tag: "Handout · toll-shed · three years of arrivals",
    summary: "Greybank's only written record of who came and went, kept by the ferryman and <strong>the most under-used investigative resource in the village</strong>. There is a gap in it: three months ago he was paid four silver not to write down a wagon, and he does not know whose it was. <strong>Nothing resolves this — it is a loose end by design.</strong> <span class=\"cite\">WP02 §7 G2, WP03 §6.6</span>",
    href: "05-reference-props.html#item-crossing-book"
  },
  {
    id: "bessas-slate",
    name: "Bessa's slate",
    aliases: [],
    type: "item",
    tag: "Handout · the tally of what has been taken",
    summary: "A piece of dark slate in a shepherd's hand — cramped, practical, no punctuation. <strong>She has used the same slate for years, so wipe-marks and the ghosts of older counts show through.</strong> It is the physical form of the campaign's first warning: four ewes, eleven days, and something that goes over the wall rather than through it. <span class=\"cite\">Handouts, WP08 §10 R1</span>",
    href: "05-reference-props.html#item-bessas-slate"
  },

  /* ====================================================================== */
  /* CREATURES — WP07 §5–§11                                                */
  /* ====================================================================== */

  {
    id: "greybank-militiaman",
    name: "Greybank Militiaman",
    aliases: ["militiaman"],
    type: "creature",
    tag: "AC 11 · HP 9 · eleven of them, in about twenty minutes",
    summary: "A farmer with a billhook. <strong>Untried</strong> — disadvantage on its first attack roll in any combat — but it <strong>knows the ground</strong> and ignores difficult terrain inside the ring. It checks morale on every trigger and <strong>automatically wavers the first time any PC casts a visible spell.</strong> <span class=\"cite\">WP07 §5.3</span>",
    href: "05-reference-props.html#creature-greybank-militiaman"
  },
  {
    id: "red-tusk-scout",
    name: "Red-Tusk Scout",
    aliases: ["Red-Tusk scouts"],
    type: "creature",
    tag: "AC 14 · HP 10 · Stealth +7 · sent to look",
    summary: "Sent to look, not to fight: it <strong>withdraws the moment it drops below half hit points</strong>, no morale roll. Its objective is a hen, a coil of rope, and a count of how many people come running. <strong>Probes are survivable by both sides</strong> — a DM who kills a PC with three of these has broken canon. <span class=\"cite\">WP07 §6.2, §6.5</span>",
    href: "05-reference-props.html#creature-red-tusk-scout"
  },
  {
    id: "red-tusk-spear",
    name: "Red-Tusk Spear",
    aliases: [],
    type: "creature",
    tag: "AC 15 · HP 14 · fourteen exist and there will never be more",
    summary: "<strong>Bound in threes</strong> — an extra 1d6 against a target with two other Red-Tusk within 5 feet. <strong>They do not flank; they crowd.</strong> And each one <strong>will pick up dropped food, a carcass or a sack in preference to attacking</strong> if it can still get away with it, because that is what it came for. <span class=\"cite\">WP07 §6.2</span>",
    href: "05-reference-props.html#creature-red-tusk-spear"
  },
  {
    id: "red-tusk-bow",
    name: "Red-Tusk Bow",
    aliases: [],
    type: "creature",
    tag: "AC 13 · HP 11 · four exist",
    summary: "<strong>Shoots from the dark</strong> — advantage on its first attack of a combat if it is in darkness and the target is in light. <strong>This is why the Red-Tusk raid at night and why torches are a decision.</strong> It checks morale, and it shoots while withdrawing. <span class=\"cite\">WP07 §6.2</span>",
    href: "05-reference-props.html#creature-red-tusk-bow"
  },
  {
    id: "laughing-hollow-warden",
    name: "Laughing Hollow Warden",
    aliases: ["warden"],
    type: "creature",
    tag: "AC 15 · HP 36 · passive Perception 16 · not tough",
    summary: "<strong>They are not tough. They are simply never where you are swinging.</strong> A warden that begins its turn in cover will not leave it, and Hides as a bonus action wherever there is any cover at all. <strong>After two full rounds of contact every warden present breaks off regardless of how the fight is going, and the party will not find them.</strong> This is not negotiable. <span class=\"cite\">WP07 §7.2</span>",
    href: "05-reference-props.html#creature-laughing-hollow-warden"
  },
  {
    id: "caravan-guard",
    name: "Caravan Guard",
    aliases: [],
    type: "creature",
    tag: "AC 16 · HP 22 · four per wagon train · hired in Daggerford",
    summary: "<strong>Paid for the cargo</strong>: it will not move more than 60 feet from the wagon for any reason, will not pursue, and <strong>stops fighting the moment the wagon is secure</strong> — whether that means the attackers left or the wagon did. It is not brave and it is not loyal. It is employed. <span class=\"cite\">WP07 §8.1</span>",
    href: "05-reference-props.html#creature-caravan-guard"
  },
  {
    id: "the-moorgaunt",
    name: "The Moorgaunt",
    aliases: ["Moorgaunt", "the Thin Dog", "the lean thing"],
    type: "creature",
    tag: "AC 14 · HP 76 · Large beast · visibly starving",
    summary: "A long-limbed quadruped the colour of wet limestone. <strong>Its ribs are the memorable thing</strong> — a party that sees it describes it afterwards as <em>thin</em>, not as huge. It is not ancient, not magical and not connected to the site: <strong>it is an animal that ran out of country</strong>, because sixty-one goblins ate the moor's game to nothing. It kills, drags the body to a cache, and returns across three nights. <span class=\"cite\">WP07 §9</span>",
    href: "05-reference-props.html#creature-the-moorgaunt"
  },
  {
    id: "the-listener",
    name: "The Listener",
    aliases: [],
    type: "creature",
    tag: "AC 15 · HP 97 · blind · tremorsense 60 ft, stone only",
    summary: "A deterrent bred to keep things out of the water system, which has outlived its keepers, its instructions and its purpose. <strong>Any creature moving on dry stone within 60 feet is located automatically — invisibility, darkness, illusion and silence do nothing. A creature standing still in the moving channel cannot be detected at all.</strong> The eleven bodies on the dry steps are the clue. <span class=\"cite\">WP07 §10</span>",
    href: "05-reference-props.html#creature-the-listener"
  },
  {
    id: "the-sentinel",
    name: "The Sentinel",
    aliases: [],
    type: "creature",
    tag: "AC 20 · no hit points, by design · cannot be killed",
    summary: "A machine executing an intact instruction — <em>turn back what crosses the line</em> — with a corrupted map. <strong>Damage from a single source of less than 25 leaves no mark. There is no total and no bloodied: a party cannot damage it into stopping.</strong> It escalates through Warning, Removal and Suppression and never de-escalates, it never hurries, and <strong>it will not step outside the ward line</strong> — which the Watch-Glass shows for free at level 3. <span class=\"cite\">WP07 §11</span>",
    href: "05-reference-props.html#creature-the-sentinel"
  },

  /* ====================================================================== */
  /* RUMOURS — WP08 §10. Three of the twelve are false or misleading.       */
  /* ====================================================================== */

  {
    id: "rumour-r1",
    name: "R1",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “Four sheep in eleven days.” · true",
    summary: "<em>Bessa Ruddock has lost four ewes since the moon turned. She says something goes over the wall, not through it.</em> <strong>Entirely true.</strong> It is the Moorgaunt, on a three-night rhythm, and the drag trail runs north to the moor. Ignored, the flock goes — or Bessa does. <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r1"
  },
  {
    id: "rumour-r2",
    name: "R2",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “Her dogs won't go out.” · true",
    summary: "<em>Two nights running, the shepherd's dogs wouldn't leave the cott. They're good dogs.</em> True — and <strong>this is the goblin half, not the beast half</strong>. The dogs will face a predator; they will not face three people who throw stones. From session two both causes take livestock and the diagnosis gets hard. <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r2"
  },
  {
    id: "rumour-r3",
    name: "R3",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “Six of the quarry men have gone quiet.” · true",
    summary: "<em>Not one — six. The bunkhouse men. They come down early and they don't drink.</em> True: <strong>Sabel Quist will not work the lowest bench and cannot say why, and it has spread through the six.</strong> Rosal Tunn says this unprompted; it is her objective this tenday. It resolves itself on Day 2 whether or not anyone acts. <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r3"
  },
  {
    id: "rumour-r4",
    name: "R4",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “The stone at the Pale isn't cut right.” · true",
    summary: "<em>Ordga Brune says no chisel makes that cut. She's said it twice. Nobody asked what she meant.</em> <strong>True, and the best free lead in the campaign</strong> — Illefarn masonry, and the tower base, the shrine foundation and the burial-ground wall are the same stone. Ignored, nothing decays: <strong>it is simply still true in session four</strong>, which is its own kind of indictment. <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r4"
  },
  {
    id: "rumour-r5",
    name: "R5",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “There's no charcoal.” · true",
    summary: "<em>Four days late. Vadd was meant to fetch it and Vadd has been here every night.</em> True, and mundane: <strong>Ib Sallow is fine, and alone, and out of earshot of the bell.</strong> If the aperture has been opened there is a mark on a tree at his camp by session two, and at Hollow 4 the camp is interfered with and Ib is hurt. <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r5"
  },
  {
    id: "rumour-r6",
    name: "R6",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “The Reeve won't put the ring to the moot.” · true",
    summary: "<em>Enna Fisk has costed the gaps three times. Forty gold and eight loads and six days. It never gets asked.</em> True, and unfair to Ondra Vell — she will not raise it while the quarry households would walk out. <strong>Ignored, Defense stays 2 for the entire campaign, which is the single largest predictor of how session four goes.</strong> Deal it early and leave it on the table. <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r6"
  },
  {
    id: "rumour-r7",
    name: "R7",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “Nissa heard something at the fold.” · true",
    summary: "<em>The bell-warden was up in the small hours and says she heard it. Nobody went.</em> <strong>True.</strong> She is Greybank's only reliable night witness and she wants to be believed the first time. Ignored, she keeps being right and keeps not being believed — and <strong>in session three the party will have taught themselves not to listen.</strong> <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r7"
  },
  {
    id: "rumour-r8",
    name: "R8",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “The face came down at the Pale.” · Day 2 only · true",
    summary: "<em>Fifteen feet of it. Dov Marrek's under the stone. There's a hole behind it and the air's coming out.</em> True, and everyone in the village has it within a watch. Ignored, the village handles the rescue itself — and <strong>Stone Loads halve until the bench is shored, and there is no timber to shore it with.</strong> <span class=\"cite\">WP08 §10.2, §7</span>",
    href: "05-reference-props.html#rumour-r8"
  },
  {
    id: "rumour-r9",
    name: "R9",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “The village was never meant to be here.” · half true",
    summary: "<em>He says the quarry was somebody else's before it was ours and they left it for a reason.</em> <strong>Half true, and Old Tarn does not know which half.</strong> Greybank was founded ninety years ago by quarry-workers out of Daggerford and nobody left for a reason — but the stone <em>is</em> somebody else's, and he is accidentally correct about the part that matters. <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r9"
  },
  {
    id: "rumour-r10",
    name: "R10",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “The crossing book has a gap in it.” · true · never resolves",
    summary: "<em>Denk Ottersby writes down every cart. Somebody looked once and there were three months thin.</em> True — four silver, three months ago, and he does not know whose wagon it was. <strong>Ignored, nothing happens. It is here because a village should contain things that do not resolve.</strong> <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r10"
  },
  {
    id: "rumour-r11",
    name: "R11",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “There's a woman in the taproom buying.” · Day 1 Evening · true",
    summary: "<em>Travels alone, no escort, doesn't seem worried about it. Asking pleasant questions about the lowest bench.</em> True: it is Serina Malk. Ignored, she keeps buying and keeps asking — and <strong>the Daggerford clock does not move unless somebody tells her something true.</strong> <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r11"
  },
  {
    id: "rumour-r12",
    name: "R12",
    aliases: [],
    type: "rumour",
    tag: "Rumour · “The bridge has no rail on the downstream side.” · true",
    summary: "<em>A cart went through two winters back. It was never properly rebuilt.</em> True, and it is a fact about terrain rather than a problem to solve: anyone shoved or knocked prone within 5 feet of that edge risks a 20-foot fall into 9 feet of opaque water. <strong>Nothing happens until there is a fight on the bridge. Then it is the most important fact in the village.</strong> <span class=\"cite\">WP08 §10.2</span>",
    href: "05-reference-props.html#rumour-r12"
  }
];

/* Expose for browsers that scope differently. */
if (typeof window !== "undefined") {
  window.ENTITIES = ENTITIES;
}
