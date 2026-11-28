# The Broken March: instructions for assistants

## The DM Guide is the golden source  *(DM ruling, 28 Nov 2026)*

The DM reads and reviews **the DM Guide** (`The Broken March - DM Guide/`) all the time. They do **not** review the campaign `.md` files after first setup. So:

- **The DM Guide wins over any `.md` file.**
- The `.md` files are **working records**: written and kept up to date by assistants, to track everything.

### Which source wins

1. What the DM says now.
2. Pending entries in `Live Record — Session N.md` (the DM's own words, not yet in the guide).
3. **The DM Guide.** Newer session pages beat older ones: `10-session-three.html`, then `07-session-two.html` and `08-story-so-far.html`, then the reference pages, maps and `assets/entities.js`.
4. Only where the guide is silent: `Canon Amendments` (newest first), the session `.md`, WP01–WP08, the design doc.

Pages `01`–`04` were written before Session 1 was played. When they differ from a later page only because play moved on, that is not a conflict. If you cannot tell, show both and ask.

When the guide and a `.md` file disagree, follow the guide, **tell the DM in one line**, and offer to fix the record.

### Changing things

- **A change is not done until the guide shows it.**
- Pages `07`, `08` and `10` are built from markdown (`tools/build_session_two.py`). Edit the markdown, then rebuild. Never hand-edit them.
- **Before a rebuild, check that the page still matches its markdown** (build to a temporary folder and compare). If the page has something the markdown lacks, the page wins: copy it into the markdown first. Never overwrite it.
- Other guide pages are edited by hand. Keep the matching record in step.

## Other rules

- **This repository is public.** No real player names or personal data. Character names only.
- Commit only when the DM says so. Never push without asking.
- Write plain, simple English in short sentences.
