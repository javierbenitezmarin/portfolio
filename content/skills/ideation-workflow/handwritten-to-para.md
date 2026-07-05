---
name: handwritten-to-para
description: 'Ingest handwritten notes into a PARA vault. Use when the user attaches rasterized images (PNGs from GoodNotes / a stylus) of handwritten notes or schemas to file into PARA Projects or Resources, wants a sketch transcribed into a note, or wants a hand-drawn diagram converted to Mermaid or draw.io.'
argument-hint: 'Attach rasterized PNG(s) of handwritten notes'
---

# Handwritten Notes → PARA

> Reference copy of my personal `handwritten-to-para` skill.

Turn rasterized images of handwritten notes and schemas into PARA notes: transcribe the
prose, ROUTE the content to a Project or Resource, and render each diagram at the right
TIER.

Two leading words anchor the run:

- **ROUTE** — the decision of where content lands (Resource by default; a Project only
  when the note reads as a goal with a deadline) and whether it appends to an existing
  note or creates a new one. Heuristics in `routing.md`.
- **TIER** — the diagram fidelity decision. TIER 1 (simple) renders inline as a Mermaid
  fenced block. TIER 2 (complex) becomes a `.drawio` file via the `drawio-skill`.

## Procedure

1. **Read every image.** For each attached PNG, transcribe the handwriting to markdown
   prose and list every diagram/schema you find with a one-line description of each.
   _Done when every region of every image is either transcribed or listed — nothing
   dropped._

2. **Locate the PARA root.** Find the directory holding sibling folders matching
   `N - Projects`, `N - Areas`, `N - Resources`, `N - Archive`. Enumerate the existing
   entries under Projects/ and Resources/. _Done when the root is found and both category
   listings exist._

3. **ROUTE the content.** Pick one destination (Resource default; Project on
   goal+deadline) and decide append-to-existing vs. new note by matching the content
   against the listings from step 2. Consult `routing.md`. _Done when a single destination
   path and an append-or-new choice are chosen._

4. **Confirm before writing.** Present the destination path, append-or-new, and the
   proposed TIER for each diagram. Let the user override any of them. _Done when the user
   approves._

5. **Render diagrams.** For each diagram from step 1: TIER 1 → an inline ` ```mermaid `
   block in the note; TIER 2 → a `.drawio` file (via `drawio-skill`) saved in a
   `diagrams/` subfolder beside the note. _Done when every diagram from step 1 is
   accounted for — the rendered count matches the listed count._

6. **Write the note.** Build it from `note-template.md`: append under a dated heading when
   appending, or create a new file when new. Save each source PNG to an `attachments/`
   folder beside the note. _Done when the note file exists and each source PNG is saved._

7. **Report.** Summarize the note(s) written, diagrams created (with TIER), and where the
   source image(s) were stored. _Done when the summary is shown._

## Conventions

- No YAML frontmatter — PARA notes use a plain `# Heading`. Carry provenance in the footer
  block from the template.
- `attachments/` holds source PNGs; `diagrams/` holds `.drawio` files.
- New notes are flagged `Status: needs-review` in the footer so nothing lands silently.
