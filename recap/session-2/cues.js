// =====================================================================
//  THE BROKEN MARCH — Session 2 recap.  ALL TIMING LIVES HERE.
// =====================================================================
//  Retune by ear:
//   1. Open index.html?stamp  (add ?stamp to the address), press Play.
//   2. The yellow box shows the next cue's words. Press C when the
//      narrator says them. X = skip a cue, Z = undo.
//   3. Click "Show cues.js", then copy or download it over this file.
//  Or edit by hand: change the "at" numbers below, save, reload.
//
//   at      seconds inside the paragraph's own audio (narration-N.wav)
//   say     the narration words of this cue (only a label for you)
//   do      what happens: panel, move, swap, balloon, caption, tag, sfx ...
//   screen  true = clear the page; this panel starts a new screen
//   box     panel place on the 1600 x 900 stage: [left, top, width, height]
//   view    camera on the image: [x %, y %, zoom]
//   x, y    place in % of the panel (or of the stage, without panel)
//   ix, iy  place in % of the IMAGE: it follows the camera
//
//  Music: each clip plays the song from second "song", between "from" and
//  "to" = [section, seconds] (section 0 = title, 1..4 = paragraphs).
//  "levels" = [section, seconds, full | swell | under | bed | off].
//
//  Times come from faster-whisper word timestamps (see the timings folder).
// =====================================================================

