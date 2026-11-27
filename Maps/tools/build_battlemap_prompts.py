"""Writes "Maps — Battle Map Prompts.md" in the repo root. Standard library only.

  python build_battlemap_prompts.py

Second batch: the places that had no local map after the first 20. Every prompt has a
5 ft grid and no text. Style and world-facts blocks are shared with build_map_prompts.py.
"""
import os
from build_map_prompts import (ROOT, DEST, SURVEY_STYLE, VILLAGE_FACTS, DUNGEON_FACTS,
                               TOPDOWN, NEGATIVE)

OUT = os.path.join(ROOT, "Maps — Battle Map Prompts.md")

ONLY = ("IMPORTANT: the world facts are background so that directions match the other maps. Draw ONLY "
        "what the THIS MAP part asks for. This is a close-up battle map for tabletop play: the ground "
        "fills the whole picture, with no empty margin.")

COUNTRY = ("WORLD FACTS (the country): a small, poor northern river valley in late summer. A milky "
           "grey-green river about sixty feet wide runs from west to east. Pale limestone ground, "
           "drystone walls, coppice woods south of the river, rough grazing and bare moor to the north. "
           "North is at the top.")

DUNGEON = DUNGEON_FACTS.replace("A faint pale-blue square grid, one square for ten feet, covers the floors only.",
                                "A faint pale-blue square grid, one square for five feet, covers the floors only.")
assert DUNGEON != DUNGEON_FACTS

SIZES = {"4:3": (32, 24), "1:1": (24, 24), "3:2": (30, 20), "2:3": (20, 30), "small": (16, 16), "big": (40, 40), "wide": (40, 30)}
RATIO = {"small": "1:1", "big": "1:1", "wide": "4:3"}


def grid(size):
    w, h = SIZES[size]
    return (f"GRID: a thin, faint, perfectly regular pale-blue square grid, one square = 5 feet. The picture "
            f"is exactly {w} squares wide and {h} squares tall (an area {w * 5} feet by {h * 5} feet). All "
            f"squares are the same size, lines are straight and parallel to the picture edges, and every "
            f"object is drawn to this scale (a door is one square wide, a bed is one square by two). "
            f"No coordinates or numbers on the grid.")


MAPS = []


def m(prio, file, title, size, facts, body, leave, key, sources, who="Both"):
    MAPS.append(dict(prio=prio, file=file, title=title, size=size, facts=facts, body=body, leave=leave,
                     key=key, sources=sources, who=who))


# ---------------------------------------------------------------- priority 1: Session 3

m(1, "map-g11-moot-hall.png", "The Moot Hall (G11)", "3:2", VILLAGE_FACTS,
  "THIS MAP: the ground floor of a long stone-and-timber village hall with the roof removed, about 70 feet "
  "east to west by 40 feet, set in the middle of a margin of trodden turf. The long front wall faces SOUTH "
  "onto the village green. The western two thirds is one open hall: a flagstone floor, a long heavy table "
  "with benches down its length, a stone hearth with a low fire in the middle of the north wall, one deep "
  "wooden chair beside the hearth, and stacked spare benches against a wall. At the east end of the hall a "
  "writing desk with ledgers and an iron-bound chest on the floor behind it. The eastern third (private "
  "rooms) is walled off with one inner door: a small bedroom with two beds and a small storeroom. Exactly "
  "two outside doors: a double door in the middle of the south wall and a single door in the north wall of "
  "the private end. Exactly five small shuttered windows. Stone walls about two feet thick.",
  "LEAVE OUT: any roof; any upper floor; any banners or throne.",
  [("1", "main doors, onto the Green"), ("2", "long table: the moot sits here"),
   ("3", "hearth and Halvard's chair"), ("4", "Ondra's desk and ledgers"),
   ("5", "the moot chest (31 gp, 40 sp; DM: 9 gp short)"), ("6", "private rooms, back door")],
  "WP02 G11; WP10 §5.2; WP09 §5.1")

