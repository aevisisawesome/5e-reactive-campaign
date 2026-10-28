"""Hand-drawn-style SVG maps for The Broken March. Standard library only.

  python build_maps.py      -> writes ../regional-map-dm.svg, ../regional-map-players.svg, ../marrowward-map-dm.svg

Geography follows WP05 §3.3 / §4.2 (distances, ~40 px per mile, Greybank slightly
south of centre). The ward line follows "Canon Amendments — Session 1 Play.md" §1.
"""
import math, os, random

OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, H = 1400, 1180
FONT = "'IM Fell English', 'Palatino Linotype', Georgia, serif"

HEAD = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
<defs>
 <style>@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&amp;family=IM+Fell+English+SC&amp;display=swap');
  text{{font-family:{FONT};fill:#3b2a1a;paint-order:stroke;stroke:#ecdcb6;stroke-width:4px;stroke-linejoin:round}} .sc{{font-family:'IM Fell English SC',{FONT}}}</style>
 <filter id="paper" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="7" result="n"/>
  <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.80  0 0 0 0 0.69  0 0 0 0 0.50  0 0 0 -1.1 0.95"/>
  <feComposite in2="SourceGraphic" operator="in"/></filter>
 <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4"/>
  <feDisplacementMap in="SourceGraphic" scale="3.5"/></filter>
 <radialGradient id="vig" cx="50%" cy="50%" r="75%"><stop offset="60%" stop-color="#000" stop-opacity="0"/>
  <stop offset="100%" stop-color="#3b2410" stop-opacity="0.45"/></radialGradient>
</defs>
<rect width="{W}" height="{H}" fill="#ead9b4"/>
<rect width="{W}" height="{H}" fill="#e2c995" filter="url(#paper)"/>
<rect width="{W}" height="{H}" fill="url(#vig)"/>
<rect x="18" y="18" width="{W-36}" height="{H-36}" fill="none" stroke="#5a3e22" stroke-width="3" filter="url(#rough)"/>
<rect x="28" y="28" width="{W-56}" height="{H-56}" fill="none" stroke="#5a3e22" stroke-width="1" filter="url(#rough)"/>
"""
INK = "#4a3320"
GB = (720, 700)  # Greybank

def wobble(points, amp=4, seed=1):
    r = random.Random(seed)
    return [(x + r.uniform(-amp, amp), y + r.uniform(-amp, amp)) for x, y in points]

def path(points, close=False):
    d = f"M{points[0][0]:.1f},{points[0][1]:.1f} " + " ".join(f"L{x:.1f},{y:.1f}" for x, y in points[1:])
    return d + (" Z" if close else "")

def smooth(points):
    d = f"M{points[0][0]:.1f},{points[0][1]:.1f} "
    for i in range(1, len(points) - 1):
        mx, my = (points[i][0] + points[i + 1][0]) / 2, (points[i][1] + points[i + 1][1]) / 2
        d += f"Q{points[i][0]:.1f},{points[i][1]:.1f} {mx:.1f},{my:.1f} "
    return d + f"L{points[-1][0]:.1f},{points[-1][1]:.1f}"

def terrain():
    s = ['<g filter="url(#rough)">']
    r = random.Random(11)
    # river Marrow, W -> ESE, just south of Greybank
    river = [(20, 690), (200, 705), (440, 722), (600, 712), (720, 724), (850, 735), (960, 742), (1080, 770), (1190, 792), (1300, 818), (1385, 838)]
    s.append(f'<path d="{smooth(river)}" fill="none" stroke="#7d9bb0" stroke-width="16" stroke-linecap="round" opacity="0.75"/>')
    s.append(f'<path d="{smooth(river)}" fill="none" stroke="{INK}" stroke-width="1.2" stroke-dasharray="2 6" opacity="0.6"/>')
    # hills: the rise north of Greybank, up to the Old Delving
    for _ in range(70):
        x, y = r.uniform(560, 900), r.uniform(80, 600)
        if abs(x - 720) < 40 and y > 560: continue
        w = r.uniform(18, 34)
        s.append(f'<path d="M{x-w/2:.0f},{y:.0f} Q{x:.0f},{y-w*0.9:.0f} {x+w/2:.0f},{y:.0f}" fill="none" stroke="{INK}" stroke-width="1.6"/>'
                 f'<path d="M{x-w/6:.0f},{y-w*0.45:.0f} l{w/5:.0f},{w*0.3:.0f}" stroke="{INK}" stroke-width="0.8"/>')
    # Kettlerock crags
    for i in range(6):
        x, y = 640 + i * 22 + r.uniform(-5, 5), 215 + r.uniform(-12, 12)
        s.append(f'<path d="M{x-14:.0f},{y+12:.0f} L{x-3:.0f},{y-22:.0f} L{x+4:.0f},{y-8:.0f} L{x+14:.0f},{y+12:.0f}" fill="#d9c08c" stroke="{INK}" stroke-width="1.6"/>')
    # moor tufts: Hagsfoot (north-west of the rise)
    for _ in range(80):
        x, y = r.uniform(380, 660), r.uniform(300, 520)
        s.append(f'<path d="M{x:.0f},{y:.0f} l-4,-7 M{x:.0f},{y:.0f} l0,-9 M{x:.0f},{y:.0f} l4,-7" stroke="{INK}" stroke-width="0.9" opacity="0.8"/>')
    # forests: far bank woods, Hollowmarch, coppice
    for cx, cy, rx, ry, n in [(470, 960, 220, 140, 120), (690, 790, 110, 50, 40), (250, 1080, 170, 70, 60), (1110, 1000, 110, 80, 45)]:
        for _ in range(n):
            a, rr = r.uniform(0, 6.283), r.random() ** 0.5
            x, y = cx + rr * rx * math.cos(a), cy + rr * ry * math.sin(a)
            t = r.uniform(7, 11)
            s.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{t:.1f}" fill="#b9b27a" stroke="{INK}" stroke-width="1.1"/>'
                     f'<line x1="{x:.0f}" y1="{y+t:.0f}" x2="{x:.0f}" y2="{y+t+5:.0f}" stroke="{INK}" stroke-width="1.1"/>')
    # Reedwater marsh, east
    for _ in range(45):
        x, y = r.uniform(990, 1130), r.uniform(600, 690)
        s.append(f'<path d="M{x:.0f},{y:.0f} h12 M{x+3:.0f},{y:.0f} v-8 M{x+8:.0f},{y:.0f} v-6" stroke="{INK}" stroke-width="0.9"/>')
    # Anvil Gorge: cliff hatching on both banks, west
    for i in range(10):
        x = 400 + i * 9
        s.append(f'<path d="M{x},700 l4,-14 M{x},744 l4,14" stroke="{INK}" stroke-width="1.3"/>')
    # fields, east of Greybank
    for i in range(5):
        x, y = 770 + i * 26, 598 + (i % 2) * 14
        s.append(f'<rect x="{x}" y="{y}" width="22" height="16" fill="none" stroke="{INK}" stroke-width="0.9"/>'
                 f'<path d="M{x+3},{y+4} h16 M{x+3},{y+8} h16 M{x+3},{y+12} h16" stroke="{INK}" stroke-width="0.4"/>')
    # Daggerford road: bridge -> Cut -> south-east edge; tracks
    road = [(722, 724), (790, 790), (880, 860), (950, 905), (1060, 960), (1200, 1040), (1340, 1110)]
    s.append(f'<path d="{smooth(road)}" fill="none" stroke="{INK}" stroke-width="2" stroke-dasharray="9 6"/>')
    for trk in ([(722, 730), (700, 780), (640, 830), (560, 900), (470, 960)],            # Hollowway, far bank
                [(735, 690), (900, 700), (1060, 760), (1190, 790), (1260, 880)],         # east track
                [(715, 690), (700, 600), (720, 540), (700, 400), (700, 230), (720, 80)]): # north, rough
        s.append(f'<path d="{smooth(trk)}" fill="none" stroke="{INK}" stroke-width="1.2" stroke-dasharray="3 6"/>')
    s.append('</g>')
    # compass rose and scale bar
    s.append(f'''<g transform="translate(1270,150)" filter="url(#rough)">
 <circle r="56" fill="none" stroke="{INK}" stroke-width="1.5"/><circle r="44" fill="none" stroke="{INK}" stroke-width="0.8"/>
 <path d="M0,-70 L9,0 L0,70 L-9,0 Z" fill="#c9a96a" stroke="{INK}" stroke-width="1.4"/>
 <path d="M-70,0 L0,8 L70,0 L0,-8 Z" fill="#e8d6ad" stroke="{INK}" stroke-width="1.2"/>
 <text y="-78" text-anchor="middle" font-size="22" class="sc">N</text></g>
<g transform="translate(70,1110)" filter="url(#rough)"><path d="M0,0 h160 M0,-6 v12 M80,-5 v10 M160,-6 v12" stroke="{INK}" stroke-width="2"/>
 <text x="80" y="26" text-anchor="middle" font-size="18">four miles</text></g>''')
    return "\n".join(s)

def label(x, y, t, size=20, anchor="middle", italic=False, sc=False, opacity=1):
    cls = ' class="sc"' if sc else ""
    st = ' font-style="italic"' if italic else ""
    return f'<text x="{x}" y="{y}" font-size="{size}" text-anchor="{anchor}"{cls}{st} opacity="{opacity}">{t}</text>'

# --- the ward line (Canon Amendments — Session 1 Play §1) ---
POSTS = {"Gate N": (722, 72), "W4": (725, 540), "W3": (744, 668), "W1": (712, 662), "W2": (700, 692), "W5": (1085, 1010), "W6": (430, 1000)}
SPANS = [("Gate N", "W4", "dead"), ("W4", "W3", "key"), ("W3", "W1", "live"), ("W1", "W2", "live"), ("W2", "W5", "dead"), ("W5", "W6", "live")]
STYLE = {"live": 'stroke="#b8860b" stroke-width="4"', "key": 'stroke="#b8860b" stroke-width="4" stroke-dasharray="14 5 3 5"',
         "dead": 'stroke="#8b1e1e" stroke-width="3" stroke-dasharray="4 9" opacity="0.85"'}

def ward_line():
    s = ['<g filter="url(#rough)">']
    for a, b, kind in SPANS:
        (x1, y1), (x2, y2) = POSTS[a], POSTS[b]
        s.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" {STYLE[kind]} stroke-linecap="round"/>')
    for name, (x, y) in POSTS.items():
        if name == "Gate N": continue
        dead = name in ("W4", "W5")
        fill = "#6b3a2a" if dead else "#efe3c2"
        s.append(f'<rect x="{x-5}" y="{y-11}" width="10" height="20" rx="2" fill="{fill}" stroke="{INK}" stroke-width="1.6"/>')
    s.append('</g>')
    return "\n".join(s)

def dm_regional():
    s = [HEAD, terrain(), ward_line(), '<g filter="url(#rough)">']
    # Greybank
    gx, gy = GB
    s.append(f'<ellipse cx="{gx}" cy="{gy-20}" rx="46" ry="34" fill="none" stroke="{INK}" stroke-width="2"/>')
    for dx, dy in [(-20, -28), (-6, -32), (10, -28), (-16, -12), (2, -14), (18, -12), (-4, 0)]:
        s.append(f'<path d="M{gx+dx-6},{gy+dy} h12 v-7 l-6,-6 l-6,6 Z" fill="#d7c08e" stroke="{INK}" stroke-width="1"/>')
    s.append(f'<path d="M{gx-6},{gy+18} h14" stroke="{INK}" stroke-width="4"/>')  # bridge
    # quarry aperture
    s.append(f'<path d="M660,640 q20,-18 44,-4 q-6,14 -24,16 q-14,0 -20,-12 Z" fill="#f2ead6" stroke="{INK}" stroke-width="1.6"/>'
             f'<circle cx="680" cy="644" r="5" fill="{INK}"/>')
    # Old Delving door, S16 hole, goblin camp, fold
    s.append(f'<path d="M708,84 q14,-26 28,0 Z" fill="{INK}"/>')
    s.append(f'<path d="M520,430 q22,-16 44,0 q-22,14 -44,0 Z" fill="#3b2a1a"/><path d="M520,430 l-10,-8 M564,430 l10,-8" stroke="{INK}" stroke-width="1.4"/>')
    for i in range(4):
        x = 610 + i * 18
        s.append(f'<path d="M{x},260 l8,-14 l8,14 Z" fill="#c9a96a" stroke="{INK}" stroke-width="1.2"/>')
    s.append(f'<circle cx="625" cy="682" r="9" fill="none" stroke="{INK}" stroke-width="1.6"/><circle cx="625" cy="682" r="3" fill="{INK}"/>')
    s.append(f'<path d="M712,770 l6,-10 l6,10 Z M708,778 h20" fill="#c9a96a" stroke="{INK}" stroke-width="1.2"/>')  # charcoal clamps
    s.append('</g>')
    L = [
        label(700, 66, "The Old Delving", 22, sc=True), label(700, 128, "Kettlerock Gate · goblins piled it shut · Z17", 15, italic=True),
        label(560, 262, "Kettlerock", 22, sc=True), label(560, 284, "Red-Tusk camp · 61 goblins · Z16", 15, italic=True),
        label(470, 470, "Hagsfoot Moor", 22, sc=True), label(470, 492, "the Broken Quarter breaks the surface · Z11", 15, italic=True),
        label(820, 538, "Stonecrop Rise", 21, sc=True), label(820, 558, "W4 — dead · looks like a cairn · Z7", 15, italic=True),
        label(612, 624, "the Pale", 18, sc=True), label(612, 606, "quarry ruin (Greybank Gate)", 14, italic=True),
        label(790, 676, "GREYBANK", 24, anchor="start", sc=True),
        label(790, 698, "W1 tower · W2 shrine · W3 graveyard", 14, anchor="start", italic=True),
        label(790, 716, "W3 lit by key A in the anchor", 14, anchor="start", italic=True),
        label(608, 676, "the fold · Z4", 15, anchor="end", italic=True),
        label(740, 812, "charcoal camp · Ib · Z5", 15, anchor="start", italic=True),
        label(1060, 588, "Reedwater", 18, sc=True),
        label(1190, 770, "Bythe Ford", 18, sc=True), label(1270, 902, "Fenrow", 16, sc=True),
        label(420, 682, "Anvil Gorge", 17, sc=True),
        label(560, 870, "the Hollowway", 16, sc=True, italic=True),
        label(915, 890, "the Cut", 18, sc=True),
        label(1085, 1048, "Wend's Barrow", 19, sc=True), label(1085, 1068, "W5 — dead · buried, taken for a grave · Z14", 14, italic=True),
        label(430, 1040, "the Hollowmarch", 21, sc=True), label(430, 1060, "W6 — living · tended by the elves · Z15", 14, italic=True),
        label(200, 1150, "to Coldwell Vale", 15, italic=True),
        label(1300, 1145, "to Daggerford · 2 days", 16, anchor="end", italic=True),
        label(250, 760, "THE MARROW", 20, sc=True, opacity=0.7),
        label(700, 1125, "The Broken March — DM map", 30, sc=True),
    ]
    s += L
    # legend
    s.append(f'''<g transform="translate(1060,240)" filter="url(#rough)"><rect x="-14" y="-28" width="300" height="190" fill="#efe1bd" stroke="{INK}" stroke-width="1.4"/>
 <text x="0" y="0" font-size="19" class="sc">The Ward Line</text>
 <line x1="0" y1="26" x2="56" y2="26" {STYLE["live"]}/><text x="68" y="31" font-size="15">living span</text>
 <line x1="0" y1="56" x2="56" y2="56" {STYLE["key"]}/><text x="68" y="61" font-size="15">span lit by a key (counts)</text>
 <line x1="0" y1="86" x2="56" y2="86" {STYLE["dead"]}/><text x="68" y="91" font-size="15">dead span — the gap</text>
 <rect x="22" y="104" width="10" height="20" fill="#efe3c2" stroke="{INK}"/><rect x="40" y="104" width="10" height="20" fill="#6b3a2a" stroke="{INK}"/>
 <text x="68" y="119" font-size="15">waystone: living / dead</text>
 <text x="0" y="148" font-size="13" font-style="italic">Inside the line = land the arc wraps, plus all tunnels.</text></g>''')
    s.append("</svg>")
    return "\n".join(s)

def player_regional():
    return "\n".join([HEAD, terrain(), label(700, 1125, "The Marrow Valley", 30, sc=True), "</svg>"])

# --- Marrowward interior (WP06 §4–§10 as amended by live play) ---
def box(x, y, w, h, title, sub, state, shade="#efe3c2"):
    col = {"seen": "#efe3c2", "open": "#e3d3a3", "unseen": "#e8dcc0"}[state]
    dash = ' stroke-dasharray="6 5"' if state == "unseen" else ""
    op = ' opacity="0.65"' if state == "unseen" else ""
    out = [f'<g{op}><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="{col}" stroke="{INK}" stroke-width="2"{dash}/>',
           label(x + w / 2, y + 26, title, 18, sc=True)]
    for i, line in enumerate(sub):
        out.append(label(x + w / 2, y + 48 + i * 18, line, 13, italic=True))
    out.append("</g>")
    return "".join(out)

def link(pts, kind="open", note=None):
    st = {"open": f'stroke="{INK}" stroke-width="3"', "unseen": f'stroke="{INK}" stroke-width="2" stroke-dasharray="6 6" opacity="0.6"',
          "sentinel": 'stroke="#8b1e1e" stroke-width="3" stroke-dasharray="2 7"'}[kind]
    s = f'<path d="{path(pts)}" fill="none" {st} stroke-linecap="round"/>'
    if note:
        x, y = pts[len(pts) // 2]
        s += label(x + 8, y - 6, note, 12, anchor="start", italic=True)
    return s

def door(x, y, kind):
    c = {"open": "#efe3c2", "knock": "#efe3c2", "key": "#d4af37", "sealed": "#6b3a2a"}[kind]
    return f'<rect x="{x-9}" y="{y-9}" width="18" height="18" fill="{c}" stroke="{INK}" stroke-width="1.8" transform="rotate(45 {x} {y})"/>'

def dm_dungeon():
    s = [HEAD.replace('fill="#e2c995"', 'fill="#dcc38d"'), '<g filter="url(#rough)">']
    s.append(label(700, 70, "The Marrowward — DM map (as played, Session 1)", 30, sc=True))
    s.append(label(700, 96, "schematic, not to scale · stages run top to bottom · ◆ = barrier", 15, italic=True))
    # surface strip
    s.append(f'<path d="M60,150 C300,130 500,160 700,140 C900,120 1150,150 1340,135" fill="none" stroke="{INK}" stroke-width="2"/>')
    s.append(label(170, 130, "surface: the Pale (quarry, Z2)", 15, italic=True))
    s.append(label(1180, 122, "surface: Hagsfoot Moor (Z11)", 15, italic=True))
    s.append(label(1250, 218, "surface: Old Delving (Z17)", 15, italic=True))
    # Stage labels
    for y, t in [(185, "STAGE I · level 3"), (470, "STAGE II · level 4"), (760, "STAGE III · level 4–5"), (990, "STAGE IV · level 5–6")]:
        s.append(label(40, y, t, 15, anchor="start", sc=True, opacity=0.8))
    # Stage I
    s.append(box(250, 170, 190, 80, "S1 Ramp", ["40 ft down · Durrow's prints turn at 10 ft"], "seen"))
    s.append(box(170, 290, 350, 110, "S2 Muster Floor", ["80×40 ft hall · Elvish roster, last third hurried", "warden's kit under a bench — EMPTY"], "seen"))
    s.append(box(40, 290, 110, 110, "S3 Anchor", ["recess holds", "KEY A · ACTIVE"], "seen"))
    s.append(box(540, 290, 170, 110, "S4 Watch-Glass", ["opened by Knock", "4 of 6 rings lit"], "seen"))
    s.append(link([(345, 250), (345, 290)]))
    s.append(link([(170, 345), (150, 345)])); s.append(link([(520, 345), (540, 345)])); s.append(door(530, 345, "knock"))
    # S5 corridor with two sealed doors
    s.append(box(250, 440, 270, 80, "S5 Lock Gallery", ["two magic-sealed doors", "right: Knock + key A hold it open"], "open"))
    s.append(link([(345, 400), (345, 440)])); s.append(door(345, 420, "knock"))
    s.append(link([(250, 480), (170, 480)])); s.append(door(160, 480, "sealed"))
    s.append(label(90, 520, "sealed door, unexplored", 13, italic=True)); s.append(label(90, 538, "(same seal — DM to define)", 13, italic=True))
    # S6 workshops (four rooms)
    for i, (t, sub) in enumerate([("stone-shop", "benches, clamps"), ("metal-shop", "racks, tools"), ("store", "shelves"), ("records", "~30 tablets gone")]):
        s.append(box(560 + i * 150, 440, 140, 80, t, [sub], "seen"))
    s.append(label(860, 432, "S6 Workshops — key A came from here", 15, italic=True))
    s.append(link([(520, 480), (560, 480)]))
    # S8, S7
    s.append(box(560, 590, 230, 100, "S8 Drowned Stair", ["9 goblins + 2 wardens, all on dry steps", "THE LISTENER · key B was on a warden"], "seen"))
    s.append(box(830, 600, 200, 90, "S7 Sluice Hall", ["not yet seen · water and river control", "overflow shaft up to the quarry"], "unseen"))
    s.append(link([(630, 520), (630, 590)])); s.append(link([(790, 640), (830, 640)], "unseen"))
        # S9, S10 and on
    s.append(box(1080, 600, 230, 90, "S9 Turning Floor", ["grooved floor · stone leaf", "OPEN — key B left in the lock"], "open"))
    s.append(link([(1010, 520), (1195, 520), (1195, 600)])); s.append(door(1195, 600, "key"))
    s.append(label(1205, 560, "rectangular-lock door", 12, anchor="start", italic=True))
    s.append(box(380, 740, 940, 70, "S10 The Long Gallery", ["12 ft wide, dead straight, groove an inch deep — the Sentinel's patrol runs north toward the Old Delving"], "seen"))
    s.append(link([(1195, 690), (1195, 740)]))
    s.append(box(160, 840, 200, 80, "S11 Deterrent Chain", ["resonating plates · 3rd key"], "unseen"))
    s.append(box(1100, 840, 230, 80, "S12 Kettlerock Gate", ["piled shut from outside"], "unseen"))
    s.append(link([(380, 775), (260, 775), (260, 840)], "unseen")); s.append(link([(1215, 810), (1215, 840)], "unseen"))
    s.append(link([(1330, 880), (1350, 880), (1350, 225)], "unseen")); s.append(door(1215, 830, "sealed"))
    s.append(box(560, 860, 220, 70, "S13 Approach of Names", ["accepts a name, not a key"], "unseen"))
    s.append(link([(670, 810), (670, 860)], "unseen")); s.append(door(670, 850, "sealed"))
    s.append(box(380, 970, 260, 80, "S14 Sentinel's Walk", ["System 6 · authorisation"], "unseen"))
    s.append(box(700, 970, 230, 80, "S15 Ward Heart", ["6 seats: 4 lit, 2 dark"], "unseen"))
    s.append(box(990, 970, 250, 80, "S16 Broken Quarter", ["the dead spans · hole to the moor"], "unseen"))
    s.append(link([(640, 1010), (700, 1010)], "unseen")); s.append(door(670, 1010, "sealed"))
    s.append(link([(670, 930), (510, 970)], "unseen")); s.append(link([(640, 1035), (990, 1035)], "unseen"))
    s.append(link([(1240, 1030), (1365, 1030), (1365, 150)], "unseen")); s.append(label(1300, 1050, "scramble up to the moor", 12, italic=True))
    # Sentinel circuit (DM only)
    s.append(link([(400, 795), (1300, 795)], "sentinel")); s.append(link([(400, 1040), (630, 1040)], "sentinel"))
    s.append('</g>')
    s.append(f'''<g transform="translate(60,1080)" filter="url(#rough)"><text font-size="14">
 <tspan x="0" dy="0">◆ pale = opened by Knock · ◆ gold = held by a key · ◆ dark = sealed · dashed = not yet seen · red dots = Sentinel circuit</tspan>
 <tspan x="0" dy="20">Live rulings: S7 opens off S8; S9 opens off S6; S2 kit empty (its key is key B); Knock is not a breach; no breaches yet.</tspan>
 <tspan x="0" dy="20">With key A in S3 and key B in S9, nothing is shut between the quarry ramp and the Long Gallery.</tspan></text></g>''')
    s.append("</svg>")
    return "\n".join(s)

for name, svg in [("regional-map-dm.svg", dm_regional()), ("regional-map-players.svg", player_regional()), ("marrowward-map-dm.svg", dm_dungeon())]:
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", name)
