---
name: Multimodal Fraud Detection
---

# Multimodal Fraud Detection

> Combining Computer Vision with multimodal LLMs to inspect documents and score risk.

## When to use

Use this skill when a document pipeline needs to detect tampering, forgery, or anomalies
that are visual as well as semantic — where text extraction alone misses the fraud.

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
