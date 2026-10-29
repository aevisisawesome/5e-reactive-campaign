"""Convert WP09 — Session 2.md into the DM Guide page 07-session-two.html.
Usage (from "D&D Reactive campaign 2026"):
    python "The Broken March - DM Guide/tools/build_session_two.py" "WP09 — Session 2.md" "The Broken March - DM Guide/07-session-two.html" "The Broken March - DM Guide/assets/entities.js"
"""
import re, sys, html

MD, OUT, ENTS = sys.argv[1], sys.argv[2], sys.argv[3]
src = open(MD, encoding="utf-8").read().splitlines()
ENTITY_IDS = set(re.findall(r'id: "([^"]+)"', open(ENTS, encoding="utf-8").read()))

def slug(t):
    t = re.sub(r"<[^>]+>", "", t).lower()
    t = re.sub(r"[^\w\- ]", "", t)
    return t.replace(" ", "-")

used = {}
def uid(t):
    s = "s2-" + slug(t)
    if s in used:
        used[s] += 1
        s = f"{s}-{used[s]}"
    else:
        used[s] = 0
    return s

# ---------------------------------------------------------------- inline
def inline(t):
    toks = []
    def keep(h):
        toks.append(h); return f"\x00{len(toks)-1}\x00"
    t = html.escape(t, quote=False)
    t = re.sub(r"`([^`]+)`", lambda m: keep(f"<code>{m.group(1)}</code>"), t)
    # placeholders
    def ph(m):
        body = m.group(1)
        owner = "DM" if body.startswith(("CHARACTER", "NAME")) else "WP13"
        return keep(f'<span class="tbd-inline" data-owner="{owner}">[{inline_simple(body)}]</span>')
    t = re.sub(r"\*{0,2}\[((?:LOOT PLACEHOLDER|CHARACTER SHEET PENDING|NAME PENDING)[^\]]*)\]\*{0,2}", ph, t)
    # source tags
    def tag(m):
        kind, rest = m.group(1), m.group(2)
        label = kind.capitalize() + rest
        return keep(f'<span class="src src-{kind.lower()}">{label}</span>')
    t = re.sub(r"\*{0,2}\[(LORE|ADAPTED|CAMPAIGN)([^\]]*)\]\*{0,2}", tag, t)
    # links
    def link(m):
        txt, href = m.group(1), m.group(2)
        if href.startswith("#"):
            href = "#s2-" + href[1:]
        return keep(f'<a href="{href}">{inline_simple(txt)}</a>')
    t = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", link, t)
    t = re.sub(r"^\[x\] ", "✓ ", t); t = re.sub(r"^\[ \] ", "☐ ", t)
    t = inline_simple(t)
    for _ in range(3):
        t = re.sub(r"\x00(\d+)\x00", lambda m: toks[int(m.group(1))], t)
    return t

def inline_simple(t):
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*(?![\s*])(.+?)(?<![\s*])\*(?![\w*])", r"<em>\1</em>", t)
    return t

# ---------------------------------------------------------------- blocks
def split_row(r):
    r = r.strip()
    if r.startswith("|"): r = r[1:]
    if r.endswith("|"): r = r[:-1]
    return [c.strip() for c in r.split("|")]

def table(rows):
    head = split_row(rows[0]); body = [split_row(r) for r in rows[2:]]
    out = ['<div class="scrollx"><table>', "<thead><tr>"]
    out += [f"<th>{inline(c)}</th>" for c in head]
    out.append("</tr></thead><tbody>")
    for r in body:
        out.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
    out.append("</tbody></table></div>")
    return "\n".join(out)

def lst(lines):
    out, stack = [], []
    for l in lines:
        ind = len(l) - len(l.lstrip(" "))
        s = l.strip()
        ordered = bool(re.match(r"\d+\.\s", s))
        item = re.sub(r"^(?:[-*]|\d+\.)\s+", "", s)
        lvl = ind // 2
        while len(stack) > lvl + 1:
            out.append(f"</li></{stack.pop()}>")
        if len(stack) < lvl + 1:
            tagn = "ol" if ordered else "ul"
            stack.append(tagn); out.append(f"<{tagn}><li>{inline(item)}")
        else:
            out.append(f"</li><li>{inline(item)}")
    while stack:
        out.append(f"</li></{stack.pop()}>")
    return "".join(out)

deadline_n = [0]
def figure(alt, path, in_entry=False):
    name = path.rsplit("/", 1)[-1].rsplit(".", 1)[0]
    kind = {"npc": "portrait", "scene": "scene", "map": "map", "handout": "handout"}.get(name.split("-")[0], "scene")
    a = html.escape(alt)
    return (f'<figure class="art" data-kind="{kind}" data-img="{name}.webp" data-src="WP09 &sect;8">'
            f'<img src="assets/img/{name}.webp" alt="{a}" loading="lazy"><figcaption>{a}</figcaption></figure>')