m(1, "map-g22-herbwifes-cottage.png", "The Herbwife's Cottage (G22)", "small", VILLAGE_FACTS,
  "THIS MAP: a small lonely cottage at the north edge of the village, with its roof removed, and its garden. "
  "The cottage is about 30 feet by 20 feet, cob and timber walls, door facing south. Inside: a main room "
  "with a hearth, a work table covered in bowls and bundled herbs, shelves of jars, a small copper still, "
  "and one narrow sick-bed cot with a blanket near a window; a small back room with the herbwife's own bed. "
  "Under the eaves outside, wooden drying racks hung with plants. Beside the cottage, a walled physic "
  "garden about 40 feet by 30 feet with a low drystone wall, one small wooden gate and neat narrow beds of "
  "different herbs. Around them rough grass; a footpath comes up from the bottom edge. Along the top edge, "
  "a low broken turf bank with a wide open gap in it.",
  "LEAVE OUT: any other building.",
  [("1", "door"), ("2", "sick-bed: Dov Marrek"), ("3", "still and work table"),
   ("4", "shelves: 1 healer's kit, 1 antitoxin"), ("5", "physic garden"), ("6", "north gap in the earth ring")],
  "WP02 G22, G21; WP10 §5.2")

m(1, "map-g14-the-quarry.png", "The Quarry, \"the Pale\" (G14)", "wide", VILLAGE_FACTS,
  "THIS MAP: a working limestone quarry cut into a hillside, seen from straight above, about 200 feet by "
  "150 feet. The rock face is along the NORTH side. Three flat benches step down from north to south, "
  "separated by vertical cut faces about ten feet high shown with clear edge shading, joined by short "
  "ramps and two ladders. A timber crane derrick with ropes stands on the middle bench. On the lowest "
  "bench: half-cut stone blocks, a collapsed slab with rubble around it, and at the NORTH end of the "
  "lowest bench, against the rock face, a dark opening about five feet wide partly covered by loose rough "
  "planks, its edges made of pale, smooth, jointless stone unlike the quarry rock. A small stout stone "
  "powder store with a single iron-bound door stands well apart at one side. Spoil heaps along the east "
  "edge. A haul road of packed pale chips leaves by the south-east corner. Timber shoring props and stacked "
  "beams lie near the damaged face.",
  "LEAVE OUT: any buildings other than the powder store.",
  [("1", "haul road to the village"), ("2", "crane derrick"), ("3", "powder store: 6 charges"),
   ("4", "the aperture, boarded: DM: S1, the way into the Marrowward"), ("5", "collapse where Dov was hurt"),
   ("6", "spoil heaps: cover"), ("7", "shoring timber (the quarry is shut)")],
  "WP02 G14; WP10 §5.2, §5.4; WP09 Scene 6")

m(1, "map-z4-west-grazing.png", "West Grazing: the goblins' place (Z4)", "wide", COUNTRY,
  "THIS MAP: poor open sheep pasture about a mile west of the village, 200 feet by 150 feet. Tussock grass, "
  "patches of bare pale stony ground, a few thorn bushes, a shallow dry gully crossing from north-west to "
  "south-east, a broken drystone wall running along the eastern side with one gate gap, a small clear "
  "stream along the southern edge, and thickening scrub along the western edge. In the middle, a level "
  "open patch big enough for a camp of sixty people. A faint sheep track enters from the east edge.",
  "LEAVE OUT: any tents, fires, huts or buildings. The ground is empty.",
  [("1", "track to the fold and Greybank"), ("2", "level ground: proposed goblin camp (C4)"),
   ("3", "gully: hides small creatures"), ("4", "stream: water"), ("5", "scrub edge")],
  "WP05 Z4; WP02 §15.8; WP10 §4.3–§4.4", who="Both")

m(1, "map-s6-s9-register-run-dm.png", "Records Room and Turning Floor (S6, S9)", "4:3", DUNGEON,
  "THIS MAP: two underground chambers side by side, 160 feet by 120 feet. WEST HALF: a records room about "
  "50 feet by 40 feet, filled with parallel rows of tall stone racks holding thin upright stone tablets "
  "like books in a library, with aisles five feet wide between rows and a few gaps in the racks like "
  "missing teeth. Its west doorway leads toward the workshops and goes off the picture edge. In its east "
  "wall, a great stone slab door standing OPEN. EAST HALF: a round chamber about 60 feet across with a "
  "circular turning floor in its middle, marked by one deep worn circular seam and a straight groove one "
  "inch deep crossing it from south to north. From the north side of the round chamber a dead-straight "
  "gallery twelve feet wide runs to the top edge, with the same worn groove down its centre. A short "
  "flooded stair descends from the south side of the round chamber into dark water.",
  "LEAVE OUT: any creature or construct; any writing or marks on the tablets.",
  [("1", "to the S6 workshops"), ("2", "racks: the forms of authorisation"), ("3", "S9 leaf (open if key B is there)"),
   ("4", "turning floor: the Sentinel turns once per watch, at the half-watch mark"),
   ("5", "S10 Long Gallery"), ("6", "S8 flooded stair"), ("zone", "records room and S9 are inside its 120 ft sense")],
  "WP06 S6, S9; WP09 §2.5; WP10 §5.4, §6.1", who="DM only")

