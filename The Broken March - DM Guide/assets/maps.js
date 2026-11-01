/* ==========================================================================
   The Broken March — Interactive DM Guide
   assets/maps.js — the map registry and the Maps page renderer

   Loaded only by 09-maps.html, after entities.js and before app.js, so the
   sections exist before app.js builds the contents list and links names.

   Each map is the picture plus a live overlay (inline SVG): numbered marks,
   a few patches, the ward line. Marks and key lines flagged dm are .dm-only,
   so the "Players only" switch hides them. Coordinates are in the picture's
   own pixels. Pictures: assets/img/maps/, prompts: "Maps — Generation
   Prompts.md", checks: "Maps — Audit.md" §6.

   Map entry
     id        anchor on 09-maps.html, and the entity `map` field
     file      picture in assets/img/maps/
     w, h      picture size in pixels
     view      optional [x, y, w, h] crop
     group     section it sits in
     who       "dm" (whole map DM only) | "players" | "both"
     title, desc, sources
     locations entity ids this map shows (links back to their entries)
     marks     [label, x, y, {dm, sq, txt, size}]  sq = exit letter, txt = plain text
     lines     [{pts: [[x,y],…], kind: live|keyed|dead|sentinel}]   always DM only
     patches   [[x, y, w, h, colour]]  covers stray lettering or a wrong feature
     key       [mark, text, dmText]  text is for everyone, dmText DM only
     notes     DM-only notes: where the picture differs from the sources
   ========================================================================== */

var MAP_GROUPS = [
  { id: "maps-region",  title: "The region" },
  { id: "maps-village", title: "Greybank" },
  { id: "maps-sites",   title: "Village sites" },
  { id: "maps-outside", title: "Outside the village" },
  { id: "maps-dungeon", title: "The Marrowward" }
];

