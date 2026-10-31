// =====================================================================
//  THE BROKEN MARCH — "Previously on…" recap.  ALL TIMING LIVES HERE.
// =====================================================================
//  Retune by ear:
//   1. Open index.html?stamp  (add ?stamp to the address), press Play.
//   2. The yellow box shows the next cue's words. Press C when the
//      narrator says them. X = skip a cue, Z = undo.
//   3. Click "Show cues.js", then copy or download it over this file.
//  Or edit by hand: change the "at" numbers below, save, reload.
//
//  Words used below:
//   at      seconds inside the paragraph's own audio (narration-N.mp3)
//   say     the narration words of this cue (only a label for you)
//   do      what happens: panel, move, swap, balloon, caption, tag, sfx,
//           chorus, glow, notes, coins, glint, spot, ripple, surge,
//           flicker, icons, stamp, end, rain, dust, dim, flash, fade
//   screen  true = clear the page; this panel starts a new screen
//   box     panel place on the 1600 x 900 stage: [left, top, width, height]
//   view    camera on the image: [x %, y %, zoom]   [50, 50, 1] = all of it
//   drift   slow camera move until the next screen: [x %, y %, zoom]
//   move    camera move: view = where to, dur = seconds it takes
//   x, y    place in % of the panel (or of the stage, without panel)
//   ix, iy  place in % of the IMAGE: it follows the camera
//   for     seconds the lettering stays (default: until the next screen)
//   enter   how a panel arrives: pop, slam, fade, slide-left/right/up/down
//
//  Audio: "Parts" plays narration-1..4 with gapBetweenParts seconds of
//  silence between them. "Single take" plays narration-full.mp3:
//  fullOffsets = where each paragraph starts in it (seconds), and
//  fullWarp = small corrections [paragraph time, extra seconds], because
//  the single take is read a little faster or slower in places.
//  speech = [first word, last word] of each paragraph; wipes go between.
//
//  Times come from faster-whisper word timestamps (model small.en);
//  transcripts are in the timings folder. Subtitles are whisper's words
//  with the names spelled as in the script.
// =====================================================================