m(1, "map-s14-register-room-dm.png", "The Register Room (S14)", "small", DUNGEON,
  "THIS MAP: a close-up of one small underground square room, 20 feet by 20 feet (four squares by four), in "
  "the middle of the picture, with its approaches. SOUTH wall: a smooth flat stone panel with one narrow "
  "horizontal slot about a hand wide, set beside the room, with a simple raised arched frame around the "
  "slot. EAST wall: a shut stone slab door with one long vertical groove. WEST side: a SMALL doorway only "
  "five feet wide, its frame cracked, with flakes of broken stone on the floor, opening from a corridor "
  "ten feet wide that runs to the left picture edge; the corridor walls are covered in dense fine rows of "
  "tiny cut strokes that are not letters. NORTH wall: a rough, hand-dug, crumbling tunnel about five feet "
  "wide, unlike the smooth stone, climbing toward the top edge, with loose rubble and a few old animal "
  "bones.",
  "LEAVE OUT: any creature; any light or glow; any readable writing or symbols.",
  [("1", "corridor of names (S13)"), ("2", "small door: the Sentinel cannot pass"),
   ("3", "the register slot (System 6)"), ("4", "groove door to the Ward Heart (S15)"),
   ("5", "tunnel up to the Broken Quarter (S16) and the moor")],
  "Canon Amendments S2 §3; WP10 §6.1 (these override WP06 S14)", who="DM only")

# ---------------------------------------------------------------- priority 2

m(2, "map-g10-the-green.png", "The Green, Well and Bell Post (G10)", "big", VILLAGE_FACTS,
  "THIS MAP: the village green, about 200 feet by 200 feet. A wide open square of short turf about 180 feet "
  "across. In the middle a round stone-collared well about five feet across, and beside it an eight-foot "
  "timber frame carrying a bronze bell. On the NORTH side the front of a long slate-roofed stone hall; on "
  "the WEST side a small open-fronted stone shrine; on the other sides the mouths of four narrow lanes "
  "between thatched cottages, only their nearest roofs showing at the picture edges. Worn footpaths cross "
  "the turf to the well.",
  "LEAVE OUT: market stalls, trees in the middle of the green.",
  [("1", "well: half cover"), ("2", "bell post: three-quarters cover"), ("3", "Moot Hall (G11)"),
   ("4", "shrine (G9)"), ("5", "lane mouths into the Cotts")],
  "WP02 G10")

m(2, "map-g12-militia-shed.png", "The Militia Shed (G12)", "small", VILLAGE_FACTS,
  "THIS MAP: a timber shed about 30 feet by 20 feet with its slate roof removed, standing alone on trodden "
  "ground. One strong door with a heavy lock in the south wall, no windows. Inside: racks of long-handled "
  "billhooks and hunting spears, a few old bows on pegs, four lanterns on a shelf, a signal horn on a hook, "
  "coils of rope, one large barrel of black pitch in a corner, one shield and bundles of arrows. Outside, a "
  "bare muster yard.",
  "LEAVE OUT: any other buildings.",
  [("1", "locked door (keys: Berrick, the Reeve)"), ("2", "14 billhooks, 9 spears"), ("3", "6 poor shortbows"),
   ("4", "barrel of pitch: fire risk"), ("5", "muster yard")],
  "WP02 G12")

m(2, "map-g21-earth-ring-gap.png", "A gap in the Earth Ring (G21)", "4:3", VILLAGE_FACTS,
  "THIS MAP: one breach in the village's old defensive bank, 160 feet by 120 feet. A turf-and-stake bank "
  "about five feet high runs west to east across the middle of the picture, broken by one completely open "
  "gap about 30 feet wide. Rotten wooden stakes lean out of the bank, some missing. A packed road passes "
  "through the gap from the top edge to the bottom edge. North side: open ground with long grass and a few "
  "bushes. South side: the backs of two thatched cottages, a woodpile and a handcart.",
  "LEAVE OUT: any gate or tower.",
  [("1", "the open gap"), ("2", "bank: half cover"), ("3", "village side"), ("4", "outside")],
  "WP02 G21 (one generic gap, usable for NW, N, E or SE)")

