---
name: multimodal-fraud-detection
description: Combine Computer Vision with multimodal LLMs to inspect documents and score risk. Use when a document pipeline needs to detect tampering, forgery, or anomalies that are visual as well as semantic, where text extraction alone misses the fraud.
---

# Multimodal Fraud Detection

Some fraud only shows up when you look at the document as an image: a tampered field, a font
that does not match, a layout that is slightly off. Text extraction walks right past it. This
pairs computer vision with multimodal LLMs to catch it.

## Approach

1. **Visual inspection** — CV models flag manipulated regions, inconsistent fonts, and
   layout anomalies.
2. **Semantic cross-check** — multimodal LLMs reason over the document as an image plus
   its extracted content.
3. **Risk decision** — fuse signals into an explainable risk level that a reviewer can act on.

## Evidence

- **DocFraud** — hybrid fraud analysis engine deployed within client document-intelligence
  pipelines to reduce manual review.

## Stack

`Computer Vision` · `Multimodal LLMs` · `Python` · `FastAPI` · `AWS`
