---
name: ideation-workflow
description: Capture and refine ideas by hand before formalizing them. Use when starting from a blank page, exploring a design, or turning messy early thinking into structured artifacts and diagrams.
---

# Ideation Workflow

How I go from a vague idea to a clean, reviewable artifact.

## Approach

1. **Think by hand first.** Capture ideas as handwritten notes and sketches on a Samsung
   tablet in GoodNotes. Words, arrows, boxes, half-diagrams — whatever lets the idea flow.
2. **Let it be messy.** The first pass is for divergence, not polish. Rough diagrams are
   fine; the point is to externalise the thinking, not to make it pretty.
3. **Refine with `handwritten-to-para`.** Run my own skill (see the reference below) to
   ingest the rasterized GoodNotes exports, transcribe the prose, and route the content
   into a PARA vault as a Project or a Resource.
4. **Formalise the diagrams.** Simple ones render inline as Mermaid; complex ones become
   `.drawio` files via the draw.io skill.
5. **Ship the artifact.** The output is a clean note plus proper diagrams — ready to
   become a doc, a spec, or code.

## Why this works

- Handwriting lowers the friction of thinking; a keyboard invites premature structure.
- Separating capture from refinement keeps divergence and convergence from fighting.
- Automating the transcribe-and-route step means messy notes don't rot — they become
  artifacts.

## Reference

- `handwritten-to-para.md` — my own skill that turns GoodNotes exports into PARA notes and
  draw.io / Mermaid diagrams. Open it from this folder in the explorer.

## Stack

`GoodNotes` · `Samsung tablet` · `PARA` · `draw.io` · `Mermaid`
