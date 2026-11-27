/* ==========================================================================
   The Broken March — World explorer (11-world-explorer.html)

   A clickable atlas on top of the maps registry (maps.js) and the entity
   registry (entities.js). Nothing here is canon: pictures, marks and keys
   come from maps.js, names and summaries from entities.js, and travel times
   from WP05 §4.2 and the map keys.

   PLACES  one entry per place. `maps` lists its variants [mapId, name, when].
           `links` are the edges: [side, placeId, time, {dm}].
           Sides: n s e w, plus "up" and "down" for the dungeon.
   SPOTS   which mark on which map leads where: place id, or {e: entity id,
           to: place id, dm: true}.
   ========================================================================== */
(function () {
  "use strict";

  var host = document.querySelector("[data-explorer]");
  if (!host || !window.BM || !BM.buildMapSvg) return;

  var IMG = "assets/img/maps/";
  var START = "region";

  /* ---------------------------------------------------------------- places */
  var PLACES = {};
  function place(id, name, entity, parent, maps, links) {
    PLACES[id] = { id: id, name: name, entity: entity, parent: parent, maps: maps, links: links || [] };
  }
  function one(mapId) { return [[mapId, "Map", ""]]; }

  place("region", "The valley", null, null, [
    ["map-region-dm", "DM map", "Planning and travel: zones, waystones, the ward line"],
    ["map-region-players", "Player handout", "When you show the table"]
  ]);
  place("greybank", "Greybank", "greybank", "region", [
    ["map-greybank-dm", "DM keys", "Running the village: all 22 places, gaps, routes"],
    ["map-greybank-players", "Player sketch", "Hand it to the players"]
  ], [["n", "stonecrop", "1 watch"], ["w", "fold", "260 yd"], ["e", "home-fields", "¼ watch"],
      ["e", "reedwater", "1 watch"], ["s", "charcoal", "½ watch"], ["s", "the-cut", "1 watch"],
      ["w", "anvil", "1½ watches"], ["n", "quarry", "¼ watch"], ["n", "moor", "2 watches"],
      ["n", "kettlerock", "3 watches"]]);

  /* village sites */
  place("bridge", "Marrow Bridge", "g1-marrow-bridge", "greybank", one("map-g1-marrow-bridge"),
        [["n", "green", "220 yd"], ["s", "charcoal", "½ mile SW"], ["s", "the-cut", "1 watch"]]);
  place("cart", "The Sundered Cart", "g3-the-sundered-cart", "greybank", one("map-g3-the-sundered-cart"),
        [["w", "store", "next door"], ["e", "smithy", "next door"], ["s", "bridge", "village"], ["n", "green", "village"]]);
  place("store", "Dray's Store", "g4-drays-store", "greybank", one("map-g4-drays-store"),
        [["e", "cart", "next door"], ["w", "millside", "village", { dm: true }], ["n", "green", "village"]]);
  place("smithy", "The Smithy", "g5-the-smithy", "greybank", one("map-g5-the-smithy"),
        [["w", "cart", "next door"], ["e", "wagonyard", "village"], ["n", "green", "village"]]);
  place("wagonyard", "The Wagonyard", "g16-the-wagonyard", "greybank", one("map-g16-wagonyard"),
        [["w", "smithy", "village"], ["s", "bridge", "village"]]);
  place("millside", "Millside and the shoal", "g6-the-mill", "greybank", one("map-g6-millside-dm"),
        [["e", "store", "village"], ["s", "charcoal", "by the shoal", { dm: true }]]);
  place("green", "The Green", "g10-the-green", "greybank", one("map-g10-the-green"),
        [["n", "moot", "across the Green"], ["w", "shrine", "across the Green"], ["s", "cart", "village"],
         ["e", "cotts", "lane mouths"], ["s", "militia", "20 yd"]]);
  place("moot", "The Moot Hall", "g11-moot-hall", "greybank", one("map-g11-moot-hall"),
        [["s", "green", "front doors"], ["n", "cotts", "village"]]);
  place("shrine", "The Shrine", "g9-shrine-of-chauntea", "greybank", one("map-g9-shrine"), [["e", "green", "village"]]);
  place("militia", "The Militia Shed", "g12-militia-shed", "greybank", one("map-g12-militia-shed"), [["n", "green", "20 yd"]]);
  place("cotts", "The Cotts", "g17-the-cotts", "greybank", one("map-g17-the-cotts"),
        [["s", "green", "village"], ["n", "herbwife", "village"], ["e", "ring", "village"]]);
  place("herbwife", "The Herbwife's Cottage", "g22-herbwifes-cottage", "greybank", one("map-g22-herbwifes-cottage"),
        [["s", "cotts", "90 yd"], ["n", "ring", "at the north gap"]]);
  place("ring", "A gap in the Earth Ring", "g21-earth-ring", "greybank", one("map-g21-earth-ring-gap"),
        [["s", "herbwife", "village"], ["n", "tower", "village"]]);
  place("tower", "The Tower and Burial Ground", "g13-the-tower", "greybank", one("map-g13-the-tower"),
        [["s", "ring", "village"], ["n", "stonecrop", "1 watch"]]);
  place("quarry", "The Quarry, the Pale", "g14-the-quarry", "region", one("map-g14-the-quarry"),
        [["e", "greybank", "¼ watch"], ["s", "bunkhouse", "haul road"], ["n", "stonecrop", "¾ watch"],
         ["down", "stage1", "the aperture", { dm: true }]]);
  place("bunkhouse", "The Bunkhouse", "g15-the-bunkhouse", "greybank", one("map-g15-bunkhouse"),
        [["n", "quarry", "haul road"], ["e", "greybank", "haul road"]]);
  place("fold", "The Fold and West Grazing", "g18-the-fold", "region", [
    ["map-g18-the-fold", "The fold", "The sheepfolds and byres: raids"],
    ["map-z4-west-grazing", "West grazing", "The open pasture: where the goblins may camp"]
  ], [["e", "greybank", "260 yd from the fold"], ["n", "stonecrop", "about 1 watch"]]);

  /* outside */
  place("home-fields", "The Home Fields", "z3-home-fields", "region", one("map-z3-home-fields-farm"),
        [["w", "greybank", "¼ watch"]]);
  place("charcoal", "The Charcoal Camp", "g20-charcoal-camp", "region", one("map-g20-charcoal-camp"),
        [["n", "bridge", "½ mile"], ["w", "hollowway", "½ watch"]]);
  place("reedwater", "Reedwater", "z6-reedwater", "region", one("map-z6-reedwater"),
        [["w", "greybank", "1 watch"], ["e", "ford", "1 watch"]]);
  place("stonecrop", "Stonecrop Rise", "z7-stonecrop-rise", "region", one("map-z7-stonecrop-rise"),
        [["s", "greybank", "1 watch"], ["s", "fold", "about 1 watch"], ["w", "quarry", "¾ watch"], ["n", "moor", "1 watch"]]);
  place("the-cut", "The Cut", "z8-the-cut", "region", one("map-z8-the-cut"),
        [["n", "greybank", "1 watch"], ["s", "barrow", "1 watch"]]);
  place("hollowway", "The Hollowway", "z9-the-hollowway", "region", one("map-z9-the-hollowway"),
        [["e", "charcoal", "½ watch"], ["w", "hollowmarch", "2 watches"]]);
  place("anvil", "Anvil Gorge", "z10-anvil-gorge", "region", one("map-z10-anvil-gorge"),
        [["e", "greybank", "1½ watches"]]);
  place("moor", "Hagsfoot Moor", "z11-hagsfoot-moor", "region", one("map-z11-hagsfoot-moor-dm"),
        [["s", "stonecrop", "1 watch"], ["s", "greybank", "2 watches"], ["n", "kettlerock", "1 watch"],
         ["down", "stage4", "the hole (S16)", { dm: true }]]);
  place("ford", "Bythe Ford", "z12-bythe-ford", "region", one("map-z12-bythe-ford"),
        [["w", "reedwater", "1 watch"], ["s", "fenrow", "½ watch"]]);
  place("fenrow", "Fenrow Holding", "z13-fenrow-holding", "region", one("map-z13-fenrow-holding"),
        [["n", "ford", "½ watch"]]);
  place("barrow", "Wend's Barrow", "z14-wends-barrow", "region", one("map-z14-wends-barrow"),
        [["n", "the-cut", "1 watch"]]);
  place("hollowmarch", "The Hollowmarch", "z15-the-hollowmarch", "region", one("map-z15-the-hollowmarch"),
        [["e", "hollowway", "2 watches"], ["w", "coldwell", "2 watches", { dm: true }]]);
  place("kettlerock", "Kettlerock", "z16-kettlerock", "region", one("map-z16-kettlerock"),
        [["s", "moor", "1 watch"], ["s", "greybank", "3 watches"], ["n", "delving", "1 watch"]]);
  place("delving", "The Old Delving", "z17-the-old-delving", "region", one("map-z17-the-old-delving"),
        [["s", "kettlerock", "1 watch"], ["s", "greybank", "4 watches"],
         ["down", "stage3", "the Kettlerock Gate", { dm: true }]]);
  place("coldwell", "Coldwell Vale", "z18-coldwell-vale", "region", one("map-z18-coldwell-vale"),
        [["e", "hollowmarch", "2 watches"]]);

  /* the Marrowward (all DM only) */
  place("marrowward", "The Marrowward", "the-ruins", "region", [
    ["map-marrowward-section-dm", "Side view", "How the four stages sit under the hills"],
    ["map-marrowward-diagram-dm", "As-played diagram", "What is open, where the keys are"]
  ], [["s", "stage1", "Stage I"], ["s", "stage2", "Stage II"], ["n", "stage3", "Stage III"], ["n", "stage4", "Stage IV"]]);
  place("stage1", "Stage I: the Greybank Gate", "s1-aperture-and-ramp", "marrowward", one("map-marrowward-stage-1-dm"),
        [["up", "quarry", "the aperture"], ["n", "stage2", "through S5"]]);
  place("stage2", "Stage II: the Service Works", "s6-the-workshops", "marrowward", [
    ["map-marrowward-stage-2-dm", "Floor plan", "Moving between S5, S6, S7 and S8"],
    ["map-s6-s9-register-run-dm", "Battle map", "The records room and the Sentinel's turn"]
  ], [["s", "stage1", "through S5"], ["n", "stage3", "the S9 door"]]);
  place("stage3", "Stage III: the Transit Ring", "s10-long-gallery", "marrowward", [
    ["map-marrowward-stage-3-dm", "Floor plan", "The gallery, S11 and the north gate"],
    ["map-s6-s9-register-run-dm", "Battle map", "The turning floor and the records room"]
  ], [["s", "stage2", "the S9 door"], ["n", "delving", "the Kettlerock Gate"], ["w", "stage4", "S13"]]);
  place("stage4", "Stage IV: the Ward Heart", "s14-sentinels-walk", "marrowward", [
    ["map-marrowward-stage-4-dm", "Floor plan", "S13 to S16 together"],
    ["map-s14-register-room-dm", "Register room", "Close-up for using the slot in S14"]
  ], [["w", "stage3", "S10"], ["up", "moor", "the hole (S16)"]]);

  /* A place whose every map is DM only is hidden from players. */
  var MAP = {};
  MAPS.forEach(function (m) { MAP[m.id] = m; });
  Object.keys(PLACES).forEach(function (id) {
    var p = PLACES[id];
    p.dm = p.maps.every(function (v) { return MAP[v[0]].who === "dm"; });
  });

  /* ---------------------------------------------------------------- hotspots */
  function z(n, to, dm) { return { e: n, to: to, dm: dm }; }
  var SPOTS = {
    "map-region-dm": {
      "1": z("z1-greybank", "greybank"), "2": z("z2-the-pale", "quarry"), "3": z("z3-home-fields", "home-fields"),
      "4": z("z4-west-grazing", "fold"), "5": z("z5-the-coppice", "charcoal"), "6": z("z6-reedwater", "reedwater"),
      "7": z("z7-stonecrop-rise", "stonecrop"), "8": z("z8-the-cut", "the-cut"), "9": z("z9-the-hollowway", "hollowway"),
      "10": z("z10-anvil-gorge", "anvil"), "11": z("z11-hagsfoot-moor", "moor"), "12": z("z12-bythe-ford", "ford"),
      "13": z("z13-fenrow-holding", "fenrow"), "14": z("z14-wends-barrow", "barrow"),
      "15": z("z15-the-hollowmarch", "hollowmarch"), "16": z("z16-kettlerock", "kettlerock"),
      "17": z("z17-the-old-delving", "delving"), "18": z("z18-coldwell-vale", "coldwell", true),
      "W1–3": z("waystone-w1", "greybank"), "W4": z("waystone-w4", "stonecrop"), "W5": z("waystone-w5", "barrow"),
      "W6": z("waystone-w6", "hollowmarch"), "Gate": z("s12-kettlerock-gate", "delving")
    },
    "map-region-players": {
      "1": z(null, "greybank"), "2": z(null, "bridge"), "3": z(null, "quarry"), "4": z(null, "home-fields"),
      "5": z(null, "fold"), "6": z(null, "charcoal"), "7": z(null, "reedwater"), "8": z(null, "ford"), "9": z(null, "the-cut")
    },
    "map-greybank-dm": {
      "1": z("g1-marrow-bridge", "bridge"), "2": z("g2-toll-shed", "bridge"), "3": z("g3-the-sundered-cart", "cart"),
      "4": z("g4-drays-store", "store"), "5": z("g5-the-smithy", "smithy"), "6": z("g6-the-mill", "millside"),
      "7": z("g7-the-granary", "millside"), "8": z("g8-the-wharf", "millside"), "9": z("g9-shrine-of-chauntea", "shrine"),
      "10": z("g10-the-green", "green"), "11": z("g11-moot-hall", "moot"), "12": z("g12-militia-shed", "militia"),
      "13": z("g13-the-tower", "tower"), "14": z("g14-the-quarry", "quarry"), "15": z("g15-the-bunkhouse", "bunkhouse"),
      "16": z("g16-the-wagonyard", "wagonyard"), "17": z("g17-the-cotts", "cotts"), "18": z("g18-the-fold", "fold"),
      "19": z("g19-burial-ground", "tower"), "21": z("g21-earth-ring", "ring"), "22": z("g22-herbwifes-cottage", "herbwife"),
      "NW": z("g21-earth-ring", "ring"), "N": z("g21-earth-ring", "ring"), "E": z("g21-earth-ring", "ring"),
      "SE": z("g21-earth-ring", "ring"), "aperture": z("s1-aperture-and-ramp", "stage1")
    },
    "map-greybank-players": {
      "1": z(null, "store"), "2": z(null, "cart"), "3": z(null, "smithy"), "4": z(null, "millside"),
      "5": z(null, "shrine"), "6": z(null, "moot"), "7": z(null, "quarry")
    },
    "map-g14-the-quarry": { "4": z("s1-aperture-and-ramp", "stage1", true) },
    "map-z11-hagsfoot-moor-dm": { "1": z("s16-broken-quarter", "stage4", true) },
    "map-z17-the-old-delving": { "1": z("s12-kettlerock-gate", "stage3", true) },
    "map-marrowward-section-dm": {
      "I": z("s1-aperture-and-ramp", "stage1"), "II": z("s5-lock-gallery", "stage2"), "8": z("s8-drowned-stair", "stage2"),
      "9": z("s9-transit-ring-south", "stage3"), "10": z("s10-long-gallery", "stage3"),
      "12": z("s12-kettlerock-gate", "stage3"), "IV": z("s15-ward-heart", "stage4"), "16": z("s16-broken-quarter", "stage4")
    },
    "map-marrowward-stage-1-dm": { "1": z("s1-aperture-and-ramp"), "2": z("s2-muster-floor"), "3": z("s3-anchor-room"), "4": z("s4-watch-chamber") },
    "map-marrowward-stage-2-dm": { "5": z("s5-lock-gallery"), "5a": z("lockkeepers-cell"), "7": z("s7-sluice-hall"), "8": z("s8-drowned-stair"),
      "6a": z("s6-the-workshops"), "6b": z("s6-the-workshops"), "6c": z("s6-the-workshops"), "6d": z("s6-the-workshops", "stage2") },
    "map-marrowward-stage-3-dm": { "9": z("s9-transit-ring-south"), "10": z("s10-long-gallery"), "11": z("s11-deterrent-gallery"), "12": z("s12-kettlerock-gate", "delving") },
    "map-marrowward-stage-4-dm": { "13": z("s13-approach-of-names"), "14": z("s14-sentinels-walk"), "15": z("s15-ward-heart"), "16": z("s16-broken-quarter", "moor") }
  };

  /* ---------------------------------------------------------------- helpers */
  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (text !== undefined) n.textContent = text;
    return n;
  }
  var ENT = {};
  (window.ENTITIES || []).forEach(function (e) { ENT[e.id] = e; });
  function players() { return document.body.classList.contains("view-players"); }
  function firstSentence(t) {
    t = (t || "").replace(/<[^>]+>/g, "");
    var m = /^[\s\S]*?[.!?](?=\s|$)/.exec(t);
    return m ? m[0] : t;
  }
  function variants(placeId) {
    var p = PLACES[placeId];
    return p.maps.filter(function (v) { return !(players() && MAP[v[0]].who === "dm"); });
  }
  function reachable(placeId) { return !!PLACES[placeId] && variants(placeId).length > 0; }
  function hashFor(placeId, mapId) { return "#" + placeId + (mapId ? "/" + mapId : ""); }
  function go(placeId, mapId) {
    hideNow();
    var h = hashFor(placeId, mapId);
    if (location.hash === h) show(); else location.hash = h;
  }

  /* The row of map choices: one thumbnail per variant. */
  function choices(placeId) {
    var list = variants(placeId), box = el("div", { class: "we-variants" });
    if (!list.length) return null;
    box.appendChild(el("p", { class: "we-pop-label" }, list.length > 1 ? "Choose a map:" : "Zoom to map:"));
    var row = el("div", { class: "we-thumbs" });
    list.forEach(function (v) {
      var name = list.length > 1 || PLACES[placeId].maps.length > 1 ? v[1] : PLACES[placeId].name;
      var b = el("button", { type: "button", class: "we-thumb" });
      b.appendChild(el("img", { src: IMG + MAP[v[0]].file, alt: "" }));
      b.appendChild(el("strong", {}, name));
      if (v[2]) b.appendChild(el("span", {}, v[2]));
      b.addEventListener("click", function () { go(placeId, v[0]); });
      row.appendChild(b);
    });
    box.appendChild(row);
    return box;
  }

  /* ---------------------------------------------------------------- popup */
  var pop = el("div", { class: "we-pop", role: "dialog", hidden: "" });
  document.body.appendChild(pop);
  var hideTimer = null, pinned = null;

  function hideNow() { pop.hidden = true; pinned = null; clearTimeout(hideTimer); }
  function hideSoon() {
    if (pinned) return;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideNow, 350);
  }
  pop.addEventListener("mouseenter", function () { clearTimeout(hideTimer); });
  pop.addEventListener("mouseleave", hideSoon);
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") hideNow(); });
  document.addEventListener("click", function (ev) {
    if (!pop.hidden && !pop.contains(ev.target) && !(pinned && pinned.contains(ev.target))) hideNow();
  });

  function openPop(anchor, fill) {
    clearTimeout(hideTimer);
    pop.innerHTML = "";
    var x = el("button", { type: "button", class: "we-pop-close", "aria-label": "Close" }, "✕");
    x.addEventListener("click", hideNow);
    pop.appendChild(x);
    fill(pop);
    pop.hidden = false;
    place_();
    /* thumbnails change the height once they load */
    Array.prototype.forEach.call(pop.querySelectorAll("img"), function (i) { i.addEventListener("load", place_); });
    function place_() {
      var r = anchor.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
      var left = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), window.innerWidth - w - 8);
      var top = r.bottom + 6;
      if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 6);
      pop.style.left = left + "px";
      pop.style.top = top + "px";
    }
  }

  function hover(node, fill) {
    node.addEventListener("mouseenter", function () { if (!pinned) openPop(node, fill); });
    node.addEventListener("mouseleave", hideSoon);
    node.addEventListener("focus", function () { if (!pinned) openPop(node, fill); });
  }
  function pin(node, fill) { openPop(node, fill); pinned = node; }

  /* ---------------------------------------------------------------- spots */
  function keyRow(m, label) {
    for (var i = 0; i < m.key.length; i++) {
      var k = m.key[i][0];
      if (!k) continue;
      if (k === label) return m.key[i];
      if (k.split(/\s+/).indexOf(label) >= 0) return m.key[i];
      if (k === "W1–W3" && /^W[123]$/.test(label)) return m.key[i];
      if (k === "6a–6d" && /^6[a-d]$/.test(label)) return m.key[i];
    }
    return null;
  }

  function spotInfo(m, mark) {
    var label = mark[0], o = mark[3] || {};
    var s = (SPOTS[m.id] || {})[label] || {};
    var row = keyRow(m, label);
    var secret = players();
    var ent = !secret && s.e && !(s.dm && secret) ? ENT[s.e] : null;
    var to = s.to && !(secret && s.dm) && reachable(s.to) && s.to !== current.place ? s.to : null;
    var text = row ? row[1] : "";
    var title = ent ? ent.name : text || label;
    if (!ent && !text && !secret) title = label;
    return { label: label, ent: ent, to: to, row: row, title: title, hidden: secret && o.dm };
  }

  function spotPopup(m, info) {
    return function (box) {
      box.appendChild(el("p", { class: "we-pop-name" }, info.title));
      if (info.ent) {
        if (info.ent.tag) box.appendChild(el("p", { class: "we-pop-tag" }, info.ent.tag));
        box.appendChild(el("p", {}, firstSentence(info.ent.summary)));
      }
      if (info.row) {
        if (info.row[1] && info.row[1] !== info.title) box.appendChild(el("p", { class: "we-pop-key" }, info.label + " · " + info.row[1]));
        if (info.row[2] && !players()) box.appendChild(el("p", { class: "we-pop-dm" }, "DM: " + info.row[2]));
      }
      if (info.ent) box.appendChild(el("a", { class: "btn btn-sm", href: info.ent.href, target: "_blank", rel: "noopener" }, "Open page ↗"));
      if (info.to) { var c = choices(info.to); if (c) box.appendChild(c); }
    };
  }

  function wireSpot(g, m, mark) {
    var info = spotInfo(m, mark);
    if (info.hidden || (!info.ent && !info.to && !info.row)) return;
    var NS = "http://www.w3.org/2000/svg";
    var s = Math.min(m.w, m.h) / 1000;
    var hit = document.createElementNS(NS, "circle");
    hit.setAttribute("cx", mark[1]); hit.setAttribute("cy", mark[2]);
    hit.setAttribute("r", 34 * s); hit.setAttribute("class", "we-hit");
    g.appendChild(hit);
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", info.title);
    g.classList.add("we-spot");
    if (info.to) g.classList.add("we-zoomable");
    var fill = spotPopup(m, info);
    hover(g, fill);
    function activate(ev) {
      ev.stopPropagation();
      /* A mouse click on a point with a page opens the page in a new tab. A tap
         (no hover) only pins the card, which carries the same link. */
      if (info.ent && ev.pointerType !== "touch") window.open(info.ent.href, "_blank", "noopener");
      else if (info.to && variants(info.to).length === 1 && ev.pointerType !== "touch") go(info.to);
      pin(g, fill);
    }
    g.addEventListener("click", activate);
    g.addEventListener("keydown", function (ev) { if (ev.key === "Enter") activate(ev); });
  }

  /* ---------------------------------------------------------------- edges */
  var SIDE = { n: ["↑", "North"], s: ["↓", "South"], e: ["→", "East"], w: ["←", "West"], up: ["⤒", "Up"], down: ["⤓", "Down"] };

  function edgeButton(link) {
    var side = link[0], to = link[1], time = link[2], target = PLACES[to];
    var b = el("button", { type: "button", class: "we-edge" });
    b.appendChild(el("span", { class: "we-arrow", "aria-label": SIDE[side][1] }, SIDE[side][0]));
    b.appendChild(el("strong", {}, target.name));
    b.appendChild(el("span", { class: "we-time" }, time));
    function fill(box) {
      box.appendChild(el("p", { class: "we-pop-name" }, target.name));
      box.appendChild(el("p", { class: "we-pop-tag" }, SIDE[side][1] + " · " + time));
      var ent = !players() && ENT[target.entity];
      if (ent) {
        box.appendChild(el("p", {}, firstSentence(ent.summary)));
        box.appendChild(el("a", { class: "btn btn-sm", href: ent.href, target: "_blank", rel: "noopener" }, "Open page ↗"));
      }
      var c = choices(to); if (c) box.appendChild(c);
    }
    hover(b, fill);
    b.addEventListener("click", function (ev) {
      ev.stopPropagation();
      if (variants(to).length > 1) pin(b, fill); else go(to);
    });
    return b;
  }

  /* ---------------------------------------------------------------- render */
  var current = { place: START, map: null };

  function parseHash() {
    var parts = (location.hash || "").replace(/^#/, "").split("/");
    var p = reachable(parts[0]) ? parts[0] : START;
    var list = variants(p);
    var m = list.filter(function (v) { return v[0] === parts[1]; })[0] || list[0];
    return { place: p, map: m[0] };
  }

  function show() {
    hideNow();
    current = parseHash();
    var p = PLACES[current.place], m = MAP[current.map];
    host.innerHTML = "";

    /* breadcrumb */
    var trail = [], q = p;
    while (q) { trail.unshift(q); q = q.parent ? PLACES[q.parent] : null; }
    var nav = el("nav", { class: "we-crumbs", "aria-label": "Where you are" });
    if (p.parent) {
      var up = el("button", { type: "button", class: "btn btn-sm" }, "⤺ Zoom out");
      up.addEventListener("click", function () { go(p.parent); });
      nav.appendChild(up);
    }
    trail.forEach(function (t, i) {
      if (i) nav.appendChild(el("span", {}, "›"));
      if (t === p) nav.appendChild(el("strong", {}, t.name));
      else nav.appendChild(el("a", { href: hashFor(t.id) }, t.name));
    });
    if (current.place !== "marrowward" && !players()) nav.appendChild(el("a", { href: "#marrowward", class: "we-jump" }, "Marrowward ⤓"));
    host.appendChild(nav);

    /* variant switch */
    var list = variants(current.place);
    if (list.length > 1) {
      var bar = el("div", { class: "we-switch" });
      list.forEach(function (v) {
        var b = el("button", { type: "button", class: "btn btn-sm" + (v[0] === current.map ? " btn-primary" : ""),
                               "aria-pressed": String(v[0] === current.map) }, v[1]);
        b.title = v[2];
        b.addEventListener("click", function () { go(current.place, v[0]); });
        bar.appendChild(b);
      });
      var now = list.filter(function (v) { return v[0] === current.map; })[0];
      bar.appendChild(el("span", { class: "we-when" }, now[2]));
      host.appendChild(bar);
    }

    /* the frame: edges around the picture */
    var frame = el("div", { class: "we-frame" });
    var sides = {};
    ["n", "w", "e", "s"].forEach(function (s) { sides[s] = el("div", { class: "we-side we-" + s }); });
    p.links.forEach(function (l) {
      var o = l[3] || {};
      if ((o.dm && players()) || !reachable(l[1])) return;
      var where = l[0] === "up" ? "n" : l[0] === "down" ? "s" : l[0];
      sides[where].appendChild(edgeButton(l));
    });
    var stage = el("div", { class: "we-stage" });
    var svg = BM.buildMapSvg(m);
    var v = m.view || [0, 0, m.w, m.h];
    stage.style.aspectRatio = v[2] + " / " + v[3];
    stage.style.maxWidth = "calc(76vh * " + (v[2] / v[3]).toFixed(3) + ")";
    stage.appendChild(svg);
    Array.prototype.forEach.call(svg.querySelectorAll(".map-mark"), function (g, i) { wireSpot(g, m, m.marks[i]); });
    frame.appendChild(sides.n);
    frame.appendChild(sides.w);
    frame.appendChild(stage);
    frame.appendChild(sides.e);
    frame.appendChild(sides.s);
    host.appendChild(frame);

    var ent = !players() && p.entity && ENT[p.entity];
    var foot = el("p", { class: "we-foot" });
    foot.appendChild(el("span", {}, m.desc + " "));
    if (ent) foot.appendChild(el("a", { href: ent.href, target: "_blank", rel: "noopener" }, "Open the page for " + ent.name + " ↗"));
    foot.appendChild(el("a", { href: "09-maps.html#" + m.id, target: "_blank", rel: "noopener" }, "Full key ↗"));
    host.appendChild(foot);
    document.title = p.name + " — World explorer";
  }

  window.addEventListener("hashchange", show);
  /* "Players only" is toggled by app.js after this runs: redraw when it flips. */
  var was = players();
  new MutationObserver(function () {
    if (players() !== was) { was = players(); show(); }
  }).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  show();

  window.BM.explorer = { places: PLACES, spots: SPOTS };
})();
