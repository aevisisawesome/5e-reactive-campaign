/* ==========================================================================
   The Broken March — Interactive DM Guide
   assets/app.js — the framework

   Built by chunk G0. Loaded last on every page:
       app.css → entities.js → state.js → app.js

   Contents
     1. Page registry and small helpers
     2. Theme
     3. Chrome: top bar, sidebar TOC, deadlines strip
     4. Search
     5. Auto-linker
     6. Preview cards (hover, focus, touch)
     7. Entity navigation and "back to where I was"
     8. Placeholders and the pending-content report
    8b. Spoiler gate
     9. Images
    10. Tables
    11. Boot

   Offline: no fetch, no CDN, no remote font. Everything here runs from
   file:// with the network off.
   ========================================================================== */

var BM = window.BM || {};

(function () {
  "use strict";

  /* ======================================================================
     1. Page registry and helpers
     ====================================================================== */

  /* The six content pages plus the hub. Every file exists from G0 onward —
     the ones with `built: false` are stubs that say which chunk writes them,
     so no link in the guide ever lands on a missing file. The chunk that
     produces a page flips its flag to true. */
  var PAGES = [
    { file: "index.html",                      label: "Hub",              part: "Hub",            chunk: "G0", built: true  },
    { file: "01-introduction.html",            label: "Introduction",     part: "Part 0 + 1",     chunk: "G2", built: true  },
    { file: "02-background.html",              label: "Background",       part: "Part 2 + 3",     chunk: "G3", built: true  },
    { file: "03-session-one.html",             label: "Session One",      part: "Part 4",         chunk: "G4", built: true  },
    { file: "04-reference-people-places.html", label: "People & Places",  part: "Part 5.1–5.3",   chunk: "G5", built: true  },
    { file: "05-reference-props.html",         label: "Dungeon & Props",  part: "Part 5.4–5.9",   chunk: "G6", built: false },
    { file: "06-after-session-one.html",       label: "After Session One",part: "Part 6",         chunk: "G7", built: false }
  ];

  function pageFor(file) {
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].file === file) return PAGES[i];
    return null;
  }

  function currentFile() {
    var p = location.pathname.split("/").pop();
    return p && p.length ? decodeURIComponent(p) : "index.html";
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) {
      if (typeof c === "string") n.appendChild(document.createTextNode(c));
      else if (c) n.appendChild(c);
    });
    return n;
  }

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  function reducedMotion() {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
    catch (e) { return false; }
  }

  function coarsePointer() {
    try { return window.matchMedia("(pointer: coarse)").matches; }
    catch (e) { return false; }
  }

  function headerOffset() {
    var bar = $(".topbar");
    return (bar ? bar.offsetHeight : 0) + 12;
  }

  /* ======================================================================
     2. Theme
     ====================================================================== */

  var THEME_KEY = "broken-march-theme";
  var THEME_ORDER = ["auto", "light", "dark"];
  var THEME_LABEL = { auto: "Theme: Auto", light: "Theme: Light", dark: "Theme: Dark" };

  function readTheme() {
    try {
      var v = window.localStorage.getItem(THEME_KEY);
      return THEME_ORDER.indexOf(v) >= 0 ? v : "auto";
    } catch (e) { return "auto"; }
  }

  function writeTheme(v) {
    try { window.localStorage.setItem(THEME_KEY, v); } catch (e) { /* opaque origin */ }
    if (BM.State) { try { BM.State.set("ui.theme", v); } catch (e) {} }
  }

  function applyTheme(v) {
    if (v === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", v);
  }

  /* Applied as early as possible — this file runs at the end of <body>. */
  applyTheme(readTheme());

  function themeButton() {
    var v = readTheme();
    var btn = el("button", {
      class: "btn btn-sm btn-icon theme-toggle", type: "button",
      "aria-label": THEME_LABEL[v], title: THEME_LABEL[v] + " — click to change"
    }, [v === "dark" ? "◑" : v === "light" ? "○" : "◐"]);
    btn.addEventListener("click", function () {
      var next = THEME_ORDER[(THEME_ORDER.indexOf(readTheme()) + 1) % THEME_ORDER.length];
      writeTheme(next);
      applyTheme(next);
      btn.textContent = next === "dark" ? "◑" : next === "light" ? "○" : "◐";
      btn.setAttribute("aria-label", THEME_LABEL[next]);
      btn.setAttribute("title", THEME_LABEL[next] + " — click to change");
    });
    return btn;
  }

  /* ======================================================================
     3. Chrome — top bar, sidebar TOC
     ====================================================================== */

  function buildTopbar() {
    var host = $("[data-topbar]");
    if (!host) return;

    var here = currentFile();

    var brand = el("a", { class: "brand", href: "index.html" }, [
      document.createTextNode("The Broken March"),
      el("small", { text: "Interactive DM Guide" })
    ]);

    var nav = el("nav", { class: "nav", "aria-label": "Guide sections" });
    PAGES.forEach(function (p) {
      var a = el("a", {
        href: p.file,
        text: p.label,
        class: p.built ? null : "is-pending",
        title: p.built ? p.part : p.part + " — not written yet, built by chunk " + p.chunk
      });
      if (p.file === here) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });

    var tools = el("div", { class: "topbar-tools" }, [
      buildSearch(),
      tocToggle(),
      themeButton()
    ]);

    host.appendChild(el("div", { class: "topbar-inner" }, [brand, nav, tools]));
    host.classList.add("topbar");
  }

  function tocToggle() {
    var btn = el("button", {
      class: "btn btn-sm toc-toggle", type: "button",
      "aria-expanded": "false", text: "Contents"
    });
    btn.addEventListener("click", function () {
      var sb = $(".sidebar");
      if (!sb) return;
      var open = sb.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    return btn;
  }

  function buildTOC() {
    var host = $("[data-toc]");
    if (!host) return;
    host.classList.add("sidebar");
    host.innerHTML = "";

    /* A heading inside a hidden spoiler must not appear in the contents list —
       otherwise turning the screen to a player still shows them the answer. */
    /* Directory entries carry their id on the <article>, not the heading —
       a 74-record reference page needs them in the contents list. */
    var heads = $$("main h2[id], main h3[id], main article.entry[id] > h3")
      .filter(function (h) {
        var body = h.closest(".spoiler-body");
        return !body || body.getAttribute("aria-hidden") !== "true";
      });
    if (!heads.length) { host.style.display = "none"; return; }
    host.style.display = "";

    var list = el("ol");
    heads.forEach(function (h) {
      var entry = h.parentElement && h.parentElement.classList.contains("entry")
        ? h.parentElement : null;
      var target = entry ? entry.id : h.id;
      var label = h.getAttribute("data-toc-label");
      if (!label) {
        /* Drop the trailing role/tag chip from a directory heading. */
        var tag = $(".entry-tag", h);
        label = tag ? h.textContent.replace(tag.textContent, "") : h.textContent;
      }
      var a = el("a", {
        href: "#" + target,
        class: (entry || h.tagName === "H3") ? "lvl-3" : "lvl-2",
        text: label.trim()
      });
      list.appendChild(el("li", {}, [a]));
    });

    host.appendChild(el("h2", { text: "On this page" }));
    host.appendChild(list);

    /* Scroll spy */
    if ("IntersectionObserver" in window) {
      var links = {};
      $$("a", list).forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var a = links[e.target.id];
          if (a && e.isIntersecting) {
            $$("a.is-current", list).forEach(function (n) { n.classList.remove("is-current"); });
            a.classList.add("is-current");
          }
        });
      }, { rootMargin: "-" + headerOffset() + "px 0px -70% 0px", threshold: 0 });
      heads.forEach(function (h) { io.observe(h); });
    }
  }

  /* ======================================================================
     4. Search — the registry by name, alias and tag
     ====================================================================== */

  var searchInput = null;

  function buildSearch() {
    var wrap = el("div", { class: "search-wrap" });
    var input = el("input", {
      class: "search-input", type: "search", id: "bm-search",
      placeholder: "Search people, places, terms…  /",
      autocomplete: "off", "aria-label": "Search the guide",
      "aria-expanded": "false", "aria-controls": "bm-search-results", role: "combobox"
    });
    var results = el("div", { class: "search-results", id: "bm-search-results", role: "listbox" });
    wrap.appendChild(input);
    wrap.appendChild(results);
    searchInput = input;

    var active = -1;

    function close() {
      results.classList.remove("open");
      results.innerHTML = "";
      input.setAttribute("aria-expanded", "false");
      active = -1;
    }

    function render(list, q) {
      results.innerHTML = "";
      if (!list.length) {
        results.appendChild(el("div", { class: "sr-empty",
          text: "Nothing in the registry matches “" + q + "”." }));
      } else {
        list.forEach(function (e, i) {
          var a = el("a", { class: "sr-item", href: hrefFor(e), role: "option",
                            "data-ent": e.id, id: "sr-" + i });
          a.appendChild(document.createTextNode(e.name));
          a.appendChild(el("span", { class: "sr-tag", text: e.tag }));
          a.addEventListener("click", function (ev) {
            ev.preventDefault();
            close();
            input.blur();
            goToEntity(e);
          });
          results.appendChild(a);
        });
      }
      results.classList.add("open");
      input.setAttribute("aria-expanded", "true");
      active = -1;
    }

    function run() {
      var q = input.value.trim();
      if (q.length < 1) { close(); return; }
      render(searchEntities(q), q);
    }

    input.addEventListener("input", run);
    input.addEventListener("focus", function () { if (input.value.trim()) run(); });

    input.addEventListener("keydown", function (ev) {
      var items = $$(".sr-item", results);
      if (ev.key === "Escape") { close(); input.blur(); return; }
      if (!items.length) {
        if (ev.key === "Enter") ev.preventDefault();
        return;
      }
      if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
        ev.preventDefault();
        items.forEach(function (n) { n.classList.remove("is-active"); });
        active += (ev.key === "ArrowDown" ? 1 : -1);
        if (active < 0) active = items.length - 1;
        if (active >= items.length) active = 0;
        items[active].classList.add("is-active");
        input.setAttribute("aria-activedescendant", items[active].id);
      } else if (ev.key === "Enter") {
        ev.preventDefault();
        items[active >= 0 ? active : 0].click();
      }
    });

    document.addEventListener("click", function (ev) {
      if (!wrap.contains(ev.target)) close();
    });

    return wrap;
  }

  function searchEntities(q) {
    var needle = q.toLowerCase();
    var scored = [];
    (window.ENTITIES || []).forEach(function (e) {
      var hay = [e.name].concat(e.aliases || []);
      var best = 99;
      hay.forEach(function (h) {
        var i = h.toLowerCase().indexOf(needle);
        if (i === 0) best = Math.min(best, 0);
        else if (i > 0) best = Math.min(best, 1);
      });
      if (best === 99 && (e.tag || "").toLowerCase().indexOf(needle) >= 0) best = 2;
      if (best === 99 && (e.type || "").toLowerCase().indexOf(needle) >= 0) best = 3;
      if (best < 99) scored.push({ e: e, s: best });
    });
    scored.sort(function (a, b) {
      if (a.s !== b.s) return a.s - b.s;
      return a.e.name.localeCompare(b.e.name);
    });
    return scored.slice(0, 12).map(function (x) { return x.e; });
  }

  /* ======================================================================
     5. Auto-linker
     ====================================================================== */

  var byId = {};          /* id -> entity                                   */
  var byText = {};        /* lowercase surface form -> [{entity, alias}]     */
  var matcher = null;     /* one regex, longest alternative first           */

  var EXCLUDE_SEL = "h1, h2, h3, h4, h5, h6, a, code, pre, kbd, samp, " +
                    ".readaloud, .tbd, .nolink, .glossary, .statblock h3, " +
                    ".cite, .src, .art-frame, .callout-title, .part-label, " +
                    ".ent-preview, .search-results, .state-panel, .sidebar, .topbar";

  function buildIndex() {
    var forms = [];
    (window.ENTITIES || []).forEach(function (e) {
      byId[e.id] = e;
      [e.name].concat(e.aliases || []).forEach(function (s) {
        if (!s) return;
        var k = norm(s).toLowerCase();
        (byText[k] = byText[k] || []).push({ entity: e, alias: norm(s) });
        forms.push(s);
      });
    });
    if (!forms.length) return;

    /* Longest match wins. Any run of whitespace in a name matches any run in
       the page — HTML source wraps lines, and "Illefarn Instability" is
       routinely split across two of them. */
    forms.sort(function (a, b) { return b.length - a.length; });
    var seen = {};
    var alts = [];
    forms.forEach(function (s) {
      var k = norm(s).toLowerCase();
      if (seen[k]) return;
      seen[k] = true;
      alts.push(escapeRe(s).replace(/\s+/g, "\\s+"));
    });
    matcher = new RegExp("(" + alts.join("|") + ")", "gi");
  }

  /* Collapse whitespace, so a name split over a line break still resolves. */
  function norm(s) { return String(s).replace(/\s+/g, " "); }

  /* Proper nouns are case-sensitive, but the case of a leading article is
     not — prose says "the Fold" where the registry says "The Fold". */
  function surfaceMatches(alias, surface) {
    if (alias === surface) return true;
    var a = alias.replace(/^the\s+/i, "");
    var b = surface.replace(/^the\s+/i, "");
    return a !== alias && b !== surface && a === b;
  }

  /* A word character for boundary purposes. Hyphens and apostrophes count,
     so "watch" does not match inside "Watch-Glass". */
  function isWordChar(c) {
    return !!c && /[A-Za-z0-9'’\-]/.test(c);
  }

  function excludedAncestor(node) {
    var p = node.parentElement;
    return p ? p.closest(EXCLUDE_SEL) : null;
  }

  function ownEntryFor(node) {
    var p = node.parentElement;
    var host = p ? p.closest("[data-entity-entry]") : null;
    return host ? host.getAttribute("data-entity-entry") : null;
  }

  function autoLink() {
    if (!matcher) return;
    var root = $("main");
    if (!root) return;

    /* Collect first — the DOM is rewritten as we go. */
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.length < 3) return NodeFilter.FILTER_REJECT;
        if (!/\S/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (excludedAncestor(n)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);

    var seenPerSection = new WeakMap();
    var docSeen = {};                    /* text outside any <section> */

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      matcher.lastIndex = 0;
      var m, out = null, last = 0;

      var host = node.parentElement ? node.parentElement.closest("section") : null;
      var seen;
      if (host) {
        seen = seenPerSection.get(host);
        if (!seen) { seen = {}; seenPerSection.set(host, seen); }
      } else {
        seen = docSeen;
      }
      var ownEntry = ownEntryFor(node);

      while ((m = matcher.exec(text)) !== null) {
        var start = m.index, endAt = start + m[0].length;
        if (isWordChar(text.charAt(start - 1)) || isWordChar(text.charAt(endAt))) continue;

        var surface = norm(m[0]);
        var cands = byText[surface.toLowerCase()] || [];
        var picked = null;
        for (var i = 0; i < cands.length; i++) {
          var c = cands[i];
          if (c.entity.type === "term" || surfaceMatches(c.alias, surface)) {
            picked = c.entity;
            break;
          }
        }
        if (!picked) continue;
        if (seen[picked.id]) continue;
        if (ownEntry && ownEntry === picked.id) continue;

        seen[picked.id] = true;
        if (!out) out = document.createDocumentFragment();
        if (start > last) out.appendChild(document.createTextNode(text.slice(last, start)));
        out.appendChild(makeLink(picked, m[0]));
        last = endAt;
      }

      if (out) {
        if (last < text.length) out.appendChild(document.createTextNode(text.slice(last)));
        node.parentNode.replaceChild(out, node);
      }
    });
  }

  function makeLink(entity, surface) {
    var a = el("a", {
      class: "ent",
      "data-ent": entity.id,
      "data-type": entity.type,
      href: hrefFor(entity),
      text: surface
    });
    return a;
  }

  /* Entity hrefs are page-qualified and every page file exists, so a link
     into a chunk that has not run yet lands on that page's stub, which says
     so — and, from the hash, says which entry was wanted. */
  function hrefFor(entity) {
    return entity.href || "";
  }

  /* ======================================================================
     6. Preview cards — one card, reparented and repositioned. Never stacks.
     ====================================================================== */

  var card = null, cardName, cardTag, cardSum, cardChip, cardGo;
  var openFor = null;            /* the link the card currently describes */
  var inTimer = null, outTimer = null;
  var overCard = false;

  function ensureCard() {
    if (card) return card;
    cardChip = el("span", { class: "chip" });
    cardName = el("p", { class: "pv-name" });
    cardTag  = el("p", { class: "pv-tag" });
    cardSum  = el("p", { class: "pv-sum" });
    cardGo   = el("button", { class: "btn btn-sm btn-primary pv-go", type: "button",
                              text: "Go to entry →" });
    card = el("div", { class: "ent-preview", id: "ent-preview", role: "tooltip" },
              [cardChip, cardName, cardTag, cardSum, cardGo]);

    card.addEventListener("mouseenter", function () { overCard = true; clearTimeout(outTimer); });
    card.addEventListener("mouseleave", function () { overCard = false; scheduleClose(); });
    cardGo.addEventListener("click", function () {
      var link = openFor;
      closeCard();
      if (link) goToEntity(byId[link.getAttribute("data-ent")], link);
    });

    document.body.appendChild(card);
    return card;
  }

  function fillCard(e) {
    ensureCard();
    cardChip.textContent = e.type;
    cardChip.className = "chip chip-" + e.type;
    cardName.textContent = e.name;
    cardTag.textContent = e.tag || "";
    cardTag.style.display = e.tag ? "" : "none";
    cardSum.innerHTML = e.summary || "";
  }

  function positionCard(link) {
    var r = link.getBoundingClientRect();
    var cw = card.offsetWidth, ch = card.offsetHeight;
    var sx = window.pageXOffset, sy = window.pageYOffset;
    var pad = 8;

    var top;
    if (r.top - ch - pad >= pad) top = r.top + sy - ch - pad;          /* prefer above */
    else top = r.bottom + sy + pad;                                     /* flip below  */

    var left = r.left + sx + (r.width / 2) - (cw / 2);
    var minL = sx + pad, maxL = sx + document.documentElement.clientWidth - cw - pad;
    if (left < minL) left = minL;
    if (left > maxL) left = Math.max(minL, maxL);

    card.style.top = Math.round(top) + "px";
    card.style.left = Math.round(left) + "px";
  }

  function showCard(link, touch) {
    var e = byId[link.getAttribute("data-ent")];
    if (!e) return;
    clearTimeout(outTimer);
    if (openFor && openFor !== link) hardClose();
    fillCard(e);
    card.classList.toggle("touch", !!touch);
    card.setAttribute("role", touch ? "dialog" : "tooltip");
    card.classList.add("open");
    openFor = link;
    link.setAttribute("aria-describedby", "ent-preview");
    positionCard(link);          /* measure after it is displayed */
    positionCard(link);
  }

  function scheduleOpen(link, touch) {
    clearTimeout(inTimer);
    inTimer = setTimeout(function () { showCard(link, touch); }, 250);
  }

  function scheduleClose() {
    clearTimeout(outTimer);
    outTimer = setTimeout(function () { if (!overCard) closeCard(); }, 150);
  }

  function closeCard() {
    clearTimeout(inTimer);
    hardClose();
  }

  function hardClose() {
    if (!card) return;
    card.classList.remove("open", "touch");
    if (openFor) openFor.removeAttribute("aria-describedby");
    openFor = null;
    overCard = false;
  }

  function wirePreviews() {
    var touch = coarsePointer();

    document.addEventListener("mouseover", function (ev) {
      var link = ev.target.closest ? ev.target.closest("a.ent") : null;
      if (!link || touch) return;
      scheduleOpen(link, false);
    });

    document.addEventListener("mouseout", function (ev) {
      var link = ev.target.closest ? ev.target.closest("a.ent") : null;
      if (!link || touch) return;
      clearTimeout(inTimer);
      scheduleClose();
    });

    document.addEventListener("focusin", function (ev) {
      var link = ev.target.closest ? ev.target.closest("a.ent") : null;
      if (link) scheduleOpen(link, touch);
    });
    document.addEventListener("focusout", function (ev) {
      var link = ev.target.closest ? ev.target.closest("a.ent") : null;
      if (link) { clearTimeout(inTimer); scheduleClose(); }
    });

    /* Click: coarse pointers preview first, then navigate. */
    document.addEventListener("click", function (ev) {
      var link = ev.target.closest ? ev.target.closest("a.ent") : null;
      if (!link) {
        if (card && card.classList.contains("open") && !card.contains(ev.target)) closeCard();
        return;
      }
      var e = byId[link.getAttribute("data-ent")];
      if (!e) return;

      if (touch && openFor !== link) {
        ev.preventDefault();
        clearTimeout(inTimer);
        showCard(link, true);
        return;
      }
      ev.preventDefault();
      closeCard();
      goToEntity(e, link);
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && openFor) {
        var link = openFor;
        closeCard();
        if (link && link.focus) link.focus();
      }
    });

    window.addEventListener("scroll", function () {
      if (openFor) closeCard();
    }, { passive: true });

    window.addEventListener("resize", function () {
      if (openFor) positionCard(openFor);
    });
  }

  /* ======================================================================
     7. Entity navigation, history, "back to where I was"
     ====================================================================== */

  var backBtn = null;

  function ensureBackBtn() {
    if (backBtn) return backBtn;
    backBtn = el("button", { class: "btn backjump no-print", type: "button",
                             text: "← Back to where I was" });
    backBtn.addEventListener("click", function () { history.back(); });
    document.body.appendChild(backBtn);
    return backBtn;
  }

  function goToEntity(e, fromLink) {
    if (!e) return;
    var href = hrefFor(e);
    var parts = href.split("#");
    var file = parts[0], hash = parts[1] || "";

    if (file && file !== currentFile()) { location.href = href; return; }

    var target = hash ? document.getElementById(hash) : null;
    if (!target) {
      /* The anchor is not on this page yet — the chunk that owns it has not
         run. Say so rather than doing nothing. */
      flash(fromLink, "no-target");
      recordUnresolved(e);
      return;
    }
    jumpTo(target);
  }

  function jumpTo(target) {
    /* Remember where we were, on the entry we are leaving. */
    try {
      history.replaceState({ bmScroll: window.pageYOffset }, "");
      history.pushState({ bmJump: true }, "", "#" + target.id);
    } catch (err) { /* file:// in some browsers refuses pushState */ }

    var y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset();
    window.scrollTo({ top: y, behavior: reducedMotion() ? "auto" : "smooth" });

    target.classList.remove("ent-target-flash");
    void target.offsetWidth;
    target.classList.add("ent-target-flash");
    setTimeout(function () { target.classList.remove("ent-target-flash"); }, 1800);

    ensureBackBtn().classList.add("show");
  }

  /* The browser resolves #hash at parse time, but the auto-linker, the image
     frames and the table wrappers all reflow the page afterwards — on a long
     directory that leaves the reader at the top instead of at the entry they
     followed a link to. Re-settle once layout is final. */
  function settleHash() {
    var id = (location.hash || "").replace(/^#/, "");
    if (!id) return;
    var t = document.getElementById(id);
    if (!t) return;
    /* Never scroll to something inside a gate that is still closed. */
    var gated = t.closest ? t.closest(".spoiler-body") : null;
    if (gated && gated.getAttribute("aria-hidden") === "true") return;
    var y = t.getBoundingClientRect().top + window.pageYOffset - headerOffset();
    if (Math.abs(window.pageYOffset - y) < 4) return;
    window.scrollTo({ top: y, behavior: "auto" });
    t.classList.add("ent-target-flash");
    setTimeout(function () { t.classList.remove("ent-target-flash"); }, 1800);
  }

  function flash(node, why) {
    if (!node) return;
    node.setAttribute("data-flash", why);
    setTimeout(function () { node.removeAttribute("data-flash"); }, 1200);
  }

  var unresolved = [];
  function recordUnresolved(e) {
    if (unresolved.indexOf(e.id) < 0) unresolved.push(e.id);
  }

  function wireHistory() {
    window.addEventListener("popstate", function (ev) {
      var st = ev.state;
      if (st && typeof st.bmScroll === "number") {
        window.scrollTo({ top: st.bmScroll, behavior: reducedMotion() ? "auto" : "smooth" });
      }
      if (backBtn) backBtn.classList.remove("show");
    });
  }

  /* ======================================================================
     8. Placeholders and the pending-content report
     ====================================================================== */

  var pending = [];

  function renderPlaceholders() {
    $$(".tbd").forEach(function (box, i) {
      var owner = box.getAttribute("data-owner") || "unassigned";
      var topic = box.getAttribute("data-topic") || "";
      if (!box.id) box.id = "tbd-" + (i + 1);

      if (!$(".tbd-head", box)) {
        var body = el("div", { class: "tbd-body" });
        while (box.firstChild) body.appendChild(box.firstChild);
        var head = el("div", { class: "tbd-head" }, [
          el("span", { class: "tbd-badge", text: "Pending" }),
          el("span", { class: "tbd-owner", text: owner }),
          topic ? el("span", { class: "tbd-topic", text: topic }) : null
        ]);
        box.appendChild(head);
        box.appendChild(body);
      }

      pending.push({
        id: box.id,
        owner: owner,
        topic: topic,
        page: currentFile(),
        text: (($(".tbd-body", box) || box).textContent || "").trim().replace(/\s+/g, " ")
      });
    });
  }

  /* Grouped by owning package. G7 renders this on 06-after-session-one.html. */
  function renderPendingReport(host) {
    if (!host) return;
    host.classList.add("pending-report");
    host.innerHTML = "";
    if (!pending.length) {
      host.appendChild(el("p", { text: "No placeholders on this page." }));
      return;
    }
    var groups = {};
    pending.forEach(function (p) { (groups[p.owner] = groups[p.owner] || []).push(p); });
    Object.keys(groups).sort().forEach(function (owner) {
      host.appendChild(el("h3", { text: owner }));
      var ul = el("ul");
      groups[owner].forEach(function (p) {
        ul.appendChild(el("li", {}, [
          el("a", { href: "#" + p.id, text: p.topic || p.text.slice(0, 80) }),
          document.createTextNode(" "),
          el("span", { class: "cite", text: p.page })
        ]));
      });
      host.appendChild(ul);
    });
  }

  /* A stub page tells the reader which chunk writes it, and — if they got
     here from an entity link — which entry they were actually after. */
  function renderStubNotice() {
    var stub = $("[data-stub]");
    if (!stub) return;
    var hash = (location.hash || "").replace(/^#/, "");
    if (!hash) return;

    var wanted = null;
    (window.ENTITIES || []).forEach(function (e) {
      if ((e.href || "").split("#")[1] === hash) wanted = e;
    });

    var p = pageFor(currentFile());
    var note = el("div", { class: "callout callout-warn" }, [
      el("span", { class: "callout-title", text: "The entry you clicked" })
    ]);
    note.appendChild(el("p", { html:
      (wanted
        ? "You were looking for <strong>" + wanted.name + "</strong> — " +
          (wanted.tag || "") + "."
        : "You were looking for <code>#" + hash + "</code>.") +
      " It is written up by <strong>chunk " + (p ? p.chunk : "a later chunk") +
      "</strong>, which has not run yet." }));
    if (wanted && wanted.summary) {
      note.appendChild(el("p", { html: "<em>" + wanted.summary + "</em>" }));
    }
    stub.appendChild(note);
  }

  /* ======================================================================
     8b. Spoiler gate — DM-only content, hidden by default
     ====================================================================== */

  /* Markup:
       <section class="spoiler" data-spoiler="part-2">
         <div class="spoiler-gate">…<button data-spoiler-toggle>…</button></div>
         <div class="spoiler-body">…</div>
       </section>
     The choice persists per page in state.ui.spoilersRevealed. */

  var hideBtn = null;

  /* State paths are dot-separated, so the key must not contain a dot —
     "02-background.html#part-2" would nest under a phantom "02-background". */
  function spoilerKey(node) {
    return currentFile().replace(/\.[^.]+$/, "") + "#" +
           (node.getAttribute("data-spoiler") || "default");
  }

  function spoilerRevealed(node) {
    if (!BM.State) return false;
    var map = BM.State.at("ui.spoilersRevealed", {}) || {};
    return map[spoilerKey(node)] === true;
  }

  function setSpoiler(node, revealed) {
    node.setAttribute("data-revealed", revealed ? "true" : "false");
    node.classList.toggle("is-revealed", revealed);

    var btn = $("[data-spoiler-toggle]", node);
    if (btn) {
      btn.textContent = revealed ? "Hide DM-only content" : "Reveal DM-only content";
      btn.setAttribute("aria-expanded", revealed ? "true" : "false");
    }
    var body = $(".spoiler-body", node);
    if (body) body.setAttribute("aria-hidden", revealed ? "false" : "true");

    if (BM.State) {
      try { BM.State.set("ui.spoilersRevealed." + spoilerKey(node), revealed); } catch (e) {}
    }
    syncHideButton();
    if (tocReady) buildTOC();
  }

  /* A fixed control, so a DM mid-session can blank the screen in one click
     without scrolling back to the gate. */
  function syncHideButton() {
    var anyOpen = $$(".spoiler.is-revealed").length > 0;
    if (!anyOpen) {
      if (hideBtn) hideBtn.classList.remove("show");
      return;
    }
    if (!hideBtn) {
      hideBtn = el("button", { class: "btn spoilerhide no-print", type: "button",
                               text: "Hide DM-only content" });
      hideBtn.addEventListener("click", function () {
        $$(".spoiler.is-revealed").forEach(function (n) { setSpoiler(n, false); });
        var first = $(".spoiler");
        if (first) first.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
      });
      document.body.appendChild(hideBtn);
    }
    hideBtn.classList.add("show");
  }

  function wireSpoilers() {
    $$("[data-spoiler]").forEach(function (node) {
      node.classList.add("spoiler");
      var btn = $("[data-spoiler-toggle]", node);
      if (btn) {
        btn.setAttribute("aria-controls", node.id || "");
        btn.addEventListener("click", function () {
          setSpoiler(node, node.getAttribute("data-revealed") !== "true");
        });
      }
      setSpoiler(node, spoilerRevealed(node));
    });
  }

  /* ======================================================================
     9. Images — a missing file degrades to a labelled frame (§F2)
     ====================================================================== */

  function wireImages() {
    $$("figure.art").forEach(function (fig) {
      var img = $("img", fig);
      var name = fig.getAttribute("data-img") || (img ? img.getAttribute("src") : "");
      var src  = fig.getAttribute("data-src") || "";      /* § of WP15 that generates it */

      if (!$(".art-frame", fig)) {
        var frame = el("div", { class: "art-frame", "aria-hidden": "false" }, [
          el("span", { class: "af-badge", text: "Image pending" }),
          el("span", { class: "af-file", text: "assets/img/" + name.replace(/^assets\/img\//, "") }),
          src ? el("span", { class: "af-src", text: src }) : null,
          el("span", { class: "af-src", text: "Drop the file in with this exact name — nothing else changes." })
        ]);
        if (img && img.nextSibling) fig.insertBefore(frame, img.nextSibling);
        else fig.insertBefore(frame, fig.firstChild);
      }

      if (!img) { fig.classList.add("missing"); return; }

      var tried = false;
      function fail() {
        if (!tried && /\.webp$/i.test(img.getAttribute("src") || "")) {
          tried = true;                                   /* accept .png as well */
          img.setAttribute("src", img.getAttribute("src").replace(/\.webp$/i, ".png"));
          return;
        }
        fig.classList.add("missing");
      }
      img.addEventListener("error", fail);
      if (img.complete && img.naturalWidth === 0) fail();
    });
  }

  /* ======================================================================
     10. Tables — nothing wide is allowed to scroll the page body
     ====================================================================== */

  function wireTables() {
    $$("main table").forEach(function (t) {
      if (t.parentElement && t.parentElement.classList.contains("scrollx")) return;
      var wrap = el("div", { class: "scrollx", tabindex: "0", role: "region",
                             "aria-label": (t.caption ? t.caption.textContent : "Table") });
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    });
  }

  /* ======================================================================
     11. Boot
     ====================================================================== */

  function wireGlobalKeys() {
    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "/" || ev.metaKey || ev.ctrlKey || ev.altKey) return;
      var t = ev.target;
      var tag = t && t.tagName ? t.tagName.toLowerCase() : "";
      if (tag === "input" || tag === "textarea" || tag === "select" || (t && t.isContentEditable)) return;
      if (!searchInput) return;
      ev.preventDefault();
      searchInput.focus();
      searchInput.select();
    });
  }

  var tocReady = false;

  function boot() {
    buildIndex();
    buildTopbar();
    wireTables();
    renderPlaceholders();
    renderStubNotice();
    wireSpoilers();
    buildTOC();
    tocReady = true;
    wireImages();
    wirePreviews();
    wireHistory();
    wireGlobalKeys();

    if (BM.State) {
      BM.State.mountNotes(document);
      var panel = $("[data-state-panel]");
      if (panel) BM.State.mountPanel(panel);
    }

    var report = $("[data-pending-report]");
    if (report) renderPendingReport(report);

    /* The linker runs once, after paint, in a single pass. requestAnimationFrame
       is suspended in a hidden tab, so a page opened in the background would
       have no entity links until it was looked at — fall back to a timeout. */
    if (document.hidden) setTimeout(function () { autoLink(); settleHash(); }, 0);
    else requestAnimationFrame(function () { autoLink(); settleHash(); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  /* Public surface for later chunks. */
  BM.PAGES = PAGES;
  BM.entity = function (id) { return byId[id] || null; };
  BM.entities = function () { return window.ENTITIES || []; };
  BM.search = searchEntities;
  BM.goToEntity = goToEntity;
  BM.pending = function () { return pending.slice(); };
  BM.renderPendingReport = renderPendingReport;
  BM.unresolved = function () { return unresolved.slice(); };
  BM.settleHash = settleHash;
  BM.el = el;
  BM.$ = $;
  BM.$$ = $$;

  window.BM = BM;
})();