def blockquote(lines):
    raw = [re.sub(r"^>\s?", "", l) for l in lines]
    first = raw[0].lstrip()
    if first.startswith("👤"):
        ps = [l for l in raw if l.strip()]
        m = re.match(r"👤\s*(.*)", ps[0])
        head = inline(m.group(1))
        head = re.sub(r"\s·\s(<em>.*</em>.*)$", r' <span class="pbox-tag">\1</span>', head)
        body = []
        for l in ps[1:]:
            cls = ' class="pbox-now"' if l.startswith("**Now:**") else ""
            body.append(f"<p{cls}>{inline(l)}</p>")
        return f'<div class="pbox"><p class="pbox-name">{head}</p>{"".join(body)}</div>'
    paras, cur = [], []
    for l in raw:
        if l.strip(): cur.append(l.strip())
        elif cur: paras.append(" ".join(cur)); cur = []
    if cur: paras.append(" ".join(cur))
    text = paras[0]
    def label(t):
        m = re.match(r"^\S+\s*\*\*(.+?)\*\*\s*(.*)$", t)
        return (m.group(1).rstrip("."), m.group(2)) if m else (None, re.sub(r"^\S+\s*", "", t))
    if first.startswith("📜"):
        lab, rest = label(text)
        cue = re.search(r"\((.+)\)", lab or "")
        out = [f'<p class="ra-cue">{inline(cue.group(1))}</p>'] if cue else []
        out += [f"<p>{inline(p)}</p>" for p in [rest] + paras[1:] if p]
        return '<div class="readaloud">' + "".join(out) + "</div>"
    for mark, cls, default in (("🎲", "callout-dm", "DM"), ("⚠", "callout-warn", "Watch out"), ("⏰", "callout-deadline", "Deadline")):
        if first.startswith(mark):
            lab, rest = label(text)
            idattr = ""
            if mark == "⏰":
                deadline_n[0] += 1; idattr = f' id="s2-d-{deadline_n[0]}"'
            body = "".join(f"<p>{inline(p)}</p>" for p in [rest] + paras[1:] if p)
            return (f'<div class="callout {cls}"{idattr}><span class="callout-title">{inline(lab or default)}</span>{body}</div>')
    return '<blockquote class="rule">' + "".join(f"<p>{inline(p)}</p>" for p in paras) + "</blockquote>"

# ---------------------------------------------------------------- walk
out = []
i, n = 0, len(src)
part_open = h2_open = entry_open = False
in_chars = False
spoiler = False
entry_fig, entry_buf = None, []
prose = []

def emit(h):
    global entry_buf
    if entry_open:
        entry_buf.append(h)
    else:
        out.append(h)

def close_entry():
    global entry_open, entry_fig, entry_buf
    if entry_open:
        out.append('<div class="entry-body">' + (entry_fig or "") +
                   '<div class="entry-text">' + "\n".join(entry_buf) + "</div></div></article>")
    entry_open, entry_fig, entry_buf = False, None, []

def close_h2():
    global h2_open
    close_entry()
    if h2_open: out.append("</section>"); h2_open = False

def close_part():
    global part_open, spoiler
    close_h2()
    if part_open:
        if spoiler: out.append("</div><!-- /.spoiler-body -->")
        out.append("</section>"); part_open = False; spoiler = False

