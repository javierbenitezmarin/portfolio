---
name: document-intelligence
description: Turn heterogeneous unstructured documents (invoices, contracts, reports, forms) into structured, decision-ready data. Use when a workflow depends on reliable extraction from messy, inconsistent documents at scale.
---

# Document Intelligence

Most business documents are a mess: scans, odd layouts, no two vendors the same. This is
about pulling reliable structured data out of that mess so the rest of a system can trust it.

## Approach

1. **Ingest & normalize** — OCR and layout parsing (Azure Document Intelligence) across
   heterogeneous formats.
2. **Extract** — schema-driven extraction with LLMs, validated against Pydantic models.
3. **Verify** — confidence scoring and human-in-the-loop review only where it matters.

## Evidence

- High-throughput contract extraction system converting unstructured documents into
  structured data.
- Veterinary platform parsing invoices and reports into a queryable schema.

## Stack

`Azure Document Intelligence` · `OCR` · `LLMs` · `Pydantic` · `Python`
