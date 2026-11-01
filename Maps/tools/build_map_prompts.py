"""Writes "Maps — Generation Prompts.md" in the repo root. Standard library only.

  python build_map_prompts.py

Every prompt is assembled from the shared blocks below, so the style paragraph and the
world-facts paragraph are word for word the same in every prompt that uses them.
Edit a block here once, rebuild, and every prompt changes together.
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "Maps — Generation Prompts.md")
DEST = r"The Broken March - DM Guide\assets\img\maps"

# ---------------------------------------------------------------- shared blocks

SURVEY_STYLE = (
    "STYLE: a hand-drawn map in fine dark-brown ink linework with restrained, muted watercolour "
    "washes on warm cream paper, like a careful surveyor's plan from an old archive. Precise, calm "
    "and easy to read. Palette: pale limestone grey-white, wet slate grey, weathered oak brown, dull "
    "iron grey, lichen green and one muted ochre; desaturated throughout. Soft, even, overcast light "
    "with only faint shadows. Late summer: dry ground, everything lightly dusted pale with limestone "
    "dust. Grounded and unromantic: a real working place, nothing heroic, nothing gleaming, no glow."
)

SKETCH_STYLE = (
    "STYLE: a crude hand-drawn map sketched in brown ink on worn cream paper by an unpractised hand, "
    "with a single pale tea-brown wash and nothing else. Wobbly lines, uneven pen pressure, things "
    "slightly out of proportion. Simple symbols only: wavy lines for water, small humps for hills, "
    "round lollipop trees, little boxes with pitched roofs for houses, short dashes for field walls. "
    "Charming, imprecise and amateur, as if a villager drew it for a stranger on a tavern table."
)

REGION_FACTS = (
    "WORLD FACTS (the valley): North is at the top. A river crosses the whole map from the west edge "
    "to the east edge, flowing from west to east-south-east; it is about sixty feet wide, milky "
    "grey-green with limestone silt. A small grey stone village of about thirty buildings sits on the "
    "river's NORTH bank, a little south of the map's centre, at the only bridge. From the bridge a road "
    "runs south-east across the map, through a narrow wooded defile about 8 miles from the village, and "
    "leaves by the south-east corner. A white stepped limestone quarry lies just north-west of the "
    "village, under half a mile away. North of the village the land climbs: a bald stony ridge with a "
    "scatter of small cairns 4 miles north; open, treeless, brown moor 8 miles north; a bowl of "
    "shattered grey limestone and thorn 12 miles north-north-west; and rough grey uplands with a cut "
    "stone cleft in a hillside 16 miles due north, at the top edge. West of the village along the "
    "north bank: open sheep grazing, and 7 miles upstream a narrow limestone gorge where the river "
    "runs between cliffs. East of the village along the north bank: flat arable fields, then reed beds "
    "and drowned meadows 6 miles east, then a wide shallow cart ford across the river 12 miles east. "
    "South of the river: managed coppice woodland directly across from the village, with a small "
    "charcoal-burners' clearing half a mile south-west of the bridge; a sunken lane running "
    "south-west from the coppice through the trees; old, dense woodland that thickens toward the "
    "south-west, 12 miles away; three small farmsteads south of the river 14 miles east, beyond the "
    "ford; and a long low grassy mound in birch scrub, a mile south of the road, 12 miles south-east "
    "of the village. The map covers about 30 miles east to west and 25 miles north to south."
)

VILLAGE_FACTS = (
    "WORLD FACTS (the village): North is at the top. A river about sixty feet wide, milky grey-green, "
    "runs from west to east; the village stands on its NORTH bank, on a shallow shelf of land between "
    "the water and rising ground. A bridge about ninety feet long and eleven feet wide crosses the "
    "river south of the village centre: a timber deck on three old stone piers. A small one-room stone "
    "toll-hut with a slate roof stands on the SOUTH bank at the bridge foot, and the road runs south "
    "from the bridge. One main street of packed pale stone chips runs east-west just north of the "
    "river; on it, from west to east: a store with a slate roof, a two-storey taproom with a thatched "
    "roof, an open-fronted smithy under a slate lean-to, and a fenced wagonyard with a thatched hay "
    "loft. At the west end, on the river: a thatched watermill with an undershot wheel, a small raised "
    "granary beside it, and a short timber jetty. North of the street: an open village green with a "
    "stone-rimmed well and a tall timber bell post; a long stone hall with a slate roof on the green's "
    "north side; a small stone shrine on its west side. North of the green: twenty-two small cottages "
    "with thatched roofs in four narrow lanes. Outside the village: to the north-west and uphill, "
    "about 500 yards away, a white stepped limestone quarry with a timber crane and a long thatched "
    "bunkhouse beside its haul road; to the north, on a low grassy knoll, a squat round stone tower "
    "thirty feet high with a small walled graveyard just below it on the village side; to the west, "
    "drystone sheepfolds and three timber byres; to the east, open fields of ripening grain. The far "
    "(south) bank is coppice woodland. The village is about 500 yards from end to end."
)

DUNGEON_FACTS = (
    "WORLD FACTS (the underground site): an ancient underground station cut by a vanished elven "
    "people and empty for two thousand years. It is all made of one material: pale, warm off-white "
    "stone that is completely jointless - no blocks, no mortar lines, no tool marks, no cracks, with "
    "softly rounded inside corners - smoother and cleaner than stone should be. Walls are drawn as thick "
    "solid dark-brown lines; the solid rock beyond the walls is a flat pale grey-brown wash with sparse "
    "fine stipple. Floors are the pale warm off-white. Doorways are plain openings; the few great doors "
    "are single thick stone slabs drawn as a heavy dark bar across the passage. Water is a flat dark "
    "blue-black wash with a few thin ripple lines. A faint pale-blue square grid, one square for ten "
    "feet, covers the floors only. Ordinary passages are ten feet wide. The site runs from south to "
    "north: its south entrance is a ramp down from the floor of a limestone quarry, and its main "
    "corridor runs dead straight northward for miles to a second entrance far to the north. On every "
    "floor plan north is at the top, and every plan uses exactly the same stone colours, wall style, "
    "water style and grid."
)

TOPDOWN = "VIEW: straight down from above, flat plan view, like a map. Not isometric, not perspective."
BATTLE_GRID = "GRID: a faint pale-blue square grid over the whole picture, one square for five feet."

NEGATIVE = (
    "AVOID: any text, words, letters, numbers, labels, titles, legend boxes, scale bars, cartouches, "
    "decorative borders, compass roses, watermarks or signatures; people, animals, creatures or "
    "monsters; glowing effects, magic auras, runes; fantasy castles, gothic architecture, cobblestone "
    "streets; bright saturated colours; photorealism, 3D render, isometric or perspective view; "
    "modern objects."
)
ONLY_LISTED = ("IMPORTANT: the world facts below describe the whole area so that everything is placed "
               "correctly. Do NOT draw all of it: draw ONLY what the THIS MAP part asks for, and leave the "
               "rest as empty paper.")
NEGATIVE_SKETCH = NEGATIVE.replace("compass roses, ", "")  # the village sketch asks for a compass arrow

# ---------------------------------------------------------------- the maps
# Each map: file, title, who, priority, aspect, size, style, facts, extra, body, leave_out, sources, key, notes

MAPS = [
    dict(
        file="map-greybank-players.png", title="Greybank — the player map", who="Players", prio=1,
        aspect="2:3 portrait", style=SKETCH_STYLE, facts=VILLAGE_FACTS, extra=[TOPDOWN, ONLY_LISTED],
        body=(
            "THIS MAP: the village as a villager would sketch it for a stranger, on one sheet, with "
            "plenty of empty paper around the edges. Show only: the river across the bottom third with "
            "the bridge; the main street with four simple house boxes along it; the open green with the "
            "well as a small circle; the long hall on the green's north side and the little shrine on "
            "its west side; a loose cluster of small cottages north of the green; the watermill at the "
            "west end of the street, drawn as a box with a wheel beside the river; the haul road climbing "
            "north-west to the quarry, the quarry drawn as three stepped curved lines; the small round "
            "tower on a hump of hill to the north; rough field boundaries to the east; the road leaving "
            "south from the bridge to the bottom edge. A small, simple compass arrow pointing straight up "
            "in the top-right corner, with no letter on it."
        ),
        leave_out=(
            "LEAVE OUT (the players have not learned these): any earth bank, hedge ring or gaps around "
            "the village; the jetty and any boat; any shallows, ford or stepping stones in the river; any "
            "path along the riverbank; any opening, door or hole in the quarry face; the toll-hut; the "
            "sheepfolds and byres; the graveyard; any grid, scale bar or distances."
        ),
        negative=NEGATIVE_SKETCH,
        sources="WP02 §6, WP15 §3.2 and §5, WP02 §4.2–§4.4 (layout)",
        key=[("1", "store (Dray's Store, G4)"), ("2", "taproom (the Sundered Cart, G3)"),
             ("3", "smithy (G5)"), ("4", "mill (G6)"), ("5", "shrine (G9)"),
             ("6", "Moot Hall (G11)"), ("7", "quarry (G14)"),
             ("edge", "\"to Daggerford — 2 days\" at the south edge")],
        notes="Key goes on in the villager's words only: store, taproom, smithy, mill, shrine, Moot Hall, "
              "quarry. Hand it out without comment and let the players draw on it (WP02 §6).",
    ),
    dict(
        file="map-region-players.png", title="The valley — the player map", who="Players", prio=1,
        aspect="4:3 landscape", style=SKETCH_STYLE, facts=REGION_FACTS, extra=[TOPDOWN, ONLY_LISTED],
        body=(
            "THIS MAP: a villager's sketch of only the part of the valley the village knows; most of the "
            "sheet stays empty. Show: the river across the sheet from left to right, with the bridge and "
            "the village (a few little houses) on its north bank, a little south of the centre; the road "
            "from the bridge running south-east toward the bottom-right corner, passing between two small "
            "steep hills about a quarter of the way along; the quarry just north-west of the village as "
            "three stepped lines; field strips east of the village; a few sheep pens west of it; a patch "
            "of trees just across the river south of the village; reed tufts and pools on the north bank "
            "to the east; the cart ford to the east, drawn as a dotted line across the river. North of the "
            "village, about a third of the way to the top edge, a band of small hill humps, with nothing "
            "drawn above it."
        ),
        leave_out=(
            "LEAVE BLANK, as plain empty paper: everything north of that band of hills, everything west of "
            "the sheep pens, and everything south and south-west beyond the near patch of trees. LEAVE OUT: "
            "any standing stones; the gorge; the sunken lane; the deep woods; the farmsteads beyond the "
            "ford; the mound; the stony ridge and its cairns; the moor; the limestone bowl; the cleft; any "
            "camp, smoke or path going north."
        ),
        negative=NEGATIVE,
        sources="WP05 §14 and §16.10, WP05 §3.3 (layout), DM ruling 1 Nov 2026 (WP05 §14 over the "
                "terrain-only schematic)",
        key=[("1", "Greybank"), ("2", "the bridge"), ("3", "the Pale (quarry)"), ("4", "the Home Fields"),
             ("5", "the Fold"), ("6", "the Coppice"), ("7", "Reedwater"), ("8", "Bythe Ford"),
             ("9", "the Cut"), ("edge", "\"the moor\" on the band of hills; \"to Daggerford — 2 days\" at "
                                       "the south-east corner")],
        notes="Never print travel times on it, never draw on it for the players (WP05 §16.10).",
    ),
    dict(
        file="map-g13-the-tower.png", title="The Tower and the Burial Ground (G13, G19)",
        who="Both (one picture; the DM key adds the secrets)", prio=1, aspect="1:1 square",
        style=SURVEY_STYLE, facts=VILLAGE_FACTS, extra=[TOPDOWN, BATTLE_GRID, ONLY_LISTED],
        body=(
            "THIS MAP: a close-up battle map of the low grassy knoll north of the village, about 120 feet "
            "by 120 feet. In the upper middle, the round tower as a cut-away ground plan: a perfect "
            "circle of wall about three feet thick and about twenty feet across inside, made of pale, "
            "warm off-white stone that is completely jointless and smooth, with one doorway facing south "
            "toward the village. Inside: a wooden ladder against the wall rising to a square hatch, and on "
            "the inner wall straight opposite the door, a small palm-sized shallow dip in the stone, drawn "
            "as a tiny oval. Below the tower to the south, downhill toward the village: a small graveyard "
            "about 50 feet by 40 feet with low grey headstones in uneven rows and a small roofed timber "
            "gate in its south wall. The graveyard's NORTH wall, the side nearest the tower, is a low wall "
            "of the same pale, smooth, jointless off-white stone as the tower; its other three walls are "
            "ordinary rough grey drystone. A trodden footpath comes up from the bottom edge, passes the "
            "graveyard gate, climbs to the tower door and continues north past the tower to the top edge. "
            "Tussocky grass, a few gorse bushes and small grey limestone outcrops on the slopes. The pale "
            "tower stone and the pale graveyard wall must look clearly different from the grey local "
            "stone."
        ),
        leave_out="LEAVE OUT: any roof drawn over the tower plan; any marks, symbols or light on the stones.",
        negative=NEGATIVE,
        sources="WP02 G13, G19, §4.6, §4.7 route 3; WP09 Scene 3; WP09 §2.6; design doc §33.10",
        key=[("1", "tower door (manned Dawn to Evening; Alys Penn on the rota)"),
             ("2", "ladder and hatch to the villager-built top"),
             ("3", "the palm-dip recess — DM: W1's anchor recess, no key fits it"),
             ("4", "graveyard north wall — DM: W3 (dead post, lit by key A in S3)"),
             ("5", "lych-gate"), ("6", "north footpath (route R3) to the moor edge")],
        notes="Replaces `map-tower-g13.png` from WP09 §8.2.",
    ),
    dict(
        file="map-g18-the-fold.png", title="The Fold and Byres (G18)",
        who="Both (one picture; the DM key adds the secrets)", prio=1, aspect="4:3 landscape",
        style=SURVEY_STYLE, facts=VILLAGE_FACTS, extra=[TOPDOWN, BATTLE_GRID, ONLY_LISTED],
        body=(
            "THIS MAP: a close-up battle map, about 150 feet by 110 feet, of the poor grazing ground west "
            "of the village. In the middle, three or four drystone sheepfolds: roughly oval pens with "
            "walls about four feet high, joined to each other, with one timber gate on their east side. "
            "Along the north side of the pens, three long timber byres with mossy board roofs and open "
            "doorways. By the gate, a tall timber post with an iron lantern hook. A muddy, trodden yard "
            "between the pens and the byres. On the far west side of the largest pen, a stretch of wall "
            "about ten feet long where the top stones have slumped and lie loose on the ground. A sheep "
            "track runs from the gate east to the right edge, toward the village; another track runs "
            "north to the top edge, toward the fields. Open tussocky grass all round, a few thorn bushes, "
            "no trees. Draw it in daylight, with the pens empty."
        ),
        leave_out="LEAVE OUT: sheep, dogs, people, footprints, light from the lantern.",
        negative=NEGATIVE,
        sources="WP02 G18, §4.5; WP09 Scene 1 (Deadline 1) and Scene 9B; WP15 §4.3",
        key=[("1", "gate and lantern post"), ("2", "the byres"),
             ("3", "the loose wall stones — DM: where the Red-Tusk scouts come over"),
             ("4", "track east to the Green (260 yd, about 26 rounds at a run)"),
             ("5", "track north across the Home Fields — DM: the goblin trail to Stonecrop Rise")],
        notes="",
    ),
    dict(
        file="map-marrowward-stage-2-dm.png", title="The Marrowward — Stage II, the Service Works (S5–S8)",
        who="DM only", prio=1, aspect="4:3 landscape", style=SURVEY_STYLE, facts=DUNGEON_FACTS,
        extra=[TOPDOWN],
        body=(
            "THIS MAP: a floor plan of one level of the site. ENTRY: a ten-foot passage enters at the "
            "middle of the BOTTOM edge and runs straight north for 100 feet (the lock corridor). Across "
            "its middle stands a great stone door slab, swung open flat against the east wall, with a "
            "boxy counterweight housing set into the wall beside it. On the WEST wall of this corridor, "
            "20 feet south of the slab, a narrow door opens into a tiny cell eight feet square holding a "
            "stone stool and a long upright lever slot in its far wall. At its north end the corridor opens "
            "into a row of four connected rooms running west to east across the middle of the map, each "
            "about 30 feet by 30 feet, joined by wide doorways. From west to east: a stone-shop with long "
            "stone benches and clamps; a metal-shop with racks and a heavy stone anvil block; a store with "
            "empty shelves along its walls; and, at the east end, a records room full of rows of upright "
            "stone racks holding thin tablets like books in a library, with a few gaps. In the records "
            "room's NORTH wall, a stone door slab with a rectangular lock socket stands open onto a short "
            "passage that leaves the map at the TOP edge, near the top-right corner. From the stone-shop's "
            "north wall a passage leads north to the head of a broad stair, twenty feet wide, going down "
            "northward into still black water that covers its lower half. Along the stair's WEST wall, "
            "above the water, a narrow dry ledge three feet wide runs about 40 feet to an arch in the west "
            "wall. Through that arch: a large hall about 60 feet by 40 feet with a fast black channel of "
            "water running through its middle from north to south, edged and crossed by narrow wet "
            "walkways with no rails, and several stone sluice gates set across the channel. In this "
            "hall's south-west corner, a round shaft rises straight up, drawn as a dark circle with a line "
            "of footholds. At the very bottom of the stair, a fully flooded passage runs east and then "
            "north, under water all the way, and leaves the map at the TOP edge just east of the centre. "
            "A few old bones lie on the dry upper steps of the stair; none in the water."
        ),
        leave_out="LEAVE OUT: creatures, tentacles, bodies drawn in detail, glowing keys, furniture beyond "
                  "what is listed.",
        negative=NEGATIVE,
        sources="WP06 §8 (S5–S8), §4.5; Canon Amendments §3; WP09 §2.5, Scene 10.1–10.5; schematic "
                "`Maps/marrowward-map-dm.png`",
        key=[("5", "S5 Lock Gallery — the leaf is held open by key A in S3"),
             ("5a", "the Lock-keeper's Cell — the lever drops a bar that wedges the leaf shut; forcing the "
                    "door breaks it for good"),
             ("6a–6d", "S6 Workshops: stone-shop · metal-shop · store · records room (archive about a fifth "
                       "gone; the Chain sequence's middle third is with Serina Malk)"),
             ("7", "S7 Sluice Hall — System 3; nobody hears anything in here"),
             ("8", "S8 Drowned Stair — the Listener; eleven bodies, all on dry stone"),
             ("B", "bottom edge: back to S2 (Stage I)"),
             ("C", "the overflow shaft: up to the quarry's lowest bench"),
             ("D", "top edge, near the corner: the S9 door (key B in its lock, leaf open)"),
             ("E", "top edge, centre: the flooded passage to S9 (swim)")],
        notes="Replaces `map-illefarn-stage-2.png` from WP09 §8.2. DM overlay also draws the Sentinel's "
              "120 ft sense range reaching into the records room (WP09 §2.5).",
    ),
    dict(
        file="map-marrowward-stage-3-dm.png", title="The Marrowward — Stage III, the Transit Ring (S9–S12)",
        who="DM only", prio=1, aspect="2:3 portrait", style=SURVEY_STYLE, facts=DUNGEON_FACTS,
        extra=[TOPDOWN],
        body=(
            "THIS MAP: a floor plan of one level of the site. ENTRIES at the BOTTOM edge: near the "
            "bottom-right corner, a short passage comes in from below through a stone door slab with a "
            "rectangular lock socket, standing open; a little left of the centre, a fully flooded passage "
            "comes in from below, its water dark. Both lead into a round chamber about 40 feet across near "
            "the bottom of the map. Its whole floor is one great round stone disc cut with deep concentric "
            "and radial grooves, worn by something heavy turning on it. From the round chamber's NORTH side "
            "a single gallery runs dead straight north up the whole height of the map: twelve feet wide, "
            "perfectly straight, perfectly level and empty, with no pillars, alcoves or cover of any kind, "
            "and a worn groove along the centre of its floor. About a third of the way up, on the "
            "gallery's WEST side, an opening leads into a side gallery fifteen feet wide and 80 feet long "
            "running west; both its long walls are lined with rows of upright stone plates of slightly "
            "different heights. Opposite it, on the gallery's EAST side, a plain narrow opening leads into "
            "a short passage that leaves the map at the RIGHT edge. About two-thirds of the way up, two "
            "parallel wavy break lines cross the gallery to show that many miles of the same gallery are "
            "left out. Above the break, the gallery ends at the top of the map in a second round chamber, "
            "about 40 feet across, with the same grooved floor disc; from its north side a ramp climbs "
            "north to a doorway at the TOP edge that is choked solid with piled rocks and timber."
        ),
        leave_out="LEAVE OUT: creatures, statues, footprints, light sources, any second corridor parallel to "
                  "the gallery.",
        negative=NEGATIVE,
        sources="WP06 §9 (S9–S12), §4.1, §4.5; WP09 §2.5 and Scene 10.4–10.6; Canon Amendments §3; "
                "schematic `Maps/marrowward-map-dm.png`",
        key=[("9", "S9 Transit Ring, South — the turning floor; System 4; key B in the lock, leaf open"),
             ("10", "S10 Long Gallery — the Sentinel's patrol; groove an inch deep at the midpoint"),
             ("11", "S11 Deterrent Chain — System 5; a resonance key on the last plate"),
             ("12", "S12 Transit Ring, North / Kettlerock Gate — piled shut from outside; opens outward "
                    "from inside without tools"),
             ("D", "bottom right: the door from the S6 records room"),
             ("E", "bottom centre: the flooded passage from S8"),
             ("F", "right edge: to S13, the Approach of Names (Stage IV)"),
             ("G", "top edge: out to the Old Delving (Z17), 4 watches from Greybank")],
        notes="Replaces `map-illefarn-stage-3.png` from WP09 §8.2. DM overlay draws the Sentinel's circuit "
              "(red dots down S10, turning on the S9 floor once per watch at the half-watch mark) and the "
              "120 ft range from S9.",
    ),
    dict(
        file="map-region-dm.png", title="The Broken March — the DM region map", who="DM", prio=2,
        aspect="4:3 landscape", style=SURVEY_STYLE, facts=REGION_FACTS, extra=[TOPDOWN],
        body=(
            "THIS MAP: the whole region as an illustrated survey map, terrain drawn as small neat "
            "symbols: hills as soft hatched humps, woods as clusters of small round trees, moor as sparse "
            "tufts, marsh as reed tufts and pools, farmland as faint field strips. Draw the river with the "
            "bridge at the village; the cart ford 12 miles east as a broad pale shallow band across the "
            "river; the gorge 7 miles west as two short facing cliff lines pinching the river. Draw the "
            "road south-east as a thin double line through the defile and off the south-east corner. "
            "Draw the village as a small cluster of tiny grey roofs on the north bank at the bridge, and "
            "the quarry as a tiny white stepped bite north-west of it. Draw a faint footpath north from "
            "the quarry over the ridge and across the moor, then on to the cleft at the top edge; a thin "
            "thread of smoke rising from the limestone bowl; the sunken lane as a faint line from the "
            "coppice south-west into the deep woods; the three farmsteads as three tiny roofs; the long "
            "low mound as a small grassy oval among birches. The deep woods run off the bottom-left edge. "
            "Leave clean, lightly washed paper in the open areas so notes can be added later."
        ),
        leave_out="LEAVE OUT: standing stones of any kind; any line joining places; tents or camp details; "
                  "any town drawn at the map edge.",
        negative=NEGATIVE,
        sources="WP05 §3.3, §4.2, §5.1, §13; Canon Amendments §1 and §5; schematic "
                "`Maps/regional-map-dm.png` (positions)",
        key=[("1–18", "zones Z1–Z18 (Z18 Coldwell Vale as an arrow off the south-west edge)"),
             ("W1–W6", "the six waystones and the ward line: living spans solid ochre, the key-lit W3 span "
                       "dash-dot, dead spans red dots (Canon Amendments §1–§2)"),
             ("edge", "Daggerford: arrow off the south-east corner, \"~40 miles · 2 days\""),
             ("scale", "four miles")],
        notes="The ward line, waystones and zone numbers go on as an overlay, copied from the existing "
              "schematic, so they stay exact.",
    ),
    dict(
        file="map-g1-marrow-bridge.png", title="Marrow Bridge and the Toll-shed (G1, G2)",
        who="Both (one picture; the DM key adds the secrets)", prio=2, aspect="2:3 portrait",
        style=SURVEY_STYLE, facts=VILLAGE_FACTS, extra=[TOPDOWN, BATTLE_GRID, ONLY_LISTED],
        body=(
            "THIS MAP: a close-up battle map, about 90 feet wide and 140 feet tall, of the river crossing. "
            "The river runs across the middle from the left edge (west, upstream) to the right edge (east, "
            "downstream), about 60 feet wide, opaque milky grey-green, with faint current lines flowing to "
            "the right. The bridge crosses it from bottom to top: eleven feet wide, about ninety feet long, "
            "a deck of worn timber planks on three squat old stone piers. The deck is narrow: just over two grid squares wide. A timber rail runs along its "
            "LEFT (upstream) side only; the RIGHT (downstream) edge has no rail, just two or three broken "
            "stubs of old posts. On the bottom (south) bank, the road comes up from the bottom edge to the "
            "bridge; right beside the road at the bridge foot, on its right-hand side, stands a small "
            "one-room stone hut with a slate roof, one door facing the road and one shuttered window "
            "facing the bridge. On the top (north) bank, the road continues to the top edge toward the "
            "village street. Grassy banks, a few stones and reed clumps at the water's edge."
        ),
        leave_out="LEAVE OUT: carts, boats, people, the village buildings.",
        negative=NEGATIVE,
        sources="WP02 G1, G2, §4.6 chokepoint 1, §4.7 route 1; WP09 Scene 8",
        key=[("1", "the deck — 11 ft, two abreast; shoved off the unrailed downstream edge = 20 ft fall into "
                   "9 ft of opaque water"),
             ("2", "the toll-shed — Denk Ottersby, the crossing book"),
             ("3", "stone piers — only blasting powder drops them"),
             ("4", "south road, to Daggerford (2 days)"), ("5", "north end: the Street, 220 yd to the Green")],
        notes="",
    ),
    dict(
        file="map-g20-charcoal-camp.png", title="The Charcoal Camp (G20), in the Coppice (Z5)",
        who="Both (one picture; the DM key adds the secrets)", prio=2, aspect="1:1 square",
        style=SURVEY_STYLE, facts=VILLAGE_FACTS, extra=[TOPDOWN, BATTLE_GRID, ONLY_LISTED],
        body=(
            "THIS MAP: a close-up battle map, about 120 feet by 120 feet, of a small working clearing in "
            "managed coppice woodland on the far (south) side of the river, half a mile south-west of the "
            "bridge. Around the clearing: hazel and ash cut back to low stumps with clusters of thin "
            "regrowth poles, and a few taller trees between them. In the clearing: two low round "
            "earth-covered charcoal mounds about fifteen feet across, one with thin wisps of smoke from "
            "small vent holes; a low open-fronted shelter roofed with turf; a stack yard of cut poles in "
            "neat stacks; a chopping block; a water barrel. At the clearing's south edge, one larger alder "
            "tree beside a small stream that runs along the bottom edge. A cart track leaves the clearing "
            "to the TOP-RIGHT corner, toward the bridge; a faint narrow footpath leaves to the LEFT edge "
            "into thicker trees."
        ),
        leave_out="LEAVE OUT: any carved mark or symbol on any tree; people; fire flames.",
        negative=NEGATIVE,
        sources="WP02 G20, WP05 Z5, WP09 Scene 9A; DM ruling 1 Nov 2026 (south-west of the bridge)",
        key=[("1", "the two burning-clamps (open fire, always)"), ("2", "Ib Sallow's turf shelter"),
             ("3", "stack yard (Timber Loads)"),
             ("4", "the alder — DM: the Hollow's stage-2 mark is cut here"),
             ("5", "track north-east to the bridge (½ mile, ¼ watch)"),
             ("6", "path west — toward the Hollowway (Z9)")],
        notes="",
    ),
    dict(
        file="map-z7-stonecrop-rise.png", title="Stonecrop Rise (Z7)",
        who="Both (one picture; the DM key adds the secrets)", prio=2, aspect="4:3 landscape",
        style=SURVEY_STYLE, facts=REGION_FACTS, extra=[TOPDOWN, ONLY_LISTED],
        body=(
            "THIS MAP: an area map, about 600 yards across, of the top of the bald stony ridge 4 miles "
            "north of the village: thin soil, grey limestone breaking through in flat pavements and low "
            "ledges, heather, gorse and wind-cropped thorn bushes; no trees, no water. The crest runs "
            "from left to right across the upper middle of the map. Scattered along the crest, eight or "
            "nine small, low, rough cairns of grey stones. Among them, near the centre of the crest, one "
            "single upright standing stone of pale, warm off-white stone, smooth and completely jointless, "
            "clearly different from every grey cairn. About 50 yards below the crest on its north side, a "
            "low rock overhang with a dry scrape beneath it and several small old fire scars. A faint trail "
            "of trodden grass climbs from the bottom edge (south, toward the village), passes over the "
            "crest beside the standing stone, and continues north across rough ground to the top edge."
        ),
        leave_out="LEAVE OUT: any marks or light on the standing stone; the village itself; tents or people.",
        negative=NEGATIVE,
        sources="WP05 Z7, §10; WP09 Scene 9B; WP09 §2.6",
        key=[("1", "the standing stone — DM: W4, dead (cold to the touch)"),
             ("2", "the cairns — real, old graves"),
             ("3", "the scouts' cache: hen bones, the rope, the fence panel, old fires"),
             ("4", "trail south to the fold (about 1 watch)"),
             ("5", "trail north toward Kettlerock (smoke visible in clear weather)")],
        notes="The cache is \"50 yards below the crest\" (WP09 9B); the sources don't say which side. North "
              "side is my choice: out of sight of the village.",
    ),
    dict(
        file="map-marrowward-stage-1-dm.png", title="The Marrowward — Stage I, the Greybank Gate (S1–S4)",
        who="DM only", prio=2, aspect="1:1 square", style=SURVEY_STYLE, facts=DUNGEON_FACTS,
        extra=[TOPDOWN],
        body=(
            "THIS MAP: a floor plan of one level of the site. ENTRY at the middle of the BOTTOM edge: an "
            "opening under a heavy lintel, with a few loose planks lying across it, and from it a wide "
            "straight ramp, twenty feet wide (two carts side by side) and forty feet long, going down "
            "northward. The ramp opens into a rectangular hall, 40 feet wide from west to east and 80 feet "
            "long from south to north. Long stone benches run along both long walls, with a row of small "
            "peg holes above each bench. Off the hall's WEST side, through a short passage: a perfectly "
            "round room about 25 feet across, completely empty except for a small shallow recess in its "
            "wall. Off the hall's EAST side, through a doorway with a warped wooden shutter standing half "
            "open: a smaller round room about 20 feet across with a round stone table in its centre "
            "holding a shallow round basin of dark liquid. In the middle of the hall's NORTH wall, a "
            "ten-foot passage leaves the map at the TOP edge."
        ),
        leave_out="LEAVE OUT: rubble, bones, furniture beyond the benches and the table, any light in the "
                  "basin.",
        negative=NEGATIVE,
        sources="WP06 §7 (S1–S4), §4.5; WP15 §3.3; Canon Amendments §2–§3; schematic "
                "`Maps/marrowward-map-dm.png`",
        key=[("1", "S1 Aperture and Ramp — Durrow's boards, two loose; his bootprints turn at 10 ft"),
             ("2", "S2 Muster Floor — the roster on the north wall; the warden's kit is empty"),
             ("3", "S3 Anchor Room — key A in the recess; System 1 active"),
             ("4", "S4 Watch Chamber — the Watch-Glass, 4 of 6 lit; opened by Knock"),
             ("A", "bottom edge: the aperture, up to the quarry floor (Z2)"),
             ("B", "top edge: to S5, the Lock Gallery (Stage II)")],
        notes="",
    ),
    dict(
        file="map-marrowward-section-dm.png", title="The Marrowward — the whole site, side view",
        who="DM only", prio=3, aspect="16:9 landscape", style=SURVEY_STYLE, facts=DUNGEON_FACTS,
        extra=["VIEW: a side view (cross-section), as if the hills were sliced open from south to north. "
               "On this one sheet, SOUTH is on the LEFT and NORTH is on the RIGHT, and the ground surface "
               "runs across the top. Flat, diagrammatic, like an engineer's section drawing; no "
               "perspective."],
        body=(
            "THIS MAP: the whole site in one side view. A thin pale sky band at the top. The ground "
            "surface runs across the upper third: at the far LEFT, a white stepped limestone quarry cut "
            "into a hillside, its lowest step a flat floor with a small square opening in its back wall; "
            "then, moving right, the land rises over a bald stony ridge with a few tiny cairns; then a long, "
            "flat, empty moor; then broken uplands rising to a hill at the far RIGHT with a cut cleft and a "
            "small doorway at its foot. Below ground, in pale jointless off-white stone, drawn small and "
            "simple: from the quarry opening a ramp goes down to a small cluster of three rooms (the first "
            "level). Below it and a little to the right, a second cluster of four rooms, with a narrow "
            "vertical shaft rising from it straight up to the quarry's lowest step, and a stair going down "
            "into dark water. Below that, a round chamber, from which one long, perfectly straight, "
            "level tunnel runs to the right across almost the whole width of the picture, under the ridge "
            "and the moor, cut by two pairs of short wavy break lines (miles left out). It ends at the far "
            "right in a second round chamber with a ramp rising to the doorway in the hill, which is "
            "choked with piled rubble. About halfway along the long tunnel, under the moor, a short passage "
            "drops to a deeper fourth level: a long chamber with a round room beside it. From the right end "
            "of that long chamber, a ragged chimney of collapsed rubble climbs up through the rock and "
            "breaks out as a dark hole in the open moor above. The rock is drawn in pale grey-brown layers "
            "with fine stipple. CONNECTIONS MUST BE EXACTLY THESE: the ramp from the quarry opening reaches "
            "ONLY the first-level rooms; there is NO tunnel from the quarry straight to the round chamber; the "
            "first level joins the second level by one short passage; the rubble chimney reaches ONLY the "
            "deepest level and never touches the long tunnel."
        ),
        leave_out="LEAVE OUT: creatures, people, buildings on the surface, trees, any second tunnel.",
        negative=NEGATIVE,
        sources="WP06 §4.1–§4.5, §16 (the section drawing); WP05 §3.3 (surface order); schematic "
                "`Maps/marrowward-map-dm.png`",
        key=[("I–IV", "the four stages, bracketed with their levels (3 · 4 · 4–5 · 5–6)"),
             ("1–16", "S1–S16 in their clusters"),
             ("A–H", "the same exit letters as the stage maps (A aperture · B S2/S5 · C overflow shaft · "
                     "D S6/S9 door · E flooded passage · F S10/S13 · G Kettlerock Gate · H S16 to the moor)"),
             ("surface", "the Pale (Z2) · Stonecrop Rise (Z7) · Hagsfoot Moor (Z11) · the Old Delving (Z17)")],
        notes="This is the picture version of `Maps/marrowward-map-dm.png`. The overlay adds the Sentinel's "
              "circuit (S10 and S14; at Instability 3+ up to Stonecrop Rise).",
    ),
    dict(
        file="map-marrowward-stage-4-dm.png", title="The Marrowward — Stage IV, the Ward Heart (S13–S16)",
        who="DM only", prio=3, aspect="4:3 landscape", style=SURVEY_STYLE, facts=DUNGEON_FACTS,
        extra=[TOPDOWN],
        body=(
            "THIS MAP: a floor plan of one level of the site. ENTRY at the LEFT edge, a little above the "
            "middle: a corridor ten feet wide and about 60 feet long runs east; both its walls are covered "
            "from end to end in fine rows of tiny carved marks, drawn as dense fine hatching. It ends at a "
            "plain closed stone door with a small round recess in the wall beside it. Beyond the door: a "
            "long chamber running from south to north, about 20 feet wide and 120 feet long, with a "
            "shallow alcove at each end and a worn groove down the centre of its floor from end to end. On "
            "this chamber's EAST side, a heavy closed stone door slab leads to a round room about 40 feet "
            "across: six low stone seats evenly spaced in a ring around a low round well in its centre. At "
            "the long chamber's NORTH end the walls are broken open: a wide spread of collapsed stone and a "
            "long slope of rubble rising northward to the TOP edge of the map, where a ragged opening shows "
            "pale grey daylight. A few old bones and a small rotten cloth bundle lie on the rubble."
        ),
        leave_out="LEAVE OUT: creatures, light on the seats, glowing anything.",
        negative=NEGATIVE,
        sources="WP06 §10 (S13–S16), §4.5, §5.3; Canon Amendments §1–§2; WP09 §2.6",
        key=[("13", "S13 Approach of Names — accepts a name, not a key"),
             ("14", "S14 Sentinel's Walk — its circuit begins and ends here; System 6"),
             ("15", "S15 Ward Heart — six seats: 4 lit, 2 dark (System 7)"),
             ("16", "S16 Broken Quarter — the three dead spans; a goblin's 40-year-old bundle"),
             ("F", "left edge: from S10, the Long Gallery (Stage III)"),
             ("H", "top edge: scramble up and out onto Hagsfoot Moor (Z11)")],
        notes="",
    ),
    dict(
        file="map-z16-kettlerock.png", title="Kettlerock (Z16) — the Red-Tusk camp",
        who="Both (one picture; the DM key adds the secrets)", prio=3, aspect="4:3 landscape",
        style=SURVEY_STYLE, facts=REGION_FACTS, extra=[TOPDOWN, ONLY_LISTED],
        body=(
            "THIS MAP: an area map, about 400 yards across, of the bowl of shattered grey limestone 12 "
            "miles north-north-west of the village. A wide hollow ringed by broken limestone ridges and "
            "thorn scrub. In its floor: a spring feeding a small pool and a trickle of a stream. Around the "
            "spring, a crowded camp of about thirty small crude shelters - hide lean-tos, brush huts and "
            "low turf-walled pits - packed close together, with cooking fire rings, drying racks and two "
            "rough brush pens. On the highest point of the rim, a lookout spot of stacked stones. A narrow "
            "cleft in the SOUTH-EAST rim lets a trail in from the bottom edge; a second trail leaves "
            "through the NORTH-EAST rim to the top edge."
        ),
        leave_out="LEAVE OUT: goblins, people, weapons, banners.",
        negative=NEGATIVE,
        sources="WP05 Z16, §4.2; WP04 §6.1 (via WP05); schematic `Maps/regional-map-dm.png`",
        key=[("1", "the spring that does not fail"), ("2", "the camp — 61 Red-Tusk: 22 fighters"),
             ("3", "the lookout"), ("4", "trail south-east: Hagsfoot Moor, then Greybank (3 watches)"),
             ("5", "trail north-east: the Old Delving (1 watch)")],
        notes="",
    ),
    dict(
        file="map-z17-the-old-delving.png", title="The Old Delving (Z17) — the Kettlerock Gate from outside",
        who="Both (one picture; the DM key adds the secrets)", prio=3, aspect="4:3 landscape",
        style=SURVEY_STYLE, facts=REGION_FACTS, extra=[TOPDOWN, ONLY_LISTED],
        body=(
            "THIS MAP: an area map of the cut stone cleft 16 miles north of the village: a steep-sided cut "
            "about 300 yards long running into a grey hillside from the south. Old spoil heaps of grey "
            "rubble along both sides, centuries old and grassed over. At the head of the cleft (top of the "
            "map), a cut ramp goes down into the hillside toward a doorway framed by a lintel of pale, "
            "smooth, jointless off-white stone; the doorway is completely blocked from outside by a big "
            "pile of rocks and timber. On the cleft floor: the remains of a camp left in a hurry - "
            "collapsed brush shelters, a cold fire ring, a dropped pot, scattered bundles. A trail enters "
            "from the bottom edge, toward the bottom-left corner."
        ),
        leave_out="LEAVE OUT: anything inside the doorway; goblins, people.",
        negative=NEGATIVE,
        sources="WP05 Z17; WP06 §4.1, S12; WP04 §15 (via WP06)",
        key=[("1", "the Kettlerock Gate — piled shut from outside by the Red-Tusk; S12 beyond"),
             ("2", "the abandoned camp"), ("3", "old spoil"),
             ("4", "trail south-west to Kettlerock (1 watch)")],
        notes="",
    ),
    dict(
        file="map-g3-the-sundered-cart.png", title="The Sundered Cart (G3) — floor plans",
        who="Both (one picture; the DM key adds the secrets)", prio=3, aspect="3:2 landscape",
        style=SURVEY_STYLE, facts=VILLAGE_FACTS, extra=[TOPDOWN, BATTLE_GRID, ONLY_LISTED],
        body=(
            "THIS MAP: two floor plans side by side on one sheet, both seen from straight above as "
            "cut-away plans, same size and same orientation: on the LEFT the ground floor, on the RIGHT "
            "the loft above it. Ground floor: a building about 45 feet by 35 feet with thick rough grey "
            "stone walls. The common room, about 30 feet by 25 feet, fills most of it: a round open hearth "
            "in the centre with an iron pot-chain over it, rough plank tables, benches and stools around "
            "it, and a plank bar counter with shelves of jugs along the north wall. A small kitchen at the "
            "east end with a stone oven, a back door, and a square trapdoor in its floor. The front door "
            "is in the south wall, facing the street; two small windows. A ladder up to the loft in the "
            "north-west corner. Outside the west wall, a small timber lean-to stable with two stalls. "
            "Loft: a timber plank floor under the roof slope, four straw sleeping pallets, a few chests, "
            "the ladder hatch, and one window in the west gable."
        ),
        leave_out="LEAVE OUT: people, food, roof thatch drawn over the plans.",
        negative=NEGATIVE,
        sources="WP02 G3, §14.11; WP09 Scenes 1 and 7",
        key=[("1", "front door, onto the Street"), ("2", "the hearth"), ("3", "the bar (Rosal Tunn)"),
             ("4", "kitchen and back door"), ("5", "cellar trapdoor (about 40 gp of drink)"),
             ("6", "ladder to the loft"), ("7", "four pallets, 5 cp a night"), ("8", "the gable window"),
             ("9", "stable lean-to (two animals)")],
        notes="Thatch roof: the highest fire risk on the Street (WP02 G3).",
    ),
    dict(
        file="map-g6-millside-dm.png", title="Millside (G6–G8) and the shoal",
        who="DM (the shoal and the skiff are things players must learn)", prio=3, aspect="4:3 landscape",
        style=SURVEY_STYLE, facts=VILLAGE_FACTS, extra=[TOPDOWN, BATTLE_GRID, ONLY_LISTED],
        body=(
            "THIS MAP: a close-up battle map, about 240 feet by 180 feet, of the west end of the village "
            "on the river's north bank. The river fills the bottom third, flowing from left to right. On "
            "the bank: a thatched timber watermill on a stone base, with a big undershot wheel in a "
            "stone-lined mill race that leaves the river upstream (left) and rejoins it just below the "
            "mill; a wooden sluice gate at the head of the race. To the right of the mill, a small round "
            "stone granary raised on mushroom-shaped stone stilts. To the right of that, a thirty-foot "
            "timber jetty with a fish-drying rack and one flat-bottomed rowing boat tied to it. Just "
            "downstream (right) of where the race rejoins the river, the river is visibly shallower all "
            "the way across: paler water with a line of submerged stones and ripples, about forty feet "
            "wide. A raised causeway of packed stone about eight feet wide, with water on both sides, runs "
            "along the north bank from the right edge to the mill door; it never crosses the river. Apart from "
            "the shallows, nothing crosses the river on this map. At the top edge, the west end of the main street."
        ),
        leave_out="LEAVE OUT: people, sacks, carts.",
        negative=NEGATIVE,
        sources="WP02 G6, G7, G8, §4.1, §4.6 chokepoint 4, §4.7 routes 6–7; WP05 §5.1",
        key=[("1", "the mill (Corvin Ash) — 10 ft drop to the wheel race"),
             ("2", "the sluice — raises the shoal ~18 in, closing it"),
             ("3", "the granary — shelter and siege target"),
             ("4", "the wharf and the skiff (seats four)"),
             ("5", "the shoal — late summer only, waist-deep, 40 ft of exposure"),
             ("6", "the mill causeway — chokepoint 4, 8 ft")],
        notes="Layout follows the painted village map (mill and wharf together at the west end).",
    ),
    dict(
        file="map-z14-wends-barrow.png", title="Wend's Barrow (Z14)",
        who="Both (one picture; the DM key adds the secrets)", prio=3, aspect="1:1 square",
        style=SURVEY_STYLE, facts=REGION_FACTS, extra=[TOPDOWN, ONLY_LISTED],
        body=(
            "THIS MAP: an area map, about 200 by 200 yards, of birch scrub country 12 miles south-east of "
            "the village. In the centre, a long low grassy mound about 60 feet long and 20 feet wide, "
            "running east to west, smooth-sided, its turf unbroken. Thin birches, bracken and brambles all "
            "around; a few birches growing on the mound's ends. A faint path comes down from the top edge "
            "(the road is a mile to the north) through the scrub and stops a little short of the mound."
        ),
        leave_out="LEAVE OUT: any stone showing on or in the mound; digging; graves; people.",
        negative=NEGATIVE,
        sources="WP05 Z14, §10; Canon Amendments §1",
        key=[("1", "the mound — DM: W5 is inside, upright, dead; spoil heaped against it"),
             ("2", "path north to the Daggerford road (1 mile)")],
        notes="",
    ),
    dict(
        file="map-z15-the-hollowmarch.png", title="The Hollowmarch (Z15)",
        who="Both (one picture; the DM key adds the secrets)", prio=3, aspect="1:1 square",
        style=SURVEY_STYLE, facts=REGION_FACTS, extra=[TOPDOWN, ONLY_LISTED],
        body=(
            "THIS MAP: an area map, about 300 by 300 yards, of the old dense woodland 12 miles south-west "
            "of the village: big oaks, ash and holly, mossy ground, ferns. Several clearings that are too "
            "regular - almost perfectly round - linked by narrow paths that run straight and purposeful. "
            "In the largest clearing, near the centre, one upright standing stone of pale, smooth, "
            "jointless warm off-white stone; the ground around its base is kept clear of moss and leaves, "
            "inside a narrow swept ring. A faint path enters from the right (east) edge; another leaves "
            "by the bottom-left corner."
        ),
        leave_out="LEAVE OUT: elves, people, tents, houses, glowing or magical effects.",
        negative=NEGATIVE,
        sources="WP05 Z15, §10; WP09 §2.6; Canon Amendments §1",
        key=[("1", "the standing stone — DM: W6, living, tended by the wardens"),
             ("2", "the too-regular clearings"),
             ("3", "path east, from the Hollowway (2 watches)"),
             ("4", "path south-west toward Coldwell Vale (2 watches)")],
        notes="",
    ),
    dict(
        file="map-z11-hagsfoot-moor-dm.png", title="Hagsfoot Moor (Z11) — where S16 breaks the surface",
        who="DM (the players don't know the hole is there)", prio=3, aspect="1:1 square",
        style=SURVEY_STYLE, facts=REGION_FACTS, extra=[TOPDOWN, ONLY_LISTED],
        body=(
            "THIS MAP: an area map, about 400 by 400 yards, of the open moor 8 miles north of the village: "
            "rough heather, dark eroded peat banks, tussock grass, scattered grey boulders; no trees, no "
            "water. A faint narrow trail crosses the map from the bottom edge to the top edge, roughly "
            "south to north. West of the trail, in a shallow hollow, a ragged hole about 30 feet across: "
            "broken blocks of pale off-white stone and rubble around its lip, the ground slumped into it, "
            "darkness inside, and a rubble slope going down. A few old bones lie near the lip."
        ),
        leave_out="LEAVE OUT: creatures, goblins, people, light from the hole.",
        negative=NEGATIVE,
        sources="WP05 Z11; WP06 §4.5, S16; schematic `Maps/regional-map-dm.png`",
        key=[("1", "the hole — S16, the Broken Quarter: the way things get in, open now"),
             ("2", "trail south to Stonecrop Rise (1 watch)"),
             ("3", "trail north to Kettlerock (1 watch)")],
        notes="",
    ),
]

# ---------------------------------------------------------------- output


def prompt_text(m):
    parts = [m["style"], *m["extra"], m["facts"], m["body"], m["leave_out"],
             f"FORMAT: aspect ratio {m['aspect'].split()[0]}, {m['aspect'].split()[1]}, at least 2048 pixels on "
             f"the long side. The whole map fills the frame edge to edge.",
             m["negative"]]
    return "\n\n".join(parts)


def main():
    by_prio = sorted(MAPS, key=lambda m: m["prio"])
    L = []
    L.append("# The Broken March — Map Generation Prompts\n")
    L.append("**Status:** ready to run, 1 Nov 2026. Built by `Maps/tools/build_map_prompts.py` — edit the "
             "script, not this file, so the shared blocks stay identical.  ")
    L.append("**Companion:** [[Maps — Audit]].\n")
    L.append("## Checklist\n")
    L.append("1. Copy one prompt box **whole** into the image model. Nothing else is needed: each prompt "
             "stands alone.")
    L.append("2. Save the result with **exactly** the filename given (`.png`; `.webp` also works).")
    L.append(f"3. Put it in `{DEST}\\`.")
    L.append("4. Tell me. I check it against the sources, add the key on top, and wire it into the guide.\n")
    L.append("## How the keys work\n")
    L.append("Image models write letters badly, so **every prompt asks for no text at all.** The key "
             "under each prompt is added afterwards as a layer on top of the picture, the same way as "
             "`map-greybank-dm-annotated.png`. That is also how secrets stay off player-safe pictures: the "
             "picture is the same, but only the DM view gets the DM lines of the key.\n")
    L.append("**Filenames:** `-dm` = DM only · `-players` = a player handout · no suffix = one picture "
             "safe to show both; the guide shows the DM key or the player key.\n")
    L.append("## All prompts\n")
    L.append("| # | File | Map | For | Priority | Aspect |")
    L.append("|---:|---|---|---|:---:|---|")
    for i, m in enumerate(by_prio, 1):
        L.append(f"| {i} | `{m['file']}` | {m['title']} | {m['who'].split(' (')[0]} | {m['prio']} | {m['aspect']} |")
    L.append("\nPriority: **1** = needed for Session 2 · **2** = soon · **3** = nice to have.\n")
    L.append("Not in this list: the **DM village map** is done — "
             "`assets/img/maps/map-greybank-dm-annotated.png` (made from the painted map, no new picture "
             "needed).\n")
    L.append("---\n")
    for i, m in enumerate(by_prio, 1):
        L.append(f"## {i}. {m['title']}\n")
        L.append("| | |\n|---|---|")
        L.append(f"| **Save as** | `{m['file']}` |")
        L.append(f"| **Aspect** | {m['aspect']} |")
        L.append(f"| **For** | {m['who']} |")
        L.append(f"| **Priority** | {m['prio']} |")
        L.append(f"| **Built from** | {m['sources']} |")
        L.append("")
        L.append("```text")
        L.append(prompt_text(m))
        L.append("```\n")
        L.append("**Key** (added on top by the guide, not by the image model):\n")
        L.append("| Mark | Meaning |\n|---|---|")
        for mark, meaning in m["key"]:
            L.append(f"| {mark} | {meaning} |")
        if m["notes"]:
            L.append(f"\n*Note:* {m['notes']}")
        L.append("\n---\n")
    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(L))
    print("wrote", OUT, "-", len(MAPS), "prompts")


if __name__ == "__main__":
    main()