while i < n:
    line = src[i]
    s = line.strip()
    if not s or s == "---":
        i += 1; continue
    m = re.match(r"^(#{1,4})\s+(.*)$", line)
    if m:
        lvl, text = len(m.group(1)), m.group(2).strip()
        if lvl == 1:
            close_part()
            if text.startswith("The Broken March"):
                out.append('<section class="part-page" id="s2-top"><p class="part-label">Session 2 · WP09</p><h1>Session Two</h1>')
                part_open = True; i += 1; continue
            pid = uid(text)
            num = re.match(r"(\d+)\.\s*(.*)", text)
            plabel = f"Part {num.group(1)}" if num else text
            title = num.group(2) if num else text
            in_chars = title.startswith("Characters")
            if "What the DM Knows" in title:
                spoiler = True
                out.append(f'<section class="part-page spoiler" id="{pid}" data-spoiler="session-two-dm">'
                           f'<p class="part-label">{plabel} · DM only</p><h1>{inline(title)}</h1>'
                           '<div class="spoiler-gate"><p class="spoiler-warn"><strong>Hidden truths for this session</strong>: faction moves, the Sentinel ruling, the S6 archive, the Lock-keeper\'s Cell. '
                           'Turn the screen away from players before you reveal it.</p>'
                           '<p class="spoiler-open"><strong>DM-only content is showing.</strong> The red button at the bottom of the screen hides it again.</p>'
                           '<button class="btn btn-primary" type="button" data-spoiler-toggle>Reveal DM-only content</button></div>'
                           '<div class="spoiler-body">')
            else:
                out.append(f'<section class="part-page" id="{pid}"><p class="part-label">{plabel}</p><h1>{inline(title)}</h1>')
            part_open = True
        elif lvl == 2:
            close_h2()
            hid = uid(text)
            out.append(f'<section id="{hid}-sec"><h2 id="{hid}">{inline(text)}</h2>')
            h2_open = True
        elif lvl == 3:
            close_entry()
            hid = uid(text)
            if in_chars:
                ent = hid[3:]
                eattr = f' data-entity-entry="{ent}"' if ent in ENTITY_IDS else ""
                out.append(f'<article class="entry entry-npc" id="{hid}"{eattr}><h3>{inline(text)}</h3>')
                entry_open = True
            else:
                out.append(f'<h3 id="{hid}">{inline(text)}</h3>')
        else:
            emit(f'<h4 id="{uid(text)}">{inline(text)}</h4>')
        i += 1; continue
    if s.startswith("!["):
        mm = re.match(r"!\[([^\]]*)\]\(([^)]+)\)", s)
        fig = figure(mm.group(1), mm.group(2))
        if entry_open and entry_fig is None and not entry_buf:
            entry_fig = fig
        else:
            emit(fig)
        i += 1; continue
    if s.startswith(">"):
        j = i
        while j < n and src[j].strip().startswith(">"): j += 1
        emit(blockquote(src[i:j])); i = j; continue
    if s.startswith("|"):
        j = i
        while j < n and src[j].strip().startswith("|"): j += 1
        emit(table(src[i:j])); i = j; continue
    if re.match(r"^\s*(?:[-*]|\d+\.)\s", line):
        j = i
        while j < n and (re.match(r"^\s*(?:[-*]|\d+\.)\s", src[j]) or (src[j].startswith("  ") and src[j].strip())):
            j += 1
        emit(f'<div class="prose">{lst(src[i:j])}</div>'); i = j; continue
    # paragraph
    j = i; buf = []
    while j < n and src[j].strip() and not re.match(r"^(#|>|\||!\[|---|\s*(?:[-*]|\d+\.)\s)", src[j].strip()):
        buf.append(src[j].strip()); j += 1
    p = " ".join(buf)
    if re.match(r"^\*\*\[(CHARACTER SHEET PENDING|LOOT PLACEHOLDER)", p):
        topic = re.sub(r"[*\[\]]", "", p)
        owner = "Character sheets (DM)" if "CHARACTER" in p else "WP13"
        emit(f'<div class="tbd" data-owner="{owner}" data-topic="Session 2"><p>{inline(p)}</p></div>')
    else:
        emit(f'<div class="prose"><p>{inline(p)}</p></div>')
    i = j
close_part()

STRIP = [("Day 2 · Night", "fold raid", "s2-scene-1-night-at-the-cart-and-the-fold-raid"),
         ("Day 3 · Dawn", "Bessa reports", "s2-scene-2-dawn-with-bessa"),
         ("Day 3 · Morning", "Threll's clerk", "s2-scene-7-thrells-clerk-and-serinas-price-list"),
         ("Day 3 · Afternoon", "the envoy", "s2-scene-8-the-envoy-at-the-bridge"),
         ("First trip to the Pale", "Vaerelin", "s2-scene-6-vaerelins-warning"),
         ("Every watch", "the Sentinel turns", "s2-scene-10-back-to-the-ruins"),
         ("Day 3 · Night", "sheep taken", "s2-scene-11-day-3-night-and-day-4-spill-over")]
strip = ('<p class="deadlines no-print"><b>Deadlines:</b> ' +
         " ".join(f'<a href="#{a}"><b>{w}</b> — {t}</a>' for w, t, a in STRIP) + "</p>")

page = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Session Two — The Broken March DM Guide</title>
<meta name="description" content="Session two, scene by scene, from Day 2 Evening at the Sundered Cart to Day 4.">
<link rel="stylesheet" href="assets/app.css">
</head>
<body>

<a class="skip-link" href="#main">Skip to content</a>

<header data-topbar></header>

<div class="site">

  <aside data-toc></aside>

  <main id="main">
{strip}
{chr(10).join(out)}
  </main>
</div>

<footer class="site-footer">
  <p><strong>The Broken March — Interactive DM Guide.</strong> Offline. No network, no build step.</p>
  <p>A viewer over the campaign documents, not a replacement for them. On any conflict, the vault documents win.</p>
  <p>Session two, generated from <strong>WP09 — Session 2.md</strong>. Edit the markdown, then rebuild this page.</p>
</footer>

<script src="assets/entities.js"></script>
<script src="assets/state.js"></script>
<script src="assets/app.js"></script>
</body>
</html>
"""
open(OUT, "w", encoding="utf-8").write(page)
# link check
ids = set(re.findall(r'id="([^"]+)"', page))
bad = sorted(set(h for h in re.findall(r'href="#([^"]+)"', page) if h not in ids))
print("missing anchors:", bad)
print("deadline callouts:", deadline_n[0])