window.RECAP = {
  art: { folder: "art/", ext: ".jpg" },
  titleDuration: 4,
  gapBetweenParts: 1.5,
  audio: {
    parts: ["audio/narration-1.mp3", "audio/narration-2.mp3", "audio/narration-3.mp3", "audio/narration-4.mp3"],
    partDurations: [85.24, 63.2, 103.36, 64.64],
    full: "audio/narration-full.mp3",
    fullDuration: 315.44,
    fullOffsets: [0, 83.34, 144.3, 248.16],
    fullWarp: [
      [[0, 0], [5.14, -0.3], [9.2, -1.06], [13.2, -1.02], [17.34, -1.12], [22.62, -1.42], [26.64, -1.88], [30.68, -1.44], [35.72, -1.06], [39.8, -1.2], [44.08, -1.4], [49.22, -1.96], [53.38, -1.8], [57.62, -1.66], [62.16, -1.88], [66.58, -2.24], [71.72, -2.34], [76.22, -2.72], [81.26, -2.68], [84.44, -2.76]], // paragraph 1
      [[0.38, 0], [4.58, 0.02], [9, -0.08], [13.32, -1], [18, -0.98], [22.08, -1.52], [26.14, -1.82], [30.3, -2.24], [34.44, -1.94], [38.62, -2.06], [42.68, -2.54], [47, -2.7], [51.02, -2.72], [55.32, -3.2], [59.52, -2.82], [62.42, -3.22]], // paragraph 2
      [[0.28, 0], [5.06, -0.54], [9.14, -0.72], [13.44, -0.2], [17.48, -0.18], [21.74, -0.28], [25.8, -0.44], [30.44, -0.16], [34.58, 0.12], [39.04, 0.66], [43.08, 0.56], [47.72, 1.1], [52.12, 1.32], [57.4, 1.42], [62.7, 1.02], [66.7, 0.98], [70.98, 0.76], [75, 0.58], [79.18, 0.04], [83.24, -0.36], [88.32, -0.56], [93.04, -0.66], [97.18, -0.26], [101.5, -0.24], [102.12, -0.3]], // paragraph 3
      [[0.34, 0], [4.96, 0.38], [9.1, 0.18], [13.42, -0.9], [17.44, -0.16], [21.76, 0.08], [26.94, 0.72], [31, 0.52], [35.7, 1.6], [40.02, 1.2], [45.2, 1.7], [49.78, 2.44], [53.78, 2.68], [59.14, 1.34], [63.26, 1.64], [63.66, 1.68]], // paragraph 4
    ]
  },

  // ---------- TITLE CARD (before the audio) ----------
  title: {
    name: "Title",
    speech: [0, 3],
    wipe: "ink",
    cues: [
      { at: 0.25, say: "(title)", do: "title", text: "THE BROKEN MARCH", x: 50, y: 44, shake: 8 },
      { at: 1.3, say: "(title)", do: "caption", text: "Previously…", x: 50, y: 68 },
    ]
  },

  paragraphs: [
    // ---------- PARAGRAPH 1: Strangers in Greybank (audio/narration-1.mp3) ----------
    {
      name: "Strangers in Greybank",
      speech: [0, 84.92],
      wipe: "ink",
      cues: [
        { at: 0, say: "Four strangers walked into a quiet river village", do: "panel", screen: true, id: "village", img: "s1-village", box: [80, 45, 1440, 810], view: [25, 55, 1.3], drift: [72, 45, 1.3], enter: "fade" },
        { at: 0, say: "Four strangers walked into a quiet river village", do: "caption", style: "chapter", text: "STRANGERS IN GREYBANK", x: 19, y: 8, for: 4 },

        { at: 8.44, say: "A hooded cat in half plate", do: "panel", screen: true, id: "heroes", img: "s1-heroes", box: [80, 45, 1440, 810], view: [17, 35, 2.6], enter: "slam", shake: 6 },
        { at: 11.62, say: "Howling kitty… or something like that", do: "tag", panel: "heroes", text: "HOWLING MATZA", ix: 31, iy: 27, rot: -3 },
        { at: 14.48, say: "A halfling who is definitely in a famous boyband", do: "move", panel: "heroes", view: [34, 52, 2.6], dur: 1.4 },
        { at: 22.62, say: "BarD Sync", do: "tag", panel: "heroes", text: "BAR.D.SYNC", ix: 44, iy: 64, rot: 2 },
        { at: 24.21, say: "A superstitious ex-potato farmer", do: "move", panel: "heroes", view: [55, 35, 2.6], dur: 1.4 },
        { at: 29.26, say: "Allino", do: "tag", panel: "heroes", text: "ALLINO", ix: 42, iy: 18, rot: -2 },
        { at: 30.6, say: "seven and a half feet of goliath", do: "move", panel: "heroes", view: [78, 30, 2], dur: 1.4 },
        { at: 35.72, say: "Biggy Smalls", do: "tag", panel: "heroes", text: "BIGGY SMALLS", ix: 66, iy: 70, rot: 3 },
        { at: 35.72, say: "Biggy Smalls", do: "move", panel: "heroes", view: [50, 50, 1], dur: 1.1 },

        { at: 38.18, say: "Old Tarn on his bench", do: "panel", screen: true, id: "tarn", img: "s1-tarn", box: [110, 45, 810, 810], view: [45, 40, 1.15], drift: [42, 32, 1.3], enter: "slam", shake: 5 },
        { at: 40.28, say: "told them to move along", do: "balloon", panel: "tarn", text: "Move along.", x: 74, y: 13, tail: "down-left", for: 3.2 },
        { at: 41.62, say: "One whistle tune, one song", do: "panel", id: "bard", img: "s1-heroes", box: [990, 105, 460, 690], view: [34, 47, 1.6], enter: "slide-left" },
        { at: 41.62, say: "One whistle tune, one song", do: "notes", panel: "tarn", x: 62, y: 78, spread: 40, for: 6.5 },
        { at: 44.16, say: "one gold piece later", do: "swap", panel: "tarn", img: "s1-tarn-happy", dur: 0.9 },
        { at: 45.28, say: "later, he is president of the fan club", do: "glint", panel: "tarn", ix: 31, iy: 24, size: 1.1, every: 2.4 },

        { at: 48.78, say: "At the Sundered Cart the bards sang for their beds", do: "panel", screen: true, id: "inn", img: "s1-beer", box: [70, 45, 540, 810], view: [14, 48, 3.4], drift: false, enter: "slide-right" },
        { at: 48.78, say: "At the Sundered Cart the bards sang for their beds", do: "notes", panel: "inn", x: 50, y: 75, for: 3.4 },
        { at: 52.4, say: "Biggy drank Vadd the carter's beer", do: "move", panel: "inn", view: [50, 50, 1], dur: 0.7 },
        { at: 52.4, say: "Biggy drank Vadd the carter's beer", do: "sfx", panel: "inn", text: "GLUG GLUG", x: 78, y: 34, size: 100, rot: -8, for: 2.8 },
        { at: 55.74, say: "(Vadd remembers)", do: "move", panel: "inn", view: [22, 50, 2.4], dur: 1.6 },
        { at: 57.78, say: "sold the village's biggest secret to Serina Malk", do: "panel", id: "serina", img: "s5-serina", box: [680, 70, 520, 520], view: [62, 22, 3.2], dim: 0.35, enter: "slide-left", tilt: -1.5 },
        { at: 62.42, say: "for five gold", do: "sfx", panel: "serina", text: "CLINK", x: 70, y: 88, size: 80, color: "#ffe27a", rot: -6 },
        { at: 64.04, say: "and the foreman Durrow quietly told", do: "panel", id: "durrow", color: "#050505", box: [1000, 620, 540, 230], drift: false, enter: "slide-up", tilt: 1.2 },
        { at: 65.48, say: "quietly told Howling Matza", do: "balloon", panel: "durrow", style: "whisper", text: "…I went inside the wall.", x: 50, y: 46, tail: "down-left" },

        { at: 74.32, say: "Then a terrified halfling, Nissa, burst through the door", do: "panel", screen: true, id: "nissa", img: "s2-nissa", box: [180, 45, 540, 810], view: [55, 40, 1.25], drift: [58, 32, 1.4], enter: "slam", shake: 12 },
        { at: 76.22, say: "voices at the sheep pen", do: "balloon", panel: "nissa", style: "shout", text: "Voices at the\nsheep pen!", x: 150, y: 20, tail: "left" },
        { at: 78.74, say: "Small ones. Then something big.", do: "dim", to: 0.55, dur: 1 },
        { at: 79.88, say: "something BIG", do: "sfx", text: "BIG", shaky: true, x: 76, y: 60, size: 230, color: "#ff5a36", shake: 6 },
        { at: 82.52, say: "You went out in the rain. Respect.", do: "rain", on: true, dur: 1.5 },
      ]
    },
    // ---------- PARAGRAPH 2: Something Big (audio/narration-2.mp3) ----------
    {
      name: "Something Big",
      speech: [0.38, 63],
      wipe: "page",
      cues: [
        { at: 0.38, say: "At the fold you found a dog frozen in fear", do: "panel", screen: true, id: "fold", img: "s2-fold", box: [80, 45, 1440, 810], view: [45, 50, 1.05], drift: [38, 55, 1.22], enter: "fade" },
        { at: 0.38, say: "At the fold you found a dog frozen in fear", do: "rain", on: true, dur: 0.3 },
        { at: 0.38, say: "At the fold you found a dog frozen in fear", do: "caption", style: "chapter", text: "SOMETHING BIG", x: 13, y: 8, for: 4 },
        { at: 3.32, say: "frozen in fear", do: "flash", style: "lightning", strength: 0.85 },

        { at: 5.9, say: "two problems for the price of one", do: "panel", screen: true, id: "signs", img: "s2-two-signs", box: [80, 345, 1440, 480], view: [50, 50, 1], drift: false, enter: "slide-left" },
        { at: 5.9, say: "two problems for the price of one", do: "panel", id: "hills", img: "s2-fold", box: [80, 60, 1440, 250], view: [78, 22, 1], drift: [70, 22, 1.1], enter: "slide-down" },
        { at: 10.48, say: "something large had broken over the top", do: "spot", id: "spotL", panel: "signs", rect: [1, 3, 49, 94] },
        { at: 22.08, say: "goblin tracks all around", do: "move", panel: "signs", view: [80, 60, 1.8], dur: 1.4 },
        { at: 22.08, say: "goblin tracks all around", do: "fade", target: "spotL", to: 0, dur: 0.5 },
        { at: 25.26, say: "Next morning", do: "rain", on: false, dur: 1.2 },

        { at: 27.64, say: "the quarry cracked open", do: "panel", screen: true, id: "quarry", img: "s3-quarry", box: [80, 45, 1440, 810], view: [50, 45, 1.1], drift: [55, 40, 1.22], enter: "slam", shake: 20 },
        { at: 27.64, say: "the quarry cracked open", do: "sfx", text: "KRRRAKK!", x: 62, y: 22, size: 170, rot: -6, shake: 8 },
        { at: 27.64, say: "the quarry cracked open", do: "dust", on: true, dur: 0.8 },

        { at: 33.24, say: "A man, Dov Marrek, was pinned under a slab", do: "panel", screen: true, id: "slab", img: "s3-slab", box: [90, 45, 540, 810], view: [60, 88, 3], drift: [58, 88, 3.2], enter: "slide-right" },
        { at: 33.24, say: "A man, Dov Marrek, was pinned under a slab", do: "dust", on: true, level: 0.4, dur: 1.5 },
        { at: 38.04, say: "You walked there", do: "panel", id: "boots", img: "s1-heroes", box: [700, 45, 820, 461], view: [50, 88, 2.2], drift: [54, 88, 2.4], enter: "slide-left" },
        { at: 39.76, say: "(the DM noticed)", do: "caption", style: "tiny", panel: "boots", text: "They walked.", x: 20, y: 15, for: 4 },
        { at: 42.42, say: "Biggy and Allino lifted the slab", do: "move", panel: "slab", view: [50, 50, 1], dur: 1 },
        { at: 43.58, say: "lifted the slab", do: "sfx", panel: "slab", text: "HNNNGH!", x: 50, y: 60, size: 96, rot: -4, shake: 5 },
        { at: 47.22, say: "Howling Matza's magic saved Dov's life", do: "panel", id: "heal", img: "s3-heal", box: [800, 290, 580, 580], view: [50, 55, 1.15], drift: [47, 62, 1.3], enter: "slide-up", tilt: 1.5 },
        { at: 47.22, say: "Howling Matza's magic saved Dov's life", do: "glow", id: "healglow", panel: "heal", ix: 47, iy: 76, r: 22, color: "255,214,120", pulse: true, level: 0.9 },
        { at: 51.02, say: "though not his leg", do: "fade", target: "healglow", to: 0.4, dur: 1.2 },

        { at: 53.94, say: "Howling Matza then told the whole crew", do: "panel", screen: true, id: "crew", img: "s3-quarry", box: [80, 45, 1440, 810], view: [52, 78, 2], drift: [55, 80, 2.15], enter: "pop" },
        { at: 57.04, say: "about the goblin tracks", do: "chorus", panel: "crew", every: 0.3, items: [[22, 30, "goblins?!", "down-right"], [52, 16, "goblins?!", "down-left"], [80, 32, "goblins?!", "down-left"]], for: 5.5 },
      ]
    },
    // ---------- PARAGRAPH 3: Under the Quarry (audio/narration-3.mp3) ----------
    {
      name: "Under the Quarry",
      speech: [0.28, 103],
      wipe: "ink",
      cues: [
        { at: 0.28, say: "Then you went down.", do: "panel", screen: true, id: "dark", color: "#000", box: [-10, -10, 1620, 920], drift: false, enter: "fade" },
        { at: 0.28, say: "Then you went down.", do: "glow", id: "lantern", panel: "dark", x: 50, y: 55, r: 16, color: "255,190,100", flicker: true, rise: 2.5, level: 0.9 },
        { at: 0.28, say: "Then you went down.", do: "caption", style: "chapter", text: "UNDER THE QUARRY", x: 15, y: 8, for: 4 },

        { at: 5.06, say: "elven ruins, thousands of years old. A ramp of seamless pale stone", do: "panel", screen: true, id: "ramp", img: "s4-ramp", box: [80, 45, 1440, 810], view: [45, 45, 1], drift: [35, 35, 1.2], enter: "fade" },

        { at: 12.56, say: "A hall of carved Elvish names", do: "panel", screen: true, id: "names", img: "s4-names", box: [100, 45, 540, 810], view: [50, 25, 2], drift: false, enter: "fade" },
        { at: 16.04, say: "the last ones cut in a hurry", do: "move", panel: "names", view: [52, 80, 2], dur: 3, ease: "sine" },
        { at: 23.56, say: "opened with a Knock spell", do: "sfx", text: "KNOCK", x: 67, y: 11, size: 150, rot: -5, shake: 9 },
        { at: 24.92, say: "a basin of dark liquid with six rings of light", do: "panel", id: "basin", img: "s4-basin-3", box: [720, 130, 720, 720], view: [50, 50, 1], drift: [50, 50, 1.06], enter: "fade" },

        { at: 33.3, say: "Workshops, and racks of stone tablets", do: "panel", screen: true, id: "basin", img: "s4-basin-3", box: [720, 130, 720, 720], view: [50, 50, 1.06], drift: [50, 50, 1.14], enter: "fade" },
        { at: 33.3, say: "Workshops, and racks of stone tablets", do: "panel", id: "tablets", img: "s5-serina", box: [100, 45, 540, 380], view: [16, 68, 2.6], dim: 0.45, enter: "slide-right" },
        { at: 42.64, say: "the same stone as the old tower in the village", do: "panel", id: "tower", img: "s1-village", box: [100, 465, 540, 390], view: [87.5, 12, 3.4], drift: [87.5, 12, 3.8], enter: "slide-up" },
        { at: 45.72, say: "click, flash, doors unlock", do: "flash", strength: 0.9 },
        { at: 45.72, say: "click, flash, doors unlock", do: "sfx", panel: "basin", text: "KLAK!", x: 20, y: 14, size: 120, rot: -8, shake: 7 },
        { at: 49.16, say: "and a fourth ring lights up", do: "swap", panel: "basin", img: "s4-basin-4", dur: 0.8 },
        { at: 49.16, say: "and a fourth ring lights up", do: "glow", id: "ring4", panel: "basin", ix: 70.5, iy: 33.5, r: 9, color: "150,205,255", pulse: true, level: 1 },
        { at: 54.16, say: "Things went dark.", do: "swap", panel: "basin", img: "s4-basin-3", dur: 0.3 },
        { at: 54.16, say: "Things went dark.", do: "fade", target: "ring4", to: 0, dur: 0.3 },
        { at: 54.16, say: "Things went dark.", do: "dim", to: 0.55, dur: 0.4 },
        { at: 55.56, say: "He put it back.", do: "swap", panel: "basin", img: "s4-basin-4", dur: 0.4 },
        { at: 55.56, say: "He put it back.", do: "fade", target: "ring4", to: 1, dur: 0.4 },
        { at: 55.56, say: "He put it back.", do: "dim", to: 0, dur: 0.4 },
        { at: 58.84, say: "if the glowing thing works, leave it in", do: "caption", style: "tiny", panel: "basin", text: "Classic.", x: 84, y: 91 },

        { at: 62.58, say: "Further down, a flooded stair", do: "panel", screen: true, id: "stair", img: "s4-stair", box: [80, 45, 1440, 810], view: [50, 50, 1], drift: [66, 62, 1.25], enter: "fade" },
        { at: 62.58, say: "Further down, a flooded stair", do: "ripple", id: "water", panel: "stair", y: 68, amp: 9 },
        { at: 74.1, say: "Biggy lassoed a corpse out", do: "move", panel: "stair", view: [28, 18, 2.4], dur: 1 },
        { at: 74.1, say: "Biggy lassoed a corpse out", do: "fade", target: "water", to: 0, dur: 0.6 },
        { at: 75.12, say: "a corpse out like a cowboy", do: "sfx", panel: "stair", text: "SPLOOSH", x: 62, y: 74, size: 110, color: "#9be7ff", rot: 4 },
        { at: 78.08, say: "the thing came for it and then turned back", do: "move", panel: "stair", view: [66, 62, 1.3], dur: 1 },
        { at: 78.08, say: "the thing came for it and then turned back", do: "fade", target: "water", to: 1, dur: 0.4 },
        { at: 78.08, say: "the thing came for it and then turned back", do: "surge", target: "water", amp: 38, dur: 2.5 },
        { at: 84.32, say: "a stone cup and a second key", do: "icons", items: ["cup", "key"], x: 82, y: 14, for: 3.5 },

        { at: 88, say: "That key opened a huge door onto a dead-straight gallery", do: "panel", screen: true, id: "gallery", img: "s4-gallery", box: [80, 210, 1440, 480], view: [50, 45, 1], drift: [50, 40, 1.18], enter: "fade" },
        { at: 88, say: "That key opened a huge door onto a dead-straight gallery", do: "flicker", panel: "gallery", amount: 0.22 },
        { at: 102.12, say: "Wisdom check: passed.", do: "stamp", text: "PASSED", x: 50, y: 14, rot: -10, shake: 8 },
      ]
    },
    // ---------- PARAGRAPH 4: Payday (audio/narration-4.mp3) ----------
    {
      name: "Payday",
      speech: [0.34, 64.22],
      wipe: "fade",
      cues: [
        { at: 0.34, say: "Back in town, you sold about thirty tablets to Serina", do: "panel", screen: true, id: "serina", img: "s5-serina", box: [120, 90, 720, 720], view: [50, 50, 1], drift: [45, 55, 1.12], enter: "slide-right" },
        { at: 0.34, say: "Back in town, you sold about thirty tablets to Serina", do: "caption", style: "chapter", text: "PAYDAY", x: 10, y: 8, for: 4 },
        { at: 2.34, say: "you sold about thirty tablets", do: "coins", panel: "serina", ix: 40, iy: 73, count: 6, every: 0.45, spread: 10 },
        { at: 4.5, say: "to Serina", do: "sfx", panel: "serina", text: "CLINK CLINK", x: 72, y: 88, size: 84, color: "#ffe27a", rot: -5 },
        { at: 19.26, say: "You told two militiamen", do: "panel", id: "tower", img: "s1-village", box: [930, 90, 540, 720], view: [87, 14, 2.2], drift: false, enter: "slide-left" },
        { at: 24.94, say: "and you asked around about the old tower", do: "move", panel: "tower", view: [87.5, 10, 3.6], dur: 3.5, ease: "sine" },

        { at: 29.82, say: "which has never stopped Biggy, who now plans to build beds", do: "panel", screen: true, id: "bed", img: "s5-biggy-bed", box: [530, 45, 540, 810], view: [50, 45, 1.1], drift: [52, 35, 1.2], enter: "slide-up" },
        { at: 31.22, say: "who now plans to build beds", do: "balloon", panel: "bed", text: "I'm sleeping\nin the tower.", x: 96, y: 10, tail: "down-left" },

        { at: 34.56, say: "So: Evening of Day 2.", do: "panel", screen: true, id: "night", img: "s5-night", box: [80, 45, 1440, 810], view: [55, 50, 1.3], drift: [50, 50, 1], enter: "fade" },
        { at: 34.56, say: "So: Evening of Day 2.", do: "glow", id: "window", panel: "night", ix: 66.8, iy: 50.5, r: 2.4, color: "255,190,90", level: 0.95, flicker: true, douse: true },
        { at: 38.3, say: "Coin in your", do: "tag", group: "list", text: "COIN", x: 13, y: 12, rot: -3, style: "cream" },
        { at: 39.94, say: "a blind thing", do: "tag", group: "list", text: "BLIND THING", x: 38, y: 7, rot: 2, style: "cream" },
        { at: 42.94, say: "goblin tracks at", do: "tag", group: "list", text: "GOBLIN TRACKS", x: 86, y: 14, rot: -2, style: "cream" },
        { at: 44.94, say: "something big still", do: "tag", group: "list", text: "SOMETHING BIG", x: 87, y: 48, rot: 3, style: "cream" },
        { at: 48, say: "a maimed quarryman", do: "tag", group: "list", text: "MAIMED QUARRYMAN", x: 79, y: 89, rot: -2, style: "cream" },
        { at: 49.62, say: "a charcoal delivery", do: "tag", group: "list", text: "LATE CHARCOAL", x: 47, y: 93, rot: 2, style: "cream" },
        { at: 52.98, say: "a Reeve", do: "tag", group: "list", text: "THE REEVE", x: 15, y: 87, rot: -3, style: "cream" },
        { at: 56.3, say: "a promise to", do: "tag", group: "list", text: "A PROMISE TO DURROW", x: 17, y: 50, rot: 2, style: "cream" },
        { at: 60.4, say: "Sleep well.", do: "fade", target: "list", to: 0, dur: 1 },
        { at: 60.4, say: "Sleep well.", do: "fade", target: "window", to: 0, dur: 1.6 },
        { at: 63.91, say: "What could possibly go wrong?", do: "end", text: "TO BE CONTINUED…", x: 50, y: 50, hold: 3, fade: 1.5, shake: 10 },
      ]
    }
  ],

  // ---------- SUBTITLES: [start, end, text] in paragraph time ----------
  subtitles: [
    [ // paragraph 1
      [0, 7.42, "Four strangers walked into a quiet river village on the road to Daggerford."],
      [8.44, 13.84, "A hooded cat in half plate, Howling Kitty, or something like that."],
      [14.48, 18.2, "A halfling who is definitely in a famous boyband,"],
      [18.42, 23.3, "and definitely will tell you what the D stands for, BarD Sync."],
      [24.21, 29.6, "A superstitious ex-potato farmer with a very good bow, Allino."],
      [30.6, 36.58, "And seven and a half feet of goliath who drinks other people's beer, Biggy Smalls."],
      [37.9, 40.92, "Old Tarn on his bench told them to move along."],
      [41.62, 47.88, "One whistle tune, one song, and one gold piece later he is president of the fan club."],
      [48.78, 52.4, "At the Sundered Cart the bards sang for their beds."],
      [52.4, 56.3, "Biggy drank Vadd the carter's beer, Vadd remembers."],
      [57.34, 63.24, "BarD Sync sold the village's biggest secret to Serina Malk from Daggerford for five gold."],
      [64.04, 70.36, "And the foreman, Durrow, quietly told Howling Matza he'd been inside the quarry's broken wall."],
      [71.52, 75.34, "Then a terrified halfling, Nissa, burst through the door."],
      [76.22, 80.22, "Voices at the sheep pen, small ones, then something big."],
      [80.22, 81.9, "You believed her."],
      [82.52, 83.52, "You went out in the rain."],
      [84.44, 84.72, "Respect."],
    ],
    [ // paragraph 2
      [0.38, 5.16, "At the fold you found a dog frozen in fear,"],
      [5.68, 13.78, "and two problems for the price of one, a spot where something large had broken over the top"],
      [13.78, 21.36, "of the wall, and some way off stones pulled out and badly put back,"],
      [21.78, 24.34, "with goblin tracks all around."],
      [25.26, 32.38, "Next morning the quarry cracked open with a sound like the world clearing its throat."],
      [33.24, 37.02, "A man, Dov Marrek, was pinned under a slab."],
      [38.04, 40.94, "You walked there, the DM noticed."],
      [42.42, 46.54, "Biggy and Allino lifted the slab with a dozen quarrymen,"],
      [47, 52.46, "and Howling Matza's magic saved Dov's life, though not his leg."],
      [53.94, 57.78, "Howling Matza then told the whole crew about the goblin tracks,"],
      [58.1, 62.76, "so news now travels at the speed of a tabaxi with an audience."],
    ],
    [ // paragraph 3
      [0.28, 2.28, "Then you went down."],
      [2.96, 8.44, "Under the quarry, elven ruins, thousands of years old."],
      [9.14, 15.36, "A ramp of seamless pale stone, a hall of carved elvish names,"],
      [16.04, 19.68, "the last ones cut in a hurry, never a good sign."],
      [20.68, 23.92, "A locked room opened with a cast of Knock,"],
      [24.56, 28.7, "holding a basin of dark liquid with six rings of light,"],
      [29.28, 31.14, "three lit, three dark."],
      [32.32, 37.04, "Workshops and racks of stone tablets like books in a library."],
      [38.26, 44.66, "A rectangular key that fits a socket made of the same stone as the old tower in the village."],
      [45.72, 50.96, "Click, flash, doors unlock, and a fourth ring lights up."],
      [51.6, 53.68, "Allino pulled it out to test it."],
      [54.16, 55.02, "Things went dark."],
      [55.56, 56.24, "He put it back."],
      [57.4, 58.46, "Classic adventurer logic."],
      [58.84, 61.46, "If the glowing thing works, leave it in."],
      [62.58, 69.6, "Further down, a flooded stair with eleven old bodies on the dry steps and something large,"],
      [70.14, 72.84, "slimy, and blind in the black water."],
      [74.1, 77.48, "Biggy lassoed a corpse out like a cowboy went fishing."],
      [78.08, 80.58, "The thing came for it and then turned back."],
      [81.36, 83.82, "And on the body, you found an old harness,"],
      [84.32, 86.82, "a stone cup, and a second key."],
      [88, 92.48, "That key opened a huge door onto a dead straight gallery,"],
      [93.04, 95.72, "its floor worn an inch deep by footsteps."],
      [96.72, 97.66, "Whose footsteps?"],
      [98.62, 100.62, "You decided not to find out today."],
      [101.5, 102.78, "Wisdom check passed."],
    ],
    [ // paragraph 4
      [0.34, 5.6, "Back in town, you sold about thirty tablets to Serina,"],
      [6.14, 11.44, "at ten gold pieces each, seventy-five gold pieces apiece in town,"],
      [11.74, 13.74, "she thinks, easy money."],
      [14.94, 18.18, "She's sending them off to be translated, a few days."],
      [19.26, 22.88, "You told two militiamen to keep people out of the big hall,"],
      [23.48, 25.66, "and you asked around about the old tower."],
      [25.66, 33.9, "Nobody knows much, which has never stopped Biggy, who now plans to build beds and sleep in it."],
      [34.56, 39.32, "So, Evening of Day 2, coin in your pockets,"],
      [39.94, 44.26, "a blind thing under the quarry, goblin tracks at the fold,"],
      [44.94, 52.98, "something big still out there, a maimed quarryman, a charcoal delivery that's mysteriously late,"],
      [52.98, 59.56, "a Reeve who will want a word, and a promise to a share of the profits to Durrow."],
      [60.4, 61.34, "Sleep well."],
      [62.3, 64, "What could possibly go wrong?"],
    ]
  ]
};
