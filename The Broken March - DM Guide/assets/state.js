/* ==========================================================================
   The Broken March — Interactive DM Guide
   assets/state.js — the campaign state model: save, load, export, import

   Built by chunk G0. Loaded on every page, before app.js.

   The guide is NEVER the source of truth. The vault documents are canonical;
   this is a scratchpad over them.

   Portability is the requirement, not a nicety. The DM runs this across
   machines. localStorage is convenience only — on file:// some browsers give
   each page an opaque origin and every write silently fails. Export of a
   single JSON file is the real mechanism.

   Defaults are WP01 §2.2 (variables, reputation), §6 (clocks), WP02 §11
   (critical stock) and WP05 §7 (zone threat stages) at campaign start.
   ========================================================================== */

var BM = window.BM || {};

(function () {
  "use strict";

  var SCHEMA = 1;
  var KEY = "broken-march-state-v1";
  var DIRTY_KEY = "broken-march-state-v1-dirty";
  var FILENAME = "broken-march-state.json";

  var WATCHES = ["Dawn", "Morning", "Afternoon", "Evening", "Night", "Deep Night"];

  /* Value ranges, used by the panel and by import validation. */
  var RANGES = {
    variables:  { min: 0,  max: 6 },
    reputation: { min: -3, max: 3 },
    clocks:     { min: 0,  max: 6 },
    stock:      { min: 0,  max: 99 }
  };

  var INFRA_STATES  = ["Intact", "Damaged", "Disabled", "Destroyed", "Improved"];
  var SECTOR_STATES = ["Unknown", "Discovered", "Accessible", "Locked", "Breached", "Sealed"];
  var SYSTEM_STATES = ["Unknown", "Identified", "Inactive", "Active", "Damaged", "Disabled"];
  var THREAT_STAGES = ["None", "Sign", "Incident", "Escalation", "Response",
                       "Collateral consequence", "Regional outcome"];

  /* ---------------------------------------------------------------------- */
  /* Defaults — campaign start                                              */
  /* ---------------------------------------------------------------------- */

  function defaults() {
    return {
      schema: SCHEMA,
      savedAt: null,
      campaign: {
        day: 1,
        watch: "Afternoon",                       /* WP08: the party arrives Day 1 Afternoon */
        variables:   { food: 4, trade: 3, defense: 2, unity: 4 },        /* WP01 §2.2 */
        reputation:  { greybank: 0, hollow: 0, redTusk: -1, daggerford: 0 },
        clocks:      { reaction: 1, hollow: 1, redTusk: 1, daggerford: 1, instability: 1 },
        redTuskBranch: null,                      /* null | "War" | "Compact" | "Flight" */
        infrastructure: { bridge: "Intact", mill: "Intact" },
        stock:       { potion: 2, healersKit: 2, antitoxin: 1, blastingPowder: 6 },
        illefarn:    { sectors: {}, systems: {}, breaches: [] },
        threatStages:{ Z4: "Incident", Z17: "Escalation" }               /* WP05 §7 */
      },
      session: {
        deadlinesFired: [],
        rumoursDealt: [],
        npcsMet: []
      },
      notes: {},
      ui: { theme: "auto", spoilersRevealed: {} }
    };
  }

  /* ---------------------------------------------------------------------- */
  /* Internals                                                              */
  /* ---------------------------------------------------------------------- */

  var data = defaults();
  var dirty = false;              /* changed since the last export */
  var listeners = [];

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function isPlainObject(v) {
    return v !== null && typeof v === "object" && !Array.isArray(v);
  }

  /* Deep merge of a loaded object onto the default shape. Unknown keys are
     kept (a later chunk may have added them); missing keys fall back. */
  function mergeOnto(base, incoming) {
    if (!isPlainObject(incoming)) return base;
    var out = isPlainObject(base) ? base : {};
    Object.keys(incoming).forEach(function (k) {
      var v = incoming[k];
      if (isPlainObject(v)) out[k] = mergeOnto(isPlainObject(out[k]) ? out[k] : {}, v);
      else out[k] = v;
    });
    return out;
  }

  function notify(reason) {
    listeners.forEach(function (fn) {
      try { fn(data, reason); } catch (e) { /* a bad listener must not break state */ }
    });
  }

  /* ---------------------------------------------------------------------- */
  /* localStorage — convenience only, never depended on                     */
  /* ---------------------------------------------------------------------- */

  function saveLocal() {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;                      /* opaque origin, private mode, quota */
    }
  }

  function loadLocal() {
    var raw = null;
    try { raw = window.localStorage.getItem(KEY); } catch (e) { return false; }
    if (!raw) return false;
    try {
      var parsed = JSON.parse(raw);
      if (!parsed || parsed.schema !== SCHEMA) return false;
      data = mergeOnto(defaults(), parsed);
      return true;
    } catch (e) { return false; }
  }

  /* ---------------------------------------------------------------------- */
  /* Public read / write                                                    */
  /* ---------------------------------------------------------------------- */

  function get() { return data; }

  /* Dotted path read: BM.State.at("campaign.variables.food") */
  function at(path, fallback) {
    var parts = String(path).split(".");
    var node = data;
    for (var i = 0; i < parts.length; i++) {
      if (!isPlainObject(node) && !Array.isArray(node)) return fallback;
      node = node[parts[i]];
      if (node === undefined) return fallback;
    }
    return node;
  }

  /* Dotted path write. Marks the state unexported and autosaves locally. */
  function set(path, value) {
    var parts = String(path).split(".");
    var node = data;
    for (var i = 0; i < parts.length - 1; i++) {
      if (!isPlainObject(node[parts[i]])) node[parts[i]] = {};
      node = node[parts[i]];
    }
    var last = parts[parts.length - 1];
    if (node[last] === value) return value;
    node[last] = value;
    markDirty();
    saveLocal();
    notify("set:" + path);
    return value;
  }

  /* The flag has to survive a page change, or a DM who edits on one page and
     switches to another loses the warning that they have not exported. */
  function storeDirty(v) {
    try { window.localStorage.setItem(DIRTY_KEY, v ? "1" : "0"); } catch (e) {}
  }
  function loadDirty() {
    try { return window.localStorage.getItem(DIRTY_KEY) === "1"; } catch (e) { return false; }
  }

  function markDirty() {
    dirty = true;
    storeDirty(true);
    document.documentElement.setAttribute("data-state-dirty", "true");
  }
  function clearDirty() {
    dirty = false;
    storeDirty(false);
    document.documentElement.setAttribute("data-state-dirty", "false");
  }
  function isDirty() { return dirty; }

  function isDefault() {
    var d = defaults();
    d.savedAt = data.savedAt;
    /* ui and notes do not count as campaign progress */
    return JSON.stringify(d.campaign) === JSON.stringify(data.campaign) &&
           JSON.stringify(d.session)  === JSON.stringify(data.session) &&
           Object.keys(data.notes || {}).length === 0;
  }

  function subscribe(fn) {
    if (typeof fn === "function") listeners.push(fn);
    return function () {
      var i = listeners.indexOf(fn);
      if (i >= 0) listeners.splice(i, 1);
    };
  }

  function reset() {
    data = defaults();
    saveLocal();
    markDirty();
    notify("reset");
  }

  /* ---------------------------------------------------------------------- */
  /* Export                                                                 */
  /* ---------------------------------------------------------------------- */

  function serialise() {
    data.savedAt = new Date().toISOString();
    return JSON.stringify(data, null, 2);
  }

  function exportFile() {
    var text = serialise();
    var blob = new Blob([text], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
    saveLocal();
    clearDirty();
    notify("export");
    return FILENAME;
  }

  /* Clipboard fallback, for machines where file dialogs are awkward. */
  function copyToClipboard(done) {
    var text = serialise();
    var finish = function (ok) {
      if (ok) { saveLocal(); clearDirty(); notify("export"); }
      if (typeof done === "function") done(ok);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { finish(true); },
                                               function () { finish(legacyCopy(text)); });
    } else {
      finish(legacyCopy(text));
    }
  }

  function legacyCopy(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "readonly");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return !!ok;
    } catch (e) { return false; }
  }

  /* ---------------------------------------------------------------------- */
  /* Import — replaces; never silently merges over a non-default campaign   */
  /* ---------------------------------------------------------------------- */

  function validate(obj) {
    if (!isPlainObject(obj)) return "That is not a state object.";
    if (obj.schema !== SCHEMA) {
      return "Wrong schema — this file says " + JSON.stringify(obj.schema) +
             ", this guide expects " + SCHEMA + ".";
    }
    if (!isPlainObject(obj.campaign)) return "The file has no campaign block.";
    return null;
  }

  /* opts.confirm — called with a message, must return true to proceed.
     Defaults to window.confirm. Passing {force:true} skips the prompt. */
  function importObject(obj, opts) {
    opts = opts || {};
    var err = validate(obj);
    if (err) return { ok: false, error: err };

    if (!opts.force && !isDefault()) {
      var msg = "This guide already holds campaign state" +
                (data.savedAt ? " (last exported " + data.savedAt + ")" : "") +
                ".\n\nImporting replaces it entirely. Continue?";
      var ask = typeof opts.confirm === "function" ? opts.confirm : window.confirm;
      if (!ask(msg)) return { ok: false, error: "Import cancelled — nothing changed." };
    }

    data = mergeOnto(defaults(), obj);
    saveLocal();
    clearDirty();
    notify("import");
    return { ok: true };
  }

  function importText(text, opts) {
    var parsed;
    try { parsed = JSON.parse(text); }
    catch (e) { return { ok: false, error: "That is not valid JSON." }; }
    return importObject(parsed, opts);
  }

  function importFile(file, done, opts) {
    if (!file) { done({ ok: false, error: "No file chosen." }); return; }
    var reader = new FileReader();
    reader.onload = function () { done(importText(String(reader.result), opts)); };
    reader.onerror = function () { done({ ok: false, error: "The file could not be read." }); };
    reader.readAsText(file);
  }

  function pasteFromClipboard(done, opts) {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(function (text) {
        done(importText(text, opts));
      }, function () {
        done({ ok: false, error: "The browser would not read the clipboard. Use Import file instead." });
      });
    } else {
      done({ ok: false, error: "This browser has no clipboard read. Use Import file instead." });
    }
  }

  /* ---------------------------------------------------------------------- */
  /* Position readout                                                       */
  /* ---------------------------------------------------------------------- */

  function positionText() {
    return "Day " + at("campaign.day", 1) + " · " + at("campaign.watch", "Afternoon");
  }

  /* ---------------------------------------------------------------------- */
  /* The state panel                                                        */
  /* ---------------------------------------------------------------------- */

  var FIELDS = [
    { group: "Day and watch", rows: [
      { path: "campaign.day",   label: "Day",   kind: "number", min: 1, max: 99 },
      { path: "campaign.watch", label: "Watch", kind: "select", options: WATCHES }
    ]},
    { group: "Greybank <span class=\"cite\">WP01 §3</span>", rows: [
      { path: "campaign.variables.food",    label: "Food",    kind: "number", range: "variables" },
      { path: "campaign.variables.trade",   label: "Trade",   kind: "number", range: "variables" },
      { path: "campaign.variables.defense", label: "Defense", kind: "number", range: "variables" },
      { path: "campaign.variables.unity",   label: "Unity",   kind: "number", range: "variables" }
    ]},
    { group: "Reputation <span class=\"cite\">WP01 §4</span>", rows: [
      { path: "campaign.reputation.greybank",   label: "Greybank",        kind: "number", range: "reputation" },
      { path: "campaign.reputation.hollow",     label: "Laughing Hollow", kind: "number", range: "reputation" },
      { path: "campaign.reputation.redTusk",    label: "Red-Tusk",        kind: "number", range: "reputation" },
      { path: "campaign.reputation.daggerford", label: "Daggerford",      kind: "number", range: "reputation" }
    ]},
    { group: "Clocks <span class=\"cite\">WP01 §6</span>", rows: [
      { path: "campaign.clocks.reaction",    label: "Greybank Reaction",  kind: "number", range: "clocks" },
      { path: "campaign.clocks.hollow",      label: "Hollow Intervention",kind: "number", range: "clocks" },
      { path: "campaign.clocks.redTusk",     label: "Red-Tusk Strategic", kind: "number", range: "clocks" },
      { path: "campaign.clocks.daggerford",  label: "Daggerford",         kind: "number", range: "clocks" },
      { path: "campaign.clocks.instability", label: "Illefarn Instability", kind: "number", range: "clocks" },
      { path: "campaign.redTuskBranch", label: "Red-Tusk branch", kind: "select",
        options: ["", "War", "Compact", "Flight"], nullEmpty: true }
    ]},
    { group: "Infrastructure <span class=\"cite\">WP01 §14</span>", rows: [
      { path: "campaign.infrastructure.bridge", label: "Bridge", kind: "select", options: INFRA_STATES },
      { path: "campaign.infrastructure.mill",   label: "Mill",   kind: "select", options: INFRA_STATES }
    ]},
    { group: "Critical stock <span class=\"cite\">WP02 §11</span>", rows: [
      { path: "campaign.stock.potion",         label: "Potions of Healing", kind: "number", range: "stock" },
      { path: "campaign.stock.healersKit",     label: "Healer's kits",      kind: "number", range: "stock" },
      { path: "campaign.stock.antitoxin",      label: "Antitoxin",          kind: "number", range: "stock" },
      { path: "campaign.stock.blastingPowder", label: "Blasting powder",    kind: "number", range: "stock" }
    ]},
    { group: "Zone threat stages <span class=\"cite\">WP05 §7</span>", rows: [
      { path: "campaign.threatStages.Z4",  label: "Z4 Fold & grazing", kind: "select", options: THREAT_STAGES },
      { path: "campaign.threatStages.Z17", label: "Z17 Old Delving",   kind: "select", options: THREAT_STAGES }
    ]}
  ];

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  function mountPanel(root) {
    if (!root) return;
    root.classList.add("state-panel");
    root.innerHTML = "";

    var pos   = el("span", { class: "sp-position", text: positionText() });
    var flag  = el("span", { class: "sp-dirty", text: "Unsaved since last export" });
    var head  = el("div", { class: "sp-head" }, [
      el("span", { class: "sp-title", text: "Campaign state" }),
      el("span", {}, [pos, document.createTextNode(" "), flag])
    ]);
    root.appendChild(head);

    var groups = el("div", { class: "sp-groups" });
    FIELDS.forEach(function (g) {
      var box = el("div", { class: "sp-group" }, [el("h3", { html: g.group })]);
      g.rows.forEach(function (row) { box.appendChild(buildRow(row)); });
      groups.appendChild(box);
    });
    root.appendChild(groups);

    /* Actions */
    var msg = el("span", { class: "sp-msg", id: "sp-msg", role: "status", "aria-live": "polite" });

    var bExport = el("button", { class: "btn btn-primary", type: "button", text: "Export state file" });
    var bCopy   = el("button", { class: "btn", type: "button", text: "Copy state" });
    var bImport = el("button", { class: "btn", type: "button", text: "Import state file" });
    var bPaste  = el("button", { class: "btn", type: "button", text: "Paste state" });
    var bReset  = el("button", { class: "btn btn-sm", type: "button", text: "Reset to campaign start" });

    var file = el("input", { type: "file", accept: "application/json,.json",
                             class: "visually-hidden", id: "sp-file" });

    bExport.addEventListener("click", function () {
      var name = exportFile();
      say(msg, "Downloaded " + name + ".", "ok");
    });
    bCopy.addEventListener("click", function () {
      copyToClipboard(function (ok) {
        say(msg, ok ? "State copied to the clipboard."
                    : "The browser refused the clipboard. Use Export state file.", ok ? "ok" : "err");
      });
    });
    bImport.addEventListener("click", function () { file.click(); });
    file.addEventListener("change", function () {
      importFile(file.files && file.files[0], function (res) {
        say(msg, res.ok ? "State imported." : res.error, res.ok ? "ok" : "err");
        file.value = "";
      });
    });
    bPaste.addEventListener("click", function () {
      pasteFromClipboard(function (res) {
        say(msg, res.ok ? "State imported from the clipboard." : res.error, res.ok ? "ok" : "err");
      });
    });
    bReset.addEventListener("click", function () {
      if (window.confirm("Reset every value to campaign start? Export first if you want to keep this.")) {
        reset();
        say(msg, "Reset to campaign start.", "ok");
      }
    });

    root.appendChild(el("div", { class: "sp-actions" },
      [bExport, bCopy, bImport, bPaste, bReset, file, msg]));

    root.appendChild(el("p", { class: "sp-msg", html:
      "Autosaved to this browser on every change — but on <code>file://</code> some browsers " +
      "refuse that silently. <strong>Export before switching machines.</strong>" }));

    /* Keep the panel in step with imports and cross-page changes. */
    subscribe(function () {
      pos.textContent = positionText();
      flag.classList.toggle("on", isDirty());
      refreshInputs(root);
    });
    flag.classList.toggle("on", isDirty());
  }

  function say(node, text, kind) {
    node.textContent = text;
    node.className = "sp-msg" + (kind ? " " + kind : "");
  }

  function buildRow(row) {
    var id = "sp-" + row.path.replace(/\./g, "-");
    var label = el("label", { for: id, html: row.label });
    var input;

    if (row.kind === "select") {
      input = el("select", { id: id, "data-path": row.path });
      row.options.forEach(function (o) {
        var opt = el("option", { value: o, text: o === "" ? "— not set —" : o });
        input.appendChild(opt);
      });
      input.value = at(row.path) === null || at(row.path) === undefined ? "" : at(row.path);
      input.addEventListener("change", function () {
        set(row.path, (row.nullEmpty && input.value === "") ? null : input.value);
      });
    } else {
      var r = row.range ? RANGES[row.range] : { min: row.min, max: row.max };
      input = el("input", {
        id: id, type: "number", "data-path": row.path,
        min: String(r.min), max: String(r.max), step: "1"
      });
      input.value = at(row.path, r.min);
      input.addEventListener("change", function () {
        var v = parseInt(input.value, 10);
        if (isNaN(v)) v = r.min;
        v = Math.max(r.min, Math.min(r.max, v));
        input.value = v;
        set(row.path, v);
      });
    }
    return el("div", { class: "sp-row" }, [label, input]);
  }

  function refreshInputs(root) {
    var nodes = root.querySelectorAll("[data-path]");
    Array.prototype.forEach.call(nodes, function (n) {
      var v = at(n.getAttribute("data-path"));
      var next = (v === null || v === undefined) ? "" : String(v);
      if (n.value !== next) n.value = next;
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Free-text notes — <textarea data-note="session-one/quarry-incident">   */
  /* ---------------------------------------------------------------------- */

  function mountNotes(scope) {
    var nodes = (scope || document).querySelectorAll("[data-note]");
    Array.prototype.forEach.call(nodes, function (ta) {
      var key = ta.getAttribute("data-note");
      ta.classList.add("sp-note");
      ta.value = (data.notes && data.notes[key]) || "";
      ta.addEventListener("input", function () {
        if (!data.notes) data.notes = {};
        data.notes[key] = ta.value;
        markDirty();
        saveLocal();
      });
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Boot                                                                   */
  /* ---------------------------------------------------------------------- */

  loadLocal();
  dirty = loadDirty();
  document.documentElement.setAttribute("data-state-dirty", dirty ? "true" : "false");

  BM.State = {
    SCHEMA: SCHEMA,
    WATCHES: WATCHES,
    RANGES: RANGES,
    INFRA_STATES: INFRA_STATES,
    SECTOR_STATES: SECTOR_STATES,
    SYSTEM_STATES: SYSTEM_STATES,
    THREAT_STAGES: THREAT_STAGES,
    defaults: defaults,
    get: get,
    at: at,
    set: set,
    subscribe: subscribe,
    reset: reset,
    isDirty: isDirty,
    isDefault: isDefault,
    positionText: positionText,
    serialise: serialise,
    exportFile: exportFile,
    copyToClipboard: copyToClipboard,
    importObject: importObject,
    importText: importText,
    importFile: importFile,
    pasteFromClipboard: pasteFromClipboard,
    mountPanel: mountPanel,
    mountNotes: mountNotes,
    clone: clone
  };

  window.BM = BM;
})();
