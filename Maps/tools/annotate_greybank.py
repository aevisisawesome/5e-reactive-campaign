"""Annotated DM map of Greybank. Standard library only.

  python annotate_greybank.py   -> writes map-greybank-dm-annotated.svg into
                                   The Broken March - DM Guide/assets/img/maps/

The base picture is the painted village map (image data/map-greybank-dm.png, which is
really a JPEG). It is embedded, and the keys from WP02 §4.6, §4.7, §5 and §7 are drawn
on top. Positions are read off the painting by eye; the painting is not to scale.
Render to PNG with a headless browser (see the end of this file).
"""
import base64, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, "image data", "map-greybank-dm.png")
OUT = os.path.join(ROOT, "The Broken March - DM Guide", "assets", "img", "maps")

MW, MH = 1024, 1536          # the painting
PANEL = 470                  # key panel on the right
W, H = MW + PANEL, MH
FONT = "Georgia, 'Palatino Linotype', serif"

# G-locations: (number, x, y). Label sits on the building.
G = [
    (1, 470, 1105), (2, 560, 1215), (3, 490, 820), (4, 382, 820), (5, 630, 815),
    (6, 175, 875), (7, 283, 860), (8, 262, 1000), (9, 330, 570), (10, 470, 735),
    (11, 548, 585), (12, 268, 655), (13, 640, 90), (14, 180, 120), (15, 262, 290),
    (16, 820, 800), (17, 470, 440), (18, 70, 655), (19, 520, 230), (21, 188, 520),
    (22, 770, 360),
]
# Ring gaps: (letter, x, y)
GAPS = [("NW", 330, 330), ("N", 508, 318), ("E", 905, 610), ("SE", 905, 905)]
# Entry routes (WP02 §4.7): (number, x, y)
ROUTES = [(1, 440, 1470), (2, 255, 240), (3, 470, 160), (4, 990, 600),
          (5, 975, 1040), (6, 345, 1050), (7, 205, 1050)]
# Chokepoints (WP02 §4.6): (number, x, y, width text)
CHOKES = [(1, 545, 1085, "11 ft"), (2, 700, 885, "15→9 ft"), (3, 520, 505, "6–8 ft ×4"),
          (4, 300, 930, "8 ft"), (5, 190, 345, "12 ft")]
# Waystones (WP05 §10, WP09 §2.6): (name, x, y)
WAYS = [("W1", 595, 130), ("W2", 300, 600), ("W3", 575, 205)]


def label_circle(n, x, y, r=17, fill="#f6ecd2", stroke="#3b2410", text_fill="#3b2410", size=17):
    return (f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="2.5"/>'
            f'<text x="{x}" y="{y + size * 0.36:.0f}" text-anchor="middle" font-size="{size}" '
            f'font-weight="bold" fill="{text_fill}">{n}</text>')