m(2, "map-g9-shrine.png", "The Shrine of Chauntea (G9)", "small", VILLAGE_FACTS,
  "THIS MAP: a single-room stone shrine about 30 feet by 25 feet with its slate roof removed. The whole "
  "EAST side is open, with no door. Inside: an altar of bundled golden grain sheaves against the west wall, "
  "two plain benches, a small iron strongbox beside the altar, a stone basin. The lowest course of the "
  "outer wall, visible as a ledge all round, is pale, warm off-white, completely jointless stone, clearly "
  "different from the rough grey stone built on it. Trodden turf around, with a few graveside flowers.",
  "LEAVE OUT: statues, stained glass, a bell tower.",
  [("1", "open front"), ("2", "grain-sheaf altar"), ("3", "strongbox: 1 Potion of Healing"),
   ("4", "foundation course: DM: W2 (alive, failing)")],
  "WP02 G9; WP09 §2.6")

m(2, "map-g15-bunkhouse.png", "The Stonecutters' Bunkhouse (G15)", "3:2", VILLAGE_FACTS,
  "THIS MAP: a long timber bunkhouse about 80 feet by 25 feet with its thatch roof removed, beside a haul "
  "road of packed pale chips on a gentle slope. Inside: sixteen narrow bunks in two rows, a stove with a "
  "pipe, a long table with benches, boot racks, tool bundles, one door at each end. Outside: a water "
  "butt, a woodpile, a washing line, the road running past along the south side.",
  "LEAVE OUT: any upper floor.",
  [("1", "doors"), ("2", "bunks (16; six Daggerford men live here)"), ("3", "stove"), ("4", "haul road: view to the village")],
  "WP02 G15")

m(2, "map-z3-home-fields-farm.png", "A Home Fields farmstead (Z3)", "wide", COUNTRY,
  "THIS MAP: one outlying farm in flat arable land, 200 feet by 150 feet. A thatched farmhouse with its "
  "roof removed (one main room with hearth, one sleeping room), a small thatched barn with open doors, a "
  "hen coop, a pigpen with a low fence, a well, a cart, a vegetable plot. Around it, strips of ripening "
  "grain and stubble, one thick hedge with two gaps, a farm track leaving by the west edge.",
  "LEAVE OUT: any wall or defence around the farm.",
  [("1", "farmhouse"), ("2", "barn"), ("3", "hedge gaps"), ("4", "track to Greybank")],
  "WP05 Z3; WP02 §8.2 (H32–H34)")

m(2, "map-g17-the-cotts.png", "The Cotts: lanes (G17)", "4:3", VILLAGE_FACTS,
  "THIS MAP: a tight cluster of small village cottages, 160 feet by 120 feet. Eight to ten single-storey "
  "cob-and-timber cottages with thatched roofs seen from above, along two crooked lanes only 6 to 8 feet "
  "wide, eaves almost touching across the lanes. Doorways, woodpiles, rain barrels, a tiny back yard or "
  "two with low fences. One lane opens onto the edge of a grassy green at the bottom.",
  "LEAVE OUT: wide streets, cobbles, two-storey houses.",
  [("1", "narrow lanes: no line of sight over 25 yards"), ("2", "thatch eaves: fire crosses"), ("3", "lane mouth to the Green")],
  "WP02 G17")

# ---------------------------------------------------------------- priority 3

m(3, "map-g4-drays-store.png", "Dray's Store (G4)", "small", VILLAGE_FACTS,
  "THIS MAP: a village general store, ground floor with the roof removed, about 35 feet by 40 feet: stone "
  "lower walls. Shop front on the SOUTH side facing the street, with a door and shuttered window; a counter; "
  "shelves of sacks, tools, rope, jars. A storeroom behind with barrels and crates; a narrow stair going "
  "up; a barred back door in the north wall onto a small walled yard. A strip of packed-chip street along "
  "the bottom.",
  "LEAVE OUT: the upper floor.",
  [("1", "shop door"), ("2", "counter (Sember Dray)"), ("3", "storeroom: potion, healer's kit, ammunition"),
   ("4", "stair"), ("5", "barred back door and yard")],
  "WP02 G4")

