---
name: Document Intelligence
---

# Document Intelligence

> Turning heterogeneous unstructured documents into structured, decision-ready data.

## When to use

Use this skill when a workflow depends on extracting reliable structured data from messy,
inconsistent documents — invoices, contracts, reports, forms — at scale.

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