var MAPS = [

  /* --- The region -------------------------------------------------------- */
  {
    id: "map-region-dm", file: "map-region-dm.jpg", w: 1200, h: 896, group: "maps-region", who: "dm",
    title: "The Broken March — DM region map",
    desc: "The whole valley, north at the top, about 30 miles across. Zone numbers, the six waystones and the ward line are drawn on top.",
    sources: "WP05 §3.3, §4.2, §5.1, §13; Canon Amendments §1–§2",
    locations: ["z3-home-fields", "z4-west-grazing", "z6-reedwater", "z8-the-cut", "z9-the-hollowway",
                "z10-anvil-gorge", "z12-bythe-ford", "z13-fenrow-holding", "z18-coldwell-vale"],
    lines: [
      { pts: [[690, 52], [642, 262]], kind: "dead" },
      { pts: [[642, 262], [611, 396]], kind: "keyed" },
      { pts: [[611, 396], [629, 393], [619, 414]], kind: "live" },
      { pts: [[619, 414], [800, 768]], kind: "dead" },
      { pts: [[800, 768], [232, 760]], kind: "live" }
    ],
    marks: [
      ["1", 655, 448], ["2", 528, 352], ["3", 850, 300], ["4", 320, 318], ["5", 590, 640], ["6", 1065, 285],
      ["7", 690, 290], ["8", 800, 610], ["9", 410, 650], ["10", 190, 380], ["11", 760, 205], ["12", 985, 440],
      ["13", 1010, 548], ["14", 860, 770], ["15", 150, 700], ["16", 430, 205], ["17", 735, 60],
      ["18", 40, 862, { sq: true }],
      ["W1–3", 575, 395, { dm: true, txt: true, size: 0.8 }], ["W4", 600, 262, { dm: true, txt: true, size: 0.8 }],
      ["W5", 800, 745, { dm: true, txt: true, size: 0.8 }], ["W6", 232, 738, { dm: true, txt: true, size: 0.8 }],
      ["Gate", 650, 48, { dm: true, txt: true, size: 0.8 }],
      ["→ Daggerford · 2 days", 1050, 868, { txt: true, size: 0.75 }]
    ],
    key: [
      ["1", "Z1 Greybank", "W1 tower, W2 shrine, W3 graveyard wall all stand here"],
      ["2", "Z2 The Pale (quarry) · ¼ watch", "the aperture: Marrowward Stage I"],
      ["3", "Z3 Home Fields · ¼"], ["4", "Z4 Fold and west grazing · ¼–½"],
      ["5", "Z5 Coppice and charcoal camp, far bank · ½"], ["6", "Z6 Reedwater · 1"],
      ["7", "Z7 Stonecrop Rise · 1", "W4, dead"], ["8", "Z8 The Cut · 1"],
      ["9", "Z9 The Hollowway, far bank · 1"], ["10", "Z10 Anvil Gorge · 1½ (foot crossing only)"],
      ["11", "Z11 Hagsfoot Moor · 2", "S16 breaks the surface here"], ["12", "Z12 Bythe Ford · 2 (the cart detour)"],
      ["13", "Z13 Fenrow Holding · 2½"], ["14", "Z14 Wend's Barrow · 2", "W5, dead, buried"],
      ["15", "Z15 The Hollowmarch · 3", "W6, living, tended by the elves"],
      ["16", "Z16 Kettlerock · 3", "the Red-Tusk camp, 61 goblins"],
      ["17", "Z17 The Old Delving · 4", "the Kettlerock Gate, piled shut from outside"],
      ["18", "Z18 Coldwell Vale · 5, through Z15 only"],
      [null, null, "Ward line: solid ochre = living span · dash-dot = lit by key A · red dots = dead span. Chain: Gate → W4 → W3 → W1 → W2 → W5 → W6 (Canon Amendments §1)"]
    ],
    notes: [
      "The image model wrote plain descriptive labels on the picture (\"open moor\", \"bridge\"…). They are accurate, so they stay.",
      "The north is squeezed: the cleft (Z17) sits about 9 map-miles north, not 16. Use the watches in the key, not the picture, for travel."
    ]
  },
  {
    id: "map-region-players", file: "map-region-players.jpg", w: 1200, h: 896, group: "maps-region", who: "players",
    title: "The valley — player map",
    desc: "What a Greybank villager could draw from memory. The north beyond the moor and the whole west stay empty for the players to fill in. Never print travel times on it.",
    sources: "WP05 §14, §16.10",
    locations: [],
    marks: [
      ["1", 540, 430], ["2", 605, 545], ["3", 285, 360], ["4", 705, 400], ["5", 350, 470], ["6", 365, 720],
      ["7", 930, 370], ["8", 905, 505], ["9", 690, 700],
      ["the moor", 600, 215, { txt: true }], ["to Daggerford — 2 days →", 990, 870, { txt: true, size: 0.8 }]
    ],
    key: [
      ["1", "Greybank"], ["2", "the bridge"], ["3", "the Pale (the quarry)"], ["4", "the Home Fields"],
      ["5", "the Fold"], ["6", "the Coppice"], ["7", "Reedwater"], ["8", "Bythe Ford"], ["9", "the Cut"]
    ],
    notes: [
      "The river is drawn climbing to the north-east. In the sources it runs west to east-south-east. Fine for a villager's sketch; don't trust its angle.",
      "The \"ford\" is drawn as a dotted path that also runs south across the land."
    ]
  },

  /* --- Greybank ----------------------------------------------------------- */
  {
    id: "map-greybank-dm", file: "map-greybank-dm.jpg", w: 1024, h: 1536, group: "maps-village", who: "dm",
    title: "Greybank — DM map",
    desc: "The painted village map with the WP02 keys on top: the 22 places, the four ring gaps, the seven ways in, the six chokepoints, and the three waystones in the village. Not to scale: about 1.9 pixels to the yard.",
    sources: "WP02 §4.6, §4.7, §5, §7; WP05 §10; WP15 §3.1",
    locations: ["greybank", "z1-greybank", "z2-the-pale", "g4-drays-store", "g5-the-smithy", "g9-shrine-of-chauntea",
                "g10-the-green", "g11-moot-hall", "g12-militia-shed", "g14-the-quarry", "g15-the-bunkhouse",
                "g16-the-wagonyard", "g17-the-cotts", "g21-earth-ring", "g22-herbwifes-cottage", "waystone-w2"],
    marks: [
      ["1", 470, 1105], ["2", 560, 1215], ["3", 490, 820], ["4", 382, 820], ["5", 630, 815], ["6", 175, 875],
      ["7", 283, 860], ["8", 262, 1000], ["9", 330, 570], ["10", 470, 735], ["11", 548, 585], ["12", 268, 655],
      ["13", 640, 90], ["14", 180, 120], ["15", 262, 290], ["16", 820, 800], ["17", 470, 440], ["18", 70, 655],
      ["19", 520, 230], ["21", 188, 520], ["22", 770, 360],
      ["NW", 330, 330, { sq: true }], ["N", 508, 318, { sq: true }], ["E", 905, 610, { sq: true }], ["SE", 905, 905, { sq: true }],
      ["R1", 440, 1470, { sq: true }], ["R2", 255, 240, { sq: true }], ["R3", 470, 160, { sq: true }], ["R4", 990, 600, { sq: true }],
      ["R5", 975, 1040, { sq: true }], ["R6", 345, 1050, { sq: true }], ["R7", 205, 1050, { sq: true }],
      ["C1", 545, 1085], ["C2", 700, 885], ["C3", 520, 505], ["C4", 300, 930], ["C5", 190, 345],
      ["W1", 595, 132, { txt: true }], ["W2", 300, 602, { txt: true }], ["W3", 578, 205, { txt: true }],
      ["aperture", 232, 168, { txt: true }],
      ["9 ft deep", 610, 1150, { txt: true, size: 0.8 }], ["shoal (late summer)", 345, 1095, { txt: true, size: 0.8 }],
      ["← G20, ½ mile SW", 120, 1515, { txt: true, size: 0.8 }]
    ],
    key: [
      ["1", "G1 Marrow Bridge · 11 ft wide, 90 ft long"], ["2", "G2 Toll-shed · south bank · the crossing book"],
      ["3", "G3 The Sundered Cart · thatch"], ["4", "G4 Dray's Store · slate"], ["5", "G5 The Smithy · slate lean-to"],
      ["6", "G6 The Mill · thatch"], ["7", "G7 The Granary · slate"], ["8", "G8 The Wharf · the skiff (seats 4)"],
      ["9", "G9 Shrine of Chauntea"], ["10", "G10 The Green · well · bell post"], ["11", "G11 Moot Hall · slate"],
      ["12", "G12 The Militia Shed"], ["13", "G13 The Tower · 30 ft"], ["14", "G14 The Quarry, the Pale"],
      ["15", "G15 Bunkhouse · thatch"], ["16", "G16 The Wagonyard · hay loft thatch"],
      ["17", "G17 The Cotts · 22 dwellings · thatch"], ["18", "G18 The Fold and Byres · outside the ring"],
      ["19", "G19 The Burial Ground"], ["20", "G20 Charcoal Camp · off the map, ½ mile SW"],
      ["21", "G21 The Earth Ring · broken in four places"], ["22", "G22 Herbwife's Cottage (spot approximate)"],
      ["NW N E SE", "the four ring gaps · 20–40 ft each (chokepoint 6)"],
      ["R1", "south road → bridge · carts"], ["R2", "haul road from the quarry · carts"], ["R3", "north footpath, past the graves"],
      ["R4", "east gap, through the fields"], ["R5", "south-east gap, riverside path · overgrown"],
      ["R6", "the shoal · late summer only · waist-deep, 40 ft"], ["R7", "the wharf, by boat"],
      ["C1", "the bridge · 11 ft"], ["C2", "the Street at the smithy · 15 → 9 ft"], ["C3", "the four Cott lane-mouths · 6–8 ft"],
      ["C4", "the mill causeway · 8 ft"], ["C5", "the haul road cut · 12 ft"],
      ["W1–W3", "waystones: tower base, shrine footing, graveyard north wall"],
      ["aperture", "the quarry aperture: Marrowward Stage I (S1)"]
    ],
    notes: [
      "Not added: the 50-yard grid and household numbers H1–H34. The painting is not to scale, and no source says which cottage is which household.",
      "Mill, granary and wharf sit together at the west end, as in the painting. WP02 §4.3 calls Millside \"the downstream end\"; the river flows east, so that word is a slip."
    ]
  },
  {
    id: "map-greybank-players", file: "map-greybank-players.jpg", w: 848, h: 1264, group: "maps-village", who: "players",
    title: "Greybank — player map",
    desc: "The villager's sketch: hand it out without comment and let the players draw on it. It leaves out the ring gaps, the shoal, the riverside path, the skiff and the aperture.",
    sources: "WP02 §6, WP15 §3.2",
    locations: [],
    marks: [
      ["1", 372, 742], ["2", 520, 728], ["3", 632, 702], ["4", 175, 795], ["5", 305, 640], ["6", 590, 470], ["7", 150, 215],
      ["to Daggerford — 2 days ↓", 430, 1230, { txt: true, size: 0.85 }]
    ],
    key: [["1", "store"], ["2", "taproom"], ["3", "smithy"], ["4", "mill"], ["5", "shrine"], ["6", "Moot Hall"], ["7", "quarry"]],
    notes: ["The image model wrote some labels itself (\"long hall\" is the Moot Hall). All are correct and none gives a secret away."]
  },

  /* --- Village sites ------------------------------------------------------ */
  {
    id: "map-g13-the-tower", file: "map-g13-the-tower.jpg", w: 1024, h: 1024, group: "maps-sites", who: "both",
    title: "The Tower and the Burial Ground (G13, G19)",
    desc: "Battle map, 5-ft squares. The tower's ancient lower drum and the graveyard's north wall are the same pale, jointless stone.",
    sources: "WP02 G13, G19; WP09 Scene 3, §2.6; design doc §33.10",
    locations: ["g13-the-tower", "g19-burial-ground", "waystone-w1", "waystone-w3"],
    marks: [["1", 512, 470], ["2", 445, 300], ["3", 600, 360], ["4", 390, 522], ["5", 512, 850], ["6", 560, 60]],
    key: [
      ["1", "tower door · manned Dawn to Evening, empty at night"], ["2", "ladder and hatch to the villager-built top"],
      ["3", "a palm-sized dip in the wall, not quite warm", "W1's anchor recess. No key fits it"],
      ["4", "the graveyard's north wall: the same seamless stone", "W3: a dead post, lit by key A in S3"],
      ["5", "lych-gate"], ["6", "north footpath to the moor edge (route R3)"]
    ],
    notes: ["The recess is drawn on the east wall rather than opposite the door. Use where it is drawn."]
  },
  {
    id: "map-g18-the-fold", file: "map-g18-the-fold.jpg", w: 1200, h: 896, group: "maps-sites", who: "both",
    title: "The Fold and Byres (G18)",
    desc: "Battle map, 5-ft squares. 260 yards west of the Green, outside the ring, unlit at night.",
    sources: "WP02 G18; WP09 Scene 1, Scene 9B",
    locations: ["g18-the-fold"],
    marks: [["1", 880, 340], ["2", 600, 160], ["3", 165, 470], ["4", 1110, 470], ["5", 760, 100]],
    key: [
      ["1", "gate and lantern post"], ["2", "the three byres"],
      ["3", "slumped wall, loose stones", "where the Red-Tusk scouts come over (Deadline 1)"],
      ["4", "track east to the Green · 260 yd, about 26 rounds at a run"],
      ["5", "track north across the Home Fields", "the goblin trail to Stonecrop Rise"]
    ]
  },
  {
    id: "map-g1-marrow-bridge", file: "map-g1-marrow-bridge.jpg", w: 848, h: 1264, group: "maps-sites", who: "both",
    title: "Marrow Bridge and the Toll-shed (G1, G2)",
    desc: "Battle map, 5-ft squares. North (the village) at the top. The downstream (east) edge of the deck has no rail.",
    sources: "WP02 G1, G2, §4.6; WP09 Scene 8",
    locations: ["g1-marrow-bridge", "g2-toll-shed"],
    marks: [["1", 425, 600], ["2", 570, 960], ["3", 330, 630], ["4", 425, 1200], ["5", 440, 90]],
    key: [
      ["1", "the deck · 11 ft wide, two abreast. Shoved off the east edge: 20 ft fall into 9 ft of opaque water"],
      ["2", "the toll-shed · Denk Ottersby, the crossing book"],
      ["3", "stone piers", "only the quarry's blasting powder drops them"],
      ["4", "south road, to Daggerford (2 days)"], ["5", "north end: the Street, 220 yd to the Green"]
    ],
    notes: ["The deck is drawn about 20 ft wide. The rule is 11 ft: treat it as two squares wide."]
  },
  {
    id: "map-g3-the-sundered-cart", file: "map-g3-the-sundered-cart.jpg", w: 1264, h: 848, group: "maps-sites", who: "both",
    title: "The Sundered Cart (G3) — floor plans",
    desc: "Ground floor (left) and loft (right), 5-ft squares. Thatch roof: the worst fire risk on the Street.",
    sources: "WP02 G3, §14.11; WP09 Scenes 1, 7",
    locations: ["g3-the-sundered-cart"],
    marks: [["1", 445, 690], ["2", 410, 410], ["3", 380, 250], ["4", 590, 250], ["5", 580, 340], ["6", 220, 300],
            ["7", 1000, 430], ["8", 795, 420], ["9", 105, 600]],
    key: [
      ["1", "front door, onto the Street"], ["2", "the hearth"], ["3", "the bar (Rosal Tunn)"], ["4", "kitchen, oven, back door"],
      ["5", "cellar trapdoor", "about 40 gp of drink below"], ["6", "ladder to the loft"],
      ["7", "pallets · 5 cp a night"], ["8", "the gable window"], ["9", "stable lean-to (two animals)"]
    ],
    notes: ["Six pallets are drawn; WP02 lets only four."]
  },
  {
    id: "map-g6-millside-dm", file: "map-g6-millside-dm.jpg", w: 1200, h: 896, view: [0, 0, 1030, 896],
    group: "maps-sites", who: "dm",
    title: "Millside (G6–G8) and the shoal",
    desc: "Battle map, 5-ft squares, at the west end of the village. The river flows left to right. The shoal is the village's back door.",
    sources: "WP02 G6, G7, G8, §4.1, §4.6, §4.7; WP05 §5.1",
    locations: ["g6-the-mill", "g7-the-granary", "g8-the-wharf"],
    marks: [["1", 480, 230], ["2", 235, 395], ["3", 745, 250], ["4", 890, 395], ["5", 760, 620], ["6", 650, 368]],
    key: [
      ["1", "the mill (Corvin Ash) · 10 ft drop to the wheel race"], ["2", "the sluice · raises the shoal ~18 in, closing it"],
      ["3", "the granary · shelter and siege target"], ["4", "the wharf and the skiff (seats four)"],
      ["5", "the shoal · late summer only · waist-deep, 40 ft of exposure"],
      ["6", "the mill causeway, from the east · 8 ft (chokepoint 4)"]
    ],
    notes: ["The picture drew a stone causeway right across the river at its east edge. That would be a second crossing, which canon does not have, so the view is cropped to leave it out."]
  },

  /* --- Outside the village ------------------------------------------------ */
  {
    id: "map-g20-charcoal-camp", file: "map-g20-charcoal-camp.jpg", w: 1024, h: 1024, group: "maps-outside", who: "both",
    title: "The Charcoal Camp (G20), in the Coppice (Z5)",
    desc: "Battle map, 5-ft squares. Far bank, half a mile south-west of the bridge. Ib Sallow is here every night, out of earshot of the bell.",
    sources: "WP02 G20; WP05 Z5; WP09 Scene 9A",
    locations: ["g20-charcoal-camp", "z5-the-coppice"],
    marks: [["1", 410, 600], ["2", 400, 330], ["3", 765, 470], ["4", 650, 830], ["5", 880, 150], ["6", 70, 500]],
    key: [
      ["1", "the burning-clamps · open fire, always"], ["2", "Ib Sallow's turf shelter"], ["3", "stack yard (timber)"],
      ["4", "the alder by the stream", "the Hollow's stage-2 mark is cut here"],
      ["5", "track north-east to the bridge · ½ mile, ¼ watch"], ["6", "path west, toward the Hollowway"]
    ]
  },
  {
    id: "map-z7-stonecrop-rise", file: "map-z7-stonecrop-rise.jpg", w: 1200, h: 896, group: "maps-outside", who: "both",
    title: "Stonecrop Rise (Z7)",
    desc: "The bald ridge 4 miles north. From the crest you see Greybank, the quarry, the river, the road, and smoke from Kettlerock. Drawn as a view, not a battle map.",
    sources: "WP05 Z7, §10; WP09 Scene 9B, §2.6",
    locations: ["z7-stonecrop-rise", "waystone-w4"],
    marks: [["1", 690, 320], ["2", 540, 300], ["3", 520, 430], ["4", 560, 800], ["5", 720, 80]],
    key: [
      ["1", "the standing stone: pale, smooth, no joints", "W4. Dead: cold to the touch"],
      ["2", "the cairns: real, old graves"], ["3", "the scouts' cache: hen bones, the rope, the fence panel, old fires"],
      ["4", "trail south to the fold · about 1 watch"], ["5", "trail north toward Kettlerock"]
    ],
    notes: ["The cache is drawn on the village side of the crest. The sources only say \"50 yards below the crest\", so either side is fine."]
  },
  {
    id: "map-z11-hagsfoot-moor-dm", file: "map-z11-hagsfoot-moor-dm.jpg", w: 1024, h: 1024, group: "maps-outside", who: "dm",
    title: "Hagsfoot Moor (Z11) — the hole",
    desc: "Open moor 8 miles north. No cover, no water: anyone crossing is seen. The hole is S16, the Broken Quarter.",
    sources: "WP05 Z11; WP06 §4.5, S16",
    locations: ["z11-hagsfoot-moor"],
    marks: [["1", 370, 480], ["2", 470, 960], ["3", 640, 60]],
    key: [["1", "the hole: S16, the Broken Quarter. The way things get in, open now"],
          ["2", "trail south to Stonecrop Rise · 1 watch"], ["3", "trail north to Kettlerock · 1 watch"]]
  },
  {
    id: "map-z16-kettlerock", file: "map-z16-kettlerock.jpg", w: 1200, h: 896, group: "maps-outside", who: "both",
    title: "Kettlerock (Z16) — the Red-Tusk camp",
    desc: "A bowl of shattered limestone 3 watches north-north-west, with a spring that does not fail.",
    sources: "WP05 Z16; WP04 §6.1",
    locations: ["z16-kettlerock"],
    marks: [["1", 640, 430], ["2", 480, 380], ["3", 345, 175], ["4", 880, 820], ["5", 900, 70]],
    key: [
      ["1", "the spring"], ["2", "the camp", "61 Red-Tusk: 22 fighters, 39 who can't fight, 11 wounded"],
      ["3", "lookout"], ["4", "trail south-east: Hagsfoot Moor, then Greybank (3 watches)"],
      ["5", "trail north-east: the Old Delving (1 watch)"]
    ]
  },
  {
    id: "map-z17-the-old-delving", file: "map-z17-the-old-delving.jpg", w: 1200, h: 896, group: "maps-outside", who: "both",
    title: "The Old Delving (Z17)",
    desc: "A worked cleft 4 watches north. The goblins piled the doorway shut from outside and ran.",
    sources: "WP05 Z17; WP06 §4.1, S12",
    locations: ["z17-the-old-delving"],
    marks: [["1", 800, 250], ["2", 560, 520], ["3", 300, 420], ["4", 230, 840]],
    key: [
      ["1", "the doorway, piled shut from outside", "the Kettlerock Gate; S12 is behind it"],
      ["2", "the abandoned goblin camp"], ["3", "old spoil heaps"], ["4", "trail south-west to Kettlerock (1 watch)"]
    ]
  },
  {
    id: "map-z14-wends-barrow", file: "map-z14-wends-barrow.jpg", w: 1024, h: 1024, group: "maps-outside", who: "both",
    title: "Wend's Barrow (Z14)",
    desc: "A long low mound in birch scrub, a mile south of the Daggerford road. Everyone knows the story; nobody has dug.",
    sources: "WP05 Z14, §10",
    locations: ["z14-wends-barrow", "waystone-w5"],
    marks: [["1", 520, 510], ["2", 395, 80]],
    key: [["1", "the mound", "not a barrow: W5 stands upright inside it, dead, with spoil heaped against it"],
          ["2", "path north to the Daggerford road · 1 mile"]]
  },
  {
    id: "map-z15-the-hollowmarch", file: "map-z15-the-hollowmarch.jpg", w: 1024, h: 1024, group: "maps-outside", who: "both",
    title: "The Hollowmarch (Z15)",
    desc: "Old woodland 3 watches south-west, with clearings that are too regular. The outer edge of elven-watched country.",
    sources: "WP05 Z15, §10; WP09 §2.6",
    locations: ["z15-the-hollowmarch", "waystone-w6"],
    marks: [["1", 560, 470], ["2", 230, 225], ["3", 965, 470], ["4", 90, 930]],
    key: [
      ["1", "a standing stone, kept clear", "W6: living, tended by the wardens"],
      ["2", "the too-regular clearings"], ["3", "path east, from the Hollowway (2 watches)"],
      ["4", "path south-west, toward Coldwell Vale (2 watches)"]
    ]
  },

  /* --- The Marrowward ----------------------------------------------------- */
  {
    id: "map-marrowward-section-dm", file: "map-marrowward-section-dm.jpg", w: 1376, h: 768, group: "maps-dungeon", who: "dm",
    title: "The Marrowward — the whole site, side view",
    desc: "South on the left, north on the right. Four stages under the hills, from the quarry to the Old Delving, with S16 breaking out on Hagsfoot Moor. Not to scale.",
    sources: "WP06 §4.1–§4.5, §16",
    locations: ["the-ruins"],
    patches: [
      { pts: [[268, 381], [348, 415]], w: 34 },
      { pts: [[373, 427], [494, 480]], w: 34 }
    ],
    passages: [
      { pts: [[255, 374], [255, 424]] },
      { pts: [[272, 456], [272, 492]] }
    ],
    marks: [
      ["I", 160, 380, { size: 0.9 }], ["II", 230, 520, { size: 0.9 }], ["8", 495, 640], ["9", 540, 440],
      ["10", 800, 450], ["12", 1200, 440], ["IV", 860, 650, { size: 0.9 }], ["16", 975, 380],
      ["A", 125, 300, { sq: true }], ["C", 385, 245, { sq: true }], ["G", 1300, 300, { sq: true }], ["H", 975, 270, { sq: true }],
      ["the Pale", 200, 165, { txt: true, size: 0.8 }], ["Stonecrop Rise", 520, 160, { txt: true, size: 0.8 }],
      ["Hagsfoot Moor", 840, 175, { txt: true, size: 0.8 }], ["Old Delving", 1250, 125, { txt: true, size: 0.8 }]
    ],
    key: [
      ["I", "Stage I, level 3 · S1–S4 (the Greybank Gate)"], ["II", "Stage II, level 4 · S5–S7 (the Service Works)"],
      ["8", "S8 the Drowned Stair: the Listener's water"], ["9", "S9 the Transit Ring, South: the turning floor"],
      ["10", "S10 the Long Gallery (S11 off it): the Sentinel's patrol, miles long"],
      ["12", "S12 the Kettlerock Gate, up to the Old Delving"],
      ["IV", "Stage IV, level 5–6 · S13–S15 (the Ward Heart)"], ["16", "S16 the Broken Quarter"],
      ["A", "the aperture, into Stage I"], ["C", "the overflow shaft: quarry bench ↔ S7"],
      ["G", "the Kettlerock Gate, piled shut from outside"], ["H", "the hole on Hagsfoot Moor"]
    ],
    notes: [
      "Fixed on the overlay: the picture ran one long ramp from the aperture straight to S9, skipping Stages I and II. That passage is painted out; the ramp now ends at Stage I, and Stage I joins Stage II (through S5).",
      "Still in the picture: the rubble chimney from the moor crosses the Long Gallery. In canon it reaches Stage IV only (WP06 §4.5). Treat it as passing beside the gallery."
    ]
  },
  {
    id: "map-marrowward-stage-1-dm", file: "map-marrowward-stage-1-dm.jpg", w: 1024, h: 1024, group: "maps-dungeon", who: "dm",
    title: "Stage I — the Greybank Gate (S1–S4)",
    desc: "Level 3. Cold, dry, empty: nothing here kills a careful party. Exit letters match the other stage maps.",
    sources: "WP06 §7; Canon Amendments §2–§3",
    locations: ["s1-aperture-and-ramp", "s2-muster-floor", "s3-anchor-room", "s4-watch-chamber"],
    marks: [["1", 510, 700], ["2", 400, 250], ["3", 180, 560], ["4", 850, 600], ["A", 600, 975, { sq: true }], ["B", 510, 40, { sq: true }]],
    key: [
      ["1", "S1 the ramp", "Durrow's boards, two loose; his bootprints turn at 10 ft"],
      ["2", "S2 the Muster Floor: benches, pegs, the roster on the north wall", "the warden's kit is empty"],
      ["3", "S3 the Anchor Room", "key A sits in the recess; System 1 active"],
      ["4", "S4 the Watch Chamber", "the Watch-Glass: 4 of 6 lit. Opened by Knock"],
      ["A", "the aperture, up to the quarry floor (Z2)"], ["B", "to S5, the Lock Gallery (Stage II)"]
    ],
    notes: ["The ramp is drawn running inside the hall between two walls. Read it as: the ramp comes down, then the hall."]
  },
  {
    id: "map-marrowward-stage-2-dm", file: "map-marrowward-stage-2-dm.jpg", w: 1200, h: 896, group: "maps-dungeon", who: "dm",
    title: "Stage II — the Service Works (S5–S8)",
    desc: "Level 4. The first stage with something in it that will kill you. The image model wrote room names on the picture; they are right.",
    sources: "WP06 §8; Canon Amendments §3; WP09 §2.5, Scene 10",
    locations: ["s5-lock-gallery", "lockkeepers-cell", "s6-the-workshops", "s7-sluice-hall", "s8-drowned-stair"],
    marks: [
      ["5", 760, 800], ["5a", 650, 720], ["6a", 470, 470], ["6b", 720, 470], ["6c", 960, 470], ["6d", 1110, 200],
      ["7", 300, 400], ["8", 500, 280],
      ["B", 790, 880, { sq: true }], ["C", 110, 640, { sq: true }], ["D", 1020, 40, { sq: true }], ["E", 660, 40, { sq: true }]
    ],
    key: [
      ["5", "S5 the Lock Gallery: the great stone leaf and its counterweight", "the leaf is held open by key A in S3"],
      ["5a", "the Lock-keeper's Cell", "the lever drops a bar that wedges the leaf shut. Forcing the door breaks it for good"],
      ["6a–6d", "S6 the Workshops: stone-shop, metal-shop, store, records room",
       "archive about a fifth gone; the Chain sequence's middle third is with Serina Malk"],
      ["7", "S7 the Sluice Hall: nobody hears anything in here", "System 3"],
      ["8", "S8 the Drowned Stair", "the Listener. Eleven bodies, all on dry stone"],
      ["B", "back to S2 (Stage I)"], ["C", "the overflow shaft, up to the quarry's lowest bench"],
      ["D", "the S9 door", "key B in its lock, leaf open. The Sentinel senses 120 ft from S9: into this room"],
      ["E", "the flooded passage to S9 (swim)"]
    ],
    notes: [
      "Five workshop rooms are drawn, not four: there is a second \"store\" north of the metal-shop. Treat it as part of the store (6c).",
      "The flooded passage (E) starts near the head of the stair, not its foot. Run it from the foot, as WP06 says."
    ]
  },
  {
    id: "map-marrowward-stage-3-dm", file: "map-marrowward-stage-3-dm.jpg", w: 848, h: 1264, group: "maps-dungeon", who: "dm",
    title: "Stage III — the Transit Ring (S9–S12)",
    desc: "Level 4–5. The spine of the line, and where the Sentinel walks. The gallery is miles long; the break lines leave most of it out.",
    sources: "WP06 §9; WP09 §2.5, Scene 10.4–10.6",
    locations: ["s9-transit-ring-south", "s10-long-gallery", "s11-deterrent-gallery", "s12-kettlerock-gate"],
    patches: [[380, 2, 90, 26, "#fbf5e5"], [600, 1232, 120, 28, "#fbf5e5"]],
    lines: [{ pts: [[430, 1035], [430, 300]], kind: "sentinel" }],
    marks: [
      ["9", 430, 1060], ["10", 430, 760], ["11", 190, 640], ["12", 430, 230],
      ["D", 650, 1190, { sq: true }], ["E", 60, 1045, { sq: true }], ["F", 790, 630, { sq: true }], ["G", 430, 20, { sq: true }]
    ],
    key: [
      ["9", "S9 the turning floor: grooved by something heavy", "System 4. Key B in the lock, leaf open. The Sentinel turns here once per watch, at the half-watch mark"],
      ["10", "S10 the Long Gallery: 12 ft wide, dead straight, no cover", "the Sentinel's patrol; the groove is an inch deep at the midpoint"],
      ["11", "S11 the Deterrent Chain", "System 5. A resonance key hangs on the last plate"],
      ["12", "S12 the north end and the Kettlerock Gate", "piled shut from outside; opens outward from inside, no tools"],
      ["D", "the door from the S6 records room"], ["E", "the flooded passage from S8"],
      ["F", "to S13, the Approach of Names (Stage IV)"], ["G", "out to the Old Delving (Z17)"],
      [null, null, "Red dots: the Sentinel's circuit. Its sense reaches 120 ft from the S9 floor, into the S6 records room."]
    ],
    notes: ["The flooded passage comes in from the left (west), not the bottom. Same passage."]
  },
  {
    id: "map-marrowward-stage-4-dm", file: "map-marrowward-stage-4-dm.jpg", w: 1200, h: 896, group: "maps-dungeon", who: "dm",
    title: "Stage IV — the Ward Heart (S13–S16)",
    desc: "Level 5–6. Reached only from Stage III, or by climbing down the hole on Hagsfoot Moor.",
    sources: "WP06 §10; Canon Amendments §1–§2; WP09 §2.6",
    locations: ["s13-approach-of-names", "s14-sentinels-walk", "s15-ward-heart", "s16-broken-quarter"],
    lines: [{ pts: [[20, 445], [600, 445]], kind: "sentinel" }, { pts: [[605, 300], [605, 820]], kind: "sentinel" }],
    marks: [["13", 230, 445], ["14", 680, 600], ["15", 970, 450], ["16", 610, 160], ["F", 30, 380, { sq: true }], ["H", 700, 30, { sq: true }]],
    key: [
      ["13", "S13 the Approach of Names: walls cut with names, a door and a recess", "accepts a name, not a key"],
      ["14", "S14 the Sentinel's Walk", "its circuit begins and ends here; System 6, the authorisation register"],
      ["15", "S15 the Ward Heart: six seats round a well", "System 7. Four seats lit, two dark"],
      ["16", "S16 the Broken Quarter", "the three dead spans; a goblin's 40-year-old bundle"],
      ["F", "from S10, the Long Gallery"], ["H", "scramble up and out onto Hagsfoot Moor (Z11)"]
    ]
  },
  {
    id: "map-marrowward-diagram-dm", file: "marrowward-map-dm.png", w: 1400, h: 1180, group: "maps-dungeon", who: "dm",
    title: "The Marrowward — as played (diagram)",
    desc: "The box diagram of every sector after Session 1: which barriers are open, where keys A and B are, what has been seen. Use it for state; use the stage maps for space.",
    sources: "Canon Amendments §3; Maps/tools/build_maps.py",
    locations: [],
    marks: [], key: []
  }
];

