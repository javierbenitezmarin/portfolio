---
name: multimodal-fraud-detection
description: Combine Computer Vision with multimodal LLMs to inspect documents and score risk. Use when a document pipeline needs to detect tampering, forgery, or anomalies that are visual as well as semantic, where text extraction alone misses the fraud.
---

# Multimodal Fraud Detection

Some fraud is only visible when you treat the document as an image, not as text. Keep the
pixels in the loop so the signal that text extraction throws away is still on the table.

## Approach

- **Inspect the pixels.** Use CV to flag manipulated regions, copy-paste artifacts,
  inconsistent fonts and kerning, and layout that does not match a genuine template.
- **Cross-check meaning.** Feed the document as an image *plus* its extracted content to a
  multimodal LLM and have it reason about internal consistency — totals that do not add up,
  dates that contradict, an issuer that does not match the format.
- **Fuse into an explainable score.** Combine visual and semantic signals into a single risk
  level with the reasons attached. A reviewer needs the "why", not just a number.
- **Tune to the cost of errors.** A missed fraud usually costs far more than a false alarm.
  Set thresholds around that asymmetry and keep a human on the margin.

## Defaults

- Text-only pipelines miss visual fraud. Always keep the image in the loop.
- When a decision affects a person, explainability is a requirement, not a nice-to-have.

## Evidence

- **DocFraud** — a hybrid fraud-analysis engine deployed inside client document-intelligence
  pipelines to cut manual review.

## Stack

`Computer Vision` · `Multimodal LLMs` · `Python` · `FastAPI` · `AWS`
