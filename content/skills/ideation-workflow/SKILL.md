---
name: ideation-workflow
description: Take an idea from a vague spark to a clean, reviewable artifact. Use when starting from a blank page, exploring a design, or turning messy early thinking into structured artifacts and diagrams.
---

# Ideation Workflow

How a rough idea becomes a real artifact.

## Approach

1. **Think by hand first.** Capture ideas as handwritten notes and sketches (GoodNotes on a
   tablet). Let them flow — words, arrows, boxes, half-diagrams.
2. **Let it be messy.** The first pass is for divergence, not polish. Rough is fine; the point
   is to get the thinking out of your head.
3. **Refine with `handwritten-to-para`.** Run the skill (see the reference below) to ingest the
   GoodNotes exports, transcribe the prose, and route the content into a PARA vault.
4. **Formalise the diagrams.** Simple ones become inline Mermaid; complex ones become `.drawio`
   files via the draw.io skill.
5. **Ship the artifact.** The output is a clean note plus proper diagrams, ready to become a
   doc, a spec, or code.

## Why it works

- Handwriting lowers the friction of thinking; a keyboard invites premature structure.
- Separating capture from refinement keeps divergence and convergence from fighting.
- Automating the transcribe-and-route step means messy notes become artifacts instead of
  rotting in a folder.

## Reference

- `handwritten-to-para.md` — the skill that turns GoodNotes exports into PARA notes and
  draw.io / Mermaid diagrams. Open it from this folder in the explorer.

## Stack

`GoodNotes` · `PARA` · `draw.io` · `Mermaid`
