# Images — where to put them

**This folder is empty on purpose.** The guide was built before the art was
generated, and nothing in it breaks because a file is absent.

## What to do

Drop finished image files into this folder (`assets/img/`) using **exactly**
the filenames the guide asks for. **No code changes, no regeneration.** Every
placeholder frame in the guide resolves itself the next time you open the page.

Each pending image shows a dashed frame carrying **the exact filename it wants**
and **which § of `Session 1 Prep — Visual Assets (WP15)` generates it**. If you
are not sure what a frame wants, open the page and read the frame.

## Format

- **Prefer `.webp`.** `.png` also works — the guide tries `.png` automatically
  if the `.webp` is not there.
- Keep to the aspect ratio the frame reserves, or the image is cropped to fill:
  **portraits 3:4 · maps 4:3 · scenes 16:9 · handouts 5:7**.

## Naming convention

| Kind | Pattern | Example |
|---|---|---|
| Portrait | `npc-<entity-id>.webp` | `npc-bessa-ruddock.webp` |
| Map | `map-<slug>.webp` | `map-greybank-dm.webp` |
| Scene | `scene-<slug>.webp` | `scene-quarry-aperture.webp` |
| Handout | `handout-<slug>.webp` | `handout-watch-glass.webp` |
| Region | `map-region.webp` | — |

The `<entity-id>` in a portrait filename is the entity's `id` in
`assets/entities.js` — for example `bessa-ruddock`, giving
`npc-bessa-ruddock.webp`.

---

## Status of this file

> **PENDING — owned by chunk G8.**
>
> This is the **G0 stub**. The complete manifest — every expected filename, what
> it depicts, and the § of `Session 1 Prep — Visual Assets (WP15)` that generated
> it — is produced by **chunk G8**, once G2–G7 have placed all the image frames
> that the manifest has to list.

### Referenced so far (chunk G0, `index.html` demo section only)

| Filename | Depicts | Source § |
|---|---|---|
| `npc-bessa-ruddock.webp` | Bessa Ruddock, head shepherd — portrait | Visual Assets §2.1 |
| `map-greybank-dm.webp` | DM village map — the priority asset | Visual Assets §3.1 |