window.RECAP = {
  art: { folder: "art/", ext: ".jpg", trim: ["p1-bessa", "p1-door", "p1-fold-raid", "p1-round", "p1-song", "p2-archers", "p2-camp", "p2-duel", "p2-golem", "p3-door-stuck", "p3-tunnel", "p3-walker", "p4-nest", "p4-outside"] },
  titleDuration: 15,
  gaps: [5, 5, 5],
  audio: {
    parts: ["audio/narration-1.mp3", "audio/narration-2.mp3", "audio/narration-3.mp3", "audio/narration-4.mp3"],
    partDurations: [81.45, 83.25, 77.48, 51.68]
  },
  music: {
    file: "audio/background-track.mp3",
    full: 0.6, swell: 0.45, under: 0.09, bed: 0.12, off: 0,
    clips: [
      // title, paragraph 1, paragraph 2: the song plays straight through
      { from: [0, 0], to: [3, 0], song: 0, levels: [[0, 0, "off"], [0, 3, "full"], [0, 13, "full"], [1, 0.3, "under"], [1, 80.4, "under"], [1, 81.8, "swell"], [2, -1, "swell"], [2, 0.3, "under"], [2, 82.8, "under"], [2, 84, "swell"], [3, -1.5, "swell"], [3, -0.1, "off"]] },
      // paragraph 3 has no music. It returns in the pause before paragraph 4, then stays for the fast half:
      { from: [4, -4.5], to: [4, 35.5], song: 95.5, levels: [[4, -4.5, "off"], [4, -3.5, "swell"], [4, -0.8, "swell"], [4, 0.3, "bed"], [4, 32.3, "bed"], [4, 35.3, "off"]] },
      // the end card: the last seconds of the song, so it ends naturally
      { from: [4, 50.9], to: [4, 63.3], song: 179.9, levels: [[4, 50.9, "off"], [4, 51.6, "full"]] },
    ]
  },

  // ---------- TITLE CARD (before the audio) ----------
  title: {
    name: "Title",
    speech: [0, 13.8],
    wipe: "ink",
    cues: [
      { at: 1.5, say: "(title)", do: "title", text: "THE BROKEN MARCH", x: 50, y: 44, shake: 8 },
      { at: 8, say: "(title)", do: "caption", text: "Previously…", x: 50, y: 68 },
    ]
  },

  paragraphs: [
    // ---------- PARAGRAPH 1: New Blood ----------
    {
      name: "New Blood",
      speech: [0, 80.6],
      wipe: "ink",
      cues: [
        { at: 0, say: "Evening, Day Two, at the Sundered Cart", do: "panel", screen: true, id: "song", img: "p1-song", box: [80, 45, 1440, 810], view: [50, 50, 1.08], drift: [48, 45, 1.22], enter: "fade" },
        { at: 0, say: "Evening, Day Two, at the Sundered Cart", do: "caption", style: "chapter", text: "NEW BLOOD", x: 11, y: 9, for: 3.2 },
        { at: 3.4, say: "Howling Matza", do: "tag", panel: "song", text: "HOWLING MATZA", ix: 39, iy: 70, rot: -3, for: 5 },
        { at: 3.4, say: "Howling Matza", do: "notes", panel: "song", x: 48, y: 72, spread: 34, for: 7.5 },
        { at: 6, say: "and BarD Sync", do: "tag", panel: "song", text: "BARD SYNC", ix: 59, iy: 84, rot: 2, for: 4 },
        { at: 11.05, say: "Alino was off somewhere", do: "panel", id: "away", img: "s1-heroes", box: [1040, 360, 480, 480], view: [54, 32, 2.4], dim: 0.35, enter: "slide-left", tilt: 1.5 },
        { at: 11.05, say: "Alino was off somewhere", do: "tag", panel: "away", text: "ELSEWHERE", x: 50, y: 90 },

        { at: 16.1, say: "the door banged open", do: "panel", screen: true, id: "door", img: "p1-door", box: [180, 45, 540, 810], view: [50, 48, 1.04], drift: [56, 38, 1.2], enter: "slam", shake: 22 },
        { at: 16.15, say: "the door banged open", do: "sfx", panel: "door", text: "BLAM!", x: 22, y: 82, size: 140, rot: -10, shake: 8 },
        { at: 17.9, say: "A noble paladin", do: "tag", panel: "door", text: "AL DRACU", x: 68, y: 93, rot: 3 },
        { at: 20.45, say: "Rosal said", do: "panel", id: "rosal", img: "p1-song", box: [880, 100, 520, 520], view: [85, 52, 2.3], drift: [85, 50, 2.5], enter: "slide-left", tilt: -1.5 },
        { at: 22.5, say: "no room for such luxury", do: "balloon", panel: "rosal", text: "No room for\nsuch luxury.", x: 40, y: 117, tail: "up-right" },

        { at: 25.5, say: "So he took two beds", do: "panel", screen: true, id: "round", img: "p1-round", box: [80, 45, 1440, 810], view: [32, 55, 1.45], drift: false, enter: "slide-right" },
        { at: 25.5, say: "So he took two beds", do: "move", panel: "round", view: [52, 48, 1.1], dur: 7, ease: "sine" },
        { at: 28.75, say: "a drink with one coin", do: "sfx", panel: "round", text: "CHEERS!", x: 80, y: 18, size: 130, rot: 7 },
        { at: 29.5, say: "one coin", do: "glint", panel: "round", ix: 40.5, iy: 9, size: 1.4, every: 1.8 },
        { at: 33.4, say: "from the future, killed a god", do: "caption", style: "tiny", panel: "round", text: "(he says)", x: 12, y: 9 },
        { at: 37.9, say: "His name is Al Dracu", do: "tag", panel: "round", text: "AL DRACU", ix: 40, iy: 90, rot: -3 },
        { at: 40.9, say: "Old Tarn kissed his hand", do: "panel", id: "tarn", img: "p1-round", box: [1050, 410, 470, 440], view: [70, 60, 2.6], drift: [69, 59, 3], enter: "slide-up", tilt: 1.5 },
        { at: 41.8, say: "kissed his hand", do: "sfx", panel: "tarn", text: "SMOOSH ♥", x: 50, y: 88, size: 84, color: "#ff8fa8", rot: -6 },

        { at: 44.5, say: "That night, a dog barked far away", do: "panel", screen: true, id: "night", img: "s5-night", box: [80, 210, 1440, 480], view: [45, 55, 1.15], drift: [42, 58, 1.35], dim: 0.4, enter: "fade" },
        { at: 46.25, say: "barked", do: "sfx", panel: "night", text: "woof…", x: 80, y: 30, size: 62, color: "#cfd8e8", for: 2.2 },
        { at: 48.5, say: "Then nothing", do: "dim", to: 0.75, dur: 1 },

        { at: 51.26, say: "At the fold: three goblins", do: "dim", to: 0, dur: 0.2 },
        { at: 51.26, say: "At the fold: three goblins", do: "panel", screen: true, id: "raid", img: "p1-fold-raid", box: [80, 45, 1440, 810], view: [50, 48, 1.07], drift: false, enter: "slam", shake: 6 },
        { at: 52.5, say: "three goblins", do: "move", panel: "raid", view: [68, 40, 1.8], dur: 1.2 },
        { at: 54.6, say: "a hen", do: "tag", panel: "raid", text: "HEN", ix: 53, iy: 46, rot: -3, for: 3.5 },
        { at: 55.6, say: "a rope", do: "tag", panel: "raid", text: "ROPE", ix: 65, iy: 56, rot: 3, for: 2.5 },
        { at: 56.7, say: "and a fence panel", do: "tag", panel: "raid", text: "FENCE PANEL", ix: 81, iy: 66, rot: -2, for: 1.8 },
        { at: 58.4, say: "A javelin", do: "move", panel: "raid", view: [50, 48, 1.07], dur: 0.5 },
        { at: 58.45, say: "A javelin", do: "sfx", panel: "raid", text: "THUNK", x: 13, y: 16, size: 100, rot: -10, for: 2, shake: 6 },
        { at: 59.45, say: "an arrow", do: "sfx", panel: "raid", text: "THWIP", x: 45, y: 56, size: 100, rot: 6, for: 1.8, shake: 5 },
        { at: 60.5, say: "a crossbow bolt", do: "sfx", panel: "raid", text: "TCHK", x: 74, y: 76, size: 100, rot: -6, for: 1.8, shake: 5 },
        { at: 62.05, say: "and holy fire", do: "flash", strength: 0.85 },
        { at: 62.05, say: "and holy fire", do: "glow", panel: "raid", ix: 56, iy: 18, r: 20, color: "255,225,130", pulse: true },
        { at: 62.1, say: "and holy fire", do: "sfx", panel: "raid", text: "FWOOM!", x: 76, y: 16, size: 140, color: "#ff9b2f", rot: 8, shake: 9 },
        { at: 63.95, say: "fried chicken", do: "caption", panel: "raid", text: "Fried chicken.", x: 78, y: 91 },

        { at: 65.65, say: "Two goblins dead", do: "panel", screen: true, id: "dogs", img: "s2-fold", box: [80, 210, 1440, 480], view: [32, 56, 1.35], drift: [28, 58, 1.55], enter: "fade" },
        { at: 67.4, say: "Both dogs dead too", do: "gray", panel: "dogs", dur: 2.2 },

        { at: 69.8, say: "Bessa the shepherd said thank you", do: "panel", screen: true, id: "bessa", img: "p1-bessa", box: [120, 45, 540, 810], view: [50, 45, 1.1], drift: [48, 36, 1.25], enter: "slide-right" },
        { at: 72.15, say: "thank you, and then: please leave", do: "balloon", panel: "bessa", text: "Thank you.\nNow please leave.", x: 132, y: 14, tail: "left" },
        { at: 76.05, say: "Something big comes", do: "panel", id: "wall", img: "s2-two-signs", box: [730, 340, 800, 350], view: [34, 50, 1], drift: [34, 50, 1.15], enter: "slide-left" },
        { at: 76.05, say: "Something big comes", do: "spot", panel: "wall", rect: [18, 8, 52, 84] },
        { at: 79.6, say: "and it's not the goblins", do: "caption", text: "Not the goblins.", x: 71, y: 86 },
      ]
    },

    // ---------- PARAGRAPH 2: Sixty Goblins ----------
    {
      name: "Sixty Goblins",
      speech: [0, 82.9],
      wipe: "page",
      cues: [
        { at: 0, say: "In the morning the prisoner ran", do: "panel", screen: true, id: "camp", img: "p2-camp", box: [80, 45, 1440, 810], view: [22, 84, 2.1], drift: false, enter: "fade" },
        { at: 0, say: "In the morning the prisoner ran", do: "caption", style: "chapter", text: "SIXTY GOBLINS", x: 13, y: 9, for: 4 },
        { at: 1.9, say: "bleeding, and you followed the blood", do: "trail", id: "blood", img: "p2-blood", panel: "camp", points: [[10, 40], [24, 27], [40, 17], [56, 21], [72, 13], [86, 11]], count: 20, dur: 4.5 },
        { at: 7.1, say: "Three hours northwest", do: "move", panel: "camp", view: [46, 52, 1.35], dur: 4, ease: "sine" },
        { at: 7.1, say: "Three hours northwest", do: "fade", target: "blood", to: 0, dur: 2 },
        { at: 12.8, say: "a goblin camp", do: "move", panel: "camp", view: [50, 50, 1.07], dur: 1.5 },
        { at: 14.8, say: "You. Ones at the fold.", do: "move", panel: "camp", view: [80, 28, 2.5], dur: 0.8 },
        { at: 15.0, say: "You. Ones at the fold.", do: "balloon", panel: "camp", style: "shout", text: "You. Ones at the fold.\nI counted you. Food first.", x: 27, y: 30, tail: "right", for: 5.5 },
        { at: 20.65, say: "There are sixty of them", do: "move", panel: "camp", view: [50, 50, 1.07], dur: 1.2 },
        { at: 21.5, say: "sixty", do: "bigstamp", text: "×60", x: 22, y: 22, rot: -9, shake: 10 },

        { at: 23.7, say: "You asked about the big thing", do: "panel", screen: true, id: "dark", color: "#000", box: [-10, -10, 1620, 920], drift: false, enter: "fade" },
        { at: 26.2, say: "They asked: the silent one?", do: "panel", id: "tease", img: "p3-walker", box: [480, 130, 640, 640], view: [50, 30, 1.5], drift: [50, 27, 1.75], dim: 0.68, lightUp: 5, enter: "fade" },
        { at: 27.4, say: "the silent one?", do: "balloon", text: "The silent one?", x: 82, y: 22, tail: "down-left" },

        { at: 33.85, say: "You offered to kill it", do: "panel", screen: true, id: "leader", img: "p2-camp", box: [90, 60, 600, 600], view: [80, 27, 2.2], drift: [80, 25, 2.5], enter: "slide-right" },
        { at: 36.05, say: "You also admitted killing their scouts", do: "caption", panel: "leader", text: "Honesty.", x: 50, y: 93 },
        { at: 39.25, say: "Al Dracu demanded ten goblins", do: "panel", id: "dracu", img: "p2-camp", box: [830, 60, 380, 380], view: [82, 80, 2.8], drift: [82, 79, 3.1], enter: "slam", shake: 6 },
        { at: 40.3, say: "demanded ten goblins", do: "tag", panel: "dracu", text: "AL DRACU", x: 50, y: 92 },
        { at: 41, say: "ten goblins", do: "tag", panel: "dracu", text: "TOOK TWO", x: 100, y: 14, rot: 8 },
        { at: 42.2, say: "Ten archers stood up", do: "panel", id: "archers", img: "p2-archers", box: [420, 480, 1110, 370], view: [50, 50, 1.07], drift: [50, 50, 1.2], enter: "slam", shake: 20 },
        { at: 43.8, say: "on the walls", do: "sfx", panel: "archers", text: "THWIP THWIP", x: 76, y: 4, size: 90, rot: -5, shake: 6 },

        { at: 45.4, say: "Then BarD Sync made a stone golem", do: "panel", screen: true, id: "golem", img: "p2-golem", box: [530, 45, 540, 810], view: [50, 30, 1.5], drift: false, enter: "slam", shake: 24 },
        { at: 45.4, say: "Then BarD Sync made a stone golem", do: "glow", panel: "golem", ix: 50, iy: 25, r: 38, color: "150,205,255", pulse: true, level: 0.4 },
        { at: 47.3, say: "a giant stone golem", do: "move", panel: "golem", view: [50, 46, 1.07], dur: 1.4 },
        { at: 47.35, say: "a giant stone golem", do: "sfx", text: "GRRROOOM", x: 18, y: 36, size: 110, rot: -9, shake: 16 },
        { at: 49.1, say: "nothing but illusion", do: "caption", style: "tiny", text: "(not real)", x: 77, y: 76 },
        { at: 50.95, say: "The goblins ran", do: "move", panel: "golem", view: [50, 82, 1.7], dur: 1 },

        { at: 53.15, say: "Biggy had an idea", do: "panel", screen: true, id: "duel", img: "p2-duel", box: [80, 45, 1440, 810], view: [60, 52, 1.35], drift: false, enter: "slide-left" },
        { at: 55.3, say: "One song from Howling Matza", do: "notes", panel: "duel", x: 62, y: 66, spread: 14, for: 5 },
        { at: 57.45, say: "one roar", do: "move", panel: "duel", view: [38, 36, 1.5], dur: 0.8 },
        { at: 57.5, say: "one roar", do: "sfx", panel: "duel", text: "RAAAH!", x: 74, y: 14, size: 150, color: "#ff5a36", rot: 7, shake: 14, for: 2.4 },
        { at: 58.95, say: "one charge", do: "move", panel: "duel", view: [30, 52, 1.35], dur: 0.7 },
        { at: 60.45, say: "Biggy slew the golem", do: "flash", strength: 0.9 },
        { at: 60.45, say: "Biggy slew the golem", do: "sparkle", panel: "duel", ix: 19, iy: 55 },
        { at: 60.45, say: "Biggy slew the golem", do: "shake", strength: 16 },
        { at: 62.2, say: "the golem", do: "move", panel: "duel", view: [50, 50, 1.07], dur: 0.9 },
        { at: 63.2, say: "Very convincing", do: "caption", panel: "duel", text: "Very convincing.", x: 50, y: 91 },
        { at: 64.85, say: "Some goblins cheered", do: "chorus", panel: "duel", every: 0.35, items: [[55, 10, "ooh!", "down-right"], [72, 6, "ooh!", "down-left"], [90, 9, "ooh!", "down-left"]], for: 2.6 },

        { at: 67.25, say: "The deal: kill the silent one", do: "panel", screen: true, id: "deal", img: "p2-camp", box: [90, 100, 700, 700], view: [78, 30, 1.9], drift: [80, 27, 2.3], enter: "slide-right" },
        { at: 68.8, say: "kill the silent one", do: "caption", text: "THE DEAL", style: "chapter", x: 72, y: 12 },
        { at: 74.3, say: "You gave them about thirty rations", do: "icons", text: "THEY GET", items: ["rations"], x: 74, y: 29 },
        { at: 76.8, say: "They gave you a knotted cord", do: "icons", text: "YOU GET", items: ["cord"], x: 74, y: 53, shake: 5 },
        { at: 79.7, say: "Worthless to you. Priceless to us.", do: "balloon", text: "\"Worthless to you.\nPriceless to us.\"", x: 73, y: 74, tail: "left" },
      ]
    },

    // ---------- PARAGRAPH 3: The Silent One (no music) ----------
    {
      name: "The Silent One",
      speech: [0, 76.9],
      wipe: "flash",
      cues: [
        { at: 0, say: "Four hours north: a square tunnel", do: "panel", screen: true, id: "tunnel", img: "p3-tunnel", box: [80, 45, 1440, 810], view: [50, 50, 1.07], drift: [37, 38, 1.5], enter: "fade" },
        { at: 0, say: "Four hours north: a square tunnel", do: "caption", style: "chapter", text: "THE SILENT ONE", x: 14, y: 9, for: 4.5 },
        { at: 8.55, say: "Stacked, not fallen", do: "caption", panel: "tunnel", text: "Stacked. Not fallen.", x: 80, y: 10 },
        { at: 14.2, say: "woke up stronger", do: "bigstamp", text: "LEVEL 4", x: 76, y: 28, rot: -8, shake: 8 },

        { at: 16.3, say: "Down a long ramp", do: "panel", screen: true, id: "groove", img: "s4-gallery", box: [350, 210, 900, 480], view: [50.5, 68, 3.5], drift: [50.5, 60, 3.9], enter: "fade" },
        { at: 16.3, say: "Down a long ramp", do: "flicker", panel: "groove", amount: 0.3 },

        { at: 22.6, say: "Then a sound", do: "panel", screen: true, id: "black", color: "#000", box: [-10, -10, 1620, 920], drift: false, enter: "fade" },
        { at: 25.3, say: "Thump.", do: "panel", id: "walk", img: "p3-walker", box: [530, 45, 540, 810], view: [50, 45, 1.07], drift: [50, 35, 1.3], dim: 0.1, lightUp: 4.5, enter: "fade" },
        { at: 25.3, say: "Thump.", do: "sfx", text: "THUMP", x: 19, y: 38, size: 160, color: "#d9d4c4", rot: -6, shake: 18, for: 4 },
        { at: 26.7, say: "Thump.", do: "sfx", text: "THUMP", x: 81, y: 62, size: 190, color: "#d9d4c4", rot: 5, shake: 22, for: 3 },

        { at: 31.5, say: "Al Dracu's javelin snapped", do: "panel", screen: true, id: "smite", img: "p3-smite", box: [80, 45, 1440, 810], view: [50, 50, 1.02], drift: [55, 42, 1.15], enter: "slam", shake: 8 },
        { at: 32.15, say: "javelin snapped", do: "sfx", panel: "smite", text: "SNAP", x: 18, y: 86, size: 100, rot: -9, for: 2.2, shake: 6 },
        { at: 34, say: "Fire did nothing", do: "sfx", panel: "smite", text: "fsss", x: 74, y: 14, size: 76, color: "#d8a06a", for: 1.8 },
        { at: 36.2, say: "Sword and holy smite", do: "flash", strength: 0.9 },
        { at: 36.2, say: "Sword and holy smite", do: "sfx", panel: "smite", text: "KLANG!", x: 48, y: 16, size: 150, rot: 7, shake: 14, for: 2.8 },
        { at: 37.55, say: "not a scratch", do: "caption", panel: "smite", text: "Not a scratch.", x: 82, y: 91 },

        { at: 39.2, say: "It only wants whoever hit it last", do: "panel", screen: true, id: "fist", img: "p3-walker", box: [530, 45, 540, 810], view: [34, 54, 2.5], drift: false, enter: "fade" },
        { at: 44, say: "and hit him, hard", do: "sfx", text: "WHAM", x: 73, y: 36, size: 180, color: "#ff5a36", rot: 9, shake: 28, for: 2 },
        { at: 46.1, say: "You ran", do: "move", panel: "fist", view: [50, 45, 1.06], dur: 1.2 },
        { at: 47.35, say: "It followed. Slowly.", do: "move", panel: "fist", view: [50, 30, 1.5], dur: 4, ease: "sine" },
        { at: 48.8, say: "Slowly. It never hurries.", do: "caption", text: "Slowly.", x: 77, y: 74 },

        { at: 51.35, say: "Past the door you left open", do: "panel", screen: true, id: "writing", img: "s4-names", box: [230, 45, 540, 810], view: [50, 20, 1.7], drift: false, enter: "slide-up" },
        { at: 53.2, say: "into a side tunnel", do: "move", panel: "writing", view: [50, 80, 1.7], dur: 6, ease: "sine" },
        { at: 59.5, say: "A stone door", do: "panel", id: "door", color: "#050505", box: [900, 220, 500, 500], drift: false, enter: "slam", shake: 7 },
        { at: 61.9, say: "Howling Matza cast Knock", do: "sfx", panel: "door", text: "KNOCK", x: 50, y: 50, size: 150, rot: -5, shake: 14 },

        { at: 64.8, say: "The silent one reached the little door", do: "panel", screen: true, id: "stuck", img: "p3-door-stuck", box: [530, 45, 540, 810], view: [50, 50, 1.05], drift: [52, 34, 1.3], enter: "fade" },
        { at: 70, say: "Thunder: nothing", do: "sfx", text: "BOOM", x: 19, y: 30, size: 130, color: "#9fc4ff", rot: -8, shake: 12, for: 1.6 },
        { at: 72, say: "Whispers: nothing", do: "sfx", text: "psst…", x: 81, y: 52, size: 70, color: "#cbb8e8", rot: 5, for: 1.8 },
        { at: 74.5, say: "The door frame began to crack", do: "cracks", panel: "stuck", dur: 2.4, lines: [[[78, 24], [86, 20], [88, 12], [96, 9]], [[82, 36], [90, 38], [92, 47], [99, 50]], [[22, 22], [14, 17], [12, 8], [4, 5]], [[50, 9], [55, 5], [52, 1]]] },
        { at: 74.5, say: "The door frame began to crack", do: "dust", on: true, dur: 0.5 },
        { at: 75.5, say: "began to crack", do: "sfx", text: "KRRRK", x: 80, y: 22, size: 150, rot: 8, shake: 16 },
      ]
    },

    // ---------- PARAGRAPH 4: Teeth ----------
    {
      name: "Teeth",
      speech: [0, 51],
      wipe: "fade",
      cues: [
        { at: 0, say: "So you ran up a crumbling tunnel", do: "panel", screen: true, id: "nest", img: "p4-nest", box: [80, 45, 1440, 810], view: [50, 40, 1.4], drift: false, enter: "slam", shake: 10 },
        { at: 0, say: "So you ran up a crumbling tunnel", do: "caption", style: "chapter", text: "TEETH", x: 9, y: 9, for: 3 },
        { at: 0, say: "So you ran up a crumbling tunnel", do: "dust", on: true, level: 0.6, dur: 0.5 },
        { at: 3.6, say: "Bones. Sheep, a goat", do: "move", panel: "nest", view: [20, 80, 2.1], dur: 0.6 },
        { at: 5.3, say: "a goat, things with long feet", do: "move", panel: "nest", view: [78, 80, 2.1], dur: 1.4 },
        { at: 7.9, say: "A huge nest", do: "move", panel: "nest", view: [50, 50, 1.08], dur: 0.8 },
        { at: 10, say: "Something thin, grey", do: "move", panel: "nest", view: [62, 33, 2.4], dur: 2.5, ease: "sine" },
        { at: 13.6, say: "and bit Howling Matza", do: "sfx", panel: "nest", text: "CHOMP!", x: 28, y: 62, size: 200, color: "#ff3324", rot: -8, shake: 28, for: 2.3 },

        { at: 16, say: "You ran out into the daylight", do: "panel", screen: true, id: "q1", img: "p4-nest", box: [60, 215, 470, 470], view: [62, 36, 2.2], drift: [62, 34, 2.6], enter: "slide-up" },
        { at: 17.15, say: "into the daylight", do: "flash", strength: 0.95 },
        { at: 18.1, say: "it came after you", do: "panel", id: "q2", img: "p4-outside", box: [565, 215, 470, 470], view: [28, 52, 1.6], drift: [30, 52, 1.8], enter: "slide-up" },
        { at: 21.4, say: "Whispers sent it running", do: "sfx", panel: "q1", text: "shhhh…", x: 50, y: 90, size: 74, color: "#cbb8e8", for: 3 },
        { at: 22.55, say: "Al Dracu cut it down", do: "panel", id: "q3", img: "p4-outside", box: [1070, 215, 470, 470], view: [80, 42, 2], drift: [80, 40, 2.3], enter: "slam", shake: 10 },
        { at: 23.7, say: "cut it down", do: "sfx", panel: "q3", text: "SHING!", x: 50, y: 90, size: 100, rot: -7, shake: 9 },
        { at: 25, say: "and holy fire finished it", do: "flash", strength: 0.9 },
        { at: 25, say: "and holy fire finished it", do: "sfx", text: "FWOOM!", x: 50, y: 12, size: 160, color: "#ff9b2f", rot: -4, shake: 14 },

        { at: 27.45, say: "It smelled of fried pork", do: "panel", screen: true, id: "kept", img: "p4-outside", box: [440, 90, 720, 720], view: [66, 30, 1.8], drift: [64, 32, 1.95], enter: "fade" },
        { at: 28.45, say: "fried pork", do: "caption", panel: "kept", text: "Fried pork.", x: 20, y: 92 },
        { at: 30.25, say: "You kept the head", do: "caption", style: "tiny", panel: "kept", text: "You kept the head.", x: 74, y: 92 },
        { at: 27.45, say: "It smelled of fried pork", do: "dust", on: false, dur: 0.5 },

        { at: 32.7, say: "So: Day Four, afternoon", do: "panel", screen: true, id: "outside", img: "p4-outside", box: [80, 45, 1440, 810], view: [45, 52, 1.4], drift: [50, 50, 1.05], enter: "fade" },
        { at: 36.2, say: "Hurt", do: "tag", group: "list", style: "cream", text: "HURT", x: 9, y: 10, rot: -3 },
        { at: 37.15, say: "out of spells", do: "tag", group: "list", style: "cream", text: "NO SPELLS", x: 27, y: 7, rot: 2 },
        { at: 38.55, say: "and lost", do: "tag", group: "list", style: "cream", text: "LOST", x: 45, y: 9, rot: -2 },
        { at: 40.65, say: "hungry goblins", do: "tag", group: "list", style: "cream", text: "HUNGRY GOBLINS", x: 76, y: 8, rot: 2 },
        { at: 41.6, say: "waiting for you", do: "tag", group: "list", style: "cream", text: "A KNOTTED CORD", x: 16, y: 92, rot: -2 },
        { at: 43, say: "a thing", do: "tag", group: "list", style: "cream", text: "THE SILENT ONE", x: 45, y: 93, rot: 2 },
        { at: 44.1, say: "you cannot scratch", do: "tag", group: "list", style: "cream", text: "A CRACKING DOOR", x: 72, y: 91, rot: -3 },
        { at: 45.75, say: "Rest well.", do: "fade", target: "list", to: 0, dur: 1.5 },
        { at: 45.75, say: "Rest well.", do: "dim", to: 0.3, dur: 2 },
        { at: 51.2, say: "(after the last question)", do: "end", text: "TO BE CONTINUED…", x: 50, y: 84, hold: 9.8, fade: 1.8, shake: 10 },
      ]
    }
  ],

  // ---------- SUBTITLES: [start, end, text] in paragraph time ----------
  subtitles: [
    [
      [0, 2.8, "Evening, Day Two, at the Sundered Cart."],
      [3.4, 10.8, "Howling Matza and BarD Sync sang the quarrymen a work-song and won the room."],
      [11.05, 13.4, "Allino was off somewhere…"],
      [13.8, 16.8, "Then the door banged open."],
      [17, 20.4, "A noble paladin demanded the best room."],
      [20.45, 24.2, "Rosal said no room for such luxury."],
      [24.25, 31, "So he took two beds, bought the whole room a drink with one coin,"],
      [31.05, 37.8, "and told everyone he came from the future, killed a god, and forgot which one."],
      [37.85, 40.2, "His name is Al Dracu."],
      [40.9, 42.5, "Old Tarn kissed his hand."],
      [44.5, 49.5, "That night, a dog barked far away. Then nothing."],
      [51.26, 57.4, "At the fold: three goblins, a hen, a rope and a fence panel."],
      [58.3, 64.4, "A javelin, an arrow, a crossbow bolt, and holy fire that smelled like fried chicken."],
      [65.65, 69.8, "Two goblins dead, one tied up. Both dogs dead too."],
      [69.85, 74.8, "Bessa the shepherd said thank you, and then: please leave."],
      [74.85, 80.6, "Something big comes every few nights, she said, and it's not the goblins."],
    ],
    [
      [0, 5.5, "In the morning the prisoner ran, bleeding, and you followed the blood."],
      [7.1, 13.9, "Three hours northwest, in a crater of broken limestone: a goblin camp."],
      [14.8, 19.7, "“You. Ones at the fold. I counted you. Food first.”"],
      [20.65, 22.8, "There are sixty of them."],
      [23.7, 29.5, "You asked about the big thing. They asked: the silent one? Moving stone."],
      [30.5, 32.8, "It chased them out of their home in the north."],
      [33.85, 38, "You offered to kill it. You also admitted killing their scouts."],
      [39.25, 44.2, "Al Dracu demanded ten goblins. Ten archers stood up on the walls."],
      [45.4, 51.8, "Then BarD Sync made a giant stone golem out of nothing but illusion. The goblins ran."],
      [53.15, 54.4, "Biggy had an idea."],
      [55.3, 62.3, "One song from Howling Matza, one roar, one charge, and Biggy slew the golem."],
      [63.1, 66, "Very convincing. Some goblins cheered."],
      [67.25, 73.4, "The deal: kill the silent one, and they say they will go home and leave Greybank alone."],
      [74.3, 78.5, "You gave them about thirty rations. They gave you a knotted cord."],
      [79.7, 82.9, "“Worthless to you. Priceless to us.”"],
    ],
    [
      [0, 9.9, "Four hours north: a square tunnel of pale, jointless stone, blocked with rubble. Stacked, not fallen."],
      [10.8, 15.2, "You cleared it anyway, slept at the mouth, and woke up stronger."],
      [16.3, 21.5, "Down a long ramp, into a straight hall with a groove in the floor."],
      [22.6, 27.5, "Then a sound. Thump. Thump."],
      [28.1, 30.5, "Eight feet of walking stone."],
      [31.5, 34.9, "Al Dracu's javelin snapped. Fire did nothing."],
      [35.95, 38.5, "Sword and holy smite: not a scratch."],
      [39.2, 41.7, "It only wants whoever hit it last."],
      [42.7, 45, "It grabbed Al Dracu and hit him, hard."],
      [46.1, 51, "You ran. It followed. Slowly. It never hurries."],
      [51.35, 59, "Past the door you left open last time, into a side tunnel, its walls covered in tiny Elvish writing."],
      [59.5, 64, "A stone door. Howling Matza cast Knock, and you were through."],
      [64.8, 68.5, "The silent one reached the little door, and did not fit."],
      [70, 73.5, "Thunder: nothing. Whispers: nothing."],
      [74.45, 76.9, "The door frame began to crack."],
    ],
    [
      [0, 3, "So you ran up a crumbling tunnel."],
      [3.6, 8.9, "Bones. Sheep, a goat, things with long feet. A huge nest."],
      [10, 15.2, "Something thin, grey and very hungry woke up, and bit Howling Matza."],
      [16, 20.6, "You ran out into the daylight, it came after you, and you turned and fought."],
      [21.4, 26.7, "Whispers sent it running. Al Dracu cut it down, and holy fire finished it."],
      [27.45, 31.7, "It smelled of fried pork. You kept the head."],
      [32.7, 38.9, "So: Day Four, afternoon. Hurt, out of spells, and lost."],
      [40.1, 44.2, "Lots of hungry goblins waiting for you to kill a thing you cannot scratch."],
      [45.75, 46.7, "Rest well."],
      [47.7, 51, "How do you kill something that doesn't notice swords?"],
    ]
  ]
};
