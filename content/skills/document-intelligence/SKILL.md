---
name: document-intelligence
description: Turn heterogeneous unstructured documents (invoices, contracts, reports, forms) into structured, decision-ready data. Use when a workflow depends on reliable extraction from messy, inconsistent documents at scale.
---

# Document Intelligence

Reliable structured data is the foundation everything downstream sits on. Treat extraction as
a data-quality problem, not a prompting trick.

## Approach

- **Normalize before you reason.** Run OCR and layout parsing (Azure Document Intelligence)
  and reduce every format to a common representation before an LLM sees the page. Garbage in
  poisons everything after it.
- **Extract against a schema.** Drive extraction with an explicit Pydantic schema. Never
  accept free-form JSON from the model; validate types, enums, and formats on the way out and
  reject what does not fit.
- **Score confidence and route.** Attach a per-field confidence signal and send only the
  low-confidence fields to a human. Reviewing everything defeats the point of automating.
- **Assume heterogeneity.** No two vendors format things the same. Prefer a few robust,
  general extractors over one brittle template per document type.

## Defaults

- A tight schema removes more ambiguity than a longer prompt ever will.
- Measure accuracy per field, not per document — one wrong total sinks the whole record.

## Evidence

- High-throughput contract extraction turning heterogeneous documents into structured data.
- A veterinary platform parsing invoices and reports into a queryable schema.

## Stack

`Azure Document Intelligence` · `OCR` · `LLMs` · `Pydantic` · `Python`