m(3, "map-g5-the-smithy.png", "The Smithy (G5)", "small", VILLAGE_FACTS,
  "THIS MAP: a village smithy seen with roofs removed. An open-fronted forge facing SOUTH onto the street: "
  "brick forge with orange-red coals drawn flat, bellows, anvil, water quench trough, racks of iron "
  "bar stock. Behind it a stone workshop with benches, and a small locked tool-room. The packed-chip street "
  "runs along the bottom, narrowed to nine feet in front of the forge by a stone buttress.",
  "LEAVE OUT: any other buildings.",
  [("1", "forge and anvil"), ("2", "quench trough"), ("3", "workshop"), ("4", "locked tool-room: chain shirt"),
   ("5", "buttress pinch, 9 ft")],
  "WP02 G5")

m(3, "map-g16-wagonyard.png", "The Wagonyard and Stable (G16)", "4:3", VILLAGE_FACTS,
  "THIS MAP: a fenced hard-standing yard 160 feet by 120 feet with one wide gate on the SOUTH side to the "
  "street. A four-stall timber stable with roof removed and two horses' empty straw stalls plus two spare, "
  "a cart shed holding three carts and two heavy low stone-wagons, a small hay loft building with thatch, "
  "a water trough, harness racks.",
  "LEAVE OUT: any animals.",
  [("1", "gate"), ("2", "stable (2 riding horses)"), ("3", "carts and stone-wagons"), ("4", "hay loft: fire risk")],
  "WP02 G16")

m(3, "map-z6-reedwater.png", "Reedwater (Z6)", "wide", COUNTRY,
  "THIS MAP: drowned meadow beside the river, 200 feet by 150 feet. The river along the south edge; dense "
  "reed beds; patches of cattle-cropped grass; shallow standing pools; two straight old silted drainage "
  "ditches; a narrow raised track crossing west to east; two rotten derelict wooden eel traps.",
  "LEAVE OUT: boats, buildings, bridges.",
  [("1", "track to Bythe Ford"), ("2", "reeds"), ("3", "deep pools"), ("4", "eel traps")],
  "WP05 Z6")

m(3, "map-z8-the-cut.png", "The Cut (Z8)", "2:3", COUNTRY,
  "THIS MAP: a road defile, 100 feet wide by 150 feet tall. A single cart road runs from the top (north-"
  "west) to the bottom (south-east) through a narrow cutting just wide enough for one cart, between steep "
  "20-foot banks with scrub, roots and rocks on top. Near the lower end a small open-sided stone drover's "
  "shelter and one upright boundary stone.",
  "LEAVE OUT: any cart or barricade.",
  [("1", "road to Greybank"), ("2", "banks, 20 ft: ambush ground"), ("3", "drover's shelter"),
   ("4", "boundary stone"), ("5", "road to Daggerford")],
  "WP05 Z8")

m(3, "map-z9-the-hollowway.png", "The Hollowway (Z9)", "2:3", COUNTRY,
  "THIS MAP: a sunken lane, 100 feet by 150 feet, seen from above. The lane is about eight feet wide, cut "
  "eight feet below the fields, running from the bottom edge to the top edge with two bends. Hazel branches "
  "arch over it, drawn thinly enough to see the lane floor; exposed roots in the earth walls; leaf litter; "
  "fields and hedges above on both sides; one place where the bank has slumped and can be climbed.",
  "LEAVE OUT: any structure or footprints.",
  [("1", "sunken floor"), ("2", "banks, 8 ft"), ("3", "slumped bank: the way out")],
  "WP05 Z9")

m(3, "map-z10-anvil-gorge.png", "Anvil Gorge and the span (Z10)", "1:1", COUNTRY,
  "THIS MAP: a narrow limestone gorge, 120 feet by 120 feet. Fast white water in a slot twelve feet wide "
  "and thirty feet deep runs from left to right across the middle, walls drawn with strong depth shading. "
  "Across it, one natural rock span, the remains of a collapsed arch, only four to five feet wide, wet and "
  "glistening. Broken rocky ground, boulders and ledges on both banks.",
  "LEAVE OUT: any built bridge, rope or handrail.",
  [("1", "the span, 4 ft at its narrowest"), ("2", "slot: no climbing out"), ("3", "rough banks")],
  "WP05 Z10")

m(3, "map-z12-bythe-ford.png", "Bythe Ford (Z12)", "wide", COUNTRY,
  "THIS MAP: a wide shallow river crossing, 200 feet by 150 feet. Here the river broadens to about 120 "
  "feet, running from left to right across the middle over a pale gravel bed, shallow and clear enough to "
  "see stones. A cart track comes down to it from the top and leaves from the bottom, with wheel ruts into "
  "the water. On the north bank a roofless ruined stone tollhouse and an upright wooden marker post with "
  "plain horizontal notches. Gravel bars, willow scrub.",
  "LEAVE OUT: any bridge or stepping stones.",
  [("1", "ford: cart crossing"), ("2", "ruined tollhouse"), ("3", "flood marker post"), ("4", "south: to Fenrow")],
  "WP05 Z12")