def build():
    with open(SRC, "rb") as f:
        b64 = base64.b64encode(f.read()).decode()
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
         f'viewBox="0 0 {W} {H}" width="{W}" height="{H}" font-family="{FONT}">',
         f'<rect width="{W}" height="{H}" fill="#efe3c6"/>',
         f'<image x="0" y="0" width="{MW}" height="{MH}" xlink:href="data:image/jpeg;base64,{b64}"/>']

    # river notes: bridge depth, the shoal (late summer), the far bank
    s.append('<g font-size="15" fill="#1f3550" font-style="italic" '
             'style="paint-order:stroke;stroke:#e9f0f4;stroke-width:4px">'
             '<text x="560" y="1150">9 ft deep · opaque</text>'
             '<text x="285" y="1090">shoal · late summer only</text>'
             '<text x="285" y="1108">waist-deep, 40 ft</text></g>')
    s.append('<ellipse cx="345" cy="1050" rx="48" ry="22" fill="none" stroke="#1f3550" '
             'stroke-width="2.5" stroke-dasharray="6 5"/>')

    # route 1 continues off the south edge; G20 is off the map to the south-west
    s.append('<g font-size="15" fill="#3b2410" style="paint-order:stroke;stroke:#f6ecd2;stroke-width:4px">'
             '<text x="470" y="1525">to Daggerford road (SE) · 2 days</text>'
             '<text x="12" y="1525">← G20 charcoal camp · ½ mile SW</text></g>')

    # aperture at the north end of the quarry's lowest bench (WP02 G14)
    s.append('<g><circle cx="232" cy="168" r="10" fill="#fffaf0" stroke="#7a1c1c" stroke-width="3"/>'
             '<text x="248" y="160" font-size="15" font-weight="bold" fill="#7a1c1c" '
             'style="paint-order:stroke;stroke:#fffaf0;stroke-width:4px">aperture</text></g>')

    for name, x, y in WAYS:
        s.append(f'<g><rect x="{x - 9}" y="{y - 9}" width="18" height="18" transform="rotate(45 {x} {y})" '
                 f'fill="#fffaf0" stroke="#7a1c1c" stroke-width="2.5"/>'
                 f'<text x="{x + 14}" y="{y + 5}" font-size="14" font-weight="bold" fill="#7a1c1c" '
                 f'style="paint-order:stroke;stroke:#fffaf0;stroke-width:4px">{name}</text></g>')

    for letter, x, y in GAPS:
        s.append(f'<g><rect x="{x - 22}" y="{y - 14}" width="44" height="28" rx="4" fill="#7a1c1c" '
                 f'stroke="#fffaf0" stroke-width="2"/><text x="{x}" y="{y + 6}" text-anchor="middle" '
                 f'font-size="16" font-weight="bold" fill="#fffaf0">{letter}</text></g>')

    for n, x, y in ROUTES:
        s.append(f'<g><rect x="{x - 15}" y="{y - 15}" width="30" height="30" fill="#2d4a2b" '
                 f'stroke="#f6ecd2" stroke-width="2"/><text x="{x}" y="{y + 6}" text-anchor="middle" '
                 f'font-size="16" font-weight="bold" fill="#f6ecd2">R{n}</text></g>')

    for n, x, y, width in CHOKES:
        s.append(f'<g><polygon points="{x},{y - 18} {x + 18},{y + 13} {x - 18},{y + 13}" fill="#c98a1a" '
                 f'stroke="#3b2410" stroke-width="2"/><text x="{x}" y="{y + 9}" text-anchor="middle" '
                 f'font-size="14" font-weight="bold" fill="#3b2410">{n}</text>'
                 f'<text x="{x + 22}" y="{y + 10}" font-size="14" font-weight="bold" fill="#3b2410" '
                 f'style="paint-order:stroke;stroke:#f6ecd2;stroke-width:4px">{width}</text></g>')

    for n, x, y in G:
        s.append(label_circle(n, x, y))

    # north arrow and a rough scale (the painting is not to scale; WP02 §4.5 distances average ~1.9 px/yd)
    s.append('<g transform="translate(965,60)"><polygon points="0,-34 11,8 0,0 -11,8" fill="#3b2410"/>'
             '<text x="0" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#3b2410" '
             'style="paint-order:stroke;stroke:#f6ecd2;stroke-width:4px">N</text></g>')
    s.append('<g transform="translate(760,1470)" font-size="14" fill="#3b2410" '
             'style="paint-order:stroke;stroke:#f6ecd2;stroke-width:4px">'
             '<rect x="0" y="0" width="190" height="8" fill="#3b2410"/><rect x="95" y="1" width="94" height="6" fill="#f6ecd2"/>'
             '<text x="0" y="28">0</text><text x="190" y="28" text-anchor="end">100 yd (rough)</text></g>')

    s.append(key_panel())
    s.append('</svg>')
    os.makedirs(OUT, exist_ok=True)
    out = os.path.join(OUT, "map-greybank-dm-annotated.svg")
    with open(out, "w", encoding="utf-8") as f:
        f.write("\n".join(s))
    print("wrote", out)