/* ==========================================================================
   Renderer
   ========================================================================== */

(function () {
  "use strict";

  var host = document.querySelector("[data-maps]");
  if (!host) return;

  var SVGNS = "http://www.w3.org/2000/svg";
  var svgCount = 0;
  var IMG = "assets/img/maps/";
  var LINE_STYLE = {
    live:     { stroke: "#b07d1a", width: 5, dash: "" },
    keyed:    { stroke: "#b07d1a", width: 5, dash: "18 7 3 7" },
    dead:     { stroke: "#9b2a1e", width: 4, dash: "2 9" },
    sentinel: { stroke: "#b3261e", width: 5, dash: "2 10" }
  };

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function svg(tag, attrs) {
    var n = document.createElementNS(SVGNS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function entity(id) {
    var list = window.ENTITIES || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function pointsAttr(pts) { return pts.map(function (p) { return p.join(","); }).join(" "); }

  /* The overlay. Mark size scales with the shorter side of the view. */
  function buildSvg(m) {
    var v = m.view || [0, 0, m.w, m.h];
    var s = Math.min(v[2], v[3]) / 1000;
    var outer = svg("svg", { viewBox: v.join(" "), class: "map-svg", role: "img", "aria-label": m.title });
    var uid = "m" + (++svgCount);
    var defs = svg("defs");
    outer.appendChild(defs);

    /* The full-size viewer letterboxes, which would show what a crop cuts
       away: clip everything to the view. */
    var clip = svg("clipPath", { id: uid + "-clip" });
    clip.appendChild(svg("rect", { x: v[0], y: v[1], width: v[2], height: v[3] }));
    defs.appendChild(clip);
    var root = svg("g", { "clip-path": "url(#" + uid + "-clip)" });
    outer.appendChild(root);
    root.appendChild(svg("image", { href: IMG + m.file, x: 0, y: 0, width: m.w, height: m.h }));

    /* Painted-out passages get the rock's colour and stipple. */
    var rock = svg("pattern", { id: uid + "-rock", width: 13, height: 11, patternUnits: "userSpaceOnUse" });
    rock.appendChild(svg("rect", { width: 13, height: 11, fill: "#c2b6a4" }));
    [[2, 3], [8, 8], [11, 2], [5, 9]].forEach(function (d) {
      rock.appendChild(svg("circle", { cx: d[0], cy: d[1], r: 0.8, fill: "#9c907e" }));
    });
    defs.appendChild(rock);

    (m.patches || []).forEach(function (p) {
      if (p.pts) {
        root.appendChild(svg("polyline", { points: pointsAttr(p.pts), fill: "none", stroke: "url(#" + uid + "-rock)",
          "stroke-width": p.w, "stroke-linecap": "round", class: "map-patch" }));
      } else {
        root.appendChild(svg("rect", { x: p[0], y: p[1], width: p[2], height: p[3], fill: p[4] }));
      }
    });
    (m.passages || []).forEach(function (p) {
      root.appendChild(svg("polyline", { points: pointsAttr(p.pts), fill: "none", stroke: "#3b2a1a",
        "stroke-width": 16, "stroke-linecap": "butt" }));
      root.appendChild(svg("polyline", { points: pointsAttr(p.pts), fill: "none", stroke: "#efe6d4",
        "stroke-width": 10, "stroke-linecap": "butt" }));
    });

    var lines = svg("g", { class: "dm-only map-lines" });
    (m.lines || []).forEach(function (l) {
      var st = LINE_STYLE[l.kind];
      lines.appendChild(svg("polyline", { points: pointsAttr(l.pts), fill: "none", stroke: st.stroke,
        "stroke-width": st.width * s * 1.4, "stroke-dasharray": st.dash, "stroke-linecap": "round",
        "stroke-linejoin": "round" }));
    });
    if (m.lines) root.appendChild(lines);

    (m.marks || []).forEach(function (mk) {
      var label = mk[0], x = mk[1], y = mk[2], o = mk[3] || {};
      var size = (o.size || 1) * s;
      var g = svg("g", { class: "map-mark" + (o.dm ? " dm-only" : "") + (o.txt ? " map-mark-txt" : "") });
      var fs = 26 * size;
      if (o.txt) {
        var t = svg("text", { x: x, y: y, "text-anchor": "middle", "dominant-baseline": "central",
          "font-size": fs, class: "map-txt" + (o.dm ? " map-txt-dm" : "") });
        t.textContent = label;
        g.appendChild(t);
      } else {
        var r = (label.length > 2 ? 30 : label.length > 1 ? 24 : 20) * size;
        if (o.sq) {
          g.appendChild(svg("rect", { x: x - r, y: y - r * 0.8, width: 2 * r, height: 1.6 * r, rx: 4 * size,
            class: "map-sq" }));
        } else {
          g.appendChild(svg("circle", { cx: x, cy: y, r: r, class: "map-dot" }));
        }
        var t2 = svg("text", { x: x, y: y, "text-anchor": "middle", "dominant-baseline": "central",
          "font-size": fs * (label.length > 2 ? 0.75 : 1), class: o.sq ? "map-sq-t" : "map-dot-t" });
        t2.textContent = label;
        g.appendChild(t2);
      }
      root.appendChild(g);
    });
    return outer;
  }

  function whoLabel(who) {
    return who === "dm" ? '<span class="map-who map-who-dm">DM only</span>'
         : who === "players" ? '<span class="map-who map-who-pl">Player handout</span>'
         : '<span class="map-who map-who-both">DM and players</span>';
  }

  function render(m) {
    var sec = el("section", { id: m.id, class: "map-entry" + (m.who === "dm" ? " dm-only" : "") });
    if (m.locations.length) sec.setAttribute("data-entity-local", m.locations.join(" "));
    sec.appendChild(el("h3", { id: "h-" + m.id, "data-toc-label": m.title }, m.title + " " + whoLabel(m.who)));

    var fig = el("figure", { class: "map-fig" });
    var view = el("button", { class: "map-view", type: "button", title: "Open full size" });
    view.appendChild(buildSvg(m));
    view.addEventListener("click", function () { openViewer(m); });
    fig.appendChild(view);
    fig.appendChild(el("figcaption", {}, 'Click to open full size: scroll or pinch to zoom, drag to pan. ' +
      '<a class="nolink" href="' + IMG + m.file + '" target="_blank" rel="noopener">Picture file</a>'));
    sec.appendChild(fig);

    sec.appendChild(el("p", { class: "map-desc" }, m.desc + ' <span class="cite">' + m.sources + "</span>"));

    if (m.key.length) {
      var rows = m.key.map(function (k) {
        var mark = k[0] ? "<td class=\"map-key-mark\">" + k[0] + "</td>" : "<td></td>";
        if (!k[1]) return '<tr class="dm-only">' + mark + "<td>" + k[2] + "</td></tr>";
        return "<tr>" + mark + "<td>" + k[1] +
          (k[2] ? ' <span class="dm-only map-key-dm">— ' + k[2] + "</span>" : "") + "</td></tr>";
      }).join("");
      sec.appendChild(el("table", { class: "map-key" },
        "<caption>Key</caption><thead><tr><th>Mark</th><th>What it is</th></tr></thead><tbody>" + rows + "</tbody>"));
    }

    if (m.locations.length) {
      var links = m.locations.map(function (id) {
        var e = entity(id);
        return e ? '<a href="' + e.href + '">' + e.name + "</a>" : "";
      }).filter(Boolean).join(" · ");
      sec.appendChild(el("p", { class: "map-locs" }, "<strong>Read about:</strong> " + links));
    }

    if (m.notes && m.notes.length) {
      sec.appendChild(el("div", { class: "callout callout-warn dm-only map-notes" },
        '<span class="callout-title">Picture vs. sources</span><ul>' +
        m.notes.map(function (n) { return "<li>" + n + "</li>"; }).join("") + "</ul>"));
    }
    return sec;
  }

  MAP_GROUPS.forEach(function (g) {
    var maps = MAPS.filter(function (m) { return m.group === g.id; });
    if (!maps.length) return;
    var sec = el("section", { id: g.id, class: "map-group" });
    var allDm = maps.every(function (m) { return m.who === "dm"; });
    if (allDm) sec.classList.add("dm-only");
    sec.appendChild(el("h2", { id: "h-" + g.id }, g.title));
    maps.forEach(function (m) { sec.appendChild(render(m)); });
    host.appendChild(sec);
  });

  /* ---------------------------------------------------------------- viewer */

  var box = null, stage = null, cur = null, vb = null, base = null;

  function ensureViewer() {
    if (box) return;
    box = el("div", { class: "map-viewer", role: "dialog", "aria-modal": "true", "aria-label": "Map, full size" });
    var bar = el("div", { class: "map-viewer-bar" });
    var title = el("span", { class: "map-viewer-title" });
    var reset = el("button", { class: "btn btn-sm", type: "button" }, "Fit");
    var close = el("button", { class: "btn btn-sm btn-primary", type: "button" }, "Close ✕");
    bar.appendChild(title); bar.appendChild(reset); bar.appendChild(close);
    stage = el("div", { class: "map-viewer-stage" });
    box.appendChild(bar); box.appendChild(stage);
    document.body.appendChild(box);

    close.addEventListener("click", closeViewer);
    reset.addEventListener("click", function () { vb = base.slice(); apply(); });
    box.addEventListener("keydown", function (ev) { if (ev.key === "Escape") closeViewer(); });

    stage.addEventListener("wheel", function (ev) {
      ev.preventDefault();
      zoomAt(ev.clientX, ev.clientY, ev.deltaY < 0 ? 0.8 : 1.25);
    }, { passive: false });

    var drag = null, pts = {};
    stage.addEventListener("pointerdown", function (ev) {
      pts[ev.pointerId] = [ev.clientX, ev.clientY];
      stage.setPointerCapture(ev.pointerId);
      drag = { x: ev.clientX, y: ev.clientY, pinch: pinchDist() };
    });
    stage.addEventListener("pointermove", function (ev) {
      if (!drag || !pts[ev.pointerId]) return;
      pts[ev.pointerId] = [ev.clientX, ev.clientY];
      var d = pinchDist();
      if (d && drag.pinch) {
        var c = pinchCentre();
        zoomAt(c[0], c[1], drag.pinch / d);
        drag.pinch = d;
        return;
      }
      var r = stage.getBoundingClientRect();
      var k = Math.max(vb[2] / r.width, vb[3] / r.height);
      vb[0] -= (ev.clientX - drag.x) * k;
      vb[1] -= (ev.clientY - drag.y) * k;
      drag.x = ev.clientX; drag.y = ev.clientY;
      apply();
    });
    function endPointer(ev) {
      delete pts[ev.pointerId];
      var left = Object.keys(pts);
      drag = left.length ? { x: pts[left[0]][0], y: pts[left[0]][1], pinch: pinchDist() } : null;
    }
    stage.addEventListener("pointerup", endPointer);
    stage.addEventListener("pointercancel", endPointer);
    function pinchDist() {
      var k = Object.keys(pts);
      if (k.length < 2) return 0;
      var a = pts[k[0]], b = pts[k[1]];
      return Math.hypot(a[0] - b[0], a[1] - b[1]);
    }
    function pinchCentre() {
      var k = Object.keys(pts), a = pts[k[0]], b = pts[k[1]];
      return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    }
  }

  /* Zoom about a screen point. The SVG letterboxes (xMidYMid meet), so map
     the point through the same scale the browser uses. */
  function zoomAt(cx, cy, f) {
    var r = stage.getBoundingClientRect();
    var k = Math.max(vb[2] / r.width, vb[3] / r.height);
    var ox = r.left + (r.width - vb[2] / k) / 2, oy = r.top + (r.height - vb[3] / k) / 2;
    var px = vb[0] + (cx - ox) * k, py = vb[1] + (cy - oy) * k;
    var nw = Math.min(Math.max(vb[2] * f, base[2] / 12), base[2] * 1.5);
    var nh = nw * vb[3] / vb[2];
    vb = [px - (px - vb[0]) * nw / vb[2], py - (py - vb[1]) * nh / vb[3], nw, nh];
    apply();
  }

  function apply() { if (cur) cur.setAttribute("viewBox", vb.join(" ")); }

  function openViewer(m) {
    ensureViewer();
    stage.innerHTML = "";
    cur = buildSvg(m);
    cur.setAttribute("preserveAspectRatio", "xMidYMid meet");
    stage.appendChild(cur);
    base = (m.view || [0, 0, m.w, m.h]).slice();
    vb = base.slice();
    apply();
    box.querySelector(".map-viewer-title").textContent = m.title;
    box.classList.add("open");
    document.documentElement.classList.add("map-viewer-lock");
    box.querySelector(".btn-primary").focus();
  }

  function closeViewer() {
    if (!box) return;
    box.classList.remove("open");
    document.documentElement.classList.remove("map-viewer-lock");
  }

  window.BM = window.BM || {};
  window.BM.maps = MAPS;
})();