m(3, "map-z13-fenrow-holding.png", "Fenrow Holding (Z13)", "wide", COUNTRY,
  "THIS MAP: a tiny hamlet, 200 feet by 150 feet: three poor farmsteads with thatched roofs around a "
  "shared yard with one larger timber barn, vegetable plots, a well, sheep hurdles, a track arriving from "
  "the top edge, flat wet pasture around.",
  "LEAVE OUT: any shop, smithy, shrine or wall.",
  [("1", "farmsteads (19 people)"), ("2", "shared barn: a roof for the party"), ("3", "track to the ford")],
  "WP05 Z13")

m(3, "map-z18-coldwell-vale.png", "Coldwell Vale (Z18)", "wide", COUNTRY,
  "THIS MAP: a sheltered green valley floor, 200 feet by 150 feet, better land than anywhere nearby: a cold "
  "spring welling into a clear pool, a stream from it, good grass, a stand of tall trees on one side, a low "
  "limestone cliff with shallow overhangs for shelter on the other, one narrow way in from the east edge.",
  "LEAVE OUT: any buildings, camps or tracks of people.",
  [("1", "the way in, from the Hollowmarch"), ("2", "spring"), ("3", "overhangs: shelter"), ("4", "woodland")],
  "WP05 Z18 (the Red-Tusk Flight destination)")


def prompt_text(x):
    ratio = RATIO.get(x["size"], x["size"])
    shape = {"4:3": "landscape", "3:2": "landscape", "1:1": "square", "2:3": "portrait"}[ratio]
    return "\n\n".join([
        SURVEY_STYLE, TOPDOWN, grid(x["size"]), ONLY, x["facts"], x["body"], x["leave"],
        f"FORMAT: aspect ratio {ratio}, {shape}, at least 2048 pixels on the long side. The whole map fills "
        f"the frame edge to edge.",
        NEGATIVE])


def main():
    maps = sorted(MAPS, key=lambda x: x["prio"])
    assert len({x["file"] for x in maps}) == len(maps)
    L = ["# The Broken March — Battle Map Prompts (batch 2)\n",
         "**Status:** ready to run, 27 Nov 2026. Built by `Maps/tools/build_battlemap_prompts.py`: edit the "
         "script, not this file.  ",
         "**Companions:** [[Maps — Audit]], [[Maps — Generation Prompts]] (batch 1, already generated).\n",
         "These are the places that had **no local map**. Every prompt asks for a **5 ft grid** and **no "
         "text**. The numbers in each key get added later as a layer in the DM Guide.\n",
         "## Checklist\n",
         "1. Copy one prompt box **whole** into the image model.",
         "2. **Count the grid squares.** Image models often miscount. If it is badly off, run it again.",
         "3. Save with **exactly** the filename given.",
         f"4. Put it in `{DEST}\\`.",
         "5. Tell me. I check it, add the numbers, and wire it into the guide.\n",
         "## All prompts\n",
         "| # | File | Map | For | Priority | Squares |", "|---:|---|---|---|:---:|---|"]
    for i, x in enumerate(maps, 1):
        w, h = SIZES[x["size"]]
        L.append(f"| {i} | `{x['file']}` | {x['title']} | {x['who']} | {x['prio']} | {w} × {h} |")
    L.append("\nPriority: **1** = likely in Session 3 · **2** = possible · **3** = rarely needed.\n\n---\n")
    for i, x in enumerate(maps, 1):
        w, h = SIZES[x["size"]]
        L += [f"## {i}. {x['title']}\n", "| | |\n|---|---|",
              f"| **Save as** | `{x['file']}` |", f"| **Grid** | {w} × {h} squares of 5 ft |",
              f"| **For** | {x['who']} |", f"| **Priority** | {x['prio']} |",
              f"| **Built from** | {x['sources']} |", "", "```text", prompt_text(x), "```\n",
              "**Key** (added later in the guide):\n", "| Mark | Meaning |\n|---|---|"]
        L += [f"| {a} | {b} |" for a, b in x["key"]]
        L.append("\n---\n")
    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(L))
    print("wrote", len(maps), "prompts;", [sum(x["prio"] == p for x in maps) for p in (1, 2, 3)])


if __name__ == "__main__":
    main()