KEY_G = [
    "G1 Marrow Bridge · 11 ft wide, 90 ft long",
    "G2 Toll-shed · south bank · the crossing book",
    "G3 The Sundered Cart · taproom · THATCH",
    "G4 Dray's Store · slate",
    "G5 The Smithy · slate lean-to",
    "G6 The Mill · sluice · THATCH",
    "G7 The Granary · staddle stones · slate",
    "G8 The Wharf · the skiff (seats 4)",
    "G9 Shrine of Chauntea",
    "G10 The Green · well · bell post",
    "G11 Moot Hall · slate",
    "G12 The Militia Shed",
    "G13 The Tower · 30 ft",
    "G14 The Quarry, the Pale",
    "G15 Stonecutters' Bunkhouse · THATCH",
    "G16 The Wagonyard · hay loft THATCH",
    "G17 The Cotts · 22 dwellings · THATCH",
    "G18 The Fold and Byres · outside the ring",
    "G19 The Burial Ground",
    "G20 Charcoal Camp · off map, ½ mile SW",
    "G21 The Earth Ring · broken in 4 places",
    "G22 Herbwife's Cottage (place approx.)",
]
KEY_R = [
    "R1 South road → bridge · carts",
    "R2 Haul road from the quarry · carts",
    "R3 North footpath, past the graves",
    "R4 East gap, through the fields",
    "R5 SE gap, riverside path · overgrown",
    "R6 The shoal · late summer only",
    "R7 The wharf, by boat",
]
KEY_C = [
    "1 The bridge · 11 ft",
    "2 The Street at the smithy · 15→9 ft",
    "3 The four Cott lane-mouths · 6–8 ft",
    "4 The mill causeway · 8 ft",
    "5 The haul road cut · 12 ft",
    "6 The four ring gaps · 20–40 ft",
]


def key_panel():
    x0 = MW + 22
    s = [f'<rect x="{MW}" y="0" width="{PANEL}" height="{H}" fill="#efe3c6"/>',
         f'<line x1="{MW}" y1="0" x2="{MW}" y2="{H}" stroke="#3b2410" stroke-width="3"/>',
         f'<g fill="#3b2410" font-size="16">',
         f'<text x="{x0}" y="46" font-size="27" font-weight="bold">Greybank — DM map</text>',
         f'<text x="{x0}" y="72" font-size="14" font-style="italic">WP02 §4.6, §4.7, §5, §7 · north at top · not to scale</text>']
    y = 112
    s.append(f'<text x="{x0}" y="{y}" font-size="19" font-weight="bold">Places (circles)</text>')
    y += 26
    for line in KEY_G:
        s.append(f'<text x="{x0}" y="{y}">{line}</text>')
        y += 22
    y += 14
    s.append(f'<text x="{x0}" y="{y}" font-size="19" font-weight="bold">Ways in (green squares)</text>')
    y += 26
    for line in KEY_R:
        s.append(f'<text x="{x0}" y="{y}">{line}</text>')
        y += 22
    y += 14
    s.append(f'<text x="{x0}" y="{y}" font-size="19" font-weight="bold">Chokepoints (triangles)</text>')
    y += 26
    for line in KEY_C:
        s.append(f'<text x="{x0}" y="{y}">{line}</text>')
        y += 22
    y += 14
    s.append(f'<text x="{x0}" y="{y}" font-size="19" font-weight="bold">Red marks — DM only</text>')
    y += 26
    for line in ["NW · N · E · SE  the four ring gaps",
                 "W1 tower base · W2 shrine footing",
                 "W3 burial ground's north wall",
                 "aperture · Marrowward Stage I (S1)"]:
        s.append(f'<text x="{x0}" y="{y}">{line}</text>')
        y += 22
    y += 14
    s.append(f'<text x="{x0}" y="{y}" font-size="19" font-weight="bold">Sightlines</text>')
    y += 26
    for line in ["Tower top (+30 ft): the whole village,",
                 "fields, both roads, the quarry lip.",
                 "Quarry lip: the whole core, 500 yd.",
                 "Bridge: south road 400 yd, but the",
                 "toll-shed hides its last 30 yd."]:
        s.append(f'<text x="{x0}" y="{y}">{line}</text>')
        y += 22
    s.append('</g>')
    return "\n".join(s)


if __name__ == "__main__":
    build()
    # PNG: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless
    #      --screenshot=<out>.png --window-size=1494,1536 --hide-scrollbars <svg file URL>
